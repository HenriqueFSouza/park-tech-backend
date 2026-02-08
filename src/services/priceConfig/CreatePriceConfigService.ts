import prisma from "../../config/database";

interface PriceConfigInput {
  firstHourPrice: number;
  additionalHourPrice: number;
}

class CreatePriceConfigService {
  async execute(input: PriceConfigInput) {
    await prisma.priceConfig.updateMany({
      data: {
        isActive: false,
      },
    });

    const config = await prisma.priceConfig.create({
      data: {
        firstHourPrice: input.firstHourPrice,
        additionalHourPrice: input.additionalHourPrice,
      },
    });

    return config;
  }
}

export default CreatePriceConfigService;
