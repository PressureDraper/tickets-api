export const generateHtmlMailInfo = (data: any) => {
    let rows = '';

    data.forEach((elm: any) => {
        rows += '<tr style="vertical-align: middle; height: 15px; text-align: center; font-size: 15px;">'
        rows += '<td>' + elm.nombre + '</td>';
        rows += '<td>' + elm.meses.toString() + '</td>'
        rows += '</tr>'
    });

    return rows;
}
