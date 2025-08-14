import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BookOpen, Brain, Sparkles, Clock, ArrowRight, Play, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroFuji from "@/assets/hero-fuji.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Pembelajaran Interaktif",
      description: "Pelajari partikel dengan contoh kalimat dan audio pronunciation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Kuis Adaptif",
      description: "Uji pemahaman dengan kuis yang menyesuaikan tingkat kemampuan",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream/20 to-sakura/30 relative overflow-hidden dark:from-background dark:via-background/80 dark:to-background/60">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-60 animate-float dark:opacity-40">🌸</div>
        <div className="absolute top-40 right-20 text-3xl opacity-60 animate-float dark:opacity-40" style={{ animationDelay: '1s' }}>🌸</div>
        <div className="absolute bottom-40 left-20 text-2xl opacity-60 animate-float dark:opacity-40" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="absolute top-60 left-1/3 text-3xl opacity-60 animate-float dark:opacity-40" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-60 animate-float dark:opacity-40" style={{ animationDelay: '1.5s' }}>🌸</div>
      </div>

      <header className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className={`flex items-center gap-2 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">Particel Hint</h1>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="hero-content space-y-6">
              <div className="pb-4">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-fade-in">
                  Particel Hint
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <span className="text-2xl">🇯🇵</span>
                  <span className="text-lg font-medium text-primary">日本語の助詞</span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Belajar Partikel Bahasa Jepang dengan 
                <span className="text-primary font-semibold"> Mudah</span> dan 
                <span className="text-primary font-semibold"> Menyenangkan</span>
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Kuasai partikel Jepang lewat penjelasan singkat, contoh kalimat interaktif, 
                audio pronunciation, dan kuis yang menyenangkan. 
                <span className="text-primary">Sempurna untuk pelajar SMK!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/learn" className="group">
                <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-primary to-crimson hover:from-crimson hover:to-primary transition-all duration-300 hover-lift glow-on-hover w-full sm:w-auto text-primary-foreground shadow-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Mulai Belajar</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </Link>
              
              <Link to="/quiz" className="group">
                <Button size="lg" variant="outline" className="relative border-2 border-primary/50 hover:border-primary bg-background/50 backdrop-blur hover-lift w-full sm:w-auto dark:bg-background/80 dark:border-primary/60 dark:hover:border-primary shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Coba Kuis</span>
                    <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative group">
              <img
                src={heroFuji}
                alt="Ilustrasi Gunung Fuji dan sakura - Particel Hint"
                loading="lazy"
                className="w-full rounded-2xl shadow-elegant group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-tr from-sakura via-primary to-crimson rounded-3xl animate-pulse-glow dark:opacity-20" />
              
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-float">
                🎌 JLPT Ready
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sakura text-sakura-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-float dark:bg-sakura/80" style={{ animationDelay: '1s' }}>
                ⭐ #1 Platform
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 animate-fade-in">
              Fitur Unggulan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pembelajaran partikel yang dirancang khusus untuk memberikan pengalaman terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover-lift glow-on-hover bg-gradient-to-br from-card/90 to-cream/40 backdrop-blur border border-border/30 shadow-soft transition-all duration-500 delay-${index * 100} dark:from-card/60 dark:to-warm-gray/20 dark:border-border/20 hover:shadow-elegant`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-16 px-6 rounded-3xl bg-gradient-to-r from-primary/10 via-sakura/10 to-cream/20 backdrop-blur border border-primary/20 relative overflow-hidden shadow-soft dark:from-primary/5 dark:via-sakura/5 dark:to-warm-gray/10 dark:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse dark:via-primary/3" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Siap Menguasai Partikel Jepang?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Bergabunglah dengan ribuan pelajar yang telah merasakan metode pembelajaran revolusioner kami
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/learn" className="group w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-primary to-crimson hover:from-crimson hover:to-primary shadow-elegant hover:shadow-glow transition-all duration-300 text-lg px-8 py-3 hover-lift text-primary-foreground w-full sm:w-auto">
                  <Zap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Mulai Sekarang - GRATIS
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-full shadow-sm dark:bg-background/70">
                <Clock className="h-4 w-4" />
                <span>Hanya 5 menit untuk memulai</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 py-12 border-t border-border/50 bg-gradient-to-r from-background/50 to-cream/10 backdrop-blur dark:from-background/80 dark:to-warm-gray/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold gradient-text">Particel Hint</span>
              </div>
              <p className="text-muted-foreground">
                Platform pembelajaran partikel bahasa Jepang terbaik untuk pelajar SMK
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
                <Link to="/help" className="block text-muted-foreground hover:text-primary transition-colors">
                  Bantuan
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Kontak</h3>
              <p className="text-muted-foreground">
                © 2024 Particel Hint<br />
                Japanese Club SMKN 1 Cibinong
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;