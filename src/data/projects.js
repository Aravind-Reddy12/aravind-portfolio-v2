export const projects = [
  {
    id: "forgeai",
    color: "#00F5D4",
    title: "ForgeAI — AI Data Engineering Platform",
    description:
      "Engineered core modules of an AI-first data platform — built a multi-concurrent SSE streaming architecture, cut initial load time by ~60% with lazy loading, and boosted search speed by 70% by replacing client-side filtering with backend API integration.",
    role: "Software Development Engineer @ Modak Analytics",
    techStack: ["Vue 3", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Redis", "SSE", "REST APIs"],
    highlights: [
      "~60% reduction in initial load time — introduced lazy loading and pagination for data-heavy conversation history views",
      "70% faster search and 30% more accurate results by replacing client-side filtering with backend search API integration",
      "Multi-concurrent SSE streaming architecture via a custom composable with AbortController cancellation — enables parallel AI workflows, zero dangling connections",
      "Silent JWT refresh interception in the core API client + request cancellation on logout — no session disruptions, no orphaned callbacks",
      "100% secure secret storage — closed a security gap by adding encrypted file-content secret support across all secret types",
      "Role-based read-only access enforced at both API and UI layers, maintaining permission boundaries across all shared resources",
      "Multi-filter UI with full create/edit/duplicate lifecycle; extracted shared flow into reusable modal — eliminated duplication across modules",
    ],
    type: "professional",
  },
  {
    id: "nabu",
    color: "#9D8DF1",
    title: "Modak Nabu — Pipeline Orchestration Platform",
    description:
      "Built the visual pipeline builder and execution monitoring UI for an enterprise orchestration platform — 20+ draggable node types, real-time status dashboards, and a 30% CSS bundle reduction from a full Tailwind migration.",
    role: "Frontend Engineer @ Modak Analytics",
    techStack: ["Vue 2", "Vue 3", "Vuex", "Go.js", "Tailwind CSS", "View Design"],
    highlights: [
      "20+ configurable pipeline node types (sources, destinations, executors, REST API nodes) integrating with S3, JDBC, Hive, Salesforce, and 15+ enterprise systems",
      "Drag-and-drop graph interface via Go.js — users visually construct pipelines through node placement and live connection rendering",
      "Monitoring dashboards surfacing real-time execution status, data transfer volumes, and historical job runs across hundreds of concurrent pipelines",
      "30% CSS bundle size reduction by implementing Tailwind CSS with best-practice configuration",
      "Reusable form components to cut dependency on external libraries, improving design consistency and dev velocity on new features",
    ],
    type: "professional",
  },
  {
    id: "smart-meeting",
    color: "#FF6B6B",
    title: "Smart Meeting Notes Platform",
    description:
      "Turns hour-long recordings into structured summaries with auto-extracted action items. Built the full stack: async audio processing queue, secure JWT auth system, and a normalized PostgreSQL schema — no third-party AI wrapper, just architecture.",
    techStack: ["React", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    highlights: [
      "Audio → transcript → summary → action items pipeline, fully automated end-to-end",
      "Async processing via Redis + BullMQ so the UI never blocks on long transcriptions",
      "JWT auth with refresh token rotation and role-based access control",
      "Fully normalized PostgreSQL schema designed for multi-user team workspaces",
    ],
    type: "personal",
    github: "https://github.com/Aravind-Reddy12",
  },
  {
    id: "streetguard",
    color: "#FFC247",
    title: "StreetGuard — Urban Issue Reporting",
    description:
      "Civic tech platform where citizens report potholes, broken streetlights, and infrastructure issues — with photo uploads, GPS tagging, and a live map. Built the complete lifecycle from report creation through resolution tracking.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Mapbox", "Cloudinary"],
    highlights: [
      "Live Mapbox map showing every reported issue by type, urgency, and status",
      "Full issue lifecycle: reported → assigned → in-progress → resolved, with history",
      "Image uploads optimized via Cloudinary CDN with automatic compression",
      "Urgency rating system with filtering so high-priority issues surface first",
    ],
    type: "personal",
    github: "https://github.com/Aravind-Reddy12/StreetGuard",
  },
  {
    id: "portfolio-canvas",
    color: "#00B4D8",
    title: "Interactive Canvas Portfolio",
    description:
      "A zero-dependency creative portfolio built entirely on raw HTML5 Canvas — custom rendering engine, physics-like motion, and multiple animated visual themes. Built to prove I understand what frameworks abstract away.",
    techStack: ["HTML5 Canvas", "JavaScript", "CSS"],
    highlights: [
      "Zero frameworks — hand-rolled rendering loop and animation engine from scratch",
      "Multiple interactive visual themes switchable at runtime without page reload",
      "Smooth 60fps motion using rAF with delta-time physics",
      "Demonstrates fundamentals: transforms, clipping, compositing, and event handling",
    ],
    type: "personal",
    github: "https://github.com/Aravind-Reddy12",
    live: "https://aravind-reddy12.github.io/aravind-portfolio/",
  },
];
