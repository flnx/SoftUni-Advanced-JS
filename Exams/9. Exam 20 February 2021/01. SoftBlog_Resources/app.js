function solve() {
  const createBtn = document.querySelector('.create');
  createBtn.addEventListener('click', onCreate);
  let archived = [];

  function onCreate(e) {
    e.preventDefault();

    const html = {
      creator: document.getElementById('creator'),
      title: document.getElementById('title'),
      category: document.getElementById('category'),
      content: document.getElementById('content'),
    };

    const title = html.title.value;
    const keys = Object.keys(html);
    const fieldIsEmpty = keys.some((x) => html[x].value == '');

    if (fieldIsEmpty) {
      return;
    }

    const article = document.createElement('article');
    article.innerHTML = `
    <h1>${html.title.value}</h1> 
    <p>Category: <strong>${html.category.value}</strong></p>
    <p>Creator: <strong>${html.creator.value}</strong></p>
    <p>${html.content.value}</p>
    <div class="buttons">
    <button class="btn delete">Delete</button>
    <button class="btn archive">Archive</button>
    </div>`;
    article.querySelector('.delete').addEventListener('click', onDelete);
    article.querySelector('.archive').addEventListener('click', onArchive);
    document.querySelector('main section').appendChild(article);

    function onArchive() {
      article.remove();
      archived.push(title);
      archived.sort((a, b) => a.localeCompare(b));
      const archive = document.querySelector('.archive-section ol');
      archive.innerHTML = '';

      for (let el of archived) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(el));
        archive.appendChild(li);
      }
    }

    function onDelete() {
      article.remove();
    }
  }
}