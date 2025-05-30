import React from "react";

const ZotBinsFeatures = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Recognition",
      description:
        "Advanced machine learning algorithms instantly identify and classify waste items with 95%+ accuracy",
    },
    {
      icon: "🎯",
      title: "Smart Sorting",
      description:
        "Get precise disposal instructions for recyclables, compost, and general waste specific to UCI campus",
    },
    {
      icon: "🏆",
      title: "Gamified Experience",
      description:
        "Earn points, unlock achievements, and compete with friends while building sustainable habits",
    },
    {
      icon: "📊",
      title: "Impact Tracking",
      description:
        "Monitor your environmental impact with detailed analytics and sustainability metrics",
    },
    {
      icon: "🌍",
      title: "Campus Integration",
      description:
        "Seamlessly integrated with UCI's waste management system and sustainability initiatives",
    },
    {
      icon: "📱",
      title: "iOS Compatible",
      description: "Built with native iOS integration and performance",
    },
  ];

  return (
    <div className="w-full p-8 mt-8">
      <div className="max-w-6xl mx-auto">
        {/* glassmorphism effect */}
        <div className="backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Revolutionizing waste management with intelligent classification
              <br />
              and gamified sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transition-all duration-300 hover:bg-black/15 hover:transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>

                <h3 className="text-white text-xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-white/85 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZotBinsFeatures;
