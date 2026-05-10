const skills = [
  {
    period: "2025",
    courses: "Back-End Development",
    school: "ETEC CENTER",
    description:
      "Developed a full-featured Car Rental platform using PHP and the Laravel framework. Engineered secure RESTful APIs and implemented end-to-end services, including booking logic, database management, and user authentication",
    technologies: ["PHP", "LARAVEL", "MySQL", "PostgreSQL", "Postman"],
    current: true,
  },
  {
    period: "2025",
    courses: "Frontend Developement",
    school: "ETEC CENTER",
    description:
      "completed an intensive Front-End Development course focused on building modern, responsive user interfaces. Mastered ReactJS and Tailwind CSS to create high-performance web applications, including a custom e-commerce platform.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Tailwind CSS",
      "ReactJS",
    ],
    current: false,
  },
  {
    period: "2024 — 2025",
    courses: "C++ and Basic Networking",
    school: "ETEC CENCTER",
    description:
      "Mastered the fundamentals of software and systems. Specialized in C++ for complex problem-solving and Networking to understand the architecture of the modern web.",
    technologies: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Computer Fundamentals",
    ],
    current: false,
  },
];

const Skill = () => {
  return (
    <section id="skill" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Courses{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              Completion.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            React JS,Tailwind CSS, and backend technologies for building
            scalable applications
          </p>
        </div>

        {/* TimeLine */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          {skills.map((exp, idx) => (
            <div
              key={idx}
              className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 bg-primary w-3 h-3 -translate-x-1/2 rounded-full ring-4 ring-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                )}
              </div>

              {/* Content */}
              <div
                className={`pl-8 mt-3 md:mt-0 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 text-right" : "md:col-start-2 md:pl-16"}`}>
                <div
                  className={`glasss p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{exp.courses}</h3>
                  <p className="text-muted-foreground">{exp.school}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0 ? "md:justify-end : " : ""}`}>
                    {exp.technologies.map((tech, tectIdx) => (
                      <span
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        key={tectIdx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
