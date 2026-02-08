import bcrypt from "bcrypt";
import prisma from "../../config/database";
import { UserRole } from "../../generated/prisma/enums";
import { AppError } from "../../utils/errors";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

class CreateUserService {
  async execute(input: CreateUserInput) {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: input.email,
      },
    });

    if (existingUser) {
      throw new AppError("Email já utilizado!");
    }

    const hashedPassword = await bcrypt.hash(input.password, 8);

    await prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        role: input.role,
        password: hashedPassword,
      },
    });

    return;
  }
}

export default CreateUserService;
