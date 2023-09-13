import { Request, Response } from "express";
import { userReview } from "./review.types";
import {
    createReview,
    deleteReview,
    getReview,
    getReviews,
    getUserReview,
    getUserReviews,
    updateReview
} from "./review.service";





export async function createReviewHandler(
    req: Request<{}, {}, userReview>,
    res: Response
) {
    try {
        const userId = ""
        const review = await createReview(req.body, userId)
        return res.send(review)
    } catch (e) {

    }
}

export async function getUserReviewsHandler(
    req: Request,
    res: Response
) {
    try {
        const userId = ""
        const reviews = await getUserReviews(userId)
        return res.send(reviews)
    } catch (e) {

    }
}

export async function getUserReviewHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    try {
        const userId = ""
        const reviews = await getUserReview(userId, req.params.id)
        return res.send(reviews)
    } catch (e) {

    }
}

export async function getReviewsHandler(
    req: Request,
    res: Response
) {
    try {
        const reviews = await getReviews()
        return res.send(reviews)
    } catch (e) {

    }
}

export async function updateReviewHandler(
    req: Request<{ id: string }, {}, userReview>,
    res: Response
) {
    try {
        const review = await updateReview(req.params.id, req.body)
        return res.send(review)
    } catch (e) {

    }
}


export async function getReviewHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    try {
        const reviews = await getReview(req.params.id)
        return res.send(reviews)
    } catch (e) {

    }
}

export async function deleteReviewHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    try {
        const review = await deleteReview(req.params.id)
        return res.send(review)
    } catch (e) {

    }
}

