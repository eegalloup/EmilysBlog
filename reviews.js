const reviews = [
  {
    id: "one-piece-water-7",
    title: "One Piece: Water 7",
    date: "2026-09-18",
    image: "covers/one-piece-water-7.jpeg",
    rating: 4,
    tags: ["Worth the Hype"],
    review: `
      <p><em>One Piece: Water 7</em> was truly a fun watch.</p>
      <p> I feel like this is the point in the show where the stakes have raised and the overarching plot starts to emerge. We are introduced to the World Government as the main villains and have solidified the idea of the Blank Century, which I am excited to see unfold. </p>
      <p> I forsee Nico Robin's backstory being an integral part to the plotline of the show (I hope). I can see the creators expanding this with the characters' reasearch of the polyglyphs, which I hope the continue.</p>
      <p> Also, I loved the addition of Franky to the show. He is a character that is easy to enjoy and fits well with the Straw Hats' dynamic. I have been Franky-pilled. SUUUUUPERRRR!!!★</p>
    `
  },
  
    {
    id: "jujustu-kaisen-season-three",
    title: "Jujustu Kaisen: Season 3",
    date: "2026-04-25",
    image: "covers/jjk-season-3.webp",
    rating: 4,
    review: `
      <p>Your full review of <em>JJK S3</em> goes here.</p>
      <p>You can write as many paragraphs as you want inside this section.</p>
    `
  },

  {
    id: "jujustu-kaisen-season-two",
    title: "Jujustu Kaisen: Season 2",
    date: "2026-04-20",
    image: "covers/jjk-season-2.webp",
    rating: 4.5,
    tags: ["Favorite"],
    review: `
      <p>Your full review of <em>JJK S2</em> goes here.</p>
      <p>You can write as many paragraphs as you want inside this section.</p>
    `
  },

  {
    id: "one-piece-skypiea",
    title: "One Piece: Skypiea",
    date: "2026-03-15",
    image: "covers/one-piece-skypiea.jpeg",
    rating: 3.5,
    review: `
      <p>Your full review of <em>The Bear</em> goes here.</p>
      <p>You can write as many paragraphs as you want inside this section.</p>
    `
  },

    {
    id: "perfect-blue",
    title: "Perfect Blue",
    date: "2026-03-08",
    image: "covers/perfect-blue.jpeg",
    rating: 5,
    review: `
      <p>Your full review of <em>Perfect Blue</em> goes here.</p>
    `
  },

  {
    id: "one-piece-alabasta",
    title: "One Piece: Alabasta",
    date: "2026-03-01",
    image: "covers/one-piece-alabasta.jpg",
    rating: 3,
    review: `
      <p>Your full review of <em>One Piece: Alabasta</em> goes here.</p>
      <p>You can write as many paragraphs as you want inside this section.</p>
    `
  },


  {
    id: "one-piece-east-blue",
    title: "One Piece: East Blue",
    date: "2026-02-10",
    image: "covers/one-piece-east-blue.jpg",
    rating: 2.5,
    review: `
      <p>Your full review of <em>One Piece: East Blue</em> goes here.</p>
    `
  },

  {
    id: "jujustu-kaisen-0",
    title: "Jujustu Kaisen 0",
    date: "2024-06-15",
    image: "covers/jjk-0.jpeg",
    rating: 4,
    review: `
      <p>Your full review of <em>JJK 0</em> goes here.</p>
    `
  },

  {
  id: "akira",
  title: "Akira",
  date: "2020-06-01",
  image: "covers/akira.jpg",
  rating: 0,
  review: `<p>Your review of <em>Akira</em> goes here.</p>`
},
{
  id: "attack-on-titan",
  title: "Attack on Titan",
  date: "2015-03-01",
  image: "covers/attack-on-titan.webp",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>Attack on Titan</em> goes here.</p>`
},
{
  id: "attack-on-titan-junior-high",
  title: "Attack on Titan: Junior High",
  date: "2015-06-01",
  image: "covers/attack-on-titan-junior-high.jpg",
  rating: 0,
  review: `<p>Your review of <em>Attack on Titan: Junior High</em> goes here.</p>`
},
{
  id: "tokyo-ghoul",
  title: "Tokyo Ghoul",
  date: "2015-07-01",
  image: "covers/tokyo-ghoul.jpg",
  rating: 0,
  review: `<p>Your review of <em>Tokyo Ghoul</em> goes here.</p>`
},
{
  id: "noragami",
  title: "Noragami",
  date: "2015-07-01",
  image: "covers/noragami.jpg",
  rating: 0,
  review: `<p>Your review of <em>Noragami</em> goes here.</p>`
},
{
  id: "devilman-the-birth",
  title: "Devilman: The Birth",
  date: "2018-02-01",
  image: "covers/devilman-the-birth.jpg",
  rating: 0,
  review: `<p>Your review of <em>Devilman: The Birth</em> goes here.</p>`
},
{
  id: "devilman-the-demon-bird",
  title: "Devilman: The Demon Bird",
  date: "2018-02-01",
  image: "covers/devilman-the-demon-bird.jpg",
  rating: 0,
  review: `<p>Your review of <em>Devilman: The Demon Bird</em> goes here.</p>`
},
{
  id: "amon-the-apocalypse-of-devilman",
  title: "Amon: The Apocalypse of Devilman",
  date: "2018-02-01",
  image: "covers/amon.jpg",
  rating: 0,
  review: `<p>Your review of <em>Amon: The Apocalypse of Devilman</em> goes here.</p>`
},
{
  id: "devilman-crybaby",
  title: "Devilman Crybaby",
  date: "2018-01-01",
  image: "covers/devilman-crybaby.webp",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>Devilman Crybaby</em> goes here.</p>`
},
{
  id: "cyborg-009-vs-devilman",
  title: "Cyborg 009 VS Devilman",
  date: "2018-02-01",
  image: "covers/cyborg-009-vs-devilman.jpg",
  rating: 0,
  review: `<p>Your review of <em>Cyborg 009 VS Devilman</em> goes here.</p>`
},
{
  id: "maid-sama",
  title: "Maid-Sama!",
  date: "2018-05-01",
  image: "covers/maid-sama.jpg",
  rating: 0,
  review: `<p>Your review of <em>Maid-Sama!</em> goes here.</p>`
},
{
  id: "hetalia-axis-powers",
  title: "Hetalia: Axis Powers",
  date: "2016-07-01",
  image: "covers/hetalia.jpg",
  rating: 0,
  review: `<p>Your review of <em>Hetalia: Axis Powers</em> goes here.</p>`
},
{
  id: "ouran-high-school-host-club",
  title: "Ouran High School Host Club",
  date: "2016-04-01",
  image: "covers/ouran.jpeg",
  rating: 0,
  review: `<p>Your review of <em>Ouran High School Host Club</em> goes here.</p>`
},
{
  id: "jojos-bizarre-adventure-phantom-blood",
  title: "JoJo's Bizarre Adventure: Phantom Blood",
  date: "2019-07-01",
  image: "covers/jojos-phantom-blood.jpg",
  rating: 0,
  review: `<p>Your review of <em>JoJo's Bizarre Adventure: Phantom Blood</em> goes here.</p>`
},
{
  id: "jojos-bizarre-adventure-battle-tendency",
  title: "JoJo's Bizarre Adventure: Battle Tendency",
  date: "2019-09-01",
  image: "covers/jojos-battle-tendency.webp",
  rating: 0,
  review: `<p>Your review of <em>JoJo's Bizarre Adventure: Battle Tendency</em> goes here.</p>`
},
{
  id: "pop-team-epic",
  title: "Pop Team Epic",
  date: "2019-06-01",
  image: "covers/pop-team-epic.webp",
  rating: 0,
  review: `<p>Your review of <em>Pop Team Epic</em> goes here.</p>`
},
{
  id: "ghost-stories",
  title: "Ghost Stories",
  date: "2018-10-01",
  image: "covers/ghost-stories.jpeg",
  rating: 4,
  tags: ["Favorite"],
  review: `<p>Truly one of the best shows of all time. Always a fall rewatch.</p>`
},
{
  id: "magic-kyun-renaissance",
  title: "Magic-Kyun! Renaissance",
  date: "2016-11-01",
  image: "covers/magic-kyun.jpg",
  rating: 0,
  review: `<p>Your review of <em>Magic-Kyun! Renaissance</em> goes here.</p>`
},

{
  id: "anisava",
  title: "AniSava",
  date: "2018-01-01",
  image: "covers/anisava.jpg",
  rating: 1,
  tags: ["Confused"],
  review: `<p>I truly have no memory of watching this.</p>`
},
{
  id: "blue-exorcist",
  title: "Blue Exorcist",
  date: "2016-12-30",
  image: "covers/blue-exorcist.jpg",
  rating: 0,
  review: `<p>Your review of <em>Blue Exorcist</em> goes here.</p>`
},
{
  id: "black-butler",
  title: "Black Butler",
  date: "2016-06-30",
  image: "covers/black-butler.webp",
  rating: 0,
  review: `<p>Your review of <em>Black Butler</em> goes here.</p>`
},
{
  id: "parasyte",
  title: "Parasyte",
  date: "2016-07-01",
  image: "covers/parasyte.jpg",
  rating: 0,
  review: `<p>Your review of <em>Parasyte -the maxim-</em> goes here.</p>`
},
{
  id: "blend-s",
  title: "Blend S",
  date: "2019-02-30",
  image: "covers/blend-s.jpg",
  rating: 0,
  review: `<p>Your review of <em>Blend S</em> goes here.</p>`
},
{
  id: "say-i-love-you",
  title: "Say \"I Love You.\"",
  date: "2016-02-30",
  image: "covers/say-i-love-you.jpg",
  rating: 0,
  review: `<p>Your review of <em>Say "I Love You."</em> goes here.</p>`
},
{
  id: "my-hero-academia",
  title: "My Hero Academia: Season 1",
  date: "2018-02-30",
  image: "covers/mha-s1.jpg",
  rating: 0,
  review: `<p>Your review of <em>My Hero Academia</em> goes here.</p>`
},
{
  id: "my-hero-academia-season-2",
  title: "My Hero Academia: Season 2",
  date: "2018-03-30",
  image: "covers/mha-s2.jpg",
  rating: 0,
  review: `<p>Your review of <em>My Hero Academia Season 2</em> goes here.</p>`
},
{
  id: "my-hero-academia-season-3",
  title: "My Hero Academia: Season 3",
  date: "2018-10-30",
  image: "covers/mha-s3.webp",
  rating: 0,
  review: `<p>Your review of <em>My Hero Academia Season 3</em> goes here.</p>`
},

{
  id: "little-witch-academia",
  title: "Little Witch Academia",
  date: "2018-07-30",
  image: "covers/little-witch-academia.jpg",
  rating: 0,
  review: `<p>Your review of <em>Little Witch Academia</em> goes here.</p>`
},
{
  id: "the-castle-of-cagliostro",
  title: "Lupin the 3rd: The Castle of Cagliostro",
  date: "2018-12-30",
  image: "covers/castle-of-cagliostro.webp",
  rating: 0,
  review: `<p>Your review of <em>Lupin the 3rd: The Castle of Cagliostro</em> goes here.</p>`
},
{
  id: "yamada-kun-and-the-seven-witches",
  title: "Yamada-kun and the Seven Witches",
  date: "2017-02-01",
  image: "covers/yamada-kun.jpeg",
  rating: 0,
  review: `<p>Your review of <em>Yamada-kun and the Seven Witches</em> goes here.</p>`
},
{
  id: "the-disastrous-life-of-saiki-k",
  title: "The Disastrous Life of Saiki K.",
  date: "2018-12-30",
  image: "covers/saiki-k.jpg",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>The Disastrous Life of Saiki K.</em> goes here.</p>`
},
{
  id: "spirited-away",
  title: "Spirited Away",
  date: "2016-12-30",
  image: "covers/spirited-away.webp",
  rating: 0,
  review: `<p>Your review of <em>Spirited Away</em> goes here.</p>`
},
{
  id: "howls-moving-castle",
  title: "Howl's Moving Castle",
  date: "2016-12-30",
  image: "covers/howls-moving-castle.webp",
  rating: 0,
  review: `<p>Your review of <em>Howl's Moving Castle</em> goes here.</p>`
},
{
  id: "porco-rosso",
  title: "Porco Rosso",
  date: "2018-10-30",
  image: "covers/porco-rosso.webp",
  rating: 0,
  review: `<p>Your review of <em>Porco Rosso</em> goes here.</p>`
},
{
  id: "princess-mononoke",
  title: "Princess Mononoke",
  date: "2018-10-15",
  image: "covers/princess-mononoke.webp",
  rating: 0,
  review: `<p>Your review of <em>Princess Mononoke</em> goes here.</p>`
},
{
  id: "the-wind-rises",
  title: "The Wind Rises",
  date: "2017-01-01",
  image: "covers/the-wind-rises.jpg",
  rating: 0,
  review: `<p>Your review of <em>The Wind Rises</em> goes here.</p>`
},
{
  id: "haikyu",
  title: "Haikyu!! Season 1",
  date: "2015-09-01",
  image: "covers/haikyu-s1.jpg",
  rating: 0,
  review: `<p>Your review of <em>Haikyu!!</em> goes here.</p>`
},
{
  id: "haikyu-2nd-season",
  title: "Haikyu!! Season 2",
  date: "2016-11-30",
  rating: 0,
  image: "covers/haikyu-s2.webp",
  review: `<p>Your review of <em>Haikyu!! 2nd Season</em> goes here.</p>`
},
{
  id: "yuri-on-ice",
  title: "Yuri!!! on Ice",
  date: "2016-10-30",
  image: "covers/yuri-on-ice.jpeg",
  rating: 0,
  review: `<p>Your review of <em>Yuri!!! on Ice</em> goes here.</p>`
},
{
  id: "free-iwatobi-swim-club",
  title: "Free! Eternal Summer",
  date: "2016-06-30",
  image: "covers/free.jpg",
  rating: 0,
  review: `<p>Your review of <em>Free! - Iwatobi Swim Club</em> goes here.</p>`
},
{
  id: "patema-inverted",
  title: "Patema Inverted",
  date: "2017-03-30",
  image: "covers/patema-inverted.jpg",
  rating: 0,
  review: `<p>Your review of <em>Patema Inverted</em> goes here.</p>`
},
{
  id: "death-note",
  title: "Death Note",
  date: "2016-07-30",
  image: "covers/death-note.jpg",
  rating: 0,
  review: `<p>Your review of <em>Death Note</em> goes here.</p>`
},
{
  id: "seraph-of-the-end-vampire-reign",
  title: "Seraph of the End: Vampire Reign",
  date: "2016-06-30",
  image: "covers/seraph-of-the-end.jpg",
  rating: 0,
  review: `<p>Your review of <em>Seraph of the End: Vampire Reign</em> goes here.</p>`
},
{
  id: "i-want-to-eat-your-pancreas",
  title: "I Want to Eat Your Pancreas",
  date: "2020-09-24",
  image: "covers/i-want-to-eat-your-pancreas.jpg",
  rating: 0,
  review: `<p><em>I Want to Eat Your Pancreas</em> is emotional torture porn. </p>
  <p>This was UNBELIEVABLY sad. I cried for two hours straight. snotty nose crying. It was not pretty. This was an amazing movie, but i will never watch it again.
 <p>The animation was amazing, especially on the fireworks scene. The story was impeccable. It was well-written and well-executed. I do think the endless sadness in the end was a little overwhelming thought. It felt like I was getting repeatedly punched in the gut every 8 minutes for that last 1/3. However, the ending was really beautiful and added a twinge of happinesses to it haha. I think my favorite thing was definitely the main characters growth. Obviously, that’s the main point of the movie, but it was so emotionally powerful and endearing. I went from wanting to beat him to death with a hammer to wanting the best for him. 😎</p>`
},
{
  id: "the-promised-neverland",
  title: "The Promised Neverland: Season 1",
  date: "2020-12-13",
  image: "covers/the-promised-neverland.jpg",
  rating: 0,
  review: `<p>Your review of <em>The Promised Neverland</em> goes here.</p>`
},
{
  id: "given",
  title: "Given",
  date: "2020-12-30",
  image: "covers/given.jpg",
  rating: 0,
  review: `<p>Your review of <em>Given</em> goes here.</p>`
},

{
  id: "astra-lost-in-space",
  title: "Astra Lost in Space",
  date: "2020-12-13",
  image: "covers/astra-lost-in-space.jpg",
  rating: 0,
  review: `<p>Your review of <em>Astra Lost in Space</em> goes here.</p>`
},
{
  id: "kakegurui",
  title: "Kakegurui: Season 1",
  date: "2020-05-30",
  image: "covers/kakegurui.jpg",
  rating: 0,
  review: `<p>Your review of <em>Kakegurui</em> goes here.</p>`
},
{
  id: "great-pretender",
  title: "Great Pretender",
  date: "2020-12-13",
  image: "covers/great-pretender.webp",
  rating: 0,
  review: `<p>Your review of <em>Great Pretender</em> goes here.</p>`
},
{
  id: "children-of-the-sea",
  title: "Children of the Sea",
  date: "2021-04-30",
  image: "covers/children-of-the-sea.webp",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>Children of the Sea</em> goes here.</p>`
},
{
  id: "ni-no-kuni",
  title: "Ni no Kuni",
  date: "2021-05-30",
  image: "covers/ninokuni.jpeg",
  rating: 0,
  review: `<p>Your review of <em>Ni no Kuni</em> goes here.</p>`
},
{
  id: "demon-slayer-kimetsu-no-yaiba",
  title: "Demon Slayer: Kimetsu no Yaiba",
  date: "2021-02-30",
  image: "covers/demon-slayer-s1.jpg",
  rating: 0,
  review: `<p>Your review of <em>Demon Slayer: Kimetsu no Yaiba</em> goes here.</p>`
},

{
  id: "demon-slayer-mugen-train",
  title: "Demon Slayer: The Movie - Mugen Train",
  date: "2021-04-23",
  image: "covers/demon-slayer-mugen-train.jpg",
  rating: 0,
  review: `<p>Your review of <em>Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train</em> goes here.</p>`
},
{
  id: "mob-psycho-100",
  title: "Mob Psycho 100",
  date: "2021-06-15",
  image: "covers/mob-psycho-100.jpg",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>Mob Psycho 100</em> goes here.</p>`
},

{
  id: "neon-genesis-evangelion",
  title: "Neon Genesis Evangelion",
  date: "2021-07-20",
  image: "covers/neon-genesis-evangelion.jpg",
  rating: 0,
  review: `<p>Your review of <em>Neon Genesis Evangelion</em> goes here.</p>`
},

{
  id: "end-of-evangelion",
  title: "End of Evangelion",
  date: "2022-09-23",
  image: "covers/end-of-evangelion.jpg",
  rating: 0,
  tags: ["Favorite"],
  review: `<p>Your review of <em>End of Evangelion</em> goes here.</p>`
},

];