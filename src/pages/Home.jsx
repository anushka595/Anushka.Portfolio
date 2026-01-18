// Professional Home Page with Enhanced Typography and Animations
import { Button } from "@/components/lightswind/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroVideo from "@/assets/hero.mp4";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      
      {/* ANIMATED GRID PATTERN */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 flex min-h-screen items-center">
        <div className="w-full max-w-5xl py-20">
          
          {/* BADGE */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-300">Available for opportunities</span>
          </div>

          {/* GREETING */}
          <p className={`text-lg md:text-xl font-medium text-blue-400 mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Hello, I'm
          </p>

          {/* NAME */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
           
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
             Anushka Singh
            </span>
          </h1>

          {/* TITLE */}
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Backend Engineer & System Architect
          </h2>

          {/* DESCRIPTION */}
          <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70 max-w-3xl mb-12 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Crafting scalable backend systems, robust APIs, and high-performance applications with a focus on clean architecture, reliability, and developer experience.
          </p>

          {/* CTA BUTTONS */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <NavLink to="/projects">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-semibold gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
            
            <NavLink to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold gap-3 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                Get in Touch
                <Mail size={20} />
              </Button>
            </NavLink>
          </div>

          {/* SOCIAL LINKS */}
          <div className={`flex items-center gap-6 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <a
              href="https://github.com/anushka595"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anushka-singh-3a3702234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anushkasingh12312@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* DECORATIVE BLUR ELEMENTS */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  );
}