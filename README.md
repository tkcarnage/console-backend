# Console Backend (`console-backend`)

This project provides the backend API for the Console policy management application.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
- **Database:** You need a running PostgreSQL instance. You have two options:
  - **Option A: Docker (Recommended):** Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/). The project includes a `docker-compose.yml` file to easily spin up a PostgreSQL container.
  - **Option B: Local/Remote Instance:** Have connection details for an existing PostgreSQL server.

## Getting Started

1.  **Clone the Repository:**

    ```bash
    # If you haven't already cloned the main project
    git clone <repository-url>
    cd <repository-folder>/console-backend
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Environment Variables:**

    - Create a `.env` file in the `console-backend` root directory by copying `.env.example`.
    - Populate the `.env` file. **Crucially, the database details here must match the database you intend to use (either the Docker container or your separate instance).**

      ```dotenv
      # Example PostgreSQL Connection URL for Docker Compose default settings:
      DATABASE_URL="postgresql://postgres:password@localhost:5433/console_db?schema=public"

      # Example Server Port:
      PORT=3000
      ```

    - The `docker-compose.yml` file uses these environment variables if they exist, otherwise it falls back to defaults (`postgres`/`password`/`console_db` on host port `5433`).
    - **Admin User:** The seed script (`prisma/seed.ts`) defines credentials for an admin user (`ADMIN_USER_ID_SEED`, `ADMIN_EMAIL`). The policy controller (`src/controllers/policy.controller.ts`) uses a corresponding `ADMIN_USER_ID` constant to grant full visibility. Ensure these IDs/emails match, and preferably manage the controller's `ADMIN_USER_ID` via an environment variable as well.

4.  **Start the Database (if using Docker):**

    - If you chose **Option A (Docker)** in Prerequisites, start the PostgreSQL container:

      ```bash
      docker compose up -d
      ```

      The `-d` flag runs the container in the background. The database will be available on the host port specified in `docker-compose.yml` (defaulting to `5433`).

    - If you chose **Option B (Local/Remote Instance)**, ensure your PostgreSQL server is running.

5.  **Database Setup & Seeding:**

    - Apply the database schema using Prisma:

      ```bash
      npx prisma db push
      ```

      This synchronizes your database schema with `prisma/schema.prisma`.

    - Populate the database with initial data:

      ```bash
      npx prisma db seed
      ```

## Running the Development Server

To start the backend server with hot-reloading for development:

```bash
npm run dev
```

The server will start, typically listening on `http://localhost:3000` (or the `PORT` specified in your `.env` file).

## Available Scripts

In the `package.json`, you will find several scripts:

- `npm run dev`: Starts the development server using `nodemon` and `ts-node`.
- `npm run build`: Compiles the TypeScript code to JavaScript in the `dist` directory.
- `npm start`: Starts the production server from the compiled code in `dist`.
- `npx prisma ...`: Various Prisma commands for database migrations, schema pushing, studio, etc.
- `npm run seed`: Executes the database seed script (`prisma/seed.ts`).

## Project Structure

- `prisma/`: Contains the Prisma schema (`schema.prisma`) and seeding script (`seed.ts`).
- `src/`: Contains the application source code.
  - `controllers/`: Request handlers for API routes.
  - `routes/`: Defines API endpoints and maps them to controllers.
  - `utils/`: Utility functions (e.g., Prisma client instance).
  - `generated/`: Contains the auto-generated Prisma client.
  - `app.ts`: Express application setup (middleware, routes).
  - `index.ts`: Server entry point.
- `.env`: Environment variables (ignored by Git).
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Project dependencies and scripts.

## API Endpoints Overview

All endpoints are prefixed with `/api`.

- **Policies (`/policies`)**
  - `GET /`: List policies (with user-based visibility).
  - `POST /`: Create a new policy.
  - `GET /:id`: Get a specific policy.
  - `PUT /:id`: Update a specific policy.
  - `DELETE /:id`: Soft delete a specific policy.
- **Apps (`/apps`)**
  - `GET /`: List all apps.
  - `GET /:id`: Get a specific app.
- **Users (`/users`)**
  - `GET /`: List all users.
  - `GET /:id`: Get a specific user.
- **Groups (`/groups`)**
  - `GET /`: List all groups.
  - `GET /:id`: Get a specific group.

Refer to `backend.md` for more detailed data model and API descriptions.

## Technology Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
