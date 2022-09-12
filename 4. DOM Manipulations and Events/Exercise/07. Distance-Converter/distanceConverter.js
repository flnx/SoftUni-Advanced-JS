function attachEventsListeners() {
  const selectFromElem = document.getElementById('inputUnits');
  const selectToElem = document.getElementById('outputUnits');

  const convertBtn = document.getElementById('convert');

  convertBtn.addEventListener('click', () => {
    let input = Number(document.getElementById('inputDistance').value);
    let result = 0;

    switch (selectFromElem.value) {
      case 'km':
        input *= 1000; break;
      case 'm':
        input = input; break;
      case 'cm':
        input *= 0.01; break;
      case 'mm':
        input *= 0.001; break;
      case 'mi':
        input *= 1609.34; break;
      case 'yrd':
        input *= 0.9144; break;
      case 'ft':
        input *= 0.3048; break;
      case 'in':
        input *= 0.0254; break;
    }

    switch (selectToElem.value) {
      case 'km':
        result = input / 1000; break;
      case 'm':
        result = input; break;
      case 'cm':
        result = input / 0.01; break;
      case 'mm':
        result = input / 0.001; break;
      case 'mi':
        result = input / 1609.34; break;
      case 'yrd':
        result = input / 0.9144; break;
      case 'ft':
        result = input / 0.3048; break;
      case 'in':
        result = input / 0.0254; break;
      }
      document.getElementById('outputDistance').value = result;
  });
}
