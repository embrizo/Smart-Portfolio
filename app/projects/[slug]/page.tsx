"use client";

import React, { use, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, ShieldAlert, CheckCircle2, Cpu, Calendar, User, Network, FileText } from "lucide-react";
import { projects } from "@/data/portfolio";
import Header from "@/app/components/Header";

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  details: { label: string; value: string }[];
  results: string[];
  video?: string;
  gallery?: string[];
  documents?: { name: string; url: string }[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = (projects as Project[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Video states
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Helper for detail icon selection
  const getDetailIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("client")) return <User size={16} className="text-cyan-500" />;
    if (l.includes("year")) return <Calendar size={16} className="text-emerald-500" />;
    if (l.includes("platform") || l.includes("program")) return <Cpu size={16} className="text-blue-500" />;
    if (l.includes("connectivity") || l.includes("hardware")) return <Network size={16} className="text-amber-500" />;
    if (l.includes("input") || l.includes("output")) return <FileText size={16} className="text-purple-500" />;
    return <CheckCircle2 size={16} className="text-muted" />;
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="cyber-grid" />
      
      {/* Shared navigation header */}
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:py-12 w-full z-10">
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column: Title & Metadata */}
          <div className="lg:col-span-7">
            <span className="eyebrow">{project.category}</span>
            <h1 className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 mt-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge border-accent/20 text-foreground">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="glass-panel p-6 rounded-2xl mb-8 leading-relaxed text-muted">
              <h3 className="font-bold text-foreground text-lg mb-3">Project Summary</h3>
              <p>{project.description}</p>
            </div>
          </div>

          {/* Right Column: Key Details Box */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-card to-border/20">
              <h3 className="font-bold text-foreground text-lg mb-4 border-b border-border/60 pb-2">
                Project Information
              </h3>
              <div className="flex flex-col gap-4">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-muted font-medium flex items-center gap-2">
                      {getDetailIcon(detail.label)}
                      {detail.label}
                    </span>
                    <span className="text-foreground font-semibold text-right max-w-[60%]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Documents */}
            {project.documents && project.documents.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-card to-border/20 mt-6">
                <h3 className="font-bold text-foreground text-lg mb-4 border-b border-border/60 pb-2">
                  Project Documents
                </h3>
                <div className="flex flex-col gap-3">
                  {project.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:underline flex items-center gap-2 hover:text-accent-secondary transition-colors"
                    >
                      <FileText size={16} className="text-cyan-500 flex-shrink-0" />
                      <span className="truncate">{doc.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video / Media Player Section */}
        {project.video && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Video Demonstration</h2>
            <div className="glass-panel overflow-hidden rounded-3xl relative aspect-video shadow-2xl border border-border/80 bg-black max-w-4xl mx-auto">
              <video
                ref={videoRef}
                src={project.video}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onClick={togglePlay}
              />
              
              {/* Overlay controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  {/* Play/Pause */}
                  <button 
                    onClick={togglePlay}
                    className="p-3 bg-accent text-white rounded-full cursor-pointer hover:bg-accent/80 transition-colors shadow-md"
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>

                  {/* Volume Control */}
                  <button 
                    onClick={toggleMute}
                    className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full cursor-pointer transition-colors"
                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              </div>

              {/* Big Initial Play Button if not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                  <div className="p-5 bg-accent/90 text-white rounded-full shadow-lg shadow-accent/25 animate-pulse">
                    <Play size={32} fill="white" className="translate-x-0.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Detailed Narrative & Deliverables split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
          {/* Main Description */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Detailed Overview</h2>
            <div className="prose prose-invert max-w-none text-muted leading-relaxed text-base flex flex-col gap-4">
              {project.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Static layout preview if no video */}
            {!project.video && (
              <div className="mt-8 relative h-[320px] rounded-2xl overflow-hidden border border-border/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Results/Deliverables */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-card/40 to-border/10">
              <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-accent-secondary" />
                Key Results
              </h3>
              <ul className="flex flex-col gap-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="text-sm text-muted leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary flex-shrink-0 mt-2" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel overflow-hidden rounded-2xl relative h-[240px] border border-border/80 group hover:shadow-lg hover:shadow-accent-glow hover:border-border-hover transition-all duration-300"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50 text-center text-sm text-muted mt-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} {project.details.find(d => d.label === "Client")?.value || "Pattapon Thongnak"}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
