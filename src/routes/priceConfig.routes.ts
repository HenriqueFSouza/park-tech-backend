import { Router } from "express";
import CreatePriceConfigController from "../controllers/priceConfig/CreatePriceConfigController";
import GetPricesConfigController from "../controllers/priceConfig/GetPricesConfigController";
import UpdatePriceConfigController from "../controllers/priceConfig/UpdatePriceConfigController";
import { UserRole } from "../generated/prisma/enums";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { validateSchema } from "../middlewares/validateSchema";
import { createPriceConfigSchema } from "../schemas/priceConfig/createPriceConfig.schema";
import { updatePriceConfigSchema } from "../schemas/priceConfig/updatePriceConfig.schema";

const router = Router();

router.post(
  "/price-config",
  validateAuth,
  validateRole(UserRole.ADMIN),
  validateSchema(createPriceConfigSchema),
  CreatePriceConfigController.handle,
);

router.get(
  "/price-config",
  validateAuth,
  validateRole(UserRole.ADMIN),
  GetPricesConfigController.handle,
);

router.put(
  "/price-config/:id",
  validateAuth,
  validateRole(UserRole.ADMIN),
  validateSchema(updatePriceConfigSchema),
  UpdatePriceConfigController.handle,
);

export default router;
