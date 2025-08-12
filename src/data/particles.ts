export interface Particle {
  id: string;
  particle: string;
  category: 'basic' | 'intermediate' | 'advanced';
  definition: string;
  function: string;
  examples: {
    japanese: string;
    furigana?: string;
    translation: string;
    audio?: string;
  }[];
  icon: string;
}

export const particles: Particle[] = [
  // Basic Particles
  {
    id: 'wa',
    particle: 'は',
    category: 'basic',
    definition: 'Partikel penanda topik',
    function: 'Menandai topik pembicaraan dalam kalimat',
    examples: [
      {
        japanese: '私は学生です。',
        furigana: 'わたしはがくせいです。',
        translation: 'Saya adalah seorang siswa.'
      },
      {
        japanese: '今日は暑いです。',
        furigana: 'きょうはあついです。',
        translation: 'Hari ini panas.'
      }
    ],
    icon: '🎯'
  },
  {
    id: 'no',
    particle: 'の',
    category: 'basic',
    definition: 'Partikel kepemilikan',
    function: 'Menunjukkan kepemilikan atau hubungan antar kata benda',
    examples: [
      {
        japanese: '私の本',
        furigana: 'わたしのほん',
        translation: 'Buku saya'
      },
      {
        japanese: '日本の文化',
        furigana: 'にほんのぶんか',
        translation: 'Budaya Jepang'
      }
    ],
    icon: '🔗'
  },
  {
    id: 'ka',
    particle: 'か',
    category: 'basic',
    definition: 'Partikel tanya',
    function: 'Mengubah kalimat pernyataan menjadi kalimat tanya',
    examples: [
      {
        japanese: 'これは何ですか？',
        furigana: 'これはなんですか？',
        translation: 'Ini apa?'
      },
      {
        japanese: '学生ですか？',
        furigana: 'がくせいですか？',
        translation: 'Apakah (kamu) seorang siswa?'
      }
    ],
    icon: '❓'
  },
  {
    id: 'wo',
    particle: 'を',
    category: 'basic',
    definition: 'Partikel objek langsung',
    function: 'Menandai objek langsung dari kata kerja transitif',
    examples: [
      {
        japanese: '本を読みます。',
        furigana: 'ほんをよみます。',
        translation: 'Membaca buku.'
      },
      {
        japanese: '水を飲みます。',
        furigana: 'みずをのみます。',
        translation: 'Minum air.'
      }
    ],
    icon: '🎪'
  },
  
  // Intermediate Particles
  {
    id: 'ni',
    particle: 'に',
    category: 'intermediate',
    definition: 'Partikel arah/tujuan/waktu',
    function: 'Menunjukkan arah, tujuan, waktu, atau lokasi keberadaan',
    examples: [
      {
        japanese: '学校に行きます。',
        furigana: 'がっこうにいきます。',
        translation: 'Pergi ke sekolah.'
      },
      {
        japanese: '机の上に本があります。',
        furigana: 'つくえのうえにほんがあります。',
        translation: 'Ada buku di atas meja.'
      }
    ],
    icon: '📍'
  },
  {
    id: 'de',
    particle: 'で',
    category: 'intermediate',
    definition: 'Partikel tempat/cara',
    function: 'Menunjukkan tempat berlangsungnya kegiatan atau cara melakukan sesuatu',
    examples: [
      {
        japanese: '図書館で勉強します。',
        furigana: 'としょかんでべんきょうします。',
        translation: 'Belajar di perpustakaan.'
      },
      {
        japanese: 'バスで来ました。',
        furigana: 'バスできました。',
        translation: 'Datang dengan bus.'
      }
    ],
    icon: '🏢'
  },
  {
    id: 'to',
    particle: 'と',
    category: 'intermediate',
    definition: 'Partikel penghubung',
    function: 'Menghubungkan kata benda (dan) atau menunjukkan teman',
    examples: [
      {
        japanese: '友達と映画を見ます。',
        furigana: 'ともだちとえいがをみます。',
        translation: 'Menonton film dengan teman.'
      },
      {
        japanese: 'りんごとバナナ',
        furigana: 'りんごとバナナ',
        translation: 'Apel dan pisang'
      }
    ],
    icon: '🤝'
  },
  
  // Advanced Particles
  {
    id: 'kara',
    particle: 'から',
    category: 'advanced',
    definition: 'Partikel asal/sebab',
    function: 'Menunjukkan titik awal (dari) atau alasan (karena)',
    examples: [
      {
        japanese: '9時から始まります。',
        furigana: '9じからはじまります。',
        translation: 'Dimulai dari jam 9.'
      },
      {
        japanese: '疲れたから、休みます。',
        furigana: 'つかれたから、やすみます。',
        translation: 'Karena lelah, saya akan istirahat.'
      }
    ],
    icon: '⏰'
  },
  {
    id: 'made',
    particle: 'まで',
    category: 'advanced',
    definition: 'Partikel batas',
    function: 'Menunjukkan batas waktu atau tempat (sampai)',
    examples: [
      {
        japanese: '5時まで働きます。',
        furigana: '5じまではたらきます。',
        translation: 'Bekerja sampai jam 5.'
      },
      {
        japanese: '駅まで歩きます。',
        furigana: 'えきまであるきます。',
        translation: 'Berjalan sampai ke stasiun.'
      }
    ],
    icon: '🏁'
  },
  {
    id: 'ga',
    particle: 'が',
    category: 'advanced',
    definition: 'Partikel subjek',
    function: 'Menandai subjek yang sedang difokuskan atau dalam kalimat tertentu',
    examples: [
      {
        japanese: '誰が来ましたか？',
        furigana: 'だれがきましたか？',
        translation: 'Siapa yang datang?'
      },
      {
        japanese: '猫がいます。',
        furigana: 'ねこがいます。',
        translation: 'Ada kucing.'
      }
    ],
    icon: '⭐'
  }
];

export const getParticlesByCategory = (category: 'basic' | 'intermediate' | 'advanced') => {
  return particles.filter(particle => particle.category === category);
};

export const getAllParticles = () => particles;