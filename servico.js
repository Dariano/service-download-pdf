const axios = require('axios')
var zipZip = require('jszip');

class Servico {
    static buscarArquivo() {
        const config = {
            headers: {
                'content-type': 'application/pdf'
            },
            responseType: 'arraybuffer'
        }

        return axios
            .get('http://localhost:3031/pdf', config)
            .then(response => response.data)
    }

    static async buscarArquivosZip() {
        const zip = new zipZip()
        const arquivos = [1, 2, 3]

        const documentos = await Promise.all(arquivos.map(async (arquivo) => {
            return await this.buscarArquivo()
        }))

        documentos.forEach(documento => zip.file(`${Math.random() + 10}-documento.pdf`, documento, { 
            binary: true }))
     
        return zip.generateAsync({ type: 'nodebuffer'})
    }
}

module.exports = Servico