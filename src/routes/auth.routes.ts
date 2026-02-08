import { Router } from "express";
import LoginController from "../controllers/auth/LoginController";
import CreateUserController from "../controllers/users/CreateUserController";
import { validateSchema } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/users/createUser.schema";

const router = Router();

router.post("/login", LoginController.handle);

router.post(
  "/register",
  validateSchema(createUserSchema),
  CreateUserController.handle,
);

export default router;
