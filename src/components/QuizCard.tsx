import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizQuestion } from "@/data/quiz";
import { useState, useEffect } from "react";

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  onAnswer: (answer: number) => void;
  showResult?: boolean;
  userAnswer?: number;
}

export const QuizCard = ({ 
  question, 
  questionNumber, 
  onAnswer, 
  showResult = false, 
  userAnswer 
}: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Reset selected answer when question changes or when showResult changes
  useEffect(() => {
    setSelectedAnswer(null);
  }, [questionNumber, showResult]);

  const handleAnswerSelect = (answerIndex: number) => {
    // Don't allow selection if showing results
    if (showResult) return;
    
    // Only update if this is a new selection (prevent double selection)
    if (selectedAnswer !== answerIndex) {
      setSelectedAnswer(answerIndex);
      onAnswer(answerIndex);
    }
  };

  const getButtonVariant = (index: number) => {
    // If showing results, use userAnswer prop for highlighting
    if (showResult) {
      if (index === question.correctAnswer) return "default";
      if (userAnswer === index && index !== question.correctAnswer) return "destructive";
      return "outline";
    }
    
    // If not showing results, use local selectedAnswer state
    if (selectedAnswer === null) return "outline";
    if (selectedAnswer === index) return "default";
    return "outline";
  };

  const categoryLabels = {
    basic: "Dasar",
    intermediate: "Menengah", 
    advanced: "Lanjut"
  };

  return (
    <Card className="quiz-card backdrop-blur-sm bg-background/90 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-sakura/5 border-b border-primary/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              {questionNumber}
            </span>
            問題 {questionNumber}
          </CardTitle>
          <Badge variant="secondary" className="bg-gradient-to-r from-sakura/20 to-cream/20 border border-sakura/30">
            {categoryLabels[question.category]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 p-6">
        <div className="question-content">
          <p className="text-lg font-medium mb-4 leading-relaxed">
            {question.question_sentence}
          </p>
          {/* Display furigana_question above question_japanese only when user hasn't answered */}
          {!(showResult || selectedAnswer !== null) && (
            <div className="japanese-question bg-gradient-to-r from-primary/5 to-sakura/5 p-4 rounded-xl border border-primary/10 mb-4">
              {question.furigana_question && (
                <p className="text-sm text-foreground/80 mb-2 font-medium">{question.furigana_question}</p>
              )}
              <p className="text-2xl font-bold text-primary">{question.question_japanese}</p>
            </div>
          )}
          {(showResult || selectedAnswer !== null) && question.japanese && (
            <div className="japanese-text bg-gradient-to-r from-primary/10 to-sakura/10 p-4 rounded-xl border border-primary/20 animate-fade-in">
              {question.furigana && (
                <p className="text-sm text-foreground/80">{question.furigana}</p>
              )}
              <p className="text-2xl font-bold text-primary mb-2">{question.japanese}</p>
            </div>
          )}
        </div>
 
        <div className="options-grid space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              size="lg"
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`option-button quiz-option-no-mobile-hover w-full justify-start text-left p-4 h-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
          selectedAnswer === index && !showResult ? 'ring-2 ring-primary/50 shadow-lg' : ''
              } ${
          showResult && index === question.correctAnswer ? 'ring-2 ring-green-500 bg-green-100 dark:bg-green-900 border-green-400 shadow-green-200/50 shadow-lg' : ''
              } ${
          showResult && userAnswer === index && index !== question.correctAnswer ? 'ring-2 ring-red-500 bg-red-100 dark:bg-red-900 border-red-400 shadow-red-200/50 shadow-lg' : ''
              } ${
          showResult && index !== question.correctAnswer && userAnswer !== index ? 'opacity-60' : ''
              }`}
            >
              <span className={`mr-3 font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          showResult && index === question.correctAnswer ? 'bg-green-500 text-white' :
          showResult && userAnswer === index && index !== question.correctAnswer ? 'bg-red-500 text-white' :
          'bg-gradient-to-r from-primary/20 to-sakura/20'
              }`}>
          {String.fromCharCode(65 + index)}
              </span>
              <span className={`text-lg flex-1 ${
          showResult && index === question.correctAnswer ? 'font-semibold text-green-700 dark:text-green-300' :
          showResult && userAnswer === index && index !== question.correctAnswer ? 'font-semibold text-red-700 dark:text-red-300' :
          ''
              }`}>{option}</span>
              {showResult && index === question.correctAnswer && (
          <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
              )}
              {showResult && userAnswer === index && index !== question.correctAnswer && (
          <span className="text-red-600 dark:text-red-400 font-bold text-xl">✗</span>
              )}
            </Button>
          ))}
        </div>

        {(showResult || selectedAnswer !== null) && (
          <div className="result-explanation animate-fade-in">
            <div className="explanation-card bg-gradient-to-r from-cream/30 to-sakura/30 p-4 rounded-xl border border-primary/20 backdrop-blur">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                💡 解説 (Kaisetsu):
              </h4>
              <p className="text-foreground leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};