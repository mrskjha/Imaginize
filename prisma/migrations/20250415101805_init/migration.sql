-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "plan" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "creditBalance" DROP NOT NULL;
