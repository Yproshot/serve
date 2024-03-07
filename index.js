const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('rota principal')
})

app.get('/hello', function (req, res) {
    res.send('chegou a resposta')
})

app.get('/nome', function (req, res) {
    res.send('Maicon Pacheco')
})

app.post('/lista1/ex1', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)


    const soma = brancos + nulos + validos

    let retorno = {}

    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: 'Erro: A soma dos votos não pode passar o total de eleitores'
        }

        res.status(400).json(retorno)

    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {
            brancos: percBranco,
            nulos: percNulos,
            validos: percValidos
        }

        res.status(200).json(retorno)


        res.json('lista 1 --> Exer1')
    }
})

app.get('/lista1/ex2', function (req, res) {
    res.send('Lista 1 --> Exer2')
})

app.get('/lista1/ex3', function (req, res) {
    res.send('Lista 1 --> Exer3')
})
app.listen(3000, function () {
    console.log('Serve UP on port 3000')
})