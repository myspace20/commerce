import { string, ObjectSchema, object, number, boolean } from 'yup'
import { reviewParams, userReview } from './review.types'


const payload = {
    orderedProductId: string()
        .required("ordered product id is required")
        .uuid("invalid id"),
    ratingValue: number()
        .required()
        .max(1),
    comment: string()
        .required()
        .max(200)
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}

export const createReviewSchema: ObjectSchema<userReview> = object({
    ...payload
})

export const updateReviewSchema: ObjectSchema<userReview> = object({
    ...payload,
    ...params
})

export const getReviewSchema: ObjectSchema<reviewParams> = object({
    ...params
})

export const deleteReviewSchema: ObjectSchema<reviewParams> = object({
    ...params
})
