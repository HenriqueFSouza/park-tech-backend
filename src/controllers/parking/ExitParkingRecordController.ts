import { Request, Response } from "express";
import ExitParkingRecordService from "../../services/parking/ExitParkingRecordService";

class ExitParkingRecordController {
  async handle(req: Request, res: Response) {
    const parkingRecordId = req.params.id as string;
    const userId = req.user?.id as string;
    const service = new ExitParkingRecordService();
    await service.execute({ id: parkingRecordId, userId });

    return res.status(200).json();
  }
}

export default new ExitParkingRecordController();
