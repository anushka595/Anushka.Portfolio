// Professional Experience Page with Timeline Design
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/lightswind/card";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
/* DATA IMPORT */
import { experience } from "@/data/experience";

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Briefcase size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Career Journey</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A track record of building impactful solutions, driving results, and
            continuously evolving through diverse technical challenges.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-8"
        >
          {/* TIMELINE LINE */}
          <div className="absolute left-0 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent hidden md:block" />

          {experience.map((exp) => (
            <motion.div
              key={exp.role + exp.organization}
              variants={itemVariants}
              className="relative"
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-lg shadow-blue-500/50 z-10 hidden md:block" />

              {/* CONTENT CARD */}
              <div className="md:ml-20">
                <motion.div whileHover={{ x: 8, scale: 1.01 }} transition={{ duration: 0.3 }}>
                  <Card variant="elevated" className="group">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-base mt-1 flex items-center gap-2">
                            <Award size={16} className="text-blue-400" />
                            <span className="font-medium text-blue-300">
                              {exp.organization}
                            </span>
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-white/40" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-white/40" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 border border-blue-400/30 group-hover/item:scale-150 group-hover/item:bg-blue-400 transition-all flex-shrink-0" />
                            <p className="text-white/70 leading-relaxed group-hover/item:text-white/90 transition-colors">
                              {item}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA SECTION */}
        {experience.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card variant="bordered" className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Want to know more about my journey?
              </h3>
              <p className="text-white/60 mb-6">
                Check out my detailed CV or get in touch to discuss how my experience
                can contribute to your team's success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cv" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    View Full CV
                  </motion.button>
                </Link>

                <Link to="/contact" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-lg bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div
        className="fixed bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}

export default Experience;
