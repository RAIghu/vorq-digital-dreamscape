import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
const Index = () => {
  return <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop">
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in text-cinematic-gold">
            VORIQ
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-primary font-light tracking-wide animate-fade-in text-glow">
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