const express = require('express')
const router = express.Router()


router.post('/ex1', function (req, res) {
    /*
    Faça um script para calcular o estoque médio de uma peça, sendo que
ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE
MÁXIMA) /2.
*/

    const { minimo, maximo } = req.body
    const media = (minimo + maximo) / 2

    res.status(200).json({ media })
})

router.post('/ex2', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificaçãoFilho = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificaçãoFilho

    res.json({ salarioBruto, bonificaçãoFilho, salarioFinal })
})

router.post('/ex3', function (req, res) {
    /*
    Faça um script que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
    */

    const { anos, meses, dias } = req.body

    const totalDias = (anos * 365) + (meses * 30) + dias

    res.status(200).json({ totalDias })

})

router.post('/ex4', function (req, res) {

    /*
    Faça um script que leia a idade de uma pessoa expressa em dias e mostre-a expressa
em anos, meses e dias. Considerar ano com 365 dias e mês com 30 dias.
    */

    const { dias } = req.body

    const anos = Math.floor(dias / 365)

    const meses = Math.floor((dias % 365) / 30)

    const diasRestantes = Math.floor((dias % 365) % 30)

    res.status(200).json({ anos, meses, diasRestantes })
})

router.post('/ex5', function (req, res) {

    /*
    Faça um script que leia as 3 notas de um aluno e calcule a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5,
respectivamente.
    */

    const { nota1, nota2, nota3 } = req.body

    const media = ((nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5))

    res.status(200).json({ media })

})

router.post('/ex6', function (req, res) {
    /*
    Faça um script que leia o tempo de duração de um evento em uma fábrica expressa
em segundos e mostre-o expresso em horas, minutos e segundos.
    */

    const { segundos } = req.body

    const horas = Math.floor(segundos / 3600)

    const minutos = Math.floor((segundos % 3600) / 60)

    const segundosRestantes = Math.floor((segundos % 3600) % 60)

    res.status(200).json({ horas, minutos, segundosRestantes })
})

router.post('/ex7', function (req, res) {

    /*
        Escrever um script que lê o nome de um vendedor, o seu salário fixo, o total de vendas
    por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário
    total do vendedor. Escrever o nome do vendedor e seu salário total.
    */

    const { nome, salarioFixo, vendas, porcentagem } = req.body

    const totalVendas = vendas * porcentagem / 100

    const totalSalario = (salarioFixo + totalVendas)

    res.status(200).json({ nome, totalSalario })

})

router.post('/ex8', function (req, res) {
    /*
        Faça um script que leia o nome de um piloto, uma distância percorrida em km e o
    tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a
    velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte
    frase: A velocidade média do &lt;nome do piloto&gt; foi &lt;velocidade media calculada&gt;
    km/h.
    */

    const { nome, distancia, tempo } = req.body

    const velocidadeMedia = "A velocidade média do " + nome + " foi " + (distancia / tempo).toFixed(2) + " km/h."

    res.status(200).json({ nome, velocidadeMedia })
})

router.post('/ex9', function (req, res) {
    
    /*
        Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a
    1.000 reais. Escreva um Programa que receba o salário de um funcionário e imprima o
    valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao
    aumento.
    */

    const { salario } = req.body

    function reajuste(salario) {
        if (salario > 1000) {
            return "Funcionário não tem direito ao aumento."
        } else {
            return (salario * 1.3)
        }
    }

    const novoSalario = reajuste(salario)

    res.status(200).json({ novoSalario })
})

module.exports = router 
