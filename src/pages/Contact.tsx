import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, Youtube, Facebook } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return <div className="min-h-screen cinematic-gradient">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's discuss your vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <h2 className="font-orbitron font-bold text-2xl mb-6 text-white">Start Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="bg-black/20 border-primary/30 text-white placeholder-gray-400 focus:border-primary" placeholder="Your full name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-black/20 border-primary/30 text-white placeholder-gray-400 focus:border-primary" placeholder="your@email.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="bg-black/20 border-primary/30 text-white placeholder-gray-400 focus:border-primary" placeholder="Your company name" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} rows={6} className="bg-black/20 border-primary/30 text-white placeholder-gray-400 focus:border-primary resize-none" placeholder="Tell us about your project, timeline, and vision..." />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h2 className="font-orbitron font-bold text-2xl mb-6 text-white">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">voriqstudio@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded mr-4"></div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">Mumbai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded mr-4"></div>
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-xl mb-6 text-white">Follow Our Journey</h3>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary/20 border border-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/20 border border-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/20 border border-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-300 text-sm mt-4">
                  Stay updated with our latest projects and behind-the-scenes content
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-orbitron font-bold text-xl mb-4 text-white">Project Inquiries</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For specific project inquiries or collaborations, please include:
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Project timeline and budget range</li>
                  <li>• Target audience and distribution plans</li>
                  <li>• Creative vision and reference materials</li>
                  <li>• Technical requirements and specifications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;