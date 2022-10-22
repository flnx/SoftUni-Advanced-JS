function solution() {
  const addBtn = document.querySelector('button');
  const [listSec, sentSec, discSec] = document.querySelectorAll('ul');

  addBtn.addEventListener('click', onAdd);

  function onAdd() {
    const field = document.querySelector('input[type=text]');
    const li = document.createElement('li');
    li.classList.add('gift');
    li.textContent = field.value;

    const sendBtn = createButton('sendButton', 'Send', onSend);
    const discardBtn = createButton('discardButton', 'Discard', onDiscard);
    append(li, sendBtn, discardBtn);
    listSec.appendChild(li);

    Array.from(listSec.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .map((x) => listSec.appendChild(x));

    field.value = '';

    function createButton(id, text, func) {
      const btn = document.createElement('button');
      btn.id = id;
      btn.textContent = text;
      btn.addEventListener('click', func);
      return btn;
    }

    function append(parent, ...elements) {
      elements.map((x) => parent.appendChild(x));
    }

    function onSend() {
      sentSec.appendChild(li);
      sendBtn.remove();
      discardBtn.remove();
    }

    function onDiscard() {
      discSec.appendChild(li);
      sendBtn.remove();
      discardBtn.remove();
    }
  }
}