import { Router } from "express";
import {
    createVariantOptionHandler,
    deleteVariantOptionHandler,
    getVariantOptionHandler,
    getVariantOptionsHandler,
    updateVariantOptionHandler
} from "./option.controller";

const variantOptionRouter = Router()

variantOptionRouter.post("variant/option/create", createVariantOptionHandler)

variantOptionRouter.get("variant/option/get/:id", getVariantOptionHandler)

variantOptionRouter.get("variant/option/get/all", getVariantOptionsHandler)

variantOptionRouter.put("variant/option/update", updateVariantOptionHandler)

variantOptionRouter.delete("variant/option/remove/:id", deleteVariantOptionHandler)

export default variantOptionRouter