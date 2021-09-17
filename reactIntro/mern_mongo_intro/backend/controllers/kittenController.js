const Kitten = require("../schemas/kittenSchema")


const getKittens = async (req, res) => {
    // Since we are calling from a database we have to wait...
    // If we are going to wait, this has to be an async function

    const kittens = await Kitten.find()
    // console.log(kittens)
    res.json(kittens)

}

const createKittens = async (req, res) => {
    // Since we are calling from a database we have to wait...
    // If we are going to wait, this has to be an async function

    const kittenObj = {name: 'Error Kitten'}
    const kittens = await Kitten.create(kittenObj)
    // console.log(kittens)
    res.json(kittens)

}



module.exports = {getKittens, createKittens}