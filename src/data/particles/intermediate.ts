import type { Particle } from "../types";

export const intermediateParticles: Particle[] = [
  {
    id: 'kara',
    particle: 'から',
    category: 'intermediate',
    definition: 'Partikel asal/sebab (dari/karena)',
    function: 'Menunjukkan titik awal atau alasan',
    examples: [
      { japanese: '九時から授業が始まります。', furigana: 'くじからじゅぎょうがはじまります。', translation: 'Pelajaran dimulai dari jam 9.' },
      { japanese: '雨だから、行きません。', furigana: 'あめだから、いきません。', translation: 'Karena hujan, tidak pergi.' }
    ],
    icon: '⏰'
  },
  {
    id: 'made',
    particle: 'まで',
    category: 'intermediate',
    definition: 'Partikel batas (sampai)',
    function: 'Menunjukkan batas waktu atau tempat',
    examples: [
      { japanese: '五時まで働きます。', furigana: 'ごじまではたらきます。', translation: 'Bekerja sampai jam 5.' },
      { japanese: '駅まで歩きます。', furigana: 'えきまであるきます。', translation: 'Berjalan sampai stasiun.' }
    ],
    icon: '🏁'
  },
  {
    id: 'yori',
    particle: 'より',
    category: 'intermediate',
    definition: 'Partikel perbandingan (daripada)',
    function: 'Membandingkan dua hal',
    examples: [
      { japanese: '犬は猫より大きいです。', furigana: 'いぬはねこよりおおきいです。', translation: 'Anjing lebih besar daripada kucing.' },
      { japanese: '今日より明日のほうが寒い。', furigana: 'きょうよりあしたのほうがさむい。', translation: 'Besok lebih dingin daripada hari ini.' }
    ],
    icon: '⚖️'
  },
  {
    id: 'shika',
    particle: 'しか',
    category: 'intermediate',
    definition: 'Hanya/tiada lain selain (negatif)',
    function: 'Digunakan dengan kalimat negatif untuk “hanya”',
    examples: [
      { japanese: '百円しかありません。', furigana: 'ひゃくえんしかありません。', translation: 'Tidak ada selain 100 yen (hanya punya 100 yen).' },
      { japanese: '一つしかない。', furigana: 'ひとつしかない。', translation: 'Hanya ada satu.' }
    ],
    icon: '🪙'
  },
  {
    id: 'dake',
    particle: 'だけ',
    category: 'intermediate',
    definition: 'Hanya/sebatas',
    function: 'Menyatakan batas “hanya” tanpa nuansa negatif',
    examples: [
      { japanese: '水だけ飲みます。', furigana: 'みずだけのみます。', translation: 'Hanya minum air.' },
      { japanese: '見るだけです。', furigana: 'みるだけです。', translation: 'Hanya melihat saja.' }
    ],
    icon: '🎯'
  },
  {
    id: 'hodo',
    particle: 'ほど',
    category: 'intermediate',
    definition: 'Sejauh/sekitar/hingga',
    function: 'Menyatakan derajat atau perkiraan',
    examples: [
      { japanese: '泣きたいほど嬉しい。', furigana: 'なきたいほどうれしい。', translation: 'Senang sampai ingin menangis.' },
      { japanese: '一時間ほど待ちます。', furigana: 'いちじかんほどまちます。', translation: 'Menunggu sekitar satu jam.' }
    ],
    icon: '📏'
  },
  {
    id: 'kurai',
    particle: 'くらい／ぐらい',
    category: 'intermediate',
    definition: 'Sekitar/kira-kira',
    function: 'Perkiraan jumlah/waktu/derajat',
    examples: [
      { japanese: '三十分くらいかかります。', furigana: 'さんじゅっぷんくらいかかります。', translation: 'Butuh sekitar 30 menit.' },
      { japanese: '一万円ぐらいします。', furigana: 'いちまんえんぐらいします。', translation: 'Harganya sekitar 10.000 yen.' }
    ],
    icon: '⏳'
  },
  {
    id: 'nado',
    particle: 'など',
    category: 'intermediate',
    definition: 'Dan lain-lain',
    function: 'Memberi contoh yang tidak lengkap',
    examples: [
      { japanese: '寿司、天ぷらなどが好きです。', furigana: 'すし、てんぷらなどがすきです。', translation: 'Suka sushi, tempura, dan sebagainya.' },
      { japanese: '本、雑誌など', furigana: 'ほん、ざっしなど', translation: 'Buku, majalah, dll.' }
    ],
    icon: '➰'
  },
  {
    id: 'demo',
    particle: 'でも',
    category: 'intermediate',
    definition: 'Bahkan/…pun; atau “bagaimana kalau…”',
    function: 'Penekanan “bahkan” atau saran ringan',
    examples: [
      { japanese: '子供でもできます。', furigana: 'こどもでもできます。', translation: 'Anak kecil pun bisa.' },
      { japanese: 'コーヒーでも飲みませんか。', furigana: 'コーヒーでものみませんか。', translation: 'Bagaimana kalau minum kopi atau semacamnya?' }
    ],
    icon: '☕'
  },
  {
    id: 'bakari',
    particle: 'ばかり',
    category: 'intermediate',
    definition: 'Hanya/semata-mata; baru saja',
    function: 'Menunjukkan kecenderungan hanya melakukan sesuatu atau kejadian baru',
    examples: [
      { japanese: 'ゲームばかりしている。', furigana: 'ゲームばかりしている。', translation: 'Cuma main game terus.' },
      { japanese: '今来たばかりです。', furigana: 'いまきたばかりです。', translation: 'Baru saja datang.' }
    ],
    icon: '🎮'
  }
];
