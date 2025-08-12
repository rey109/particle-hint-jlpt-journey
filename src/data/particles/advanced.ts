import type { Particle } from "../types";

export const advancedParticles: Particle[] = [
  // Penekanan
  {
    id: 'ne',
    particle: 'ね',
    category: 'advanced',
    definition: 'Partikel penegas/konfirmasi (ya/kok ya)',
    function: 'Meminta persetujuan atau menegaskan informasi',
    examples: [
      { japanese: 'きれいですね。', translation: 'Indah ya?' },
      { japanese: '寒いですね。', furigana: 'さむいですね。', translation: 'Dingin ya.' }
    ],
    icon: '🗣️'
  },
  {
    id: 'yo',
    particle: 'よ',
    category: 'advanced',
    definition: 'Partikel penekanan/penyampaian info baru',
    function: 'Menekankan pernyataan atau memberi informasi baru',
    examples: [
      { japanese: '本当ですよ。', furigana: 'ほんとうですよ。', translation: 'Ini benar lho.' },
      { japanese: '危ないよ！', furigana: 'あぶないよ！', translation: 'Bahaya lho!' }
    ],
    icon: '📢'
  },
  {
    id: 'na',
    particle: 'な',
    category: 'advanced',
    definition: 'Nuansa kasual/penegasan (sering oleh laki-laki)',
    function: 'Memberi nuansa penegasan atau berbicara pada diri sendiri',
    examples: [
      { japanese: 'いいな。', translation: 'Enak ya.' },
      { japanese: '静かだな。', furigana: 'しずかだな。', translation: 'Hening ya.' }
    ],
    icon: '💭'
  },
  {
    id: 'zo',
    particle: 'ぞ',
    category: 'advanced',
    definition: 'Penekanan kuat (maskulin/kasar)',
    function: 'Menekankan pernyataan dengan tegas',
    examples: [
      { japanese: '行くぞ！', furigana: 'いくぞ！', translation: 'Ayo berangkat!' },
      { japanese: '覚えろよ、いいぞ。', furigana: 'おぼえろよ、いいぞ。', translation: 'Hafalkan ya, bagus tuh.' }
    ],
    icon: '⚡'
  },
  {
    id: 'sa',
    particle: 'さ',
    category: 'advanced',
    definition: 'Penekanan kasual (sering maskulin)',
    function: 'Memberi nuansa santai/menegaskan',
    examples: [
      { japanese: 'まあ、いいさ。', translation: 'Yah, tidak apa lah.' },
      { japanese: 'そうさ。', translation: 'Betul, begitu.' }
    ],
    icon: '😎'
  },
  {
    id: 'ze',
    particle: 'ぜ',
    category: 'advanced',
    definition: 'Penekanan kasual (maskulin)',
    function: 'Menegaskan pernyataan secara kasual',
    examples: [
      { japanese: 'やるぜ！', translation: 'Kuy lakukan!' },
      { japanese: '行くぜ！', furigana: 'いくぜ！', translation: 'Gas berangkat!' }
    ],
    icon: '🔥'
  },

  // Kombinasi & khusus
  {
    id: 'dewa',
    particle: 'では',
    category: 'advanced',
    definition: 'Kombinasi で + は (di/untuk topik)',
    function: 'Menandai topik dalam konteks tempat/cara',
    examples: [
      { japanese: '日本では桜が有名です。', furigana: 'にほんではさくらがゆうめいです。', translation: 'Di Jepang, sakura terkenal.' },
      { japanese: '学校では日本語を勉強します。', furigana: 'がっこうではにほんごをべんきょうします。', translation: 'Di sekolah, belajar bahasa Jepang.' }
    ],
    icon: '🏫'
  },
  {
    id: 'niwa',
    particle: 'には',
    category: 'advanced',
    definition: 'Kombinasi に + は (pada/di untuk topik)',
    function: 'Menandai topik pada lokasi/tujuan tertentu',
    examples: [
      { japanese: '私には難しいです。', furigana: 'わたしにはむずかしいです。', translation: 'Bagi saya, ini sulit.' },
      { japanese: '彼には兄が二人います。', furigana: 'かれにはあにがふたりいます。', translation: 'Dia punya dua kakak laki-laki.' }
    ],
    icon: '🎯'
  },
  {
    id: 'temo',
    particle: 'ても',
    category: 'advanced',
    definition: 'Walaupun/meskipun',
    function: 'Menyatakan kontras: meskipun A, B',
    examples: [
      { japanese: '雨が降っても行きます。', furigana: 'あめがふってもいきます。', translation: 'Meskipun hujan, tetap pergi.' },
      { japanese: '高くても買います。', furigana: 'たかくてもかいます。', translation: 'Meskipun mahal, akan membeli.' }
    ],
    icon: '☔'
  },
  {
    id: 'tomo',
    particle: 'とも',
    category: 'advanced',
    definition: 'Bahkan jika/meski (bentuk lebih formal)',
    function: 'Penekanan pada kontras',
    examples: [
      { japanese: '何をしようとも諦めない。', furigana: 'なにをしようともあきらめない。', translation: 'Apa pun yang terjadi, tidak menyerah.' },
      { japanese: '一歩も動くまいとも言えない。', furigana: 'いっぽもうごくまいともいえない。', translation: 'Tak bisa bilang tidak akan bergerak sejengkal pun.' }
    ],
    icon: '🧗'
  },
  {
    id: 'kedo',
    particle: 'けど',
    category: 'advanced',
    definition: 'Tetapi/namun (kasual)',
    function: 'Menyambung kalimat dengan kontras',
    examples: [
      { japanese: '行きたいけど、お金がない。', furigana: 'いきたいけど、おかねがない。', translation: 'Mau pergi tapi tidak punya uang.' },
      { japanese: '好きだけど、買わない。', furigana: 'すきだけど、かわない。', translation: 'Suka sih, tapi tidak membeli.' }
    ],
    icon: '⚖️'
  },
  {
    id: 'noni',
    particle: 'のに',
    category: 'advanced',
    definition: 'Padahal/meskipun',
    function: 'Mengungkapkan kebalikan dari yang diharapkan',
    examples: [
      { japanese: '雨なのに出かけた。', furigana: 'あめなのにでかけた。', translation: 'Padahal hujan, (dia) keluar.' },
      { japanese: 'たくさん勉強したのに、合格しなかった。', furigana: 'たくさんべんきょうしたのに、ごうかくしなかった。', translation: 'Padahal belajar banyak, tidak lulus.' }
    ],
    icon: '🤔'
  },
  {
    id: 'node',
    particle: 'ので',
    category: 'advanced',
    definition: 'Karena (lebih sopan/natural)',
    function: 'Memberi alasan penyebab secara sopan',
    examples: [
      { japanese: '忙しいので行けません。', furigana: 'いそがしいのでいけません。', translation: 'Karena sibuk, tidak bisa pergi.' },
      { japanese: '寒いので、窓を閉めてください。', furigana: 'さむいので、まどをしめてください。', translation: 'Karena dingin, tolong tutup jendelanya.' }
    ],
    icon: '📄'
  },
  {
    id: 'nara',
    particle: 'なら',
    category: 'advanced',
    definition: 'Kalau/kalau begitu',
    function: 'Memberi syarat atau menanggapi informasi sebelumnya',
    examples: [
      { japanese: '明日なら大丈夫です。', furigana: 'あしたならだいじょうぶです。', translation: 'Kalau besok, tidak masalah.' },
      { japanese: '行くなら、早く行こう。', furigana: 'いくなら、はやくいこう。', translation: 'Kalau mau pergi, ayo cepat pergi.' }
    ],
    icon: '👉'
  }
];
