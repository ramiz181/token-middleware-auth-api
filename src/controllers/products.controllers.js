import { Product } from "../models/products.model.js"


export const handleDeleteProduct = async (req, res) => {
    const _id = (req.params.id)

    const product = await Product.findByIdAndDelete({ _id })

    res.json({ message: "product deleted", product })

    // res.json({})


}