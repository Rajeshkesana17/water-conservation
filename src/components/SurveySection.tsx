
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, BarChart } from 'lucide-react';

const SurveySection = () => {
  return (
    <section id="survey" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Community Water Survey
            </h2>
            <p className="text-xl text-gray-600">
              Help us understand your community's water needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Quick & Easy</h3>
              <p className="text-gray-600 text-sm">
                Takes only 5-10 minutes to complete with simple, clear questions
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <BarChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Data Driven</h3>
              <p className="text-gray-600 text-sm">
                Your responses help us build a comprehensive database for action
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <ExternalLink className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Anonymous</h3>
              <p className="text-gray-600 text-sm">
                Your privacy is protected - all responses are completely confidential
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Share Your Experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your input is crucial for developing effective water safety solutions in our community. 
              The survey covers water sources, quality concerns, usage patterns, and improvement suggestions.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdsi3efMCBa9Jfs5zXMk44bber3oEN12-b0sqhVsZqixkcmw/viewform', '_blank')}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Take the Survey Now
              </Button>
              
              <p className="text-sm text-gray-500">
                Survey available in English, Telugu, and Hindi
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Survey Topics Include:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Current water sources and accessibility</li>
                <li>• Water quality concerns and issues</li>
                <li>• Household water usage patterns</li>
                <li>• Existing water treatment methods</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Community water infrastructure</li>
                <li>• Seasonal water availability changes</li>
                <li>• Suggestions for improvements</li>
                <li>• Interest in volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
