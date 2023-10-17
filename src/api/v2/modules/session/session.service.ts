import { JwtPayload, verify } from "jsonwebtoken";
import { prisma } from "../../../v1/server";
import { IcreateSession, IfindSessions, IupdateSession } from "./session.types";
import { get, omit } from "lodash";
import { findUserByEmail, findUserById } from "../user/user.service";
import { signJWT } from "../../utils/jwt.utils";
import config from "config";
import { SessionModel } from "@prisma/client";
import ApiError from "../../utils/error";
import { logger } from "../../utils/logger";

export async function createSession({ userId, userAgent }: IcreateSession) {
  try {
    const session = await prisma.sessionModel.create({
      data: { userAgent, userId },
    });

    return session;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function findSessions(query: IfindSessions) {
  try {
    const sessions = await prisma.sessionModel.findFirst({
      where: { userId: query.userId, valid: query.valid },
    });
    return sessions;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function findAllSessions() {
  try {
    const session = await prisma.sessionModel.findMany({});
    return session;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function updateSession(
  query: Pick<IupdateSession, "id">,
  update: Pick<IupdateSession, "valid">
) {
  try {
    const session = await prisma.sessionModel.update({
      where: { id: query.id },
      data: { valid: update.valid },
    });
    return session;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function reIssueAccessToken(refreshToken: string) {
  const { decoded } = verify(
    refreshToken,
    process.env.ACCESS_PUBLIC_KEY as string
  ) as JwtPayload;

  if (!decoded || !get(decoded, "session")) return false;

  const sessionId = decoded;

  const session = (await prisma.sessionModel.findUnique({
    where: sessionId,
  })) as SessionModel;

  if (!sessionId || !session.valid) return false;

  const user = omit(await findUserById(session.userId), "password");

  if (!user) return false;

  const accessToken = signJWT(
    { ...user, session: sessionId },
    "accessTokenPrivateKey",
    { expiresIn: config.get("accessTokenTtl") }
  );

  return accessToken;
}
