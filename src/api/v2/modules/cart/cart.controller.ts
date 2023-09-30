import { Request, Response } from "express";
import { addToCart, deleteCart, getUserCart, } from "./cart.service";


export async function getUserCartHandler(
    req: Request,
    res: Response
) {
    const userid = ''
    const cart = await getUserCart(userid)
    res.send(cart)
}

export async function addToCartHandler(
    req: Request<{id:string},{}>,
    res: Response
) {
    const userid = ''
    const cart = await addToCart(req.params.id, userid)
    res.send(cart)
}

export async function deleteCartHandler(
    req:Request<{id:string}>,
    res:Response
){
    const cart = await deleteCart(req.params.id)
    res.send(cart)
}

export async function deleteCartsHandler(
    req:Request<{id:string}>,
    res:Response
){
    const cart = await deleteCart(req.params.id)
    res.send(cart)
}