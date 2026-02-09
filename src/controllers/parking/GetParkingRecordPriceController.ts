import { Request, Response } from "express";
import GetParkingRecordPriceService from "../../services/parking/GetParkingRecordPriceService";

class GetParkingRecordPriceController {
  async handle(req: Request, res: Response) {
    const parkingRecordId = req.params.id as string;
    const service = new GetParkingRecordPriceService();
    const response = await service.execute({ id: parkingRecordId });

    return res.status(200).json(response);
  }
}

export default new GetParkingRecordPriceController();
