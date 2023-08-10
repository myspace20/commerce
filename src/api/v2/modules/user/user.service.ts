import { prisma } from "../../../v1/server";
import { omit } from 'lodash'
import { createUserInput, loginCredentials } from "./user.types";
import { compareHash } from "../../utils/hash_password.utils";
import { Prisma } from "@prisma/client";



export async function createUser(payload: createUserInput) {
    try {

        const exists = await findUser(payload.email)
        if (exists) throw Error("user already exists")
        const user = await prisma.user.create({
            data: payload
        })
        return omit(user, 'password')
    } catch (e: any) {
        throw new Error(e)
    }
}


export async function validateHash({
    email,
    password
}: loginCredentials) {
    const user = await findUser(email)

    if (!user) return false

    const hash = user.password

    const isValid = await compareHash(password, hash)

    if (!isValid) return false

    return omit(user, 'password')
}

export async function findUser(email: string) {
    return await prisma.user.findUnique({ where: { email } })
}

export async function findUserById(id: string) {
    return await prisma.user.findUnique({ where: { id } })
}