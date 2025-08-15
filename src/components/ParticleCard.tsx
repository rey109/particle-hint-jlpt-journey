import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2 } from "lucide-react";
import { Particle } from "@/data/particles";

interface ParticleCardProps {
  particle: Particle;
  onPlayAudio?: (text: string) => void;
}

export const ParticleCard = ({ particle, onPlayAudio }: ParticleCardProps) => {
  const categoryColors = {
    basic: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", 
    advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  const categoryLabels = {
    basic: "Dasar",
    intermediate: "Menengah",
    advanced: "Lanjut"
  };

  const playAudio = (text: string) => {
    if (onPlayAudio) {
      onPlayAudio(text);
    } else {
      // Fallback to speech synthesis
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Card className="particle-card group">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{particle.icon}</span>
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                {particle.particle}
              </CardTitle>
              <Badge className={categoryColors[particle.category]}>
                {categoryLabels[particle.category]}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Definisi:</h4>
          <p className="text-foreground">{particle.definition}</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-1">Fungsi:</h4>
          <p className="text-foreground">{particle.function}</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Contoh Kalimat:</h4>
          <div className="space-y-3">
            {particle.examples.map((example, index) => (
              <div key={index} className="example-card">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground mb-1">
                      {example.japanese}
                    </p>
                    {example.furigana && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {example.furigana}
                      </p>
                    )}
                    <p className="text-foreground">
                      {example.translation}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAudio(example.japanese)}
                    className="audio-button shrink-0"
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};