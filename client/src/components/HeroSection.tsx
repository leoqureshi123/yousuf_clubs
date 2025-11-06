import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroVideo from '@/assets/video.mp4';

export default function HeroSection() {
  const parallaxOffset = useParallax(-0.5);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 liquid-ether opacity-40" />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent to-transparent hyperspeed-line"
            style={{
              width: '200%',
              left: '-50%',
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
            data-testid="text-hero-title"
          >
            Empowering Digital Reach
          </h1>
        </div>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
        >
          Building and scaling global e-commerce brands across fashion, tech and lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            size="lg"
            onClick={() => scrollToSection('stores')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 text-lg px-8 h-12 shadow-lg shadow-primary/50"
          >
            View Stores
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      
    </section>
  );
}