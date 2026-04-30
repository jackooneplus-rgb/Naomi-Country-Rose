document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  const songPage = document.getElementById("songPage");
  const noteModal = document.getElementById("noteModal");

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

  let audioContext;
  let musicTimer;
  let isPlaying = false;

  const chords = [
    [196.00, 246.94, 293.66], // G
    [146.83, 220.00, 293.66], // D
    [164.81, 196.00, 246.94], // Em
    [130.81, 196.00, 261.63]  // C
  ];

  function playSoftNote(frequency, delay) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(0, audioContext.currentTime + delay);
    gain.gain.linearRampToValueAtTime(0.035, audioContext.currentTime + delay + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + delay + 1.4);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + delay);
    oscillator.stop(audioContext.currentTime + delay + 1.5);
  }

  function playChordPattern() {
    const chord = chords[Math.floor(Math.random() * chords.length)];

    playSoftNote(chord[0], 0);
    playSoftNote(chord[1], 0.35);
    playSoftNote(chord[2], 0.7);
    playSoftNote(chord[1], 1.05);
  }

  window.toggleMusic = function () {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (!isPlaying) {
      isPlaying = true;
      playChordPattern();
      musicTimer = setInterval(playChordPattern, 1800);

      const buttons = document.querySelectorAll("button");
      buttons.forEach(function (button) {
        if (button.textContent.includes("Play soft backing")) {
          button.textContent = "Pause soft backing ⏸️";
        }
      });
    } else {
      isPlaying = false;
      clearInterval(musicTimer);

      const buttons = document.querySelectorAll("button");
      buttons.forEach(function (button) {
        if (button.textContent.includes("Pause soft backing")) {
          button.textContent = "Play soft backing 🎵";
        }
      });
    }
  };
});
