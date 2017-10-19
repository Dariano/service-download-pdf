const axios = require('axios')
const AdmZip = require('adm-zip')

class Servico {
    static buscarArquivo() {
        const config = {
            headers: {
                'content-type': 'application/pdf'
            },
            responseType: 'arraybuffer'
        }

        return axios.get('http://localhost:3000/pdf', config).then(response => response.data)
    }

    static async buscarArquivosZip() {
        const zip = new AdmZip()

        const arquivos = [1,2,3]

        // const documentos = await Promise.all(arquivos.map(async (arquivo) => {
        //     return await this.buscarArquivo()
        // }))
        arquivos.forEach(async (arquivo) => {
            const documento = await this.buscarArquivo()
            require('fs').createWriteStream(`${Math.random() * 10}.pdf`,  await documento, 'binary')
        })

        documentos.forEach(async (documento) => {
            // require('fs').createWriteStream(`${Math.random() * 10}.pdf`,  await documento, 'binary')
            zip.addFile(`${Math.random() * 10}.pdf`, await documento, 'teste', '0644')
        })

        // zip.writeZip('./teste.zip')

        return zip.toBuffer()
    }
}

module.exports = Servico