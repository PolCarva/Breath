const sound = document.getElementById("sound");
sound.volume = 0.2; // Esto establece el volumen al 50%. Puedes ajustarlo según prefieras.
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3; // Establece el volumen al 30%. Ajusta según prefieras.

const timerDiv = document.getElementById("timer");
let seconds = 0;

let started = false;

function startExperience() {
  if (!started) {
    started = true;
    sound.play();
    bgMusic.play();

    const circle = document.getElementById("circle");
    circle.textContent = "";
    circle.classList.add("breathing");
    setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDiv.textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
