const Product = require("../schema/productSchema")

const productCreateView = async (req, res) => {

    try {
        
        const products = await Product.create(req.body)
        res.status(201).json(products)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 

const productQueryView = async (req, res) => {
    try {
        
        const products = await Product.find().sort({_id: -1})
        res.status(200).json(products)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const productDeleteView = async (req, res) => {
    try {
        
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(product)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {productCreateView, productQueryView, productDeleteView}