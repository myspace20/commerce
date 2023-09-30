import jwt from "jsonwebtoken";
import config from "config"
import { signUp } from "../../v1/controllers/SignUp";



export function signJWT(
    payload: object,
    keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
    options?: jwt.SignOptions | undefined
) {
    const signingKey = Buffer.from(
        config.get<string>(keyName),
        "base64"
    ).toString("ascii")

    console.log(signingKey)

    return jwt.sign(payload, signingKey, {
        ...(options && options),
        algorithm: "RS256"
    })
}

export function verifyJWT(
    token: string,
    keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
) {
    const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
        "ascii"
    );
    try {
        const decoded = jwt.verify(token, publicKey)
        return {
            valid: true,
            expired: false,
            decoded,
        }
    } catch (error: any) {
        return {
            valid: false,
            decoded: null,
            expired: error.message === "jwt expired"
        }
    }
}


