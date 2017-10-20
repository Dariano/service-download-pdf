const axios = require('axios')
var zip = new require('node-zip')();

class Servico {
    static buscarArquivo() {
        const config = {
            headers: {
                'content-type': 'application/pdf'
            },
            responseType: 'arraybuffer'
        }

        return axios
            .get('http://localhost:3000/pdf', config)
            .then(response => response.data)
    }

    static async buscarArquivosZip() {
        const arquivos = [1, 2, 3]

        const documentos = await Promise.all(arquivos.map(async (arquivo) => {
            return await this.buscarArquivo()
        }))

        documentos.forEach(documento => zip.file(`${Math.random() + 10}-documento.pdf`, documento))

        return zip.generate({ base64: false })
    }
}

module.exports = Servico