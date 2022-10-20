window.addEventListener('load', solve);

function solve() {
  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onAdd);
  let likes = 0;

  function onAdd(e) {
    e.preventDefault();

    const html = {
      genre: document.getElementById('genre'),
      name: document.getElementById('name'),
      author: document.getElementById('author'),
      date: document.getElementById('date'),
    };

    const keys = Object.keys(html);
    const isInvalid = keys.some((x) => html[x].value == '');

    if (isInvalid) {
      return;
    }

    const div = document.createElement('div');
    div.classList.add('hits-info');
    div.innerHTML = `<img src="./static/img/img.png"> 
    <h2>Genre: ${html.genre.value}</h2> 
      <h2>Name: ${html.name.value}</h2>
      <h2>Author: ${html.author.value}</h2>
      <h3>Date: ${html.date.value}</h3>
      <button class = "save-btn">Save song</button><button class = "like-btn">Like song</button>
      <button class = "delete-btn">Delete</button>`;

    document.querySelector('.all-hits-container').appendChild(div);

    const saveBtn = div.querySelector('.save-btn');
    const likeBtn = div.querySelector('.like-btn');
    const deleteBtn = div.querySelector('.delete-btn');
    saveBtn.addEventListener('click', onSave);
    likeBtn.addEventListener('click', onLike);
    deleteBtn.addEventListener('click', onDelete);
    keys.map((x) => (html[x].value = ''));

    function onSave() {
      saveBtn.remove();
      likeBtn.remove();
      document.querySelector('.saved-container').appendChild(div);
    }

    function onLike() {
      likes++;
      document.querySelector('.likes p').textContent = `Total Likes: ${likes}`;
      likeBtn.setAttribute('disabled', 'disabled');
    }

    function onDelete() {
      div.remove();
    }
  }
}