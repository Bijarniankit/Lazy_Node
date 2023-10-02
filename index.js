const express = require("express");
const PORT = 3004;
const app = express()

app.listen(PORT,(error) => {
    if(!error)
        console.log("Express is up and running at : "+ PORT)
    else
        console.log("Server not running : "+error)
    }
);
