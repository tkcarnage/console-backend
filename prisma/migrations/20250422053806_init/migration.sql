-- CreateEnum
CREATE TYPE "AccessDurationType" AS ENUM ('FIXED', 'INDEFINITE');

-- CreateTable
CREATE TABLE "cnsl_group" (
    "id" VARCHAR(30) NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "cnsl_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "avatar" TEXT,
    "title" TEXT,
    "department" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app" (
    "id" VARCHAR(30) NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "logo" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),
    "ownerId" VARCHAR(30),

    CONSTRAINT "app_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policy" (
    "id" VARCHAR(30) NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "appId" VARCHAR(30) NOT NULL,
    "visibleToEveryone" BOOLEAN NOT NULL DEFAULT false,
    "accessDurationType" "AccessDurationType" NOT NULL,
    "accessDurationDays" INTEGER,
    "useAppOwnerAsReviewer" BOOLEAN NOT NULL DEFAULT false,
    "approvalSteps" JSONB NOT NULL DEFAULT '[]',
    "revocationSteps" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PolicyVisibleGroups" (
    "A" VARCHAR(30) NOT NULL,
    "B" VARCHAR(30) NOT NULL,

    CONSTRAINT "_PolicyVisibleGroups_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_UserGroups" (
    "A" VARCHAR(30) NOT NULL,
    "B" VARCHAR(30) NOT NULL,

    CONSTRAINT "_UserGroups_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PolicyReviewers" (
    "A" VARCHAR(30) NOT NULL,
    "B" VARCHAR(30) NOT NULL,

    CONSTRAINT "_PolicyReviewers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PolicyVisibleUsers" (
    "A" VARCHAR(30) NOT NULL,
    "B" VARCHAR(30) NOT NULL,

    CONSTRAINT "_PolicyVisibleUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "_PolicyVisibleGroups_B_index" ON "_PolicyVisibleGroups"("B");

-- CreateIndex
CREATE INDEX "_UserGroups_B_index" ON "_UserGroups"("B");

-- CreateIndex
CREATE INDEX "_PolicyReviewers_B_index" ON "_PolicyReviewers"("B");

-- CreateIndex
CREATE INDEX "_PolicyVisibleUsers_B_index" ON "_PolicyVisibleUsers"("B");

-- AddForeignKey
ALTER TABLE "app" ADD CONSTRAINT "app_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policy" ADD CONSTRAINT "policy_appId_fkey" FOREIGN KEY ("appId") REFERENCES "app"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVisibleGroups" ADD CONSTRAINT "_PolicyVisibleGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "cnsl_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVisibleGroups" ADD CONSTRAINT "_PolicyVisibleGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserGroups" ADD CONSTRAINT "_UserGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "cnsl_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserGroups" ADD CONSTRAINT "_UserGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyReviewers" ADD CONSTRAINT "_PolicyReviewers_A_fkey" FOREIGN KEY ("A") REFERENCES "policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyReviewers" ADD CONSTRAINT "_PolicyReviewers_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVisibleUsers" ADD CONSTRAINT "_PolicyVisibleUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PolicyVisibleUsers" ADD CONSTRAINT "_PolicyVisibleUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
