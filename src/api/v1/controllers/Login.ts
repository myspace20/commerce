import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { prisma } from '../server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { credentialsSchema } from '../validations/user.validation'
dotenv.config()



const secret = process.env.JWT_SECRET as string


export const Login = async (req: Request, res: Response) => {

    

    // try {

    //     if (!email || !password) throw Error("All fields are required")

    //     if (!validator.isEmail(email)) throw Error("Email must be valid")

    //     if (!validator.isStrongPassword(password)) throw Error("Strong password required")

    //     const customer = await prisma.user.findUnique({
    //         where: {
    //             email
    //         }
    //     })

    //     if (!customer) throw Error("No user with such credentials, Please sign up")

    //     const userPassword = customer?.password as string

    //     const match = await bcrypt.compare(password, userPassword)
    //     console.log(match)

    //     if (!match) throw Error("Incorrect password, Please try again")

    //     const id = customer?.id as string

    //     const token = jwt.sign({ id }, secret, {
    //         expiresIn: "1h"
    //     })

    //     const updateToken = await prisma.user.update({
    //         where: {
    //             email
    //         },
    //         data: {
    //             token
    //         }
    //     })



    //     res.status(200).json(updateToken)


    // } catch (error: any) {
    //     res.status(404).json({ error: error.message })
    // }


}