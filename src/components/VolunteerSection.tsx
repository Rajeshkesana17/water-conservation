
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your preferred form handling service
    console.log('Volunteer form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      interests: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="volunteer" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become a Water Guardian
            </h2>
            <p className="text-xl text-blue-100">
              Join our mission to ensure safe water access for every community member
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Why Volunteer With Us?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Make Real Impact</h4>
                    <p className="text-blue-100 text-sm">Directly contribute to improving water safety in your community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Learn New Skills</h4>
                    <p className="text-blue-100 text-sm">Gain expertise in water testing, data collection, and community engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Build Community</h4>
                    <p className="text-blue-100 text-sm">Connect with like-minded individuals passionate about environmental conservation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Flexible Commitment</h4>
                    <p className="text-blue-100 text-sm">Choose activities and time commitments that work with your schedule</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-700 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Volunteer Opportunities</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Community outreach and education</li>
                  <li>• Water quality testing and monitoring</li>
                  <li>• Data collection and analysis</li>
                  <li>• Training workshop facilitation</li>
                  <li>• Social media and communications</li>
                  <li>• Translation services (Telugu, Hindi)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Get Involved Today</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="location"
                    placeholder="Your Location/Community"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="interests"
                    placeholder="Areas of Interest (e.g., testing, education, outreach)"
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="border-gray-300"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us why you want to volunteer and any relevant experience"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-gray-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
