const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        title: String,
        content: String
    },
    {
        timestamps: true
    }
)

// When we create a mongoose database, the name will be
// automatically lowercased and pluralized
// Post => posts
const Post = new mongoose.model('Post', postSchema)

module.exports = Post