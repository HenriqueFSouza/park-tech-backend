import { Router } from "express";
import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";
import parkingRoutes from "./parking.routes";
import priceConfigRouotes from "./priceConfig.routes";
import userRoutes from "./user.routes";

const router = Router();

router.use(userRoutes);
router.use(authRoutes);
router.use(priceConfigRouotes);
router.use(parkingRoutes);
router.use(dashboardRoutes);

export default router;
