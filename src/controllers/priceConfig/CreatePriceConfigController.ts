import { Request, Response } from "express";
import CreatePriceConfigService from "../../services/priceConfig/CreatePriceConfigService";

class CreatePriceConfigController {
  async handle(req: Request, res: Response) {
    const input = req.body;

    const service = new CreatePriceConfigService();
    const response = await service.execute(input);

    res.status(201).json(response);
  }
}

export default new CreatePriceConfigController();
