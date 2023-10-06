import { Router } from "express";
import {
    createVariantHandler,
    deleteVariantHandler,
    getVariantHandler,
    getVariantsHandler,
    updateVariantHandler
} from "./variant.controller";

const variantRouter = Router()


variantRouter.post("variant/create", createVariantHandler)

variantRouter.get("variant/get/:id", getVariantHandler)

variantRouter.get("variant/get/all", getVariantsHandler)

variantRouter.put("variant/update/:id", updateVariantHandler)

variantRouter.delete("variant/remove/:id", deleteVariantHandler)


export default variantRouter