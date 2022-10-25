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
  lastTimeFiredFireball: 0,
};

let game = {
  speed: 2,
  movingMultiplier: 4,
  fireBallMultiplier: 5,
  fireInterval: 1000,
  cloudSpawnInterval: 3000,
};

let scene = {
  score: 0,
  lastCloudSpawn: 0,
};

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

function gameAction(timestamp) {
  const wizard = document.querySelector('.wizard');
  // increment score count
  scene.score++;

  // Add clouds
  if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
    let cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.x = gameArea.offsetWidth - 200;
    cloud.style.left = cloud.x + 'px';
    cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
    gameArea.appendChild(cloud);
    scene.lastCloudSpawn = timestamp;
  }

  // Modify cloud positions
  let clouds = document.querySelectorAll('.cloud');
  clouds.forEach((cloud) => {
    cloud.x -= game.speed;
    cloud.style.left = cloud.x + 'px';

    if (cloud.x + clouds.offsetWidth <= 0) {
      cloud.parentElement.removeChild(cloud);
    }
  });

  // Modify fireball positions
  let fireBalls = document.querySelectorAll('.fire-ball');

  fireBalls.forEach((fireBall) => {
    fireBall.x += game.speed * game.fireBallMultiplier;
    fireBall.style.left = fireBall.x + 'px';

    if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
      fireBall.parentElement.removeChild(fireBall);
    }
  });

  // Apply gravitation
  let isInAir = player.y + player.height <= gameArea.offsetHeight;

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

  if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
    wizard.classList.add('wizard-fire');
    addFireBall();
    player.lastTimeFiredFireball = timestamp;
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

  fireBall.classList.add('fire-ball');
  fireBall.style.top = player.y + player.height / 3 - 5 + 'px';
  fireBall.x = player.x + player.width;
  fireBall.style.left = fireBall.x + 'px';
  gameArea.appendChild(fireBall);
}
