function create(words) {
  const parentDivElement = document.getElementById('content');

  for (let i = 0; i < words.length; i++) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = words[i];
    p.style.display = 'none';
    div.appendChild(p);
    div.addEventListener('click', (e) => {
      const target = e.target.querySelector('p');
      target.style.display = 'block';
    });
    parentDivElement.appendChild(div);
  }
}
