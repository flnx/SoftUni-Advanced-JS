function encodeAndDecodeMessages() {
  const encodeField = document.querySelectorAll('#main textarea')[0];
  const decodeField = document.querySelectorAll('#main textarea')[1];
  const encodeBtn = document.querySelectorAll('#main button')[0];
  const decodeBtn = document.querySelectorAll('#main button')[1];

  decodeField.value = '';

  encodeBtn.addEventListener('click', encode);
  decodeBtn.addEventListener('click', decode);

  function encode() {
    const message = [...encodeField.value].map((m) => m.charCodeAt() + 1);
    const updatedMessage = String.fromCharCode(...message);
    decodeField.value = updatedMessage;
    encodeField.value = '';
  }

  function decode() {
    const receivedMsg = [...decodeField.value].map((m) => m.charCodeAt() - 1);
    const decodedMsg = String.fromCharCode(...receivedMsg);
    decodeField.value = decodedMsg;
  }
}
