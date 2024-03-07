import html2pdf from 'html-pdf';
export const createPdfFromHtmlStream = (html: any) => {
    return new Promise(async (resolve, reject) => {
        html2pdf.create(html, {
            childProcessOptions: {
                env: {
                    OPENSSL_CONF: '/dev/null',
                }
            },
            format: 'Letter'
        }).toStream((err, stream) => {
            console.log(err);
            if (err) return reject(err);
            resolve(stream);
        })
    });
}