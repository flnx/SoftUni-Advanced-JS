window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);

    const html = {
      fname: document.getElementById('fname'),
      email: document.getElementById('email'),
      phone: document.getElementById('phone'),
      address: document.getElementById('address'),
      code: document.getElementById('code'),
    };

    const keys = Object.keys(html);
    const userInput = keys.map((x) => html[x].value);

    if (fname.value == '' || email.value == '') {
      return;
    }

    const ul = document.getElementById('infoPreview');
    ul.innerHTML = `<li>Full Name: ${html.fname.value}</li>
    <li>Email: ${html.email.value}</li>
    <li>Phone Number: ${html.phone.value}</li>
    <li>Address: ${html.address.value}</li>
    <li>Postal Code: ${html.code.value}</li>`;

    keys.map((x) => (html[x].value = ''));
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    function onContinue() {
      document.getElementById('block').innerHTML = `<h3>Thank you for your reservation!</h3>`;
    }

    function onEdit() {
      keys.map((x, i) => (html[x].value = userInput[i]));
      ul.innerHTML = '';
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    }
  }
}
