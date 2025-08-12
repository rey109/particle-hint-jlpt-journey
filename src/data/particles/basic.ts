import type { Particle } from "../types";

export const basicParticles: Particle[] = [
  {
    id: 'wa',
    particle: 'は',
    category: 'basic',
    definition: 'Partikel penanda topik',
    function: 'Menandai topik pembicaraan dalam kalimat',
    examples: [
      { japanese: '私は学生です。', furigana: 'わたしはがくせいです。', translation: 'Saya adalah seorang siswa.' },
      { japanese: '今日は暑いです。', furigana: 'きょうはあついです。', translation: 'Hari ini panas.' }
    ],
    icon: '🎯'
  },
  {
    id: 'ga',
    particle: 'が',
    category: 'basic',
    definition: 'Partikel subjek',
    function: 'Menandai subjek yang menjadi fokus atau informasi baru',
    examples: [
      { japanese: '誰が来ましたか？', furigana: 'だれがきましたか？', translation: 'Siapa yang datang?' },
      { japanese: '猫がいます。', furigana: 'ねこがいます。', translation: 'Ada kucing.' }
    ],
    icon: '⭐'
  },
  {
    id: 'no',
    particle: 'の',
    category: 'basic',
    definition: 'Partikel kepemilikan',
    function: 'Menunjukkan kepemilikan atau hubungan antar kata benda',
    examples: [
      { japanese: '私の本', furigana: 'わたしのほん', translation: 'Buku saya' },
      { japanese: '日本の文化', furigana: 'にほんのぶんか', translation: 'Budaya Jepang' }
    ],
    icon: '🔗'
  },
  {
    id: 'wo',
    particle: 'を',
    category: 'basic',
    definition: 'Partikel objek langsung',
    function: 'Menandai objek langsung dari kata kerja transitif',
    examples: [
      { japanese: '本を読みます。', furigana: 'ほんをよみます。', translation: 'Membaca buku.' },
      { japanese: '水を飲みます。', furigana: 'みずをのみます。', translation: 'Minum air.' }
    ],
    icon: '🎯'
  },
  {
    id: 'ni',
    particle: 'に',
    category: 'basic',
    definition: 'Partikel arah/tujuan/waktu',
    function: 'Menunjukkan arah, tujuan, waktu, atau lokasi keberadaan',
    examples: [
      { japanese: '学校に行きます。', furigana: 'がっこうにいきます。', translation: 'Pergi ke sekolah.' },
      { japanese: '七時に起きます。', furigana: 'しちじにおきます。', translation: 'Bangun jam tujuh.' }
    ],
    icon: '📍'
  },
  {
    id: 'e',
    particle: 'へ',
    category: 'basic',
    definition: 'Partikel arah (ke)',
    function: 'Menunjukkan arah atau tujuan (lebih menekankan arah, bukan tujuan akhir)',
    examples: [
      { japanese: '日本へ行きます。', furigana: 'にほんへいきます。', translation: 'Pergi ke Jepang.' },
      { japanese: '駅へ走ります。', furigana: 'えきへはしります。', translation: 'Berlari ke stasiun.' }
    ],
    icon: '🧭'
  },
  {
    id: 'de',
    particle: 'で',
    category: 'basic',
    definition: 'Partikel tempat/cara',
    function: 'Menunjukkan tempat terjadinya kegiatan atau cara melakukan sesuatu',
    examples: [
      { japanese: '図書館で勉強します。', furigana: 'としょかんでべんきょうします。', translation: 'Belajar di perpustakaan.' },
      { japanese: '箸で食べます。', furigana: 'はしでたべます。', translation: 'Makan dengan sumpit.' }
    ],
    icon: '🏢'
  },
  {
    id: 'ka',
    particle: 'か',
    category: 'basic',
    definition: 'Partikel tanya',
    function: 'Mengubah kalimat pernyataan menjadi tanya',
    examples: [
      { japanese: 'これは何ですか？', furigana: 'これはなんですか？', translation: 'Ini apa?' },
      { japanese: '学生ですか？', furigana: 'がくせいですか？', translation: 'Apakah (kamu) seorang siswa?' }
    ],
    icon: '❓'
  },
  {
    id: 'to',
    particle: 'と',
    category: 'basic',
    definition: 'Partikel penghubung (dan)/dengan',
    function: 'Menghubungkan kata benda atau menunjukkan teman',
    examples: [
      { japanese: '友達と映画を見ます。', furigana: 'ともだちとえいがをみます。', translation: 'Menonton film dengan teman.' },
      { japanese: 'りんごとバナナ', furigana: 'りんごとバナナ', translation: 'Apel dan pisang' }
    ],
    icon: '🤝'
  },
  {
    id: 'ya',
    particle: 'や',
    category: 'basic',
    definition: 'Partikel daftar tidak lengkap (dan lain-lain)',
    function: 'Menghubungkan kata benda secara tidak lengkap',
    examples: [
      { japanese: 'りんごやバナナを買います。', furigana: 'りんごやバナナをかいます。', translation: 'Membeli apel, pisang, dan lain-lain.' },
      { japanese: '本やノート', furigana: 'ほんやノート', translation: 'Buku, notebook, dll.' }
    ],
    icon: '📚'
  },
  {
    id: 'mo',
    particle: 'も',
    category: 'basic',
    definition: 'Partikel juga',
    function: 'Menunjukkan “juga” pada subjek/objek',
    examples: [
      { japanese: '私も行きます。', furigana: 'わたしもいきます。', translation: 'Saya juga pergi.' },
      { japanese: '水もください。', furigana: 'みずもください。', translation: 'Air juga, tolong.' }
    ],
    icon: '➕'
  }
];
