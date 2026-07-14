"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", path: "/#about" },
  { label: "Projects", path: "/#projects" },
  { label: "Hobby & App", path: "/hobby-app" },
  { label: "Skills", path: "/#skills" },
  { label: "Experience", path: "/#experience" },
  { label: "Certifications", path: "/#certifications" },
  { label: "Contact", path: "/#contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Load and apply theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Track active section on scroll if we are on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ["about", "projects", "skills", "experience", "certifications", "contact"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.path.startsWith("/#")) {
      return pathname === "/" && activeSection === item.label.toLowerCase();
    }
    return pathname === item.path;
  };

  const navVariants = {
    hidden: { y: -12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="nav-shell"
    >
      <Link className="brand-mark text-foreground" href="/">
        <div className="brand-logo-box overflow-hidden">
          <Image
            src="/logo.png"
            alt="NEWZ ANG Logo"
            width={38}
            height={38}
            className="object-cover"
          />
        </div>
        <span className="text-xl font-bold tracking-tight">{profile.brand}</span>
      </Link>

      {/* Desktop Nav links */}
      <nav className="hidden md:flex items-center gap-8 nav-links" aria-label="Main navigation">
        {navItems.map((item) => {
          const active = isItemActive(item);
          return (
            <Link
              key={item.label}
              href={item.path}
              className={active ? "active" : ""}
            >
              {item.label}
              {active && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-[-22px] left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle visual theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Mobile menu trigger */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle visual theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="theme-toggle-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[72px] left-0 right-0 glass-panel border-t-0 p-6 flex flex-col gap-4 z-50 rounded-b-2xl shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-border transition-colors text-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
