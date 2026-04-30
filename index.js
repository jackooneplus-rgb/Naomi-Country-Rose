document.addEventListener("DOMContentLoaded", function () {
  const pages = ["homePage", "songPage", "learnPage", "notesPage"];

  const noteModal = document.getElementById("noteModal");
  const songIdea = document.getElementById("songIdea");
  const songTitle = document.getElementById("songTitle");
  const songMeta = document.getElementById("songMeta");
  const songOutput = document.getElementById("songOutput");
  const thereMessage = document.getElementById("thereMessage");
  const favouritesList = document.getElementById("favouritesList");
  const dailyNote = document.getElementById("dailyNote");
  const bigNoteText = document.getElementById("bigNoteText");
  const noteGrid = document.getElementById("noteGrid");

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
    "You are softer than you realise and stronger than you feel.",
    "I’m proud of you for the tiny wins too.",
    "You don’t have to perform happiness here.",
    "This is your little corner of calm.",
    "I built this because your smile is dangerous and I’m clearly weak.",
    "If I could put a hug inside an app, this would be it.",
    "You’re my favourite notification.",
    "You’re allowed to rest. The world can wait five minutes.",
    "I hope you feel as loved as you are.",
    "I’d choose you on the easy days and the messy ones.",
    "You don’t have to carry everyone all the time.",
    "If you forget how special you are, open this again.",
    "You are not too much. You’re just enough for the right person.",
    "I’ll be your emergency contact for bad days and random thoughts.",
    "I’m not going anywhere just because life gets complicated.",
    "You can call me for no reason. That still counts as a reason.",
    "If you’re sad, I’m officially accepting spam calls.",
    "You’re cute when you’re focused. Annoyingly cute, actually.",
    "You plus a guitar is unfairly adorable.",
    "I hope this makes you roll your eyes and smile at the same time.",
    "Tiny reminder: I like you. A lot. Ridiculous amounts, actually.",
    "You’re the kind of person songs get written about.",
    "If your day is rubbish, this is your permission to restart it.",
    "You are safe with me.",
    "No brave face required.",
    "You don’t need to earn care. You already deserve it.",
    "I love your chaos. Most of it. Some of it requires supervision.",
    "If I’m asleep, wake me. I mean that.",
    "If I don’t answer, call again. I probably deserve it.",
    "You’re my favourite kind of trouble.",
    "You make ordinary things feel warmer.",
    "I’d listen to you talk nonsense for hours and call it quality time.",
    "You’re allowed to have bad days and still be loved properly.",
    "If nobody has told you today: you’re doing better than you think.",
    "You don’t need to fix everything tonight.",
    "One chord. One breath. One tiny step.",
    "You are not alone in this.",
    "I’ve got you. Fully. Not just when it’s convenient.",
    "I like the way your existence makes things feel softer.",
    "You could play one wrong chord and I’d still clap like an idiot.",
    "Your smile is genuinely a problem for my productivity.",
    "I hope you know how much you matter.",
    "You’re not hard to love.",
    "You’re worth effort. Proper effort.",
    "I made this because I wanted you to have something that feels like yours.",
    "I hope this app feels like a tiny safe place.",
    "You are the country song and the chorus.",
    "If life gets loud, come back here for a minute.",
    "You don’t have to be okay to be loved.",
    "I’m proud of your heart.",
    "You have a beautiful way of making people feel something.",
    "I’ll annoy you forever, but respectfully. Mostly.",
    "You’re cute. That’s it. That’s the note.",
    "I’m smiling just imagining you reading this.",
    "If today is a lot, I’ll be the calm bit.",
    "You are allowed to be looked after too.",
    "You don’t always have to be the strong one.",
    "I hope you feel held, even through a screen.",
    "You are my favourite little country rose.",
    "Coffee, guitar, you. That’s a dangerous combo.",
    "You’re the sort of person that makes silence feel comfortable.",
    "If you need reassurance, take this: I’m here.",
    "I choose you in the small ways too.",
    "You are more than enough, even when you feel like a mess.",
    "Your soft side is not a weakness.",
    "The world is better with you in it.",
    "You don’t need to rush. Good things can be slow.",
    "If your heart feels tired, let it rest here for a second.",
    "I hope you never doubt that you’re wanted.",
    "You make me want to be better. Annoying, but true.",
    "You are not a burden.",
    "I like you in ways I don’t even have words for yet.",
    "This app is basically me being soppy with better branding.",
    "You’re stuck with a man who builds apps to flirt. Sorry.",
    "If you smile at this, I win.",
    "You don’t need perfect chords. Just start.",
    "I’d rather hear your messy version than nobody else’s perfect one.",
    "You deserve softness.",
    "You deserve consistency.",
    "You deserve someone who shows up.",
    "I hope I make you feel safe.",
    "I hope I make you feel wanted.",
    "I hope I make you feel chosen.",
    "You have no idea how lovely you are.",
    "You are dangerously easy to care about.",
    "I’m glad you exist. That’s the note.",
    "If you’re overthinking, breathe. I’m not running.",
    "If you’re tired, rest. I’m still here.",
    "If you’re happy, tell me. I want to hear it.",
    "If you’re sad, tell me. I want to help carry it.",
    "You’re my favourite reason to check my phone.",
    "You make country songs make more sense.",
    "I hope this feels like a hug with buttons.",
    "You are the best part of this little app.",
    "I pinky promise this is only the beginning."
  ];

  let noteIndex = new Date().getDate() % notes.length;

  const songTemplates = [
    {
      title: "Safe With You",
      capo: "2",
      chords: "G - D - Em - C",
      strum: "D D U U D U",
      body:
`G              D
You don’t have to carry the night alone

Em             C
I’ll be the voice at the end of the phone

G              D
If the world feels heavy and hard to get through

C              D
I’ll be right there, choosing you

G              D
So play one chord and let it ring

Em             C
Even tired hearts can still sing`
    },
    {
      title: "Coffee and Guitar",
      capo: "3",
      chords: "C - G - Am - F",
      strum: "D D U D U",
      body:
`C              G
Coffee cup sitting by the bed

Am             F
Country song dancing round your head

C              G
You smile like sunrise through the rain

Am             F
Making ordinary feel okay

C              G
Six strings humming soft and low

Am             F
Like a little place only we know`
    },
    {
      title: "If You Need Me",
      capo: "1",
      chords: "D - A - Bm - G",
      strum: "D U D U D U",
      body:
`D              A
If the night gets loud inside your mind

Bm             G
Call my name and I’ll be on the line

D              A
Doesn’t matter if the clock says two

Bm             G
There’s no sleep more important than you

D              A
Let the rain fall, let the thunder roll

Bm             G
I’ll be the hand you get to hold`
    },
    {
      title: "Country Rose",
      capo: "4",
      chords: "G - C - D - Em",
      strum: "D D U U D",
      body:
`G              C
There’s a rose in the evening light

D              Em
With a guitar and a heart burning bright

G              C
She don’t know how much she shines

D              Em
But I see it every single time

G              C
If the road gets rough, if the day feels long

D              Em
I’ll be there in every song`
    }
  ];

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

  window.nextBigNote = function () {
    noteIndex = (noteIndex + 1) % notes.length;
    bigNoteText.innerText = notes[noteIndex];
  };

  window.setMood = function (mood) {
    songIdea.value = mood;
    generateSong();
  };

  window.generateSong = function () {
    const idea = songIdea.value.trim().toLowerCase();
    let template = songTemplates[0];

    if (idea.includes("coffee") || idea.includes("guitar")) {
      template = songTemplates[1];
    } else if (idea.includes("need") || idea.includes("there") || idea.includes("call") || idea.includes("miss")) {
      template = songTemplates[2];
    } else if (idea.includes("rose") || idea.includes("love") || idea.includes("naomi")) {
      template = songTemplates[3];
    } else if (idea.includes("safe")) {
      template = songTemplates[0];
    }

    songTitle.innerText = template.title;
    songMeta.innerText = `Capo: ${template.capo} • Chords: ${template.chords} • Strumming: ${template.strum}`;
    songOutput.innerText = template.body;
    thereMessage.classList.add("hidden");
  };

  window.playThereMode = function () {
    thereMessage.classList.toggle("hidden");
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

  function renderNoteGrid() {
    noteGrid.innerHTML = notes
      .map(function (note) {
        return `<p>${note}</p>`;
      })
      .join("");
  }

  hideAllPages();
  document.getElementById("homePage").classList.remove("hidden");
  noteModal.classList.add("hidden");
  dailyNote.innerText = notes[noteIndex];
  bigNoteText.innerText = notes[noteIndex];
  renderFavourites();
  renderNoteGrid();
});
