import { Request, Response } from "express";
import { prisma } from "../server";



export const createProductItem = async (req: Request, res: Response) => {

    const user = req?.user

    const newProductItem = await prisma.product_item.create({
        data: {
            SKU: "111",
            qty_in_stock: 1,
            price: 12,
            product_image: 'hff',
            product_id: 'b6c82d47-917f-4589-848a-6921a1e6c54f',
        }
    })

    res.send(newProductItem)
}


export const getProductItem = async (req: Request, res: Response) => {

    const id = req.body

    const productItem = await prisma.product_item.findFirst({
        where: {
            product_id: id
        },
        select:{
            variation_options:true
        }
    })
}

export const updateProductItem = async (req: Request, res: Response) => {

    const { productItemId } = req.body

    const updatedProductItem = await prisma.product_item.update({
        where:{
            id:productItemId
        },
        data:{
            SKU: "",
            qty_in_stock: 1,
            price: 12,
            product_image: '',
            product_id: ''
        }
    })
}

export const deleteProductItem = async(req:Request, res:Response) =>{
    
    const { productItemId } = req.body

    const deletedProductItem = await prisma.product_item.delete({
        where:{
            id:productItemId
        }
    })

}