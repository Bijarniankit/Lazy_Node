const express = require("express");
const app = express();
const port=2001;

const grocery_list=[
    {
        "item":"cereal",
        "quantity":1
    },
    {
        "item":"pop-tarts",
        "quantity":1
    },
];

// middleware
app.use(express.json());




app.get('/grocery', (req,res) =>{
    res.send (grocery_list)
});

app.post('/grocery', (req,res)=>{
    console.log(req.body);
    grocery_list.push(req.body);
    res.send(201);
});



app.listen(port, () =>
{
    console.log("servere is running at : " +port)
}); 
