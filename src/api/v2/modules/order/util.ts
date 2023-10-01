import { Shopping_cart_item } from "@prisma/client"
import { getProductItem } from "../productItem/productItem.service"
import { cartItem } from "./order.types"


export async function calcSubTotal(items:Array<cartItem>) {
    let total = 0.00

    for(let i = 0; i < items.length; i++){
        const item = items[i]
        const prodItem = await getProductItem(item.product_item_id) 
        const itemPrice = prodItem?.price as number
        const qty = item.qty
        const itemTotal = itemPrice  * qty

        total += itemTotal
    }

    return total
}

