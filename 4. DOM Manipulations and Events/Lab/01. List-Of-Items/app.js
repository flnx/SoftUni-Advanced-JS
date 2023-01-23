function addItem() {
    const ulElement = document.getElementById('items');
    const inputField = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = inputField.value;

    ulElement.appendChild(liElement);
    inputField.value = '';
}
