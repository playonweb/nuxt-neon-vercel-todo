# Neon CLI (`neonctl`) Advanced Cheatsheet

If you are working across multiple projects or organizations, the default commands might not target the correct resources. Use this guide to manage specific projects and branches.

## 👤 Authentication & Context

### Login
```bash
neon auth
```

### List Organizations & Projects
To find the IDs you need:
```bash
# List all projects you have access to
neon projects list

# List organizations
neon orgs list
```

### Set Default Context
Avoid typing `--project-id` in every command by pinning your current work to a specific project:
```bash
# Set project context
neon set-context --project-id <project-id>

# Set organization and project context
neon set-context --org-id <org-id> --project-id <project-id>
```

---

## 🌿 Branching Strategy

### Create a Branch from a Specific Project
If you haven't set a context, you must specify the project:
```bash
neon branches create --name dev/your-name --project-id <project-id>
```

### Create a Branch from a Specific Parent
By default, branches are created from the `main` branch. To branch from another (e.g., `staging` or `dev/base`):
```bash
neon branches create --name dev/feature-x --parent <parent-branch-name-or-id>
```

### List All Branches in a Project
```bash
neon branches list --project-id <project-id>
```

---

## 🔗 Connection Strings

### Get Connection String for a Specific Branch
```bash
neon connection-string <branch-name-or-id> --project-id <project-id>
```

### Reset a Branch (Data Wipe)
Useful for starting fresh in a dev environment:
```bash
neon branches reset <branch-name-or-id> --project-id <project-id>
```

---

## 🛠️ Global Flags

| Flag | Description |
| :--- | :--- |
| `--project-id <id>` | Target a specific project. |
| `--org-id <id>` | Target a specific organization. |
| `--output json` | Get machine-readable output. |
| `--help` | See all available flags for any command. |

---

> [!TIP]
> You can find your **Project ID** in the Neon Console under **Settings > General**. IDs typically look like `fancy-fog-123456`.
