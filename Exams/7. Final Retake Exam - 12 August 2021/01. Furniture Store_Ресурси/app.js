window.addEventListener('load', solve);

function solve() {
  const furnitureList = document.getElementById('furniture-list');
  const html = {
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    descriptiom: document.getElementById('description'),
    price: document.getElementById('price'),
  };
  let totalPrice = 0;
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    const keys = Object.keys(html);
    const isInvalid = keys.some((x) => html[x].value == '');
    let price = Number(html.price.value);
    let year = Number(html.year.value);

    if (isInvalid || html.price.value < 0 || html.year.value < 0) {
      return;
    }

    const trInfo = create('tr', '', 'class', 'info');
    const tdModel = create('td', html.model.value);
    const tdPrice = create('td', price.toFixed(2));
    const tdBtns = document.createElement('td');
    const moreBtn = createButton('moreBtn', 'More Info', showMore);
    const buyBtn = createButton('buyBtn', 'Buy it', buy);

    const trHidden = create('tr', '', 'class', 'hide');
    const tdHiddenYear = create('td', `Year: ${year}`);
    const tdHiddenDesc = create(
      'td',
      `Description: ${html.descriptiom.value}`,
      'colspan',
      '3'
    );

    append(tdBtns, moreBtn, buyBtn);
    append(trHidden, tdHiddenYear, tdHiddenDesc);
    append(trInfo, tdModel, tdPrice, tdBtns);
    append(furnitureList, trInfo, trHidden);

    keys.map((x) => (html[x].value = ''));

    function append(parent, ...params) {
      params.map((x) => parent.appendChild(x));
    }

    function showMore(e) {
      if (e.target.textContent == 'More Info') {
        e.target.textContent = 'Less Info';
        trHidden.style.display = 'contents';
      } else {
        e.target.textContent = 'More Info';
        trHidden.style.display = 'none';
      }
    }

    function buy() {
      totalPrice += price;
      document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
      trInfo.remove();
      trHidden.remove();
    }
  }

  function createButton(clsName, content, func) {
    const btn = document.createElement('button');
    btn.classList.add(clsName);
    btn.textContent = content;
    btn.addEventListener('click', func);
    return btn;
  }

  function create(type, content, att, attName) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(content));

    if (att) {
      element.setAttribute(att, attName);
    }
    return element;
  }
}
