/*
  Warnings:

  - Made the column `plan` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `photo` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `planId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creditBalance` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "plan" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "photo" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "planId" SET NOT NULL,
ALTER COLUMN "creditBalance" SET NOT NULL;
