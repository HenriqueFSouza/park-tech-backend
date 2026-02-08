import { Request, Response } from "express";
import GetParkingRecordService from "../../services/parking/GetParkingRecordService";

class GetParkingRecordsController {
  async handle(req: Request, res: Response) {
    const search = req.query.search as string;
    const service = new GetParkingRecordService();
    const response = await service.execute({ search });

    return res.status(200).json(response);
  }
}

export default new GetParkingRecordsController();
