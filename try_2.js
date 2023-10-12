const express = require("express");
const app = express();
const port=2001;

let grocery_list=[
    {   "item":"milk",
        "quantity":2
    },
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
// app.use((req,res)=>{
//     res.send($())
// });


app.get('/grocery', (req,res) =>{
    res.json(grocery_list);
});


app.get("/grocery/:item",(req,res) =>{
        const { item } =req.params;
        const grocery_item = grocery_list.find((g) => g.item === item); 
        res.send(grocery_item)
        // if(index>=0 && index <=grocery_list.length)
        //    {  res.json(grocery_list[index-1]);
        //    }
        //  else{
        //     req.send("item not found");
        //  }  

});


app.post('/grocery', (req,res)=>{
    console.log(req.body);
    grocery_list.push(req.body);
    res.json(grocery_list);
});


app.put('/grocery', (req,res)=>{
    grocery_list=[];
    grocery_list.push(req.body);
    
    res.json(grocery_list);
});




app.delete("/grocery/:id",(req,res) =>{
    const index =parseInt(req.params.id);
    if(index>=0 && index <=grocery_list.length)
       {  grocery_list.splice(index-1,1);
        res.json("Updated grocery list:",grocery_list)
       }
     else{
        res.send("item not found");
     }  

});
app.delete("/grocery",(req,res) => {
    grocery_list=[];
    res.json(grocery_list)
});



app.listen(port, () =>{
    console.log("servere is running at : " +port)
}); 
