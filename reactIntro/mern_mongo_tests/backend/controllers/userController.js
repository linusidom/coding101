const userGetTest = async (req, res) => {
    res.status(200).json({message:'user Get Reached'})
}

module.exports = {userGetTest}