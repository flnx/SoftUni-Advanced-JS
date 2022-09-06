function solve() {
  const selectElements = document.getElementById('selectMenuTo');

  const binaryOption = document.createElement('option');
  binaryOption.value = 'binary';
  binaryOption.textContent = 'Binary';
  selectElements.appendChild(binaryOption);

  const hexadecimalOption = document.createElement('option');
  hexadecimalOption.value = 'hexadecimal';
  hexadecimalOption.textContent = 'Hexadecimal';
  selectElements.appendChild(hexadecimalOption);
  
  const convertBtn = document.querySelector('button');
  
  convertBtn.addEventListener('click', () => {
    const result = document.getElementById('result');
    const userNum = Number(document.getElementById('input').value);
    
    console.log(selectElements.value);
    if (selectElements.value === 'binary') {
      result.value = Number(userNum).toString(2);
    } else if (selectElements.value === 'hexadecimal') {
      result.value = Number(userNum).toString(16).toUpperCase();
    }
  });
}
