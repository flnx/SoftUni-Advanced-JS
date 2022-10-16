window.addEventListener('load', solve);

function solve() {
  const [_, title, category, content, publishBtn] = Array.from(
    document.querySelector('.newPostContent').children
  );

  publishBtn.addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);

  function publish(e) {
    e.preventDefault();

    if (!title.value || !category.value || !content.value) {
      return;
    }

    const li = document.createElement('li');
    const article = document.createElement('article');

    const h4 = createElements('h4', title.value);
    const pCat = createElements('p', `Category: ${category.value}`);
    const pCon = createElements('p', `Content: ${content.value}`);

    const editBtn = createButton('edit', 'Edit', edit);
    const appBtn = createButton('approve', 'Approve', approve);

    li.classList.add('rpost');
    append(article, h4, pCat, pCon);
    append(li, article, editBtn, appBtn);
    document.getElementById('review-list').appendChild(li);

    Array.from(document.querySelector('form').children)
      .filter((x) => x.id.includes('post'))
      .map((x) => (x.value = ''));

    function edit() {
      title.value = h4.textContent;
      category.value = pCat.textContent.split('Category:').join('').trim();
      content.value = pCon.textContent.split('Content:').join('').trim();
      li.remove();
    }

    function approve() {
      editBtn.remove();
      appBtn.remove();
      document.getElementById('published-list').appendChild(li);
    }

    function append(parent, ...params) {
      params.map((x) => parent.appendChild(x));
    }
  }

  function clear() {
    Array.from(document.querySelectorAll('#published-list li')).map((x) => x.remove());
  }

  function createElements(type, value) {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(value));
    return element;
  }

  function createButton(className, text, funcName) {
    const btn = document.createElement('button');
    btn.classList.add('action-btn', className);
    btn.appendChild(document.createTextNode(text));
    btn.addEventListener('click', funcName);
    return btn;
  }
}
