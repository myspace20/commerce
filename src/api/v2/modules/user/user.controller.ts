import {Request, Response } from 'express'
import { prisma } from '../../../v1/server'
import { createUserInput } from './user.types'
import { createUser } from './user.service'



export async function createUserHandler(
    req:Request<{}, {},createUserInput>,
    res:Response
){
    try {
        const user = await createUser(req.body)
    return res.send(user)
    } catch (e:any) {
        return res.status(409).send(e.message)
    }
}