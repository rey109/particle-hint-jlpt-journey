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
    <Card className="quiz-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            Soal {questionNumber}
          </CardTitle>
          <Badge variant="secondary">
            {categoryLabels[question.category]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="question-content">
          <p className="text-lg font-medium mb-2">{question.question}</p>
          {question.japanese && (
            <div className="japanese-text">
              <p className="text-xl font-bold text-primary">{question.japanese}</p>
              {question.furigana && (
                <p className="text-sm text-muted-foreground">{question.furigana}</p>
              )}
            </div>
          )}
        </div>

        <div className="options-grid">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              size="lg"
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className="option-button quiz-option-no-mobile-hover w-full justify-start text-left p-4 h-auto"
            >
              <span className="mr-3 font-bold">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="text-lg">{option}</span>
            </Button>
          ))}
        </div>

        {showResult && (
          <div className="result-explanation">
            <div className="explanation-card">
              <h4 className="font-semibold text-primary mb-2">Penjelasan:</h4>
              <p className="text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};