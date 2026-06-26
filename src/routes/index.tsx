import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download, Mail, Github, Linkedin, ArrowRight, ExternalLink,
  Code2, Server, Database, Wrench, Award, Sparkles, Send,
  CheckCircle2, Brain, BookOpen, Mic, PenTool, Megaphone, Users, Drama,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellala Venkata Dhanush — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer building scalable web apps and AI-powered solutions with React, FastAPI, Python, and MongoDB." },
      { property: "og:title", content: "Bellala Venkata Dhanush — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Bellala Venkata Dhanush — Full Stack Developer specializing in React, FastAPI, Python, and MongoDB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { icon: Code2, label: "Frontend", value: "React.js, HTML, CSS, JS" },
  { icon: Server, label: "Backend", value: "FastAPI, Python, Node.js" },
  { icon: Database, label: "Database", value: "MongoDB, SQL" },
  { icon: Wrench, label: "Tools", value: "Git, GitHub, VS Code" },
];

const highlights = [
  "Full-stack development with React & FastAPI",
  "AI-powered application engineering",
  "Scalable backend & API design",
  "Clean, production-ready code",
];

const projects = [
  {
    no: "01",
    name: "Memora AI",
    badge: "Flagship Project",
    description:
      "AI-powered personal knowledge management platform designed to act as a user's second brain.",
    features: [
      "Intelligent semantic search & retrieval",
      "Note ingestion with AI summarization",
      "Context-aware question answering",
      "Personal knowledge graph linking",
    ],
    stack: ["React", "FastAPI", "Python", "MongoDB", "OpenAI"],
  },
  {
    no: "02",
    name: "Online Book Store",
    description: "Full-stack bookstore application built with modern web technologies.",
    features: [
      "User authentication & authorization",
      "Browse, search & filter books",
      "Shopping cart & order management",
      "Responsive cross-device UI",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const certificates = [
  { title: "Node.js", subtitle: "Backend Development Fundamentals", icon: Server },
  { title: "JavaScript Essentials & Dynamic Web Apps", subtitle: "Modern JavaScript Development", icon: Code2 },
  { title: "Programming Foundations with Python", subtitle: "Core Python Programming", icon: Brain },
  { title: "Introduction to Databases", subtitle: "Database Design & Querying", icon: Database },
  { title: "Responsive Web Design & Layout", subtitle: "Modern Responsive UI Development", icon: Sparkles },
];

const timeline = [
  {
    year: "2026",
    title: "Building Memora AI",
    desc: "Developing an AI-powered personal knowledge management platform with intelligent search and retrieval capabilities.",
  },
  {
    year: "2026",
    title: "Advanced Full Stack Development",
    desc: "Expanding expertise in scalable system design, backend architecture, and modern frontend engineering.",
  },
  {
    year: "2025",
    title: "Built Online Book Store Application",
    desc: "Created a full-stack bookstore platform with authentication, database integration, and responsive UI.",
  },
  {
    year: "2024",
    title: "Started Software Development Journey",
    desc: "Began learning software engineering fundamentals, web development, and database systems.",
  },
];

const creativeSkills = [
  { icon: PenTool, title: "Story Writing", desc: "Crafting compelling narratives and structured storytelling." },
  { icon: Sparkles, title: "AI Content Creation", desc: "Producing AI-assisted visuals, text and multimedia content." },
  { icon: Megaphone, title: "Direction & Content Planning", desc: "Planning, directing and orchestrating creative projects end to end." },
  { icon: Users, title: "Communication Skills", desc: "Clear written and verbal communication across teams and audiences." },
  { icon: Drama, title: "Acting & Performance", desc: "On-camera presence, expressive delivery and confident performance." },
];

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow?: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
      {(eyebrow || title) && (
        <div className="mb-14 flex flex-col items-start gap-3">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-right" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            <span className="text-primary">D</span>HANUSH
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for Software Development Opportunities
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Bellala Venkata <span className="text-primary">Dhanush</span>
            </h1>
            <p className="font-mono text-base text-primary/90">Full Stack Developer</p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Building scalable full-stack applications and AI-powered solutions using React, FastAPI, Python, and MongoDB.
              Focused on developing modern web applications, intelligent software solutions, and efficient backend systems
              that solve real-world problems.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.14 230 / 0.35), transparent 70%)" }}
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Developer workspace illustration with code editor, terminal and React, Python, FastAPI, MongoDB icons"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:border-primary/40 hover:bg-card"
              >
                <s.icon className="mb-3 h-5 w-5 text-primary" />
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 — About" title="About Me">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3">
            <p>
              I am a Full Stack Developer focused on building scalable web applications and AI-powered solutions
              using React.js, Python, FastAPI, and MongoDB.
            </p>
            <p>
              I enjoy transforming ideas into production-ready applications by combining modern frontend technologies
              with robust backend systems.
            </p>
            <p>
              My goal is to continuously improve my software engineering expertise while creating impactful digital
              products that solve real-world challenges.
            </p>
          </div>
          <ul className="space-y-3 md:col-span-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="02 — Projects" title="Selected Work">
        <div className="grid gap-8">
          {projects.map((p) => (
            <article
              key={p.no}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Project {p.no}
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                </div>
                {p.badge && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Sparkles className="h-3 w-3" /> {p.badge}
                  </span>
                )}
              </div>
              <p className="mt-4 max-w-3xl text-muted-foreground">{p.description}</p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Key Features
                  </div>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="03 — Credentials" title="Certificates">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.subtitle}</p>
              <div className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary/80">
                <Award className="h-3.5 w-3.5" /> Verified Certificate
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* JOURNEY / TIMELINE */}
      <Section id="journey" eyebrow="04 — Timeline" title="My Journey">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" aria-hidden />
          <ol className="space-y-12">
            {timeline.map((t, i) => (
              <li
                key={i}
                className={`relative grid gap-4 sm:grid-cols-2 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12 sm:text-left" : "sm:pr-12 sm:text-right"}`}>
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {t.year}
                  </span>
                </div>
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-2 -translate-x-1/2 sm:left-1/2">
                  <span className="block h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_oklch(0.78_0.14_230/0.2)]" />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* CREATIVE SKILLS */}
      <Section id="skills" eyebrow="05 — Beyond Code" title="Creative & Leadership Skills">
        <p className="-mt-8 mb-10 max-w-3xl text-muted-foreground">
          Beyond software development, I actively explore creative storytelling, podcast creation,
          AI content generation, and digital media production.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {creativeSkills.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 — Contact" title="Let's Connect">
        <p className="-mt-8 mb-12 max-w-2xl text-muted-foreground">
          Interested in collaborating, discussing opportunities, or building impactful software solutions.
        </p>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactRow
              icon={Mail}
              label="Email"
              value="bellaladhanush@gmail.com"
              href="mailto:bellaladhanush@gmail.com"
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="bellaladhanush123"
              href="https://github.com/bellaladhanush123"
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="in/dhanush-bellala"
              href="https://linkedin.com/in/dhanush-bellala"
            />
            <ContactRow
              icon={Mic}
              label="Phone"
              value="+91 93985 55377"
              href="tel:+919398555377"
            />
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              required
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-lg font-bold">
              <span className="text-primary">D</span>HANUSH
            </div>
            <p className="mt-2 text-sm text-foreground">Bellala Venkata Dhanush</p>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Building scalable web applications and AI-powered solutions.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex gap-3">
              <SocialIcon href="https://github.com/bellaladhanush123" icon={Github} label="GitHub" />
              <SocialIcon href="https://linkedin.com/in/dhanush-bellala" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="mailto:bellaladhanush@gmail.com" icon={Mail} label="Email" />
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Bellala Venkata Dhanush. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm text-foreground group-hover:text-primary">{value}</div>
      </div>
    </a>
  );
}

function Field({
  label, value, onChange, type = "text", textarea, required,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; textarea?: boolean; required?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60";
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {textarea ? (
        <textarea
          required={required}
          rows={5}
          value={value}
          maxLength={2000}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          maxLength={200}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
