const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (error, connection) => {

    if(!error){
        console.log(`\n MongoDb Successfully Connected To MongoDb Atlas \n`);
        console.log("Your App Has Following Dependencies \n");
        for(let dependencies in Package.dependencies){
            console.log(dependencies);
        }
    }
    else{
        console.log(error)
    }



}
);

