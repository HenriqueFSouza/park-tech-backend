import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";
import GetUsersController from "../controllers/users/GetUsersController";
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

router.get(
  "/users",
  validateAuth,
  validateRole(UserRole.ADMIN),
  GetUsersController.handle,
);

export default router;
