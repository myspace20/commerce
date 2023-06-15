import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { prisma } from '../server'

dotenv.config()

declare module "express-serve-static-core" {
    interface Request {
        user?: any;
    }
}

const secret = process.env.JWT_SECRET as string


export const authorization = async (req: Request, res: Response, next:NextFunction) => {

        const { authorization } = req.headers

        if(!authorization){
            res.status(401).json({error:"Request is not authorized"})
        }

    try {

        const token = req.headers.authorization?.split(' ')[1] as string

        const { id } = jwt.verify(token, secret) as JwtPayload

        console.log(id)

        const user = prisma.user.findUnique({
            where: {
                id
            }
        })

        req.user = user
        
        next()

    } catch (error: any) {

        res.status(401).json({error:error.message})
    }




}