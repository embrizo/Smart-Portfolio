"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Trash2, ChevronDown } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

interface BotIntent {
  keywords: string[];
  response: string;
  suggestions: string[];
  weight?: number;
}

// ─── Knowledge Base ────────────────────────────────────────────────────────────
const INTENTS: BotIntent[] = [
  {
    keywords: ["hello", "hi", "hey", "sawadee", "สวัสดี", "start", "help", "who are you"],
    response: `Sawadee krap! 🙏 I'm **NEWZ-AI**, Pattapon's portfolio assistant.

I know everything about him — his 6+ years in **Industrial IoT**, **Smart Factory systems**, **AI Agents**, and **Siemens NX automation**. What can I help you explore today?`,
    suggestions: ["🔌 PLC Experience", "🌐 ThingWorx & IoT", "🤖 AI Projects", "📞 Contact Info"],
  },
  {
    keywords: ["plc", "mitsubishi", "keyence", "siemens", "yaskawa", "gx works", "tia portal", "ladder", "program", "automation"],
    response: `Pattapon has **6+ years** of hands-on PLC experience across multiple industrial brands:

• **Mitsubishi Electric** — GX Works 2/3, Q/FX/iQ-R series, ladder & ST programming
• **Keyence** — KV Studio, KV-8000 programmable controllers
• **Siemens** — TIA Portal, S7-300/400, Step 7 logic design
• **Yaskawa** — Motoman robot controllers (YRC1000), MotoSim EG

He handles full project cycles: electrical diagrams, panel wiring, robot teaching, HMI design, and commissioning.`,
    suggestions: ["🏭 Smart Factory Projects", "🔗 PLC to IoT Integration", "🤖 Robot OEE Project"],
  },
  {
    keywords: ["thingworx", "kepware", "opc", "mqtt", "iiot", "industrial iot", "iot", "dashboard", "mashup", "tag", "udp", "modbus", "tcp"],
    response: `Pattapon is a **Certified ThingWorx Associate** with deep expertise in the full Industrial IoT stack:

**Platform stack:**
• **ThingWorx** — Thing modeling, Mashup Builder, REST Services, auto-provisioning, Thing Templates
• **Kepware KEPServerEX** — OPC UA/DA, Modbus TCP, User-Configurable (U-CON) drivers, EFM
• **Connectivity** — MQTT, OPC UA, UDP sockets, ODBC, REST APIs, TCP/IP

**Deployed solutions include:**
→ Smart Factory OEE & TPM dashboards for automotive stamping lines
→ BMS/EMS cloud SaaS on AWS with Phoenix Contact PLCnext
→ METALEX 2024 live robot monitoring demo (Yaskawa)`,
    suggestions: ["🏭 OEE Project Details", "⚡ BMS & Energy Project", "🤖 Yaskawa Robot Dashboard"],
  },
  {
    keywords: ["ai", "agent", "claude", "ollama", "llm", "codex", "gpt", "antigravity", "autonomous", "python", "automation"],
    response: `Pattapon is an active **AI Engineer** building real-world agentic systems:

**AI Projects:**
• **System Architecture Generator** — Python agent that auto-generates 5-layer network diagrams in PowerPoint using Ollama + python-pptx. Builds slides in under 5 seconds.
• **Multi-Agent Podcast Generator** — 3-agent pipeline (Topic Hunter → Script Writer → Voice Actor) producing dark-comedy podcast scripts automatically using Claude/GPT-4.
• **Siemens NX AI Cutting Tool Integrator** — C# NX Open + Ollama (Phi-4) bridged via FileSystemWatcher, reducing tool selection time by **75%**.

**Frameworks:** Claude API, Codex, Antigravity, Ollama (local LLMs), Python backends`,
    suggestions: ["🏗️ Architecture Generator", "🎙️ Podcast AI Agent", "⚙️ NX Cutting Tool AI"],
  },
  {
    keywords: ["nx", "cad", "cam", "siemens nx", "nx open", "c#", "cutting tool", "milling", "machining", "design"],
    response: `Pattapon is a certified **Siemens NX Open API** developer with real deployment experience:

• Writes **C# plugins** using the NX Open .NET API to automate CAD/CAM workflows
• Built a full **AI-assisted cutting tool selector** integrated with local LLMs (Ollama/Phi-4)
• Monitors parameter outputs via **FileSystemWatcher** for real-time async AI inference
• Reduces NX CAM setup time and tool selection cycles by up to **75%**

He also has experience with **MotoSim EG** (Yaskawa robot simulation) and **AutoCAD LT** for 2D electrical layouts.`,
    suggestions: ["🤖 NX AI Project Details", "🔌 PLC Experience", "📐 Engineering Tools"],
  },
  {
    keywords: ["project", "work", "showcase", "portfolio", "built", "made", "example", "demo"],
    response: `Here's a quick tour of Pattapon's key projects:

**Smart Factory & IIoT:**
→ 🏭 Smart Factory OEE & TPM Monitoring (Automotive stamping lines)
→ 🤖 METALEX 2024 Robot OEE Dashboard (Yaskawa, live exhibition)
→ ⚡ BMS & EMS SaaS Platform (AWS, Phoenix Contact PLCnext)

**AI & Automation:**
→ 🏗️ AI System Architecture Generator (Python + Ollama)
→ 🎙️ Multi-Agent Podcast Generator (Claude/GPT-4)
→ ⚙️ Siemens NX AI Cutting Tool Integrator (C# + Phi-4)

**Hobby & Apps:**
→ 🐾 Find the Corgi (English-Thai learning game)
→ 🍕 Random Food Picker (React + Google Cloud Run)

Click **"Projects"** in the navigation to view all details!`,
    suggestions: ["🏭 Factory Projects", "🤖 AI Projects", "📞 Hire Pattapon"],
  },
  {
    keywords: ["oee", "tpm", "automotive", "stamping", "press", "manufacturing", "factory", "production"],
    response: `The **Smart Factory OEE & TPM Monitoring** project was one of Pattapon's most complex deployments:

**Scale:** 3 heavy-duty stamping lines (SIMPAC 1200T, SEYI 250, Chinfong 260)

**Technical stack:**
• Kepware KEPServerEX → OPC UA → ThingWorx
• Protocols: **Mitsubishi Ethernet TCP/IP** and **Modbus TCP**
• **200+ PLC alarm mappings** (clutch valve, brake valve, press overload)
• Real-time **power meter telemetry** (active power, energy per stroke)
• Automated **PM (Preventive Maintenance) limits** triggered by actual stroke count vs. max thresholds

He also deployed YASKAWA robot monitoring (MP-153 to MP-156) alongside press lines RB-352 to RB-357.`,
    suggestions: ["🌐 ThingWorx Details", "⚡ Energy Projects", "📞 Request Similar Solution"],
  },
  {
    keywords: ["energy", "bms", "ems", "solar", "battery", "compressor", "green", "power", "utility"],
    response: `Pattapon has deployed two energy-focused IoT solutions:

**1. BMS & EMS SaaS Platform (AWS):**
• Phoenix Contact PLCAXC2152 via PLCnext collecting solar/battery/grid data
• 512V, 100Ah battery bank monitoring with 0.3C discharge tracking
• **Zero-Export** power control and auto Virtual Thing provisioning in ThingWorx
• Protocols: OPC UA + MQTT + Modbus TCP

**2. Air Compressor Energy Optimization:**
• Advantech WISE-4051 wireless I/O + ADAM modules
• Monitoring 4 compressors + 12 environmental sensors
• Detected 3 major **pneumatic pressure drops** that would have caused production downtime
• Real-time OEE showing power per cubic meter of compressed air`,
    suggestions: ["🌐 Full IoT Stack", "🏭 Factory Projects", "📞 Contact for Energy Projects"],
  },
  {
    keywords: ["skill", "stack", "language", "programming", "python", "javascript", "sql", "node", "node-red", "postgresql"],
    response: `Pattapon's full technical stack:

**AI & Agents:**
Claude · Codex · Antigravity · Ollama AI · Autonomous Agents

**Industrial IoT:**
ThingWorx · Kepware · MQTT · OPC UA · REST API · ODBC · TCP/IP · UDP

**Automation & Hardware:**
PLC · Mitsubishi · Keyence · Siemens · BACnet · Yaskawa · WISE · ADAM

**Engineering Software:**
NX Open · Siemens NX · MotoSim · AutoCAD LT · TIA Portal · GX Works

**Programming:**
C# · JavaScript · Python · SQL · PostgreSQL · Node-RED`,
    suggestions: ["🤖 AI Projects", "🔌 PLC Experience", "📐 Engineering Tools"],
  },
  {
    keywords: ["cert", "certification", "ptc", "credential", "university", "award", "study", "education", "degree"],
    response: `Pattapon holds **7+ industry certifications** including:

**PTC University:**
✅ ThingWorx Associate Certification Exam 2023
✅ ThingWorx: Fundamentals of Creating a Mashup
✅ ThingWorx: Basics of Modeling + Edge Connectivity

**PTC Field Academy:**
✅ ThingWorx Technical Essentials
✅ Manufacturing Domain · Engineering Domain
✅ SCP Solutions Basics · SCO Solutions Basics
✅ Command of the Message · MEDDICC Qualification

**AI & Cloud:**
✅ AI Foundations (OpenAI Academy)
✅ Introduction to Agent Skills (Anthropic)
✅ Claude 101 & Claude Code 101 (Anthropic)
✅ AWS Cloud Essentials (AWS Training)

View all certificate PDFs in the **Certifications** section!`,
    suggestions: ["🌐 ThingWorx Expertise", "🤖 AI Skills", "📞 Contact Info"],
  },
  {
    keywords: ["experience", "history", "career", "job", "company", "work at", "canon", "bosch", "mas automation", "material"],
    response: `Pattapon's professional timeline:

**1. IoT Presale Engineer** 🏢
*Material Automation (Thailand) Co., Ltd. — Canon Group*
📅 August 2020 — Present (6+ years)
→ Requirements gathering, IoT solution architecture
→ ThingWorx dashboards, Kepware integrations, system demos
→ PLC connectivity (MQTT, OPC UA, REST, ODBC, TCP/IP)

**2. Automation Engineer** 🔧
*Mas Automation Co., Ltd.*
📅 June 2019 — August 2020
→ PLC/HMI design for machine automation
→ Robot teaching, wiring, onsite commissioning

**3. Senior Electrical Technician** ⚡
*Robert Bosch Automotive Technologies (Thailand)*
📅 March 2018 — August 2018
→ Chiller, AHU, compressor facility support
→ SAP WBS items, IATF 16949 documentation`,
    suggestions: ["📞 Contact & Hire", "📋 View Full CV", "🔌 Key Skills"],
  },
  {
    keywords: ["contact", "email", "phone", "call", "hire", "consult", "reach", "available", "freelance", "collaborate"],
    response: `You can reach Pattapon directly:

📧 **Email:** new.pattapon@hotmail.com
📞 **Phone:** +66 8-2128-7434
📍 **Location:** Bangkok, Thailand

**Available for:**
• Industrial IoT consulting & integration
• ThingWorx dashboard & Mashup development
• Kepware KEPServerEX configuration
• Siemens NX Open API automation
• AI Agent development (Python/Claude/Ollama)
• Technical training & presale support

📄 Download his **CV** using the button in the Hero section!`,
    suggestions: ["📋 Download CV", "🏭 Factory Solutions", "🤖 AI Consulting"],
  },
  {
    keywords: ["hobby", "app", "corgi", "food", "picker", "spin", "wheel", "game", "personal", "fun"],
    response: `Besides professional work, Pattapon builds personal apps for fun:

**🐾 Find the Corgi** *(find-corgi.ai.studio)*
An interactive English-Thai vocabulary game where kids explore scenes to find a hidden Corgi. Features Firebase Auth, Text-to-Speech, Sticker Book achievements, and a Parents Dashboard.

**🍕 Whatever, Anything is Fine** *(culinary-wheel)*
A random food picker app deployed on **Google Cloud Run**. Features a spinning wheel with custom food options — perfect for solving the eternal "What should I eat?" dilemma!

Check them out in the **Hobby & App** section of the nav bar!`,
    suggestions: ["🐾 Find the Corgi Details", "🍕 Food Picker App", "🤖 Professional AI Work"],
  },
];

