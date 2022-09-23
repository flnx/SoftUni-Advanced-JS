function solve() {
  const [task, description, date] = document.querySelectorAll('form input, textarea');
  const addBtn = document.getElementById('add').addEventListener('click', addTask);
  const sections = document.querySelectorAll('section');

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

      startBtn.addEventListener('click', (e) => {
        sections[2].children[1].appendChild(article);

        finishBtn.addEventListener('click', (e) => {
          sections[3].children[1].appendChild(article);
          div.remove();
        });

        div.appendChild(finishBtn);
        e.target.remove();
      });

      deleteBtn.addEventListener('click', () => article.remove());
      
      sections[1].children[1].appendChild(article);
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
