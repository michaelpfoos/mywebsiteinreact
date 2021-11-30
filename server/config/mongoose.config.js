const mongoose = require('mongoose');

//const dbName = 'blog';
const dbName = process.env.DB_NAME;

const connectionString = `mongodb://localhost/${dbName}`;

mongoose.connect(connectionString, {
    useNewUrlparser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are conencted to the ${dbName} database.`)
    })
    .catch((err)=>{
        console.log(`Unable to connect to ${dbName} database`);
        console.log(err);
    })