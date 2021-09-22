const Product = require("../schema/productSchema")

const productCreateView = async (req, res) => {

    try {
        
        const prodArr = [
            {product: "toothbrush", total: 4.75, customer: "Mike"},
            {product: "guitar", total: 199.99, customer: "Tom"},
            {product: "milk", total: 11.33, customer: "Mike"},
            {product: "pizza", total: 8.50, customer: "Karen"},
            {product: "toothbrush", total: 4.75, customer: "Karen"},
            {product: "pizza", total: 4.75, customer: "Dave"},
            {product: "toothbrush", total: 4.75, customer: "Mike"},
       ]

    

        const products = await Product.insertMany(prodArr)
        res.status(201).json(products)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 

const productQueryView = async (req, res) => {
    try {
        
        const products = await Product.aggregate(
            [
                {$match: {customer: {$in:["Mike", "Karen"]}} },
                {$group: {_id:"$customer", total:{$sum:"$total"} } },
                {$sort:{total:1}}
            ]
        )


        // 'comments.user': _id


        // { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ] }
        res.status(200).json(products)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

  // ./animals.js
  require("./dog");
  
  const dog = new Dog();

module.exports = {productCreateView, productQueryView}