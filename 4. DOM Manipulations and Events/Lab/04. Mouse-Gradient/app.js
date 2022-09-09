function attachGradientEvents() {
  const boxElement = document.getElementById('gradient-box');
  boxElement.addEventListener('mousemove', gradientMove);
  boxElement.addEventListener('mouseout', gradientOut);

  function gradientMove(e) {
    let result = e.offsetX / e.target.clientWidth;
    result = Math.trunc(result * 100) + '%';
    document.getElementById('result').textContent = result;
  }
  
  function gradientOut(e) {
    document.getElementById('result').textContent = '';
  }
}
