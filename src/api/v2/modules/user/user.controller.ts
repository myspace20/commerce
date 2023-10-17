import { Request, Response } from "express";
import { createUserInput } from "./user.types";
import { createUser, findUserByEmail, updateUser } from "./user.service";

export async function createUserHandler(
  req: Request<{}, {}, createUserInput>,
  res: Response
) {
  const user = await createUser(req.body);
  return res.send(user);
}

export async function updateUserHandler(
  req: Request<{}, {}, { email: string }>,
  res: Response
) {
  const user = await updateUser(req.body.email);
  return res.send(user);
}

export async function findUserByEmailHandler(
  req: Request<{}, {}, { email: string }>,
  res: Response
) {
  const user = await findUserByEmail(req.body.email);
  res.send(user);
}
