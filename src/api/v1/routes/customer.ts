import {Router, NextFunction} from 'express'
import { signUp } from '../controllers/SignUp'
import { Login } from '../controllers/Login'
import { authorization } from '../middlewares/Authorization'
import { addUserAddress, getAddressHistory } from '../controllers/UserAddress'
import { addCountry } from '../controllers/Country'
import { addToCart, reduceQty, removeFromCart } from '../controllers/Cart'
import { addCat } from '../controllers/ProductCategory'
import { createProduct } from '../controllers/Products'
import { createProductItem } from '../controllers/ProductItem'
import { createOrder } from '../controllers/Shop_order'
import { inputValidation } from '../middlewares/input.validation'
import { credentialsSchema } from '../validations/user.validation'





const customer_route = Router()

customer_route.post('/signup',signUp )
customer_route.get('/login', Login)
customer_route.post('/address/add', authorization, addUserAddress)
customer_route.post('/country/add', authorization,addCountry)
customer_route.get('/allAddress', authorization,getAddressHistory)
customer_route.post('/addtoCart', authorization,addToCart)
customer_route.post('/newcat', authorization,addCat)
customer_route.post('/newprod', authorization,createProduct)
customer_route.post('/newproditem', authorization,createProductItem)
customer_route.post('/deleteCart', authorization,removeFromCart)
customer_route.post('/reduceQty', authorization,reduceQty)
customer_route.post('/newOrder', authorization,createOrder)











export default customer_route