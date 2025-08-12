import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Home, Sparkles, Target, Users, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Tentang Particel Hint</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform pembelajaran partikel bahasa Jepang yang dirancang khusus untuk pelajar SMK.
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Particel Hint hadir untuk membantu pelajar SMK menguasai partikel bahasa Jepang dengan cara yang 
                mudah, menyenangkan, dan efektif. Kami percaya bahwa belajar bahasa tidak harus membosankan, 
                melainkan bisa menjadi pengalaman yang menarik dan interaktif.
              </p>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Untuk Siapa Platform Ini?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🎓 Pelajar SMK Kelas 10</h4>
                  <p className="text-muted-foreground">
                    Siswa-siswi SMK yang sedang mempelajari bahasa Jepang dan ingin memahami penggunaan partikel dengan lebih baik.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">👨‍🏫 Guru Bahasa Jepang</h4>
                  <p className="text-muted-foreground">
                    Pengajar yang membutuhkan media pembelajaran interaktif untuk mengajarkan partikel bahasa Jepang.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📚 Pembelajar Mandiri</h4>
                  <p className="text-muted-foreground">
                    Siapa saja yang ingin belajar partikel bahasa Jepang secara mandiri dengan panduan yang jelas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                Fitur Unggulan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">📖</span>
                    Pembelajaran Bertahap
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Materi disusun dari tingkat dasar hingga lanjut dengan penjelasan yang mudah dipahami.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Kuis Interaktif
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sistem kuis dengan 10 soal pilihan ganda untuk menguji pemahaman kamu.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🔊</span>
                    Audio Pengucapan
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Fitur audio untuk membantu mempelajari pelafalan kalimat bahasa Jepang yang benar.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">📱</span>
                    Responsive Design
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Tampilan yang menyesuaikan dengan perangkat, nyaman digunakan di HP maupun laptop.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🌙</span>
                    Mode Gelap
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Pilihan tampilan terang dan gelap untuk kenyamanan belajar di berbagai kondisi.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">🎨</span>
                    Antarmuka Menarik
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Desain yang modern dengan sentuhan budaya Jepang yang membuat belajar jadi lebih menyenangkan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Approach */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                Pendekatan Pembelajaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🇮🇩 Bahasa Indonesia Santai</h4>
                  <p className="text-muted-foreground">
                    Semua penjelasan menggunakan bahasa Indonesia yang santai dan mudah dipahami oleh remaja.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🇯🇵 Contoh Autentik</h4>
                  <p className="text-muted-foreground">
                    Semua contoh kalimat menggunakan bahasa Jepang asli dengan furigana dan terjemahan Indonesia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎮 Gamifikasi</h4>
                  <p className="text-muted-foreground">
                    Elemen permainan seperti kuis, skor, dan progress untuk membuat pembelajaran lebih engaging.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Siap Mulai Belajar?</h2>
            <p className="text-muted-foreground mb-6">
              Yuk, mulai perjalanan belajar partikel bahasa Jepang bersama Particel Hint!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/learn">
                <Button size="lg">
                  📖 Mulai Belajar
                </Button>
              </Link>
              <Link to="/quiz">
                <Button size="lg" variant="outline">
                  🧠 Coba Kuis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;