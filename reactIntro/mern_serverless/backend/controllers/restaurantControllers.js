const {Restaurant} = require('../schemas/restaurantSchema')
const {Review, reviewSchema} = require('../schemas/reviewSchema')
const mongoose = require('mongoose')

const restaurantListView = async (req, res) => {

    console.log(req.query)
    try {
        

        const restaurantsPerPage = parseInt(req.body.restaurantsPerPage) || 5
        const page = parseInt(req.query.page) || 0
        var filters = req.query
        
        var query = {}

        if(filters){

            console.log('Filters', filters)
            if('name' in filters){
                query = {$text: {$search: filters["name"]}}
            } else if('cuisine' in filters) {
                query = {'cuisine': {$eq: filters["cuisine"]}}
            } else if('zipcode' in filters){
                query = {"address.zipcode": {$eq: filters["zipcode"]}}
            }
        }
        
        // console.log(query)
        const restaurants = await Restaurant.find(query).limit(restaurantsPerPage).skip(restaurantsPerPage * page)
        // const restaurantsCount = await restaurants.count()
        res.status(200).json({restaurants, restaurantsPerPage, page, query })
        
        
        // res.json({test:'test'})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const restaurantDetailView = async (req, res) => {
    
    // console.log(req.params)
    
    try {
        
        const restID = mongoose.Types.ObjectId(req.params.restaurantID)

        const pipeline = [
            {
                $match: {
                    _id: restID,
                },
            },
            {
                $lookup: {
                    from: "reviews",
                    let: {
                        id: "$_id",
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$restaurant_id", "$$id"],
                                },
                            },
                        },
                        {
                            $sort: {
                                date: -1,
                            },
                        },
                    ],
                    as: "reviews",
                },
            },
            {
                $addFields: {
                    reviews: "$reviews",
                },
            },
        ]


        // const revID = mongoose.Types.ObjectId('61e9a0e944d654f0201c74fd')
        // const testPipeline = [
        //     {
        //         $match: {_id: restID}
        //     },
        //     {
        //         $project: 
        //     }
        // ]

        // const restaurantPipeline = await Restaurant.aggregate(testPipeline)
        // console.log('TestPipeline',restaurantPipeline)

        const restaurant = await Restaurant.aggregate(pipeline)
        if(restaurant){
            res.status(200).json(restaurant)
        } else {
            res.status(404).json({error:'Restaurant Not Found'})
        }
        

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const reviewCreateView = async (req, res) => {
    
    console.log(req.body)
    try {
        
        const restID = req.body.restaurant_id
        const userReview = req.body.text
        const userInfo = {
            name: req.body.name,
            _id: req.body.user_id
        }

        const date = new Date()

        const review = await Review.create({name: userInfo.name, user_id: userInfo._id, date, text: userReview, restaurant_id: restID})
        if(review){
            res.status(200).json(review)
        } else {
            res.status(404).json({error:'Review Not Found'})
        }
        

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const reviewUpdateView = async (req, res) => {
    try {
        
        const reviewID = req.body.review_id
        const userID = req.body.user_id
        const text = req.body.text
        const date = new Date()


        const review = await Review.findOneAndUpdate({_id: reviewID, user_id: userID }, {text: text, date}, {new: true})
        
        if(review){
            res.status(200).json(review)
        } else {
            res.status(404).json({error:'Review Not Found'})
        }
        

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const reviewDeleteView = async (req, res) => {
    console.log(req.query)
    try {
        
        const reviewID = req.query.id
        const userID = req.body.user_id

        console.log(reviewID, userID)

        const review = await Review.findOneAndDelete({_id:reviewID, user_id:userID})
        
        if(review){
            res.status(200).json(review)
        } else {
            res.status(404).json({error:'Review Not Found'})
        }
        

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const cuisineListView = async (req, res) => {
    try {
        
        const cuisines = await Restaurant.distinct('cuisine')
        res.status(200).json(cuisines)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {restaurantListView, restaurantDetailView, reviewCreateView, reviewUpdateView, reviewDeleteView, cuisineListView}