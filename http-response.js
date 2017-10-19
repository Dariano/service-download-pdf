class HttpResponse {
    static arquivoPDF(req, res, next) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=documento.pdf');

        next()
    }

    static arquivoPDF(req, res, next) {
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=documento.zip');

        next()
    }
}

module.exports = HttpResponse