
export type TpayMethodParam = {
    id:string
}

export type TpayMethod = {
    paymentTypeId: string,
    accountNumber: string,
    provider: string,
    expiryDate: Date,
    isDefault: boolean
}