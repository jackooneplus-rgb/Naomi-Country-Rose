document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  const songPage = document.getElementById("songPage");
  const noteModal = document.getElementById("noteModal");

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
});
