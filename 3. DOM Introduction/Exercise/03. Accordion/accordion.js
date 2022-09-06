function toggle() {
  let toggleElement = document.getElementById('extra');
  let btnElement = document.getElementsByClassName('button')[0];

  if (btnElement.textContent === 'More') {
    toggleElement.style.display = 'block';
    btnElement.textContent = 'Less';
  } else {
    toggleElement.style.display = 'none';
    btnElement.textContent = 'More';
  }
}

