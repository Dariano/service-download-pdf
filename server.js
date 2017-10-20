const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const { arquivoPDF } = require('./http-response')
const servico = require('./servico')

const app = express()
const port = 3032
const hostname = 'localhost'

app.use(bodyParser.json())

app.get('/documentos/:id', arquivoPDF, (req, res) => {
    servico
        .buscarArquivo()
        .then(documento => res.send(documento))
})

app.get('/documentos', arquivoPDF, (req, res) => {
    servico
        .buscarArquivosZip()
        // .then(arquivoZip => res.send(arquivoZip))
        .then(arquivoZip => {

            res.send(arquivoZip)})
})


app.listen(port, () => {
    console.log(`Servidor ${hostname} randando na porta ${port}`)
})