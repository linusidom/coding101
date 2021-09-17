

// in Django - class Listview of def listView
const listView = (req, res) => {
    res.json({message:'This is from the Route Controller'})
}

const createView = (req, res) => {
    res.json({message:'This is a Post response'})
}

const updateView = (req, res) => {
    res.json({message:'This is a update response'})
}

const deleteView = (req, res) => {
    res.json({message:'This is a delete response'})
}

module.exports = {listView, createView, updateView, deleteView}