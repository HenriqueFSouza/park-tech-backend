import prisma from "../../config/database";

class GetPricesConfigService {
  async execute() {
    const prices = await prisma.priceConfig.findMany();
    return prices;
  }
}

export default GetPricesConfigService;
