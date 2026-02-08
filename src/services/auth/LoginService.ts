import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../config/database";
import { AppError } from "../../utils/errors";

interface LoginInput {
  email: string;
  password: string;
}

class LoginService {
  async excute(input: LoginInput) {
    const user = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!user) {
      throw new AppError("Email ou senha incorretos!", 401);
    }

    const passwordMatch = await bcrypt.compare(input.password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorretos!", 401);
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new AppError("JWT secret is not configured", 500);
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      secret,
      {
        expiresIn: "1d",
      },
    );

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return {
      token,
      user: safeUser,
    };
  }
}

export default LoginService;
