import { Request, Response } from "express";
import UpdatePriceConfigService from "../../services/priceConfig/UpdatePriceConfigService";

class UpdatePriceConfigController {
  async handle(req: Request, res: Response) {
    const input = req.body;
    const priceConfigId = req.params.id;

    const service = new UpdatePriceConfigService();
    await service.execute({ id: priceConfigId, ...input });

    return res.status(200).json();
  }
}

export default new UpdatePriceConfigController();
