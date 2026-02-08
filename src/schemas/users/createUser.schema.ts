import z from "zod";
import { UserRole } from "../../generated/prisma/enums";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(UserRole).optional(),
});
