const home = document.getElementById("homePage");
const song = document.getElementById("songPage");
const modal = document.getElementById("noteModal");

let musicPlaying = false;

function goToSong() {
  home.classList.add("hidden");
  song.classList.remove("hidden");
}

function goHome() {
  song.classList.add("hidden");
  home.classList.remove("hidden");
}

function openNote() {
  modal.classList.remove("hidden");
}

function closeNote() {
  modal.classList.add("hidden");
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");

  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  } else {
    music.pause();
    musicPlaying = false;
  }
}

function generateSong() {
  const idea = document.getElementById("songIdea").value;

  if (!idea) return;

  document.getElementById("songOutput").innerText = `
G        D
${idea} in the midnight glow

Em       C
Every word I never show

G        D
Feels like you in every line

C        D
Like your heart just found mine
  `;
}
