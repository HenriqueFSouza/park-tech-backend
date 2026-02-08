import prisma from "../../config/database";
import { AppError } from "../../utils/errors";

class GetActivePriceConfigService {
  async execute() {
    const price = await prisma.priceConfig.findFirst({
      where: {
        isActive: true,
      },
    });

    if (!price) {
      throw new AppError("Recurso não encontrado", 404);
    }
    return price;
  }
}

export default GetActivePriceConfigService;
