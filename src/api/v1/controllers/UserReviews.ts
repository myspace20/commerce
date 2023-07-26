import { Request, Response } from "express";
import { prisma } from "../server";



export const createUserReview = async(req:Request, res:Response)=>{
    const newReview = await prisma.user_review.create({
        data:{
            userId:'',
            ordered_product_id:'',
            rating_value:1,
            comment:''
        }
    })
}

export const getUserReviews = async(req:Request, res:Response)=>{
    const userReviews = await prisma.user_review.findMany({
        where:{
            userId:''
        }
    })
}

export const getAllUserReviews = async(req:Request, res:Response)=>{
    const allUserReviews = await prisma.user_review.findMany({})
}

export const updateUserReview = async(req:Request, res:Response)=>{
    const updatedUserReview = await prisma.user_review.update({
        where:{
            id:''
        },
        data:{}
    })
}

export const deleteUserReview = async(req:Request, res:Response)=>{
    const deletedUserReview = await prisma.user_review.delete({
        where:{
            id:""
        }
    })
}