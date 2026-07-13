"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  CodeXml,
  ExternalLink,
  CheckCircle2,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Briefcase
} from "lucide-react";

// Inline Lucide-style brand icons to prevent export missing issues in newer lucide-react versions
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
import {
  certifications,
  experience,
  profile,
  projects,
  skills,
  stats
} from "@/data/portfolio";
import Header from "@/app/components/Header";

// Capability Cards layout next to hero copy (similar to Pojai CV)
const capabilities = [
  {
    title: "Industrial IoT",
    desc: "ThingWorx modeling, Kepware bindings, MQTT & OPC UA connectivity.",
    icon: Activity,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    title: "Automation & PLC",
    desc: "Logic design for Mitsubishi, Keyence, Siemens & Yaskawa controllers.",
    icon: Cpu,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    title: "CAD/CAM Open APIs",
    desc: "C# NX Open automation toolkits to speed up engineering processes.",
    icon: CodeXml,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "AI & Agent Engineering",
    desc: "Building agentic workflows (Claude, Codex, Antigravity) and deploying autonomous AI Agents.",
    icon: Sparkles,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  }
];

export default function Home() {
  const [activeCertTab, setActiveCertTab] = useState<"All" | "PTC Field Academy" | "PTC University" | "Others">("All");

  const filteredCertifications = certifications.filter((cert) => {
    if (activeCertTab === "All") return true;
    if (activeCertTab === "PTC Field Academy") return cert.issuer === "PTC Field Academy";
    if (activeCertTab === "PTC University") return cert.issuer === "PTC University";
    return cert.issuer !== "PTC Field Academy" && cert.issuer !== "PTC University";
  });

  // Telemetry simulation states for industrial feel
  const [telemetry, setTelemetry] = useState({
    oee: 96.8,
    mqttCount: 15420,
    sysState: "RUNNING",
    nxStatus: "IDLE"
  });

  // Simulate real-time data fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const nextOee = Number((prev.oee + (Math.random() * 0.4 - 0.2)).toFixed(1));
        const newOee = nextOee > 99 ? 99 : nextOee < 94 ? 94 : nextOee;
        
        return {
          oee: newOee,
          mqttCount: prev.mqttCount + Math.floor(Math.random() * 4) + 1,
          sysState: Math.random() > 0.98 ? "MAINTENANCE" : "RUNNING",
          nxStatus: Math.random() > 0.85 ? (prev.nxStatus === "IDLE" ? "COMPILING" : "IDLE") : prev.nxStatus
        };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion animation definitions
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

  const navVariants = {
    hidden: { y: -12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <main className="relative min-h-screen">
      {/* Background patterns */}
      <div className="cyber-grid" />
      <div className="bg-blob w-[400px] h-[400px] bg-blue-500/10 dark:bg-cyan-500/5 -top-20 -left-20" />
      <div className="bg-blob w-[350px] h-[350px] bg-indigo-500/10 dark:bg-emerald-500/5 bottom-20 right-0" />

      {/* Navbar Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero" id="top">
        {/* Left Headline copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-copy"
        >
          <span className="eyebrow">Industry 4.0 / MES Integration</span>
          <h1 className="text-foreground">
            Hi, I'm <br />
            <span className="text-gradient font-extrabold">{profile.brand}</span>
          </h1>
          <h2 className="text-xl text-muted font-medium mb-6">{profile.title}</h2>
          <p className="hero-summary">{profile.summary}</p>
          <div className="flex flex-wrap gap-4">
            <a className="button primary" href="#projects">
              View Work
            </a>
            <a className="button secondary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Capability Cards & Live Telemetry Panel (Pojai CV style) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Live Telemetry Panel */}
          <div className="glass-panel command-panel">
            <div className="panel-header">
              <span>Telemetry Hub</span>
              <div className="status-indicator">
                <span className="status-dot" />
                <span>{telemetry.sysState}</span>
              </div>
            </div>
            
            <div className="metric-grid">
              <div className="metric-box">
                <small>Robot OEE Rate</small>
                <strong>{telemetry.oee}%</strong>
              </div>
              <div className="metric-box">
                <small>Active MQTT Tags</small>
                <strong className="tabular-nums">{telemetry.mqttCount.toLocaleString()}</strong>
              </div>
            </div>

            <div className="visual-graph flex items-end justify-between h-[64px] gap-[2px]">
              {[32, 45, 54, 38, 48, 62, 58, 44, 52, 68, 74, 56, 48, 59, 64, 42, 38, 50, 62, 70, 78, 64, 52, 60, 72].map((val, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-accent rounded-t-[2px] w-full"
                  initial={{ height: 0 }}
                  animate={{ 
                    height: `${(val / 80) * 100}%`,
                    backgroundColor: telemetry.sysState === "RUNNING" ? "var(--accent)" : "var(--border)"
                  }}
                  transition={{ duration: 0.5, delay: idx * 0.02 }}
                />
              ))}
            </div>
          </div>

          {/* Core Capabilities Layout */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col items-start gap-3 cursor-default"
                >
                  <div className={`p-3 rounded-xl ${cap.bgColor} ${cap.color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{cap.title}</h4>
                    <p className="text-[0.78rem] text-muted leading-relaxed mt-1">{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Stats Band */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="stats-band"
      >
        {stats.map((item, idx) => (
          <div key={idx} className="stat-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.section>

      {/* About Section */}
      <section className="section" id="about">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="two-column"
        >
          <motion.div variants={itemVariants}>
            <span className="eyebrow">About Me</span>
            <h2>Connecting raw machine signals with operational logic.</h2>
          </motion.div>
          <motion.div variants={itemVariants} className="biography">
            <p>
              I am an experienced **Smart Factory, IoT & AI Engineer** based in Bangkok, specializing in bridging the gap between shop-floor operational technology (OT), enterprise cloud infrastructure (IT), and cognitive artificial intelligence (AI).
            </p>
            <p>
              My expertise covers the entire lifecycle of industrial IoT: conducting detailed shop-floor surveys, engineering physical wiring and device mountings, configuring local gateways (WISE, ADAM), and modeling complex datasets in **ThingWorx** and **Kepware**.
            </p>
            <p>
              I focus on delivering automation workflows that save engineering time, including writing C# custom programs using the **Siemens NX Open API** to compile CAD features, building custom **AI Agents** (leveraging **Claude**, **Codex**, and **Antigravity** frameworks, with autonomous **AI Agents** coming soon), and integrating local AI models (Ollama) to accelerate selection processes.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Selected Projects Section */}
      <section className="section" id="projects">
        <div className="section-heading">
          <span className="eyebrow">Selected Work</span>
          <h2>Project Showcase</h2>
          <p>Practical deployment projects connecting controllers, databases, and dashboards.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="projects-grid"
        >
          {projects.map((project, idx) => (
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
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>Technical Frameworks</h2>
          <p>Proven toolkits for PLC programming, database storage, CAD, and data streams.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="skills-grid"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-panel skill-group"
            >
              <h3>{skillGroup.group}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="badge border-accent/20 text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="section-heading">
          <span className="eyebrow">Journey</span>
          <h2>Professional Timeline</h2>
        </div>

        <div className="timeline max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="timeline-item"
            >
              <div className="timeline-node" />
              <div className="glass-panel timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <div className="timeline-company flex items-center gap-2 mt-1">
                  <Briefcase size={15} />
                  <span>{exp.company}</span>
                </div>
                <ul className="mt-4">
                  {exp.points.map((point, pointIdx) => (
                    <li key={pointIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section" id="certifications">
        <div className="section-heading">
          <span className="eyebrow">Credentials</span>
          <h2>Training & Certifications</h2>
          <p>Official certifications and courses proving technical capabilities and industry expertise.</p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto">
          {(["All", "PTC Field Academy", "PTC University", "Others"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCertTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeCertTab === tab
                  ? "bg-accent border-accent text-white shadow-md shadow-accent/25"
                  : "bg-card/50 border-border text-muted hover:text-foreground hover:bg-card"
              }`}
            >
              {tab === "Others" ? "AI & Others" : tab} ({
                tab === "All"
                  ? certifications.length
                  : tab === "PTC Field Academy"
                  ? certifications.filter(c => c.issuer === "PTC Field Academy").length
                  : tab === "PTC University"
                  ? certifications.filter(c => c.issuer === "PTC University").length
                  : certifications.filter(c => c.issuer !== "PTC Field Academy" && c.issuer !== "PTC University").length
              })
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertifications.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between gap-4 cursor-default"
            >
              <div className="flex gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit">
                  <Award size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-foreground text-sm leading-tight break-words">{cert.name}</h4>
                  <p className="text-[0.75rem] text-muted mt-1 font-medium">{cert.issuer}</p>
                  <p className="text-[0.75rem] text-muted/80 mt-0.5">Recipient: <span className="font-medium text-foreground/80">{cert.recipient}</span></p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border/40 pt-3 mt-auto">
                <span className="text-[0.72rem] text-muted/60">{cert.date !== "N/A" ? `Completed: ${cert.date}` : ""}</span>
                {cert.file ? (
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    View PDF
                    <ExternalLink size={12} />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section pb-24" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel contact-section bg-gradient-to-br from-card to-border/30"
        >
          <div className="contact-info">
            <span className="eyebrow">Collaboration</span>
            <h2 className="text-foreground">Ready to optimize your production lines?</h2>
            <p>
              I am available for industrial connectivity consulting, ThingWorx dashboards development, custom Kepware integrations, Siemens NX API automation, and technical training.
            </p>
            <div className="flex gap-4">
              <a href={`mailto:${profile.email}`} className="button primary">
                <Mail size={18} />
                Send Email
              </a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="button secondary">
                <Phone size={18} />
                Call Directly
              </a>
            </div>
          </div>

          <div className="contact-methods">
            <a 
              href={`mailto:${profile.email}`}
              className="glass-panel contact-card hover:bg-border/30"
            >
              <div className="contact-card-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-info">
                <h4>Email Address</h4>
                <p>{profile.email}</p>
              </div>
            </a>

            <a 
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
              className="glass-panel contact-card hover:bg-border/30"
            >
              <div className="contact-card-icon">
                <Phone size={20} />
              </div>
              <div className="contact-card-info">
                <h4>Phone Number</h4>
                <p>{profile.phone}</p>
              </div>
            </a>

            <div className="glass-panel contact-card">
              <div className="contact-card-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-card-info">
                <h4>Location</h4>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50 text-center text-sm text-muted">
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
