function validate() {
  const html = {
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPass: document.getElementById('confirm-password'),
    checkbox: document.getElementById('company'),
    companyNumber: document.getElementById('companyNumber'),
  };

  document.getElementById('submit').addEventListener('click', onClick);
  html.checkbox.addEventListener('change', () => {
    document.getElementById('companyInfo').style.display = html.checkbox.checked ? 'block' : 'none';
  });

  Array.from(document.querySelectorAll('input')).forEach((x) => (x.value = ''));
  html.checkbox.checked ? (html.checkbox.checked = false) : '';

  function onClick(e) {
    e.preventDefault();
    const valids = [];
    const invalids = [];

    const validations = {
      userRegex: /^[a-zA-Z0-9]{3,20}$/g,
      passRegex: /^\w{5,15}$/g,
      emailCheck: html.email.value.indexOf('@'),
    };

    const fieldValidator = {
      username: validations.userRegex.test(html.username.value),
      password: validations.passRegex.test(html.password.value) && html.confirmPass.value === html.password.value,
      email: validations.emailCheck > 0 && html.email.value.includes('.', validations.emailCheck),
    };

    const validFields = (key, isFieldValid) => {
      if (isFieldValid) {
        valids.push(html[key]);
      } else {
        invalids.push(html[key]);
      }
      if (key == 'password') {
        isFieldValid ? valids.push(html.confirmPass) : invalids.push(html.confirmPass);
      }
    };

    if (html.checkbox.checked) {
      const num = Number(html.companyNumber.value);
      num >= 1000 && num <= 9999 ? valids.push(html.companyNumber) : invalids.push(html.companyNumber);
    }

    Object.keys(fieldValidator).forEach((key) => {
      validFields(key, fieldValidator[key]);
    });

    valids.forEach((x) => (x.style.border = 'none'));
    invalids.forEach((x) => {
      x.style.border = '';
      x.style.borderColor = 'red';
    });

    document.getElementById('valid').style.display = invalids.length == 0 ? 'block' : 'none';
  }
}