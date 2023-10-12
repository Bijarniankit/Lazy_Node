const express = require("express");
const app = express();
const port=2001;

const  groceriesroute = require('./routes/groceries')




// middleware
app.use(express.json());
// just to check which route/method and on which url
app.use((req,res,next)=>{
    console.log(`$(req.method),$(req.url)`)
    next();
});
app.use(groceriesroute);  // importing groceries routes in index file

app.listen(port, () =>{
    console.log("servere is running at : " +port)
}); 

