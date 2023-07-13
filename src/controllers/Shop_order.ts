import { Request, Response } from "express";
import { prisma } from "../server";


export const createOrder = async (req: Request, res: Response) => {

    const userId = req.user.id

    const cart = await prisma.shopping_cart.findFirst({
        where: {
            userId
        },
        include: {
            shopping_cart_item: true
        }
    })

    if (cart && cart.shopping_cart_item.length > 0) {

        let items = cart.shopping_cart_item

        // const total = items.reduce((item)=>{
        //    return item.
        // })

        const newOrder = await prisma.shop_order.create({
            data: {
                shiping_address_id: "",
                userId: "",
                payment_method_id: "",
                shipping_method_id: "",
                order_status_id: "",
                order_total: 123,
                order_date: Date.now().toString(),
            },
    
        })

        for(let i = 0; i< items.length; i++){

            const itemPrice =  await prisma.product_item.findUnique({
                where:{
                    id:items[i].product_item_id
                }
            })

            const itemTotalPrice = itemPrice?.price ? itemPrice.price * items[i].qty : null

            const orderLine = await prisma.order_line.create({
                data: {
                    order_id:newOrder.id,
                    qty:items[i].qty,
                    price:items[i].qty * Number(itemPrice?.price),
                    product_item_id: ''
                }
            })
        }

        res.send(newOrder)

        // cart.shopping_cart_item.forEach((item:{}) => {

        // })
    }

}