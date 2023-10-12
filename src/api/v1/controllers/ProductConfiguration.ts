import { Request, Response } from "express";
import { prisma } from "../server"



export const addProductVariants = async (req: Request, res: Response) => {

    const { product_item_id, value } = req.body

    const newProductVariant = await prisma.product_configuration.create({
      data:{
        product_item_id,
        variation_option_id:"",
        
      },
      include:{
        
      }
    })
}


export const updateProductConfig = async(req:Request, res:Response)=>{

    const updatedProductConfig = await prisma.product_configuration.update({
        where:{
            product_item_id_variation_option_id:{
                product_item_id:"",
                 variation_option_id:""
            }
        },
        data:{
           variation_option_id:""
        }
    })
}


export const deleProductConfig = async(req:Request, res:Response)=>{

    const deleteProductConfig = await prisma.product_configuration.delete({
        where:{
            product_item_id_variation_option_id:{
                product_item_id:"",
                 variation_option_id:""
            }
        }
    })
}


export const getProductConfig = async(req:Request, res:Response)=>{


    const AllProductConfigs = await prisma.product_item.findMany({
        include:{
            variation_options:true
        }
    })

}