import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AnimateBorderButton from "../Components/AnimateBorderButton";

const projects = [
  {
    title: "Modern Shopping Website",
    description: `I built this clean e-commerce site to make online shopping easy. It features a "Latest Arrivals" section, a smooth checkout process, and a backend system to keep track of products and payments.`,
    image: "/projects/project2.png",
    tags: ["ReactJS", "Tailwind CSS"],
    link: "https://forever-indol.vercel.app/",
    github: "https://github.com/Meta-12/Forever.git",
  },
  {
    title: "News Website",
    description:
      "A static news hub UI developed using semantic HTML and custom CSS styling, showcasing organized sections for sports, entertainment, and multimedia content.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS"],
    link: "https://meta-12.github.io/Sabay-New/",
    github: "https://github.com/Meta-12/Sabay-New.git",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "A full online shopping platform designed for users in Cambodia. It features a wide range of categories, including electronics, vehicles, and furniture. Built with a clean interface to make browsing and shopping easy.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "Jquery"],
    link: "https://setec-final-web-html-css.vercel.app/",
    github: "https://github.com/Meta-12/Setec-final-Web-html-css.git",
  },
  {
    title: "Agency AI",
    description: `A modern and clean landing page for a digital agency. It features a bold headline, a "Trusted by" social proof section, and a professional dark/light mode toggle. Perfect for showing off high-quality web design skills.`,
    image: "/projects/project4.png",
    tags: ["ReactJS", "Tailwind"],
    link: "https://agency-ai-flax.vercel.app/#",
    github: "https://github.com/Meta-12/Agency-AI.git",
  },
  {
    title: "Dark-Mode Portfolio UI",
    description: `A responsive personal portfolio landing page. It highlights key technical skills like React, Angular, and Laravel in a professional layout that works well for a modern web resume.`,
    image: "/projects/project5.png",
    tags: ["ReactJS", "Tailwind"],
    link: "https://portfolio-react-js-mt.vercel.app/",
    github: "https://github.com/Meta-12/Portfolio-ReactJs-MT.git",
  },
  {
    title: "A Simple Digital Clock",
    description: `A simple real time digital clock`,
    image: "/projects/project6.png",
    tags: ["ReactJS", "Tailwind"],
    link: "https://digital-clock-five-xi.vercel.app/",
    github: "https://github.com/Meta-12/React-Project.git",
  },
];

const Project = () => {
  return (
    <section id="project" className="py-32 overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto mx-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animat-fade-in">
            Feature Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              Make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web application to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* images */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.titile}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="blank"
                    className="p-3 rounded-full glass hover:bg-primary text-primary-foreground transition-all border-none">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="blank"
                    className="p-3 rounded-full glass hover:bg-primary text-primary-foreground transition-all border-none">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA(Call to actions) */}
        <a href="https://github.com/Meta-12" target="blank">
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimateBorderButton>
              More in Github
              <ArrowUpRight className="w-5 h-5" />
            </AnimateBorderButton>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
