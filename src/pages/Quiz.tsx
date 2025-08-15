import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { QuizCard } from "@/components/QuizCard";
import { Home, Sparkles, RotateCcw, Trophy, BookOpen, Timer, Target, Zap, Star } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const categories = [
    { 
      id: 'basic', 
      label: 'Dasar', 
      description: 'Partikel は, の, か, を',
      icon: '🌱',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    { 
      id: 'intermediate', 
      label: 'Menengah', 
      description: 'Partikel に, で, と',
      icon: '🌸',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950',
      borderColor: 'border-pink-200 dark:border-pink-800'
    },
    { 
      id: 'advanced', 
      label: 'Lanjut', 
      description: 'Partikel から, まで, が',
      icon: '🏔️',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      borderColor: 'border-purple-200 dark:border-purple-800'
    },
    { 
      id: 'mixed', 
      label: 'Campuran', 
      description: 'Semua kategori',
      icon: '🌈',
      color: 'from-gradient-to-r from-primary to-sakura',
      bgColor: 'bg-gradient-to-br from-sakura/10 to-cream/20',
      borderColor: 'border-primary/30'
    },
  ];

  const startQuiz = () => {
    const quizQuestions = getRandomQuestions(10, selectedCategory);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setResults([]);
    setShowQuestionResult(false);
    setTimeElapsed(0);
    setIsTimerRunning(true);
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
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowQuestionResult(false);
    } else {
      setIsTimerRunning(false);
      setQuizState('result');
    }
  };

  const resetQuiz = () => {
    setQuizState('setup');
    setCurrentQuestionIndex(0);
    setResults([]);
    setShowQuestionResult(false);
    setTimeElapsed(0);
    setIsTimerRunning(false);
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
    <div className="min-h-screen bg-gradient-to-br from-background via-cream/20 to-sakura/30 relative overflow-hidden dark:from-background dark:via-background/80 dark:to-background/60">
      {/* Floating Japanese Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-40 animate-float dark:opacity-25">🌸</div>
        <div className="absolute top-40 right-20 text-3xl opacity-35 animate-float dark:opacity-20" style={{ animationDelay: '1s' }}>🌸</div>
        <div className="absolute bottom-40 left-20 text-2xl opacity-40 animate-float dark:opacity-25" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="absolute top-60 left-1/3 text-3xl opacity-30 animate-float dark:opacity-18" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute top-1/3 right-10 text-2xl opacity-40 animate-float dark:opacity-25" style={{ animationDelay: '3s' }}>🍃</div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className={`flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-primary animate-ping opacity-20"></div>
            </div>
            <h1 className="text-2xl font-bold gradient-text bg-clip-text text-transparent">Particel Hint</h1>
          </Link>
          <div className={`flex items-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-sakura/10 transition-colors">
                <Home className="h-4 w-4 mr-2" />
                Beranda
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Quiz Setup */}
        {quizState === 'setup' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text  bg-clip-text text-transparent mb-4">
                  クイズ Partikel
                </h1>
              </div>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Uji pemahaman kamu tentang partikel bahasa Jepang dengan 10 soal pilihan ganda yang menarik!
              </p>
            </div>

            <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Pilih Kategori Kuis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`transform transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <button
                        onClick={() => setSelectedCategory(category.id as Category)}
                        className={`w-full p-6 rounded-2xl border-2 transition-all text-left hover:shadow-2xl group relative overflow-hidden ${
                          selectedCategory === category.id
                            ? `border-primary ${category.bgColor} shadow-lg scale-105`
                            : `border-border hover:border-primary/50 hover:${category.bgColor}`
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{category.icon}</span>
                            <h3 className="font-bold text-xl text-foreground">{category.label}</h3>
                            {selectedCategory === category.id && (
                              <Star className="h-5 w-5 text-primary animate-pulse" />
                            )}
                          </div>
                          <p className="text-foreground/80 text-sm font-medium">{category.description}</p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    onClick={startQuiz} 
                    className="quiz-start-button bg-primary/90 hover:bg-primary text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    始める (Hajimeru) - Mulai Kuis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Active Quiz */}
        {quizState === 'active' && questions.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            {/* Progress and Timer */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Progress
                    </span>
                    <span className="text-sm text-muted-foreground font-bold">
                      {currentQuestionIndex + 1} / {questions.length}
                    </span>
                  </div>
                  <Progress 
                    value={((currentQuestionIndex + 1) / questions.length) * 100} 
                    className="h-3 bg-muted"
                  />
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% 完了
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-background/80 border-sakura/20 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Timer className="h-4 w-4 gradient-text animate-pulse" />
                      時間 (Waktu)
                    </span>
                    <span className="text-lg font-bold gradient-text">
                      {formatTime(timeElapsed)}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    Waktu yang telah berlalu
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Question */}
            <div className="transform transition-all duration-500 hover:scale-[1.01]">
              <QuizCard
                key={currentQuestionIndex}
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                onAnswer={handleAnswer}
                showResult={showQuestionResult}
                userAnswer={results[currentQuestionIndex]?.userAnswer}
              />
            </div>

            {/* Next Button */}
            {showQuestionResult && (
              <div className="flex justify-end animate-slide-in-right">
                <Button 
                  onClick={nextQuestion} 
                  size="lg"
                  className="min-w-[140px] bg-primary hover:from-primary/90 hover:to-sakura/90 text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {currentQuestionIndex < questions.length - 1 ? (
                    <>次へ (Tsugi e) →</>
                  ) : (
                    <>結果 (Kekka) 📊</>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Quiz Results */}
        {quizState === 'result' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${score >= 70 ? 'from-green-400 to-green-600' : score >= 50 ? 'from-yellow-400 to-yellow-600' : 'from-red-400 to-red-600'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse-glow`}>
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
                  {score >= 90 ? '🎉' : score >= 70 ? '👏' : score >= 50 ? '💪' : '📚'}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold gradient-text bg-clip-text text-transparent mb-4">
                お疲れ様！(Otsukaresama!)
              </h1>
              
              <div className="bg-gradient-to-r from-primary/10 to-sakura/10 rounded-3xl p-8 mb-6 backdrop-blur border border-primary/20">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-sakura bg-clip-text text-primary mb-2">
                  {score}%
                </div>
                <p className="text-lg text-foreground mb-4">
                  {correctAnswers} dari {results.length} soal benar
                </p>
                <p className="text-sm text-foreground/80">
                  ⏱️ Waktu: {formatTime(timeElapsed)} | 平均: {Math.round(timeElapsed / results.length)}秒/soal
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-cream/20 to-sakura/20 rounded-2xl p-6 backdrop-blur border border-sakura/20">
                <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
                  {getScoreMessage()}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={resetQuiz} 
                size="lg" 
                variant="outline"
                className="hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                もう一度 (Mou ichido)
              </Button>
              <Link to="/learn">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:bg-primary/10 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  勉強 (Benkyou)
                </Button>
              </Link>
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-primary hover:primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Home className="h-5 w-5 mr-2" />
                  ホーム (Home)
                </Button>
              </Link>
            </div>

            {/* Detailed Results */}
            <Card className="backdrop-blur-sm bg-background/80 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="h-6 w-6 text-primary" />
                  解説 (Kaisetsu) - Pembahasan Soal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {results.map((result, index) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
                      result.isCorrect 
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950' 
                        : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          result.isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          {index + 1}
                        </span>
                        問題 {index + 1}
                      </h4>
                      <Badge 
                        variant={result.isCorrect ? "default" : "destructive"}
                        className="text-sm font-bold px-3 py-1"
                      >
                        {result.isCorrect ? "正解 ✓" : "不正解 ✗"}
                      </Badge>
                    </div>
                    
                    <p className="mb-4 text-foreground font-medium text-lg">{result.question.question_sentence+result.question.question_japanese}</p>
                    
                    {result.question.japanese && (
                      <div className="mb-4 p-4 bg-gradient-to-r from-primary/5 to-sakura/5 rounded-lg border border-primary/20">
                        <p className="text-xl font-bold text-primary mb-1">{result.question.japanese}</p>
                        {result.question.furigana && (
                          <p className="text-sm text-muted-foreground">{result.question.furigana}</p>
                        )}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {result.question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-3 rounded-xl text-sm font-medium transition-all ${
                            optionIndex === result.question.correctAnswer
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-2 border-green-300 shadow-md'
                              : optionIndex === result.userAnswer && !result.isCorrect
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-2 border-red-300'
                              : 'bg-muted border border-border'
                          }`}
                        >
                          <span className="font-bold mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                          {option}
                          {optionIndex === result.question.correctAnswer && <span className="ml-2">✓</span>}
                          {optionIndex === result.userAnswer && !result.isCorrect && <span className="ml-2">✗</span>}
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-cream/30 to-sakura/30 p-4 rounded-xl border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-primary">💡 解説:</strong> {result.question.explanation}
                      </p>
                    </div>
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