import { Router } from "express";
import {
    createPaymentTypeHandler,
    deletePaymentTypeHandler,
    getAllPaymentTypesHandler,
    getPaymentTypeByIdHandler,
    getPaymentTypeByValueHandler,
    updatePaymentTypeHandler
} from "./paymentType.controller";

const paymentTypeRouter = Router()


paymentTypeRouter.post("payment/type/create", createPaymentTypeHandler)

paymentTypeRouter.get("payment/type/getAll", getAllPaymentTypesHandler)

paymentTypeRouter.get("payment/type/get/:id", getPaymentTypeByIdHandler)

paymentTypeRouter.get("payment/type/get/:value", getPaymentTypeByValueHandler)

paymentTypeRouter.put("payment/type/update/:id", updatePaymentTypeHandler)

paymentTypeRouter.delete("payment/type/remove/:id", deletePaymentTypeHandler)