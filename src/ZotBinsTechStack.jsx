import React, { useState } from "react";

const ZotBinsTechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      name: "React Native",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      hoverBg: "hover:bg-blue-400/20",
      icon: "⚛️",
      description: "Cross-platform mobile development",
    },
    {
      name: "Firebase",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30",
      hoverBg: "hover:bg-orange-400/20",
      icon: "🔥",
      description: "Backend & cloud services",
    },
    {
      name: "LlaVa",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
      hoverBg: "hover:bg-yellow-400/20",
      icon: "🧠",
      description: "AI waste recognition",
    },
    {
      name: "TypeScript",
      color: "text-blue-300",
      bgColor: "bg-blue-300/10",
      borderColor: "border-blue-300/30",
      hoverBg: "hover:bg-blue-300/20",
      icon: "📘",
      description: "Type-safe development",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden mt-20 w-11/12">
        <section className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Powered by cutting-edge tools and frameworks for optimal
              performance and scalability
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-lg md:text-xl font-medium">
            {techStack.slice(0, 2).map((tech, index) => (
              <React.Fragment key={tech.name}>
                <div className="flex items-center">
                  <div
                    className={`
                    relative px-6 py-3 rounded-xl border transition-all duration-300 cursor-pointer
                    ${tech.bgColor} ${tech.borderColor} ${tech.hoverBg}
                    ${hoveredTech === tech.name ? "scale-105 shadow-lg" : ""}
                  `}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span
                      className={`${tech.color} font-semibold flex items-center gap-2`}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      {tech.name}
                    </span>

                    {hoveredTech === tech.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10">
                        {tech.description}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`
                group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                ${tech.bgColor} ${tech.borderColor} ${tech.hoverBg}
                hover:scale-105 hover:shadow-xl
              `}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                <h3 className={`${tech.color} font-bold text-lg mb-2`}>
                  {tech.name}
                </h3>

                <p className="text-white/60 text-sm">{tech.description}</p>

                <div
                  className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br ${tech.bgColor} blur-xl -z-10
              `}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  99.9%
                </div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  &lt;2s
                </div>
                <div className="text-white/60 text-sm">Load Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  95%
                </div>
                <div className="text-white/60 text-sm">AI Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  24/7
                </div>
                <div className="text-white/60 text-sm">Available</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZotBinsTechStack;
