
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Index = () => {
  return <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/2O-a4Hs98yw?autoplay=1&mute=1&loop=1&playlist=2O-a4Hs98yw&controls=0&showinfo=0&rel=0&modestbranding=1&start=0&enablejsapi=1&origin=window.location.hostname"
          title="VORIQ Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in text-cinematic-gold">
            VORIQ
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide animate-fade-in text-glow text-cinematic-gold">
            Pioneering AI Storytelling
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Where artificial intelligence meets cinematic excellence. Creating award-winning content that pushes the boundaries of what's possible.
          </p>
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg animate-glow transition-all duration-300 hover:scale-105">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>;
};

export default Index;