// ─── Fallback Response ──────────────────────────────────────────────────────────
const FALLBACK: Omit<BotIntent, "keywords" | "weight"> = {
  response: `I'm not sure I understood that — I'm a **simulated AI** with knowledge specific to Pattapon's portfolio. 🤔

I can help you with:
• **PLC & Automation** experience
• **ThingWorx & Industrial IoT** projects
• **AI Agent** development work
• **Certifications** & credentials
• **Contact** & availability

Try one of the suggestions below, or rephrase your question!`,
  suggestions: ["🔌 PLC Experience", "🌐 ThingWorx & IoT", "🤖 AI Projects", "📞 Contact Info"],
};

// ─── Quick Replies ──────────────────────────────────────────────────────────────
const INITIAL_QUICK_REPLIES = [
  "🔌 PLC Experience",
  "🌐 ThingWorx & IoT",
  "🤖 AI Projects",
  "📋 Work History",
  "🎖️ Certifications",
  "📞 Contact Info",
  "💡 Full Skill Stack",
  "🏭 Factory Projects",
];

// ─── Helpers ────────────────────────────────────────────────────────────────────
function findBestIntent(input: string): BotIntent | null {
  const clean = input.toLowerCase();
  let best: BotIntent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.keywords.reduce((acc, kw) => acc + (clean.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return bestScore > 0 ? best : null;
}

// Render **bold** text as <strong> spans
function renderText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Init welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: `Sawadee krap! 🙏 I'm **NEWZ-AI**, Pattapon's portfolio assistant.\n\nI know everything about his 6+ years in **Industrial IoT**, **Smart Factory systems**, **AI Agents**, and **Siemens NX automation**. What can I help you explore today?`,
        timestamp: new Date(),
        suggestions: ["🔌 PLC Experience", "🌐 ThingWorx & IoT", "🤖 AI Projects", "📞 Contact Info"],
      },
    ]);
  }, []);

  // ── Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  // ── Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Show scroll-down button if user scrolls up
  const handleScroll = useCallback(() => {
    if (!chatBodyRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatBodyRef.current;
    setShowScrollDown(scrollHeight - scrollTop - clientHeight > 120);
  }, []);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Variable delay simulates reading/thinking
    const intent = findBestIntent(text);
    const delay = intent ? 900 + Math.min(intent.response.length * 2, 1800) : 1200;

    setTimeout(() => {
      const result = intent ?? { response: FALLBACK.response, suggestions: FALLBACK.suggestions };
      const botMsg: Message = {
        id: crypto.randomUUID(),
        sender: "bot",
        text: result.response,
        timestamp: new Date(),
        suggestions: result.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: `Chat cleared! 🧹 Ask me anything about Pattapon's work and projects.`,
        timestamp: new Date(),
        suggestions: INITIAL_QUICK_REPLIES.slice(0, 4),
      },
    ]);
  };

  return (
    <>
      {/* ── Floating Button ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white font-bold shadow-lg shadow-accent/30 border border-accent/20 cursor-pointer relative"
          aria-label="Open AI assistant chat"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-50 pointer-events-none" />
          <div className="relative">
            <MessageSquare size={20} />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-accent" />
          </div>
          <span className="text-sm font-semibold tracking-wide hidden sm:inline">Ask NEWZ-AI</span>
        </motion.button>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-20 right-6 z-50 w-[92vw] sm:w-[430px] h-[580px] rounded-2xl glass-panel shadow-2xl flex flex-col border border-border overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(0,216,255,0.12), 0 8px 24px rgba(0,0,0,0.4)" }}
          >
            {/* ── Header ── */}
            <div className="px-4 py-3 border-b border-border/60 flex items-center justify-between bg-gradient-to-r from-accent/10 to-accent-secondary/5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center relative flex-shrink-0">
                  <Sparkles size={18} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[var(--card)]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-tight">NEWZ-AI Assistant</h4>
                  <span className="text-[10px] text-accent-secondary font-bold uppercase tracking-widest">Portfolio Agent · Online</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClear}
                  className="p-1.5 rounded-lg border border-border/40 hover:bg-red-500/10 hover:border-red-500/30 text-muted hover:text-red-400 transition-colors cursor-pointer"
                  aria-label="Clear chat history"
                  title="Clear chat"
                >
                  <Trash2 size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg border border-border/40 hover:bg-border/30 text-muted hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close chat"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* ── Messages Body ── */}
            <div
              ref={chatBodyRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-background/20"
              style={{ scrollbarWidth: "thin", scrollbarColor: "var(--border) transparent" }}
            >
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col gap-1.5">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col max-w-[88%] ${
                      msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed border shadow-sm ${
                        msg.sender === "user"
                          ? "bg-accent border-accent/80 text-white rounded-tr-sm"
                          : "bg-card/80 border-border/60 text-foreground rounded-tl-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line">{renderText(msg.text)}</p>
                    </div>
                    <span className="text-[9px] text-muted/50 mt-0.5 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </motion.div>

                  {/* Suggestion chips under bot messages */}
                  {msg.sender === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="self-start flex flex-wrap gap-1.5 mt-0.5 max-w-[92%]"
                    >
                      {msg.suggestions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(s.replace(/^[^\w\s]+ /, ""))}
                          disabled={isTyping}
                          className="px-2.5 py-1 rounded-xl border border-accent/20 bg-accent/5 hover:bg-accent/15 hover:border-accent/50 text-[10px] font-semibold text-accent hover:text-accent transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="self-start max-w-[88%]"
                >
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-card/80 border border-border/60 flex items-center gap-1.5">
                    {[0, 150, 300].map((delay, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                    <span className="text-[10px] text-muted/60 ml-1">NEWZ-AI is thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Scroll to bottom button */}
            <AnimatePresence>
              {showScrollDown && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToBottom}
                  className="absolute bottom-24 right-6 w-8 h-8 rounded-full bg-accent text-white border border-accent/30 flex items-center justify-center shadow-lg cursor-pointer z-10"
                  aria-label="Scroll to bottom"
                >
                  <ChevronDown size={14} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* ── Quick Replies Scroll Bar ── */}
            <div className="px-3 py-2 border-t border-border/30 bg-card/10 flex gap-1.5 overflow-x-auto flex-shrink-0"
              style={{ scrollbarWidth: "none" }}>
              {INITIAL_QUICK_REPLIES.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(reply.replace(/^[^\w\s]+ /, ""))}
                  disabled={isTyping}
                  className="flex-shrink-0 px-3 py-1.5 rounded-xl border border-border/60 hover:border-accent/40 bg-card/50 hover:bg-accent/5 text-[11px] font-semibold text-muted hover:text-accent transition-all cursor-pointer disabled:opacity-40"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-border/60 flex gap-2 bg-card/30 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about PLC, ThingWorx, AI projects..."
                className="flex-1 px-3.5 py-2 rounded-xl border border-border/60 bg-background/50 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                disabled={isTyping}
              />
              <motion.button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl bg-accent text-white flex items-center justify-center cursor-pointer hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
