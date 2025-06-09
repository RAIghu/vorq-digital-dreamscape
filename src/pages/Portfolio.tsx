import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Ads', 'Shorts', 'Music Videos'];

  const portfolioItems = [
    {
      id: 1,
      title: 'APOCALYPSE',
      category: 'Shorts',
      thumbnail: 'https://img.youtube.com/vi/W4IDyirE88M/maxresdefault.jpg',
      duration: '4:01',
      videoUrl: 'https://youtu.be/W4IDyirE88M?si=VmrpqKvAtgGXqJsR'
    },
    {
      id: 2,
      title: 'Silver Stone Luxury Jewellery',
      category: 'Ads',
      thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop',
      duration: '3:45',
      videoUrl: 'https://youtu.be/XDUmXo4onWs'
    },
    {
      id: 3,
      title: 'Synthwave Odyssey',
      category: 'Music Videos',
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop',
      duration: '4:20'
    },
    {
      id: 4,
      title: 'Tech Giant Brand Film',
      category: 'Ads',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      duration: '2:15'
    },
    {
      id: 5,
      title: 'Digital Emotions',
      category: 'Shorts',
      thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=300&fit=crop',
      duration: '5:30'
    },
    {
      id: 6,
      title: 'Electronic Pulse',
      category: 'Music Videos',
      thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop',
      duration: '3:15'
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
            <div
              key={item.id}
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

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
