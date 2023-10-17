import { Request, Response } from "express";
import { validateHash } from "../user/user.service";
import {
  createSession,
  findAllSessions,
  findSessions,
  updateSession,
} from "./session.service";
import { signJWT, verifyJWT } from "../../utils/jwt.utils";
import config from "config";
import { loginCredentials } from "../user/user.types";
import { verify } from "jsonwebtoken";
import { requestTimer } from "../../metrics/metrics";
import { logger } from "../../utils/logger";
import ApiError from "../../utils/error";

export async function createSessionHandler(
  req: Request<{}, {}, loginCredentials>,
  res: Response
) {
  //validate password
  const user = await validateHash(req.body);

  if (!user) {
    return res.status(401).send("invalid email or password");
  }
  //create session

  const session = await createSession({
    userId: user.id,
    userAgent: req.get("user-agent") || " ",
  });

  //create access token

  const accessToken = signJWT(
    { ...user, session: session.id },
    process.env.SECRET as string,
    { expiresIn: config.get("accessTokenTtl") }
  );

  //create refresh token

  const refreshToken = signJWT(
    { ...user, session: session.id },
    process.env.SECRET as string,
    { expiresIn: config.get("refreshTokenTtl") }
  );

  res.cookie("accessToken", accessToken,{
    maxAge:9000,
    httpOnly:true
  });

  res.cookie("refreshToken", refreshToken,{
      maxAge:9000000,
      httpOnly:true
  });

  const { decoded } = verifyJWT(
    accessToken,
    process.env.SECRET as string
  );

  return res.send(decoded);
}

export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = res.locals.user.id;

  const sessions = await findSessions({ userId, valid: true });

  return res.send(sessions);
}

export async function findAllSessionsHandler(req: Request, res: Response) {
  const session = await findAllSessions();
  res.send(session);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  try {
    const sessionId = res.locals.user.session;

  await updateSession({ id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}
