const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
    const { numeros } = req.body;

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;

    res.status(200).json({ media });
});

router.post('/ex2', function (req, res) {

    /*
        Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido
    */

    const { valores } = req.body

    let maior = valores[0]

    let menor = valores[0]

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] > maior) {
            maior = valores[i]
        }

        if (valores[i] < menor) {
            menor = valores[i]
        }

    }

    res.status(200).json({ maior, menor })

})

router.post('/ex3', function (req, res) {

    /*
    Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
crescente.
    */

    const numeros = [];

    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    res.status(200).json({ numeros });

})


router.post('/ex4', function (req, res) {
    /*
    Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
    decrescente.
    */

    const numeros = [];

    for (let i = 10; i >= 1; i--) {
        numeros.push(i);
    }

    res.status(200).json({ numeros });
});

router.post('/ex5', function (req, res) {

    /*
    Escreva um script para imprimir os 10 primeiros números inteiros maiores que 100.
    */

    const numeros = [];

    for (let i = 101; i <= 110; i++) {
        numeros.push(i);
    }

    res.status(200).json({ numeros });
})

router.post('/ex6', function (req, res) {

    /*
        Escreva um script para ler 10 números e ao final da leitura escrever a soma total dos 10
números lidos.
    */

    const { valores } = req.body

    let soma = 0;

    for (let i = 0; i < valores.length; i++) {

        soma += valores[i];
    }

    res.status(200).json({ soma, valores });

})

router.post('/ex7', function (req, res) {

    /*
    Ler um valor N e imprimir todos os valores pares entre 1 (inclusive) e N (inclusive).
    */

    const { valor } = req.body

    let pares = [];

    for (let i = 1; i <= valor; i++) {

        if (i % 2 === 0) {
            pares.push(i)
        }
    }

    res.status(200).json({ pares });
})

router.post('/ex8', function (req, res) {
    /*
    Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
    */

    const { valores } = req.body

    let negativos = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            negativos++
        }
    }

    res.status(200).json({ negativos })
})

router.post('/ex9', function (req, res) {
    /*
    Ler 10 valores e escrever quais são os valores são NEGATIVOS.
    */

    const { valores } = req.body

    let negativos = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            negativos.push(valores[i])
        }
    }

    res.status(200).json({ negativos })

})

router.post('/ex10', function (req, res) {
    /*
    Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] e
quantos deles estão fora deste intervalo.
    */

    const { valores } = req.body

    let dentro = [];

    let fora = [];

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] >= 10 && valores[i] <= 20) {
            dentro.push(valores[i])
        }

        else if (valores[i] < 10 || valores[i] > 20) {
            fora.push(valores[i])
        }

    }

    res.status(200).json({ dentro, fora })
})

router.post('/ex11', function (req, res) {

    /*
    Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.
    */

    const { valores } = req.body

    let media = 0;

    for (let i = 0; i < 10; i++) {

        media += valores[i]

    }

    media = media / valores.length

    res.status(200).json({ media })
})

router.post('/ex12', function (req, res) {

    /*
    Ler N valores, calcular e escrever a média aritmética desses valores lidos.
    */

    const { valores } = req.body

    let media = 0;

    for (let i = 0; i < valores.length; i++) {

        media += valores[i]

    }

    media = media / valores.length

    res.status(200).json({ media })
})

router.post('/ex13', function (req, res) {

    /*
    Faça um script que leia um número N correspondente ao número de valores a serem
lidos em seguida. Para cada número lido, imprimir o seu triplo.
    */

    const { valores } = req.body

    let triplo = [];

    for (let i = 0; i < valores.length; i++) {

        triplo.push(valores[i] * 3)
    }

    res.status(200).json({ triplo })
})

router.post('/ex14', function (req, res) {
    /*
    Faça um script que leia 30 números positivos e, para cada número lido, imprima seu
    dobro.
    */

    const { valores } = req.body;

    let dobro = [];
    for (const numero of valores) {
        if (numero > 0) {
            dobro.push(numero * 2);
        }
    }

    res.status(200).json({ dobro });
});

router.post('/ex15', function (req, res) {

    /*
    Escreva um script para ler 10 números. Todos os números lidos com valor inferior a 40
devem ser somados. Escreva o valor final da soma efetuada.
    */

    const { valores } = req.body

    let soma = 0;

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] < 40) {
            soma += valores[i]
        }

    }

    res.status(200).json({ soma })

})

router.post('/ex16', function (req, res) {

    /*
    Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um
script que permita a entrada das seguintes informações:
a) o número total de mercadorias no estoque;
b) o valor de cada mercadoria.
Ao final imprimir o valor total em estoque e a média de valor das mercadorias.
    */

    const { total, valor } = req.body

    let valorTotal = 0;

    for (let i = 0; i < valor.length; i++) {

        valorTotal += valor[i]
    }

    media = valorTotal / valor.length

    res.status(200).json({ valorTotal, media })


})



module.exports = router
