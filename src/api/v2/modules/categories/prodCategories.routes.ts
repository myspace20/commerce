import { Router } from "express";
import { 
    createProdCategoryHandler, 
    createSubCategoryHandler, 
    deleteCategoryHandler, 
    deleteSubCategoryHandler, 
    getCategoriesHandler, 
    getCategoryHandler, 
    getSubCategoriesHandler, 
    getSubCategoryHandler, 
    updateCategoryHandler, 
    updateSubCategoryHandler
} from "./prodCategories.controller";
import { getProdCategorySchema } from "./prodCategories.schema";




const prodCategoryRouter =  Router()


prodCategoryRouter.post("productCategory/create", createProdCategoryHandler)

prodCategoryRouter.post("productSubCategory/create", createSubCategoryHandler)

prodCategoryRouter.get("productCategory/get/all", getCategoriesHandler)

prodCategoryRouter.get("productSubCategory/get/all", getSubCategoriesHandler)

prodCategoryRouter.get("productCategory/get/:id", getCategoryHandler)

prodCategoryRouter.get("productSubCategory/get/:id", getSubCategoryHandler)

prodCategoryRouter.put("productCategory/update/:id", updateCategoryHandler)

prodCategoryRouter.put("productSubCategory/update/:id", updateSubCategoryHandler)

prodCategoryRouter.delete("productCategory/remove/:id", deleteCategoryHandler)

prodCategoryRouter.delete("productSubCategory/remove/:id", deleteSubCategoryHandler)

export default prodCategoryRouter