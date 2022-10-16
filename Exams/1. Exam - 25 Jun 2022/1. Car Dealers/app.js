window.addEventListener('load', solve);

function solve() {
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);
  let profit = 0;

  function publish(e) {
    e.preventDefault();

    const html = {
      make: document.getElementById('make'),
      model: document.getElementById('model'),
      year: document.getElementById('year'),
      fuelType: document.getElementById('fuel'),
      cost: document.getElementById('original-cost'),
      price: document.getElementById('selling-price'),
    };

    const keys = Object.keys(html);
    const values = keys.map((x) => html[x].value);

    let [makeVal, modelVal, yearVal, __, costVal, priceVal] = values;
    const invalidFields = keys.some((x) => html[x].value == '');

    if (Number(html.cost.value) > Number(html.price.value) || invalidFields) {
      return;
    }

    const tr = document.createElement('tr');
    const tdBtn = document.createElement('td');
    tr.classList.add('row');
    const tdMake = createElements('td', html.make.value);
    const tdModel = createElements('td', html.model.value);
    const tdYear = createElements('td', html.year.value);
    const tdFuelType = createElements('td', html.fuelType.value);
    const tdCost = createElements('td', html.cost.value);
    const tdPrice = createElements('td', html.price.value);
    const editBtn = createButton('Edit', 'edit', edit);
    const sellBtn = createButton('Sell', 'sell', sell);

    append(tdBtn, editBtn, sellBtn);
    append(tr, tdMake, tdModel, tdYear, tdFuelType);
    append(tr, tdCost, tdPrice, tdBtn);
    document.getElementById('table-body').appendChild(tr);
    keys.map((x) => (html[x].value = ''));

    function sell() {
      const difference = Number(priceVal) - Number(costVal);
      profit += difference;

      const li = document.createElement('li');
      const spanModel = createElements('span', `${makeVal} ${modelVal}`);
      const spanYear = createElements('span', yearVal);
      const spanDiff = createElements('span', difference);
      li.classList.add('each-list');

      append(li, spanModel, spanYear, spanDiff);
      tr.remove();
      document.getElementById('profit').textContent = profit.toFixed(2);
      document.getElementById('cars-list').appendChild(li);
    }

    function edit() {
      keys.map((x, i) => (html[x].value = values[i]));
      tr.remove();
    }
  }

  function append(parent, ...params) {
    params.map((x) => parent.appendChild(x));
  }

  function createElements(el, value) {
    const element = document.createElement(el);
    element.appendChild(document.createTextNode(value));
    return element;
  }

  function createButton(text, cls, func) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.classList.add('action-btn', cls);
    btn.addEventListener('click', func);
    return btn;
  }
}
