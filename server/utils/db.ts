import { neon, neonConfig, Pool } from '@neondatabase/serverless';
import { drizzle as drizzleWs } from 'drizzle-orm/neon-serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import ws from 'ws';
import * as schema from '~/server/db/schema';

let connectionString = process.env.DATABASE_URL!;

// Configuring Neon for local development (e.g. using Localhost Postgres)
if (process.env.NODE_ENV === 'development' && connectionString.includes('localtest.me')) {
  neonConfig.fetchEndpoint = (host) => {
    const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
    return `${protocol}://${host}:${port}/sql`;
  };
  const connectionStringUrl = new URL(connectionString);
  neonConfig.useSecureWebSocket = connectionStringUrl.hostname !== 'db.localtest.me';
  neonConfig.wsProxy = (host) => (host === 'db.localtest.me' ? `${host}:4444/v2` : `${host}/v2`);
}

// Ensure WebSocket constructor is set (required in Node.js)
neonConfig.webSocketConstructor = ws;

const sql = neon(connectionString);
const pool = new Pool({ connectionString });

// Export both HTTP and WebSocket clients
export const db = drizzleHttp(sql, { schema }); // This replaces the original db export
export const dbWs = drizzleWs(pool, { schema });