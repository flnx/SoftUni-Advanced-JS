function solve() {
  const answers = document.querySelectorAll('.answer-wrap');

  for (let answer of answers) {
    answer.addEventListener('click', onClick);
  }

  const correctAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents',
  ];

  let counter = 0;
  let index = 1;

  function onClick(e) {
    const sections = document.querySelectorAll('section');
    const userAnswer = e.target.textContent;

    
    if (userAnswer == correctAnswers[0]) {
      console.log(userAnswer);
      counter++;
    }
    correctAnswers.shift();

    // const parentElement = e.target.closest('section'); // doesn't work in SoftUni Judge System 
    const parentElement = e.target.parentElement.parentElement.parentElement.parentElement;
    console.log(parentElement);

    parentElement.style.display = 'none';

    if (sections[index]) {
      sections[index].style.display = 'block';
      index++;
    } else {
      const output = document.querySelector('#results h1');
      if (counter == 3) {
        output.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        output.textContent = `You have ${counter} right answers`;
      }
      document.getElementById('results').style.display = 'block';
    }
  }
}
