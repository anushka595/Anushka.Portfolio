// Professional Navbar with Refined Interactions and Mobile Support
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/lightswind/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  "Home",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "CV",
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg shadow-black/5"
    >
      <nav className="mx-auto max-w-7xl h-20 px-6 md:px-8 flex items-center justify-between">
        {/* BRAND */}
        <NavLink to="/">
          <motion.div
            className="text-xl md:text-2xl font-semibold tracking-tight text-white cursor-pointer"
            style={{ fontFamily: '"Inter", "SF Pro Display", -apple-system, system-ui, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Anushka Singh
            <span className="text-blue-400">.</span>
          </motion.div>
        </NavLink>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((name) => (
            <NavLink
              key={name}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              className="relative group"
            >
              {({ isActive }) => (
                <motion.div
                  className={`
                    relative px-5 py-2.5 rounded-lg text-base font-semibold tracking-tight transition-all duration-300
                    ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    }
                  `}
                  style={{ fontFamily: '"Poppins", "Montserrat", "Outfit", sans-serif', letterSpacing: '-0.01em' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {name}
                  
                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 border-2 border-blue-400/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}

          {/* CONTACT BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="ml-3"
          >
            <NavLink to="/contact">
              <Button
                size="lg"
                className="px-6 py-2.5 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 rounded-lg"
                style={{ fontFamily: '"Poppins", "Montserrat", "Outfit", sans-serif' }}
              >
                Contact
              </Button>
            </NavLink>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
                          : "text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-4"
              >
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                  >
                    Contact Me
                  </Button>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}