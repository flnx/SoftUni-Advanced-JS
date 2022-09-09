function focused() {
  const divElement = document.querySelectorAll('input');

  Array.from(divElement).forEach((e) => {
    e.addEventListener('focus', onFocus);
    e.addEventListener('blur', onBlur);
  });

  function onFocus(e) {
    e.target.parentElement.classList.add('focused');
  }

  function onBlur(e) {
    e.target.parentElement.classList.remove('focused');
  }
}
