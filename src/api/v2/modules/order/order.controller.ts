import { Request, Response } from "express";
import { TorderPayload } from "./order.types";
import { createOrder,
     getAllOrders,
      getOrdersByAddress, 
      getOrderById, 
      getUserOrders, 
      updateOrderAddress,
      deleteOrder
} from "./order.service";


export async function createOrderHandler(
    req:Request<{userId:string},{},TorderPayload>,
    res:Response
) {
    const order = await createOrder(req.params.userId, req.body)
    res.send(order)
}

export async function getOrderByIdHandler(
    req:Request<{id:string}>,
    res:Response
){
    const order = await getOrderById(req.params.id)
    res.send(order)
}


export async function getAllOrdersHandler(
    req:Request,
    res:Response
) {
    const orders = await getAllOrders()
    res.send(orders)
}

export async function getOrderByAddressHandler(
    req:Request<{},{},{address:string}>,
    res:Response
) {
    const order = await getOrdersByAddress(req.body.address)
    res.send(order)
}

export async function getUserOrdersHandler(
    req:Request,
    res:Response
) {
    const userId = ''
    const orders = await getUserOrders(userId)
    res.send(orders)
}


export async function updateOrderAddressHandler(
    req:Request<{id:string},{},{address:string}>,
    res:Response
) {
    const orders = await updateOrderAddress(req.params.id, req.body.address)
    res.send(orders)
}

export async function deleteOrderHandler(
    req:Request<{id:string}>,
    res:Response
) {
    const order = await deleteOrder(req.params.id)
    res.send(order)
}