// Aim: App root with global theme background

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";

import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";
import CV from "@/pages/CV";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="/cv" element={<PageTransition><CV /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL COLOR LAYER */}
      <div className="min-h-screen bg-transparent">
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
