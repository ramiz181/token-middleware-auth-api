import { Admin } from "../models/admin.model.js"
import { nanoid } from "nanoid"


export const handleAdminLogin = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "email and password required" })
        }
        const isMatch = await Admin.findOne({ email })

        if (!isMatch) {
            return res.status(401).json({ error: "invalid credentials" })
        }
        if (password !== isMatch.password) {
            return res.status(401).json({ error: "invalid password" })
        }

        const authToken = nanoid(20)
        res.setHeader('token', authToken),

            await Admin.findOneAndUpdate({ email }, {
                status: 'online',
                token: authToken,
            })

        // RN I don't have any frontend....that's why response mn sy he heades get kr rha....
        // originally we send headers to client and client save it in localstorage, cookies etc
        // console.log("line 28", res.getHeaders());
        res.status(200).json({ sucess: "true", message: "user login" })

    } catch (error) {
        res.status(500).json({ error: `Server error ${error}` });
    }
}