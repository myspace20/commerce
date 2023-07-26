import { Request, Response } from "express";
import { prisma } from "../server";


export const createShippingMethod = async(req:Request, res:Response)=>{

    const newShippingmethod = await prisma.shipping_method.create({
        data:{
            name:"",
            price:1
        }
    })
}

export const getShippingMethods = async(req:Request, res:Response)=>{

    const shippingMethods = await prisma.shipping_method.findMany({})
}

export const updateShippingMethod = async(req:Request, res:Response)=>{

    const updatedShippingMethod = await prisma.shipping_method.update({
        where:{
            id:""
        },
        data:{}
    })
}

export const deleteShippingMethod = async(req:Request, res:Response)=>{

    const deletedShippingMethod = await prisma.shipping_method.delete({
        where:{
            id:''
        }
    })
}
