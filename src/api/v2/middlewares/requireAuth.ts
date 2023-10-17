import { Request, Response, NextFunction } from "express";

export default async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = res.locals.user;
  console.log(user)

  if (!user) {
    return res.status(403).send("Please login");
  }

  return next();
}
