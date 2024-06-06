// script.js
const coinElement = document.querySelector('.coin');
const coinCountElement = document.getElementById('coin-count');
const backgroundMusic = document.getElementById('background-music');

let coinCount = parseInt(localStorage.getItem('coinCount')) || 0;
updateCoinCount();

coinElement.addEventListener('click', () => {
    coinCount++;
    updateCoinCount();
    saveCoinCount();
});

function updateCoinCount() {
    coinCountElement.textContent = `Coins: ${coinCount}`;
}

function saveCoinCount() {
    localStorage.setItem('coinCount', coinCount);
}

// Play background music when the game starts
backgroundMusic.play();
