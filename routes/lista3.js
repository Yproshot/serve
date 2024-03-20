const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    /*
     Faça um Programa que calcule e imprima o salário reajustado de um funcionário de
    acordo com a seguinte regra:
     Salários até 2.000, reajuste de 50%
     Salários maiores que 2.000, reajuste de 30%
    */

    const { salario } = req.body

    function reajuste(salario){

        if (salario <= 2000) {
            return (salario * 1.5)
        } else {
            return (salario * 1.3)
        }
    }

    const novoSalario = reajuste(salario)

    res.status(200).json({ novoSalario })

})

router.post('/ex2', function (req, res) {
    /*
    Faça um script que leia 3 números inteiros e verifique qual o maior, imprimindo o
resultado (suponha números diferentes).
    */

    const { num1, num2, num3 } = req.body

    const maior = Math.max(num1, num2, num3)

    res.status(200).json({ maior })

})

router.post('/ex3', function (req, res) {
    /* 
    Em uma pizzaria, cada tulipa de chopp custa R$ 4,80 e uma pizza mista grande custa
R$17,00, mais R$1,50 por tipo de cobertura pedida (queijo, presunto, banana, etc.).
Uma turma vai à pizzaria e pede uma determinada quantidade de chopps e uma
pizza grande com uma determinada quantidade de coberturas. Faça um algoritmo que
calcule a conta e, sabendo quantas pessoas estão à mesa, quanto que cada um deve
pagar (não esqueça os 10% do garçom).
    */

    const { chopps, pizza, cobertura, pessoas } = req.body

    const choppsTotal = chopps * 4.8

    const pizzaTotal = pizza * 17 

    const coberturaTotal = cobertura * 1.5

    const garçom = 1.1

    const total = ((choppsTotal + pizzaTotal + coberturaTotal) * garçom)

    const porPessoa = total / pessoas

    res.status(200).json({ total, porPessoa })
})

router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2

    const salarioMes = valorHoraTrabalhada * horasTrabalhadas

    const valorDependentes = dependentes * 32

    const valorHorasExtras = horasExtras * (valorHoraTrabalhada * 1.5)

    const salarioBruto = salarioMes + valorDependentes + valorHorasExtras

    let imposto = 0

    if (salarioBruto > 2000) {
        imposto = salarioBruto >= 5000 ?
            salarioBruto * 0.2 :
            salarioBruto * 0.3
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.status(200).json({ salarioBruto, valorHoraTrabalhada, valorDependentes, valorHorasExtras, imposto, salarioLiquido, gratificacao, salarioReceber })
})

module.exports = router
