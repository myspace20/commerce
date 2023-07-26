import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET as string


function signtoken(id :string) {

    try {

        const token = jwt.sign({ id }, secret, {
            expiresIn: "1h"
        })

        return token

    } catch (error:any) {

        return error
    }

}

export default signtoken