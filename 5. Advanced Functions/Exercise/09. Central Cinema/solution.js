function solve() {
  const [movieName, hallName, priceElem] = document.querySelectorAll('#container input');
  const [screenBtn, clearBtn] = document.querySelectorAll('button');
  screenBtn.addEventListener('click', addMovie);

  clearBtn.addEventListener('click', () => Array.from(document.querySelectorAll('#archive li')).map((x) => x.remove()));

  function addMovie(e) {
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
    const hall = create('strong', `Hall: ${hallName.value}`);
    const div = document.createElement('div');
    const input = document.createElement('input');
    const archiveBtn = create('button', 'Archive');

    archiveBtn.addEventListener('click', archive);
    input.placeholder = 'Tickets Sold';

    li.appendChild(create('span', movieName.value));
    li.appendChild(hall);
    div.appendChild(create('strong', Number(priceElem.value).toFixed(2)));
    div.appendChild(input);
    div.appendChild(archiveBtn);
    li.appendChild(div);
    document.querySelector('#movies ul').appendChild(li);

    function archive(e) {
      const qty = Number(input.value);
      const inputField = input.value;

      if (!isNaN(qty) && inputField !== '') {
        const price = Number(e.target.parentElement.children[0].textContent);
        const totalPrice = create('strong', `Total amount: ${(qty * price).toFixed(2)}`);
        const deleteBtn = create('button', 'Delete');
        deleteBtn.addEventListener('click', () => li.remove());

        div.remove();
        hall.remove();
        li.appendChild(totalPrice);
        li.appendChild(deleteBtn);

        document.querySelector('#archive ul').appendChild(li);
      }
    }
  }

  function create(type, text) {
    const item = document.createElement(type);
    item.appendChild(document.createTextNode(text));
    return item;
  }
}
