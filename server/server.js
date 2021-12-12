require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const app = express();
//Stores the file location off server.js
global.__basedir = __dirname;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//Connect to the database
require("./config/mongoose.config");

//multer configuration
const storageEngine = multer.diskStorage ({      
    destination:'./resources/static/assets/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname);      
    }
});

// initialize multer
const upload = multer ({
    storage: storageEngine,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Only png, jpg, or jpeg files are allowed.'))
        }
    }  
});

//This must be called before adding your routes
app.use(cors({   
    credentials: true,
    origin: "http://linuxhome:3000"     
}))
//app.use(cors());
//Route for uploading files.
app.post('/api/upload', upload.any(), function (req, res, next) {   
    res.json({ message: "Successfully uploaded files" });
});
//listen to routes
require("./routes/file.routes")(app);
require('./routes/blog.routes')(app);
require('./routes/user.routes')(app);

const portNumber = process.env.MY_PORT;
app.listen(portNumber, ()=>console.log(`Server connected on port ${portNumber}`));