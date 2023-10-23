import jwt from "jsonwebtoken";
import config from "config"
import { signUp } from "../../v1/controllers/SignUp";



export function signJWT(
    payload: object,
    keyName: string,
    options?: jwt.SignOptions | undefined
) {
    // const signingKey = Buffer.from(
    //     config.get<string>(keyName),
    //     "base64"
    // ).toString("ascii")
    const signingKey = keyName

    // console.log(signingKey)

    return jwt.sign(payload, signingKey, {
        ...(options && options)
    })
}

export function verifyJWT(
    token: string,
    keyName: string
) {
    const publicKey = keyName
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


