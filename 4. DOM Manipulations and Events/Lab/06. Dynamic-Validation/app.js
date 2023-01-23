function validate() {
    const inputField = document.getElementById('email');

    inputField.addEventListener('change', (e) => {
        const pattern = /^[a-z]+@{1}[a-z]+\.{1}[a-z]+$/g;
        let userInput = pattern.exec(inputField.value);

        if (userInput === null) {
            inputField.classList.add('error');
        } else if (userInput !== null) {
            inputField.classList.remove('error');
        }
    });
}
