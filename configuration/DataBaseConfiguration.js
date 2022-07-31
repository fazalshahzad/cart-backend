const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fazal:f03324824137@cart.n7v9t.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (error, connection) => {

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