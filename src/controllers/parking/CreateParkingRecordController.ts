import { Request, Response } from "express";
import CreateParkingRecordService from "../../services/parking/CreateParkingRecordService";

class CreateParkingRecordController {
  async handle(req: Request, res: Response) {
    const input = req.body;
    const userId = req.user?.id;

    const service = new CreateParkingRecordService();
    const response = await service.execute({ userId, ...input });

    return res.status(201).json(response);
  }
}

export default new CreateParkingRecordController();
