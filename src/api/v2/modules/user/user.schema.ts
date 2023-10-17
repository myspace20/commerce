import { ObjectSchema, string, object } from "yup";
import { createUserInput, TfindUserByEmail, TfindUserById, loginCredentials, TUpdateUser } from "./user.types";
import { findUserByEmail } from "./user.service";

export const findUserByEmailSchema:ObjectSchema<TfindUserByEmail> = object({
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
})

export const updateUserSchema:ObjectSchema<TUpdateUser> = object({
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
})

export const findUserByIdSchema:ObjectSchema<TfindUserById> = object({
    id: string()
        .required("id is required")
        .uuid("invalid id")
})



export const credentialSchema: ObjectSchema<loginCredentials> = object({
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
    password: string()
        .required("Password is required")
        .min(8, "Password too short - should be 8 chars minimum")
        .max(50)
})

export const userSchema: ObjectSchema<createUserInput> = object({
    name:string().required("Name is required").max(50),
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
    password: string()
        .required("Password is required")
        .min(8, "Password too short - should be 8 chars minimum")
        .max(50)
})

