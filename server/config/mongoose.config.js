const mongoose = require('mongoose');

const dbName = process.env.DB_NAME;
const mongodb = process.env.MONGO_URL;

const connectionString = mongodb + dbName;

if ( process.env.ENVIRONMENT === "DEV" ) {
    
    mongoose.connect(connectionString, {
        useNewUrlparser: true,
        useUnifiedTopology: true,    
    })
        .then(()=>{
            console.log(`You are conencted to the ${dbName} database.`)
        })
        .catch((err)=>{
            console.log(`Unable to connect to ${dbName} database`);
            console.log(err);
        })
}

else {

    mongoose.connect(connectionString, {
        useNewUrlparser: true,
        useUnifiedTopology: true,
        auth: {
                username: process.env.DB_ADMIN,
                password: process.env.DB_PW
        }
    })
        .then(()=>{
            console.log(`You are conencted to the ${dbName} database.`)
        })
        .catch((err)=>{
            console.log(`Unable to connect to ${dbName} database`);
            console.log(err);
        })

}
