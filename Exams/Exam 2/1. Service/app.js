window.addEventListener('load', solve);

function solve() {
  const [sendBtn, clearBtn] = document.querySelectorAll('button');
  const [description, name, phone] = document.querySelectorAll('textarea, input');
  const select = document.getElementById('type-product')

  sendBtn.addEventListener('click', send);
  clearBtn.addEventListener('click', clear);

  function send(e) {
    e.preventDefault();

    if (!description.value || !name.value || !phone.value) {
      return
    }

    const div = document.createElement('div');
    const h2 = createElements('h2', `Product type for repair: ${select.value}`);
    const h3 = createElements('h3', `Client information: ${name.value}, ${phone.value}`);
    const h4 = createElements('h4', `Description of the problem: ${description.value}`);
    const startBtn = createButton('start-btn', 'Start repair', startRepair);
    const finishBtn = createButton('finish-btn', 'Finish repair', finishRepair);
    div.classList.add('container')
    finishBtn.setAttribute('disabled', 'disabled');

    append(div, h2, h3, h4, startBtn, finishBtn);
    document.getElementById('received-orders').appendChild(div);

    description.value = '';
    name.value = '';
    phone.value = '';

    function append(parent, ...params) {
      params.map((x) => parent.appendChild(x));
    }

    function startRepair() {
      startBtn.setAttribute('disabled', 'disabled');
      finishBtn.removeAttribute('disabled');
    }

    function finishRepair() {
      startBtn.remove();
      finishBtn.remove();
      document.getElementById('completed-orders').appendChild(div);
    }
  }

  function createElements(type, value) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(value));
    return element;
  }

  function createButton(className, text, funcName) {
    const btn = document.createElement('button');
    btn.classList.add(className);
    btn.appendChild(document.createTextNode(text));
    btn.addEventListener('click', funcName);
    return btn;
  }

  function clear() {
    Array.from(document.querySelectorAll('#completed-orders div')).map((x) => x.remove());
  }
}
