import { Request, Response } from "express";
import GetPricesConfigService from "../../services/priceConfig/GetPricesConfigService";

class GetPricesConfigController {
  async handle(_req: Request, res: Response) {
    const service = new GetPricesConfigService();
    const response = await service.execute();
    return res.status(200).json(response);
  }
}

export default new GetPricesConfigController();
