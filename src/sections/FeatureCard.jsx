import React from 'react';
import { FaSearch, FaLightbulb, FaTools, FaCheckCircle } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="text-3xl text-blue-400" />,
    title: "Understand the Problem",
    desc: "I analyze the problem deeply to identify the root causes and define clear goals.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-purple-400" />,
    title: "Explore Solutions",
    desc: "I research industry best practices and brainstorm efficient approaches to solve it.",
  },
  {
    icon: <FaTools className="text-3xl text-green-400" />,
    title: "Plan & Develop",
    desc: "I plan the structure and then write clean, scalable code with iterative improvements.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-yellow-400" />,
    title: "Test & Deliver",
    desc: "I rigorously test to ensure quality, then deliver the final product with documentation.",
  },
];

const FeatureCard = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-[#0f0f0f] text-white" id="how-i-work">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">How I Work</h2>
        <div className="inline-block bg-zinc-800 text-white-200 text-sm px-4 py-1.5 rounded-full shadow-md backdrop-blur-md">
  <span role="img" aria-label="handshake">🤝</span> That's how I deal with problems
</div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
