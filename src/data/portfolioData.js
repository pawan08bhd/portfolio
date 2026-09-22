export const PERSONAL_INFO = {
  name: "Pawan Raghuwanshi",
  headline: "Software Engineer | Full-Stack Developer",
  supportingText: "I build scalable web applications and practical software solutions using modern frontend, backend, database, and real-time technologies.",
  email: "pawanraghuwanshi16@gmail.com",
  phone: "+91 6263215572",
  rawPhone: "6263215572",
  location: "Indore, India",
  education: {
    institution: "Shri G.S. Institute of Technology and Science (SGSITS), Indore",
    degree: "Bachelor of Engineering in Electrical Engineering",
    period: "2023 – 2027 (Expected)",
    highlights: "Strong foundation in Computer Science fundamentals: OOP, DBMS, OS, Computer Networks & System Design"
  },
  links: {
    github: "https://github.com/pawan08bhd",
    linkedin: "https://www.linkedin.com/in/pawan-raghuwanshi-18275728b",
    leetcode: "https://leetcode.com/u/pawanraghuwanshi16/",
    resume: "/Pawan_Raghuwanshi_Resume.pdf",
    certificate: "/Certificate_RasayanFlow.pdf"
  },
  heroBadges: [
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Socket.IO"
  ]
};

export const PROJECTS_DATA = [
  {
    id: "rasayanflow",
    isFlagship: true,
    title: "RasayanFlow",
    subtitle: "Full-Stack Laboratory Chemical Inventory & Request Management System",
    shortDescription: "A full-stack laboratory chemical inventory and request management system developed for the Department of Pharmaceutical Studies, SGSITS Indore. The system manages chemical inventory, experiments, borrowing requests, role-based access, and real-time activity tracking.",
    problem: "University pharmaceutical and chemistry laboratories previously operated on disjointed paper registers and scattered spreadsheets. This caused inventory discrepancies, delayed student experiment requisition approvals, zero traceability for hazardous or controlled chemicals, and accidental stockouts of critical reagents.",
    solution: "Engineered a centralised, fault-tolerant laboratory operating system with 4 distinct role-based portals (Super Admin, Lab Admin, Store Admin, Student). Built an event-driven synchronization engine with Socket.IO for zero-polling real-time requisition approvals, automated low-stock warnings, and seamless micro-enrichment with PubChem & PubMed APIs.",
    liveDemo: "https://rasayan-flow2-0.vercel.app/",
    github: "https://github.com/pawan08bhd",
    logoImage: "/RasayanFlow_logo.png",
    screenshotImage: "/rasayanflow_ui.jpg",
    stats: [
      { label: "Active Users Served", value: "2,000+" },
      { label: "Chemicals Tracked", value: "300+" },
      { label: "Engineering Team Led", value: "4 Engineers" },
      { label: "Status", value: "Adopted in Dept." }
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT Authentication",
      "PubChem API",
      "PubMed API"
    ],
    architecture: {
      frontend: "React + Vite + Tailwind CSS (Responsive Client & Role Dashboards)",
      backend: "Node.js + Express.js + RESTful Services + Socket.IO Event Engine",
      database: "MongoDB (Optimized query-level indexing across 9 schema collections)",
      security: "JWT Authentication, Role-Based Access Control (RBAC), Helmet, Rate Limiting, CORS",
      integrations: "PubChem API (automatic CAS & molecular structure fill) + PubMed API (literature abstract retrieval)"
    },
    userRoles: [
      {
        role: "Super Admin",
        badge: "System Governance",
        description: "Full system administration, user approval pipeline, laboratory allocation, and administrative account provisioning."
      },
      {
        role: "Lab Admin",
        badge: "Lab Operations",
        description: "Lab-level chemical inventory control, experiment syllabus management, and direct requisition approvals."
      },
      {
        role: "Store Admin",
        badge: "Central Warehouse",
        description: "Central store inventory oversight, department-wide batch allotments, and bulk requisition clearance."
      },
      {
        role: "Student",
        badge: "Research & Academic",
        description: "Multi-lab chemical catalog search, experiment slot requests, borrowing tracking, and historical usage logs."
      }
    ],
    features: [
      "Chemical inventory & multi-lab catalog management with CAS numbers",
      "Interactive experiment syllabus management & requisition approvals",
      "Event-driven real-time updates via Socket.IO without manual polling",
      "Four-tier Role-Based Access Control (RBAC) with JWT auth & Express middleware",
      "Automated low-inventory alerts and auto-calculated replenishment triggers",
      "PubChem API auto-fill for chemical formula, molecular weight, and safety GHS",
      "PubMed API integration for in-app chemical research abstract lookup",
      "Audit-trail activity logging for chemical requisitions and administrative approvals",
      "Centralized error handling, input validation, and rate-limiting security"
    ],
    outcome: "Adopted by the Department of Pharmaceutical Studies at SGSITS for practical lab sessions and departmental inventory management. Validated through an official internship certificate issued by Dr. Omprakash Tanwar (Former Oxford Fellow & Assistant Professor)."
  },
  {
    id: "promptdocs",
    isFlagship: false,
    title: "PromptDocs",
    subtitle: "AI Documentation & Interactive Prompt Engineering Platform",
    shortDescription: "An AI-powered documentation platform and gamified learning environment designed to help developers master prompt engineering and manage technical documentation efficiently.",
    problem: "Engineering teams and AI practitioners lack structured, interactive environments to document prompt templates, benchmark temperature/token parameters, and test few-shot strategies with live LLM feedback.",
    solution: "Designed and built an interactive web platform featuring tutorial trees, parameter tuning playgrounds, code snippet extraction, and dynamic prompt benchmarking workflows.",
    liveDemo: "https://promptdocs01.netlify.app/",
    github: "https://github.com/pawan08bhd/PromptDocs.git",
    screenshotImage: "/promptdocs_ui.jpg",
    stats: [
      { label: "Core Focus", value: "Prompt Engineering" },
      { label: "Interactive Tools", value: "Playground & Docs" },
      { label: "Architecture", value: "SPA Client" }
    ],
    techStack: [
      "React",
      "JavaScript (ES6+)",
      "Vite",
      "Tailwind CSS",
      "Interactive Playground",
      "Modern Web APIs"
    ],
    features: [
      "Interactive prompt engineering tutorial tree spanning few-shot, chain-of-thought, and system instructions",
      "Live AI prompt playground simulating temperature, max tokens, and model configurations",
      "Instant 1-click code copying for formatted JSON prompts and system snippets",
      "Fast client-side routing, minimal bundle footprint, and responsive UI layout",
      "Structured documentation hierarchy with search and filter capabilities"
    ],
    outcome: "Deployed publicly with an intuitive learning experience for engineers learning to operationalize LLM prompts."
  },
  {
    id: "blogify",
    isFlagship: false,
    title: "Blogify",
    subtitle: "Full-Stack Developer Blogging & Content Management Platform",
    shortDescription: "A scalable full-stack blogging application with server-side rendering, session authentication, and database-backed content workflows built on Node.js, Express, and MongoDB.",
    problem: "Blogging platforms frequently suffer from heavyweight client hydration and poor database index utilization, resulting in sluggish response times as article archives expand.",
    solution: "Architected a lean, service-oriented REST backend with server-rendered EJS templates, query-level MongoDB indexing across post and user collections, and modular MVC architecture.",
    liveDemo: null,
    github: "https://github.com/pawan08bhd/Blogify-app",
    screenshotImage: "/blogify_ui.jpg",
    stats: [
      { label: "Active Platform Users", value: "50+ Users" },
      { label: "Published Articles", value: "100+ Posts" },
      { label: "Backend Pattern", value: "MVC & Indexing" }
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ODM",
      "EJS",
      "JWT / Sessions",
      "Tailwind / Bootstrap"
    ],
    features: [
      "Secure user authentication and session management with JWT and hashed credentials",
      "Rich blog post creation, editing, tagging, and publication management",
      "Query-level indexing across post and user collections for high-throughput pagination",
      "Modular service-oriented backend structure with centralized error middleware",
      "Clean, mobile-responsive layout for reading and author management"
    ],
    outcome: "Built as a production-grade backend and SSR platform supporting 50+ users and 100+ published technical posts."
  }
];

