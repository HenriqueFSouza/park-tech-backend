import { Request, Response } from "express";
import GetDashboardService from "../../services/dashboard/GetDashboardService";

class DashboardCotroller {
  async handle(req: Request, res: Response) {
    const period = req.query.period as "today" | "week" | "all" | "month";

    const servie = new GetDashboardService();
    const response = await servie.execute({ period });

    return res.status(200).json(response);
  }
}

export default new DashboardCotroller();
