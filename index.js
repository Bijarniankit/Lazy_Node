const express = require("express")
const students= require("./arr_students")
const PORT = 3004;
const app = express();


app.get('/', function (req, res) {
    res.send("<h1>Hello there! Dear Sachin Jaat sir </h1>");

});

app.get("/student", (req,res) => {
    res.json(students)
})

app.post("/student",(req,res) => {
    res.send("Post request")
}) 



app.listen(PORT,() => {
    console.log("Express is up and running at : "+ PORT)
    
    }
);
