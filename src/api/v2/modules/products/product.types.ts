
export interface product {
    categoryId:string,
    name:string,
    description:string,
    productImage:string
}


export interface productParams{
    id:string
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