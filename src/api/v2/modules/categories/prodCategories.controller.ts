import { Request, Response } from "express";
import { prodCategory, prodSubCategory, prodSubCategoryParams } from "./prodCategories.types";
import { createProdCategory, createSubCategory, deleteCategory, deleteSubCategory, getCategories, getCategory, getSubCategories, getSubCategory, updateCategory, updateSubCategory } from "./prodCategories.service";


export async function createProdCategoryHandler(
    req: Request<{}, {}, prodCategory>,
    res: Response
) {
    const prodCategory = await createProdCategory(req.body)
    res.status(201).json(prodCategory)
}

export async function createSubCategoryHandler(
    req:Request<{id:string}, {} , prodSubCategory>,
    res:Response
){
    const subCategory = await createSubCategory(req.body,req.params.id)
    res.status(201).json(subCategory)
}

export async function getCategoriesHandler(
    req:Request,
    res:Response
){
    const categories = await getCategories()
    res.status(200).json(categories)
}

export async function getSubCategoriesHandler(
    req:Request<{id:string}>,
    res:Response
){
    const subCategories = await getSubCategories(req.params.id)
    res.status(200).json(subCategories)
}

export async function getCategoryHandler(
    req:Request<{id:string}>,
    res:Response
){
    const category = await getCategory(req.params.id)
    res.send(category)
}

export async function getSubCategoryHandler(
    req:Request<{id:string}>,
    res:Response
){
    const subCategory = await getSubCategory(req.params.id)
    res.send(subCategory)
}


export async function updateCategoryHandler(
    req:Request<{id:string}, {}, prodCategory>,
    res:Response
){
    const updatedCategory = await updateCategory(req.body,req.params.id)
    res.send(updatedCategory)
}

export async function updateSubCategoryHandler(
    req:Request<{id:string}, {}, prodSubCategory>,
    res:Response
){
    const updatedSubCategory = await updateSubCategory(req.body,req.params.id)
    res.send(updatedSubCategory)
}

export async function deleteCategoryHandler(
    req:Request<{id:string}>,
    res:Response
){
    const deletedCategory = await deleteCategory(req.params.id)
    res.send(deletedCategory)
}

export async function deleteSubCategoryHandler(
    req:Request<{id:string}>,
    res:Response
){
    const deletedSubCategory = await deleteSubCategory(req.params.id)
    res.send(deletedSubCategory)
}

