export const profile = {
  brand: "Pattapon Thongnak (New)",
  name: "Pattapon Thongnak",
  title: "Smart Factory, IoT & AI Engineer",
  location: "Bangkok, Thailand",
  phone: "+66 8-2128-7434",
  email: "new.pattapon@hotmail.com",
  summary:
    "IoT & AI Engineer specializing in smart factory systems, autonomous AI Agents (Claude, Codex, Antigravity), ThingWorx development, and CAD/CAM automation.",
  resumeUrl: "/Resume-Mr-Pattapon-Thongnak-New.pdf"
};

export const stats = [
  { label: "Years in IoT and automation", value: "6+" },
  { label: "Industrial project domains", value: "12" },
  { label: "ThingWorx certificates", value: "7" },
  { label: "Core platforms", value: "15+" }
];

export const skills = [
  {
    group: "AI & Agents",
    items: ["Claude", "Codex", "Antigravity", "Ollama AI", "Autonomous AI Agents"]
  },
  {
    group: "Industrial IoT",
    items: ["ThingWorx", "Kepware", "MQTT", "OPC UA", "REST API", "ODBC", "TCP/IP", "UDP"]
  },
  {
    group: "Automation",
    items: ["PLC", "Mitsubishi", "Keyence", "Siemens", "BACnet", "Yaskawa", "WISE", "ADAM"]
  },
  {
    group: "Engineering Software",
    items: ["NX Open", "Siemens NX", "MotoSim", "AutoCAD LT", "TIA Portal", "GX Works"]
  },
  {
    group: "Programming",
    items: ["C#", "JavaScript", "Python", "SQL", "PostgreSQL", "Node-RED"]
  }
];

