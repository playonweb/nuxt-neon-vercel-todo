# Nuxt + Neon + Vercel Todo App

A modern, full-stack Todo application built with [Nuxt 3](https://nuxt.com), [Neon Postgres](https://neon.tech), and [Drizzle ORM](https://orm.drizzle.team), designed for deployment on [Vercel](https://vercel.com).

## 🚀 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com)
- **Database**: [Neon Postgres](https://neon.tech) (Serverless & Auto-scaling)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team) with PostgreSQL dialect
- **Deployment**: [Vercel](https://vercel.com)

---

## 🛠️ Local Development (Dev)

### 1. Prerequisites

- Node.js (v18+)
- [pnpm](https://pnpm.io/) (Recommended)
- [Neon CLI](https://neon.tech/docs/reference/cli) (`neonctl`)

### 2. Neon CLI & Branching Setup

To stay organized, use dedicated branches for development. If you are working across multiple projects or organizations, refer to the [Neon CLI Cheatsheet](./neonctl-cheatsheet.md) for advanced commands (`--project-id`, `--org-id`, etc.).

```bash
# 1. Install Neon CLI
npm install -g neonctl

# 2. Authenticate
neonctl auth

# 3. Create a development branch
neonctl branches create --name dev/your-name

# 4. Get your connection string
neonctl connection-string dev/your-name
```

### 3. Environment Variables

Create a `.env` file in the root of your project:

```bash
cp .env.example .env
```

Edit your `.env` with the development branch connection string:

```bash
DATABASE_URL='postgresql://[user]:[password]@[endpoint]/[dbname]'
NODE_ENV=development
```

### 4. Installation & Database Setup

```bash
# Install dependencies
pnpm install

# Generate migrations from your schema
pnpm db:generate

# Apply migrations to your development branch
pnpm db:migrate
```

### 5. Start Development Server

```bash
pnpm dev
```
The app will be available at `http://localhost:3000`.

---

## 🏗️ Deployment Environments

### 🌕 Staging Environment

Use a dedicated staging branch in Neon for testing before production:

1.  **Create Staging Branch**: `neonctl branches create --name staging --parent main`
2.  **Vercel Configuration**: Set up a "Preview" environment in Vercel.
3.  **Environment Variables**: Use the staging branch connection string for `DATABASE_URL`.
4.  **Database Strategy**: Migrations run automatically during build.

### 🌑 Production Environment (Prod)

1.  **Main Branch**: The `main` branch in Neon serves as the production database.
2.  **Vercel Deployment**: Link your GitHub `main` branch to Vercel production.
3.  **Automatic Migrations**: On every production build, the project runs:
    ```bash
    # This command runs `nuxt build` and then `pnpm db:migrate`
    pnpm build
    ```
4.  **Security**: Ensure `DATABASE_URL` is set as a secret in Vercel.

---

## 📜 Available Scripts (pnpm)

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the development server with hot-reloading. |
| `pnpm build` | Builds the app for production and applies database migrations. |
| `pnpm db:generate` | Generates a new migration from your schema definitions. |
| `pnpm db:migrate` | Runs all pending database migrations. |
| `pnpm preview` | Locally previews the production build. |
| `pnpm generate` | Generates a static version of your project. |

---

## 💡 Troubleshooting & Tips

- **Reset Data**: Reset your dev branch if you need to start fresh: 
  `neonctl branches reset dev/your-name`
- **Feature Branches**: For large features, create dedicated branches:
  `neonctl branches create --name dev/auth-system --parent main`
- **WebSocket vs HTTP**: The app is configured in `server/utils/db.ts` to support both `drizzleClientHttp` and `drizzleClientWs`.

For more details, refer to the [Nuxt 3 Documentation](https://nuxt.com/docs).
