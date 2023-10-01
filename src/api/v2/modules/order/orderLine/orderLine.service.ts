import { prisma } from "../../../../v1/server"
import { decrementProdItem, getProductItem } from "../../productItem/productItem.service"
import { cartItem, orderWithLine } from "../order.types"

 /**
     * Creates order lines for each item in the cart.
     * 
     * @param items - An array of cart items.
     * @param orderId - The ID of the order.
     * @returns An array of order lines created for each item in the cart.
     * @throws Error if the product's quantity in stock is 0.
*/
export async function createOrderLines(items: Array<cartItem>, orderId: string) {
   
    let result: Array<orderWithLine> = []

    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const qty = item.qty
        const prodItem = await getProductItem(item.product_item_id)
        if (prodItem?.qty_in_stock === 0) {
            throw new Error()
        }
        const itemPrice = prodItem?.price as number
        const lineCost = itemPrice * qty
        const orderLine = await prisma.order_line.create({
            data: {
                order_id: orderId,
                price: lineCost,
                product_item_id: item.id,
                qty
            },
            include: {
                product_item: true,
            }
        })
        await decrementProdItem(item.product_item_id, qty)

        result.push(orderLine)
    }

    return result
}


export async function deleteLineItem(id:string){
    try {
        const lineItem = await prisma.order_line.delete({
            where:{id}
        })
        return lineItem
    } catch (e) {
        
    }
}


