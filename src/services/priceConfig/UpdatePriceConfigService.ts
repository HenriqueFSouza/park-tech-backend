import prisma from "../../config/database";
import { AppError } from "../../utils/errors";

interface UpdatePriceConfigInput {
  firstHourPrice?: number;
  additionalHourPrice?: number;
  isActive?: boolean;
  id: string;
}

class UpdatePriceConfigService {
  async execute(input: UpdatePriceConfigInput) {
    const priceConfig = await prisma.priceConfig.findUnique({
      where: {
        id: input.id,
      },
    });

    if (!priceConfig) {
      throw new AppError("Recurso não encontrado", 404);
    }

    if (input.isActive) {
      await prisma.priceConfig.updateMany({
        data: {
          isActive: false,
        },
      });
    }

    await prisma.priceConfig.update({
      where: {
        id: priceConfig.id,
      },
      data: {
        firstHourPrice: input.firstHourPrice,
        additionalHourPrice: input.additionalHourPrice,
        isActive: input.isActive,
      },
    });

    return;
  }
}

export default UpdatePriceConfigService;
