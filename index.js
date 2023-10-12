const express = require("express")

const PORT = 3004;
const app = express();

const students= [
    {
        "Name": "Ramsay"
      }, {
        "Name": "Iormina"
      }, {
        "Name": "Aurelia"
      }, {
        "Name": "Shir"
      },
    ]

//middlewares

app.use(express.json())



//requests
app.get('/', function (req, res) {
    res.send(` 
              <h1>Hello there! Dear Sachin Jaat sir </h1>
              <a href="http://localhost:3004/detail">Click me</a>
              `);
    
});

app.get("/detail", (req,res) => {
    res.json(students)
  }
);

app.post("/detail",(req,res) =>{
    const new_student=req.body;
    console.log(new_student);
    students.push(new_student);
    res.sendStatus(201);
});


//port
app.listen(PORT,() => { console.log("Express is up and running at : "+ PORT) } );
