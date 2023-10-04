export type cartItem = {
    cartId: string,
    qty: number,
    product_item_id: string,
    id: string
}

export type orderParams = {
    id:string
}

export type Taddress = {
    address:string
}

export type Torder = {
    userId:string
    paymentMethodId: string,
    shippingMethodId: string,
    orderTotal: number,
    shippingAddressId:string
}

export type TorderPayload = Omit<Torder,"userId">

export type orderWithLine = TorderLine & TorderLine


export type TorderLine ={
    order_id:string,
    qty:number,
    price:number,
    product_item_id:string
}   