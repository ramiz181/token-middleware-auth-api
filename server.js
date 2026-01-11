import express from 'express'
import { dbConnection } from './src/config/db.config.js';
import dotenv from 'dotenv'
import adminRouter from './src/routes/admin.routes.js';
import { Admin } from './src/models/admin.model.js';


const app = express()
const PORT = 5000

dotenv.config();
dbConnection()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())




app.get('/temp', async (req, res) => {


    const { email, password, role } = req.body

    await Admin.create({
        email,
        password,
        role,
    })

    res.send("temporary route")
})

app.use('/v1/admin', adminRouter)

app.listen(PORT, () => console.log("Server started"));