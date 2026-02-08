-- CreateEnum
CREATE TYPE "ParkingStatus" AS ENUM ('ACTIVE', 'FINISHED');

-- CreateTable
CREATE TABLE "ParkingRecord" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "exitAt" TIMESTAMP(3),
    "totalValue" DECIMAL(10,2) NOT NULL,
    "status" "ParkingStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParkingRecord_pkey" PRIMARY KEY ("id")
);
