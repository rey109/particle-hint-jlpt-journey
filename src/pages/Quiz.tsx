import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { QuizCard } from "@/components/QuizCard";
import { Home, Sparkles, RotateCcw, Trophy, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { getRandomQuestions, QuizQuestion } from "@/data/quiz";

type QuizState = 'setup' | 'active' | 'result';
type Category = 'basic' | 'intermediate' | 'advanced' | 'mixed';

interface QuizResult {
  question: QuizQuestion;
  userAnswer: number;
  isCorrect: boolean;
}

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>('setup');
  const [selectedCategory, setSelectedCategory] = useState<Category>('mixed');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [showQuestionResult, setShowQuestionResult] = useState(false);

  const categories = [
    { id: 'basic', label: 'Dasar', description: 'Partikel は, の, か, を' },
    { id: 'intermediate', label: 'Menengah', description: 'Partikel に, で, と' },
    { id: 'advanced', label: 'Lanjut', description: 'Partikel から, まで, が' },
    { id: 'mixed', label: 'Campuran', description: 'Semua kategori' },
  ];

  const startQuiz = () => {
    const quizQuestions = getRandomQuestions(10, selectedCategory);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setResults([]);
    setShowQuestionResult(false);
    setQuizState('active');
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    const result: QuizResult = {
      question: currentQuestion,
      userAnswer: answerIndex,
      isCorrect
    };

    setResults(prev => [...prev, result]);
    setShowQuestionResult(true);

    // Auto advance after showing result
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setShowQuestionResult(false);
      } else {
        setQuizState('result');
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuizState('setup');
    setCurrentQuestionIndex(0);
    setResults([]);
    setShowQuestionResult(false);
  };

  const correctAnswers = results.filter(r => r.isCorrect).length;
  const score = results.length > 0 ? Math.round((correctAnswers / results.length) * 100) : 0;

  const getScoreMessage = () => {
    if (score >= 90) return "Luar biasa! Kamu sudah menguasai partikel dengan sangat baik! 🎉";
    if (score >= 70) return "Bagus sekali! Kamu sudah paham sebagian besar partikel! 👏";
    if (score >= 50) return "Lumayan! Masih ada ruang untuk improvement. Keep learning! 💪";
    return "Jangan menyerah! Yuk belajar lagi supaya makin paham partikel! 📚";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream/20 to-sakura/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Particel Hint</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Beranda
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Quiz Setup */}
        {quizState === 'setup' && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-4">Kuis Partikel</h1>
              <p className="text-lg text-muted-foreground">
                Uji pemahaman kamu tentang partikel bahasa Jepang dengan 10 soal pilihan ganda.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pilih Kategori Kuis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id as Category)}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:shadow-md ${
                        selectedCategory === category.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-semibold text-lg mb-2">{category.label}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button size="lg" onClick={startQuiz} className="quiz-start-button">
                    Mulai Kuis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Active Quiz */}
        {quizState === 'active' && questions.length > 0 && (
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {currentQuestionIndex + 1} / {questions.length}
                  </span>
                </div>
                <Progress 
                  value={((currentQuestionIndex + 1) / questions.length) * 100} 
                  className="h-2"
                />
              </CardContent>
            </Card>

            {/* Current Question */}
            <QuizCard
              question={questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              onAnswer={handleAnswer}
              showResult={showQuestionResult}
              userAnswer={results[currentQuestionIndex]?.userAnswer}
            />
          </div>
        )}

        {/* Quiz Results */}
        {quizState === 'result' && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-primary mb-4">Kuis Selesai!</h1>
              <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
              <p className="text-xl text-muted-foreground mb-4">
                {correctAnswers} dari {results.length} soal benar
              </p>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                {getScoreMessage()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={resetQuiz} size="lg" variant="outline">
                <RotateCcw className="h-5 w-5 mr-2" />
                Coba Lagi
              </Button>
              <Link to="/learn">
                <Button size="lg" variant="outline">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Belajar Lagi
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg">
                  <Home className="h-5 w-5 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>

            {/* Detailed Results */}
            <Card>
              <CardHeader>
                <CardTitle>Pembahasan Soal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {results.map((result, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold">Soal {index + 1}</h4>
                      <Badge variant={result.isCorrect ? "default" : "destructive"}>
                        {result.isCorrect ? "Benar" : "Salah"}
                      </Badge>
                    </div>
                    <p className="mb-3">{result.question.question}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {result.question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded text-sm ${
                            optionIndex === result.question.correctAnswer
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : optionIndex === result.userAnswer && !result.isCorrect
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-muted'
                          }`}
                        >
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Penjelasan:</strong> {result.question.explanation}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;