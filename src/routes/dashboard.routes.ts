import { Router } from "express";
import DashboardCotroller from "../controllers/dashboard/DashboardCotroller";
import { UserRole } from "../generated/prisma/enums";
import { validateAuth } from "../middlewares/validateAuth";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";
import { validateRole } from "../middlewares/validateRole";
import { getDashboardSchema } from "../schemas/dashboard/getDashboard.schema";

const router = Router();

router.get(
  "/dashboard",
  validateAuth,
  validateRole(UserRole.ADMIN),
  validateQuerySchema(getDashboardSchema),
  DashboardCotroller.handle,
);

export default router;
