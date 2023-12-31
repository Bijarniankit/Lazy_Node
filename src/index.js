const express = require("express");
const app = express();


const  groceriesroute = require('./routes/groceries')
const  marketroute = require('./routes/market');

const port=2001;

require('./database/db.js');


// middleware
app.use(express.json());



app.use((req,res,next)=>{                // just to check which route/method and on which url
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use(groceriesroute);  // importing groceries routes in index file
app.use(marketroute);  // importing groceries routes in index file






app.listen(port, () =>{
    console.log("server is running at : " +port)
}); 

