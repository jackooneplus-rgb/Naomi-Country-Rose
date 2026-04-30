document.addEventListener("DOMContentLoaded", () => {

  const homePage = document.getElementById("homePage");
  const songPage = document.getElementById("songPage");
  const noteModal = document.getElementById("noteModal");
  const music = document.getElementById("bgMusic");

  // 🔥 FORCE modal hidden on load (this fixes your bug)
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
  };

});
