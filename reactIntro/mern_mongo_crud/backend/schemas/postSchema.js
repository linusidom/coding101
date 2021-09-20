const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: false,
            unique: false
        },
        content: {
            type: String,
            required: false,
            unique: false
        }
    },
    {
        timestamps: true
    }
)


// This model will allow for any kind of data to be thrown into the document
const unstructuredDataSchema = mongoose.Schema({}, {strict: false})
const UnstructuredData = new mongoose.model('UnstructuredData', unstructuredDataSchema)


const Post = new mongoose.model('Post', postSchema)

module.exports = {Post, UnstructuredData}