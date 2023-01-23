function addItem() {
    const inputField = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = inputField.value;

    const deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';

    liElement.appendChild(deleteElement);

    document.getElementById('items').appendChild(liElement);
    inputField.value = '';

    deleteElement.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}
