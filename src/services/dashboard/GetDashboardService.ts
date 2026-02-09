import prisma from "../../config/database";
import { ParkingStatus } from "../../generated/prisma/enums";

interface GetDashboardInput {
  period: "today" | "week" | "all" | "month";
}

class GetDashboardService {
  async execute(input: GetDashboardInput) {
    const period = input.period;
    const startDate = this.getStartDate({ period });

    const activeVehicles = await prisma.parkingRecord.count({
      where: {
        status: ParkingStatus.ACTIVE,
      },
    });

    const totalEntries = await prisma.parkingRecord.count({
      where: {
        createdAt: { gte: startDate }, // grater then and equal
      },
    });

    const totalExits = await prisma.parkingRecord.count({
      where: {
        status: ParkingStatus.FINISHED,
        createdAt: { gte: startDate }, // grater then and equal
      },
    });

    const totalRevenue = await prisma.parkingRecord.aggregate({
      _sum: {
        totalValue: true,
      },
      where: {
        status: ParkingStatus.FINISHED,
        createdAt: { gte: startDate },
      },
    });

    return {
      activeVehicles,
      totalEntries,
      totalExits,
      totalRevenue: totalRevenue._sum.totalValue,
    };
  }

  private getStartDate({ period }: GetDashboardInput) {
    const now = new Date();

    switch (period) {
      case "today":
        return new Date(now.setHours(0, 0, 0, 0));

      case "week":
        return new Date(now.setDate(now.getDate() - 7));

      case "month":
        return new Date(now.setDate(now.getDate() - 30));

      case "all":
      default:
        return undefined;
    }
  }
}

export default GetDashboardService;
