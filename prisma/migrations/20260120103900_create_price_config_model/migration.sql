-- CreateTable
CREATE TABLE "PriceConfig" (
    "id" TEXT NOT NULL,
    "firstHourPrice" DECIMAL(65,30) NOT NULL,
    "additionalHourPrice" DECIMAL(65,30) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceConfig_pkey" PRIMARY KEY ("id")
);
