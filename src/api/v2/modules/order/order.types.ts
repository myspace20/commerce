export type cartItem = {
    cartId: string,
    qty: number,
    product_item_id: string,
    id: string
}

export type Torder = {
    userId:string
    payment_method_id: string,
    shipping_method_id: string,
    order_status_id: string,
    order_total: number,
    shipping_address_id:string
}

export type TorderPayload = Omit<Torder,"userId">

export type orderWithLine = TorderLine & TorderLine


export type TorderLine ={
    order_id:string,
    qty:number,
    price:number,
    product_item_id:string
}   