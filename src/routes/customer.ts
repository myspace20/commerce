import {Router, NextFunction} from 'express'
import { signUp } from '../controllers/SignUp'
import { Login } from '../controllers/Login'





const customer_route = Router()

customer_route.post('/signup',signUp )
customer_route.post('/login', Login)




export default customer_route