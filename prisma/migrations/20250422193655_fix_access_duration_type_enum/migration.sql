/*
  Warnings:

  - The values [FIXED] on the enum `AccessDurationType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccessDurationType_new" AS ENUM ('FIXED_WEEK', 'FIXED_MONTH', 'FIXED_YEAR', 'FIXED_CUSTOM', 'INDEFINITE');
ALTER TABLE "policy" ALTER COLUMN "accessDurationType" TYPE "AccessDurationType_new" USING ("accessDurationType"::text::"AccessDurationType_new");
ALTER TYPE "AccessDurationType" RENAME TO "AccessDurationType_old";
ALTER TYPE "AccessDurationType_new" RENAME TO "AccessDurationType";
DROP TYPE "AccessDurationType_old";
COMMIT;
