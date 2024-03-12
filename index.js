const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const introducao = require('./routes/introducao')
const lista1 = require('./routes/lista1')
const lista2 = require('./routes/lista2')


app.use('/', introducao)
app.use('/lista1', lista1)
app.use('/lista2', lista2)



app.get('/lista1/ex3', function (req, res) {
    res.send('Lista 1 --> Exer3')
})
app.listen(3000, function () {
    console.log('Serve UP on port 3000')
})