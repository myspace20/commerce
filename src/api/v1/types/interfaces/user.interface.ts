
export interface userCredentials {
    email: string,
    password: string
}

export interface userAddress {
    unitNumber: string,
    streetAddress: string,
    addressLine1?: string,
    addressLine2?: string,
    city: string,
    region: string,
    postalCode: string,
    countryId: string
}

export interface userReview {
    orderedProductId:string,
    ratingValue: number,
    comment: string
}