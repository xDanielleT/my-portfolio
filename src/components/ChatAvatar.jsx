import { useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { about, allSkills, education, exploring, links, projects } from "../data/content";

const AVATAR = "images/projects/avatar.png";

const suggestions = [
  "What do you do?",
  "Show me your projects",
  "What are your skills?",
  "What are you learning?",
  "How can I contact you?",
];

const listNames = (items) => items.map((p) => p.short || p.title).join(", ");

// Every answer is built from src/data/content.js, so the avatar only ever
// says what the site already says.
const answers = {
  about: () => ({
    text: `${about} Ask me about my projects, skills, or what I'm learning next!`,
  }),
  projects: () => {
    const client = projects.filter((p) => p.category === "Client Websites");
    const personal = projects.filter((p) => p.category !== "Client Websites");
    return {
      text: `Client websites: ${listNames(client)}. Personal projects: ${listNames(personal)}. Ask about any of them by name, or browse them all below.`,
      actions: [{ label: "Browse projects", href: "#projects" }],
    };
  },
  skills: () => ({
    text: `I work with ${allSkills.join(", ")}.`,
    actions: [{ label: "See my skills", href: "#skills" }],
  }),
  learning: () => ({
    text: `${exploring.title}. ${exploring.note} Right now I'm studying ${exploring.topics.join(", ").toLowerCase()}.`,
  }),
  education: () => ({
    text: education.map((e) => `${e.year}, ${e.school}: ${e.title}`).join(". ") + ".",
  }),
  contact: () => ({
    text: "The best way to reach me is the contact form, or connect with me on LinkedIn or GitHub.",
    actions: [
      { label: "Contact form", href: "#contact" },
      { label: "LinkedIn", href: links.linkedin },
      { label: "GitHub", href: links.github },
    ],
  }),
  fallback: () => ({
    text: "I'm not sure about that one, but I can tell you about my projects, skills, education, or what I'm learning. For anything else, send me a message!",
    actions: [{ label: "Contact form", href: "#contact" }],
  }),
};

const topics = [
  { key: "contact", words: ["contact", "hire", "reach", "email", "linkedin", "github", "message", "connect"] },
  { key: "learning", words: ["learn", "cyber", "security", "exploring", "studying", "next"] },
  { key: "education", words: ["school", "education", "degree", "certificate", "udacity", "jccc", "study"] },
  { key: "skills", words: ["skill", "tech", "stack", "tool", "language", "react", "framework"] },
  { key: "projects", words: ["project", "work", "portfolio", "built", "build", "client", "website", "site"] },
  { key: "about", words: ["who", "about", "yourself", "you do", "hello", "hi", "hey"] },
];

const reply = (question) => {
  const q = question.toLowerCase();

  // A question naming a specific project gets that project's own description
  const project = projects.find((p) =>
    [p.short, p.title].some((name) => name && q.includes(name.toLowerCase().split(" ")[0]))
  );
  if (project) {
    const actions = [];
    if (project.demo) actions.push({ label: "Visit site", href: project.demo });
    if (project.github) actions.push({ label: "View code", href: project.github });
    return { text: project.desc, actions };
  }

  const topic = topics.find((t) => t.words.some((w) => q.includes(w)));
  return answers[topic ? topic.key : "fallback"]();
};

const greeting = {
  from: "bot",
  text: "Hi, I'm Dani! 👋 I'm a frontend developer. Ask me anything about my work, or tap a question below.",
};

export const ChatAvatar = () => {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Wave hello once, a few seconds after the page loads
  useEffect(() => {
        // Only on larger screens: on phones the bubble covers too much of the page
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const t = setTimeout(() => setShowHint(true), 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = (question) => {
    const text = question.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", ...reply(text) }]);
      setTyping(false);
    }, 700);
  };

  const followLink = (href) => {
    if (href.startsWith("#")) setOpen(false);
  };

  return (
    <div className="chat-root">
      {open && (
        <section className="chat-panel" role="dialog" aria-label="Chat with Dani">
          <header className="chat-header">
            <img src={AVATAR} alt="" className="chat-avatar chat-avatar-lg" />
            <div className="min-w-0">
              <p className="font-display font-semibold text-[var(--navy)] leading-tight">Dani</p>
              <p className="text-[0.72rem] text-[var(--soft)]">Automated assistant · not a live chat</p>
            </div>
            <button className="circle-btn ml-auto shrink-0" onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </header>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`chat-row ${m.from}`}>
                {m.from === "bot" && <img src={AVATAR} alt="" className="chat-avatar" />}
                <div className="chat-bubble">
                  <p>{m.text}</p>
                  {m.actions?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.actions.map((a) => (
                        <a
                          key={a.href}
                          href={a.href}
                          className="chat-action"
                          onClick={() => followLink(a.href)}
                          {...(a.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {a.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat-row bot">
                <img src={AVATAR} alt="" className="chat-avatar" />
                <div className="chat-bubble chat-typing" aria-label="Dani is typing">
                  <i /><i /><i />
                </div>
              </div>
            )}
          </div>

          <div className="chat-suggestions">
            {suggestions.map((s) => (
              <button key={s} type="button" className="chat-chip" onClick={() => ask(s)} disabled={typing}>
                {s}
              </button>
            ))}
          </div>

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <label htmlFor="chat-question" className="sr-only">Ask Dani a question</label>
            <input
              id="chat-question"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something…"
              autoComplete="off"
            />
            <button type="submit" className="chat-send" aria-label="Send" disabled={!input.trim() || typing}>
              <FiSend />
            </button>
          </form>
        </section>
      )}

      {!open && showHint && (
        <div className="chat-hint">
          <button type="button" className="chat-hint-text" onClick={() => setOpen(true)}>
            Hi! Ask me about my work 👋
          </button>
          <button type="button" className="chat-hint-close" aria-label="Dismiss" onClick={() => setShowHint(false)}>
            <FiX />
          </button>
        </div>
      )}

      <button
        className={`chat-launcher ${open ? "is-open" : ""}`}
        onClick={() => {
          setOpen((o) => !o);
          setShowHint(false);
        }}
        aria-label={open ? "Close chat" : "Chat with Dani"}
        aria-expanded={open}
      >
        <img src={AVATAR} alt="" />
        
      </button>
    </div>
  );
};