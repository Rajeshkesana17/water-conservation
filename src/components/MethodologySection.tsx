
import React, { useState } from 'react';
import { ChevronRight, Users, BookOpen, Database, Lightbulb } from 'lucide-react';

const MethodologySection = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      title: "Community Engagement",
      icon: <Users className="h-6 w-6" />,
      description: "Initial outreach and stakeholder mapping",
      details: [
        "Identify key community leaders and stakeholders",
        "Conduct preliminary community meetings",
        "Assess local water-related challenges and needs",
        "Build partnerships with local organizations",
        "Establish communication channels with residents"
      ]
    },
    {
      id: 2,
      title: "Volunteer Training",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Comprehensive education and skill development",
      details: [
        "Water quality testing methodology training",
        "Data collection techniques and tools",
        "Community communication and engagement skills",
        "Safety protocols for water source assessment",
        "Digital literacy for database management"
      ]
    },
    {
      id: 3,
      title: "Data Collection",
      icon: <Database className="h-6 w-6" />,
      description: "Systematic gathering of water safety information",
      details: [
        "Map all local water sources and infrastructure",
        "Conduct water quality testing at identified locations",
        "Survey community water usage patterns",
        "Document existing water treatment methods",
        "Record seasonal variations and accessibility issues"
      ]
    },
    {
      id: 4,
      title: "Awareness & Action",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Education campaigns and sustainable solutions",
      details: [
        "Develop community-specific educational materials",
        "Organize awareness workshops and demonstrations",
        "Implement water conservation initiatives",
        "Establish ongoing monitoring protocols",
        "Create action plans for identified issues"
      ]
    }
  ];

  return (
    <section id="methodology" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600">
              A systematic four-phase approach to community water conservation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Phase Selection */}
            <div className="space-y-4">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    activePhase === phase.id
                      ? 'bg-blue-50 border-blue-200 shadow-md'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      activePhase === phase.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        Phase {phase.id}: {phase.title}
                      </h3>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      activePhase === phase.id ? 'rotate-90 text-blue-600' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Phase Details */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              {phases.map((phase) => (
                activePhase === phase.id && (
                  <div key={phase.id}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
