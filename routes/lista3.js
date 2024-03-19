const express = require('express')
const router = express.Router()

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
