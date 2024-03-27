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

    function reajuste(salario) {

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

router.post('/ex5', function (req, res) {

    /*
        Construa um programa que leia o número de identificação do aluno, as 3 notas obtidas
    pelo aluno nas 3 provas e a média dos exercícios que fazem parte da avaliação.
    Calcular a média de aproveitamento, usando a fórmula:
    M A = (Nota1 + Nota2 * 2 + Nota3 * 3 + ME )/7
    A atribuição de conceitos obedece a Tabela abaixo. Seu programa deve informar o número do
    aluno, suas notas, a média dos exercícios, a média de aproveitamento, conceito
    correspondente e mensagem: APROVADO se o conceito for A,B ou C e REPROVADO se o
    conceito for D ou E.
    */

    const { identificacao, nota1, nota2, nota3, mediaExercicios } = req.body

    let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios)/ 7

    let conceito = ' '

    if (mediaAproveitamento >= 9) {
        conceito = 'A'  
    
    }

    else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
        conceito = 'B'
    }

    else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
        
        conceito = 'C'
    }

    else if (mediaAproveitamento >= 4 && mediaAproveitamento < 6) {

        conceito = 'D'
    }

    else if (mediaAproveitamento >= 0 && mediaAproveitamento < 4) {
        
        conceito = 'E'
    }

    else {

        conceito = 'ERRO'
    }

    

    res.status(200).json({ identificacao, nota1, nota2, nota3, mediaExercicios, mediaAproveitamento, conceito })
})


router.post('/ex6', function (req, res) {
    
    /*
        Construa um script que calcule o peso ideal de uma pessoa. Dados de entrada: altura e
    sexo.
    Fórmulas para cálculo do peso:
     peso ideal de homem = (72,7 x altura) – 58
     peso ideal da mulher = (62,1 x altura) – 44,7
    */

    const { altura, sexo } = req.body

    let pesoIdeal = 0
// 1 = homem, 0 = mulher
    if (sexo === 1 ) {

        pesoIdeal = (72.7 * altura) - 58
    }

    else if (sexo === 0) {

        pesoIdeal = (62.1 * altura) - 44.7
    }

    res.status(200).json({ altura, sexo, pesoIdeal })

})

router.post('/ex7', function (req, res) {
    
    /*
        Construa um programa que leia 3 valores (considere que não serão informados valores
    iguais) e calcule a soma dos 2 maiores.
    */

    const { num1, num2, num3 } = req.body

    let numeros = [num1, num2, num3];
    
    numeros.sort((a, b) => b - a);

    soma = numeros[0] + numeros[1]
    
    res.status(200).json({ soma })

})

router.post('/ex8', function (req, res) {
    
    /*
            Uma empresa concederá um aumento de salário aos seus funcionários, variável de
        acordo com o cargo, conforme a tabela abaixo. Faça um programa que leia o salário e
        o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do
        funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o
        salário antigo, o novo salário e a diferença entre ambos.
        Código do Cargo -> Percentual:
         101 -> 5%
         102 -> 7,5%
         103 -> 10%
    */

    const { salario, cargo } = req.body

    let novoSalario = 0

    if (cargo === 101) {

        novoSalario = (salario * 0.05) + salario
        
    }
    else if (cargo === 102) {

        novoSalario = (salario * 0.075) + salario
    }

    else if (cargo === 103) {

        novoSalario = (salario * 0.1) + salario
    }

    else {

        novoSalario = (salario * 0.15) + salario
    }
    
    let diferenca = (novoSalario - salario)

    res.status(200).json({ novoSalario, salario ,diferenca })

})   
module.exports = router
