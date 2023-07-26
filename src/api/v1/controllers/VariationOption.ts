import { Request, Response } from "express"
import { prisma } from "../server"



export const createVariationOption = async (req: Request, res: Response) => {

    const { variation_id, value } = req.body

    const newVariationOption = await prisma.variation_option.create({
        data:{
            value,
            variation:{
                connect:{id:variation_id}
            }
        }
    })
}

export const updateVariationOption = async(req:Request, res:Response)=>{

    const { id, value } = req.body

    const updatedVariationOption = await prisma.variation_option.update({
        where:{
            id
        },
        data:{
            value
        }
    })
}


export const getVariationOption = async(req:Request, res:Response)=>{
    
    const variationOptions = await prisma.variation_option.findMany({})
}


export const deleteVariationOption = async(req:Request, res:Response)=>{

    const { id } = req.body

    const deletedVariationOPtion = await prisma.variation_option.delete({
        where:{
            id
        }
    })
}