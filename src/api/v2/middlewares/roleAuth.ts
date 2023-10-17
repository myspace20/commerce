import { Request, Response, NextFunction } from "express";

export default async function roleAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = res.locals.user;
  console.log(user)

  if (user.role !== "Admin") {
    return res.status(403).send("Forbiden, access required");
  }

  return next();
}
