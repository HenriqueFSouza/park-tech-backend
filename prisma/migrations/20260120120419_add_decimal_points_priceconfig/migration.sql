/*
  Warnings:

  - You are about to alter the column `firstHourPrice` on the `PriceConfig` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `additionalHourPrice` on the `PriceConfig` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "PriceConfig" ALTER COLUMN "firstHourPrice" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "additionalHourPrice" SET DATA TYPE DECIMAL(10,2);