export const SKILLS_DATA = [
  {
    category: "Languages",
    description: "Systems and scripting languages used for core logic and algorithms",
    skills: ["C++ (Primary)", "JavaScript", "SQL", "Python", "C"]
  },
  {
    category: "Backend & Systems",
    description: "Server architecture, distributed communication, and security",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Service-Oriented Architecture",
      "Socket.IO (Event-Driven)",
      "JWT Authentication",
      "RBAC (Role-Based Access Control)"
    ]
  },
  {
    category: "Databases & Persistence",
    description: "Data modeling, indexing strategies, and query performance",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "Query Optimization",
      "Database Indexing",
      "SQL (Relational Design)"
    ]
  },
  {
    category: "Frontend Development",
    description: "Component architecture, reactive state, and modern styling",
    skills: [
      "React.js",
      "Vite",
      "HTML5",
      "CSS3 / Vanilla CSS",
      "Tailwind CSS",
      "Responsive Layouts"
    ]
  },
  {
    category: "Core CS Fundamentals",
    description: "Theoretical engineering foundation applied to real systems",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Design (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "System Design & Scalability",
      "Complexity Analysis (Big-O)"
    ]
  },
  {
    category: "Developer Tools & Platforms",
    description: "Version control, testing, containerization, and build toolchains",
    skills: [
      "Git",
      "GitHub",
      "Postman (API Testing)",
      "Docker",
      "VS Code",
      "Agile / Scrum Workflow"
    ]
  }
];

