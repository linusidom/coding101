const { Product } = require("../schemas/productSchema")
const upload = require('../middleware/uploads')

const productListView = async (req, res) => {
    // try {
        
        // We will come back and change this in the future to filter the paid content from showing up
        const products = await Product.find({},{title:1, image: 1, description: 1, price: 1, username: 1 })
        res.status(200).json(products)

    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }
}


const productCreateView = async (req, res) => {
    try {
        
        upload(req, res, async function (err) {
            if (err) {
                res.status(400).json({error:err.message})
            } else {

                const product = await Product.create({...req.body, username: req.user.username, image: `/uploads/${req.file.filename}`})
                res.status(201).json(product)
            }
          })

    } catch (error) {
        res.status(400).json({error:error.message})
    }
} 


const productDetailView = async (req, res) => {
    try {
        
        

        const inUser = req.user.products.find(product => {
            return product._id.toString() === req.params.productID
        })
        
        if(inUser){
            const product = await Product.findById(req.params.productID)
            res.status(200).json(product)
        } else {
            const product = await Product.findById(req.params.productID, {title:1, image: 1, description: 1, price: 1, username: 1 })
            res.status(200).json(product)
        }

        

    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports = {productListView, productCreateView, productDetailView}