"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  { text: "🔌 PLC Brands Supported", keywords: ["plc", "brand"] },
  { text: "⚙️ ThingWorx & IoT", keywords: ["thingworx", "iot"] },
  { text: "🤖 Siemens NX & AI", keywords: ["nx", "ai"] },
  { text: "💼 Work Experience", keywords: ["work", "experience"] },
  { text: "📞 Contact & Consultation", keywords: ["contact", "consultation"] }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Sawadee krap! 🙏 I'm Pattapon's Presale AI Assistant. I can answer questions about his PLC experience, ThingWorx IoT dashboards, Siemens NX custom APIs, work history, and contact details. How can I help you optimize your factory today?",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const response = generateBotResponse(text);
      const botMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: response,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (input: string): string => {
    const clean = input.toLowerCase();

    // PLC
    if (clean.includes("plc") || clean.includes("brand") || clean.includes("mitsubishi") || clean.includes("keyence") || clean.includes("siemens") || clean.includes("yaskawa")) {
      return "Pattapon has over 6 years of experience programming PLCs and designing control logic. He supports major brands including **Mitsubishi** (GX Works), **Keyence** (KV Studio/KV-8000), **Siemens** (TIA Portal), and **Yaskawa** controllers. He is skilled in designing electrical diagrams, wiring, robot teaching, and integrating PLC signals with IoT gateways.";
    }

    // ThingWorx / IoT / Kepware
    if (clean.includes("thingworx") || clean.includes("iot") || clean.includes("iiot") || clean.includes("kepware") || clean.includes("opc") || clean.includes("mqtt") || clean.includes("dashboard") || clean.includes("meshup")) {
      return "For Industrial IoT, Pattapon is a **certified ThingWorx Associate**. He specializes in Kepware KEPServerEX bindings, OPC UA/DA, MQTT tag streaming, remote thing creation, and building rich, responsive dashboard mashups. He has deployed OEE & TPM monitoring dashboards across major automotive assembly lines for a major automotive manufacturer (EX Customer).";
    }

    // NX Open / AI / CAD / C# / Ollama
    if (clean.includes("nx") || clean.includes("cad") || clean.includes("cam") || clean.includes("c#") || clean.includes("ollama") || clean.includes("ai") || clean.includes("agent") || clean.includes("cutting")) {
      return "Pattapon is highly skilled in engineering CAD/CAM automation. He writes custom **C# programs using the Siemens NX Open API** to automate time-consuming design tasks. Recently, he successfully integrated local LLMs (via Ollama running Llama 3) inside Siemens NX to build an AI-assisted cutting tool selection toolkit, reducing CAD preparation and tool selection processes by up to 75%.";
    }

    // Experience / Career / History
    if (clean.includes("experience") || clean.includes("work") || clean.includes("history") || clean.includes("job") || clean.includes("canon") || clean.includes("material") || clean.includes("bosch")) {
      return "Pattapon's professional journey:\n\n1. **IoT Presale Engineer** at Material Automation (Thailand) Co., Ltd. (a Canon group company) [Aug 2020 - Present] - Gathering requirements, designing architectures, and building ThingWorx/Kepware systems.\n2. **Automation Engineer** at Mas Automation [Jun 2019 - Aug 2020] - PLC/HMI design, wiring, and robotic teaching.\n3. **Senior Electrical Technician** at Bosch Automotive [Mar 2018 - Aug 2018] - Utility and facility maintenance support.";
    }

    // Contact / Consultation / Reach / Hire / Resume
    if (clean.includes("contact") || clean.includes("email") || clean.includes("phone") || clean.includes("call") || clean.includes("hire") || clean.includes("consult") || clean.includes("resume") || clean.includes("cv")) {
      return "You can reach Pattapon directly at **+66 8-2128-7434** or email him at **new.pattapon@hotmail.com**. He is based in Bangkok, Thailand, and is available for industrial connectivity consulting, ThingWorx dashboards development, custom Kepware integrations, Siemens NX API automation, and technical training. You can also download his CV using the button in the Hero section!";
    }

    // Certifications / Credentials
    if (clean.includes("cert") || clean.includes("credential") || clean.includes("award") || clean.includes("education")) {
      return "Pattapon holds **7+ ThingWorx certifications** from PTC University and PTC Field Academy. He also has certifications in AI Foundations, AWS Cloud Essentials, and PLC systems. You can view and download all of his PDFs directly in the 'Certifications' section below!";
    }

    // Default
    return "I'm a specialized AI presale agent representing Pattapon. I can help answer questions about his:\n\n1. **Industrial IoT / ThingWorx** integrations\n2. **PLC Programming** (Mitsubishi, Keyence, Siemens)\n3. **C# Siemens NX Open API** automation\n4. **Work History & Certifications**\n5. **Contact info**\n\nTry asking me about 'PLC brands', 'Ollama AI', or 'how to contact him'!";
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white font-bold shadow-lg shadow-accent/25 border border-accent/20 cursor-pointer"
        >
          <div className="relative">
            <MessageSquare size={20} />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-accent-secondary rounded-full border-2 border-accent" />
          </div>
          <span className="text-sm font-semibold tracking-wide hidden sm:inline">Ask Presale AI</span>
        </motion.button>
      </div>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-20 right-6 z-50 w-[90vw] sm:w-[420px] h-[550px] rounded-2xl glass-panel shadow-2xl flex flex-col border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/80 flex items-center justify-between bg-gradient-to-r from-accent/5 to-accent-secondary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center relative">
                  <Sparkles size={20} className="animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0d1523]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-tight">Presale Assistant</h4>
                  <span className="text-[10px] text-accent-secondary font-bold uppercase tracking-wider">Simulated AI Agent</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-border/60 hover:bg-border/30 text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/30 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] ${
                    msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-2xl text-sm leading-relaxed border shadow-sm ${
                      msg.sender === "user"
                        ? "bg-accent border-accent text-white rounded-tr-none"
                        : "bg-card/90 border-border text-foreground rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                  <span className="text-[9px] text-muted/60 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="self-start flex flex-col items-start max-w-[85%]">
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-card/90 border border-border text-foreground flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-muted/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Replies Panel */}
            <div className="px-4 py-2 border-t border-border/40 bg-card/20 flex gap-2 overflow-x-auto no-scrollbar py-2">
              {QUICK_REPLIES.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(reply.text.substring(3))} // Strip emoji prefix
                  className="flex-shrink-0 px-3 py-1.5 rounded-xl border border-border hover:border-accent/40 bg-card/60 hover:bg-accent/5 text-[11px] font-semibold text-foreground hover:text-accent transition-all cursor-pointer shadow-sm"
                >
                  {reply.text}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-border/80 flex gap-2 bg-card/45"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about PLCs, ThingWorx, NX Open API..."
                className="flex-1 px-3.5 py-2 rounded-xl border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent-glow"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-accent text-white flex items-center justify-center cursor-pointer hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
