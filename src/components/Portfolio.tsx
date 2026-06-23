import { useEffect, useState } from "react";
import { Mail, MapPin, Github, Twitter, Linkedin, Download, Code2, Smartphone, Globe, Database, ArrowRight, ExternalLink, Send, FileText, Eye, X } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import cvAsset from "@/assets/cv.pdf.asset.json";

const skills = [
  { name: "Kotlin", slug: "kotlin" },
  { name: "Android Studio", slug: "androidstudio" },
  { name: "Jetpack Compose", slug: "jetpackcompose" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "PHP", slug: "php" },
  { name: "Laravel", slug: "laravel" },
  { name: "MySQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "GitHub", slug: "github", color: "ffffff" },
];

const projects = [
  {
    name: "KDMP Mesuji Jaya",
    desc: "Sistem informasi web Koperasi Desa Merah Putih Mesuji Jaya. Manajemen anggota, transaksi, dan layanan koperasi digital.",
    tech: ["TypeScript", "React", "Tailwind"],
    href: "https://github.com/ahmadsodik4717/kdmp-mesuji-jaya",
    accent: "from-teal/30 to-transparent",
  },
  {
    name: "KopdesMJ Android",
    desc: "Aplikasi mobile koperasi desa berbasis Android. Mendukung pencatatan transaksi dan layanan anggota di lapangan.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    href: "https://github.com/ahmadsodik4717/KopdesMJ",
    accent: "from-cyan-400/30 to-transparent",
  },
  {
    name: "Sarpras",
    desc: "Aplikasi manajemen sarana & prasarana. Mempermudah inventaris dan pelaporan kerusakan fasilitas.",
    tech: ["Kotlin", "Android", "MVVM"],
    href: "https://github.com/ahmadsodik4717/sarpras",
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    name: "KhatApps",
    desc: "Aplikasi pembelajaran khat (kaligrafi Arab) interaktif untuk membantu pengguna mempelajari berbagai jenis khat.",
    tech: ["Kotlin", "Android", "Room"],
    href: "https://github.com/ahmadsodik4717/KhatApps",
    accent: "from-teal/30 to-transparent",
  },
  {
    name: "PPDB Dena Upakara",
    desc: "Sistem Penerimaan Peserta Didik Baru berbasis Android. Memudahkan proses pendaftaran calon siswa.",
    tech: ["Kotlin", "Android", "REST API"],
    href: "https://github.com/ahmadsodik4717/ppdb_dena_upakara",
    accent: "from-cyan-400/30 to-transparent",
  },
  {
    name: "MovieShof",
    desc: "Aplikasi katalog film yang menampilkan koleksi film populer dengan detail dan rating.",
    tech: ["Kotlin", "Retrofit", "TMDB API"],
    href: "https://github.com/ahmadsodik4717/MovieShof",
    accent: "from-emerald-400/30 to-transparent",
  },
];

const stats = [
  { value: "10+", label: "Public Repositories" },
  { value: "6", label: "Languages & Stacks" },
  { value: "3+", label: "Years Coding" },
];

const categories = [
  { icon: Smartphone, title: "Android Development", desc: "Native Kotlin & Jetpack Compose" },
  { icon: Globe, title: "Web Development", desc: "React, Next.js, TypeScript" },
  { icon: Database, title: "Backend & API", desc: "Node.js, Firebase, REST" },
  { icon: Code2, title: "Clean Code", desc: "MVVM, modular, testable" },
];

function useTyped(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 45 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Portfolio() {
  const typed = useTyped(["Android Developer", "Web Developer", "Full-Stack Engineer"]);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    if (!cvOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setCvOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [cvOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-center">
          {/* Profile card */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs rounded-[2rem] border border-teal/60 bg-surface/60 p-6 backdrop-blur-sm glow-teal">
              <div className="absolute -top-3 left-6 rounded-full bg-background px-3 py-0.5 font-mono text-[10px] tracking-widest text-teal">
                ./PROFILE
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-ring rounded-full" />
                  <img
                    src="https://avatars.githubusercontent.com/u/97650775?v=4"
                    alt="Ahmad Sodik"
                    className="h-24 w-24 rounded-full border-2 border-teal object-cover"
                  />
                </div>
                <h3 className="mt-4 font-mono text-lg text-teal">Ahmad Sodik</h3>
                <p className="font-mono text-[11px] text-muted-foreground">{"// full-stack developer"}</p>

                <ul className="mt-5 w-full space-y-2 text-left font-mono text-[11px] text-muted-foreground">
                  <li className="flex items-center gap-2"><Mail size={12} className="text-teal" /> ahmadsodik0105@gmail.com</li>
                  <li className="flex items-center gap-2"><MapPin size={12} className="text-teal" /> South Sumatra, ID</li>
                  <li className="flex items-center gap-2"><Github size={12} className="text-teal" /> ahmadsodik4717</li>
                </ul>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {["Kotlin", "React", "TS", "Node"].map((t) => (
                    <span key={t} className="rounded-full bg-teal/20 px-2 py-0.5 font-mono text-[10px] text-teal">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2 font-mono text-xs text-primary-foreground transition-transform hover:scale-105"
                >
                  <Download size={14} /> Hire Me
                </a>
                <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={() => setCvOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-teal/60 px-4 py-2 font-mono text-xs text-teal transition-all hover:bg-teal/10"
                  >
                    <Eye size={14} /> Preview CV
                  </button>
                  <a
                    href={cvAsset.url}
                    download="CV_Ahmad_Sodik.pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-teal/60 px-4 py-2 font-mono text-xs text-teal transition-all hover:bg-teal/10"
                  >
                    <FileText size={14} /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Center column - headline */}
          <Reveal delay={120}>
            <div>
              <p className="font-mono text-xs text-teal text-center lg:text-left">{"// hello world"}</p>
              <h1 className="mt-2 text-center font-mono text-5xl font-bold text-teal text-glow md:text-6xl lg:text-left">
                Developer
              </h1>
              <div className="mt-6 space-y-1 text-center lg:text-left">
                <p className="font-mono text-xs text-muted-foreground">&gt; greet()</p>
                <h2 className="font-mono text-4xl font-bold leading-tight md:text-5xl">
                  Hey, <br />
                  I&apos;m <span className="text-teal">Sodik</span>,
                </h2>
                <h2 className="font-mono text-3xl font-bold md:text-4xl">
                  {typed}
                  <span className="ml-1 inline-block h-8 w-[3px] bg-teal align-middle animate-blink" />
                </h2>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center font-mono text-sm leading-relaxed text-muted-foreground lg:mx-0 lg:text-left">
                Turning ideas into beautiful digital experiences — building Android &amp;
                web apps with clean architecture, thoughtful UI, and a love for the craft.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-teal bg-teal/10 px-6 py-3 font-mono text-sm text-teal transition-all hover:bg-teal hover:text-primary-foreground hover:glow-teal"
                >
                  Let&apos;s Talk <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-teal"
                >
                  View Work →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Stats card */}
          <Reveal delay={240}>
            <div className="mx-auto w-full max-w-[200px] space-y-3 rounded-[2rem] border border-border bg-surface/60 p-5 backdrop-blur-sm">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="font-mono text-3xl font-bold text-teal">{s.value}</span>
                  <span className="font-mono text-[10px] leading-tight text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <SectionHeading id="about" label="0" title="About Me" />
      <section className="relative pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="rounded-2xl border border-teal/40 bg-surface/40 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 font-mono text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2">~ /about-me.md</span>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-muted-foreground">
<span className="text-teal">Hello!</span>{"\n"}
My name is <span className="text-foreground">Ahmad Sodik</span>, a developer based in
South Sumatra, Indonesia. I build <span className="text-teal">Android apps</span> with
Kotlin &amp; Jetpack Compose, and modern <span className="text-teal">web apps</span> with
React, TypeScript &amp; Next.js.{"\n\n"}
I love crafting clean, maintainable code that solves real
problems — from cooperative management systems to learning
tools. When I&apos;m not coding, I&apos;m exploring new tech,
mentoring, and contributing to open-source.{"\n\n"}
<span className="text-teal">{"// always learning, always shipping."}</span>
              </pre>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-teal/60 hover:glow-teal"
                >
                  <c.icon className="mb-3 text-teal" size={26} />
                  <h4 className="font-mono text-sm font-semibold">{c.title}</h4>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <SectionHeading id="skills" label="01" title="Skills & Tools" sub="// the toolkit I use daily" />
      <section className="relative pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10">
            {skills.map((s, idx) => (
              <Reveal key={s.name} delay={idx * 40}>
                <div className="group flex w-20 flex-col items-center gap-2 sm:w-24">
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface/70 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-teal/60 group-hover:glow-teal sm:h-[72px] sm:w-[72px]"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${s.slug}${s.color ? `/${s.color}` : ""}`}
                      alt={s.name}
                      width={36}
                      height={36}
                      loading="lazy"
                      className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-center font-mono text-[11px] text-teal/90 transition-colors group-hover:text-teal sm:text-xs">
                    {s.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Marquee */}
          <div className="relative mt-16 overflow-hidden border-y border-border/60 py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
              {[...skills, ...skills].map((s, i) => (
                <span
                  key={`${s.name}-${i}`}
                  className="font-display text-xs font-semibold tracking-tight text-muted-foreground/40 sm:text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <SectionHeading id="projects" label="02" title="Works" sub="// selected projects from github" />
      <section className="relative pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 80}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-teal/60 hover:glow-teal`}
                >
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity group-hover:opacity-100`} />

                  <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                    <span>./{String(idx + 1).padStart(2, "0")}</span>
                    <ExternalLink size={14} className="text-teal opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h3 className="font-mono text-lg font-bold text-foreground transition-colors group-hover:text-teal">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-teal/40 px-2 py-0.5 font-mono text-[10px] text-teal">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/ahmadsodik4717"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal px-6 py-3 font-mono text-sm text-teal transition-all hover:bg-teal hover:text-primary-foreground hover:glow-teal"
            >
              <Github size={16} /> View All on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <SectionHeading id="contact" label="03" title="Contact" sub="// currently available for freelance work" />
      <section className="relative pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
                const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
                window.location.href = `mailto:ahmadsodik0105@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="rounded-2xl border border-teal/40 bg-surface/40 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/60 px-4 py-1.5 font-mono text-xs text-teal">
                <Send size={12} /> Send Me A Message
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" placeholder="John Doe" required />
                <Field label="Your email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="mt-5">
                <Field label="Your message" name="message" textarea placeholder="Tell me about your project..." required />
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal py-3 font-mono text-sm text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto sm:px-10"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
              <a href="mailto:ahmadsodik0105@gmail.com" className="flex items-center gap-2 hover:text-teal">
                <Mail size={14} /> ahmadsodik0105@gmail.com
              </a>
              <a href="https://github.com/ahmadsodik4717" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal">
                <Github size={14} /> GitHub
              </a>
              <a href="https://twitter.com/ahmadsodik4717" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal">
                <Twitter size={14} /> Twitter
              </a>
              <a href="https://www.linkedin.com/in/ahmadsodik4717" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Ahmad Sodik. All rights reserved.</span>
          <span>Crafted with <span className="text-teal">&lt;/&gt;</span> &amp; ☕ in South Sumatra</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  id,
  label,
  title,
  sub,
}: {
  id?: string;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div id={id} className="relative pt-10 pb-12 text-center scroll-mt-20">
      <p className="font-mono text-2xl text-teal">{label}</p>
      <div className="mx-auto my-3 h-12 w-px bg-teal/40" />
      <h2 className="font-mono text-4xl font-bold text-teal text-glow">
        <span className="relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 h-[2px] w-16 -translate-x-1/2 bg-teal" />
        </span>
      </h2>
      {sub && <p className="mt-6 font-mono text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b border-border py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-teal focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="font-mono text-[11px] text-teal">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={4} className={base} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} className={base} />
      )}
    </label>
  );
}
