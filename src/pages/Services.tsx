
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [{
    title: 'Pre-production',
    description: 'AI-powered script development, storyboarding, and creative conceptualization. We use advanced language models to refine narratives and generate compelling visual concepts.',
    features: ['Script Analysis & Enhancement', 'AI Storyboard Generation', 'Concept Visualization', 'Character Development']
  }, {
    title: 'Production',
    description: 'Cutting-edge filming techniques combined with real-time AI assistance for optimal shot composition, lighting, and performance capture.',
    features: ['AI assisted motion capture', 'AI augmented virtual productions', 'AI assisted Performance capture', 'Mixing AI workflow with traditional film production', 'AI Pre-Visualisations of complex shots']
  }, {
    title: 'Post-production',
    description: 'Revolutionary AI-driven editing, color grading, and visual effects that push the boundaries of what\'s possible in post-production.',
    features: ['AI Video Editing', 'Neural Color Grading', 'Automated VFX Generation', 'Smart Audio Enhancement', 'AI audio dubbing in multiple languages', 'AI Voice Overs and Dialogues']
  }];

  const filmCategories = [
    'Ad Films',
    'Brand Videos', 
    'Short Films',
    'Music Videos',
    'Web Series',
    'Documentaries',
    'Feature Length Films'
  ];

  return <div className="min-h-screen cinematic-gradient">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-white">
            Offerings
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            End-to-end AI-powered film production services that redefine storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => <Card key={service.title} className="glass-effect border-primary/20 group hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                    <span className="text-black font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-400">{feature}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* AI Augmented Films Section */}
        <div className="mb-16">
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-white">
                  AI Augmented Films
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We create exceptional content across diverse formats using cutting-edge AI augmented processes and innovative AI tools that enhance every aspect of production.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filmCategories.map((category, index) => (
                  <div key={index} className="group">
                    <div className="bg-card/50 border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300 hover:scale-105">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      </div>
                      <h3 className="font-semibold text-lg text-white mb-2">{category}</h3>
                      <p className="text-sm text-gray-400">AI-enhanced production</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="glass-effect border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="font-orbitron font-bold text-3xl mb-6 text-white">
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how VORIQ can bring your vision to life with the power of AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">Contact Us</button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};

export default Services;
