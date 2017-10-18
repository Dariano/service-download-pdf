const express = require('express')
const axios = require('axios')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
const hostname = 'localhost'

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Feito!')
})

app.get('/documentos/:id', (req, res) => {

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=documento.pdf');

    axios.get('http://localhost:3000/pdf', {
        headers: {
            'content-type': 'application/pdf'
        },
        responseType: 'arraybuffer'
    })
        .then(response => response.data)
        .then(documento => res.send(documento))
})

app.listen(port, () => {
    console.log(`Servidor ${hostname} randando na porta ${port}`)
})