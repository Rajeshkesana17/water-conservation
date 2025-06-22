
import React from 'react';
import { AlertCircle, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Water Safety Matters
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the critical importance of clean water access in our communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Problem</h3>
              <p className="text-gray-600">
                Many communities lack access to safe drinking water, leading to health issues and 
                limiting economic opportunities. Contamination and poor infrastructure affect millions.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-100">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To create sustainable water safety solutions through community engagement, 
                volunteer training, and comprehensive data collection initiatives.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 border border-green-100">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Solution</h3>
              <p className="text-gray-600">
                Through systematic community involvement, education, and data-driven approaches, 
                we're building a network of informed citizens working toward water security.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Objectives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Primary Goals</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Train community volunteers in water safety assessment</li>
                  <li>• Build comprehensive database of local water sources</li>
                  <li>• Raise awareness about water conservation practices</li>
                  <li>• Establish sustainable monitoring systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📈 Expected Impact</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved community health outcomes</li>
                  <li>• Enhanced local water management capacity</li>
                  <li>• Increased environmental awareness</li>
                  <li>• Strengthened community resilience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
