// Professional Education Page with Academic Timeline
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/lightswind/card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";
/* DATA IMPORT */
import { education } from "@/data/education";

function Education() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
            <GraduationCap size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Academic Background</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-blue-400">Education</span> & Qualifications
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A solid foundation in computer science principles, algorithms, and software engineering, 
            built through rigorous academic training and continuous learning.
          </p>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-8"
        >
          {/* TIMELINE LINE */}
          <div className="absolute left-0 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent hidden md:block" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.institution}
              variants={itemVariants}
              className="relative"
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-lg shadow-blue-500/50 z-10 hidden md:block" />

              {/* CONTENT CARD */}
              <div className="md:ml-20">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="elevated" className="group">
                    <CardHeader>
                      {/* DEGREE */}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                          <BookOpen className="text-blue-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base mt-1 flex items-center gap-2">
                            <Award size={16} className="text-blue-400" />
                            <span className="font-medium text-blue-300">{edu.institution}</span>
                          </CardDescription>
                        </div>
                      </div>

                      {/* METADATA */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5 text-white/60">
                          <Calendar size={16} className="text-white/40" />
                          <span>{edu.duration}</span>
                        </div>
                        {edu.grade && (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                            <Star size={16} className="text-blue-400" />
                            <span className="text-blue-300 font-medium">{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* DETAILS */}
                      <div className="space-y-2.5">
                        {edu.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 border border-blue-400/30 group-hover/item:scale-150 group-hover/item:bg-blue-400 transition-all flex-shrink-0" />
                            <p className="text-white/70 leading-relaxed group-hover/item:text-white/90 transition-colors">
                              {detail}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* COURSEWORK/SPECIALIZATIONS (if provided) */}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-white/80 mb-3">Key Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ACHIEVEMENTS (if provided) */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                            <Award size={16} className="text-blue-400" />
                            Achievements:
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-1">★</span>
                                <span className="text-sm text-white/70">{achievement}</span>
                              </div>
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

        {/* EMPTY STATE */}
        {education.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
              <GraduationCap size={32} className="text-white/40" />
            </div>
            <p className="text-white/60 text-lg">No education entries found.</p>
          </motion.div>
        )}

        {/* CERTIFICATIONS/LEARNING SECTION */}
        {education.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card variant="bordered" className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Continuous Learning
                </h3>
                <p className="text-white/60">
                  Beyond formal education, I actively pursue knowledge through online courses, 
                  certifications, and hands-on projects to stay current with industry trends.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">{item.count}</div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}

export default Education;