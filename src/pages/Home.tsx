import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BookOpen, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroFuji from "@/assets/hero-fuji.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream/20 to-sakura/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Particel Hint</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="hero-content">
              <h1 className="hero-title">Particel Hint</h1>
              <p className="hero-subtitle">Belajar Partikel Bahasa Jepang dengan Mudah dan Menyenangkan</p>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Kuasai partikel Jepang lewat penjelasan singkat, contoh, audio, dan kuis interaktif.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/learn">
                <Button size="lg" className="hover-scale">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Belajar
                </Button>
              </Link>
              <Link to="/quiz">
                <Button size="lg" variant="secondary" className="hover-scale">
                  <Brain className="h-5 w-5 mr-2" />
                  Kuis
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroFuji}
              alt="Ilustrasi Gunung Fuji dan sakura - Particel Hint"
              loading="lazy"
              className="w-full rounded-xl shadow-elegant"
            />
            <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-tr from-sakura to-primary rounded-3xl"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Particel Hint. Platform pembelajaran partikel bahasa Jepang untuk pelajar SMK.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;