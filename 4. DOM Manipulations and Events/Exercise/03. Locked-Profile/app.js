function lockedProfile() {
  Array.from(document.querySelectorAll('div button')).forEach((b) =>
    b.addEventListener('click', onClick)
  );

  function onClick(e) {
    const parentElement = e.target.parentElement;
    const selectElement = parentElement.querySelector('input[value="unlock"]');

    if (selectElement.checked) {
      const hiddenDiv = parentElement.children[9];
      if (e.target.textContent === 'Show more') {
        hiddenDiv.style.display = 'block';
        e.target.textContent = 'Hide it';
      } else {
        hiddenDiv.style.display = 'none';
        e.target.textContent = 'Show more';
      }
    }
  }
}