export const PROBLEM_SOLVING_DATA = {
  headline: "300+ Algorithmic Problems Solved",
  subheadline: "Deep focus on asymptotic time/space optimization and scalable system design.",
  leetcodeProfile: "https://leetcode.com/u/pawanraghuwanshi16/",
  metrics: [
    { label: "Problems Solved", value: "300+" },
    { label: "Platforms", value: "LeetCode & GFG" },
    { label: "Flipkart GRId 8.0", value: "Top 1% Rank" },
    { label: "NPTEL DBMS Exam", value: "Top 5% Elite" }
  ],
  topics: [
    { name: "Arrays & Two Pointers", count: "50+ problems", tag: "Foundational" },
    { name: "Dynamic Programming", count: "35+ problems", tag: "Optimization" },
    { name: "Trees & Binary Search Trees", count: "40+ problems", tag: "Hierarchical" },
    { name: "Graphs (BFS/DFS/Dijkstra)", count: "30+ problems", tag: "Networks" },
    { name: "Stacks, Queues & Monotonic", count: "25+ problems", tag: "Linear" },
    { name: "Strings & Sliding Window", count: "30+ problems", tag: "Subarrays" },
    { name: "Linked Lists & Fast/Slow Pointers", count: "20+ problems", tag: "Pointers" },
    { name: "Recursion & Backtracking", count: "25+ problems", tag: "Search Space" },
    { name: "SQL & Query Optimization", count: "35+ queries", tag: "Relational" }
  ]
};