export const projects = [
  {
    slug: "ai-system-architecture-generator",
    title: "AI Agent: System Architecture Generator",
    category: "AI & Python Automation",
    description:
      "Developed a Python-powered agentic workflow that parses requirements and automatically generates widescreen (16:9) system architecture and network diagrams inside PowerPoint presentations.",
    image: "/projects/Ai_Agent/ai-system-architecture-agent.png",
    tags: ["Python", "PPTX Automation", "Ollama AI", "YAML Config", "Agentic Workflows"],
    video: "https://youtu.be/de9ikM7n0Rk",
    longDescription: "Developed an agentic Python system utilizing python-pptx and local LLMs (via Ollama) to automatically generate industrial IoT system architectures and network diagrams in widescreen PowerPoint (.pptx) files. The tool processes two structured folders—Requirement Definition and Physical Ground—containing site constraints, field devices (such as temp controllers, wireless vibration sensors, and power meters), PLCs, and gateway specifications. The agent parses these configurations, dynamically calculates layer coordinates, and draws styled 5-layer architecture diagrams (Application, Cloud, Gateway, Controller, and Field Device layers) with auto-arranged legends and connection lines, reducing presentation design time from hours to seconds.",
    details: [
      { label: "Client", value: "Internal R&D / Digital Manufacturing Dept" },
      { label: "Role", value: "AI Tooling & Automation Developer" },
      { label: "Platforms", value: "Python, python-pptx, PyYAML, Ollama" },
      { label: "Inputs", value: "YAML (Requirement, Physical Ground)" },
      { label: "Outputs", value: "PowerPoint Widescreen Slides (.pptx)" },
      { label: "Year", value: "2026" }
    ],
    results: [
      "Generates complete 5-layer widescreen (16:9) network architecture slide decks in under 5 seconds.",
      "Automates coordinate calculation, shapes placement (Clouds, Rectangles, Lines), and legend drawing.",
      "Implements robust error handling (like fallback saves) for locked files during presentations."
    ]
  },
  {
    slug: "ai-agent-podcast-generator",
    title: "AI Agent: Multi-Agent Podcast Generator",
    category: "AI & Python Automation",
    description:
      "Developed a multi-agent AI pipeline that orchestrates Topic Hunter, Script Writer, and Voice Actor agents to automatically generate dramatic, dark-comedy podcast episodes.",
    image: "/projects/ai-agent-podcast-generator/cover.png",
    tags: ["AI Agents", "Podcast Automation", "Claude / GPT-4", "System Prompts", "Audio Generation"],
    video: "https://youtube.com/shorts/WXqkDps8Fto?feature=share",
    videoAspect: "9:16",
    longDescription: "Designed and implemented a multi-agent AI pipeline for automated podcast generation. The system orchestrates three specialized agents to produce dark comedy and dramatic storytelling content: the Topic Hunter Agent (TOPIC_01) crawls hooks and recent history to propose engaging titles, the Script Writer Agent (SCRIPT_01) structures the narrative hook, body, and forensic summary using custom dark-humor style filters, and the Voice Actor/TTS Agent generates natural audio. Configured with a backend memory store to trace successful hooks and avoid repetition, this pipeline automates content research and scriptwriting.",
    details: [
      { label: "Client", value: "Internal Content Automation R&D" },
      { label: "Role", value: "Lead AI Engineer & Prompt Architect" },
      { label: "Platforms", value: "Claude / GPT-4 APIs, Python Backend" },
      { label: "Agents", value: "Topic Hunter, Script Writer, Voice Actor, Memory Agent" },
      { label: "Year", value: "Feb 2026" }
    ],
    results: [
      "Orchestrates a 3-agent pipeline (Topic, Script, Audio) to generate finished scripts in under 10 seconds.",
      "Implements memory feedback loops to ensure topics and hooks are never repeated.",
      "Utilizes specialized style filters and vocabulary mappings for dark-comedy narratives."
    ]
  },
  {
    slug: "siemens-nx-ai-cutting-tool-integrator",
    title: "Siemens NX AI Cutting Tool Integrator",
    category: "AI & CAD Automation",
    description:
      "Built a C# NX Open automation toolkit integrated with local AI models (Ollama) to assist engineers in cutting-tool selection and automated CAD processing.",
    image: "/projects/Siemen_NX_Ai/siemens-nx-ai-cutting-tool-integrator.png",
    tags: ["NX Open", "C#", "Siemens NX", "Ollama AI", "Automation"],
    video: "https://youtu.be/npX4YE97jlw",
    longDescription: "Designed a custom CAD/CAM automation toolkit using the C# NX Open API for Siemens NX. Deployed local LLMs via Ollama running the Microsoft Phi-4 (PHI4) model. The integration operates asynchronously using a C# FileSystemWatcher that monitors parameter outputs (msgRequest.txt) generated by the NX CAM ribbon controller, triggering real-time, secure model inferences. The local AI is configured as a senior CAD/CAM engineering assistant ('Ohm') to automate cutting tool selections, processing design parameters, and reducing mechanical drafting cycle times.",
    details: [
      { label: "Client", value: "Internal Development & Manufacturing Partners" },
      { label: "Role", value: "CAD/CAM Automation & AI Developer" },
      { label: "Platforms", value: "Siemens NX, NX Open API (C#), Ollama (Local AI)" },
      { label: "Programming", value: "C# (.NET), System.IO (FileSystemWatcher), REST API" },
      { label: "AI Model", value: "Microsoft Phi-4 (PHI4)" },
      { label: "Year", value: "2024" }
    ],
    results: [
      "Asynchronously bridged NX CAM C# plugins with local LLM models using FileSystemWatcher file-based RPC.",
      "Customized model system prompt to behave as a senior CAM Engineer ('Ohm') specializing in tool layouts.",
      "Reduced tool selection search time and CAD setup cycle times by up to 75%."
    ]
  },
  {
    slug: "metalex2024-robot-oee-dashboard",
    title: "METALEX2024 Robot OEE Dashboard",
    category: "Smart Factory Demo",
    description:
      "Coordinated with YASKAWA to build a robot status and OEE dashboard demonstration for METALEX2024, including factory layout communication and monitoring concepts.",
    image: "/projects/metalex2024-robot-oee-dashboard/metalex2024-robot-oee-dashboard.jpg",
    tags: ["Yaskawa", "OEE", "Kepware", "ThingWorx", "Robot monitoring"],
    video: "https://youtu.be/WGAAFw2YhOQ",
    gallery: [
      "/projects/metalex2024-robot-oee-dashboard/booth-layout.jpg",
      "/projects/metalex2024-robot-oee-dashboard/yaskawa-layout-3d.jpg",
      "/projects/metalex2024-robot-oee-dashboard/metalex-layout-floor.jpg"
    ],
    longDescription: "Built a live dashboard to monitor the status and Overall Equipment Effectiveness (OEE) of industrial robots in real-time at the METALEX 2024 exhibition, the largest machine tools and metalworking exhibition in ASEAN. This project required close collaboration with Yaskawa engineers to bind OPC UA tags and map internal robot controller registers to ThingWorx properties. The system utilized Kepware's User-Configurable (U-CON) driver to listen for UDP packets sent from Yaskawa controllers on port 10040, translating raw socket bytes (Availability, Alarm Code, Parts Count) into Kepware OPC UA tags for ThingWorx streaming. The result was a highly visual, responsive dashboard demonstrating state-of-the-art predictive maintenance, cycle time analytics, and factory-floor layout visualization.",
    details: [
      { label: "Client", value: "Yaskawa Thailand / Exhibition Demo" },
      { label: "Role", value: "Presale IoT & Integration Engineer" },
      { label: "Platforms", value: "PTC ThingWorx, Kepware KEPServerEX" },
      { label: "Connectivity", value: "OPC UA, UDP Socket, Kepware U-CON" },
      { label: "Hardware", value: "Yaskawa Motoman Robot Controllers (YRC1000)" },
      { label: "Year", value: "2024" }
    ],
    results: [
      "Configured Kepware U-CON driver to parse raw UDP packets into standard tags.",
      "Real-time tag binding of over 50 robotic telemetry points.",
      "Visual 3D status mapping overlay showing robot operational states (Run, Idle, Alarm)."
    ]
  },
  {
    slug: "smart-factory-oee-tpm-monitoring",
    title: "Smart Factory OEE & TPM Monitoring",
    category: "Production Analytics",
    description:
      "Implemented real-time production status, downtime tracking, and machine alarms on stamping press lines for a major automotive parts manufacturer (EX Customer).",
    image: "/projects/Smart-factory-OEE-TPM-Monitoring/smart-factory-oee-tpm-monitoring.jpg",
    tags: ["PLC", "OEE", "TPM", "Kepware", "ThingWorx", "Alarm Monitoring"],
    documents: [
      { name: "SP1200T Stamping Line Go-Live Meeting PDF", url: "/projects/Smart-factory-OEE-TPM-Monitoring/ex-customer-sp1200t-golive-meeting.pdf" }
    ],
    longDescription: "Implemented a production-grade OEE (Overall Equipment Effectiveness) and TPM (Total Productive Maintenance) monitoring system across automotive stamping press lines for a major automotive parts manufacturer (EX Customer). The project encompassed three major manufacturing lines: the Main SEYI 250 Press Line, Chinfong 260 Press Line, and the heavy-duty SIMPAC 1200T Press Line. Handled PLC and HMI data acquisition using Kepware KEPServerEX, mapping Modbus TCP and Mitsubishi Ethernet TCP/IP registers to standard OPC UA tags. Built comprehensive dashboards in PTC ThingWorx for real-time line monitoring (including robot states MP-153 to MP-156 and presses RB-352 to RB-357), active alarm logging, cleanroom environment status, power meter energy consumption (tracking active power and voltage cell profiles), and automated Die/Machine PM (Preventive Maintenance) limits tracking based on actual stroke count vs max limits.",
    details: [
      { label: "Client", value: "Major Automotive Parts Manufacturer (EX Customer)" },
      { label: "Role", value: "Lead IoT Deployment Engineer" },
      { label: "Platforms", value: "PTC ThingWorx, Kepware KEPServerEX, PostgreSQL" },
      { label: "Connectivity", value: "OPC UA, Mitsubishi Ethernet TCP/IP, Modbus TCP" },
      { label: "Hardware", value: "SIMPAC 1200T, SEYI 250, Chinfong 260 Presses" },
      { label: "Year", value: "2024" }
    ],
    results: [
      "Grouped and mapped over 200+ PLC alarms (Clutch Valve error, Press Overload, Brake Valve error) into visual dashboard alarms.",
      "Connected 3 heavy-duty press lines featuring SEYI 250, Chinfong 260, and SIMPAC 1200T machines.",
      "Deployed real-time power meter telemetry tracking total active energy and active power usage.",
      "Automated Die & Machine PM warnings triggered when actual stroke counts approach defined thresholds (e.g. 20,000 max strokes)."
    ]
  },
  {
    slug: "bms-ems-monitoring-saas-platform",
    title: "BMS & EMS Monitoring SaaS Platform",
    category: "Energy Systems",
    description:
      "Developed cloud-native Battery & Energy Management dashboards on AWS SaaS using ThingWorx, featuring automatic tag binding and remote thing creation.",
    image: "/projects/BMS/bms-ems-monitoring-saas-platform.jpg",
    tags: ["BMS", "EMS", "ThingWorx", "OPC UA", "Energy monitoring"],
    longDescription: "Deployed a cloud-native Battery Management System (BMS) and Energy Management System (EMS) SaaS monitoring platform. Integrated a Phoenix Contact PLCAXC2152 controller programmed via PLCnext, collecting data from solar PV cells, inverters, and building load power meters. System monitors a heavy-duty battery bank (512V, 100Ah capacity, 0.3C rate discharge) via Kepware KEPServerEX OPC UA and MQTT tag streaming. Built automated logic that dynamically creates Virtual Thing models, handles Zero-Export power control settings, and tracks solar energy priority distribution.",
    details: [
      { label: "Client", value: "Battery & Energy Storage Manufacturer (EX Customer)" },
      { label: "Role", value: "IoT Architect & Lead Developer" },
      { label: "Platforms", value: "PTC ThingWorx, Kepware KEPServerEX, PLCnext" },
      { label: "Hardware", value: "Phoenix Contact PLCAXC2152 PLC, Power Conversion System (PCS)" },
      { label: "Connectivity", value: "OPC UA, MQTT, Modbus TCP, REST API" },
      { label: "Year", value: "2023" }
    ],
    results: [
      "Programmed Phoenix Contact AXC2152 via PLCnext to capture power and state-of-charge parameters.",
      "Developed Zero-Export control logic to optimize power distribution between solar, battery bank, and grid.",
      "Implemented ThingWorx services for auto-provisioning virtual things based on MQTT topic registration."
    ]
  },
  {
    slug: "openlm-nx-license-management",
    title: "OpenLM NX License Management",
    category: "Asset Optimization",
    description:
      "Integrated OpenLM with a Node-RED dashboard to monitor Siemens NX software license usage and optimize license allocation across engineering teams.",
    image: "/projects/OpenLM/openlm-nx-license-management.png",
    tags: ["OpenLM", "Node-RED", "Siemens NX", "License monitoring", "Dashboard"],
    longDescription: "Deployed a software license utilization monitoring platform integrating OpenLM telemetry with Node-RED JSON flows, InfluxDB, and Grafana. The system extracts live license concurrency data across multiple engineering teams. It tracks specific premium CAD/CAM/CAE license features, including NX Mach Design floating modules (NX91110), 5-Axis CAM (CAM5X), and Simcenter Simulation packages (SC13500), helping optimize software renewals and prevent license hoarding.",
    details: [
      { label: "Client", value: "Corporate Engineering Enterprises (EX Customer)" },
      { label: "Role", value: "Solutions Presale Engineer" },
      { label: "Platforms", value: "OpenLM, Node-RED, InfluxDB, Grafana" },
      { label: "Connectivity", value: "REST APIs, Active Directory, Node-RED JSON Flow" },
      { label: "Tracked Features", value: "NX91110 (Mach Design), CAM5X (5-Axis), SC13500 (Simcenter)" },
      { label: "Year", value: "2023" }
    ],
    results: [
      "Wrote custom Node-RED JSON flows to fetch, filter, and parse OpenLM license logs.",
      "Monitored floating license features (NX91110, ADVES, CAM5X, SC13500) to trace utilization.",
      "Created proactive notifications when license pool saturation reaches 95%, saving 15% in renewals."
    ]
  },
  {
    slug: "air-compressor-energy-optimization",
    title: "Air Compressor Energy Optimization",
    category: "Green Factory Solutions",
    description:
      "Implemented IoT monitoring for air compressors and factory utility systems (temperature, humidity, energy consumption) using Advantech WISE modules and custom modbus interfaces.",
    image: "/projects/Air_Compressor/air-compressor-energy-optimization.jpg",
    tags: ["WISE-4051", "Modbus", "Energy Saving", "Chiller", "Utility IoT"],
    longDescription: "Implemented a Green Factory energy-efficiency program by monitoring heavy-duty air compressors and ambient cleanroom environments (temperature, humidity, pressure). Utilized Advantech WISE-4051 wireless I/O modules and ADAM controllers to bridge sensor data over Modbus TCP to a central IoT gateway, enabling real-time efficiency metrics and leak detection algorithms.",
    details: [
      { label: "Client", value: "Electronics Manufacturing Plant" },
      { label: "Role", value: "Integration & Field Engineer" },
      { label: "Platforms", value: "Advantech WISE-4051, Kepware, ThingWorx, InfluxDB" },
      { label: "Connectivity", value: "Modbus TCP, RTU, Analog 4-20mA" },
      { label: "Year", value: "2022" }
    ],
    results: [
      "Instrumented 4 main air compressors and 12 environmental sensors.",
      "Detected 3 major pneumatic line pressure drops, preventing potential production downtime.",
      "Created real-time OEE dashboards showing power usage per cubic meter of compressed air."
    ]
  },
  {
    slug: "find-the-corgi",
    title: "Find the Corgi",
    category: "Hobby & App",
    description:
      "An interactive English-Thai vocabulary learning game for kids. Search detailed scenes to find the hidden Corgi and learn over 1,000 words through voice and visuals.",
    image: "/hobby and app/find-corgi/Screenshot 2026-07-14 120102.png",
    tags: ["Firebase Auth", "HTML5 Canvas", "Tailwind CSS", "Interactive Learning", "Text-to-Speech"],
    longDescription:
      "Find the Corgi is a gamified, interactive educational web application designed to help children learn English and Thai vocabulary. The game prompts users to explore detailed illustrated scenes to find a hidden Corgi along with 75 distinct items per scene. Users can click on items to view their Thai/English translations, listen to correct pronunciations, and unlock a Corgi Quiz to test their learning. It includes Firebase Authentication (Google Log In / Guest Play), a Sticker Book achievement system, parental gate controls, and a parents' progress dashboard tracking vocabulary statistics and review terms.",
    details: [
      { label: "App Link", value: "https://find-corgi.ai.studio/" },
      { label: "Role", value: "Solo Creator & Developer" },
      { label: "Platforms", value: "Vite, HTML5 Canvas, Firebase, Tailwind CSS" },
      { label: "Target Audience", value: "Children & Bilingual Learners" },
      { label: "Year", value: "2026" }
    ],
    results: [
      "Designed and coded detailed interactive scenes with fluid pan and zoom capabilities.",
      "Integrated Firebase Authentication supporting Google Login and guest sessions.",
      "Embedded text-to-speech audio rendering for bilingual pronunciation verification.",
      "Created Parental Gate features alongside a dashboard to log child vocabulary scores and review lists."
    ],
    gallery: [
      "/hobby and app/find-corgi/qr-code.png",
      "/hobby and app/find-corgi/Screenshot 2026-07-14 120127.png",
      "/hobby and app/find-corgi/Screenshot 2026-07-14 120249.png"
    ]
  },
  {
    slug: "culinary-wheel",
    title: "Whatever, anything is fine - Random Food Picker",
    category: "Hobby & App",
    description:
      "A React-based interactive random food selection tool ('วันนี้กินอะไรดี') featuring a spin wheel and custom options to solve daily food decision fatigue.",
    image: "/hobby and app/what-to-eat/picker-cover.png",
    tags: ["React", "Vite", "Tailwind CSS", "Decision Maker", "HTML5 Canvas"],
    video: "https://youtu.be/v3mo-_dgsYk",
    videoAspect: "16:9",
    longDescription:
      "This application, titled 'Whatever, anything is fine' (วันนี้กินอะไรดี / อะไรก็ได้), is an interactive random food picker built as a lighthearted utility tool to solve daily dining decision fatigue. It features a customizable, visually engaging spinning wheel. Users can modify choices, add custom dishes, adjust weighting/probabilities, spin the wheel with responsive animations, and get random suggestions. The application is built using Vite and React, running in a containerized environment deployed on Google Cloud Run.",
    details: [
      { label: "App Link", value: "https://culinary-wheel-588331211644.asia-southeast1.run.app/" },
      { label: "Role", value: "Solo Creator & Developer" },
      { label: "Platforms", value: "React, Vite, HTML5 Canvas, Tailwind CSS" },
      { label: "Deployment", value: "Google Cloud Run" },
      { label: "Year", value: "2026" }
    ],
    results: [
      "Provides a smooth, canvas-rendered spinning wheel animation with inertia physics.",
      "Supports adding, editing, and disabling specific food items dynamically.",
      "Deploys in a serverless, highly-available container on Google Cloud Run.",
      "Includes a clean dark-mode UI with high-contrast elements suitable for quick mobile viewing."
    ]
  },
  {
    slug: "the-aetherium-void",
    title: "AI Short Movie: The Aetherium Void",
    category: "Hobby & App",
    description:
      "An AI-generated sci-fi short film compiling cinematic AI renders, deep space visual effects, and a generated synthesized audio track.",
    image: "/hobby and app/ai-short-movie/cover.png",
    tags: ["AI Movie", "Visual Effects", "Sci-Fi", "Stable Diffusion", "Midjourney"],
    video: "https://youtu.be/8S5_8Vlwyu0",
    videoAspect: "9:16",
    longDescription:
      "The Aetherium Void is an AI-generated sci-fi short film that showcases the fusion of cognitive artificial intelligence, neural rendering models, and cinematic audio production. The film compiles highly-detailed space visuals, futuristic ship models, and celestial portal animations into a fluid sci-fi narrative. Generative video tools were utilized to animate scenes from text prompts, alongside AI audio synthesis for the ambient background track.",
    details: [
      { label: "Role", value: "Director & AI Prompt Architect" },
      { label: "Platforms", value: "Stable Diffusion, Midjourney, Runway Gen-2" },
      { label: "VFX & Audio", value: "Generative AI Video, Synthesized Audio" },
      { label: "Year", value: "2026" }
    ],
    results: [
      "Generates deep space visual renders and particle flows utilizing state-of-the-art diffusion models.",
      "Integrates AI video sequences with sound synchronization.",
      "Achieved cinematic quality and narrative flow without traditional CAD or rendering farms."
    ]
  }
];

