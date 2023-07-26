import { Request, Response } from "express";
import { prisma } from "../server";



export const createPaymentType = async(req:Request, res:Response)=>{

    const newPaymentType = await prisma.payment_type.create({
        data:{
            value:''
        }
    })
}

export const getPaymentTypes = async(req:Request, res:Response)=>{

    const paymentTypes = await prisma.payment_type.findMany({})
}


export const updatePaymentType = async(req:Request, res:Response)=>{

    const updatedPaymentType = await prisma.payment_type.update({
        where:{
            id:''
        },
        data:''
    })
}

export const deletePaymentType = async(req:Request, res:Response)=>{

    const deletedPaymentType = await prisma.payment_type.delete({
        where:{
            id:""
        }
    })
}