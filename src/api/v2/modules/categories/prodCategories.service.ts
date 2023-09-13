import { prisma } from "../../../v1/server";
import { prodCategory, prodCategoryParams, prodSubCategory, prodSubCategoryParams } from "./prodCategories.types";


export async function createProdCategory(payload:prodCategory){
    try{
        const category = await prisma.product_category.create({
            data:{
                name:payload.name
            }
        })
        return category
    }catch(e){

    }
}

export async function createSubCategory(payload:prodSubCategory, id:prodCategoryParams){
    try {
        const subCategory = await prisma.product_category.create({
            data:{
                name:payload.name,
                parent_category:{connect:id}
            }
        })
        return subCategory
    } catch (e) {
        
    }
}

export async function getCategories() {
    try{
        const categories = await prisma.product_category.findMany({})
        return categories
    }catch(e){

    }
}

export async function getSubCategories(id:prodCategoryParams) {
    try{
        const subCategories = await prisma.product_category.findMany({
            where:id,
            include:{
                subCategory:true
            }
        })
        return subCategories
    }catch(e){

    }
}

export async function getCategory(id:prodCategoryParams) {
    try {
        const category = await prisma.product_category.findUnique({
            where:id
        })
        return category
    } catch (e) {
        
    }
}

export async function getSubCategory(id:prodSubCategoryParams) {
    try {
        const subCategory = await prisma.product_category.findUnique({
            where:id
        })
        return subCategory
    } catch (e) {
        
    }
}

export async function updateSubCategory(payload:prodSubCategory, id:prodSubCategoryParams){
    try{
        const updateSubCategory = await prisma.product_category.update({
            data:{name:payload.name},
            where:id
        })
        return updateSubCategory
    }catch(e){

    }
}

export async function updateCategory(payload:prodCategory, id:prodCategoryParams) {
    try {
        const updatedCategory = await prisma.product_category.update({
            data:{name:payload.name},
            where:id
        })
        return updatedCategory
    } catch (e) {
        
    }
}


export async function deleteCategory(id:prodCategoryParams){
    try {
        const deletedCategory = await prisma.product_category.delete({
            where:id
        })
        return deletedCategory
    } catch (e) {
        
    }
}

export async function deleteSubCategory(id:prodSubCategoryParams){
    try {
        const deletedSubCategory = await prisma.product_category.delete({
            where:id
        })
        return deletedSubCategory
    } catch (e) {
        
    }
}