import { Request, Response } from "express";
import { prisma } from "../server";


export const addCat = async(req:Request, res:Response)=>{

    const {name} = req.body

    const newCat = await prisma.product_category.create({
        data:{
          name
        }
    })

    console.log(newCat)
}