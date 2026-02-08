import prisma from "../../config/database";
import { ParkingStatus } from "../../generated/prisma/enums";
import { AppError } from "../../utils/errors";

interface CreateParkingRecordInput {
  plate: string;
  model: string;
  color: string;
  userId: string;
}

class CreateParkingRecordService {
  async execute(input: CreateParkingRecordInput) {
    const existingRecord = await prisma.parkingRecord.findFirst({
      where: {
        plate: input.plate,
        status: ParkingStatus.ACTIVE,
      },
    });

    if (existingRecord) {
      throw new AppError("Carro já registrado", 409);
    }

    const parkingRecord = await prisma.parkingRecord.create({
      data: {
        plate: input.plate,
        model: input.model,
        color: input.color,
        entryUserId: input.userId,
      },
    });

    return parkingRecord;
  }
}

export default CreateParkingRecordService;
