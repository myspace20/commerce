
export interface product {
    categoryId:string,
    name:string,
    description:string,
    productImage:string
}


export interface productItem {
    productId:string,
    SKU:string,
    qtyInStock:number,
    productImage:string,
    price:number
}

export interface productCategory {
    parentCategoryId:string,
    categoryName:string
}

export interface productConfiguration {
    productItemId:string,
    variationOptionId:string,
    value:string,
    variationId:string
}