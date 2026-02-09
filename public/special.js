// function playSong() {
//   const song = document.getElementById("song");
//   song.play();
// }


// Get audio element once
const song = document.getElementById("song");

// PLAY (used by old bubble + new Play button)
function playSong() {
  if (!song) return;

  song.play().catch(err => {
    console.error("Audio play failed:", err);
  });
}

// PAUSE / STOP
function pauseSong() {
  if (!song) return;

  song.pause();
  song.currentTime = 0; // reset to start
}

// Button bindings (new UI)
document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  if (playBtn) {
    playBtn.addEventListener("click", playSong);
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseSong);
  }
});
