
export interface userCredentials {
    email: string,
    password: string
}

export interface user {
    email:string,
    token:string |null,
    id:string,
    password:string
}

export interface address {
    unitNumber: string,
    streetAddress: string,
    addressLine1?: string,
    addressLine2?: string,
    city: string,
    region: string,
    postalCode: string,
    countryId: string,
}

export interface userAddress{
    addressId:string,
    isDefault:boolean
}

export interface userReview {
    orderedProductId:string,
    ratingValue: number,
    comment: string
}

export interface paymentMethodType {
    paymentTypeId:string,
    provider:string,
    accountNumber:string,
    expiryDate:string,
    isDefault:boolean
}

