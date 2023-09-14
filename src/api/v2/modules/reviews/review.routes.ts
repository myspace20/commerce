import { Router } from "express";
import {
    createReviewHandler,
    deleteReviewHandler,
    getReviewHandler,
    getReviewsHandler,
    getUserReviewHandler,
    getUserReviewsHandler,
    updateReviewHandler
} from "./review.controllers";



const reviewRoutes = Router()

reviewRoutes.post("user/orders/review/create", createReviewHandler)

reviewRoutes.get("orders/reviews/get", getReviewsHandler)

reviewRoutes.get("orders/review/get/:id", getReviewHandler)

reviewRoutes.get("user/orders/reviews/get", getUserReviewsHandler)

reviewRoutes.get("user/orders/reviews/get/:id", getUserReviewHandler)

reviewRoutes.post("user/orders/reviews/update/:id", updateReviewHandler)

reviewRoutes.delete("user/orders/reviews/delete/:id", deleteReviewHandler)



export default reviewRoutes