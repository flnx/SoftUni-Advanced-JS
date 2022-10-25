// select game screens
const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

// game start listener
gameStart.addEventListener('click', onGameStart);

// global key listeners
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};

let player = {
  x: 150,
  y: 100,
  width: 0,
  height: 0,
};

let game = {
  speed: 2,
  movingMultiplier: 4,
};

let scene = {
  score: 0,
}

function onGameStart() {
  gameStart.classList.add('hide');

  const wizard = document.createElement('div');
  wizard.classList.add('wizard');
  wizard.style.top = player.y + 'px';
  wizard.style.left = player.x + 'px';
  gameArea.appendChild(wizard);

  player.width = wizard.offsetWidth;
  player.height = wizard.offsetHeight;

  // game infinite loop
  window.requestAnimationFrame(gameAction);
}

function onKeyDown(e) {
  keys[e.code] = true;
}

function onKeyUp(e) {
  keys[e.code] = false;
}

function gameAction() {
  const wizard = document.querySelector('.wizard');

  // increment score count
  scene.score++;

  // Apply gravitation
  let isInAir = (player.y + player.height) <= gameArea.offsetHeight;

  if (isInAir) {
    player.y += game.speed;
  }

  // Register user input
  if (keys.ArrowUp && player.y > 0) {
    player.y -= game.speed * game.movingMultiplier;
  }

  if (keys.ArrowDown && isInAir) {
    player.y += game.speed * game.movingMultiplier;
  }

  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.movingMultiplier;
  }

  if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
    player.x += game.speed * game.movingMultiplier;
  }

  if (keys.Space) {
    wizard.classList.add('wizard-fire');
    addFireBall();
  } else {
    wizard.classList.remove('wizard-fire');
  }

  // Apply movement;
  wizard.style.top = player.y + 'px';
  wizard.style.left = player.x + 'px';

  // Apply score
  gamePoints.textContent = scene.score;

  window.requestAnimationFrame(gameAction);
}

function addFireBall() {
  let fireBall = document.createElement('div');
  fireBall.classList.add('fireBall')
}
