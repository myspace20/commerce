import jwt, { JwtPayload } from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET as string


function verifytoken(token: string) {

    try {

        const { id } = jwt.verify(token, secret) as JwtPayload

        return id

    } catch (error: any) {

        return error
    }

}

export default verifytoken


