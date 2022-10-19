function solve() {
  const addBtn = document.getElementById('add-worker');
  const totalSum = document.getElementById('sum');
  addBtn.addEventListener('click', onClick);
  let budget = 0;

  function onClick(e) {
    e.preventDefault();
    const html = {
      fname: document.getElementById('fname'),
      lname: document.getElementById('lname'),
      email: document.getElementById('email'),
      birth: document.getElementById('birth'),
      position: document.getElementById('position'),
      salary: document.getElementById('salary'),
    };
    let salary = Number(html.salary.value);
    budget += salary;

    const keys = Object.keys(html);
    const values = keys.map(x => html[x].value);
    const isInvalid = keys.some((x) => html[x].value == '');

    if (isInvalid) {
      return;
    }

    const tr = document.createElement('tr');
    const tdFn = create('td', html.fname.value);
    const tdLn = create('td', html.lname.value);
    const tdEmail = create('td', html.email.value);
    const tdBirth = create('td', html.birth.value);
    const tdPosition = create('td', html.position.value);
    const tdSalary = create('td', salary);
    const tdBtns = document.createElement('td');

    const firedBtn = createButton('fired', 'Fired', fired);
    const editBtn = createButton('edit', 'Edit', edit);

    append(tdBtns, firedBtn, editBtn);
    append(tr, tdFn, tdLn, tdEmail, tdBirth, tdPosition, tdSalary, tdBtns);

    document.getElementById('tbody').appendChild(tr);
    totalSum.textContent = budget.toFixed(2);

    keys.map(x => html[x].value = '');
    function fired() {
      console.log('fired');
    }
    
    function edit() {
      budget -= salary;
      totalSum.textContent = budget.toFixed(2);
      keys.map((x, i) => html[x].value = values[i]);
      tr.remove();
    }

    function fired() {
      budget -= salary;
      totalSum.textContent = budget.toFixed(2);
      tr.remove();
    }
  }

  function create(type, content, att, attName) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(content));
    if (att) {
      element.setAttribute(att, attName);
    }
    return element;
  }

  function createButton(clsName, content, func) {
    const btn = document.createElement('button');
    btn.classList.add(clsName);
    btn.textContent = content;
    btn.addEventListener('click', func);
    return btn;
  }

  function append(parent, ...params) {
    params.map((x) => parent.appendChild(x));
  }
}
solve();
