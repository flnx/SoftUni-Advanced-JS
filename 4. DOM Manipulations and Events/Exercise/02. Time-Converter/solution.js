function attachEventsListeners() {
  const buttonElements = Array.from(document.querySelectorAll('input[type="button"]'));
  const inputFields = document.querySelectorAll('input[type="text"]');

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const timeObj = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  buttonElements.forEach((x) =>
    x.addEventListener('click', (e) => {
      const input = e.target.parentElement.querySelector('input[type=text]');
      const userValue = Number(input.value);
      const fieldId = input.id;

      if (!isNaN(userValue)) {
        const time = convert(userValue, fieldId);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
      }
    })
  );

  function convert(value, id) {
    const day = value / timeObj[id];
    return {
      days: day,
      hours: day * timeObj.hours,
      minutes: day * timeObj.minutes,
      seconds: day * timeObj.seconds,
    };
  }

  Array.from(inputFields).forEach((x) => (x.value = ''));
}
