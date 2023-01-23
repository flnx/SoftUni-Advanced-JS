function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = new RegExp('\\((.+?)\\)', 'g');

    let matches = pattern.exec(text);
    let result = [];

    while (matches !== null) {
        result.push(matches[1]);
        matches = pattern.exec(text);
    }

    return result.join('; ');
}
