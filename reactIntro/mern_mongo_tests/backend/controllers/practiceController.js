const Practice = require('../schemas/practiceSchema')

const restaurants = require('../restaurants.json')

const practiceQueryDocs = async (req, res) => {

    try {



        // const countries = ["Russia", "Japan", "Mexico"]
        const practice = await Practice.aggregate([
            {
              $match: {
                _id: '573a1391f29313caabcd8780'
              }
            },
            {
              $lookup:{
                from: 'comments',
                localField: '_id',
                foreignField: 'movie_id',
                as: 'comments_per_movie'
    
              }
            }
          ])


        // 18 after 1998
        res.status(201).json(practice)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const practiceCreateDocs = async (req, res) => {

    

    try {
        
        const practice = await Practice.create(restaurants)
        res.status(201).json(practice)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



module.exports = {practiceCreateDocs, practiceQueryDocs}


// Aggregation Course
// Performance Course
// Data Modeling