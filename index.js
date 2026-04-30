document.addEventListener("DOMContentLoaded", function () {
  const pages = ["homePage", "appPage"];

  const noteModal = document.getElementById("noteModal");
  const realSongInput = document.getElementById("realSongInput");
  const songIdea = document.getElementById("songIdea");
  const songTitle = document.getElementById("songTitle");
  const songMeta = document.getElementById("songMeta");
  const songStructure = document.getElementById("songStructure");
  const songOutput = document.getElementById("songOutput");
  const practiceMessage = document.getElementById("practiceMessage");
  const favouritesList = document.getElementById("favouritesList");
  const dailyNote = document.getElementById("dailyNote");
  const dailyRoseNote = document.getElementById("dailyRoseNote");
  const dailyChallenge = document.getElementById("dailyChallenge");
  const dailyVibe = document.getElementById("dailyVibe");

  const notes = [
    "I pinky promise to annoy you forever. No refunds, no cancellations.",
    "If you ever need me, I don’t care what time it is. Call me. I’ve got you.",
    "You don’t have to be strong every second. I’ve got you when it feels heavy.",
    "You are genuinely one of my favourite people. Even when you’re being a tiny menace.",
    "No pressure today. Just breathe, play one chord, and remember I’m proud of you.",
    "I hope this makes you smile, even just a little. That’s the whole bloody point.",
    "You’re stuck with me now. Should’ve read the terms and conditions.",
    "Even on your worst days, you’re still my favourite person.",
    "If today feels heavy, borrow a little bit of my strength.",
    "You don’t need to explain the storm. I’ll sit with you in it.",
    "If your brain feels loud, play one chord and let the world slow down.",
    "You are safe with me.",
    "No brave face required.",
    "You don’t need to earn care. You already deserve it.",
    "If I’m asleep, wake me. I mean that.",
    "If I don’t answer, call again. I probably deserve it.",
    "You’re my favourite little country rose.",
    "I hope this feels like a hug with buttons.",
    "You make country songs make more sense.",
    "I’m glad you exist. That’s the note.",
    "If you’re overthinking, breathe. I’m not running.",
    "If you’re tired, rest. I’m still here.",
    "If you’re happy, tell me. I want to hear it.",
    "If you’re sad, tell me. I want to help carry it.",
    "You deserve softness.",
    "You deserve consistency.",
    "You deserve someone who shows up.",
    "I hope I make you feel safe.",
    "I hope I make you feel wanted.",
    "I hope I make you feel chosen.",
    "You have no idea how lovely you are.",
    "You are dangerously easy to care about.",
    "This app is basically me being soppy with better branding.",
    "You’re stuck with a man who builds apps to flirt. Sorry.",
    "If you smile at this, I win.",
    "I pinky promise this is only the beginning."
  ];

  const challenges = [
    "Play G → D → Em → C slowly three times.",
    "Pick one song and learn only the first verse.",
    "Play C → G → Am → F and hum anything over it.",
    "Try a down-down-up strumming pattern for two minutes.",
    "Play one chord perfectly, then stop. Tiny wins count.",
    "Find a song you love and learn just the intro.",
    "Play along to one soft country song, even if it is messy.",
    "Record ten seconds of guitar. No perfection allowed.",
    "Try switching from G to D without looking.",
    "Play something badly on purpose. That still counts."
  ];

  const vibes = [
    "Soft acoustic country by a fire.",
    "Coffee, guitar, and sunset.",
    "Morgan Wallen sadness but make it cosy.",
    "Slow country love song energy.",
    "Front porch guitar practice.",
    "Cute chaos with a capo.",
    "Warm blanket and soft strings.",
    "Country rose campfire night.",
    "Quiet song, loud feelings.",
    "One chord at a time."
  ];

  const surpriseIdeas = [
    "kittens causing chaos",
    "feeling safe",
    "coffee and guitar",
    "missing someone",
    "Naomi Country Rose",
    "a funny love song about being annoying forever",
    "a soft song about calling me when you need me",
    "a campfire song about choosing someone every day",
    "a cosy country song about Sunday mornings",
    "a romantic song about not giving up"
  ];

  const progressions = [
    {
      name: "Warm country favourite",
      capo: "2",
      chords: "G - D - Em - C",
      strum: "D D U U D U",
      lines: ["G              D", "Em             C", "G              D", "C              D"]
    },
    {
      name: "Soft acoustic love",
      capo: "3",
      chords: "C - G - Am - F",
      strum: "D D U D U",
      lines: ["C              G", "Am             F", "C              G", "Am             F"]
    },
    {
      name: "Big country chorus",
      capo: "1",
      chords: "D - A - Bm - G",
      strum: "D U D U D U",
      lines: ["D              A", "Bm             G", "D              A", "Bm             G"]
    },
    {
      name: "Moody campfire",
      capo: "0",
      chords: "Am - F - C - G",
      strum: "D D U U D",
      lines: ["Am             F", "C              G", "Am             F", "C              G"]
    }
  ];

  function cleanIdea(value) {
    const trimmed = value.trim();
    if (!trimmed) return "feeling safe";
    return trimmed.replace(/[<>]/g, "").slice(0, 80);
  }

  function titleCase(text) {
    return text
      .split(" ")
      .filter(Boolean)
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function chooseProgression(idea) {
    const lower = idea.toLowerCase();

    if (lower.includes("coffee") || lower.includes("guitar") || lower.includes("morning")) {
      return progressions[1];
    }

    if (lower.includes("miss") || lower.includes("need") || lower.includes("call") || lower.includes("distance")) {
      return progressions[2];
    }

    if (lower.includes("sad") || lower.includes("storm") || lower.includes("night") || lower.includes("cry")) {
      return progressions[3];
    }

    return progressions[0];
  }

  function getThemeLines(idea) {
    const lower = idea.toLowerCase();

    if (lower.includes("kitten") || lower.includes("cat")) {
      return {
        title: "Kittens on a Country Road",
        v1a: "Little paws running wild across the floor",
        v1b: "Tiny soft trouble always wanting more",
        ch1: "They’re chasing moonlight, stealing the show",
        ch2: "Like a small sweet song only love would know",
        v2a: "Curled up close when the rain comes down",
        v2b: "Turning this old house into a softer town",
        br1: "And if the world feels loud outside",
        br2: "There’s a little bit of peace in those sleepy eyes"
      };
    }

    if (lower.includes("coffee")) {
      return {
        title: "Coffee and Guitar",
        v1a: "Coffee cup warm in the morning light",
        v1b: "Your guitar waiting by your side",
        ch1: "Every little chord feels soft and true",
        ch2: "Like the whole world slows down for you",
        v2a: "Sun comes up and the day starts slow",
        v2b: "There’s a song in your hands only you would know",
        br1: "If the hours get heavy, let them pass",
        br2: "Some beautiful things are built to last"
      };
    }

    if (lower.includes("safe")) {
      return {
        title: "Safe With You",
        v1a: "You don’t have to carry the night alone",
        v1b: "I’ll be the voice at the end of the phone",
        ch1: "If the world feels heavy and hard to get through",
        ch2: "I’ll be right there, choosing you",
        v2a: "You can let that brave face fall",
        v2b: "I’ll still be standing through it all",
        br1: "No storm could scare me away",
        br2: "I meant it yesterday and I mean it today"
      };
    }

    if (lower.includes("miss")) {
      return {
        title: "Missing You Tonight",
        v1a: "There’s a quiet space where your laugh should be",
        v1b: "A little country song keeping company",
        ch1: "If distance tries to pull us apart",
        ch2: "I’ll keep your name tucked close to my heart",
        v2a: "Every road sign points back home",
        v2b: "Even when I’m standing here alone",
        br1: "Some miles are hard, but they don’t win",
        br2: "I’d choose you all over again"
      };
    }

    if (lower.includes("naomi") || lower.includes("rose") || lower.includes("love")) {
      return {
        title: "Country Rose",
        v1a: "There’s a rose in the evening light",
        v1b: "With a guitar and a heart burning bright",
        ch1: "She don’t know how much she shines",
        ch2: "But I see it every single time",
        v2a: "There’s a fire glow dancing in her eyes",
        v2b: "And a soft little smile that could light up the sky",
        br1: "If the road gets rough, if the day feels long",
        br2: "I’ll be there in every song"
      };
    }

    if (lower.includes("funny") || lower.includes("annoy")) {
      return {
        title: "Annoy You Forever",
        v1a: "I made a promise and I’m standing by",
        v1b: "To steal your peace and make you roll your eyes",
        ch1: "I’ll annoy you forever, that’s the deal",
        ch2: "Somehow still cute, somehow still real",
        v2a: "If you block my number, I’ll write a song",
        v2b: "Then sing it badly all night long",
        br1: "You should’ve read the terms before",
        br2: "Now I’m your problem forevermore"
      };
    }

    return {
      title: `${titleCase(idea)} Song`,
      v1a: `This one’s about ${idea}, soft and true`,
      v1b: "A little country song made just for you",
      ch1: "If the day feels heavy, let it move slow",
      ch2: "One chord at a time, let the feeling show",
      v2a: "There’s a quiet road and a sky turned gold",
      v2b: "And a story in your hands waiting to be told",
      br1: "You don’t need perfect, you just need start",
      br2: "The best songs come straight from the heart"
    };
  }

  function buildSong(idea, progression) {
    const t = getThemeLines(idea);
    const l = progression.lines;

    return {
      title: t.title,
      text:
`[Verse 1]
${l[0]}
${t.v1a}

${l[1]}
${t.v1b}

[Chorus]
${l[2]}
${t.ch1}

${l[3]}
${t.ch2}

[Verse 2]
${l[0]}
${t.v2a}

${l[1]}
${t.v2b}

[Chorus]
${l[2]}
${t.ch1}

${l[3]}
${t.ch2}

[Bridge]
${l[0]}
${t.br1}

${l[1]}
${t.br2}

[Final Chorus]
${l[2]}
${t.ch1}

${l[3]}
${t.ch2}`
    };
  }

  function encoded(value) {
    return encodeURIComponent(value.trim());
  }

  function hideAllPages() {
    pages.forEach(function (pageId) {
      document.getElementById(pageId).classList.add("hidden");
    });
  }

  window.showPage = function (pageId) {
    hideAllPages();
    document.getElementById(pageId).classList.remove("hidden");
    window.scrollTo(0, 0);
  };

  window.openNote = function () {
    dailyNote.innerText = notes[noteIndex];
    noteModal.classList.remove("hidden");
  };

  window.closeNote = function () {
    noteModal.classList.add("hidden");
  };

  window.refreshDailyRose = function () {
    noteIndex = (noteIndex + 1) % notes.length;
    const challengeIndex = (noteIndex + 2) % challenges.length;
    const vibeIndex = (noteIndex + 4) % vibes.length;

    dailyRoseNote.innerText = notes[noteIndex];
    dailyChallenge.innerText = challenges[challengeIndex];
    dailyVibe.innerText = vibes[vibeIndex];
  };

  window.quickSong = function (song) {
    realSongInput.value = song;
  };

  window.findChords = function () {
    const query = cleanIdea(realSongInput.value || "Cover Me Up Morgan Wallen");
    window.open(
      `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encoded(query)}`,
      "_blank"
    );
  };

  window.findTutorial = function () {
    const query = cleanIdea(realSongInput.value || "Cover Me Up Morgan Wallen");
    window.open(
      `https://www.youtube.com/results?search_query=${encoded(query + " guitar tutorial")}`,
      "_blank"
    );
  };

  window.setMood = function (mood) {
    songIdea.value = mood;
    generateSong();
  };

  window.surpriseMe = function () {
    const randomIdea = surpriseIdeas[Math.floor(Math.random() * surpriseIdeas.length)];
    songIdea.value = randomIdea;
    generateSong();
  };

  window.generateSong = function () {
    const idea = cleanIdea(songIdea.value);
    const progression = chooseProgression(idea);
    const song = buildSong(idea, progression);

    songTitle.innerText = song.title;
    songMeta.innerText = `Capo: ${progression.capo} • Chords: ${progression.chords} • Strumming: ${progression.strum}`;
    songStructure.innerText = "Structure: Verse 1 • Chorus • Verse 2 • Chorus • Bridge • Final Chorus";
    songOutput.innerText = song.text;
    practiceMessage.classList.add("hidden");
  };

  window.togglePracticeMessage = function () {
    practiceMessage.classList.toggle("hidden");
  };

  window.copySong = function () {
    const text = `${songTitle.innerText}\n${songMeta.innerText}\n\n${songOutput.innerText}`;

    navigator.clipboard.writeText(text).then(function () {
      alert("Song copied ❤️");
    });
  };

  window.saveFavourite = function () {
    const favourites = JSON.parse(localStorage.getItem("naomiFavourites") || "[]");

    favourites.unshift({
      title: songTitle.innerText,
      meta: songMeta.innerText
    });

    localStorage.setItem("naomiFavourites", JSON.stringify(favourites.slice(0, 5)));
    renderFavourites();
  };

  window.clearFavourites = function () {
    localStorage.removeItem("naomiFavourites");
    renderFavourites();
  };

  function renderFavourites() {
    const favourites = JSON.parse(localStorage.getItem("naomiFavourites") || "[]");

    if (favourites.length === 0) {
      favouritesList.innerHTML = "No favourites saved yet.";
      return;
    }

    favouritesList.innerHTML = favourites
      .map(function (fav) {
        return `<div class="favourite-item"><strong>${fav.title}</strong><br>${fav.meta}</div>`;
      })
      .join("");
  }

  function setDailyContent() {
    const today = new Date().getDate();
    noteIndex = today % notes.length;

    dailyRoseNote.innerText = notes[noteIndex];
    dailyNote.innerText = notes[noteIndex];
    dailyChallenge.innerText = challenges[today % challenges.length];
    dailyVibe.innerText = vibes[today % vibes.length];
  }

  hideAllPages();
  document.getElementById("homePage").classList.remove("hidden");
  noteModal.classList.add("hidden");
  setDailyContent();
  renderFavourites();
});
