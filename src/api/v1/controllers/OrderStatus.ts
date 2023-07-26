import { Request, Response } from "express";
import { prisma } from "../server";


export const createOrderStatus = async(req:Request, res:Response)=>{

    const newOrderStatus = await prisma.order_status.create({
        data:{
            status:""
        }
    })
}


export const getOrderStatus = async(req:Request, res:Response)=>{

    const orderStatus = await prisma.order_status.findUnique({
        where:{
            id:''
        }
    })
}


export const getAllOrderStatus = async(req:Request, res:Response)=>{

    const orderStatus = await prisma.order_status.findMany({})

}

export const updateOrderStatus = async(req:Request, res:Response)=>{

    const updatedOrderStatus = await prisma.order_status.update({
        where:{
            id:""
        },
        data:{
            status:''
        }
    })
}

export const deleteOrderStatus = async(req:Request, res:Response)=>{

    const deletedOrderStatus = await prisma.order_status.delete({
        where:{
            id:''
        }
    })
}