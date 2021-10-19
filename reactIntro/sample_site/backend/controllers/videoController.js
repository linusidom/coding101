const Video = require('../schemas/videoSchema')
const testVideos = require('../../test_results.js')

const videoListView = async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const videoCreateView = async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(201).json(videos)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


module.exports = {videoListView, videoCreateView}
