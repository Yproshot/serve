const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('rota principal')
})

app.get('/hello', function(req,res){
    res.send('chegou a resposta')
})

app.get('/nome', function(req,res){
    res.send('Maicon Pacheco')
})

app.listen(3000,function(){
    console.log('Serve UP on port 3000')
})