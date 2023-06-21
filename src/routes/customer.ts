import {Router, NextFunction} from 'express'
import { signUp } from '../controllers/SignUp'
import { Login } from '../controllers/Login'
import { authorization } from '../middlewares/Authorization'
import { addUserAddress, getAddressHistory } from '../controllers/UserAddress'
import { addCountry } from '../controllers/Country'





const customer_route = Router()

customer_route.post('/signup',signUp )
customer_route.post('/login', Login)
customer_route.post('/address/add', authorization, addUserAddress)
customer_route.post('/country/add', authorization,addCountry)
customer_route.get('/allAddress', authorization,getAddressHistory)





export default customer_route