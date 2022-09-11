function solve() {
  const generateBtn = document.querySelector('#exercise button');
  const buyBtn = document.querySelector('#exercise button:last-of-type');
  const output = document.querySelector('#exercise textarea:last-of-type');
  output.value = '';

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  // buy
  function buy(e) {
    const checkedElements = document.querySelectorAll('tbody tr');
    let finalPrice = 0;
    let factors = [];
    let boughtFurniture = [];
    output.value = '';

    for (let line of checkedElements) {
      const checkbox = line.querySelector('input[type="checkbox"]');

      if (checkbox.checked) {
        const row = line.children;
        const productName = row[1].textContent;
        const productPrice = Number(row[2].textContent);
        const productFactor = Number(row[3].textContent);

        boughtFurniture.push(productName);
        factors.push(productFactor);
        finalPrice += productPrice;
      }
    }
    // output
    let avgFactor = factors.reduce((a, b) => a + b);
    avgFactor = avgFactor / factors.length;
    output.value =
      `Bought furniture: ${boughtFurniture.join(', ')}\n` +
      `Total price: ${finalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgFactor}`;
  }

  // generate the given input
  function generate() {
    const input = document.querySelector('#exercise textarea');
    let parsedInput = JSON.parse(input.value);

    for (let obj of parsedInput) {
      const tr = document.createElement('tr');

      const tdImg = document.createElement('img');
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      const checkbox = document.createElement('input');
      tdImg.src = obj.img;
      p1.textContent = obj.name;
      p2.textContent = obj.price;
      p3.textContent = obj.decFactor;
      checkbox.type = 'checkbox';

      tr.insertCell(0).appendChild(tdImg);
      tr.insertCell(1).appendChild(p1);
      tr.insertCell(2).appendChild(p2);
      tr.insertCell(3).appendChild(p3);
      tr.insertCell(4).appendChild(checkbox);
      document.querySelector('#exercise tbody').appendChild(tr);
    }
  }
}
