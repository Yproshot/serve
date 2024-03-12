const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

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



    }
})

router.post('/ex2', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBranco, percNulos, percValidos }

        res.status(200).json(retorno)
    }

})

router.post('/ex3', function (req, res) {

    const salarioAntigo = Number(req.body.salarioAntigo)
    const reajuste = Number(req.body.reajuste)
    const novoSalario = (salarioAntigo + (salarioAntigo * reajuste / 100))
    retorno = {}
        retorno = {
            novoSalario: novoSalario,
            reajuste: reajuste

        }
        
        res.status(200).json({salarioAntigo, reajuste, novoSalario})
    

})

module.exports = router 
