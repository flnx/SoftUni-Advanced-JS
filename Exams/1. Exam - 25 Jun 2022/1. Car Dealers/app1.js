window.addEventListener('load', solve);

function solve() {
    const tbody = document.getElementById('table-body');
    let totalProfit = 0;

    const htmlForm = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalPrice: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price'),
    };

    document.getElementById('publish').addEventListener('click', publish);

    function publish(e) {
        e.preventDefault();

        const formData = Object.values(htmlForm);
        const hasEmptyFields = formData.some((x) => x.value == '');

        const formDataValues = Object.keys(htmlForm).reduce((acc, key) => {
            acc[key] = htmlForm[key].value;
            return acc;
        }, {});

        const isOriginalPriceHigher = +formDataValues.originalPrice > +formDataValues.sellingPrice

        if (hasEmptyFields || isOriginalPriceHigher) return;

        const tr = document.createElement('tr');
        tr.classList.add('row');

        tr.innerHTML = formData.map((x) => `<td>${x.value}</td>`).join('');
        tr.innerHTML += `
            <button class="action-btn edit">Edit</button>
            <button class="action-btn sell">Sell</button>
        `;

        tr.querySelector('.edit').addEventListener('click', () => edit(formDataValues, tr));
        tr.querySelector('.sell').addEventListener('click', () => sell(formDataValues, tr));

        tbody.appendChild(tr);
        formData.map(x => x.value = '');
    }

    function edit(formDataValues, tr) {
        Object.keys(htmlForm).forEach(
            (key) => (htmlForm[key].value = formDataValues[key])
        );
        tr.remove();
    }

    function sell(data, tr) {
        const li = document.createElement('li');
        li.classList.add('each-list');

        const currentSaleProfit = Number(data.sellingPrice) - Number(data.originalPrice);

        li.innerHTML += `
            <span>${data.make} ${data.model}</span>
            <span>${data.year}</span>
            <span>${currentSaleProfit}</span>
           `;

        totalProfit += currentSaleProfit;
        document.getElementById('cars-list').appendChild(li);
        document.getElementById('profit').textContent = totalProfit.toFixed(2);
        tr.remove();
    }
}
