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

  function dayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  const notes = makeCombinations(
    [
      "Naomi, you are warm in a way people do not forget.",
      "Naomi, you have this beautiful country rose heart.",
      "Naomi, you are soft, funny, brave, and a little bit magic.",
      "Naomi, you make ordinary little moments feel alive.",
      "Naomi, you are the kind of woman people write songs about.",
      "Naomi, you are not too much. You are full of life.",
      "Naomi, you have a heart that still gives even when life has asked a lot from you.",
      "Naomi, your softness is not weakness. It is one of the loveliest things about you.",
      "Naomi, you have chaotic sunshine energy in the best possible way.",
      "Naomi, you are a country rose with a flamethrower heart.",
      "Naomi, you are brave in ways you probably do not even notice.",
      "Naomi, you make people feel wanted just by being fully yourself.",
      "Naomi, you are funny, affectionate, stubborn, soft, and ridiculously easy to care about.",
      "Naomi, you have the kind of laugh that could make a hard day loosen its grip.",
      "Naomi, you are not ordinary. You are a whole little world.",
      "Naomi, your heart is bigger than you give yourself credit for.",
      "Naomi, you are beautiful in the way you care, joke, love, and keep going.",
      "Naomi, you have survived hard things and somehow stayed warm.",
      "Naomi, you are the sort of person who turns coffee, music, and chaos into something lovely.",
      "Naomi, you are rare as fuck, and yes, I said it.",
      "Naomi, you do not just give attention. You give feeling.",
      "Naomi, your weird little playful side is one of my favourite things.",
      "Naomi, you have old-school love energy in a world full of half-hearted nonsense.",
      "Naomi, you are stronger than you think and softer than you let on.",
      "Naomi, you are deeply loved in all your chaos, kindness, and country rose madness."
    ],
    [
      "You carry so much, but you still find room for humour, affection, and little moments that make people smile.",
      "You have this way of making someone feel chosen, not just noticed.",
      "You do not have to hide the fragile parts here. They are safe with me.",
      "You are not hard to love. You are someone worth learning properly.",
      "You make boring things feel special, and that is genuinely rare.",
      "You are allowed to be soft without apologising for it.",
      "You are allowed to be tired and still be wonderful.",
      "You are allowed to need reassurance without feeling guilty for it.",
      "You are allowed to have big feelings. They do not make you too much.",
      "You have proper mum energy, romantic energy, funny menace energy, and soft guitar girl energy all at once.",
      "You notice effort, and that says a lot about the kind of heart you have.",
      "You are not cold or detached. You feel things deeply, and that is part of what makes you beautiful.",
      "You make people want to show up better, not because you demand it, but because you deserve it.",
      "You have a playful side that makes everything feel lighter.",
      "You have a nurturing side that shows how much love lives in you.",
      "You have a romantic side that still believes in real connection, and that is precious.",
      "You have a creative brain that turns songs, pictures, little notes, and memories into something meaningful.",
      "You are not just someone to text. You are someone to build little rituals with.",
      "You are the kind of woman who makes someone want to protect the softness, not take advantage of it.",
      "You have been through things, but you still have warmth in you. That is massive.",
      "You are funny without trying too hard, which is annoyingly charming.",
      "You are affectionate in a way that feels real, messy, human, and alive.",
      "You do not need to perform today. You can just be Naomi.",
      "You are not a burden. You are someone worth carrying things with.",
      "You are allowed to be looked after, even if you are used to looking after everyone else."
    ],
    [
      "I hope this makes you feel safe.",
      "I hope this reminds you how special you are.",
      "I hope you smile at this, even a tiny bit.",
      "I hope you know I mean every word.",
      "I hope this feels like a little hug through the screen.",
      "I hope today is gentle with you.",
      "I hope you never forget how much you matter.",
      "I hope this little corner makes your heart feel lighter.",
      "I hope you feel chosen, because you are.",
      "I hope this reminds you that you are deeply cared for.",
      "I hope you know your softness is safe here.",
      "I hope you know your chaotic sunshine heart is loved here.",
      "I hope you feel proud of yourself today.",
      "I hope this gives you a tiny bit of peace.",
      "I hope you know you do not have to be strong every second.",
      "I hope you know you are enough before you do anything else.",
      "I hope you feel seen in the good way, not the scary way.",
      "I hope this makes the day feel a little less heavy.",
      "I hope you know I would choose your weird little world again.",
      "I hope you feel loved on the hard days too.",
      "I hope this app feels like a soft place to land.",
      "I hope you know there is nothing boring about you.",
      "I hope your heart gets the kindness it gives everyone else.",
      "I hope this makes you feel wanted, not pressured.",
      "I hope you open this whenever you forget how amazing you are."
    ],
    220
  );

  const openWhenMessages = {
    miss: makeCombinations(
      [
        "Naomi, I’m still here.",
        "Naomi, even when we’re not together, you are not forgotten.",
        "Naomi, missing someone just means your heart knows where home is.",
        "Naomi, if you miss me, breathe for a second.",
        "Naomi, you are not alone just because I’m not next to you.",
        "Naomi, I hope this feels like me squeezing your hand from wherever I am.",
        "Naomi, being apart does not make you any less cared for.",
        "Naomi, you are still in my day, even when you are not in the room.",
        "Naomi, if you miss me, let this be a tiny bridge back to me.",
        "Naomi, you are close to my heart, even from miles away."
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
        "Naomi, you don’t need to solve everything tonight.",
        "Naomi, you are allowed to pause.",
        "Naomi, you don’t have to be brave every second.",
        "Naomi, shrink the day down.",
        "Naomi, you are not failing because you feel overwhelmed.",
        "Naomi, you do not need to carry the whole day at once.",
        "Naomi, let the next minute be smaller than the whole problem.",
        "Naomi, you are allowed to put the heavy thing down for a bit.",
        "Naomi, nothing about you is too much for me.",
        "Naomi, take one soft breath."
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
        "Naomi, you are allowed to smile today.",
        "Naomi, I hope this makes your face do that cute little smile thing.",
        "Naomi, you are my favourite notification.",
        "Naomi, if this makes you smile, I win.",
        "Naomi, you deserve a little happy moment for no reason.",
        "Naomi, I hope this gives your heart a tiny bit of sunshine.",
        "Naomi, your smile is one of my favourite things.",
        "Naomi, you make soft moments feel special.",
        "Naomi, this is your permission slip to smile at your phone.",
        "Naomi, I hope the day gets a little lighter after this."
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
        "Naomi, you are loved exactly as you are.",
        "Naomi, you do not need to earn love.",
        "Naomi, you are wanted, chosen, and cared for.",
        "Naomi, you deserve someone who shows up in the small moments too.",
        "Naomi, if your brain tells you you’re hard to love, it is talking rubbish.",
        "Naomi, you are loved on the easy days and the complicated days.",
        "Naomi, there is no version of you that needs to perform to deserve care.",
        "Naomi, you are not a burden.",
        "Naomi, you are enough before you do anything else.",
        "Naomi, you are loved in the quiet ways too."
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
        "Naomi, you don’t have to carry tomorrow tonight.",
        "Naomi, close your eyes and let the day be done.",
        "Naomi, sleep softly.",
        "Naomi, let your thoughts slow down.",
        "Naomi, I hope you sleep like someone who knows they are loved.",
        "Naomi, rest is not lazy.",
        "Naomi, your mind can stop working now.",
        "Naomi, put the heavy thoughts down.",
        "Naomi, let this be your little goodnight hug.",
        "Naomi, you are safe, loved, and allowed to sleep."
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
        "Naomi, today might have been hard, but you are still here.",
        "Naomi, bad days do not make you weak.",
        "Naomi, you don’t have to turn the day into a lesson.",
        "Naomi, take the armour off for a minute.",
        "Naomi, you are loved on the difficult days too.",
        "Naomi, you made it through a day that tried to take too much.",
        "Naomi, you do not have to be okay immediately.",
        "Naomi, hard days are allowed to end softly.",
        "Naomi, you can start again tomorrow.",
        "Naomi, you are still you, even after a rough day."
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
    "Naomi, take one feeling from today and turn it into a four-chord loop.",
    "Naomi, write a chorus using chords you already love.",
    "Naomi, play something sad, then make the last chord hopeful.",
    "Naomi, pick a real song and change the strumming pattern until it feels like yours.",
    "Naomi, create a 20-second intro that feels warm, soft, and honest.",
    "Naomi, play one progression softly, then louder, then softer again.",
    "Naomi, write one lyric line and find chords that match it.",
    "Naomi, turn a voice note idea into a melody.",
    "Naomi, play a song you know, but slow it right down.",
    "Naomi, take a happy chord progression and make it sound emotional."
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
    "Little vibe check ✨ Naomi, soft acoustic guitar and a quiet little smile.",
    "Little vibe check ✨ Naomi, cosy country music, warm lights, and no pressure.",
    "Little vibe check ✨ Naomi, slow chords, soft feelings, and one song at a time.",
    "Little vibe check ✨ Naomi, blanket, guitar, and something gentle in the background.",
    "Little vibe check ✨ Naomi, calm heart, soft strings, and a little reminder you’re loved.",
    "Little vibe check ✨ Naomi, country rose energy — warm, soft, and a tiny bit magic.",
    "Little vibe check ✨ Naomi, quiet song, safe place, softer thoughts.",
    "Little vibe check ✨ Naomi, one chord, one breath, one tiny reset.",
    "Little vibe check ✨ Naomi, slow country love song without needing to rush anything.",
    "Little vibe check ✨ Naomi, gentle guitar and the world can wait five minutes.",
    "Little vibe check ✨ Naomi, soft lamp light, quiet strings, and letting the day fall away.",
    "Little vibe check ✨ Naomi, no pressure, no performance, just music that feels kind.",
    "Little vibe check ✨ Naomi, tiny smile, warm heart, one song you actually want to play.",
    "Little vibe check ✨ Naomi, cosy chaos, soft guitar, and being loved through all of it.",
    "Little vibe check ✨ Naomi, a little country song and a safer place to land.",
    "Little vibe check ✨ Naomi, slow hands, soft chords, gentle thoughts.",
    "Little vibe check ✨ Naomi, play something honest, even if it’s messy.",
    "Little vibe check ✨ Naomi, warm drink, soft song, and breathing properly for once.",
    "Little vibe check ✨ Naomi, country music, comfy clothes, and absolutely no stress.",
    "Little vibe check ✨ Naomi, one peaceful minute that belongs only to you."
  ];

  const moodData = {
    happy: {
      note: "Naomi, I love when you let yourself enjoy the good moments. You deserve the light ones too.",
      prompt: "Write something bright using your favourite open chords.",
      song: "A happy country chorus about smiling at the phone."
    },
    overwhelmed: {
      note: "Naomi, you don’t have to solve the whole world tonight. Shrink the day down to one breath.",
      prompt: "Play one chord slowly until your shoulders drop.",
      song: "A soft song about finding calm in the noise."
    },
    missing: {
      note: "Naomi, missing someone just means your heart knows where home is.",
      prompt: "Play a slow progression and leave space between the chords.",
      song: "A country song about missing someone’s voice."
    },
    cosy: {
      note: "Naomi, this is blanket weather, guitar nearby, no pressure, soft little smile energy.",
      prompt: "Write a warm chorus that sounds like a Sunday morning.",
      song: "A cosy country song about coffee and quiet love."
    },
    chaotic: {
      note: "Naomi, beautiful chaos is still beautiful. Slightly dangerous, but beautiful.",
      prompt: "Play something messy on purpose, then find the best bit.",
      song: "A funny chaotic love song about being a menace."
    },
    tired: {
      note: "Naomi, rest counts. Soft days count. Doing less is not failing.",
      prompt: "Play the gentlest version of a song you already know.",
      song: "A sleepy country song about being looked after."
    }
  };

  const thereMessages = [
    "Naomi, imagine I’m sat next to you. No pressure. Just you, the guitar, and one soft chord.",
    "Naomi, play it messy. I’d still be sat there grinning like you’d just sold out Wembley.",
    "Naomi, slow it down. The song doesn’t need to run away from you.",
    "Naomi, if you forget the next chord, laugh. That counts as musical expression.",
    "Naomi, pretend I’m there saying, ‘go on, one more time,’ because I definitely would.",
    "Naomi, you don’t need perfect. I’d rather hear your version.",
    "Naomi, take a breath before the chorus. That’s where the feeling lives.",
    "Naomi, play it like nobody is judging you. Because I’m not.",
    "Naomi, one chord at a time, country rose.",
    "Naomi, make it softer than you think it needs to be.",
    "Naomi, let the ugly first version exist. That’s how songs are born.",
    "Naomi, I’d sit through every restart.",
    "Naomi, if you get stuck, hum it first.",
    "Naomi, play the bit you like again. That’s allowed.",
    "Naomi, don’t perform it. Feel it.",
    "Naomi, let it sound like tonight.",
    "Naomi, you and a guitar is already enough.",
    "Naomi, tiny mistakes make it human.",
    "Naomi, you don’t have to impress anyone here.",
    "Naomi, I’m proud of the attempt, not just the result."
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
        "Naomi, soft mode. Something gentle, pretty, and easy to settle into.",
        "Naomi, this is the soft-guitar route. No pressure, no showing off, just something that feels warm.",
        "Naomi, soft mode unlocked. Let’s find something gentle enough to make the room feel quieter.",
        "Naomi, this one is for calm fingers, warm chords, and a song that does not ask too much.",
        "Naomi, soft means beautiful, not boring. Let’s find something that feels like a tiny exhale.",
        "Naomi, this route is for soft acoustic energy — gentle, warm, and easy to sit with.",
        "Naomi, go gentle here. Find something that feels like a candle and a quiet room.",
        "Naomi, soft mode is perfect when you want music to feel safe rather than impressive.",
        "Naomi, this is for the kind of song that makes your shoulders drop.",
        "Naomi, let’s find something soft enough that the guitar feels like company."
      ],
      query: "soft acoustic country guitar tutorial easy"
    },
    happy: {
      messages: [
        "Naomi, happy mode. Something warm, bright, and fun to play.",
        "Naomi, this route is for sunny chords and a song that makes you smile while playing.",
        "Naomi, happy mode unlocked. Let’s find something light, cute, and actually fun.",
        "Naomi, this is for the good mood version of you — the one that deserves a soundtrack.",
        "Naomi, let’s find something cheerful without being cheesy.",
        "Naomi, happy guitar route. Warm chords, easy rhythm, good little vibe.",
        "Naomi, pick something that makes the room feel brighter.",
        "Naomi, this is your little sunshine guitar route.",
        "Naomi, let’s find a song that feels like smiling at your phone.",
        "Naomi, happy mode says: play something that makes your heart feel lighter."
      ],
      query: "happy country songs guitar tutorial acoustic"
    },
    sad: {
      messages: [
        "Naomi, sad but okay mode. A softer song for when feelings are big but manageable.",
        "Naomi, this is not wallowing. This is letting the guitar carry a bit of the feeling.",
        "Naomi, sad but okay means gentle, honest, and not too heavy.",
        "Naomi, let’s find something emotional but still safe to play.",
        "Naomi, this route is for big feelings with soft edges.",
        "Naomi, a sad song can still be comforting. Let’s find one of those.",
        "Naomi, this is for when your heart needs a little acoustic honesty.",
        "Naomi, not dramatic. Just real, soft, and human.",
        "Naomi, let’s find a song that understands the feeling without making it worse.",
        "Naomi, sad but okay mode: soft chords, honest lyrics, no emotional ambush."
      ],
      query: "easy sad country songs guitar tutorial acoustic"
    },
    miss: {
      messages: [
        "Naomi, missing-you mode. Songs that say the thing without needing to over-explain it.",
        "Naomi, this route is for when distance feels loud and music can say it softer.",
        "Naomi, let’s find something that sounds like missing someone, but warmly.",
        "Naomi, this is the ‘wish you were here’ guitar route.",
        "Naomi, a missing-you song should feel tender, not miserable.",
        "Naomi, this route is for soft ache, warm chords, and a little honesty.",
        "Naomi, let’s find something that feels close even when someone is not nearby.",
        "Naomi, missing-you mode: gentle, romantic, and not too heavy.",
        "Naomi, this is for a song that says ‘I miss you’ without shouting it.",
        "Naomi, let’s find a tutorial that feels like a voice note with chords."
      ],
      query: "country songs about missing someone guitar tutorial"
    },
    romantic: {
      messages: [
        "Naomi, romantic mode. Soft country love songs with proper heart in them.",
        "Naomi, this route is for warm love songs, not cringe ones.",
        "Naomi, romantic mode unlocked. Let’s find something that feels personal and soft.",
        "Naomi, this is for country love songs that actually land.",
        "Naomi, let’s find a song that feels like a hand squeeze.",
        "Naomi, romantic does not need to be cheesy. It just needs to feel true.",
        "Naomi, this route is for soft lyrics, easy chords, and proper feeling.",
        "Naomi, let’s find a love song that sounds like it means it.",
        "Naomi, this is for a song that feels like being chosen.",
        "Naomi, romantic mode: warm chords, honest lyrics, country rose energy."
      ],
      query: "romantic country love songs guitar tutorial easy"
    },
    session: {
      messages: [
        "Naomi, proper guitar session mode. Chords, strumming, technique, and getting better.",
        "Naomi, this is the practice route. Not cute. Not fluffy. Actual progress.",
        "Naomi, proper session mode means we are going after the bit that is annoying you.",
        "Naomi, this is for getting cleaner, tighter, and more confident.",
        "Naomi, practice mode unlocked. Slow, focused, and useful.",
        "Naomi, this route is for when you want to actually improve, not just noodle around.",
        "Naomi, let’s find something that teaches properly and does not waffle.",
        "Naomi, this is the ‘right, let’s nail this’ route.",
        "Naomi, proper guitar session: clear lesson, useful technique, no chaos.",
        "Naomi, this is for building the skill, not just surviving the song."
      ],
      query: "country guitar lesson intermediate strumming chords"
    },
    write: {
      messages: [
        "Naomi, songwriter mode. Build something of your own from a feeling and a few chords.",
        "Naomi, this route is for turning a tiny feeling into an actual song idea.",
        "Naomi, songwriter mode unlocked. You do not need perfect lyrics. You need a starting point.",
        "Naomi, let’s find something that helps you write, not overthink.",
        "Naomi, this is for making your own little country song from scratch.",
        "Naomi, a song can start with one line. That is enough.",
        "Naomi, this route is for lyrics, chords, and a tiny bit of bravery.",
        "Naomi, let’s find a lesson that turns feelings into structure.",
        "Naomi, songwriting mode: messy first drafts are the whole point.",
        "Naomi, this is for making something that sounds like you."
      ],
      query: "how to write a country song on guitar chords lyrics"
    },
    calm: {
      messages: [
        "Naomi, calm mode. Gentle guitar, softer thoughts, no pressure.",
        "Naomi, this route is for slowing everything down without needing to explain why.",
        "Naomi, calm mode unlocked. Let’s find something peaceful and easy to sit with.",
        "Naomi, this is for when your nervous system needs a little acoustic blanket.",
        "Naomi, let’s find something gentle enough to quiet the room.",
        "Naomi, calm mode means no pressure, just soft strings and breathing room.",
        "Naomi, this is for music that helps the day stop shouting.",
        "Naomi, let’s find a guitar route that feels like a reset.",
        "Naomi, calm mode: gentle, slow, warm, and safe.",
        "Naomi, this is for when you need the guitar to help you land."
      ],
      query: "calming acoustic country guitar lesson"
    }
  };

  const strummingRoutes = {
    slow: {
      message: "Naomi, slow strumming mode. Take the pattern right down until your hand stops panicking.",
      query: "slow country guitar strumming practice beginner"
    },
    timing: {
      message: "Naomi, chord-change timing mode. Practise changing chords without losing the rhythm.",
      query: "how to change chords while strumming guitar lesson"
    },
    downup: {
      message: "Naomi, down-up pattern mode. Get the hand moving steady before worrying about fancy stuff.",
      query: "country guitar down up strumming patterns tutorial"
    },
    hammer: {
      message: "Naomi, hammer-ons and pull-offs mode. Tiny country details that make simple chords sound prettier.",
      query: "easy guitar hammer ons and pull offs country lesson"
    },
    pentatonic: {
      message: "Naomi, pentatonic mode. This is where little country fills and lead bits start making sense.",
      query: "beginner country guitar pentatonic scale patterns lesson"
    },
    slides: {
      message: "Naomi, slides and country licks mode. Little flavour bits that make it sound less basic.",
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
    const messages = openWhenMessages[type] || ["Naomi, I’ve got you."];
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
    const today = dayOfYear();
    noteIndex = today % notes.length;

    dailyRoseNote.innerText = notes[noteIndex];
    dailyNote.innerText = notes[(today + 17) % notes.length];
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
