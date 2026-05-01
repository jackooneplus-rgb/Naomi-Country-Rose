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
    "soft-country-1.mp3.mp3",
    "soft-country-2.mp3.mp3",
    "soft-country-3.mp3.mp3",
    "soft-country-4.mp3.mp3"
  ];

  let currentTrackIndex = -1;
  let noteIndex = 0;

  function makeCombinations(openings, middles, endings, limit) {
    const output = [];

    openings.forEach(function (opening) {
      middles.forEach(function (middle) {
        endings.forEach(function (ending) {
          if (output.length < limit) {
            output.push(`${opening} ${middle} ${ending}`);
          }
        });
      });
    });

    return output;
  }

  const notes = makeCombinations(
    [
      "You are loved more than you realise.",
      "You are safe with me.",
      "You do not have to be perfect to be loved.",
      "You make ordinary days feel warmer.",
      "You are not too much.",
      "You deserve softness today.",
      "You are my favourite little country rose.",
      "You are allowed to rest.",
      "You make me smile without even trying.",
      "You are worth showing up for.",
      "You matter to me, properly.",
      "You are doing better than you think.",
      "You do not need to earn care.",
      "You are allowed to have bad days and still be loved.",
      "You are the kind of person people write songs about.",
      "You make the world feel softer.",
      "You have a beautiful heart.",
      "You are wanted exactly as you are.",
      "You are allowed to be held through the messy bits.",
      "You are someone I would choose again."
    ],
    [
      "If today feels heavy, borrow a little bit of my strength.",
      "If your brain is loud, take one breath and let the world slow down.",
      "If you feel tired, you do not have to carry everything tonight.",
      "If you feel overwhelmed, shrink the day down to one tiny step.",
      "If you feel unsure, remember I am not running.",
      "If you need me, call me. I mean that.",
      "If you cannot find the words, you do not have to force them.",
      "If you need quiet, I will sit in the quiet with you.",
      "If you need a smile, I hope this gives you one.",
      "If the day has been a lot, you still made it through.",
      "If you feel emotional, you are still safe.",
      "If you feel messy, you are still completely lovable.",
      "If you need reassurance, take this as your reminder.",
      "If you need to pause, pause. Nothing bad happens because you rested.",
      "If you feel far away, you are still close to me.",
      "If you doubt yourself, let me believe in you for a minute.",
      "If your heart feels tired, let it rest here for a second.",
      "If you need softness, this is your little corner of it.",
      "If you feel like hiding, you do not have to hide from me.",
      "If you forget how much you matter, open this again."
    ],
    [
      "I’ve got you.",
      "I am proud of you.",
      "You are my favourite person.",
      "You are safe here.",
      "I’m not going anywhere.",
      "You’re doing enough.",
      "You are deeply cared for.",
      "You deserve gentle love.",
      "You are easy to love.",
      "I choose you in the small ways too.",
      "You make me want to be better.",
      "I hope this feels like a tiny hug.",
      "No brave face required.",
      "You are allowed to be looked after.",
      "You are loved on the hard days too.",
      "You are a beautiful little menace, respectfully.",
      "You are the note, the song, and the reason.",
      "I hope this makes your heart feel lighter.",
      "You are never a burden to me.",
      "Open this whenever you need reminding."
    ],
    180
  );

  const openWhenMessages = {
    miss: makeCombinations(
      [
        "I’m still here.",
        "Even when we’re not together, you are not forgotten.",
        "Missing someone just means your heart knows where home is.",
        "If you miss me, breathe for a second.",
        "You are not alone just because I’m not next to you.",
        "I hope this feels like me squeezing your hand from wherever I am.",
        "Being apart does not make you any less cared for.",
        "You are still in my day, even when you are not in the room.",
        "If you miss me, let this be a tiny bridge back to me.",
        "You are close to my heart, even from miles away."
      ],
      [
        "You matter to me more than distance can touch.",
        "I’m probably thinking about you too.",
        "You are still chosen, still wanted, still cared for.",
        "I hope this reminds you that I am still close.",
        "Some people stay with you even when they are not beside you.",
        "You are not out of sight or out of mind.",
        "I carry little thoughts of you through the day.",
        "You are one of my favourite places to come back to.",
        "This is a little note from me to you.",
        "You are allowed to miss me and still feel safe."
      ],
      [
        "I’ve got you.",
        "You are not forgotten.",
        "I’m still here.",
        "You are loved.",
        "I hope this makes the distance feel smaller.",
        "Come back to this whenever you need it.",
        "You matter to me.",
        "You are safe with me.",
        "I’m not going anywhere.",
        "I hope this feels like a tiny hug."
      ],
      120
    ),

    overwhelmed: makeCombinations(
      [
        "You don’t need to solve everything tonight.",
        "You are allowed to pause.",
        "You don’t have to be brave every second.",
        "Shrink the day down.",
        "You are not failing because you feel overwhelmed.",
        "You do not need to carry the whole day at once.",
        "Let the next minute be smaller than the whole problem.",
        "You are allowed to put the heavy thing down for a bit.",
        "Nothing about you is too much for me.",
        "Take one soft breath."
      ],
      [
        "Just breathe, unclench your jaw, and let one tiny thing be enough.",
        "The world can wait while you put yourself back together gently.",
        "You are human, and you are still doing your best.",
        "One breath. One sip of water. One tiny next step.",
        "You do not have to be okay all at once.",
        "You do not have to carry every thought to the finish line.",
        "Your nervous system is allowed to ask for softness.",
        "You can slow this down without failing.",
        "This moment does not need to be perfect.",
        "The big thing can wait while you find your feet."
      ],
      [
        "I’ve got you.",
        "You are safe here.",
        "One thing at a time.",
        "That counts.",
        "You are doing enough.",
        "No brave face required.",
        "You are not too much.",
        "Let this be smaller.",
        "I am proud of you.",
        "You can rest for a minute."
      ],
      120
    ),

    smile: makeCombinations(
      [
        "You are allowed to smile today.",
        "I hope this makes your face do that cute little smile thing.",
        "You are my favourite notification.",
        "If this makes you smile, I win.",
        "You deserve a little happy moment for no reason.",
        "I hope this gives your heart a tiny bit of sunshine.",
        "Your smile is one of my favourite things.",
        "You make soft moments feel special.",
        "This is your permission slip to smile at your phone.",
        "I hope the day gets a little lighter after this."
      ],
      [
        "Even if everything feels a bit messy.",
        "Even if the day has been a lot.",
        "Even if it is only a tiny smile.",
        "Even if nobody else sees it.",
        "Because tiny happy moments still count.",
        "Because you deserve gentle things.",
        "Because you are ridiculous amounts of lovely.",
        "Because you make everything feel warmer.",
        "Because this app exists to make you feel cared for.",
        "Because you are my favourite little country rose."
      ],
      [
        "Tiny smile. Tiny reset.",
        "That still counts.",
        "I hope you feel it.",
        "I hope this helps.",
        "You are loved.",
        "You deserve this.",
        "I am smiling too, probably.",
        "This is me being soppy again.",
        "You are worth every bit of effort.",
        "Open this again whenever you need another one."
      ],
      120
    ),

    loved: makeCombinations(
      [
        "You are loved exactly as you are.",
        "You do not need to earn love.",
        "You are wanted, chosen, and cared for.",
        "You deserve someone who shows up in the small moments too.",
        "If your brain tells you you’re hard to love, it is talking rubbish.",
        "You are loved on the easy days and the complicated days.",
        "There is no version of you that needs to perform to deserve care.",
        "You are not a burden.",
        "You are enough before you do anything else.",
        "You are loved in the quiet ways too."
      ],
      [
        "Not when you are calmer. Not when you are stronger. Right now.",
        "Not because you are useful. Not because you are easy. Because you are you.",
        "Even when you are tired, messy, emotional, or unsure.",
        "Even when you do not feel easy to be around.",
        "Even when the day has made you doubt yourself.",
        "Even when you need reassurance more than once.",
        "Even when you feel like you should hide the softer bits.",
        "Even when you are still working things out.",
        "Even when your heart feels a little bruised.",
        "Even when you forget it yourself."
      ],
      [
        "I’ve got you.",
        "You are not too much.",
        "You are safe with me.",
        "You are deeply cared for.",
        "You are worth loving properly.",
        "You do not have to prove anything.",
        "You matter to me.",
        "You are my favourite person.",
        "I choose you.",
        "Open this whenever you need reminding."
      ],
      120
    ),

    sleepy: makeCombinations(
      [
        "You don’t have to carry tomorrow tonight.",
        "Close your eyes and let the day be done.",
        "Sleep softly.",
        "Let your thoughts slow down.",
        "I hope you sleep like someone who knows they are loved.",
        "Rest is not lazy.",
        "Your mind can stop working now.",
        "Put the heavy thoughts down.",
        "Let this be your little goodnight hug.",
        "You are safe, loved, and allowed to sleep."
      ],
      [
        "Your body is allowed to rest.",
        "Nothing needs fixing right this second.",
        "Tomorrow can wait outside the door.",
        "The day is finished now.",
        "You have done enough.",
        "You do not need to rehearse every worry.",
        "You can let your shoulders drop.",
        "You can let the room be quiet.",
        "You can stop trying to be strong for tonight.",
        "You can come back to everything in the morning."
      ],
      [
        "You are safe.",
        "Sleep softly.",
        "I’ve got you.",
        "You are loved.",
        "Goodnight, country rose.",
        "Let your heart rest.",
        "No brave face needed.",
        "Tomorrow can wait.",
        "You did enough today.",
        "I hope you feel held."
      ],
      120
    ),

    hardday: makeCombinations(
      [
        "Today might have been hard, but you are still here.",
        "Bad days do not make you weak.",
        "You don’t have to turn the day into a lesson.",
        "Take the armour off for a minute.",
        "You are loved on the difficult days too.",
        "You made it through a day that tried to take too much.",
        "You do not have to be okay immediately.",
        "Hard days are allowed to end softly.",
        "You can start again tomorrow.",
        "You are still you, even after a rough day."
      ],
      [
        "That matters.",
        "They make you human.",
        "Sometimes surviving it is enough.",
        "You do not need it here.",
        "Especially then.",
        "You got through more than people can see.",
        "You can be tired and still be doing well.",
        "You can feel bruised and still be beautiful.",
        "You do not have to explain every feeling.",
        "The day can be hard without you being wrong."
      ],
      [
        "I am proud of you.",
        "I’ve got you.",
        "You are safe here.",
        "You are loved.",
        "No brave face required.",
        "Let tonight be gentle.",
        "You did enough.",
        "I hope this gives you a little peace.",
        "You can rest now.",
        "Open this again if the day still feels heavy."
      ],
      120
    )
  };

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
      messages: [
        "Soft mode. Something gentle, pretty, and easy to settle into.",
        "This is the soft-guitar route. No pressure, no showing off, just something that feels warm.",
        "Soft mode unlocked. Let’s find something gentle enough to make the room feel quieter.",
        "This one is for calm fingers, warm chords, and a song that does not ask too much.",
        "Soft means beautiful, not boring. Let’s find something that feels like a tiny exhale.",
        "This route is for soft acoustic energy — gentle, warm, and easy to sit with.",
        "Go gentle here. Find something that feels like a candle and a quiet room.",
        "Soft mode is perfect when you want music to feel safe rather than impressive.",
        "This is for the kind of song that makes your shoulders drop.",
        "Let’s find something soft enough that the guitar feels like company."
      ],
      query: "soft acoustic country guitar tutorial easy"
    },
    happy: {
      messages: [
        "Happy mode. Something warm, bright, and fun to play.",
        "This route is for sunny chords and a song that makes you smile while playing.",
        "Happy mode unlocked. Let’s find something light, cute, and actually fun.",
        "This is for the good mood version of you — the one that deserves a soundtrack.",
        "Let’s find something cheerful without being cheesy.",
        "Happy guitar route. Warm chords, easy rhythm, good little vibe.",
        "Pick something that makes the room feel brighter.",
        "This is your little sunshine guitar route.",
        "Let’s find a song that feels like smiling at your phone.",
        "Happy mode says: play something that makes your heart feel lighter."
      ],
      query: "happy country songs guitar tutorial acoustic"
    },
    sad: {
      messages: [
        "Sad but okay mode. A softer song for when feelings are big but manageable.",
        "This is not wallowing. This is letting the guitar carry a bit of the feeling.",
        "Sad but okay means gentle, honest, and not too heavy.",
        "Let’s find something emotional but still safe to play.",
        "This route is for big feelings with soft edges.",
        "A sad song can still be comforting. Let’s find one of those.",
        "This is for when your heart needs a little acoustic honesty.",
        "Not dramatic. Just real, soft, and human.",
        "Let’s find a song that understands the feeling without making it worse.",
        "Sad but okay mode: soft chords, honest lyrics, no emotional ambush."
      ],
      query: "easy sad country songs guitar tutorial acoustic"
    },
    miss: {
      messages: [
        "Missing-you mode. Songs that say the thing without needing to over-explain it.",
        "This route is for when distance feels loud and music can say it softer.",
        "Let’s find something that sounds like missing someone, but warmly.",
        "This is the ‘wish you were here’ guitar route.",
        "A missing-you song should feel tender, not miserable.",
        "This route is for soft ache, warm chords, and a little honesty.",
        "Let’s find something that feels close even when someone is not nearby.",
        "Missing-you mode: gentle, romantic, and not too heavy.",
        "This is for a song that says ‘I miss you’ without shouting it.",
        "Let’s find a tutorial that feels like a voice note with chords."
      ],
      query: "country songs about missing someone guitar tutorial"
    },
    romantic: {
      messages: [
        "Romantic mode. Soft country love songs with proper heart in them.",
        "This route is for warm love songs, not cringe ones.",
        "Romantic mode unlocked. Let’s find something that feels personal and soft.",
        "This is for country love songs that actually land.",
        "Let’s find a song that feels like a hand squeeze.",
        "Romantic does not need to be cheesy. It just needs to feel true.",
        "This route is for soft lyrics, easy chords, and proper feeling.",
        "Let’s find a love song that sounds like it means it.",
        "This is for a song that feels like being chosen.",
        "Romantic mode: warm chords, honest lyrics, country rose energy."
      ],
      query: "romantic country love songs guitar tutorial easy"
    },
    session: {
      messages: [
        "Proper guitar session mode. Chords, strumming, technique, and getting better.",
        "This is the practice route. Not cute. Not fluffy. Actual progress.",
        "Proper session mode means we are going after the bit that is annoying you.",
        "This is for getting cleaner, tighter, and more confident.",
        "Practice mode unlocked. Slow, focused, and useful.",
        "This route is for when you want to actually improve, not just noodle around.",
        "Let’s find something that teaches properly and does not waffle.",
        "This is the ‘right, let’s nail this’ route.",
        "Proper guitar session: clear lesson, useful technique, no chaos.",
        "This is for building the skill, not just surviving the song."
      ],
      query: "country guitar lesson intermediate strumming chords"
    },
    write: {
      messages: [
        "Songwriter mode. Build something of your own from a feeling and a few chords.",
        "This route is for turning a tiny feeling into an actual song idea.",
        "Songwriter mode unlocked. You do not need perfect lyrics. You need a starting point.",
        "Let’s find something that helps you write, not overthink.",
        "This is for making your own little country song from scratch.",
        "A song can start with one line. That is enough.",
        "This route is for lyrics, chords, and a tiny bit of bravery.",
        "Let’s find a lesson that turns feelings into structure.",
        "Songwriting mode: messy first drafts are the whole point.",
        "This is for making something that sounds like you."
      ],
      query: "how to write a country song on guitar chords lyrics"
    },
    calm: {
      messages: [
        "Calm mode. Gentle guitar, softer thoughts, no pressure.",
        "This route is for slowing everything down without needing to explain why.",
        "Calm mode unlocked. Let’s find something peaceful and easy to sit with.",
        "This is for when your nervous system needs a little acoustic blanket.",
        "Let’s find something gentle enough to quiet the room.",
        "Calm mode means no pressure, just soft strings and breathing room.",
        "This is for music that helps the day stop shouting.",
        "Let’s find a guitar route that feels like a reset.",
        "Calm mode: gentle, slow, warm, and safe.",
        "This is for when you need the guitar to help you land."
      ],
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

    if (!bgMusic.getAttribute("src")) {
      pickRandomTrack();
    }

    bgMusic.volume = 0.18;
    bgMusic.muted = false;

    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {
      playPromise.catch(function (error) {
        console.log("Music could not start:", error);
      });
    }
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
    bgMusic.volume = 0.18;
    bgMusic.muted = false;

    bgMusic.play().catch(function (error) {
      console.log("Music could not change:", error);
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
    dailyNote.innerText = randomFrom(notes);
    noteModal.classList.remove("hidden");
  };

  window.closeNote = function () {
    noteModal.classList.add("hidden");
  };

  window.refreshDailyRose = function () {
    noteIndex = (noteIndex + 1) % notes.length;
    dailyRoseNote.innerText = randomFrom(notes);
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
    const messages = openWhenMessages[type] || ["I’ve got you."];
    openWhenResult.classList.remove("hidden");
    openWhenResult.innerText = randomFrom(messages);
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

    creativeResult.innerHTML = `
      <p>${randomFrom(route.messages)}</p>
      <button class="primary-btn creative-go-btn" onclick="goToCreativeRoute('${routeName}')">
        Let’s go find something for this 🎸
      </button>
    `;
  };

  window.goToCreativeRoute = function (routeName) {
    const route = creativeRoutes[routeName];
    if (!route) return;

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
