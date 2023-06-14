import { Prisma } from '@prisma/client'
import {Router, NextFunction} from 'express'
import {Request, Response} from 'express'
import { prisma } from '../server'



const userRoute = Router()

userRoute.get('/',async(req:Request, res:Response)=>{

    const users = await prisma.user.findMany({
        // where:{
        // },
        // include:{
        //     Post:true
        // }
    })

    console.log(users)
    res.status(200).json({users})
})


export default userRoute