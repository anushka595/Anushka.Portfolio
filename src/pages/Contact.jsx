// Professional Contact Page with Dark Theme and Animations
import { Card, CardHeader, CardTitle, CardContent } from "@/components/lightswind/card";
import { Button } from "@/components/lightswind/button";
import { Mail, Linkedin, Github, Send, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "anushkasingh12312@gmail.com",
      href: "mailto:anushkasingh12312@gmail.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anushka-singh-3a3702234",
      href: "https://www.linkedin.com/in/anushka-singh-3a3702234",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/anushka595",
      href: "https://github.com/anushka595",
      color: "purple"
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Methods */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <method.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white/60 mb-1">{method.label}</p>
                      <p className="text-sm text-white break-all group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card variant="flat">
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Response Time</p>
                    <p className="text-sm text-white/60">Typically within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Location</p>
                    <p className="text-sm text-white/60">Gaya, Bihar, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="ABC"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="abc@example.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>

                {/* Privacy Note */}
                <p className="mt-6 text-xs text-center text-white/40">
                  Your information is safe and will never be shared with third parties.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* DECORATIVE ELEMENTS */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      </div>
    </section>
  );
}

export default Contact;