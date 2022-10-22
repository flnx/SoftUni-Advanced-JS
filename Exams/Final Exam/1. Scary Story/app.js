window.addEventListener('load', solve);

function solve() {
  const mainDiv = document.getElementById('main');
  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', onPublish);

  function onPublish() {
    const html = {
      fname: document.getElementById('first-name'),
      lname: document.getElementById('last-name'),
      age: document.getElementById('age'),
      title: document.getElementById('story-title'),
      story: document.getElementById('story'),
    };

    const genre = document.getElementById('genre');
    const keys = Object.keys(html);
    const isInvalid = keys.some((x) => html[x].value == '');
    const values = keys.map((x) => html[x].value);

    if (isInvalid) {
      return;
    }
    const li = document.createElement('li');
    li.classList.add('story-info');
    li.innerHTML = `
    <h4>Name: ${html.fname.value} ${html.lname.value}</h4>
    <article>
    <p>Age: ${html.age.value}</p>
    <p>Title: ${html.title.value}</p>
    <p>Genre: ${genre.value}</p>
    <p>${html.story.value}</p>
    </article>
    <button class="save-btn">Save Story</button><button class="edit-btn">Edit Story</button><button class="delete-btn">Delete Story</button>
    `;
    li.querySelector('.save-btn').addEventListener('click', onSave);
    li.querySelector('.edit-btn').addEventListener('click', onEdit);
    li.querySelector('.delete-btn').addEventListener('click', onDelete);
    document.getElementById('preview-list').appendChild(li);
    keys.map((x) => (html[x].value = ''));
    publishBtn.disabled = true;

    function onEdit() {
      keys.map((x, i) => (html[x].value = values[i]));
      li.remove();
      publishBtn.disabled = false;
    }

    function onSave() {
      mainDiv.innerHTML = '';
      mainDiv.innerHTML = `<h1>You scary story is saved!</h1>`;
    }

    function onDelete() {
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
