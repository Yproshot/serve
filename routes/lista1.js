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

    res.status(200).json({ salarioAntigo, reajuste, novoSalario })

})

router.post('/ex4', function (req, res) {

    let custoFabrica = Number(req.body.custoFabrica);
    retorno = {}

    let valorComImpostos = custoFabrica + (custoFabrica * 0.45)
    let valorVenda = valorComImpostos + (valorComImpostos * 0.28)



    retorno = {
        valorVenda: valorVenda
    }

    res.status(200).json({ valorVenda })
})

router.post('/ex5', function (req, res) {

    let custoFabrica = Number(req.body.custoFabrica);
    let imposto = Number(req.body.imposto);
    let porcVendedor = Number(req.body.porcVendedor);
    retorno = {}

    let valorComImpostos = custoFabrica + (custoFabrica * imposto / 100)
    let valorVenda = valorComImpostos + (valorComImpostos * porcVendedor / 100)

    retorno = {
        valorVenda: valorVenda
    }

    res.status(200).json({ valorVenda })
})

router.post('/ex6', function (req, res) {

    let salarioFixo = Number(req.body.salarioFixo);
    let carrosVendidos = Number(req.body.carrosVendidos);
    let valorCarroVendido = Number(req.body.valorCarroVendido);
    let valorTotalVendas = Number(req.body.valorTotalVendas);

    retorno = {}

    let salario = salarioFixo + (carrosVendidos * valorCarroVendido) + (valorTotalVendas * 0.05);

    retorno = {
        salario: salario
    }

    res.status(200).json({ salarioFixo, carrosVendidos, valorCarroVendido, valorTotalVendas, salario })
})


router.post('/ex7', function (req, res) {

    let nota1 = Number(req.body.nota1);
    let nota2 = Number(req.body.nota2);

    retorno = {}
    const media = (nota1 * 0.4 + nota2 * 0.6)
    retorno = {
        media: media
    }

    res.status(200).json({ nota1, nota2, media })
})

router.post('/ex8', function (req, res) {

    let raio = Number(req.body.raio);
    let altura = Number(req.body.altura);
    retorno = {}

    let volume = (Math.PI * Math.pow(raio, 2) * altura)

    retorno = {
        volume: volume
    }
    res.status(200).json({ raio, altura, volume })

})

router.post('/ex9', function(req,res){
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    retorno = {}
        let resultado = (num1 + num2) * num1
    retorno = {
        resultado: resultado
    }
    res.status(200).json({num1, num2, resultado})
})
module.exports = router 