export const EXPERIENCE_DATA = [
  {
    role: "Technical Lead & Full-Stack Developer",
    organization: "SGSITS, Department of Pharmacy (Media Cell)",
    location: "Indore, India",
    period: "April 2026 – July 2026",
    type: "Internship · Full-Stack Software Engineering",
    verifiedCertificate: "/Certificate_RasayanFlow.pdf",
    supervisor: "Dr. Omprakash Tanwar (Former Oxford Fellow & Assistant Professor)",
    bullets: [
      "Led a cross-functional team of 4 engineers through the complete software lifecycle—system architecture, API design, database schema design, and deployment—to build ChemInventory / RasayanFlow.",
      "Engineered a distributed laboratory inventory and request-management platform adopted by the department, serving 2,000+ students and staff across practical pharmaceutical sessions.",
      "Designed a fault-tolerant Role-Based Access Control (RBAC) system with audit-trail logging across a catalogue of 300+ chemicals, prioritizing strict data consistency under concurrent multi-user load.",
      "Built a real-time event-driven monitoring module using Socket.IO with automated low-stock alerts and requisition triggers, eliminating polling overhead.",
      "Constructed modular RESTful APIs with centralized input validation, CORS security, and structured error handling in an agile delivery cycle."
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Flipkart GRId 8.0 — Top 1% Nationally",
    issuer: "Flipkart",
    category: "Engineering Competition",
    description: "Ranked in the top 1% of participants nationwide in Flipkart's flagship national-level engineering and algorithmic problem-solving competition."
  },
  {
    title: "NPTEL Database Management Systems — Elite + Top 5%",
    issuer: "IIT Kharagpur",
    category: "Academic Certification",
    description: "Earned Elite certificate ranking in the Top 5% nationally; demonstrated in-depth knowledge of relational databases, query optimization, indexing, and ACID transactions."
  },
  {
    title: "McKinsey Forward Program Fellow",
    issuer: "McKinsey & Company",
    category: "Professional Leadership",
    description: "Selected fellow for structured problem-solving, analytical synthesis, and digital business thinking training in complex, ambiguously-defined environments."
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    category: "Full-Stack Development",
    description: "Comprehensive project-based curriculum covering modern HTML5/CSS3, JavaScript (ES6+), React, Node.js, Express, and MongoDB."
  },
  {
    title: "Shopify Partner Academy",
    issuer: "Shopify",
    category: "Theme Development",
    description: "Certified in Shopify Theme Development, liquid templating, and performant web architecture."
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    category: "Design & Usability",
    description: "Trained in user-centered design, wireframing, usability heuristics, and accessible developer interfaces."
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    category: "Web Standards",
    description: "Validated mastery of semantic HTML, responsive web design principles, CSS Flexbox, and CSS Grid."
  }
];

export const GITHUB_REPOS = [
  {
    name: "RasayanFlow",
    description: "Flagship multi-role laboratory inventory and request management system with real-time Socket.IO synchronization and PubChem/PubMed integrations.",
    language: "JavaScript / React",
    stars: 5,
    forks: 2,
    url: "https://github.com/pawan08bhd",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"]
  },
  {
    name: "PromptDocs",
    description: "Interactive gamified platform for mastering prompt engineering through tutorials, parameter playgrounds, and comprehensive documentation.",
    language: "JavaScript",
    stars: 3,
    forks: 1,
    url: "https://github.com/pawan08bhd/PromptDocs.git",
    tags: ["React", "Vite", "AI", "Tailwind CSS"]
  },
  {
    name: "Blogify-app",
    description: "Full-stack blogging platform with server-side rendering, session authentication, and query-level indexing across MongoDB collections.",
    language: "EJS / Node.js",
    stars: 4,
    forks: 1,
    url: "https://github.com/pawan08bhd/Blogify-app",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "JWT"]
  },
  {
    name: "Chat-app",
    description: "Real-time chat application backend engineered using WebSockets and Socket.IO for low-latency bi-directional messaging.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/pawan08bhd/Chat-app",
    tags: ["Socket.IO", "Node.js", "Real-Time"]
  },
  {
    name: "Scalable-Authentication-System",
    description: "Robust authentication and authorization micro-architecture implementing JWT, refresh tokens, role-based access control, and password hashing.",
    language: "JavaScript",
    stars: 3,
    forks: 0,
    url: "https://github.com/pawan08bhd/Scalable-Authentication-System",
    tags: ["JWT", "Security", "RBAC", "Express"]
  },
  {
    name: "short-url-nodejs",
    description: "URL shortening microservice featuring fast hash redirection, visit analytics logging, and persistent MongoDB storage.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/pawan08bhd/short-url-nodejs",
    tags: ["Node.js", "Express", "MongoDB", "REST"]
  }
];