export const experience = [
  {
    role: "IoT Presale Engineer",
    company: "Material Automation (Thailand) Co., Ltd. (CANON)",
    period: "August 2020 - Present",
    points: [
      "Gather customer requirements, define IoT solutions, and support technical proposals with demos and feasibility analysis.",
      "Connect PLCs, web servers, MQTT, OPC UA, REST APIs, ODBC, TCP/IP, and UDP data sources to IoT platforms.",
      "Develop ThingWorx dashboards, auto-created remote things, automatic tag binding, and training material for deployment."
    ]
  },
  {
    role: "Automation Engineer",
    company: "Mas Automation Co., Ltd.",
    period: "June 2019 - August 2020",
    points: [
      "Designed electrical diagrams and PLC/HMI programs for machine automation and robot systems.",
      "Supported onsite installation, wiring, robot teaching, troubleshooting, and customer service."
    ]
  },
  {
    role: "Senior Electrical Technician",
    company: "Robert Bosch Automotive Technologies (Thailand) Co., Ltd.",
    period: "March 2018 - August 2018",
    points: [
      "Supported facility and utility systems including chillers, cooling towers, AHU, FCU, compressors, pumps, and electrical systems.",
      "Created SAP WBS items, preventive maintenance plans, check sheets, and IATF 16949 support documentation."
    ]
  }
];

