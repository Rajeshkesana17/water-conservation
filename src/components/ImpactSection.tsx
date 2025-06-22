
import React from 'react';
import { TrendingUp, Users, Droplets, Award } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "500+",
      label: "Community Members Engaged",
      description: "Active participants in our water safety initiatives"
    },
    {
      icon: <Droplets className="h-8 w-8 text-green-600" />,
      number: "50+",
      label: "Water Sources Assessed",
      description: "Comprehensive quality testing and documentation"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      number: "25+",
      label: "Volunteers Trained",
      description: "Certified community water safety advocates"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      number: "85%",
      label: "Improvement in Awareness",
      description: "Measured increase in water safety knowledge"
    }
  ];

  return (
    <section id="impact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Expected Outcomes & Impact
            </h2>
            <p className="text-xl text-gray-600">
              Building sustainable change through community-driven water conservation
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Long-term Impact */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Short-term Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Enhanced Awareness</h4>
                    <p className="text-gray-600 text-sm">Increased community understanding of water safety issues and conservation practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Trained Volunteers</h4>
                    <p className="text-gray-600 text-sm">Network of skilled community members capable of water quality assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Comprehensive Database</h4>
                    <p className="text-gray-600 text-sm">Complete mapping and documentation of local water resources and quality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Long-term Sustainability</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Community Ownership</h4>
                    <p className="text-gray-600 text-sm">Local stakeholders take leadership in ongoing water safety initiatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Policy Influence</h4>
                    <p className="text-gray-600 text-sm">Data-driven advocacy for improved water infrastructure and regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Replication Model</h4>
                    <p className="text-gray-600 text-sm">Scalable framework for implementation in other communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
