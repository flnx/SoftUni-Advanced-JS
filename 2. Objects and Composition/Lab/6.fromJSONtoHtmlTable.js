function fromJsonToHtml(input) {
    let arrayOfObjects = JSON.parse(input);

    console.log('<table>');

    let tableHead = '<tr>';

    for (let key in arrayOfObjects[0]) {
        tableHead += `<th>${escaper(key).trim()}</th>`;
    }
    tableHead += '</tr>';

    console.log(tableHead);

    for (let el of arrayOfObjects) {
        let tbody = '<tr>';
        for (let key in el) {
            tbody += `<td>${escaper(el[key])}</td>`;
        }
        tbody += '</tr>';
        console.log(tbody);
    }

    function escaper(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log('</table>');
}
fromJsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
