import { Request, Response } from "express";
import { ParkingStatus } from "../../generated/prisma/enums";
import GetParkingRecordService from "../../services/parking/GetParkingRecordService";

class GetParkingRecordsController {
  async handle(req: Request, res: Response) {
    const search = req.query.search as string;
    const status = req.query.status as ParkingStatus;
    const service = new GetParkingRecordService();
    const response = await service.execute({ search, status });

    return res.status(200).json(response);
  }
}

export default new GetParkingRecordsController();
