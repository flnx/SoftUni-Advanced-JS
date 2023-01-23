function generateReport() {
    const checkBoxes = document.querySelectorAll('th input[type="checkbox"]');
    const tableElements = document.querySelectorAll('tbody tr');
    const textareaElement = document.getElementById('output');
    const output = [];

    for (let row = 0; row < tableElements.length; row++) {
        const reportObj = {};

        for (let col = 0; col < checkBoxes.length; col++) {
            if (checkBoxes[col].checked) {
                const key = checkBoxes[col].name;
                const value = tableElements[row].children[col].textContent;
                reportObj[key] = value;
            }
        }

        output.push(reportObj);
    }
    textareaElement.textContent = JSON.stringify(output);
}