export const certifications = [
  {
    name: "AI Foundations",
    issuer: "OpenAI Academy",
    recipient: "Newz Ang",
    date: "June 27, 2026",
    file: "/certificates/certificate-paopje7lgy.pdf"
  },
  {
    name: "Introduction to agent skills",
    issuer: "Anthropic",
    recipient: "Pattapon Thongnak",
    date: "June 26, 2026 (Est.)",
    file: "/certificates/certificate-74f6iq6iv8rw-1782537045.pdf"
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    recipient: "Pattapon Thongnak",
    date: "June 26, 2026 (Est.)",
    file: "/certificates/certificate-hh2eirso76cz-1782533089.pdf"
  },
  {
    name: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
    issuer: "AWS Training & Certification",
    recipient: "Pattapon Thongnak",
    date: "June 25, 2026",
    file: "/certificates/89b2629f-2fbe-44f5-880d-8dfd3bf91323.pdf"
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    recipient: "Pattapon Thongnak",
    date: "June 13, 2026 (Est.)",
    file: "/certificates/certificate-qjxwn52nbuoo-1781416892.pdf"
  },
  {
    name: "Mastering the Onboarding Customer Conversation",
    issuer: "PTC Field Academy",
    recipient: "pattapon@mat.co.th",
    date: "1/20/2025",
    file: "/certificates/1005_4_60176_1737349145_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Compelling Events",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "1/20/2025",
    file: "/certificates/627_4_60176_1737355145_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Engineering Domain",
    issuer: "PTC Field Academy",
    recipient: "pattapon@mat.co.th",
    date: "1/20/2025",
    file: "/certificates/630_4_60176_1737343589_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Accelerating Digital Transformation with PTC",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/17/2024",
    file: "/certificates/710_4_60176_1721203090_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Engaging PTC Partner Resources",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/120_4_60176_1720699303_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Value Management",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/1268_4_60176_1720695348_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Value Roadmap Overview",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/1273_4_60176_1720685852_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "PTC Sales Process",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/45_4_60176_1720702295_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Introduction to the VCoE for Partners",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/549_4_60176_1720695596_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Partner Portal Overview",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/696_4_60176_1720698512_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Manufacturing Domain",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/11/2024",
    file: "/certificates/857_4_60176_1720682449_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Demo Best Practices",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/1261_4_60176_1720531459_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Command of the Message (CoM)",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/21_4_60176_1720511264_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Qualification with MEDDICC",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/22_4_60176_1720511235_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Objection Handling",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/615_4_60176_1720520839_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "SCP Solutions Basics",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/63_4_60176_1720515646_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "SCO Solutions Basics",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/9/2024",
    file: "/certificates/888_4_60176_1720517292_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "ThingWorx Basics",
    issuer: "PTC Field Academy",
    recipient: "Pattapon Thongnak",
    date: "7/8/2024",
    file: "/certificates/62_4_60176_1720414016_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "Competitive Selling",
    issuer: "PTC Field Academy",
    recipient: "pattapon@mat.co.th",
    date: "7/5/2024",
    file: "/certificates/125_4_60176_1720160668_PTC Field Academy Certificate - Self Paced Training.pdf"
  },
  {
    name: "ThingWorx Technical Essentials (Self-Paced)",
    issuer: "PTC Field Academy",
    recipient: "pattapon@mat.co.th",
    date: "5/7/2024",
    file: "/certificates/949_3_60176_1715079547_Field Academy Certificate of Completion - Self Paced Training.pdf"
  },
  {
    name: "ThingWorx Associate Certification Exam 2023",
    issuer: "PTC University",
    recipient: "pattapon@mat.co.th",
    date: "Sep 7, 2023",
    file: "/certificates/PTC_University_Certificate_ThingWorx_Associate_Certification_Exam_2023.pdf"
  },
  {
    name: "ThingWorx: Fundamentals of Creating a Mashup",
    issuer: "PTC University",
    recipient: "Pattapon Thongnak",
    date: "2/21/2022",
    file: "/certificates/60_5_200178_1645462981_PTC University Course Completion.pdf"
  },
  {
    name: "ThingWorx: Basics of Mashup Builder",
    issuer: "PTC University",
    recipient: "Pattapon Thongnak",
    date: "11/17/21",
    file: "/certificates/232_5_200178_1637136020_PTC University Course Completion.pdf"
  },
  {
    name: "ThingWorx: Basics of the Edge Connectivity Development Process",
    issuer: "PTC University",
    recipient: "Pattapon Thongnak",
    date: "11/17/21",
    file: "/certificates/73_5_200178_1637143959_PTC University Course Completion.pdf"
  },
  {
    name: "ThingWorx: Basics of Modeling",
    issuer: "PTC University",
    recipient: "Pattapon Thongnak",
    date: "6/1/21",
    file: "/certificates/86_5_200178_1622550088_PTC University Course Completion.pdf"
  },
  {
    name: "ThingWorx: Basics of the ThingWorx Composer",
    issuer: "PTC University",
    recipient: "pattapon@mat.co.th",
    date: "4/23/21",
    file: "/certificates/83_5_200178_1619157655_PTC University Course Completion.pdf"
  },
  {
    name: "ThingWorx: Basics of the ThingWorx Development Process",
    issuer: "PTC University",
    recipient: "pattapon@mat.co.th",
    date: "4/21/21",
    file: "/certificates/82_5_200178_1618996726_PTC University Course Completion.pdf"
  },
  {
    name: "Basic PLC software GX-Developer",
    issuer: "Mitsubishi Electric",
    recipient: "Pattapon Thongnak",
    date: "N/A",
    file: ""
  },
  {
    name: "Safety for Electrical Works",
    issuer: "Department of Labour Protection and Welfare",
    recipient: "Pattapon Thongnak",
    date: "N/A",
    file: ""
  }
];
