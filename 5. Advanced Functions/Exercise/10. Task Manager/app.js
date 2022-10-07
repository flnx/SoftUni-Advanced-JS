function solve() {
  const sections = document.querySelectorAll('section')
  const [_, secOne, secTwo, secThree] = Array.from(sections).map(s => s.children[1])
  const [task, description, date] = document.querySelectorAll('form input, textarea');
  document.getElementById('add').addEventListener('click', addTask);

  function addTask(e) {
    e.preventDefault();

    if (task.value && description.value && date.value) {
      const article = document.createElement('article');
      const div = create('div', '', 'flex');
      const startBtn = create('button', 'Start', 'green');
      const deleteBtn = create('button', 'Delete', 'red');
      const finishBtn = create('button', 'Finish', 'orange');

      article.appendChild(create('h3', task.value));
      article.appendChild(create('p', `Description: ${description.value}`));
      article.appendChild(create('p', `Due Date: ${date.value}`));
      div.appendChild(startBtn);
      div.appendChild(deleteBtn);
      article.appendChild(div);

      startBtn.addEventListener('click', () => {
        startBtn.remove();
        div.appendChild(finishBtn);
        secTwo.appendChild(article);
      });

      finishBtn.addEventListener('click', () => {
        secThree.appendChild(article);
        div.remove();
      });

      deleteBtn.addEventListener('click', () => article.remove());

      secOne.appendChild(article);
      Array.from(document.querySelectorAll('input, textarea')).forEach(x => x.value = '');
    }
  }

  function create(type, text, className) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(text));
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
}