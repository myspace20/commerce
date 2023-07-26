import { Request, Response } from "express";
import { prisma } from "../server";


export const createVariation = async (req: Request, res: Response) => {

    const { name, category_id } = req.body

    const newVariation = await prisma.variation.create({
        data: {
            name: "",
            category_id: '',
        }
    })
}


export const getVariation = async (req: Request, res: Response) => {
    
    const allVariations = await prisma.variation.findMany({})
}


export const updateVariation = async (req:Request, res:Response)=>{
    
    const { id } = req.body

    const updatedVariation = await prisma.variation.update({
        where:{
            id,
        },
        data:req.body
    })
}


export const deleteVariation = async(req:Request, res:Response)=>{

    const { id } = req.body

    const deletedVariation = await prisma.variation.delete({
        where:{
            id
        }
    })
}