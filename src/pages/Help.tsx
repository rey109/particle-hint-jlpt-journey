import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Home, Sparkles, HelpCircle, BookOpen, Brain, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-4">Bantuan & Panduan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Panduan lengkap cara menggunakan Particel Hint untuk pembelajaran yang optimal.
          </p>
        </div>

        <div className="space-y-8">
          {/* Quick Start Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-primary" />
                Panduan Cepat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mulai Belajar</h3>
                  <p className="text-sm text-muted-foreground">
                    Klik "Belajar Partikel" untuk mempelajari materi partikel step by step.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold mb-2">Praktik Kuis</h3>
                  <p className="text-sm text-muted-foreground">
                    Uji pemahaman dengan kuis 10 soal pilihan ganda.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-sakura rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold mb-2">Ulangi</h3>
                  <p className="text-sm text-muted-foreground">
                    Lakukan review materi dan kuis secara berkala untuk memperkuat ingatan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Pertanyaan yang Sering Diajukan (FAQ)</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara memulai belajar di Particel Hint?</AccordionTrigger>
                  <AccordionContent>
                    <p>Untuk memulai belajar, kamu bisa klik tombol "Belajar Partikel" di halaman utama. 
                    Pilih kategori yang ingin dipelajari (Dasar, Menengah, atau Lanjut), lalu navigasi 
                    partikel satu per satu menggunakan tombol "Sebelumnya" dan "Selanjutnya".</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Apa perbedaan kategori Dasar, Menengah, dan Lanjut?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>Dasar:</strong> Partikel fundamental seperti は, の, か, を</p>
                      <p><strong>Menengah:</strong> Partikel untuk lokasi dan cara seperti に, で, と</p>
                      <p><strong>Lanjut:</strong> Partikel kompleks seperti から, まで, が</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana cara menggunakan fitur audio?</AccordionTrigger>
                  <AccordionContent>
                    <p>Setiap contoh kalimat di halaman pembelajaran memiliki tombol speaker (🔊). 
                    Klik tombol tersebut untuk mendengar pengucapan kalimat bahasa Jepang yang benar. 
                    Fitur ini membantu kamu belajar pelafalan yang tepat.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Berapa soal dalam satu sesi kuis?</AccordionTrigger>
                  <AccordionContent>
                    <p>Setiap sesi kuis terdiri dari 10 soal pilihan ganda. Kamu bisa memilih kategori 
                    soal sebelum memulai: Dasar, Menengah, Lanjut, atau Campuran. Soal akan diacak 
                    setiap kali kamu memulai kuis baru.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Bagaimana sistem penilaian kuis?</AccordionTrigger>
                  <AccordionContent>
                    <p>Sistem penilaian kuis menggunakan persentase berdasarkan jumlah jawaban benar. 
                    Setelah selesai kuis, kamu akan melihat skor akhir, pembahasan setiap soal, 
                    dan saran untuk pembelajaran selanjutnya.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Apakah bisa menggunakan platform ini di HP?</AccordionTrigger>
                  <AccordionContent>
                    <p>Ya! Particel Hint dirancang responsive dan nyaman digunakan di berbagai perangkat, 
                    termasuk smartphone, tablet, dan laptop. Tampilan akan menyesuaikan ukuran layar 
                    perangkat kamu secara otomatis.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Bagaimana cara mengaktifkan mode gelap?</AccordionTrigger>
                  <AccordionContent>
                    <p>Klik tombol toggle tema (🌙/☀️) di pojok kanan atas halaman untuk beralih antara 
                    mode terang dan gelap. Pengaturan akan tersimpan otomatis untuk kunjungan berikutnya.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Apa itu furigana?</AccordionTrigger>
                  <AccordionContent>
                    <p>Furigana adalah tulisan hiragana kecil yang ditulis di atas atau di samping kanji 
                    untuk menunjukkan cara bacanya. Di Particel Hint, furigana membantu kamu membaca 
                    kalimat Jepang dengan benar meskipun belum hafal semua kanji.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Feature Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Panduan Fitur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Halaman Belajar Partikel</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Filter partikel berdasarkan kategori</li>
                      <li>• Navigasi dengan tombol panah atau dots</li>
                      <li>• Definisi, fungsi, dan contoh kalimat lengkap</li>
                      <li>• Audio pengucapan untuk setiap contoh</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Brain className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Halaman Kuis</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pilih kategori soal sebelum memulai</li>
                      <li>• Progress bar menunjukkan kemajuan kuis</li>
                      <li>• Pembahasan langsung setelah menjawab</li>
                      <li>• Hasil detail dengan penjelasan setiap soal</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Settings className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Pengaturan</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Toggle mode terang/gelap di header</li>
                      <li>• Navigasi cepat ke semua halaman</li>
                      <li>• Auto-save preferensi tampilan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Tips Belajar Efektif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    Strategi Pembelajaran
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Mulai dari kategori Dasar sebelum ke level selanjutnya</li>
                    <li>• Baca contoh kalimat sambil mendengar audio</li>
                    <li>• Ulangi materi sebelum mengerjakan kuis</li>
                    <li>• Catat partikel yang masih sulit dipahami</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Memaksimalkan Kuis
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Baca soal dengan teliti sebelum menjawab</li>
                    <li>• Pahami konteks kalimat, bukan hanya partikel</li>
                    <li>• Baca pembahasan meskipun jawaban benar</li>
                    <li>• Ulangi kuis jika skor kurang dari 70%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Butuh Bantuan Lebih Lanjut?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Jika kamu masih mengalami kesulitan atau memiliki pertanyaan yang belum terjawab, 
                jangan ragu untuk bertanya kepada guru bahasa Jepang di sekolah atau diskusi dengan teman sekelas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/learn">
                  <Button>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Mulai Belajar
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Coba Kuis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Help;