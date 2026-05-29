import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaYoutube, FaTelegram } from "react-icons/fa";
import Button from "../Components/Button";
import AnimateBorderButton from "../Components/AnimateBorderButton";

const skills = [
  "React",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Javascript",
  "Jquery",
  "MySQL",
  "PosgrestSQL",
  "PHP",
  "Laravel",
  "Adobe XD",
  "Figma",
  "GitHub",
];
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full opacity-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green dot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}></div>
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left colum - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Front-End Developer - React JS
              </span>
            </div>

            {/* Headline */}
            <div className="">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">Digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Meta Sok - A Front-End Developer in React, I Buil
                scalable, performent Web applications that users love.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Meta_Sok_CV.pdf" download="Meta_Sok_CV.pdf">
                <AnimateBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimateBorderButton>
              </a>
            </div>

            {/* social link */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                { icon: FaGithub, href: "https://github.com/Meta-12" },
                {
                  icon: FaYoutube,
                  href: "https://youtube.com/@meta-coding-u2c?si=BLzecLOA1LiSU47V",
                },
                { icon: FaTelegram, href: "https://t.me/Meta_Sok_Skun" },
              ].map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full glass
                     hover:bg-primary/10 hover:text-primary
                      transition-all duration-300">
                    {<social.icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* right colum - profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="metaProfile.png"
                  alt="Meta Sok"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stars badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Section*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32 
            bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32 
            bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span
                    className="text-xl font-semibold text-muted-foreground/50
                   hover:text-muted-foreground transition-colors cursor-pointer">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 
      -translate-x-1/2 animate-fade-in animation-delay-800 z-10 font-semibold">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
