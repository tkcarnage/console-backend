# Console Backend Documentation (`console-backend`)

This document provides setup instructions, a summary of the data models, and API endpoints for the `console-backend`.

## Setup and Running

1.  **Environment Variables:**

    - Copy the example `.env.example` file (if one exists) or create a `.env` file in the `console-backend` root.
    - Fill in the necessary environment variables, primarily the database connection URL:

      ```dotenv
      # Example PostgreSQL Connection URL
      DATABASE_URL="postgresql://your_db_user:your_db_password@localhost:5433/console_db?schema=public"

      # Server Port (Optional, defaults to 3000 if not set)
      PORT=3000
      ```

    - **Important:** You will also need to define the `ADMIN_USER_ID` in `.env` (or update the hardcoded value in `src/controllers/policy.controller.ts` and `prisma/seed.ts`) and ensure the `ADMIN_EMAIL` in `prisma/seed.ts` is correct.

2.  **Dependencies:**

    - Navigate to the `console-backend` directory.
    - Install dependencies: `npm install` (or `yarn install` or `pnpm install`).

3.  **Database Setup:**

    - Ensure your PostgreSQL server is running and accessible with the credentials provided in `.env`.
    - Apply the Prisma schema to your database: `npx prisma db push`

4.  **Database Seeding:**

    - Seed the database with initial data (apps, users, groups, admin user, sample policies): `npx prisma db seed`
    - The seed script (`prisma/seed.ts`) creates an admin user (defined by `ADMIN_USER_ID_SEED` and `ADMIN_EMAIL` constants within the script) and adds this user to all seeded groups.

5.  **Run Development Server:**
    - Start the development server (with hot-reloading via Nodemon): `npm run dev`
    - The server will typically be available at `http://localhost:3000` (or the port specified in `.env`).

## Data Models (`prisma/schema.prisma`)

The backend uses Prisma with a PostgreSQL database. The main models are:

### `cnsl_group`

Represents a group of users.

- `id`: String (Primary Key, CUID)
- `name`: String? (Nullable)
- `description`: String? (Nullable)
- `note`: String? (Nullable)
- `createdAt`, `updatedAt`: DateTime (Timestamps)
- `deletedAt`: DateTime? (Timestamp, for soft deletes)
- **Relations:**
  - `visiblePolicies`: Many-to-Many with `policy` (Policies visible to this group)
  - `members`: Many-to-Many with `user` (Users belonging to this group)

### `user`

Represents an individual user. Includes a seeded Admin user.

- `id`: String (Primary Key, CUID)
- `email`: String (Unique)
- `firstName`, `lastName`: String
- `avatar`, `title`, `department`: String? (Nullable)
- `createdAt`, `updatedAt`: DateTime (Timestamps)
- `deletedAt`: DateTime? (Timestamp, for soft deletes)
- **Relations:**
  - `ownedApps`: One-to-Many with `app` (Apps owned by this user)
  - `reviewingPolicies`: Many-to-Many with `policy` (Policies this user reviews)
  - `visiblePolicies`: Many-to-Many with `policy` (Policies visible to this user)
  - `groups`: Many-to-Many with `cnsl_group` (Groups this user belongs to)

### `app`

Represents an application that policies can apply to.

- `id`: String (Primary Key, CUID)
- `name`: String
- `url`, `logo`: String? (Nullable)
- `createdAt`, `updatedAt`: DateTime (Timestamps)
- `deletedAt`: DateTime? (Timestamp, for soft deletes)
- `ownerId`: String? (Foreign Key to `user.id`)
- **Relations:**
  - `owner`: One-to-Many with `user` (The user who owns the app)
  - `policies`: One-to-Many with `policy` (Policies associated with this app)

### `policy`

Represents an access policy for an application.

- `id`: String (Primary Key, CUID)
- `name`, `description`: String?
- `appId`: String (Foreign Key to `app.id`)
- `visibleToEveryone`: Boolean (Default: `false`)
- `accessDurationType`: Enum `AccessDurationType`
- `accessDurationDays`: Int? (Nullable, used when type is `FIXED`)
- `useAppOwnerAsReviewer`: Boolean (Default: `false`)
- `approvalSteps`: Json (Default: `[]`, list of approval steps)
- `revocationSteps`: Json (Default: `[]`, list of revocation steps)
- `createdAt`, `updatedAt`: DateTime (Timestamps)
- `deletedAt`: DateTime? (Timestamp, for soft deletes)
- **Relations:**
  - `app`: Many-to-One with `app`
  - `reviewers`: Many-to-Many with `user` (Explicit reviewers)
  - `visibleGroups`: Many-to-Many with `cnsl_group` (Groups this policy is visible to)
  - `visibleUsers`: Many-to-Many with `user` (Users this policy is visible to)

### Enum: `AccessDurationType`

Defines the type of access duration for a policy.

- `FIXED`: Access lasts for `accessDurationDays`.
- `INDEFINITE`: Access does not expire automatically.

## API Endpoints (`src/routes/`, `src/controllers/`)

All endpoints are prefixed with `/api` (defined in `src/app.ts`).

### Policies (`/policies`)

- **`GET /`**: `listPolicies`
  - Description: Get a list of policies based on visibility rules.
  - Query Params:
    - `userId` (optional): If provided, returns policies visible to this user (directly, via group, or `visibleToEveryone`). If the `userId` matches the configured `ADMIN_USER_ID`, all non-deleted policies are returned.
  - If `userId` is omitted, returns only policies with `visibleToEveryone: true`.
- **`POST /`**: `createPolicy`
  - Description: Create a new policy.
  - Body: Expects policy details.
- **`GET /:id`**: `getPolicyById`
  - Description: Get a single policy by its ID.
- **`PUT /:id`**: `updatePolicy`
  - Description: Update an existing policy by ID.
  - Body: Expects fields to update.
- **`DELETE /:id`**: `deletePolicy`
  - Description: Soft delete a policy by ID (sets the `deletedAt` field).

### Apps (`/apps`)

- **`GET /`**: `listApps`
  - Description: Get a list of all non-deleted apps.
- **`GET /:id`**: `getAppById`
  - Description: Get a single app by ID.

### Users (`/users`)

- **`GET /`**: `listUsers`
  - Description: Get a list of all non-deleted users (basic info).
- **`GET /:id`**: `getUserById`
  - Description: Get a single user by ID (basic info).

### Groups (`/groups`)

- **`GET /`**: `listGroups`
  - Description: Get a list of all non-deleted groups.
- **`GET /:id`**: `getGroupById`
  - Description: Get a single group by ID.
