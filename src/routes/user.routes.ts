import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";
import { UserRole } from "../generated/prisma/enums";
import { validateAuth } from "../middlewares/validateAuth";
import { validateRole } from "../middlewares/validateRole";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";

const router = Router();

router.post(
  "/user",
  validateAuth,
  validateRole(UserRole.ADMIN),
  validateSchema(createUserSchema),
  CreateUserController.handle,
);

export default router;
