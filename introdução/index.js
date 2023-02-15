const express = require("express");

const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extends: false}))

app.use(bodyParser.json());
//banco de dados falso para tstar os verbos  
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
//criando os verbos get,put, delete, post
// e criando as rotas
//listando tudo
app.get("/games",(req, res)=>{
    //passando um status
    res.statusCode=200;
    //pegando os dados do banco
    res.json(DB.games);
})
//lsitano apens um
app.get("/game/:id",(req, res)=>{
    //verificando um se o id e'um numeor
    if(isNaN(req.params.id)){
        res.statusCode=400;
        //res.send("isso não é um numero")
    }else{
        res.statusCode=200;
        //res.send("isso é um numero")
    }
//var id =req.params.id;
})
//ver funcionando

app.listen(4000,()=>{
    
    console.log("Api rodando")
})