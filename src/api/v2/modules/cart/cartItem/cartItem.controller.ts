import { Request,Response } from "express";
import { decreaseCartItemQty, deleteCartItem, increaseCartItemQty } from "./cartItem.service";


export async function increaseItemQtyHandler(
    req:Request<{cartId:string, itemId:string}>,
    res:Response
){
    const item = await increaseCartItemQty(
        req.params.cartId,
         req.params.itemId
         )
    res.send(item)

}

export async function decreaseCartItemQtyHandler(
    req:Request<{cartId:string, itemId:string}>,
    res:Response
){
    const item = await decreaseCartItemQty(
        req.params.cartId,
         req.params.itemId
         )
    res.send(item)
}

export async function deleteCartItemHandler(
    req:Request<{itemId:string}>,
    res:Response
){
    const item = await deleteCartItem(
         req.params.itemId
         )
    res.send(item)
}

