import { ObjectSchema, string, object } from "yup";
import { loginCredentials } from "../user/user.types";

export const createSessionSchema:ObjectSchema <loginCredentials> = object({
    email: string()
        .required("Email is required")
        .email('Invalid email')
        .max(50),
    password: string()
        .required("Password is required")
        .min(8, "Password too short - should be 8 chars minimum")
        .max(50)
})