import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';
import { VolumeX, Volume2, Play, Pause } from 'lucide-react';

const Index = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showControls) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showControls]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowControls(false);
  };

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
    setShowControls(false);
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Navigation />
      
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/2O-a4Hs98yw?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&loop=1&playlist=2O-a4Hs98yw&start=0&end=0${isPaused ? '&autoplay=0' : ''}`}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay that appears/disappears based on mute state */}
        {isMuted && <div className="absolute inset-0 bg-black/60"></div>}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Hero text - only show when muted */}
          {isMuted && (
            <>
              <h1 className="font-agency font-black text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in text-cinematic-gold uppercase tracking-wider">
                VORIQ
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide animate-fade-in text-glow text-cinematic-gold">
                Pioneering AI Storytelling
              </p>
              <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in">
                Where artificial intelligence meets cinematic excellence. Creating award-winning content that pushes the boundaries of what's possible.
              </p>
              
              {/* View Portfolio button - centered when muted */}
              <div className="flex flex-col items-center gap-6">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg animate-glow transition-all duration-300 hover:scale-105">
                    View Portfolio
                  </Button>
                </Link>
                
                {/* Control buttons - Shows under the button when muted */}
                {showControls && (
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={toggleMute} 
                      className="glass-effect text-foreground hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary/60 animate-fade-in h-8 w-8 p-0"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <VolumeX size={14} />
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* View Portfolio button when unmuted - positioned at bottom-40 */}
      {!isMuted && (
        <div className="absolute bottom-40 right-8 z-10 flex flex-col items-end gap-4">
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg animate-glow transition-all duration-300 hover:scale-105">
              View Portfolio
            </Button>
          </Link>
          
          {/* Control buttons - Shows under the button when unmuted */}
          {showControls && (
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMute} 
                className="glass-effect text-foreground hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary/60 animate-fade-in h-8 w-8 p-0"
                style={{ pointerEvents: 'auto' }}
              >
                <Volume2 size={14} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={togglePlayPause} 
                className="glass-effect text-foreground hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary/60 animate-fade-in h-8 w-8 p-0"
                style={{ pointerEvents: 'auto' }}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Scroll Indicator - only show when muted */}
      {isMuted && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
