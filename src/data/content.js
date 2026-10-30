// All site content lives here so it is easy to update in one place.
// Everything below comes from the previous version of this portfolio.

export const links = {
  github: "https://github.com/xDanielleT",
  linkedin: "https://www.linkedin.com/in/danielle-turner680-/",
  codepen: "https://codepen.io/10Danii01/live/rNZPqNQ",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

// Filters shown above the project row. Client websites are live sites built for
// real organizations; personal projects are apps and experiments I made myself.
export const projectFilters = ["All", "Client Websites", "Personal Projects"];

// To show a screenshot, drop an image in public/images/projects/ and set
// `image: "images/projects/your-file.png"` on the project.
export const projects = [
  {
    title: "WeCodeKC Website",
    short: "WeCodeKC",
    image: "images/projects/wc.png",
    type: "Community · Education",
    category: "Client Websites",
    desc: "Collaborated on a professional services page for WeCode KC, and now serve as the primary maintainer of their web presence, including their secondary site, Kids Tech Day. I turn leadership requests into live site updates. I track coding requests on a Kanban board and perform site audits to keep sites up to date.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "GitHub"],
    demo: "https://www.wecodekc.org/services",
    accent: ["#4f46e5", "#06b6d4"],
  },
  {
    title: "Simply Trucking Co.",
    short: "Simply Trucking",
    image: "images/projects/st.png",
    type: "Business Website",
    category: "Client Websites",
    desc: "Redesigned an existing Squarespace website using native design tools and custom code. Transformed a limited, nonresponsive layout into a modern, mobile-friendly experience that better reflects the company's vision and improves overall usability.",
    tags: ["Squarespace", "Web Design", "Responsive Design"],
    demo: "https://www.simplytruckingco.com/",
    accent: ["#f97316", "#7c3aed"],
  },
  {
    title: "Power Angle Photography",
    short: "Power Angle Photos",
    image: "images/projects/pphotos.png",
    type: "Photography Website",
    category: "Client Websites",
    desc: "Designed and built a photography website from scratch using Showit, creating custom desktop and mobile layouts. Led the visual design while incorporating client feedback and gallery preferences. Implemented booking functionality, FAQs, and an integrated WordPress resources blog to showcase the photographer's work and help visitors connect.",
    tags: ["Showit", "WordPress", "Web Design", "Responsive Design"],
    demo: "https://poweranglephotos.com/",
    accent: ["#0ea5e9", "#a855f7"],
  },
  {
    title: "Airtime Basketball",
    short: "Airtime Basketball",
    image: "images/projects/ab.png",
    type: "Shopify Redesign",
    category: "Client Websites",
    desc: "Restructured key sections of an existing Shopify website using Liquid, HTML, CSS, JavaScript, and native Shopify features. Implemented client-provided mockups across the Home, About Us, Values, Prospectus Program, Athletes, and Partners pages. Updated navigation, multimedia content, and footer styling while refining responsive layouts within the assigned project scope.",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    demo: "https://www.airtimebasketball.com/",
    accent: ["#ef4444", "#6366f1"],
  },
  {
    title: "KC People's Fund Website",
    short: "KC People's Fund",
    image: "images/projects/kcpf.png",
    type: "Nonprofit Website",
    category: "Client Websites",
    desc: "Collaborated to design and build a full nonprofit website using WordPress and Bricks Builder responsive, accessible, and easy for the client to manage.",
    tags: ["WordPress", "Bricks Builder", "CSS", "JavaScript", "Wireframing"],
    demo: " https://wecodekc-showcase.vercel.app/site/index.html ",
    accent: ["#10b981", "#3b82f6"],
  },
  {
    title: "Real-Time Chat App",
    short: "Real-Time Chat",
    image: "images/projects/chat.png",
    type: "Personal · Web App",
    category: "Personal Projects",
    desc: "Full-stack chat application with real-time messaging, typing indicators, and chat history. Built with WebSockets and deployed live on Vercel + Render.",
    tags: ["React", "Vite", "Node.js", "Socket.io", "Vercel"],
    github: "https://github.com/xDanielleT/chat-app",
    demo: "https://chat-app-alpha-virid-53.vercel.app/",
    accent: ["#6366f1", "#ec4899"],
  },
  {
    title: "jQuery Font Sampler",
    short: "Font Sampler",
    image: "images/projects/font.png",
    type: "Personal · Web App",
    category: "Personal Projects",
    desc: "Responsive web app letting users sample custom fonts with their own text, adjustable size, and color. Clean interface built to let the typography speak for itself.",
    tags: ["HTML", "jQuery"],
    github: "https://github.com/xDanielleT/font-sampler",
    demo: "https://xdaniellet.github.io/font-sampler/",
    accent: ["#f59e0b", "#8b5cf6"],
  },
  {
    title: "Memory Card Game",
    short: "Memory Card Game",
    image: "images/projects/card.png",
    type: "Personal · Browser Game",
    category: "Personal Projects",
    desc: "A clean memory card matching game built with vanilla HTML, CSS, and JavaScript. Simple premise, satisfying to play.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/xDanielleT/memory-card?tab=readme-ov-file",
    demo: "https://xdaniellet.github.io/memory-card/",
    accent: ["#d946ef", "#4f46e5"],
  },
  {
    title: "CodePen Collection",
    short: "CodePen Collection",
    image: "images/projects/cc.png",
    type: "Personal · Experiments",
    category: "Personal Projects",
    desc: "A growing collection of front-end experiments responsive layouts, micro-interactions, and creative CSS. My lab bench for new ideas.",
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
  "Vercel", "WordPress", "Squarespace", "Node.js", "PHP", "Socket.io", "Figma", "Power Automate",
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
  "I'm Danielle, frontend developer specializing in React, Tailwind CSS, and responsive design. I thrive in collaborative workflows and love building things that are precise, when it counts, beautiful.";
