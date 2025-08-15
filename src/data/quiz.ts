export interface QuizQuestion {
  id: string;
  question_sentence: string;
  question_japanese:string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  particle: string;
  category: 'basic' | 'intermediate' | 'advanced';
  japanese: string;
  furigana?: string;
  furigana_question?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Basic Questions
  {
    id: 'q1',
    question_sentence: 'Partikel apa yang tepat untuk melengkapi kalimat: ',
    furigana_question: 'わたし___がくせいです。',
    question_japanese: '私___学生です。',
    options: ['は', 'の', 'を', 'が'],
    correctAnswer: 0,
    explanation: 'は (wa) digunakan untuk menandai topik dalam kalimat. "私は学生です" berarti "Saya adalah seorang siswa".',
    particle: 'は',
    category: 'basic',
    japanese: '私は学生です。',
    furigana: 'わたしはがくせいです。',
  },
  {
    id: 'q2',
    question_sentence: 'Partikel apa yang tepat untuk menunjukkan kepemilikan: ',
    furigana_question: 'たなかさん___くるま',
    question_japanese: '田中さん___車',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 1,
    explanation: 'の (no) digunakan untuk menunjukkan kepemilikan atau hubungan. "田中さんの車" berarti "mobil Tanaka-san".',
    particle: 'の',
    category: 'basic',
    japanese: '田中さんの車',
    furigana: 'たなかさんのくるま',
  },
  {
    id: 'q3',
    question_sentence: 'Partikel apa yang tepat untuk membuat kalimat tanya: ',
    furigana_question: 'これはなんです___？',
    question_japanese: 'これは何ですか？',
    options: ['は', 'の', 'か', 'を'],
    correctAnswer: 2,
    explanation: 'か (ka) digunakan untuk membuat kalimat tanya. "これは何ですか？" berarti "Ini apa?".',
    particle: 'か',
    category: 'basic',
    japanese: 'これは何ですか？',
    furigana: 'これはなんですか？',
  },
  {
    id: 'q4',
    question_sentence: 'Partikel apa yang tepat untuk objek langsung: ',
    furigana_question: 'ほん___よみます。',
    question_japanese: '本___読みます。',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 2,
    explanation: 'を (wo/o) digunakan untuk menandai objek langsung. "本を読みます" berarti "membaca buku".',
    particle: 'を',
    category: 'basic',
    japanese: '本を読みます。',
    furigana: 'ほんをよみます。',
  },
  
  // Intermediate Questions
  {
    id: 'q5',
    question_sentence: 'Partikel apa yang tepat untuk menunjukkan tujuan: ',
    furigana_question: 'がっこう___いきます。',
    question_japanese: '学校___行きます。',
    options: ['は', 'の', 'を', 'に'],
    correctAnswer: 3,
    explanation: 'に (ni) digunakan untuk menunjukkan arah atau tujuan. "学校に行きます" berarti "pergi ke sekolah".',
    particle: 'に',
    category: 'intermediate',
    japanese: '学校に行きます。',
    furigana: 'がっこうにいきます。',
  },
  {
    id: 'q6',
    question_sentence: 'Partikel apa yang tepat untuk tempat kegiatan: ',
    furigana_question: 'としょかん___べんきょうします。',
    question_japanese: '図書館___勉強します。',
    options: ['は', 'で', 'を', 'に'],
    correctAnswer: 1,
    explanation: 'で (de) digunakan untuk menunjukkan tempat berlangsungnya kegiatan. "図書館で勉強します" berarti "belajar di perpustakaan".',
    particle: 'で',
    category: 'intermediate',
    japanese: '図書館で勉強します。',
    furigana: 'としょかんでべんきょうします。',
  },
  {
    id: 'q7',
    question_sentence: 'Partikel apa yang tepat untuk menunjukkan teman: ',
    furigana_question: 'ともだち___えいがをみます。',
    question_japanese: '友達___映画を見ます。',
    options: ['は', 'の', 'と', 'に'],
    correctAnswer: 2,
    explanation: 'と (to) digunakan untuk menunjukkan dengan siapa melakukan kegiatan. "友達と映画を見ます" berarti "menonton film dengan teman".',
    particle: 'と',
    category: 'intermediate',
    japanese: '友達と映画を見ます。',
    furigana: 'ともだちとえいがをみます。',
  },
  
  // Advanced Questions
  {
    id: 'q8',
    question_sentence: 'Partikel apa yang tepat untuk menunjukkan alasan: ',
    furigana_question: 'つかれた___、やすみます。',
    question_japanese: '疲れた___、休みます。',
    options: ['から', 'まで', 'が', 'と'],
    correctAnswer: 0,
    explanation: 'から (kara) digunakan untuk menunjukkan alasan. "疲れたから、休みます" berarti "karena lelah, saya akan istirahat".',
    particle: 'から',
    category: 'advanced',
    japanese: '疲れたから、休みます。',
    furigana: 'つかれたから、やすみます。',
  },
  {
    id: 'q9',
    question_sentence: 'Partikel apa yang tepat untuk batas waktu: ',
    furigana_question: '5じ___はたらきます。',
    question_japanese: '5時___働きます。',
    options: ['から', 'まで', 'が', 'に'],
    correctAnswer: 1,
    explanation: 'まで (made) digunakan untuk menunjukkan batas waktu atau tempat. "5時まで働きます" berarti "bekerja sampai jam 5".',
    particle: 'まで',
    category: 'advanced',
    japanese: '5時まで働きます。',
    furigana: '5じまではたらきます。',
  },
  {
    id: 'q10',
    question_sentence: 'Partikel apa yang tepat untuk subjek dalam kalimat: ',
    furigana_question: 'だれ___きましたか？',
    question_japanese: '誰___来ましたか？',
    options: ['は', 'の', 'を', 'が'],
    correctAnswer: 3,
    explanation: 'が (ga) digunakan untuk menandai subjek yang sedang difokuskan. "誰が来ましたか？" berarti "siapa yang datang?".',
    particle: 'が',
    category: 'advanced',
    japanese: '誰が来ましたか？',
    furigana: 'だれがきましたか？',
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