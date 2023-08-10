import { ObjectSchema, string, object } from "yup";
import { createUserInput, loginCredentials } from "./user.types";



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
    name:string().required("Name is not required").max(50),
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
    password: string()
        .required("Password is required")
        .min(8, "Password too short - should be 8 chars minimum")
        .max(50)
})

