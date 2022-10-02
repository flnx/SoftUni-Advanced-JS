function notify(message) {
  const notificationDiv = document.getElementById('notification');

  notificationDiv.addEventListener('click', () => {
    notificationDiv.style.display = 'none';
  });

  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
}