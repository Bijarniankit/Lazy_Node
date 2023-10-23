const mongoose =require ('mongoose')
const URL = "mongodb+srv://ankit:oRospeg2QerWwjis@mycluster.847lubc.mongodb.net/cd"

mongoose
    .connect(URL)
    .then( () => console.log('connected to db') )
    .catch( (err) => console.log(err))