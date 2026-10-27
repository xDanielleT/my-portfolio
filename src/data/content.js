// All site content lives here so it is easy to update in one place.
// Everything below comes from the previous version of this portfolio.

export const links = {
  github: "https://github.com/xDanielleT",
  linkedin: "https://www.linkedin.com/in/danielle-turner680-/",
  codepen: "https://codepen.io/10Danii01/live/rNZPqNQ",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

// Filters shown above the project row. Only categories that have projects.
export const projectFilters = ["All", "Websites", "Web Apps", "Creative"];

// To show a screenshot, drop an image in public/images/projects/ and set
// `image: "images/projects/your-file.png"` on the project.
export const projects = [
  {
    title: "WeCode KC Services Page",
    short: "WeCode KC",
    type: "Community · Education",
    category: "Websites",
    desc: "Collaborated on a professional services page for WeCode KC — dynamic, responsive, and built with a user experience that earns a second visit.",
    tags: ["React", "Tailwind CSS", "HTML"],
    demo: "https://www.wecodekc.org/services",
    accent: ["#4f46e5", "#06b6d4"],
  },
  {
    title: "Simply Trucking Co.",
    short: "Simply Trucking",
    type: "Business Website",
    category: "Websites",
    desc: "Designed and built a clean, responsive business website for a trucking company using Squarespace — handling layout, branding, and content so the client has a polished presence that's easy to maintain.",
    tags: ["Squarespace", "Web Design", "Responsive Design"],
    demo: "https://www.simplytruckingco.com/",
    accent: ["#f97316", "#7c3aed"],
  },
  {
    title: "Power Angle Photography",
    short: "Power Angle Photos",
    type: "Photography Website",
    category: "Websites",
    desc: "Designed and built a responsive photography website in Showit — creating custom layouts, a streamlined booking experience, FAQs, and an integrated WordPress resources blog to showcase the photographer’s work and make it easy for clients to connect.",
    tags: ["Showit", "WordPress", "Web Design", "Responsive Design"],
    demo: "https://poweranglephotos.com/",
    accent: ["#0ea5e9", "#a855f7"],
  },
  {
    title: "Airtime Basketball",
    short: "Airtime Basketball",
    type: "Shopify Redesign",
    category: "Websites",
    desc: "Redesigned and restructured an existing Shopify site for a basketball organization — rebuilding navigation, creating and customizing page templates and sections, improving responsive layouts, and combining Shopify’s theme editor with Liquid, CSS, and JavaScript customization.",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    demo: "https://www.airtimebasketball.com/",
    accent: ["#ef4444", "#6366f1"],
  },
  {
    title: "KC People's Fund Website",
    short: "KC People's Fund",
    type: "Nonprofit Website",
    category: "Websites",
    desc: "Collaborated to design and build a full nonprofit website using WordPress and Bricks Builder — responsive, accessible, and easy for the client to manage.",
    tags: ["WordPress", "Bricks Builder", "CSS", "JavaScript"],
    demo: "https://kcpeoplesfund.org/",
    accent: ["#10b981", "#3b82f6"],
  },
  {
    title: "Real-Time Chat App",
    short: "Real-Time Chat",
    type: "Full-Stack Web App",
    category: "Web Apps",
    desc: "Full-stack chat application with real-time messaging, typing indicators, and chat history. Built with WebSockets and deployed live on Vercel + Render.",
    tags: ["React", "Vite", "Node.js", "Socket.io", "Vercel"],
    github: "https://github.com/xDanielleT/chat-app",
    demo: "https://chat-app-alpha-virid-53.vercel.app/",
    accent: ["#6366f1", "#ec4899"],
  },
  {
    title: "PHP Todo List",
    short: "PHP Todo List",
    type: "Web App",
    category: "Web Apps",
    desc: "PHP-based task manager using session storage — add, complete, and delete tasks without a database. Minimal, functional, no fuss.",
    tags: ["PHP", "HTML", "CSS"],
    github: "https://github.com/xDanielleT/PHP-Todo-List",
    accent: ["#8b5cf6", "#14b8a6"],
  },
  {
    title: "jQuery Font Sampler",
    short: "Font Sampler",
    type: "Web App",
    category: "Web Apps",
    desc: "Responsive web app letting users sample custom fonts with their own text, adjustable size, and color. Clean interface built to let the typography speak for itself.",
    tags: ["HTML", "jQuery"],
    github: "https://github.com/xDanielleT/font-sampler",
    demo: "https://xdaniellet.github.io/font-sampler/",
    accent: ["#f59e0b", "#8b5cf6"],
  },
  {
    title: "Memory Card Game",
    short: "Memory Card Game",
    type: "Browser Game",
    category: "Creative",
    desc: "A clean memory card matching game built with vanilla HTML, CSS, and JavaScript. Simple premise, satisfying to play.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/xDanielleT/memory-card?tab=readme-ov-file",
    demo: "https://xdaniellet.github.io/memory-card/",
    accent: ["#d946ef", "#4f46e5"],
  },
  {
    title: "CodePen Collection",
    short: "CodePen Collection",
    type: "Front-End Experiments",
    category: "Creative",
    desc: "A growing collection of front-end experiments — responsive layouts, micro-interactions, and creative CSS. My lab bench for new ideas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://codepen.io/10Danii01/live/rNZPqNQ",
    accent: ["#06b6d4", "#7c3aed"],
  },
];

// Featured in the "My Skills" card (icons are mapped in Playground.jsx).
export const featuredSkills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML / CSS",
  "Git",
];

export const allSkills = [
  "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML / CSS", "GitHub",
  "Responsive Design", "Git", "REST APIs", "Shopify", "Liquid", "Cloudinary",
  "Vercel", "WordPress", "Squarespace", "Node.js", "PHP", "Socket.io", "Figma",
];

export const exploring = {
  title: "Expanding into Cybersecurity",
  note: "Channeling a builder's eye for detail into breaking and defending systems.",
  topics: [
    "Network security",
    "Secure coding",
    "Threat analysis",
    "Linux fundamentals",
  ],
};

export const education = [
  { year: "2024", school: "Udacity", title: "Front-End Web Developer Nanodegree" },
  { year: "2024", school: "JCCC", title: "Full Stack Web Development Certificate" },
];

export const about =
  "I'm a frontend developer specializing in React, Tailwind CSS, and responsive design. I thrive in collaborative workflows and love building things that are precise, accessible, and — when it counts — beautiful.";
