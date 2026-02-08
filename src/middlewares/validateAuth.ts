import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../types/user";
import { AppError } from "../utils/errors";

export const validateAuth = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;

  if (!header) {
    throw new AppError("Token inexistente", 401);
  }

  const token = header.split(" ")[1];

  if (!token) {
    throw new AppError("Token não fornecido", 401);
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new AppError("JWT secret is not configured", 500);
  }

  try {
    const decoded = jwt.verify(token, secret) as UserPayload;

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    return next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
};
