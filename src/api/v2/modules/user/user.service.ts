import { prisma } from "../../../v1/server";
import { omit } from 'lodash'
import { createUserInput, loginCredentials } from "./user.types";
import { compareHash } from "../../utils/hash_password.utils";



export async function createUser(payload: createUserInput) {
    try {
        const exists = await findUserByEmail(payload.email)
        if (exists) throw Error("user already exists")
        const user = await prisma.user.create({
            data: payload
        })
        return omit(user, 'password')
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function updateUser(email: string) {
    try {
        const user = await findUserByEmail(email)
        if (!user) throw Error()
        const updatedUser = await prisma.user.update({
            where: { email: user.email},
            data: { role: "admin" }
        })
        return omit(updatedUser, "password")
    } catch (e) {
        
    }
}


export async function validateHash({
    email,
    password
}: loginCredentials) {
    const user = await findUserByEmail(email)

    if (!user) return false

    const hash = user.password

    const isValid = await compareHash(password, hash)

    if (!isValid) return false

    return omit(user, 'password')
}

export async function findUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        return user
    } catch (e) {

    }
}

export async function findUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({ where: { id } })
        return user
    } catch (e) {

    }
}