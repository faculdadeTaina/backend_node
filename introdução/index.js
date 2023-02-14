const express = require("express");

const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extends: false}))

app.use(bodyParser.json());
//DB
var DB={
    games:[
        {
            id:1,
            title:"Jogo 1",
            ano:2019,
            price:60

        },
        {
            id:2,
            title:"Jogo 2",
            ano:2018,
            price:60

        },
        {
            id:3,
            title:"Jogo 3",
            ano:2017,
            price:60

        }
    ]
}
//criando os verbos
app.get("/",()=>{
    
})

//ver funcionando

app.listen(45678,()=>{
    console.log("Api roadando")
})