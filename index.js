const express = require("express");
const porta = process.env.PORT || 10;
const app = express();


app.get("/", (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let key = {key: '9E45CA29DEDB269967D4AB8A221FB82E'}
    res.send(key);
});


app.get("/key", (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let key = {key: '9E45CA29DEDB269967D4AB8A221FB82E'}
    res.send(key);
});


app.listen(porta, ()=>{
    console.log('SERVER ON');
});

