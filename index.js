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
  const favouritesList = document.getElementById("favouritesList");
  const dailyNote = document.getElementById("dailyNote");
  const dailyRoseNote = document.getElementById("dailyRoseNote");
  const dailyChallenge = document.getElementById("dailyChallenge");
  const dailyMission = document.getElementById("dailyMission");
  const dailyVibe = document.getElementById("dailyVibe");
  const bgMusic = document.getElementById("bgMusic");
  const moodResult = document.getElementById("moodResult");
  const openWhenResult = document.getElementById("openWhenResult");
  const randomNoteText = document.getElementById("randomNoteText");

  const jacksonNumber = "447557683963";

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
    "Little vibe check ✨ One peaceful minute that belongs only to you.",
    "Little vibe check ✨ Quiet guitar and letting yourself be looked after.",
    "Little vibe check ✨ Soft reset, softer song, softest little smile.",
    "Little vibe check ✨ Pick a chord you love and let it do the talking.",
    "Little vibe check ✨ No brave face, just gentle music.",
    "Little vibe check ✨ A song that feels like a hug.",
    "Little vibe check ✨ Warm lights, safe feelings, and a tiny bit of country magic.",
    "Little vibe check ✨ Slow strumming and not needing to be perfect.",
    "Little vibe check ✨ Cosy little corner, big feelings, soft landing.",
    "Little vibe check ✨ Calm country girl energy with a guitar nearby.",
    "Little vibe check ✨ Something sweet, something slow, something just for you.",
    "Little vibe check ✨ Gentle chords and a reminder that you’re enough.",
    "Little vibe check ✨ A quiet room and a song that doesn’t ask too much.",
    "Little vibe check ✨ Little rose, little song, little bit of peace.",
    "Little vibe check ✨ Play what your heart can manage right now.",
    "Little vibe check ✨ Warm acoustic strings and zero expectations.",
    "Little vibe check ✨ Being soft is allowed.",
    "Little vibe check ✨ No rushing, no proving, just playing.",
    "Little vibe check ✨ One beautiful chord and a calm little breath.",
    "Little vibe check ✨ Something tender, something simple, something true.",
    "Little vibe check ✨ Country rose comfort mode.",
    "Little vibe check ✨ Let the guitar carry what words can’t.",
    "Little vibe check ✨ Slow song, soft heart, safe place.",
    "Little vibe check ✨ Let today be done and let the music be gentle.",
    "Little vibe check ✨ A little melody for a tired heart.",
    "Little vibe check ✨ Soft strings and being proud of tiny wins.",
    "Little vibe check ✨ Peaceful, pretty, and a little bit soppy.",
    "Little vibe check ✨ Find one song that makes your shoulders drop.",
    "Little vibe check ✨ No chaos for five minutes. Just you and the guitar.",
    "Little vibe check ✨ Sweet country calm with a tiny smile attached.",
    "Little vibe check ✨ Play something that feels like home."
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

    laugh: "You are allowed to laugh today, even if everything feels a bit messy. Tiny smile. Tiny breath. Tiny reset. Also, yes, I probably would still clap if you played one wrong chord with confidence.",

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
    "Play the chord like it owes you money. Softly, obviously.",
    "You don’t need perfect. I’d rather hear your version.",
    "Take a breath before the chorus. That’s where the feeling lives.",
    "If your fingers mess it up, blame the guitar. Very professional.",
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
    "Play it like it’s a secret.",
    "Tiny mistakes make it human.",
    "You don’t have to impress anyone here.",
    "Try the chorus slower.",
    "Try it like a campfire song.",
    "Try it like you’re singing it to one person.",
    "If it makes you smile, keep it.",
    "If it makes you feel something, keep it.",
    "Don’t overthink the bridge. Bridges are drama queens anyway.",
    "Your hands know more than your head thinks they do.",
    "Make the last chorus warmer.",
    "Play it like Sunday morning.",
    "Play it like a voice note you never sent.",
    "Play it like a promise.",
    "Start quiet. Build gently.",
    "Let the silence between chords do some work.",
    "You’re doing better than you think.",
    "That chord change? Try it again. It might be the one.",
    "Sing it badly first. That’s the law.",
    "If I was there, I’d ask for one more song.",
    "This bit doesn’t need to be perfect. It needs to be yours.",
    "You can always come back to the song tomorrow.",
    "The song is allowed to be unfinished.",
    "A chorus can be tiny and still hit hard.",
    "Give the song somewhere to breathe.",
    "Let the guitar answer the feeling.",
    "Some songs arrive sideways. Let it.",
    "Play it like your heart is telling the truth.",
    "Try changing just one word.",
    "Try changing just one chord.",
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
    "a love song about annoying each other forever",
    "a song about falling asleep on the phone",
    "a song about a girl with a guitar",
    "a song about driving nowhere under the stars",
    "a song about coffee at sunrise",
    "a song about dancing in the kitchen",
    "a song about a safe place",
    "a song about holding hands in the car",
    "a song about getting through hard days",
    "a song about being chosen",
    "a song about country music and messy hearts",
    "a song about laughing when life is heavy",
    "a song about a rose by the fire",
    "a song about missing someone’s voice",
    "a song about soft guitar and warm lights",
    "a song about sending one more message",
    "a song about not running away",
    "a song about being someone’s calm",
    "a song about a late night phone call",
    "a song about a girl who shines without knowing",
    "a song about second chances",
    "a song about tiny wins",
    "a song about learning guitar slowly",
    "a song about a front porch dream",
    "a song about a truck, a sunset, and a smile",
    "a song about building a little world together",
    "a song about being proud of someone",
    "a song about no brave face needed",
    "a song about staying when things get messy",
    "a song about a country rose with green eyes",
    "a song about a guitar by the bed",
    "a song about a sleepy Sunday morning",
    "a song about a promise made quietly",
    "a song about choosing love over fear",
    "a song about two people against the noise",
    "a song about being worth the effort",
    "a song about a beautiful stubborn heart",
    "a song about making someone smile",
    "a song about being someone’s favourite notification",
    "a song about blanket weather and country songs",
    "a song about a bonfire and a soft laugh",
    "a song about never being too much",
    "a song about playing one chord at a time",
    "a song about a road leading home",
    "a song about holding someone through a storm",
    "a song about being loved on bad days",
    "a song about a girl who deserves softness",
    "a song about a coffee cup and cowboy boots",
    "a song about a voice that feels like home",
    "a song about singing badly but meaning it",
    "a song about dancing badly in the kitchen",
    "a song about a pinky promise",
    "a song about spam calling until I wake up",
    "a song about being someone’s peace",
    "a song about a little app made with love",
    "a song about country songs making sense now",
    "a song about being scared but staying",
    "a song about a love that feels warm",
    "a song about a girl who makes silence comfortable",
    "a song about carrying less alone",
    "a song about a soft heart and strong soul",
    "a song about a firelight promise",
    "a song about a song only two people understand",
    "a song about opening the app when she needs a smile",
    "a song about not needing perfect chords",
    "a song about being proud of messy progress",
    "a song about finding calm in chaos",
    "a song about a rose that keeps blooming",
    "a song about a laugh I’d listen to forever",
    "a song about wanting to be better",
    "a song about loyalty",
    "a song about comfort",
    "a song about missing someone’s face",
    "a song about texting too much and not caring",
    "a song about not giving up on someone",
    "a song about a safe little corner",
    "a song about being wanted",
    "a song about Jackson and Naomi forever",
    "a song about country music, coffee, and love",
    "a song about a warm night and an acoustic guitar",
    "a song about being there every time",
    "a song about a girl who deserves the world",
    "a song about a man who is clearly obsessed",
    "a song about smiling at the phone",
    "a song about learning a love song slowly",
    "a song about a beautiful kind of chaos",
    "a song about forever, but not in a scary way",
    "a song about this only being the beginning"
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

  function startMusicSoftly() {
    if (!bgMusic) return;

    bgMusic.volume = 0.18;

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
  renderFavourites();
});
