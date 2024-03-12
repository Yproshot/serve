const express = require('express')
const router = express.Router()

router.post('/ex2', function (req, res) {

    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificaçãoFilho = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificaçãoFilho

    res.json({ salarioBruto, bonificaçãoFilho, salarioFinal})
})


module.exports = router 
