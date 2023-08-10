import { JwtPayload, verify } from "jsonwebtoken";
import { prisma } from "../../../v1/server";
import { IcreateSession, IfindSessions, IupdateSession } from "../../types/session.types";
import { get, omit } from "lodash";
import { findUser, findUserById } from "../user/user.service";
import { signJWT } from "../../utils/jwt.utils";
import config from "config";
import { SessionModel } from "@prisma/client";


export async function createSession({ userId, userAgent }: IcreateSession) {
    const session = await prisma
        .sessionModel
        .create({ data: { userAgent, userId } })

    return session
}


export async function findSessions(query: IfindSessions) {
    return await prisma
        .sessionModel
        .findFirst({
            where: { userId: query.userId, valid: query.valid }
        })
}

export async function updateSession(
    query: Pick<IupdateSession, "id">,
    update: Pick<IupdateSession, 'valid'>
) {
    return await prisma
        .sessionModel.update({
            where: { id: query.id },
            data: { valid: update.valid }
        })
}

export async function reIssueAccessToken({
    refreshToken
}: {
    refreshToken: string
}) {
    const { decoded } = verify(refreshToken, "refreshTokenPublicKey") as JwtPayload

    if (!decoded || !get(decoded, "session")) return false

    const sessionId = get(decoded, "session")

    const session = await prisma.
        sessionModel
        .findUnique({ where: sessionId }) as SessionModel

    if (!sessionId || !session.valid) return false

    const user = omit(await findUserById(session.userId), "password")

        if(!user) return false

    const accessToken = signJWT(
        {...user, session:sessionId},
        "accessTokenPrivateKey",
        { expiresIn: config.get("accessTokenTtl")}
    )

    return accessToken

} 