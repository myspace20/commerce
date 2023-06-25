import { Request, Response } from "express";
import { prisma } from "../server";



export const createProduct = async(req:Request, res:Response)=>{

    const {name, description } = req.body
    
    const newProduct =  await prisma.product.create({
        data:{
            name:'',
            description:'',
            product_image:"",
            category_id:'',
        }
    })
}


export const updateProduct = async(req:Request, res:Response)=>{

    const data = req.body

    const updatedProduct = await prisma.product.update({
        where:{
            id:req.body.id
        },
        data
    })
}


export const deleteProduct = async(req:Request, res:Response)=>{
    const { id } = req.body

    const deletedProduct = await prisma.product.delete({
        where:{
            id
        }
    })
}


export const getProducts = async(req:Request, res:Response)=>{

    const getAllProducts = await prisma.product.findMany({})
}