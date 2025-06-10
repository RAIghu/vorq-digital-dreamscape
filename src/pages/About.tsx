import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <div className="min-h-screen cinematic-gradient">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-agency font-bold text-5xl md:text-6xl mb-6 text-white uppercase tracking-wider">
            About VORIQ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of storytelling through artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Founder Section */}
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img alt="Raghu Naik" className="w-full h-full object-cover rounded-full border-2 border-primary" src="/lovable-uploads/f8f7f909-0409-4af0-aa43-96084aff95e7.png" />
                </div>
                <h2 className="font-orbitron font-bold text-3xl mb-2 text-white">Raghu Naik</h2>
                <p className="text-primary text-lg">Founder &amp; CEO</p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>Raghu Naik is a visionary filmmaker and AI storyteller who founded VORIQ to redefine how stories are told through artificial intelligence—without sacrificing creative depth or artistic integrity. With a unique blend of creative instinct and technical expertise, he is at the forefront of a new wave of AI-augmented cinema.</p>
                <p>With over 13 years in the film industry, Raghu has collaborated with some of India’s leading production houses including Roy Kapur Films, RSVP, Jio Studios, Times Group, and Rakesh Omprakash Mehra Pictures. His ability to bridge technology and narrative has helped bring complex ideas to screen with bold visual imagination.</p>
                <p>Raghu’s work has been featured at major international festivals such as Cannes (France), Lift-Off Global Network (UK), Project Odyssey (USA), DUST (USA), Turkiye AI Film Festival, and leading Indian festivals like MAMI Mumbai, Kerala, Bengaluru, and Jaipur. Through VORIQ, he continues to push the boundaries of storytelling and gain global recognition for innovation in AI-driven filmmaking.</p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <h2 className="font-orbitron font-bold text-3xl mb-6 text-white">Our Mission</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                  <p className="text-gray-300">
                    We push the boundaries of what's possible in filmmaking by seamlessly integrating cutting-edge AI technology with traditional cinematic artistry.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Storytelling</h3>
                  <p className="text-gray-300">
                    At our core, we believe great stories transcend technology. AI is our tool to tell more compelling, more human stories.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Excellence</h3>
                  <p className="text-gray-300">
                    Every project we undertake is crafted with meticulous attention to detail and an unwavering commitment to artistic excellence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Awards Section */}
        <Card className="glass-effect border-primary/20">
          <CardContent className="p-8">
            <h2 className="font-orbitron font-bold text-3xl mb-8 text-center text-white">Festival Awards & Recognition</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-black/20 rounded-lg border border-primary/10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">2024</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Finalist at Project Odyssey, Los Angeles, USA</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/20 rounded-lg border border-primary/10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">2024</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Special mention at Project Odyssey Season 2, Los Angeles, USA</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/20 rounded-lg border border-primary/10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">2025</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Nominee at Turkey International AI Film Festival</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/20 rounded-lg border border-primary/10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">2025</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Official Selection - DUST SCI FI Channel</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default About;