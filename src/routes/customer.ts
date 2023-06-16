import {Router, NextFunction} from 'express'
import { signUp } from '../controllers/SignUp'
import { Login } from '../controllers/Login'
import { authorization } from '../middlewares/Authorization'
import { addUserAddress } from '../controllers/UserAddress'





const customer_route = Router()

customer_route.post('/signup',signUp )
customer_route.post('/login', Login)
customer_route.post('/address/add', authorization, addUserAddress)




export default customer_route