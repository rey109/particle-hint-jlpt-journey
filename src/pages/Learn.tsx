import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ParticleCard } from "@/components/ParticleCard";
import { ChevronLeft, ChevronRight, Home, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { particles, getParticlesByCategory } from "@/data/particles";

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'basic' | 'intermediate' | 'advanced'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentParticles, setCurrentParticles] = useState(particles);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setCurrentParticles(particles);
    } else {
      setCurrentParticles(getParticlesByCategory(selectedCategory));
    }
    setCurrentIndex(0);
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'Semua', count: particles.length },
    { id: 'basic', label: 'Dasar', count: getParticlesByCategory('basic').length },
    { id: 'intermediate', label: 'Menengah', count: getParticlesByCategory('intermediate').length },
    { id: 'advanced', label: 'Lanjut', count: getParticlesByCategory('advanced').length },
  ];

  const nextParticle = () => {
    setCurrentIndex((prev) => (prev + 1) % currentParticles.length);
  };

  const prevParticle = () => {
    setCurrentIndex((prev) => (prev - 1 + currentParticles.length) % currentParticles.length);
  };

  const currentParticle = currentParticles[currentIndex];

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

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Belajar Partikel</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari partikel bahasa Jepang satu per satu dengan penjelasan lengkap dan contoh kalimat.
          </p>
        </div>

        {/* Category Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pilih Kategori</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className="category-button"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation and Current Particle */}
        {currentParticles.length > 0 && (
          <div className="space-y-6">
            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-2">
              <Button
                variant="outline"
                onClick={prevParticle}
                disabled={currentParticles.length <= 1}
                className="nav-button flex-shrink-0"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Sebelumnya</span>
              </Button>
              
              <div className="text-center flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">
                  {currentIndex + 1} dari {currentParticles.length} partikel
                </p>
                <div className="flex gap-1 mt-2 justify-center">
                  {/* Mobile: tampilkan angka dengan border */}
                  <div className="md:hidden flex items-center gap-2">
                    {(() => {
                      const totalPages = currentParticles.length;
                      const maxVisiblePages = 3;
                      
                      if (totalPages <= maxVisiblePages) {
                        // Jika total halaman <= 3, tampilkan semua
                        return Array.from({ length: totalPages }, (_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-6 h-6 text-xs rounded border transition-all ${
                              index === currentIndex 
                                ? 'bg-primary text-primary-foreground border-primary' 
                                : 'bg-background text-muted-foreground border-border hover:border-primary'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ));
                      }
                      
                      const pages = [];
                      
                      if (currentIndex <= 1) {
                        pages.push(0, 1, 2);
                        if (totalPages > 3) {
                          pages.push(-1); 
                        }
                      } else if (currentIndex >= totalPages - 2) {
                        
                        if (totalPages > 3) {
                          pages.push(-1); 
                        }
                        pages.push(totalPages - 3, totalPages - 2, totalPages - 1);
                      } else {
                        
                        pages.push(-1); 
                        pages.push(currentIndex - 1, currentIndex, currentIndex + 1);
                        pages.push(-1); 
                      }
                      
                      return pages.map((pageIndex, i) => {
                        if (pageIndex === -1) {
                          return (
                            <span key={`ellipsis-${i}`} className="text-muted-foreground px-1">
                              ...
                            </span>
                          );
                        }
                        
                        return (
                          <button
                            key={pageIndex}
                            onClick={() => setCurrentIndex(pageIndex)}
                            className={`w-6 h-6 text-xs rounded border transition-all ${
                              pageIndex === currentIndex 
                                ? 'bg-primary text-primary-foreground border-primary' 
                                : 'bg-background text-muted-foreground border-border hover:border-primary'
                            }`}
                          >
                            {pageIndex + 1}
                          </button>
                        );
                      });
                    })()}
                  </div>
                  
                  <div className="hidden md:flex gap-1">
                    {currentParticles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={nextParticle}
                disabled={currentParticles.length <= 1}
                className="nav-button flex-shrink-0"
                size="sm"
              >
                <span className="hidden md:inline">Selanjutnya</span>
                <ChevronRight className="h-4 w-4 md:ml-2" />
              </Button>
            </div>

            {/* Current Particle */}
            <div className="max-w-4xl mx-auto">
              <ParticleCard particle={currentParticle} />
            </div>

            {/* Quick Actions */}
            <div className="text-center pt-8">
              <Link to="/quiz">
                <Button size="lg" className="quiz-cta-button">
                  <Brain className="h-5 w-5 mr-2" />
                  Uji Pemahaman dengan Kuis
                </Button>
              </Link>
            </div>
          </div>
        )}

        {currentParticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Tidak ada partikel dalam kategori ini.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Learn;