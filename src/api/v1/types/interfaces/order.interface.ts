
export interface order {
    orderDate: Date,
    paymentMethodId: string,
    shippingAddressId: string,
    shippingMethodId: string,
    orderTotal: number,
    orderStatusId: string
}