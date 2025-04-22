-- AlterTable
ALTER TABLE "policy" ADD COLUMN     "provisioningSteps" JSONB NOT NULL DEFAULT '[]';
