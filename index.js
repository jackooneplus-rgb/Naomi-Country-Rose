document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  const songPage = document.getElementById("songPage");
  const noteModal = document.getElementById("noteModal");
  const music = document.getElementById("bgMusic");

  // Force correct starting state
  homePage.classList.remove("hidden");
  songPage.classList.add("hidden");
  noteModal.classList.add("hidden");

  window.goToSong = function () {
    homePage.classList.add("hidden");
    songPage.classList.remove("hidden");
  };

  window.goHome = function () {
    songPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  };

  window.openNote = function () {
    noteModal.classList.remove("hidden");
  };

  window.closeNote = function () {
    noteModal.classList.add("hidden");
  };

  window.toggleMusic = function () {
    if (!music) return;

    if (music.paused) {
      music.volume = 0;
      music.play();

      let vol = 0;
      const fade = setInterval(function () {
        if (vol < 0.18) {
          vol += 0.02;
          music.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 120);
    } else {
      music.pause();
    }
  };
});
