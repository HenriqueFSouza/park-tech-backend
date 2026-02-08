import prisma from "../../config/database";
import { AppError } from "../../utils/errors";

interface UpdateParkingRecordInput {
  plate?: string;
  model?: string;
  color?: string;
  id: string;
}

class UpdateParkingRecordService {
  async execute(input: UpdateParkingRecordInput) {
    const parkingRecord = await prisma.parkingRecord.findUnique({
      where: {
        id: input.id,
      },
    });

    if (!parkingRecord) {
      throw new AppError("Recurso não encontrado", 404);
    }

    await prisma.parkingRecord.update({
      where: {
        id: parkingRecord.id,
      },
      data: {
        color: input.color,
        plate: input.plate,
        model: input.model,
      },
    });

    return;
  }
}

export default UpdateParkingRecordService;
