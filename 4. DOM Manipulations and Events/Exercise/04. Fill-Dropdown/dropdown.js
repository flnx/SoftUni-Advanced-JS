function addItem() {
  const itemText = document.getElementById('newItemText');
  const itemValue = document.getElementById('newItemValue');

  const selectElement = document.createElement('option');
  selectElement.id = 'menu';
  selectElement.text = itemText.value;
  selectElement.value = itemValue.value;

  if (itemText.value !== '' && itemValue.value !== '') {
    document.getElementById('menu').appendChild(selectElement);
  }
  itemText.value = '';
  itemValue.value = '';
}
