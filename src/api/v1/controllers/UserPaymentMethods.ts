import { Request, Response } from "express";
import { prisma } from "../server";


export const addPaymentmethod = async(req:Request, res:Response)=>{

    const addedPaymentMethod = await prisma.user_payment_method.create({
        data:{
            userId:"",
            payment_type_id:'',
            account_number:'',
            provider:'',
            expiry_date:'',
            is_default:false
        }
    })
}

export const getUserPaymentmethod = async(req:Request, res:Response)=>{

    const userPaymentMethod = await prisma.user_payment_method.findUnique({
        where:{
            id:""
        }
    })
}

export const getUserPaymentmethods = async(req:Request, res:Response)=>{

    const userPaymentMethods = await prisma.user_payment_method.findMany({})
}


export const updateUserPaymentMethod = async(req:Request, res:Response)=>{

    const updatedUserPaymentMethod = await prisma.user_payment_method.update({
        where:{
            id:''
        },
        data:{
        
        }
    })
}


export const deleteUserPaymentmethod = async(req:Request, res:Response)=>{

    const deletedUserPaymentMethod = await prisma.user_payment_method.delete({
        where:{
            id:''
        }
    })
}