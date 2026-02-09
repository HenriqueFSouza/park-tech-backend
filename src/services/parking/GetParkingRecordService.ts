import prisma from "../../config/database";
import { ParkingStatus } from "../../generated/prisma/enums";

interface GetParkingRecordInput {
  search?: string;
  status?: ParkingStatus;
}

class GetParkingRecordService {
  async execute(input: GetParkingRecordInput) {
    const searchTerm = input.search;
    const status = input.status;
    const parkingRecord = await prisma.parkingRecord.findMany({
      where: {
        ...(searchTerm && {
          OR: [
            { plate: { contains: searchTerm, mode: "insensitive" } },
            { model: { contains: searchTerm, mode: "insensitive" } },
          ],
        }),
        ...(status && { status }),
      },
    });

    return parkingRecord;
  }
}

export default GetParkingRecordService;
