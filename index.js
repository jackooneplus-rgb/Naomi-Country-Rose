const homePage = document.getElementById("homePage");
const songPage = document.getElementById("songPage");
const noteModal = document.getElementById("noteModal");
const music = document.getElementById("bgMusic");

function goToSong() {
  homePage.classList.add("hidden");
  songPage.classList.remove("hidden");
}

function goHome() {
  songPage.classList.add("hidden");
  homePage.classList.remove("hidden");
}

function openNote() {
  noteModal.classList.remove("hidden");
}

function closeNote() {
  noteModal.classList.add("hidden");
}

/* 🎵 SOFT MUSIC WITH FADE */
function toggleMusic() {
  if (music.paused) {
    music.volume = 0;
    music.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.2) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);

  } else {
    music.pause();
  }
}
