function solve() {
  const submitBtn = document.getElementById('add');
  const resetBtn = document.getElementById('reset');
  const [nameElem, titleElem, messageElem] = document.querySelectorAll('form input, textarea');
  const form = document.querySelectorAll('form input, textarea');

  submitBtn.addEventListener('click', add);
  resetBtn.addEventListener('click', reset);

  function add(e) {
    e.preventDefault();

    if (!nameElem.value || !titleElem.value || !messageElem.value) {
      return;
    }

    let name = nameElem.value;
    let title = titleElem.value;

    const li = document.createElement('li');
    const div = document.createElement('div');
    const h4Title = create('h4', `Title: ${title}`);
    const h4Name = create('h4', `Recipient Name: ${name}`);
    const span = create('span', messageElem.value);
    div.setAttribute('id', 'list-action');

    const sendBtn = createButton('send', 'Send', onSend, 'id');
    const deleteBtn = createButton('delete', 'Delete', onDelete, 'id');

    append(div, sendBtn, deleteBtn);
    append(li, h4Title, h4Name, span, div);

    document.getElementById('list').appendChild(li);

    Array.from(form).map(x => x.value = '');

    function onDelete(e) {
      e.preventDefault();
      const li3 = document.createElement('li');
      const spanDel = create('span', `To: ${name}`);
      const spanTitleDel = create('span', `Title: ${title}`);
      append(li3, spanDel, spanTitleDel);
      document.querySelector('.delete-list').appendChild(li3);
      e.target.parentElement.parentElement.remove();
    }

    function onSend(e) {
      e.preventDefault();
      const li2 = document.createElement('li');
      const div2 = document.createElement('div');
      const spanTo = create('span', `To: ${name}`);
      const spanTitle = create('span', `Title: ${title}`);
      div2.classList.add('btn');

      const deleteBtn2 = createButton('delete', 'Delete', onDelete, 'class');
      div2.appendChild(deleteBtn2)
      append(li2, spanTo, spanTitle, div2);
      document.querySelector('.sent-list').appendChild(li2);
      li.remove();
    }

    function append(parent, ...params) {
      params.map((x) => parent.appendChild(x));
    }
  }

  function createButton(attName, content, func, att) {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.setAttribute(att, attName);
    btn.addEventListener('click', func);
    btn.textContent = content;
    return btn;
  }

  function create(type, content) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(content));
    return element;
  }

  function reset(e) {
    e.preventDefault();
    Array.from(form).map(x => x.value = '');
  }
}
solve();
