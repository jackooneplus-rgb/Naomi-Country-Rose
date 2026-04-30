function goToSong() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("songPage").classList.remove("hidden");
}

function goHome() {
  document.getElementById("songPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}

function openNote() {
  document.getElementById("noteModal").classList.remove("hidden");
}

function closeNote() {
  document.getElementById("noteModal").classList.add("hidden");
}
