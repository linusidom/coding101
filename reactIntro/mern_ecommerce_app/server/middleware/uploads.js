const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      // This is to create a folder based on the name of the title
      // const pathName = `./frontend/public/uploads/${req.body.title}`
      
      // fs.mkdir(pathName, {recursive: true}, (err) => {
      //   if(err) {
      //     return err
      //   } else {
      //     cb(null, pathName)
      //   }
      // })

      cb(null, './client/public/uploads')
      
    },
    filename: function (req, file, cb) {
      
        //   Sanitize the file name
        const sanitizedName = file.originalname.replace(/ /g, '_')
        console.log('This is the sanitized name', sanitizedName)
        cb(null, file.fieldname + '-' + Date.now() + '-' + sanitizedName)
    }
  })
  
const upload = multer({ 
    storage: storage,
    limits: {fileSize: 1000000}
}).single('image')


const uploadMultiple = multer({ 
  storage: storage,
  limits: {fileSize: 1000000}
}).array('image', 2)



const uploadPDF = multer({ 
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter (req, file, callback) {

    const ext = file.originalname.split('.')[1];
    const allowed = ['pdf'];
    if (allowed.includes(ext)) {
      callback(null, true);
    } else {
      req.error = {message:'Invalid File type, must be PDF'}
      callback(null, false); // handle error in middleware, not here
    }
  },
}).single('file')

module.exports = {upload, uploadMultiple, uploadPDF}