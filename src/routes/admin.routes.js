import express from 'express'
import { handleAdminLogin } from '../controllers/admin.controllers.js'


const router = express.Router()

router.get('/login', handleAdminLogin)

export default router