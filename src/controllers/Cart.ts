import { Request, Response } from "express";
import { prisma } from "../server";


export const addToCart = async (req: Request, res: Response) => {

    const user = req.user

    const userId = user.id


    // const newCart = await prisma.shopping_cart.create({
    //     data: {
    //         userId,
    //         id:'pp'
    //     }
    // })

    let cart = await prisma.shopping_cart.findFirst({
        where: {
            userId
        }
    })







}