import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Navigation from '@/components/Navigation';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Ads', 'Shorts', 'Music Videos'];

  const portfolioItems = [
    {
      id: 6,
      title: 'VORIQ - PROMO',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/2O-a4Hs98yw/maxresdefault.jpg',
      duration: '3:15',
      videoUrl: 'https://youtu.be/ri7OgGFYoao',
      description: 'A stunning promotional video showcasing VORIQ brand identity'
    },
    {
      id: 1,
      title: 'APOCALYPSE',
      category: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/W4IDyirE88M/maxresdefault.jpg',
      duration: '4:01',
      videoUrl: 'https://youtu.be/W4IDyirE88M?si=VmrpqKvAtgGXqJsR',
      description: 'An award-winning dystopian short film with AI-generated visuals'
    },
    {
      id: 2,
      title: 'Silver Stone Luxury Jewellery',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/XDUmXo4onWs/maxresdefault.jpg',
      duration: '3:45',
      videoUrl: 'https://youtu.be/XDUmXo4onWs',
      description: 'Elegant commercial showcasing premium luxury jewelry collection'
    },
    {
      id: 4,
      title: 'AIIRA Pet food',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/WDHfNaw_B2E/maxresdefault.jpg',
      duration: '2:15',
      videoUrl: 'https://youtu.be/WDHfNaw_B2E?si=yA5Z7dWt-A_PONF-',
      description: 'Heartwarming pet food advertisement featuring AI animation'
    },
    {
      id: 5,
      title: 'Territory',
      category: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/f-gb4rIr5j8/maxresdefault.jpg',
      duration: '5:30',
      videoUrl: 'https://youtu.be/f-gb4rIr5j8',
      description: 'Action-packed short film exploring territorial conflicts'
    },
    {
      id: 3,
      title: 'AI Animation - Brahmi',
      category: 'Music Videos',
      thumbnail: 'https://img.youtube.com/vi/1nbsp7ptqik/maxresdefault.jpg',
      duration: '4:20',
      videoUrl: 'https://youtu.be/Jn90E3pDH74',
      description: 'Innovative music video with cutting-edge AI animation techniques'
    },
    {
      id: 7,
      title: 'When You Love Your Car',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/5EdZQ_TOWE0/maxresdefault.jpg',
      duration: '1:32',
      videoUrl: 'https://www.youtube.com/watch?v=5EdZQ_TOWE0',
      description: 'Spec ad for a luxury car. Check out how car shots can be done using AI.'
    },
    {
      id: 8,
      title: 'Pizza Bela – So Cheesy',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/eHRGDflx7T4/maxresdefault.jpg',
      duration: '0:58',
      videoUrl: 'https://youtu.be/eHRGDflx7T4?si=Fh6x89jXQ8GDCwqQ',
      description: 'Ad for Pizza Bella. Watch how a bite of pizza launches a full blown Italian Opera.'
    },
    {
      id: 9,
      title: 'India\'s New Jugalbandi',
      category: 'Ads',
      thumbnail: 'https://img.youtube.com/vi/415o_mG8WIw/maxresdefault.jpg',
      duration: '0:34',
      videoUrl: 'https://youtu.be/415o_mG8WIw?si=grPyX6OL2vpkA-jw',
      description: 'AI is very useful to create pan India ads. Check this ad created for a network that wants to reach all of India.'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleItemClick = (item: typeof portfolioItems[0]) => {
    if (item.videoUrl) {
      window.open(item.videoUrl, '_blank');
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen cinematic-gradient">
        <Navigation />
        
        <div className="container mx-auto px-6 pt-24 pb-16">
          <div className="text-center mb-16">
            <h1 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-white">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our award-winning collection of AI-powered cinematic content
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-black hover:bg-primary/90'
                    : 'border-primary text-primary hover:bg-primary hover:text-black'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <div
                    className="group relative bg-card rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                        {item.id === 1 && (
                          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 text-xs">
                            Award winning film
                          </Badge>
                        )}
                      </div>
                      <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="bg-black/80 border-primary/20 text-white max-w-xs"
                >
                  <p className="text-sm">{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Portfolio;
