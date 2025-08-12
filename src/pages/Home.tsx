import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BookOpen, Brain, Info, HelpCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="hero-content">
            <h1 className="hero-title">
              Particel Hint
            </h1>
            <p className="hero-subtitle">
              Belajar Partikel Bahasa Jepang dengan Mudah dan Menyenangkan
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Platform pembelajaran interaktif untuk menguasai partikel bahasa Jepang. 
              Cocok untuk pelajar SMK yang ingin memahami grammar Jepang dengan cara yang santai dan efektif.
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/learn">
            <Card className="nav-card group cursor-pointer">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Belajar Partikel</h3>
                <p className="text-muted-foreground">
                  Pelajari semua partikel Jepang dengan contoh dan penjelasan lengkap
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/quiz">
            <Card className="nav-card group cursor-pointer">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Kuis</h3>
                <p className="text-muted-foreground">
                  Uji pemahaman kamu dengan kuis interaktif yang seru
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/about">
            <Card className="nav-card group cursor-pointer">
              <CardContent className="p-8 text-center">
                <Info className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Tentang</h3>
                <p className="text-muted-foreground">
                  Informasi tentang platform pembelajaran ini
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/help">
            <Card className="nav-card group cursor-pointer">
              <CardContent className="p-8 text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Bantuan</h3>
                <p className="text-muted-foreground">
                  Panduan cara menggunakan platform ini
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Features */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Kenapa Pilih Particel Hint?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-item">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pembelajaran Terarah</h3>
              <p className="text-muted-foreground">
                Materi disusun bertahap dari dasar hingga lanjut sesuai kurikulum SMK
              </p>
            </div>

            <div className="feature-item">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interaktif & Menyenangkan</h3>
              <p className="text-muted-foreground">
                Belajar dengan kuis, audio pronunciation, dan interface yang menarik
              </p>
            </div>

            <div className="feature-item">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Akses Mudah</h3>
              <p className="text-muted-foreground">
                Bisa diakses kapan saja di HP atau laptop dengan tampilan responsive
              </p>
            </div>
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