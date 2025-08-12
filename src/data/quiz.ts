export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  particle: string;
  category: 'basic' | 'intermediate' | 'advanced';
  japanese: string;
  furigana?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Basic Questions
  {
    id: 'q1',
    question: 'Partikel apa yang tepat untuk melengkapi kalimat: 私___学生です。',
    options: ['は', 'の', 'を', 'が'],
    correctAnswer: 0,
    explanation: 'は (wa) digunakan untuk menandai topik dalam kalimat. "私は学生です" berarti "Saya adalah seorang siswa".',
    particle: 'は',
    category: 'basic',
    japanese: '私は学生です。',
    furigana: 'わたしはがくせいです。'
  },
  {
    id: 'q2',
    question: 'Partikel apa yang tepat untuk menunjukkan kepemilikan: 田中さん___車',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 1,
    explanation: 'の (no) digunakan untuk menunjukkan kepemilikan atau hubungan. "田中さんの車" berarti "mobil Tanaka-san".',
    particle: 'の',
    category: 'basic',
    japanese: '田中さんの車',
    furigana: 'たなかさんのくるま'
  },
  {
    id: 'q3',
    question: 'Partikel apa yang tepat untuk membuat kalimat tanya: これは何です___？',
    options: ['は', 'の', 'か', 'を'],
    correctAnswer: 2,
    explanation: 'か (ka) digunakan untuk membuat kalimat tanya. "これは何ですか？" berarti "Ini apa?".',
    particle: 'か',
    category: 'basic',
    japanese: 'これは何ですか？',
    furigana: 'これはなんですか？'
  },
  {
    id: 'q4',
    question: 'Partikel apa yang tepat untuk objek langsung: 本___読みます。',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 2,
    explanation: 'を (wo/o) digunakan untuk menandai objek langsung. "本を読みます" berarti "membaca buku".',
    particle: 'を',
    category: 'basic',
    japanese: '本を読みます。',
    furigana: 'ほんをよみます。'
  },
  
  // Intermediate Questions
  {
    id: 'q5',
    question: 'Partikel apa yang tepat untuk menunjukkan tujuan: 学校___行きます。',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 3,
    explanation: 'に (ni) digunakan untuk menunjukkan arah atau tujuan. "学校に行きます" berarti "pergi ke sekolah".',
    particle: 'に',
    category: 'intermediate',
    japanese: '学校に行きます。',
    furigana: 'がっこうにいきます。'
  },
  {
    id: 'q6',
    question: 'Partikel apa yang tepat untuk tempat kegiatan: 図書館___勉強します。',
    options: ['は', 'で', 'を', 'に'],
    correctAnswer: 1,
    explanation: 'で (de) digunakan untuk menunjukkan tempat berlangsungnya kegiatan. "図書館で勉強します" berarti "belajar di perpustakaan".',
    particle: 'で',
    category: 'intermediate',
    japanese: '図書館で勉強します。',
    furigana: 'としょかんでべんきょうします。'
  },
  {
    id: 'q7',
    question: 'Partikel apa yang tepat untuk menunjukkan teman: 友達___映画を見ます。',
    options: ['は', 'の', 'と', 'に'],
    correctAnswer: 2,
    explanation: 'と (to) digunakan untuk menunjukkan dengan siapa melakukan kegiatan. "友達と映画を見ます" berarti "menonton film dengan teman".',
    particle: 'と',
    category: 'intermediate',
    japanese: '友達と映画を見ます。',
    furigana: 'ともだちとえいがをみます。'
  },
  
  // Advanced Questions
  {
    id: 'q8',
    question: 'Partikel apa yang tepat untuk menunjukkan alasan: 疲れた___、休みます。',
    options: ['から', 'まで', 'が', 'と'],
    correctAnswer: 0,
    explanation: 'から (kara) digunakan untuk menunjukkan alasan. "疲れたから、休みます" berarti "karena lelah, saya akan istirahat".',
    particle: 'から',
    category: 'advanced',
    japanese: '疲れたから、休みます。',
    furigana: 'つかれたから、やすみます。'
  },
  {
    id: 'q9',
    question: 'Partikel apa yang tepat untuk batas waktu: 5時___働きます。',
    options: ['から', 'まで', 'が', 'に'],
    correctAnswer: 1,
    explanation: 'まで (made) digunakan untuk menunjukkan batas waktu atau tempat. "5時まで働きます" berarti "bekerja sampai jam 5".',
    particle: 'まで',
    category: 'advanced',
    japanese: '5時まで働きます。',
    furigana: '5じまではたらきます。'
  },
  {
    id: 'q10',
    question: 'Partikel apa yang tepat untuk subjek dalam kalimat: 誰___来ましたか？',
    options: ['は', 'の', 'を', 'が'],
    correctAnswer: 3,
    explanation: 'が (ga) digunakan untuk menandai subjek yang sedang difokuskan. "誰が来ましたか？" berarti "siapa yang datang?".',
    particle: 'が',
    category: 'advanced',
    japanese: '誰が来ましたか？',
    furigana: 'だれがきましたか？'
  }
];

export const getQuestionsByCategory = (category: 'basic' | 'intermediate' | 'advanced' | 'mixed') => {
  if (category === 'mixed') {
    return quizQuestions;
  }
  return quizQuestions.filter(q => q.category === category);
};

export const getRandomQuestions = (count: number, category: 'basic' | 'intermediate' | 'advanced' | 'mixed' = 'mixed') => {
  const questions = getQuestionsByCategory(category);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};