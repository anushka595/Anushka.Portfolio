// Professional Projects Page with Dark Theme and Enhanced Animations
import { useRef, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/lightswind/card";
import { Button } from "@/components/lightswind/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2, Layers } from "lucide-react";
/*  DATA IMPORT */
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Extract unique categories from projects (if they have a category field)
  const categories = ["all", ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div ref={titleRef} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Code2 size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Portfolio</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A collection of academic and technical projects demonstrating real-world problem-solving, 
            scalable architecture, and modern development practices.
          </p>

          {/* FILTER BUTTONS (if categories exist) */}
          {categories.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeFilter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(cat)}
                  className="capitalize"
                >
                  {cat}
                </Button>
              ))}
            </motion.div>
          )}
        </div>

        {/* PROJECTS GRID */}
        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card variant="elevated" className="h-full flex flex-col group">
                {/* PROJECT HEADER */}
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                      <Layers className="text-blue-400" size={24} />
                    </div>
                    
                    {/* ACTION BUTTONS */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <CardTitle className="group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  {project.subtitle && (
                    <CardDescription>{project.subtitle}</CardDescription>
                  )}
                </CardHeader>

                {/* PROJECT CONTENT */}
                <CardContent className="flex-1 space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* ACHIEVEMENTS/FEATURES */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white/80">Key Achievements:</h4>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="text-blue-400 mt-0.5">▪</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                {/* TECH STACK */}
                <CardFooter className="flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* VIEW MORE BUTTON */}
                  {(project.link || project.github) && (
                    <a 
                      href={project.link || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
              <Code2 size={32} className="text-white/40" />
            </div>
            <p className="text-white/60 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card variant="bordered" className="max-w-3xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Interested in collaborating?
            </h3>
            <p className="text-white/60 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button variant="gradient" size="lg">
              Let's Work Together
              <ArrowRight size={20} />
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}

export default Projects;