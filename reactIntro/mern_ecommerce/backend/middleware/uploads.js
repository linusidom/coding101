const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './client/public/uploads')
    },
    filename: function (req, file, cb) {
      const newName = file.originalname.replace(/ /g, '_')
      cb(null, file.fieldname + '_' + Date.now() + newName)
    }
})

const upload = multer({ storage: storage }).single('image')

module.exports = upload
