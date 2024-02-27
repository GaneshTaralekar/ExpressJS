const express = require('express')

const app = express();

app.get("/",(req,res)=>{

    res.send("Response from the Express Page");

})
app.get("/about/:name/:age",(req,res)=>{

    // res.send("Hellow From the About page")
    console.log(req.params);
    let name = req.params.name;
    let age = req.params.age;
    res.json({name,age})

    // res.send(req.params)
    // res.send(req.query);

})

app.listen(8000,()=>{
    console.log("Listting the request on port 8000")

})