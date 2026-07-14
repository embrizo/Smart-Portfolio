"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import Header from "@/app/components/Header";

// Brand icons for footer to maintain structural consistency
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function HobbyAppPage() {
  // Filter for projects belonging to the "Hobby & App" category
  const hobbyProjects = projects.filter(
    (p) =>
      p.category.toLowerCase().includes("hobby") ||
      p.category.toLowerCase().includes("habit")
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      {/* Background patterns */}
      <div className="cyber-grid" />
      <div className="bg-blob w-[400px] h-[400px] bg-blue-500/10 dark:bg-cyan-500/5 -top-20 -left-20" />
      <div className="bg-blob w-[350px] h-[350px] bg-indigo-500/10 dark:bg-emerald-500/5 bottom-20 right-0" />

      <div>
        {/* Navbar Header */}
        <Header />

        {/* Content Section */}
        <section className="section py-12 md:py-20">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="section-heading mb-12">
            <span className="eyebrow">Personal Development</span>
            <h2>Hobby & App</h2>
            <p>Applications, habit tracking, and personal utility tools.</p>
          </div>

          {hobbyProjects.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="projects-grid"
            >
              {hobbyProjects.map((project, idx) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={idx}
                  className="block group h-full cursor-pointer"
                >
                  <motion.article
                    variants={itemVariants}
                    className="glass-panel project-card h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent-glow hover:border-border-hover"
                  >
                    <div className="project-image-wrapper relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold text-xs bg-accent px-4 py-2 rounded-xl shadow-lg border border-accent/20">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="project-info">
                      <span className="project-category">{project.category}</span>
                      <h3 className="group-hover:text-accent transition-colors">{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="badge-list">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          ) : (
            <div className="glass-panel p-12 text-center rounded-2xl max-w-xl mx-auto border-border">
              <h3 className="text-xl font-semibold mb-2">No Projects Added Yet</h3>
              <p className="text-muted text-sm mb-6">
                Please provide the data to populate the Hobby & App showcase.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50 text-center text-sm text-muted w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} {profile.brand}. All rights reserved.</span>
          <div className="flex gap-4 text-muted">
            <a href="https://github.com/Godusopp01" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <GithubIcon size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
