function solve() {
  const [movieName, hallName, priceElem] = document.querySelectorAll('#container input');
  const [screenBtn, clearBtn] = document.querySelectorAll('button');

  screenBtn.addEventListener('click', onScreen);

  clearBtn.addEventListener('click', () =>
    Array.from(document.querySelectorAll('#archive li')).map((x) => x.remove())
  );

  function onScreen(e) {
    e.preventDefault();
    const fields = Array.from(document.querySelectorAll('#container input'));
    const isFieldValid = fields.every((x) => x.value);

    if (isFieldValid && !isNaN(priceElem.value)) {
      elementsCreator();
      fields.map((x) => (x.value = ''));
    }
  }

  function elementsCreator() {
    const li = document.createElement('li');
    li.appendChild(create('span', movieName.value));
    li.appendChild(create('strong', `Hall: ${hallName.value}`));

    const div = create('div');
    div.appendChild(create('strong', Number(priceElem.value).toFixed(2)));

    const input = create('input');
    input.placeholder = 'Tickets Sold';
    div.appendChild(input);

    const archiveBtn = create('button', 'Archive');
    archiveBtn.addEventListener('click', archive);
    div.appendChild(archiveBtn);

    li.appendChild(div);
    document.querySelector('#movies ul').appendChild(li);
  }

  function archive(e) {
    const qty = Number(e.target.previousElementSibling.value);
    const inputField = e.target.previousElementSibling.value;

    if (!isNaN(qty) && inputField !== '') {
      const price = Number(e.target.parentElement.children[0].textContent);
      const totalPrice = create('strong', `Total amount: ${(qty * price).toFixed(2)}`);
      const deleteBtn = create('button', 'Delete');
      deleteBtn.addEventListener('click', (e) => e.target.parentElement.remove());
      const parentElement = e.target.parentElement.parentElement;

      parentElement.children[1].remove();
      e.target.parentElement.remove();
      parentElement.appendChild(totalPrice);
      parentElement.appendChild(deleteBtn);
      document.querySelector('#archive ul').appendChild(parentElement);
    }
  }

  function create(type, text) {
    const item = document.createElement(type);
    if (text) {
      item.appendChild(document.createTextNode(text));
    }
    return item;
  }
}
