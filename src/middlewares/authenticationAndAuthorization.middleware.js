import { Admin } from '../models/admin.model.js';
import tokenFile from './../../authToken.json' with {type: 'json'}

export const authentication = async (req, res, next) => {
    const { email } = req.body
    const user = await Admin.findOne({ email })
    const isAuthentic = tokenFile.some(tokens => tokens.token)

    console.log("line 9", user.role);

    if (!isAuthentic) {
        return res.json({ error: "Unauthentic user" })
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ error: "Access denied" });
    }
    next()
}

export const authorization = async (req, res, next) => {

    const { email } = req.body
    const admin = await Admin.findOne({ email })

    const isAuthorize = tokenFile.find(tokens => tokens.token === admin.token)

    if (!isAuthorize) return res.json({ error: "Unauthorize user" })

    else if (isAuthorize) next()
}