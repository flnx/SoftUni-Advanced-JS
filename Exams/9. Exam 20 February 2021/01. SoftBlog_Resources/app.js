function solve() {
  const createBtn = document.querySelector('.create');
  createBtn.addEventListener('click', onCreate);
  const archivedSection = document.querySelector('.archive-section ol');

  function onCreate(e) {
    e.preventDefault();
    const [creator, title, category, content] = document.querySelectorAll('form input, textarea')
    const titleValue = title.value;

    const article = document.createElement('article');
    article.innerHTML = `
    <h1>${title.value}</h1> 
    <p>Category: <strong>${category.value}</strong></p>
    <p>Creator: <strong>${creator.value}</strong></p>
    <p>${content.value}</p>
    <div class="buttons">
    <button class="btn delete">Delete</button>
    <button class="btn archive">Archive</button>
    </div>`;
    article.querySelector('.delete').addEventListener('click', onDelete);
    article.querySelector('.archive').addEventListener('click', onArchive);
    document.querySelector('main section').appendChild(article);

    function onArchive() {
      article.remove();
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(titleValue));
      archivedSection.appendChild(li);

      const archiveChildren = Array.from(archivedSection.children);
      const sorted = archiveChildren.sort((a, b) => a.textContent.localeCompare(b.textContent));
      sorted.forEach(li => archivedSection.appendChild(li));
    }
    function onDelete() {
      article.remove();
    }
  }
}