require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

global.__basedir = __dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//used by Tom but I think I can remove if I use local storage. 
app.use(cookieParser());

//Connect to the database
require("./config/mongoose.config");
//This must be called before adding your routes
// app.use(cors({   
//     origin: "http://linuxhome:3000"     
// }))

app.use(cors());

//listen to routes
// const initRoutes = require("./routes/file.routes");
// initRoutes(app);
require("./routes/file.routes")(app);

//Add routes.  Placeholder will be changed to the name of the file where your routes are stored.
require('./routes/blog.routes')(app);
require('./routes/user.routes')(app);

const portNumber = process.env.MY_PORT;
app.listen(portNumber, ()=>console.log(`Server connected on port ${portNumber}`));