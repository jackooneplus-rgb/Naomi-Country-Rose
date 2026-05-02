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

  function dayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function randomNoRepeat(array, storageKey, recentLimit) {
    if (!array || array.length === 0) return "";

    const limit = Math.min(recentLimit || 30, Math.max(1, array.length - 1));
    let recent = JSON.parse(localStorage.getItem(storageKey) || "[]");

    let available = array.filter(function (item) {
      return !recent.includes(item);
    });

    if (available.length === 0) {
      recent = [];
      available = array.slice();
    }

    const chosen = randomFrom(available);

    recent.unshift(chosen);
    recent = recent.slice(0, limit);

    localStorage.setItem(storageKey, JSON.stringify(recent));

    return chosen;
  }

  const sweetNotes = [
    "Naomi, you make normal little moments feel special. That is one of my favourite things about you.",
    "Naomi, you have this way of making coffee, music, chaos and a random message feel like a whole little memory.",
    "Naomi, you are not just lovely. You are interesting lovely. The dangerous kind.",
    "Naomi, you have country rose energy — soft, warm, beautiful, and somehow still capable of causing absolute chaos.",
    "Naomi, you are the kind of woman who makes a quiet evening feel like it matters.",
    "Naomi, I love that you can be soft and strong at the same time. It is honestly one of your best things.",
    "Naomi, you make people feel wanted in a way that feels real, not forced.",
    "Naomi, you are warm in the kind of way that stays with people.",
    "Naomi, you have this soft romantic side that makes everything feel a bit more alive.",
    "Naomi, you are the sort of person who turns a walk, a song, or a silly little moment into something memorable.",
    "Naomi, there is nothing boring about you. Even your chaos has personality.",
    "Naomi, you have a heart that still gives, even when life has asked a lot from it.",
    "Naomi, I hope you know how rare it is to be funny, caring, affectionate and brave all at once.",
    "Naomi, you make ordinary days feel softer just by being in them.",
    "Naomi, you are my favourite little country rose, and yes, that is soppy. I am standing by it.",
    "Naomi, you are beautiful in a way that is not just about looks. It is in how you care, joke, feel and keep going.",
    "Naomi, you have this way of making someone feel chosen, not just noticed.",
    "Naomi, your softness is one of the loveliest things about you. Do not hide it.",
    "Naomi, you are one of those people who can make a small thing feel massive in the best way.",
    "Naomi, you deserve love that notices the little things about you.",
    "Naomi, you are not just someone to talk to. You are someone to build little rituals with.",
    "Naomi, your heart is loud in the best way. Even when you joke, you still feel things deeply.",
    "Naomi, you have the kind of warmth that makes people want to stay close.",
    "Naomi, you are not too much. You are full of life, and that is different.",
    "Naomi, you have this funny little magic where you can be soppy, cheeky and caring all in the same sentence.",
    "Naomi, I hope this app feels like a soft place to land when the day has been a lot.",
    "Naomi, you make country songs make more sense. That is very annoying and very cute.",
    "Naomi, you are the kind of person who makes someone want to be consistent, not casual.",
    "Naomi, you are beautiful because you care deeply and still find ways to laugh.",
    "Naomi, I love that you notice effort. That says so much about your heart.",
    "Naomi, you are romantic without being fake. It feels messy, human and real.",
    "Naomi, you are soft in the places that matter and strong in the places life made you be.",
    "Naomi, you make being affectionate feel easy, not awkward.",
    "Naomi, there is something very lovely about how fully you feel things.",
    "Naomi, you have a whole little world in you — music, humour, care, chaos, softness and stubbornness.",
    "Naomi, you are the sort of woman someone remembers after one proper conversation.",
    "Naomi, I hope you know how much your warmth means.",
    "Naomi, your heart has survived things and still stayed open. That is huge.",
    "Naomi, you deserve to feel safe, wanted and properly appreciated.",
    "Naomi, you are not hard work. You are worth the work.",
    "Naomi, your smile should have its own warning label.",
    "Naomi, you have this way of being funny without losing the softness underneath.",
    "Naomi, you are the kind of person who makes a house feel warmer.",
    "Naomi, I hope you feel seen in the good way, not the scary way.",
    "Naomi, you make small romantic things feel massive because you actually feel them.",
    "Naomi, you are gentle without being boring and strong without being cold.",
    "Naomi, your playful side is honestly elite. Chaotic, but elite.",
    "Naomi, you are the kind of woman who deserves old-school effort and modern consistency.",
    "Naomi, I love how your brain jumps between serious, silly, soppy and random. It is very you.",
    "Naomi, you have this rare mix of mum energy, romantic energy and absolute menace energy.",
    "Naomi, you do not just give attention. You give feeling.",
    "Naomi, you make someone want to show up better.",
    "Naomi, you deserve a love that feels like peace but still gives butterflies.",
    "Naomi, I hope every time you open this, it reminds you that you matter.",
    "Naomi, your weirdness is not something to tolerate. It is part of the charm.",
    "Naomi, you make people feel like they belong in your little world.",
    "Naomi, you are soft chaos with a good heart. Very dangerous. Very lovely.",
    "Naomi, I love that you can turn the most random story into something I actually want to hear.",
    "Naomi, you have the kind of personality that makes silence feel comfortable.",
    "Naomi, you are not just cute. You are cute with depth. Nightmare combination.",
    "Naomi, you have warmth, humour and heart all mixed together. That is rare.",
    "Naomi, you are the kind of person who makes someone want to remember the details.",
    "Naomi, I hope you never feel like you have to shrink yourself to be loved.",
    "Naomi, your softness deserves protecting, not testing.",
    "Naomi, you are the kind of woman who makes loyalty feel easy.",
    "Naomi, you deserve to be treated like the rare little country rose you are.",
    "Naomi, you can be chaotic and still be completely lovable. Both things are true.",
    "Naomi, your caring side is beautiful, but so is the silly side that makes everything lighter.",
    "Naomi, I hope this gives you one of those tiny smiles you try not to do.",
    "Naomi, you are allowed to be looked after too.",
    "Naomi, you give off ‘soft heart, strong soul, dangerous humour’ energy.",
    "Naomi, you are one of those people who makes affection feel alive.",
    "Naomi, I love that you are not robotic. You are expressive, funny, soppy and real.",
    "Naomi, you are the kind of person who makes someone want to write songs badly and mean every word.",
    "Naomi, you deserve someone who sees the mum, the woman, the romantic, the chaos and the soft heart.",
    "Naomi, you are lovable on the easy days and the messy ones.",
    "Naomi, your heart is not too much. It is just not made for half-hearted people.",
    "Naomi, you make the world feel less grey.",
    "Naomi, I hope you know how much light you carry, even when you feel tired.",
    "Naomi, you have a kind of beauty that comes from being fully human.",
    "Naomi, you make me want to build little things just to make you smile.",
    "Naomi, this is your reminder that you are cared for in the details.",
    "Naomi, you are funny, soft, resilient and wildly lovable. Annoying, really.",
    "Naomi, you are the sort of person who deserves love notes hidden in ordinary days.",
    "Naomi, you have this lovely way of making affection feel playful instead of heavy.",
    "Naomi, your heart deserves consistency, not confusion.",
    "Naomi, you are a little world of music, coffee, chaos, care and warmth.",
    "Naomi, I hope you know someone can see your chaos and still think, yes, that one.",
    "Naomi, you deserve to feel chosen without having to ask twice.",
    "Naomi, your smile, your humour and your heart are a ridiculous combination.",
    "Naomi, you are not just someone’s good morning message. You are the reason they want to send one.",
    "Naomi, you make gentle things feel exciting.",
    "Naomi, you are the kind of woman who makes small promises feel big.",
    "Naomi, I hope you feel wrapped up by this little note.",
    "Naomi, you have a heart that makes people want to be careful with it.",
    "Naomi, you are proof that soft does not mean weak.",
    "Naomi, you are allowed to be both the sunshine and the storm.",
    "Naomi, I hope this reminds you that your weird little world is beautiful.",
    "Naomi, you make ordinary words feel warmer.",
    "Naomi, you deserve the kind of love that pays attention.",
    "Naomi, you are the best kind of trouble.",
    "Naomi, you are someone worth choosing properly.",
    "Naomi, you are not background noise. You are the whole song.",
    "Naomi, I hope today gives you something gentle back.",
    "Naomi, you are the kind of person who makes effort feel worth it.",
    "Naomi, you are soft enough to love deeply and strong enough to keep going.",
    "Naomi, you are the country rose. No notes. Actually, many notes. This app is full of them.",
    "Naomi, I hope you feel special because you are.",
    "Naomi, your heart is one of your best features.",
    "Naomi, you make someone want to slow down and actually enjoy the moment.",
    "Naomi, you are not just lovely when you are happy. You are lovely when you are tired, messy and real too.",
    "Naomi, you make affection feel like home.",
    "Naomi, you deserve a love that feels steady enough to relax into.",
    "Naomi, you are the kind of woman who can make a normal Tuesday feel romantic.",
    "Naomi, I hope this catches you at the exact moment you need it.",
    "Naomi, you are allowed to believe good things can stay.",
    "Naomi, you are beautifully, dangerously, wonderfully you."
  ];

  const funnyNotes = [
    "Naomi, you are cute, funny and slightly unhinged. Dangerous combo.",
    "Naomi, you are basically country rose energy with a side quest problem.",
    "Naomi, you being adorable and chaotic at the same time feels illegal.",
    "Naomi, you have the emotional range of a love song and the random energy of a group chat at 2am.",
    "Naomi, you are soft, sweet and probably one bad mood away from fighting a toaster.",
    "Naomi, I do not know how you make chaos look cute, but frankly it is suspicious.",
    "Naomi, you are a soppy little menace and I will not be taking questions.",
    "Naomi, your vibe is ‘I need a hug’ and ‘I will absolutely cause problems’ at the same time.",
    "Naomi, you are the human version of a country song, a coffee, and a minor disaster rolled into one.",
    "Naomi, you have no business being this cute while being this random.",
    "Naomi, you are the reason the phrase ‘adorable chaos’ had to be invented.",
    "Naomi, if being lovely but slightly feral was a sport, you would be Olympic level.",
    "Naomi, you are soft petals, strong roots, and probably a flamethrower in the shed.",
    "Naomi, you could probably make burning toast sound like a romantic plot twist.",
    "Naomi, your brain is a theme park and somehow I still want a season pass.",
    "Naomi, you are cute enough to get away with nonsense. That is dangerous power.",
    "Naomi, you give ‘old-school romance’ and ‘may accidentally start a small fire’ energy.",
    "Naomi, you are a walking plot twist with pretty eyes and a guitar.",
    "Naomi, you are chaos, but like premium chaos. Boutique chaos.",
    "Naomi, you are basically a romantic comedy with country music and snacks.",
    "Naomi, you are the kind of person who says one random thing and suddenly the day is better.",
    "Naomi, you are adorable, but I do feel like you should come with instructions.",
    "Naomi, you are lovely. Absolutely mad, but lovely.",
    "Naomi, if your personality was a weather forecast, it would be sunshine with a chance of emotional damage.",
    "Naomi, you are cute in a way that feels like a trap. Respectfully, I am walking into it.",
    "Naomi, you make being a little bit weird look like a competitive advantage.",
    "Naomi, you are sweet enough to melt someone and chaotic enough to confuse the health and safety team.",
    "Naomi, you are soft country romance with gremlin settings hidden somewhere.",
    "Naomi, you are a country rose, but one that might swear at the watering can.",
    "Naomi, I like your weird. It is top-tier weird.",
    "Naomi, you are proof that someone can be romantic and a menace in the same breath.",
    "Naomi, you are not just a vibe. You are several vibes having a meeting with no agenda.",
    "Naomi, your personality has tabs open. Many tabs. Music playing from one of them.",
    "Naomi, you are the kind of chaos I would absolutely subscribe to.",
    "Naomi, you are cute, funny, soppy and unpredictable. Honestly, terrible for my concentration.",
    "Naomi, you make me want to be romantic and also ask if you have eaten properly.",
    "Naomi, you are basically a love song with a sarcastic commentary track.",
    "Naomi, you are a little bit sunshine and a little bit ‘where did that come from?’",
    "Naomi, your randomness is not a flaw. It is part of the brand.",
    "Naomi, you are charming enough that even your chaos has PR.",
    "Naomi, you are the only person who can make emotional vulnerability and nonsense feel like the same conversation.",
    "Naomi, you are sweet, stubborn and suspiciously good at being memorable.",
    "Naomi, I feel like your brain has a playlist, a shopping list and a dramatic monologue all running at once.",
    "Naomi, you are adorable enough to be a problem.",
    "Naomi, your energy is ‘soft girl with admin issues and a guitar’. Iconic.",
    "Naomi, you are the reason I need both a love note and a risk assessment.",
    "Naomi, you are funny in the way that sneaks up and punches a smile out of someone.",
    "Naomi, you are a small emotional tornado with nice hair and a good heart.",
    "Naomi, you are a menace, but like, the kind people write songs for.",
    "Naomi, you are very cute for someone who is clearly capable of causing chaos before breakfast."
  ];

  const deepNotes = [
    "Naomi, you deserve love that feels safe, steady and still exciting.",
    "Naomi, you have had to be strong for a long time, but you should not have to be strong every second.",
    "Naomi, your softness deserves somewhere safe to land.",
    "Naomi, you are allowed to be cared for without having to prove you deserve it.",
    "Naomi, you deserve consistency that does not make you question where you stand.",
    "Naomi, your heart is not too much. It just needs to be held properly.",
    "Naomi, you can be scared and still be brave. Both things can live in you.",
    "Naomi, I hope you know you do not have to perform happiness to be loved.",
    "Naomi, you deserve someone who chooses you in actions, not just words.",
    "Naomi, the parts of you that feel fragile are not flaws. They are places that deserve gentleness.",
    "Naomi, you are allowed to need reassurance. That does not make you weak.",
    "Naomi, you are not hard to love. You are someone worth understanding.",
    "Naomi, you deserve a love that makes your nervous system breathe out.",
    "Naomi, your past does not make you difficult. It makes your softness even more important.",
    "Naomi, you can let yourself receive good things without waiting for them to disappear.",
    "Naomi, you deserve to feel wanted without having to chase it.",
    "Naomi, you are safe to be fully yourself here.",
    "Naomi, you do not need to shrink the emotional parts of you to make someone stay.",
    "Naomi, you deserve a connection that is warm, honest and steady enough to trust.",
    "Naomi, you are not a burden on hard days. You are still loved on them.",
    "Naomi, you can be a mum, a woman, a romantic, a mess, a fighter and a soft heart all at once.",
    "Naomi, the fact that you still love deeply says a lot about your courage.",
    "Naomi, you deserve love that sees your responsibilities and still sees you.",
    "Naomi, your heart has carried a lot. It deserves kindness back.",
    "Naomi, you are allowed to be held through the messy bits, not just admired in the easy ones.",
    "Naomi, safety does not have to be boring. The right love can be calm and electric.",
    "Naomi, you deserve to be someone’s first thought, not their afterthought.",
    "Naomi, I hope you never mistake being sensitive for being weak.",
    "Naomi, you are lovable before you fix, explain, manage or carry anything.",
    "Naomi, you deserve someone who protects the soft parts, not someone who makes you hide them."
  ];

  const notes = sweetNotes.concat(funnyNotes, deepNotes);

  const openWhenMessages = {
    miss: [
      "Naomi, I’m still here. Even when we are not together, you are not forgotten.",
      "Naomi, if you miss me, let this be a tiny bridge back to me.",
      "Naomi, being apart does not make you any less cared for.",
      "Naomi, I hope this feels like me squeezing your hand from wherever I am.",
      "Naomi, you are still in my day, even when you are not in the room.",
      "Naomi, you matter to me more than distance can touch.",
      "Naomi, I hope this makes the space between us feel a little smaller.",
      "Naomi, missing me does not mean you are alone. I am still here.",
      "Naomi, I carry little thoughts of you through the day.",
      "Naomi, you are one of my favourite places to come back to.",
      "Naomi, if you miss me, breathe. I am probably thinking about you too.",
      "Naomi, this is your tiny reminder that you are wanted.",
      "Naomi, distance is annoying, but it does not get to win.",
      "Naomi, I hope you feel close to me for a second while reading this.",
      "Naomi, you are not out of sight or out of mind."
    ],
    overwhelmed: [
      "Naomi, you do not need to solve everything tonight. One breath first.",
      "Naomi, unclench your jaw. Drop your shoulders. One tiny step is enough.",
      "Naomi, you are not failing because you feel overwhelmed. You are human.",
      "Naomi, the whole day does not need to be carried at once.",
      "Naomi, put the heavy thing down for a minute. You are allowed.",
      "Naomi, your nervous system is allowed to ask for softness.",
      "Naomi, you do not have to be brave every second.",
      "Naomi, this moment does not need to be perfect. It just needs to pass.",
      "Naomi, shrink the problem down to the next breath.",
      "Naomi, you are not too much. The day is just loud.",
      "Naomi, you can slow down without failing.",
      "Naomi, one sip of water, one breath, one tiny reset. That counts.",
      "Naomi, I’ve got you. No brave face required.",
      "Naomi, you can rest for a minute. The world can wait.",
      "Naomi, you are doing better than your brain is telling you."
    ],
    smile: [
      "Naomi, you are allowed to smile today, even if everything is a bit messy.",
      "Naomi, this is your permission slip to smile at your phone.",
      "Naomi, I hope this makes your face do that cute little smile thing.",
      "Naomi, if this makes you smile, I win. I love winning.",
      "Naomi, your smile is frankly bad for my ability to act normal.",
      "Naomi, you deserve a tiny happy moment for no reason.",
      "Naomi, I hope this gives your heart a little bit of sunshine.",
      "Naomi, you are ridiculous amounts of lovely. Sorry if this is inconvenient.",
      "Naomi, smile please. Not because I said so. Because you deserve to.",
      "Naomi, you are my favourite notification.",
      "Naomi, I hope the day gets a little lighter after this.",
      "Naomi, even a tiny smile counts. We are accepting small wins.",
      "Naomi, your smile should come with a warning label.",
      "Naomi, you make soft moments feel special.",
      "Naomi, I am officially sending one small smile request."
    ],
    loved: [
      "Naomi, you are loved exactly as you are. Not later. Now.",
      "Naomi, you do not need to earn love by being easy all the time.",
      "Naomi, you are wanted, chosen and cared for.",
      "Naomi, you are not a burden. You are someone worth loving properly.",
      "Naomi, if your brain tells you that you are hard to love, it is talking rubbish.",
      "Naomi, you are loved on the easy days and the complicated ones.",
      "Naomi, there is no version of you that needs to perform to deserve care.",
      "Naomi, you are enough before you do anything else.",
      "Naomi, you deserve love that feels safe and still exciting.",
      "Naomi, you matter in the small moments too.",
      "Naomi, you are deeply cared for, even when your brain gets noisy.",
      "Naomi, you do not have to shrink yourself to be loved.",
      "Naomi, your soft heart is safe here.",
      "Naomi, you are worth consistency.",
      "Naomi, open this whenever you need reminding that you are loved."
    ],
    sleepy: [
      "Naomi, you do not have to carry tomorrow tonight.",
      "Naomi, let the day be done now. You have done enough.",
      "Naomi, sleep softly. Nothing needs fixing right this second.",
      "Naomi, put the heavy thoughts down. You can pick them up tomorrow if you need to.",
      "Naomi, your body is allowed to rest.",
      "Naomi, your mind can stop working now.",
      "Naomi, I hope you sleep like someone who knows they are loved.",
      "Naomi, tomorrow can wait outside the door.",
      "Naomi, let your shoulders drop. Let the room be quiet.",
      "Naomi, no brave face needed tonight.",
      "Naomi, this is your little goodnight hug.",
      "Naomi, you are safe, loved and allowed to sleep.",
      "Naomi, rest is repair. You deserve it.",
      "Naomi, the day is finished. Let yourself land.",
      "Naomi, goodnight, country rose."
    ],
    hardday: [
      "Naomi, today might have been hard, but you are still here. That matters.",
      "Naomi, bad days do not make you weak. They make you human.",
      "Naomi, you do not have to turn today into a lesson. Surviving it is enough.",
      "Naomi, take the armour off for a minute. You do not need it here.",
      "Naomi, you are loved on difficult days too. Especially then.",
      "Naomi, you got through more than people can see.",
      "Naomi, you can be tired and still be doing well.",
      "Naomi, hard days are allowed to end softly.",
      "Naomi, you do not have to be okay immediately.",
      "Naomi, the day can be hard without you being wrong.",
      "Naomi, you are still you, even after a rough day.",
      "Naomi, I am proud of you for making it through.",
      "Naomi, let tonight be gentle with you.",
      "Naomi, you did enough today.",
      "Naomi, open this again if the day still feels heavy."
    ]
  };

  const guitarPrompts = [
    "Naomi, take one feeling from today and turn it into a four-chord loop.",
    "Naomi, write a chorus using chords you already love.",
    "Naomi, play something sad, then make the last chord hopeful.",
    "Naomi, pick a real song and change the strumming pattern until it feels like yours.",
    "Naomi, create a 20-second intro that feels warm, soft and honest.",
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
    "Little vibe check ✨ Naomi, cosy country music, warm lights and no pressure.",
    "Little vibe check ✨ Naomi, slow chords, soft feelings and one song at a time.",
    "Little vibe check ✨ Naomi, blanket, guitar and something gentle in the background.",
    "Little vibe check ✨ Naomi, calm heart, soft strings and a little reminder you’re loved.",
    "Little vibe check ✨ Naomi, country rose energy — warm, soft and a tiny bit magic.",
    "Little vibe check ✨ Naomi, quiet song, safe place, softer thoughts.",
    "Little vibe check ✨ Naomi, one chord, one breath, one tiny reset.",
    "Little vibe check ✨ Naomi, slow country love song without needing to rush anything.",
    "Little vibe check ✨ Naomi, gentle guitar and the world can wait five minutes.",
    "Little vibe check ✨ Naomi, soft lamp light, quiet strings and letting the day fall away.",
    "Little vibe check ✨ Naomi, no pressure, no performance, just music that feels kind.",
    "Little vibe check ✨ Naomi, tiny smile, warm heart, one song you actually want to play.",
    "Little vibe check ✨ Naomi, cosy chaos, soft guitar and being loved through all of it.",
    "Little vibe check ✨ Naomi, a little country song and a safer place to land.",
    "Little vibe check ✨ Naomi, slow hands, soft chords, gentle thoughts.",
    "Little vibe check ✨ Naomi, play something honest, even if it’s messy.",
    "Little vibe check ✨ Naomi, warm drink, soft song and breathing properly for once.",
    "Little vibe check ✨ Naomi, country music, comfy clothes and absolutely no stress.",
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
        "Naomi, soft means beautiful, not boring. Let’s find something that feels like a tiny exhale."
      ],
      query: "soft acoustic country guitar tutorial easy"
    },
    happy: {
      messages: [
        "Naomi, happy mode. Something warm, bright, and fun to play.",
        "Naomi, this route is for sunny chords and a song that makes you smile while playing.",
        "Naomi, happy mode unlocked. Let’s find something light, cute, and actually fun.",
        "Naomi, this is for the good mood version of you — the one that deserves a soundtrack.",
        "Naomi, let’s find something cheerful without being cheesy."
      ],
      query: "happy country songs guitar tutorial acoustic"
    },
    sad: {
      messages: [
        "Naomi, sad but okay mode. A softer song for when feelings are big but manageable.",
        "Naomi, this is not wallowing. This is letting the guitar carry a bit of the feeling.",
        "Naomi, sad but okay means gentle, honest, and not too heavy.",
        "Naomi, let’s find something emotional but still safe to play.",
        "Naomi, this route is for big feelings with soft edges."
      ],
      query: "easy sad country songs guitar tutorial acoustic"
    },
    miss: {
      messages: [
        "Naomi, missing-you mode. Songs that say the thing without needing to over-explain it.",
        "Naomi, this route is for when distance feels loud and music can say it softer.",
        "Naomi, let’s find something that sounds like missing someone, but warmly.",
        "Naomi, this is the ‘wish you were here’ guitar route.",
        "Naomi, a missing-you song should feel tender, not miserable."
      ],
      query: "country songs about missing someone guitar tutorial"
    },
    romantic: {
      messages: [
        "Naomi, romantic mode. Soft country love songs with proper heart in them.",
        "Naomi, this route is for warm love songs, not cringe ones.",
        "Naomi, romantic mode unlocked. Let’s find something that feels personal and soft.",
        "Naomi, this is for country love songs that actually land.",
        "Naomi, let’s find a song that feels like a hand squeeze."
      ],
      query: "romantic country love songs guitar tutorial easy"
    },
    session: {
      messages: [
        "Naomi, proper guitar session mode. Chords, strumming, technique, and getting better.",
        "Naomi, this is the practice route. Not cute. Not fluffy. Actual progress.",
        "Naomi, proper session mode means we are going after the bit that is annoying you.",
        "Naomi, this is for getting cleaner, tighter, and more confident.",
        "Naomi, practice mode unlocked. Slow, focused, and useful."
      ],
      query: "country guitar lesson intermediate strumming chords"
    },
    write: {
      messages: [
        "Naomi, songwriter mode. Build something of your own from a feeling and a few chords.",
        "Naomi, this route is for turning a tiny feeling into an actual song idea.",
        "Naomi, songwriter mode unlocked. You do not need perfect lyrics. You need a starting point.",
        "Naomi, let’s find something that helps you write, not overthink.",
        "Naomi, this is for making your own little country song from scratch."
      ],
      query: "how to write a country song on guitar chords lyrics"
    },
    calm: {
      messages: [
        "Naomi, calm mode. Gentle guitar, softer thoughts, no pressure.",
        "Naomi, this route is for slowing everything down without needing to explain why.",
        "Naomi, calm mode unlocked. Let’s find something peaceful and easy to sit with.",
        "Naomi, this is for when your nervous system needs a little acoustic blanket.",
        "Naomi, let’s find something gentle enough to quiet the room."
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
    dailyNote.innerText = randomNoRepeat(notes, "naomiRecentModalNotes", 60);
    noteModal.classList.remove("hidden");
  };

  window.closeNote = function () {
    noteModal.classList.add("hidden");
  };

  window.refreshDailyRose = function () {
    noteIndex = (noteIndex + 1) % notes.length;
    dailyRoseNote.innerText = randomNoRepeat(notes, "naomiRecentDailyRoseNotes", 60);
    dailyChallenge.innerText = randomNoRepeat(guitarPrompts, "naomiRecentGuitarPrompts", 6);
    dailyMission.innerText = randomNoRepeat(missions, "naomiRecentMissions", 6);
    dailyVibe.innerText = randomNoRepeat(vibes, "naomiRecentVibes", 8);
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
    openWhenResult.innerText = randomNoRepeat(messages, `naomiRecentOpenWhen_${type}`, 10);
  };

  window.randomLoveNote = function () {
    randomNoteText.innerText = randomNoRepeat(notes, "naomiRecentRandomLoveNotes", 60);
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
      <p>${randomNoRepeat(route.messages, `naomiRecentCreative_${routeName}`, 4)}</p>
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
    practiceMessage.innerText = randomNoRepeat(thereMessages, "naomiRecentThereMessages", 10);
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
