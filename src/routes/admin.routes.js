import express from 'express'
import { handleAdminLogin } from '../controllers/admin.controllers.js'
import { handleDeleteProduct } from '../controllers/products.controllers.js'
import { authentication, authorization } from '../middlewares/authenticationAndAuthorization.middleware.js'


const router = express.Router()

router.get('/login', handleAdminLogin)
router.delete('/products/:id', authentication, authorization, handleDeleteProduct)

export default router