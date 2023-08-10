import { Request, Response } from "express";
import validator from "validator"
import { prisma } from "../server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv"
dotenv.config()



const secret = process.env.JWT_SECRET as string

export const signUp = async (req: Request, res: Response) => {

    const { email, password } = req.body

    try {
        const customer = await prisma.user.findUnique({
            where: {
                email
            }
        })


        if (customer) throw Error("User already exists")

        if (!email || !password) throw Error("All fields are required !")

        if (!validator.isStrongPassword(password)) throw Error("Strong password required !")

        if (!validator.isEmail(email)) throw Error("Email is not valid !")

        const hashedPasword = await bcrypt.hash(password, 10)

        const createUser = await prisma.user.create({
            data: {
                email,
                password: hashedPasword
            }
        })

        const id = createUser?.id as string

        const token = jwt.sign({ id }, secret, {
            expiresIn: "1h"
        })

        // const registeredUser = await prisma.user.update({
        //     where: {
        //         email
        //     },
        //     data: {
        //         token
        //     }
        // })

        const all = await prisma.user.findMany({})

        console.log(all)

        // res.status(201).json(registeredUser)

    } catch (error: any) {

        res.status(404).json({ error: error.message })
    }


}