function solve() {
  const addBtn = document.getElementById('add');
  const sections = document.querySelectorAll('section');;
  const [_, oSec, inSec, compSec] = Array.from(sections).map(s => s.children[1]);
  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    const [task, description, date] = document.querySelectorAll('form input, textarea');

    if (task.value == '' || description == '' || date.value == '') {
      return;
    }

    const article = document.createElement('article');
    article.innerHTML = `
    <h3>${task.value}</h3>
    <p>Description: ${description.value}</p>
    <p>Due Date: ${date.value}</p>
    <div class = "flex">
    <button class = "green">Start</button><button class = "red">Delete</button>
    </div>`;

    const startBtn = article.querySelector('.green');
    const deleteBtn = article.querySelector('.red');
    startBtn.addEventListener('click', onStart);
    deleteBtn.addEventListener('click', onDelete);
    oSec.appendChild(article);

    [task,description, date].map(x => x.value = '');

    function onStart() {
      startBtn.remove();
      const finishBtn = document.createElement('button');
      finishBtn.textContent = 'Finish';
      finishBtn.classList.add('orange');
      finishBtn.addEventListener('click', onFinish);
      article.querySelector('.flex').appendChild(finishBtn);
      inSec.appendChild(article);
    }

    function onFinish() {
      article.querySelector('.flex').remove()
      compSec.appendChild(article);
    }

    function onDelete() {
      article.remove();
    }
  }
}
