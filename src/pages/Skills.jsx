// Professional Skills Page with Dark Theme and Enhanced Design
import { Card, CardHeader, CardTitle, CardContent } from "@/components/lightswind/card";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Brain, Sparkles } from "lucide-react";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      color: "blue",
      items: ["C++", "C", "Java", "JavaScript"],
    },
    {
      category: "Web Technologies",
      icon: Globe,
      color: "cyan",
      items: ["HTML5", "CSS3", "Bootstrap"],
    },
    {
      category: "Databases",
      icon: Database,
      color: "purple",
      items: ["Oracle", "MySQL"],
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      color: "green",
      items: ["VS Code", "Apache NetBeans", "Google Colab"],
    },
    {
      category: "Core Concepts",
      icon: Brain,
      color: "pink",
      items: ["OOP", "Data Structures", "Algorithms", "Problem Solving"],
    },
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      hover: "group-hover:bg-blue-500/20",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      hover: "group-hover:bg-cyan-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      hover: "group-hover:bg-purple-500/20",
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      text: "text-green-400",
      hover: "group-hover:bg-green-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      text: "text-pink-400",
      hover: "group-hover:bg-pink-500/20",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
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
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Technical Expertise</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Core <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming languages, web technologies, 
            databases, and fundamental computer science concepts.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => {
            const colors = colorMap[skill.color];
            const IconComponent = skill.icon;

            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card variant="elevated" className="h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`p-3 rounded-lg ${colors.bg} ${colors.border} border ${colors.hover} transition-colors`}
                      >
                        <IconComponent className={colors.text} size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{skill.category}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2.5">
                      {skill.items.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-3 group/item"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.border} border group-hover/item:scale-150 transition-transform`}
                          />
                          <span className="text-sm text-white/70 group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Programming Languages", value: "4+" },
            { label: "Web Technologies", value: "3+" },
            { label: "Database Systems", value: "2+" },
            { label: "Tools & IDEs", value: "3+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ADDITIONAL INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card variant="bordered" className="max-w-3xl mx-auto p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Always Learning, Always Growing
            </h3>
            <p className="text-white/60 mb-6">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the forefront of software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Node.js", "System Design", "Cloud Computing"].map((learning) => (
                <span
                  key={learning}
                  className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium border border-blue-500/20"
                >
                  {learning}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}

export default Skills;