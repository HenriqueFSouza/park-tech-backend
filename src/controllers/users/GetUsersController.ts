import { Request, Response } from "express";
import GetUsersService from "../../services/users/GetUsersService";

class GetUsersController {
  async handle(_req: Request, res: Response) {
    const service = new GetUsersService();
    const response = await service.execute();

    res.status(200).json(response);
  }
}

export default new GetUsersController();
