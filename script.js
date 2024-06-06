// script.js
const coinElement = document.querySelector('.coin');
const coinCountElement = document.getElementById('coin-count');
const energyCountElement = document.getElementById('energy-count');

let coinCount = parseInt(localStorage.getItem('coinCount')) || 0;
let energy = parseInt(localStorage.getItem('energy')) || 100; // Initial energy

updateCoinCount();
updateEnergyCount();

coinElement.addEventListener('click', () => {
    if (energy > 0) {
        coinCount++;
        energy--; // Spend 1 energy per click
        updateCoinCount();
        updateEnergyCount();
        saveCoinCount();
        saveEnergy();
    }
});

function updateCoinCount() {
    coinCountElement.textContent = `Coins: ${coinCount}`;
}

function updateEnergyCount() {
    energyCountElement.textContent = `Energy: ${energy}`;
}

function saveCoinCount() {
    localStorage.setItem('coinCount', coinCount);
}

function saveEnergy() {
    localStorage.setItem('energy', energy);
}

// Refill energy every 30 seconds (adjust as needed)
setInterval(() => {
    if (energy < 100) {
        energy++;
        updateEnergyCount();
        saveEnergy();
    }
}, 5000);
