"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Highlights", id: "highlights" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Custom hooks
  const scrolled = useScroll(40);
  const activeSection = useActiveSection(
    navLinks.map((link) => link.id),
    "-30% 0px -50% 0px"
  );

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap for accessibility in mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const container = menuRef.current;
      if (!container) return;

      const focusables = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: wrap from first element to last element
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab: wrap from last element to first element
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleFocusTrap);

    // Focus first link on open
    const firstFocusable = menuRef.current?.querySelector<HTMLElement>("a, button");
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 50);
    }

    return () => {
      window.removeEventListener("keydown", handleFocusTrap);
    };
  }, [isOpen]);

  // Mobile stagger variants
  const mobileContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: 25 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ease-in-out px-6 md:px-12 w-full",
          scrolled
            ? "h-16 bg-slate-950/65 backdrop-blur-xl border-b border-white/[0.04] shadow-glass"
            : "h-20 bg-transparent border-b border-transparent"
        )}
      >
        {/* Shifting Gradient border at the bottom when scrolled */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: scrolled ? 1 : 0,
            backgroundPosition: scrolled ? ["0% center", "200% center"] : "0% center"
          }}
          transition={{
            opacity: { duration: 0.4 },
            backgroundPosition: {
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }
          }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-linear-to-r from-neon-blue/80 via-neon-purple/90 to-neon-pink/80 pointer-events-none"
          style={{
            backgroundSize: "200% auto",
          }}
        />

        {/* Logo Section */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus-visible:ring-neon-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1 outline-none select-none"
          aria-label="Portfolio Home"
        >
          <div className="relative h-7 w-7 rounded-md bg-linear-to-tr from-neon-blue to-neon-purple flex items-center justify-center text-background font-bold text-sm shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-300">
            B
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors duration-300">
            Shalem Raju
          </span>
        </a>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center gap-1 relative" aria-label="Desktop Navigation">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link, index) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out select-none block rounded-md outline-none",
                    activeSection === link.id ? "text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  {/* Text Layer */}
                  <span className="relative z-10">{link.name}</span>

                  {/* Active Indicator Underline */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSectionIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-neon-blue rounded-full shadow-[0_0_8px_#00f2fe]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Sliding Hover Under-pill */}
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="hoverIndicator"
                      className="absolute inset-0 bg-white/[0.04] border border-white/[0.05] rounded-md z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side items: Actions & Socials */}
        <div className="hidden md:flex items-center gap-5">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <FiGithub size={20} className="hover:text-neon-blue transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <FiLinkedin size={20} className="hover:text-neon-purple transition-colors duration-300" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/[0.08]" />

          {/* Resume Action */}
          <Button variant="glass" size="sm" href="/resume.pdf" target="_blank" className="relative group overflow-hidden">
            <span className="absolute inset-0 bg-linear-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            Resume
          </Button>
        </div>

        {/* Hamburger Trigger for Mobile */}
        <button
          ref={hamburgerButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-md border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] text-slate-300 hover:text-white focus-visible:ring-neon-blue focus-visible:ring-2 outline-none transition-all duration-300 z-50 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <motion.rect
              x="3"
              y="6"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 5 : 0,
              }}
              style={{ originX: "12px", originY: "7px" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.rect
              x="3"
              y="11"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              animate={{
                opacity: isOpen ? 0 : 1,
                scaleX: isOpen ? 0 : 1,
              }}
              style={{ originX: "12px", originY: "12px" }}
              transition={{ duration: 0.15 }}
            />
            <motion.rect
              x="3"
              y="16"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -5 : 0,
              }}
              style={{ originX: "12px", originY: "17px" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </svg>
        </button>
      </header>

      {/* Full-screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-slate-950/98 backdrop-blur-2xl px-8"
          >
            {/* Background elements */}
            <div className="absolute top-[10%] left-[-10%] w-[60%] h-[40%] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[40%] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <motion.div
              variants={mobileContainerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-6 flex flex-col items-start w-full max-w-sm mx-auto"
            >
              {/* Mobile Links */}
              {navLinks.map((link) => (
                <motion.div key={link.id} variants={mobileItemVariants} className="w-full">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-bold tracking-tight py-2 transition-colors select-none block rounded-md outline-none focus-visible:ring-neon-blue focus-visible:ring-2",
                      activeSection === link.id
                        ? "text-neon-blue text-shadow-[0_0_10px_rgba(0,242,254,0.25)]"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              {/* Mobile Action Divider */}
              <motion.div
                variants={mobileItemVariants}
                className="pt-6 border-t border-white/[0.08] w-full mt-4 flex flex-col gap-5"
              >
                <Button
                  variant="primary"
                  className="w-full text-base font-semibold"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </Button>

                {/* Social icons */}
                <div className="flex gap-6 mt-2 items-center justify-center md:justify-start">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <FiGithub size={24} className="hover:text-neon-blue transition-colors duration-300" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <FiLinkedin size={24} className="hover:text-neon-purple transition-colors duration-300" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
