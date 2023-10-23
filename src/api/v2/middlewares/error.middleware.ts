import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/error";
import { ValidationError } from "yup";
import { logger } from "../utils/logger";

export const errorMiddleware = async (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status;
  const message = error.message || "something went wrong";

  if (error instanceof ValidationError) {
    res.status(status).json({ error: error.errors });
  }
  logger.error(error);
  res.status(status).json({ error: message});

  return next(error.message);
};
