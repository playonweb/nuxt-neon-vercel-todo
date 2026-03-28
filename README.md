# Nuxt + Neon + Vercel Todo App

A modern, full-stack Todo application built with [Nuxt 3](https://nuxt.com), [Neon Postgres](https://neon.tech), and [Drizzle ORM](https://orm.drizzle.team), designed for deployment on [Vercel](https://vercel.com).

## 🚀 Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com)
- **Database**: [Neon Postgres](https://neon.tech) (Serverless & Auto-scaling)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team) with PostgreSQL dialect
- **Deployment**: [Vercel](https://vercel.com)

---

## 🛠️ Local Development

### 1. Prerequisites

- Node.js (v18+)
- A [Neon](https://neon.tech) database account

### 2. Environment Variables

Create a `.env` file in the root of your project and add your database connection string:

```bash
# Copy the example file
cp .env.example .env
```

Edit the `.env` file with your credentials:

```bash
DATABASE_URL=your_neon_database_url_here
```

### 3. Installation

Install the project dependencies:

```bash
# Using npm
npm install
```

### 4. Database Setup

Before running the app, you need to generate and apply migrations to your database:

```bash
# Generate migrations from your schema
npm run db:generate

# Apply migrations to your database
npm run db:migrate
```

### 5. Start Development Server

Run the application in development mode:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🏗️ Production Environment

### Building for Production

On every production build, the project will automatically apply database migrations to ensure your schema is up-to-date:

```bash
# This command runs `nuxt build` and then `npm run db:migrate`
npm run build
```

### Deployment on Vercel

1.  Push your code to a GitHub repository.
2.  Import the project to Vercel.
3.  Add the `DATABASE_URL` environment variable in the Vercel project settings.
4.  Vercel will automatically detect the build command and deploy your application.

### Previewing Production Build Locally

You can preview the production build on your local machine:

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot-reloading. |
| `npm run build` | Builds the app for production and applies database migrations. |
| `npm run db:generate` | Generates a new migration from your schema definitions. |
| `npm run db:migrate` | Runs all pending database migrations. |
| `npm run preview` | Locally previews the production build. |
| `npm run generate` | Generates a static version of your project. |
| `npm run postinstall` | Prepares the project for development (runs automatically). |

---

For more details, refer to the [Nuxt 3 Documentation](https://nuxt.com/docs).
