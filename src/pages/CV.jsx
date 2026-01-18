// Professional CV Page with Download and Preview
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/lightswind/card";
import { Button } from "@/components/lightswind/button";
import { Download, FileText, Eye, ExternalLink, Printer } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function CV() {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    // Analytics or tracking can be added here
    console.log("CV downloaded");
  };

  const handlePrint = () => {
    window.print();
  };

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <FileText size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Resume</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Curriculum <span className="text-blue-400">Vitae</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, professional experience, 
            education, and notable projects in software development and backend engineering.
          </p>
        </motion.div>

        {/* QUICK ACTIONS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="elevated" className="overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <FileText className="text-blue-400" size={24} />
                  </div>
                  Professional Resume
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Download my complete CV highlighting technical skills, work experience, 
                  academic background, and project achievements. Last updated January 2026.
                </p>
                
                {/* METADATA */}
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Updated Recently</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={14} />
                    <span>PDF Format</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download size={14} />
                    <span>1.2 MB</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                <a href="/cv/cv.pdf" download onClick={handleDownload}>
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto gap-2">
                    <Download size={18} />
                    Download CV
                  </Button>
                </a>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto gap-2"
                  onClick={handlePrint}
                >
                  <Printer size={18} />
                  Print
                </Button>

                <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full sm:w-auto gap-2"
                  >
                    <ExternalLink size={18} />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CV PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="text-blue-400" size={20} />
                  <CardTitle>Document Preview</CardTitle>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                  <span className="text-xs text-white/60">{isLoading ? 'Loading...' : 'Ready'}</span>
                </div>
              </div>
              <CardDescription>
                Interactive preview of the CV document. You can scroll through the pages below.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="relative w-full bg-white/5 rounded-lg border border-white/10 overflow-hidden" style={{ paddingBottom: '129.4%' }}>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
                    <div className="text-center">
                      <div className="inline-block w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-white/60">Loading preview...</p>
                    </div>
                  </div>
                )}
                
                <iframe
                  src="/cv/cv.pdf"
                  title="Anushka Singh - Curriculum Vitae Preview"
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setIsLoading(false)}
                  style={{ border: 'none' }}
                />
              </div>

              {/* FALLBACK MESSAGE */}
              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-white/70 flex items-start gap-2">
                  <FileText size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    If the preview doesn't load properly, you can{" "}
                    <a 
                      href="/cv/cv.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                    >
                      open the PDF directly
                    </a>
                    {" "}or download it using the button above.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ADDITIONAL INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card variant="flat" className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FileText size={18} className="text-blue-400" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Technical skills and programming languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Professional experience and internships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Academic qualifications and certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Notable projects and achievements</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Download size={18} className="text-blue-400" />
                  Download Options
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>PDF format optimized for ATS systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Print-ready with proper formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Accessible on all devices and platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">▪</span>
                    <span>Regularly updated with latest information</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}

export default CV;