const notes = [
  "I pinky promise to annoy you forever. No refunds, no cancellations, no escape clause.",
  "If you ever need me, I don’t care what time it is. Call me. If I don’t wake up, spam my phone until I do.",
  "You don’t have to be strong every second. I’ve got you when it feels heavy.",
  "You are genuinely one of my favourite people. Even when you’re being a tiny menace.",
  "No pressure today. Just breathe, play one chord, and remember I’m proud of you.",
  "I hope this makes you smile, even just a little. That’s the whole bloody point."
];

function setDailyNote() {
  const note = notes[new Date().getDate() % notes.length];
  document.getElementById("dailyNote").innerText = note;
}

function goToSong() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("songPage").classList.remove("hidden");
  location.hash = "songbook";
}

function goHome() {
  document.getElementById("songPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
  location.hash = "home";
}

function openNote() {
  setDailyNote();
  document.getElementById("noteModal").classList.remove("hidden");
}

function closeNote() {
  document.getElementById("noteModal").classList.add("hidden");
}

function generateSong() {
  const idea = document.getElementById("songIdea").value.trim();
  const mood = idea || "country love song";

  document.getElementById("tonightText").innerText = `Tonight feels like a “${mood}” kind of night`;

  document.getElementById("songOutput").innerText =
`G           D
You picked up your guitar tonight

Em          C
Chasing little sparks of light

G           D
Every chord sounds soft and true

C           D
Like the world slows down for you`;
}

let audioCtx;
let playing = false;
let interval;

function toggleMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (playing) {
    clearInterval(interval);
    playing = false;
    return;
  }

  playing = true;
  playTone();
  interval = setInterval(playTone, 800);
}

function playTone() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.value = 196;

  gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.45);
}

window.onload = function () {
  setDailyNote();

  if (location.hash === "#songbook") {
    goToSong();
  } else {
    goHome();
  }
};
