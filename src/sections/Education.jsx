import React from "react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Narula Institute of Technology",
    duration: "2022 – 2025",
    score: "Overall CGPA: 8.4",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "WBCHSE Board",
    duration: "2022",
    score: "Percentage: 84.36%",
  },
  {
    degree: "Secondary (10th)",
    institute: "WBBSE Board",
    duration: "2020",
    score: "Percentage: 76.34%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 md:px-10 bg-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-white">
        Educational Journey
      </h2>

      <div className="flex flex-col gap-12 relative pl-10 border-l-2 border-purple-700">
        {education.map((item, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Blinking dot */}
            <span className="absolute -left-[18px] top-1.5 w-3 h-3 bg-purple-500 rounded-full animate-ping"></span>
            <span className="absolute -left-[18px] top-1.5 w-3 h-3 bg-purple-500 rounded-full"></span>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white-50">
                {item.degree}
              </h3>
              <p className="text-sm text-white-200">{item.institute}</p>
              <p className="text-sm text-white-200">{item.duration}</p>
              <p className="text-sm text-white-200 font-medium">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
