
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2, Play, Pause, Upload } from 'lucide-react';

const Index = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsPaused(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    setShowControls(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
    setShowControls(false);
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.loop = true;
      if (!isPaused) {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Navigation />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              onLoadedData={handleVideoLoad}
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay that appears/disappears based on mute state */}
            {isMuted && <div className="absolute inset-0 bg-black/60"></div>}
          </>
        ) : (
          // Placeholder when no video is uploaded
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <Upload size={64} className="mx-auto mb-4 text-primary opacity-50" />
              <p className="text-gray-400 mb-4">Upload a video to get started</p>
              <label htmlFor="video-upload" className="cursor-pointer">
                <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  Choose Video File
                </Button>
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Hero text - only show when muted or no video */}
          {(isMuted || !videoSrc) && (
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
                {showControls && videoSrc && (
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
                
                {/* Upload button when no video */}
                {!videoSrc && (
                  <label htmlFor="video-upload-hero" className="cursor-pointer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                      <Upload size={16} className="mr-2" />
                      Upload Background Video
                    </Button>
                  </label>
                )}
                <input
                  id="video-upload-hero"
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* View Portfolio button when unmuted - positioned at bottom-40 */}
      {!isMuted && videoSrc && (
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

      {/* Scroll Indicator - only show when muted or no video */}
      {(isMuted || !videoSrc) && (
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
