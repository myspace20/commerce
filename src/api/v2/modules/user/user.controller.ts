import { Request, Response } from 'express'
import { createUserInput } from './user.types'
import { createUser, updateUser } from './user.service'



export async function createUserHandler(
    req: Request<{}, {}, createUserInput>,
    res: Response
) {
    try {
        const user = await createUser(req.body)
        return res.send(user)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function updateUserHandler(
    req: Request<{}, {}, { email: string }>,
    res: Response
) {
    try {
        const user = await updateUser(req.body.email)
        return res.send(user)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}