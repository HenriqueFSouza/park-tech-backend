import { Request, Response } from "express";
import UpdateParkingRecordService from "../../services/parking/UpdateParkingRecordService";

class UpdateParkingRecordController {
  async handle(req: Request, res: Response) {
    const input = req.body;
    const parkRecordId = req.params.id;

    const service = new UpdateParkingRecordService();
    await service.execute({ id: parkRecordId, ...input });

    return res.status(200).json();
  }
}

export default new UpdateParkingRecordController();
