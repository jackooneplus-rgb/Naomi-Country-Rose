document.addEventListener("DOMContentLoaded", function () {
  const pages = ["homePage", "appPage"];

  const introPage = document.getElementById("introPage");
  const homePage = document.getElementById("homePage");
  const noteModal = document.getElementById("noteModal");
  const realSongInput = document.getElementById("realSongInput");
  const songIdea = document.getElementById("songIdea");
  const songTitle = document.getElementById("songTitle");
  const songMeta = document.getElementById("songMeta");
  const songStructure = document.getElementById("songStructure");
  const songOutput = document.getElementById("songOutput");
  const practiceMessage = document.getElementById("practiceMessage");
  const dailyNote = document.getElementById("dailyNote");
  const dailyRoseNote = document.getElementById("dailyRoseNote");
  const dailyChallenge = document.getElementById("dailyChallenge");
  const dailyMission = document.getElementById("dailyMission");
  const dailyVibe = document.getElementById("dailyVibe");
  const bgMusic = document.getElementById("bgMusic");
  const moodResult = document.getElementById("moodResult");
  const openWhenResult = document.getElementById("openWhenResult");
  const randomNoteText = document.getElementById("randomNoteText");
  const creativeResult = document.getElementById("creativeResult");
  const memoryInput = document.getElementById("memoryInput");
  const memoryList = document.getElementById("memoryList");

  const jacksonNumber = "447557683963";
  const songOfTheDayUrl = "https://open.spotify.com/playlist/7vxmBleyVTOaW8CHRHCxox";

  const backgroundTracks = [
    "soft-country-1.mp3",
    "soft-country-2.mp3",
    "soft-country-3.mp3",
    "soft-country-4.mp3"
  ];

  let currentTrackIndex = -1;
  let noteIndex = 0;

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

  const guitarPrompts = [
    "Take one feeling from today and turn it into a four-chord loop.",
    "Write a chorus using chords you already love.",
    "Play something sad, then make the last chord hopeful.",
    "Pick a real song and change the strumming pattern until it feels like yours.",
    "Create a 20-second intro that feels warm, soft, and honest.",
    "Play one progression softly, then louder, then softer again.",
    "Write one lyric line and find chords that match it.",
    "Turn a voice note idea into a melody.",
    "Play a song you know, but slow it right down.",
    "Take a happy chord progression and make it sound emotional."
  ];

  const missions = [
    "Send Jackson one line from a song idea.",
    "Pick one song you want to learn next.",
    "Play for five minutes with zero pressure.",
    "Write one lyric you’d normally be too shy to say.",
    "Save one song starter in the memory jar.",
    "Find a tutorial for a song you love.",
    "Record ten seconds of a chord idea.",
    "Open the playlist and pick tonight’s favourite.",
    "Play something messy and let it count.",
    "Send Jackson a tiny update, obviously."
  ];

  const vibes = [
    "Little vibe check ✨ Soft acoustic guitar and a quiet little smile.",
    "Little vibe check ✨ Cosy country music, warm lights, and no pressure.",
    "Little vibe check ✨ Slow chords, soft feelings, and one song at a time.",
    "Little vibe check ✨ Blanket, guitar, and something gentle in the background.",
    "Little vibe check ✨ Calm heart, soft strings, and a little reminder you’re loved.",
    "Little vibe check ✨ Country rose energy — warm, soft, and a tiny bit magic.",
    "Little vibe check ✨ Quiet song, safe place, softer thoughts.",
    "Little vibe check ✨ One chord, one breath, one tiny reset.",
    "Little vibe check ✨ Slow country love song without needing to rush anything.",
    "Little vibe check ✨ Gentle guitar and the world can wait five minutes.",
    "Little vibe check ✨ Soft lamp light, quiet strings, and letting the day fall away.",
    "Little vibe check ✨ No pressure, no performance, just music that feels kind.",
    "Little vibe check ✨ Tiny smile, warm heart, one song you actually want to play.",
    "Little vibe check ✨ Cosy chaos, soft guitar, and being loved through all of it.",
    "Little vibe check ✨ A little country song and a safer place to land.",
    "Little vibe check ✨ Slow hands, soft chords, gentle thoughts.",
    "Little vibe check ✨ Play something honest, even if it’s messy.",
    "Little vibe check ✨ Warm drink, soft song, and breathing properly for once.",
    "Little vibe check ✨ Country music, comfy clothes, and absolutely no stress.",
    "Little vibe check ✨ One peaceful minute that belongs only to you."
  ];

  const moodData = {
    happy: {
      note: "Good. I hope you let yourself enjoy it without waiting for the other shoe to drop.",
      prompt: "Write something bright using your favourite open chords.",
      song: "A happy country chorus about smiling at the phone."
    },
    overwhelmed: {
      note: "You don’t have to solve the whole world tonight. Shrink the day down to one breath.",
      prompt: "Play one chord slowly until your shoulders drop.",
      song: "A soft song about finding calm in the noise."
    },
    missing: {
      note: "Missing someone just means your heart knows where home is.",
      prompt: "Play a slow progression and leave space between the chords.",
      song: "A country song about missing someone’s voice."
    },
    cosy: {
      note: "This is blanket weather, guitar nearby, no pressure, soft little smile energy.",
      prompt: "Write a warm chorus that sounds like a Sunday morning.",
      song: "A cosy country song about coffee and quiet love."
    },
    chaotic: {
      note: "Beautiful chaos is still beautiful. Slightly dangerous, but beautiful.",
      prompt: "Play something messy on purpose, then find the best bit.",
      song: "A funny chaotic love song about being a menace."
    },
    tired: {
      note: "Rest counts. Soft days count. Doing less is not failing.",
      prompt: "Play the gentlest version of a song you already know.",
      song: "A sleepy country song about being looked after."
    }
  };

  const openWhenMessages = {
    miss: "I’m still here. Even when we’re not together, you’re not forgotten. You’re in my thoughts more than you probably realise, and I hope this feels like a little reminder that you matter to me.",
    overwhelmed: "You don’t need to be brave right now. Just breathe, unclench your jaw, and let one thing be enough. You don’t have to carry everything at once. I’ve got you.",
    smile: "You are allowed to smile today, even if everything feels a bit messy. Tiny smile. Tiny breath. Tiny reset. You deserve gentle moments too.",
    guitar: "Don’t chase perfect. Play what feels honest. One chord, one line, one tiny idea. The song doesn’t need to be finished tonight — it just needs to start somewhere.",
    loved: "You are loved exactly as you are. Not when you’re calmer, not when you’re stronger, not when you’ve got everything figured out. Right now. This version of you is enough.",
    sleepy: "You don’t have to carry tomorrow tonight. Let your mind slow down, let your body rest, and remember that you’re safe. I hope you sleep softly."
  };

  const thereMessages = [
    "Imagine I’m sat next to you. No pressure. Just you, the guitar, and one soft chord.",
    "Play it messy. I’d still be sat there grinning like you’d just sold out Wembley.",
    "Slow it down. The song doesn’t need to run away from you.",
    "If you forget the next chord, laugh. That counts as musical expression.",
    "Pretend I’m there saying, ‘go on, one more time,’ because I definitely would.",
    "You don’t need perfect. I’d rather hear your version.",
    "Take a breath before the chorus. That’s where the feeling lives.",
    "Play it like nobody is judging you. Because I’m not.",
    "One chord at a time, country rose.",
    "Make it softer than you think it needs to be.",
    "Let the ugly first version exist. That’s how songs are born.",
    "I’d sit through every restart.",
    "If you get stuck, hum it first.",
    "Play the bit you like again. That’s allowed.",
    "Don’t perform it. Feel it.",
    "Let it sound like tonight.",
    "You and a guitar is already enough.",
    "Tiny mistakes make it human.",
    "You don’t have to impress anyone here.",
    "I’m proud of the attempt, not just the result."
  ];

  const surpriseIdeas = [
    "feeling safe with someone",
    "missing someone at night",
    "coffee and guitar",
    "Naomi Country Rose",
    "funny chaotic love song",
    "calling me when you need me",
    "a campfire song about choosing someone every day",
    "a cosy country song about Sunday mornings",
    "a romantic song about not giving up",
    "a soft song about being looked after",
    "a country song about feeling wanted",
    "a song about falling asleep on the phone",
    "a song about a girl with a guitar",
    "a song about driving nowhere under the stars",
    "a song about a safe place",
    "a song about holding hands in the car",
    "a song about getting through hard days",
    "a song about being chosen",
    "a song about a rose by the fire",
    "a song about missing someone’s voice",
    "a song about soft guitar and warm lights",
    "a song about not running away",
    "a song about being someone’s calm",
    "a song about a girl who shines without knowing",
    "a song about second chances",
    "a song about tiny wins",
    "a song about being proud of someone",
    "a song about no brave face needed",
    "a song about staying when things get messy",
    "a song about choosing love over fear",
    "a song about being worth the effort",
    "a song about making someone smile",
    "a song about being someone’s favourite notification",
    "a song about never being too much",
    "a song about a road leading home",
    "a song about holding someone through a storm",
    "a song about being loved on bad days",
    "a song about being wanted",
    "a song about Jackson and Naomi forever",
    "a song about country music, coffee, and love"
  ];

  const progressions = [
    {
      capo: "2",
      chords: "G - D - Em - C",
      strum: "D D U U D U",
      lines: ["G              D", "Em             C", "G              D", "C              D"]
    },
    {
      capo: "3",
      chords: "C - G - Am - F",
      strum: "D D U D U",
      lines: ["C              G", "Am             F", "C              G", "Am             F"]
    },
    {
      capo: "1",
      chords: "D - A - Bm - G",
      strum: "D U D U D U",
      lines: ["D              A", "Bm             G", "D              A", "Bm             G"]
    },
    {
      capo: "0",
      chords: "Am - F - C - G",
      strum: "D D U U D",
      lines: ["Am             F", "C              G", "Am             F", "C              G"]
    }
  ];

  const creativeRoutes = {
    soft: {
      message: "Soft mode. Something gentle, pretty, and easy to settle into.",
      query: "soft acoustic country guitar tutorial easy"
    },
    happy: {
      message: "Happy mode. Something warm, bright, and fun to play.",
      query: "happy country songs guitar tutorial acoustic"
    },
    sad: {
      message: "Sad but okay mode. A softer song for when feelings are big but manageable.",
      query: "easy sad country songs guitar tutorial acoustic"
    },
    miss: {
      message: "Missing-you mode. Songs that say the thing without needing to over-explain it.",
      query: "country songs about missing someone guitar tutorial"
    },
    romantic: {
      message: "Romantic mode. Soft country love songs with proper heart in them.",
      query: "romantic country love songs guitar tutorial easy"
    },
    session: {
      message: "Proper guitar session mode. Chords, strumming, technique, and getting better.",
      query: "country guitar lesson intermediate strumming chords"
    },
    write: {
      message: "Songwriter mode. Build something of your own from a feeling and a few chords.",
      query: "how to write a country song on guitar chords lyrics"
    },
    calm: {
      message: "Calm mode. Gentle guitar, softer thoughts, no pressure.",
      query: "calming acoustic country guitar lesson"
    }
  };

  const strummingRoutes = {
    slow: {
      message: "Slow strumming mode. Take the pattern right down until your hand stops panicking.",
      query: "slow country guitar strumming practice beginner"
    },
    timing: {
      message: "Chord-change timing mode. Practise changing chords without losing the rhythm.",
      query: "how to change chords while strumming guitar lesson"
    },
    downup: {
      message: "Down-up pattern mode. Get the hand moving steady before worrying about fancy stuff.",
      query: "country guitar down up strumming patterns tutorial"
    },
    hammer: {
      message: "Hammer-ons and pull-offs mode. Tiny country details that make simple chords sound prettier.",
      query: "easy guitar hammer ons and pull offs country lesson"
    },
    pentatonic: {
      message: "Pentatonic mode. This is where little country fills and lead bits start making sense.",
      query: "beginner country guitar pentatonic scale patterns lesson"
    },
    slides: {
      message: "Slides and country licks mode. Little flavour bits that make it sound less basic.",
      query: "easy country guitar slides and licks lesson beginner"
    }
  };

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

    if (lower.includes("jackson")) {
      return {
        title: "Jackson Song",
        v1a: "Jackson’s got a way of making hard days light",
        v1b: "Turning quiet moments into something that feels right",
        ch1: "There’s a little kind of love I can’t explain",
        ch2: "But somehow Jackson is always in the refrain",
        v2a: "He says the wrong thing then makes me laugh again",
        v2b: "A little bit chaos, a little bit best friend",
        br1: "If the road gets rough, if the night feels long",
        br2: "Somehow he still feels like coming home"
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

    if (lower.includes("naomi") || lower.includes("rose") || lower.includes("country rose")) {
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
      v1b: `A little country song wrapped around ${idea}`,
      ch1: `${idea} in the headlights, warm and slow`,
      ch2: `One chord at a time, let the feeling show`,
      v2a: `There’s a quiet road and a sky turned gold`,
      v2b: `${idea} is the story waiting to be told`,
      br1: `You don’t need perfect, you just need start`,
      br2: `${idea} sounds better when it comes from the heart`
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

  function getSongShareText() {
    return `${songTitle.innerText}\n${songMeta.innerText}\n\n${songOutput.innerText}`;
  }

  function hideAllPages() {
    pages.forEach(function (pageId) {
      document.getElementById(pageId).classList.add("hidden");
    });
  }

  function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function pickRandomTrack() {
    if (!bgMusic || backgroundTracks.length === 0) return;

    let nextIndex = Math.floor(Math.random() * backgroundTracks.length);

    if (backgroundTracks.length > 1) {
      while (nextIndex === currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * backgroundTracks.length);
      }
    }

    currentTrackIndex = nextIndex;
    bgMusic.src = backgroundTracks[currentTrackIndex];
    bgMusic.load();
  }

  function startMusicSoftly() {
    if (!bgMusic) return;

    if (!bgMusic.src) {
      pickRandomTrack();
    }

    bgMusic.volume = 0.14;

    bgMusic.play().catch(function () {
      console.log("Music could not start yet.");
    });
  }

  window.enterSite = function () {
    introPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    startMusicSoftly();
  };

  window.toggleBackgroundMusic = function () {
    if (!bgMusic) return;

    if (bgMusic.paused) {
      startMusicSoftly();
    } else {
      bgMusic.pause();
    }
  };

  window.changeBackgroundMusic = function () {
    if (!bgMusic) return;

    pickRandomTrack();
    bgMusic.volume = 0.14;
    bgMusic.play().catch(function () {
      console.log("Music could not change yet.");
    });
  };

  window.showPage = function (pageId) {
    hideAllPages();
    document.getElementById(pageId).classList.remove("hidden");
    window.scrollTo(0, 0);
  };

  window.openSongOfTheDay = function () {
    window.open(songOfTheDayUrl, "_blank");
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
    dailyRoseNote.innerText = notes[noteIndex];
    dailyChallenge.innerText = randomFrom(guitarPrompts);
    dailyMission.innerText = randomFrom(missions);
    dailyVibe.innerText = randomFrom(vibes);
  };

  window.pickMood = function (mood) {
    const data = moodData[mood];
    if (!data) return;

    moodResult.classList.remove("hidden");
    moodResult.innerHTML = `
      <strong>For this mood:</strong><br>
      ${data.note}<br><br>
      <strong>Guitar spark:</strong> ${data.prompt}<br>
      <strong>Song idea:</strong> ${data.song}
    `;

    songIdea.value = data.song;
  };

  window.openWhen = function (type) {
    openWhenResult.classList.remove("hidden");
    openWhenResult.innerText = openWhenMessages[type] || "I’ve got you.";
  };

  window.randomLoveNote = function () {
    randomNoteText.innerText = randomFrom(notes);
  };

  window.quickSong = function (song) {
    realSongInput.value = song;
  };

  window.findChords = function () {
    const query = cleanIdea(realSongInput.value || "Cover Me Up Morgan Wallen");
    window.open(`https://www.ultimate-guitar.com/search.php?search_type=title&value=${encoded(query)}`, "_blank");
  };

  window.findTutorial = function () {
    const query = cleanIdea(realSongInput.value || "Cover Me Up Morgan Wallen");
    window.open(`https://www.youtube.com/results?search_query=${encoded(query + " guitar tutorial")}`, "_blank");
  };

  window.openCreativeRoute = function (routeName) {
    const route = creativeRoutes[routeName];
    if (!route) return;

    creativeResult.classList.remove("hidden");
    creativeResult.innerText = route.message;

    window.open(`https://www.youtube.com/results?search_query=${encoded(route.query)}`, "_blank");
  };

  window.openStrummingRoute = function (routeName) {
    const route = strummingRoutes[routeName];
    if (!route) return;

    const strummingResult = document.getElementById("strummingResult");

    if (strummingResult) {
      strummingResult.classList.remove("hidden");
      strummingResult.innerText = route.message;
    }

    window.open(`https://www.youtube.com/results?search_query=${encoded(route.query)}`, "_blank");
  };

  window.simplifySong = function () {
    const song = prompt("What song do you want to simplify?");

    if (!song || !song.trim()) return;

    const query = `${song.trim()} easiest way to play guitar simplified tutorial`;
    window.open(`https://www.youtube.com/results?search_query=${encoded(query)}`, "_blank");
  };

  window.setMood = function (mood) {
    songIdea.value = mood;
    generateSong();
  };

  window.surpriseMe = function () {
    songIdea.value = randomFrom(surpriseIdeas);
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
    practiceMessage.innerText = randomFrom(thereMessages);
    practiceMessage.classList.toggle("hidden");
  };

  window.copySong = function () {
    navigator.clipboard.writeText(getSongShareText()).then(function () {
      alert("Song copied ❤️");
    });
  };

  window.sendToJackson = function () {
    const text = getSongShareText();
    const whatsappUrl = `https://wa.me/${jacksonNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  window.saveFavourite = function () {
    const memories = JSON.parse(localStorage.getItem("naomiMemoryJar") || "[]");

    memories.unshift({
      type: "Song starter",
      text: `${songTitle.innerText}\n${songMeta.innerText}\n\n${songOutput.innerText}`,
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("naomiMemoryJar", JSON.stringify(memories.slice(0, 20)));
    renderMemoryJar();
  };

  window.saveMemoryNote = function () {
    const note = memoryInput.value.trim();

    if (!note) {
      alert("Write something first ❤️");
      return;
    }

    const memories = JSON.parse(localStorage.getItem("naomiMemoryJar") || "[]");

    memories.unshift({
      type: "Memory note",
      text: note,
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("naomiMemoryJar", JSON.stringify(memories.slice(0, 20)));
    memoryInput.value = "";
    renderMemoryJar();
  };

  window.sendMemoryToJackson = function () {
    const note = memoryInput.value.trim();

    if (!note) {
      alert("Write something first ❤️");
      return;
    }

    const whatsappUrl = `https://wa.me/${jacksonNumber}?text=${encodeURIComponent(note)}`;
    window.open(whatsappUrl, "_blank");
  };

  window.clearMemoryJar = function () {
    localStorage.removeItem("naomiMemoryJar");
    renderMemoryJar();
  };

  function renderMemoryJar() {
    const memories = JSON.parse(localStorage.getItem("naomiMemoryJar") || "[]");

    if (memories.length === 0) {
      memoryList.innerHTML = "No notes saved yet.";
      return;
    }

    memoryList.innerHTML = memories
      .map(function (memory) {
        return `<div class="memory-item"><strong>${memory.type}</strong><br><small>${memory.date}</small><p>${memory.text.replace(/\n/g, "<br>")}</p></div>`;
      })
      .join("");
  }

  function setDailyContent() {
    const today = new Date().getDate();
    noteIndex = today % notes.length;

    dailyRoseNote.innerText = notes[today % notes.length];
    dailyNote.innerText = notes[today % notes.length];
    dailyChallenge.innerText = guitarPrompts[today % guitarPrompts.length];
    dailyMission.innerText = missions[today % missions.length];
    dailyVibe.innerText = vibes[today % vibes.length];
  }

  hideAllPages();
  homePage.classList.add("hidden");
  noteModal.classList.add("hidden");
  setDailyContent();
  renderMemoryJar();
});
