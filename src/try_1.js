const express = require("express")
const app = express()
const port = 6385

app.use(express.json())

app.get("/person",(req,res)=>{
    return res.json({
        message : "hello world",
        "id" : 1,
        "name" : "Simi",
        "age" : 20,
    });
});

app.post("/person",( req , res)=>{
    console.log(req.body);
    return res.json({
        message : "this is yopur data",
        "id" : req.body.id,
        "name" : req.body.name,
        "age" : req.body.age,
    });
});


app.put("/person/:id",(req,res) => {
    console.log(req.body);
    return res.json({
        message : "Put Route",
    });
});













app.listen(port,()=> { console.log("Server is up and running at : "+port);})