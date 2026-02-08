import prisma from "../../config/database";

interface GetParkingRecordInput {
  search?: string;
}

class GetParkingRecordService {
  async execute(input: GetParkingRecordInput) {
    const searchTerm = input.search;
    const parkingRecord = await prisma.parkingRecord.findMany({
      where: {
        ...(searchTerm && {
          OR: [
            { plate: { contains: searchTerm, mode: "insensitive" } },
            { model: { contains: searchTerm, mode: "insensitive" } },
          ],
        }),
      },
    });

    return parkingRecord;
  }
}

export default GetParkingRecordService;
