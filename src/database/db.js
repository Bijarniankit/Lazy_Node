const mongoose =require ('mongoose') ;

mongoose
    .connect('mongodb+srv://ankit:oRospeg2QerWwjis@mycluster.847lubc.mongodb.net/')
    .then( () => console.log('connected to db') )
    .catch( (err) => console.log(err))