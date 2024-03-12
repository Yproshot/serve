const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {

    const texto = req.body.texto

    
res.send(texto)
})

router.post('/hello', function (req, res) {
    res.send('chegou a resposta')
})

router.post('/nome', function (req, res) {
    res.send('Maicon Pacheco')
})



module.exports = router 
