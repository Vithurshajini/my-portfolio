import React, { useMemo, useState } from "react";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2,
  Download, ExternalLink, Github, GraduationCap, Mail, Menu, Send, Sparkles,
  X, Linkedin, MapPin, Terminal, Layers3, Copy, CheckCheck
} from "lucide-react";
import { profile, focusAreas, skillGroups, experiences, projects, education } from "./data";
import avatar from "./assets/profile-photo.png";

const navItems = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Experience", "experience"], ["Projects", "projects"], ["Contact", "contact"]
];

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const visibleProjects = useMemo(
    () => filter === "All" ? projects : projects.filter(p => p.category === filter),
    [filter]
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const openEmail = () => {
    const subject = encodeURIComponent("Hello Vithurshajini");
    const body = encodeURIComponent("Hi Vithurshajini,\n\nI came across your portfolio and would like to connect.\n\n");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
        <span className="brand-mark"><Code2 size={19} /></span>
        <span>vithurshajini<span className="brand-dot">.</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {navItems.map(([label, id]) =>
          <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
        )}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO MEANINGFUL OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>{profile.name.split(" ")[0]}<br /><span>{profile.name.split(" ").slice(1).join(" ")}</span></h1>
          <h2>{profile.role}<span className="hero-cursor">_</span></h2>
          <p className="hero-description">
            I build thoughtful web applications, connect systems through APIs,
            and turn complex requirements into useful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> {profile.location}</span>
            <span><Terminal size={15} /> Full-stack development</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-window">
            <div className="window-top"><span /><span /><span /><small>developer.js</small></div>
            <div className="code-lines">
              <p><i>01</i><b>const</b> developer = {"{"}</p>
              <p><i>02</i>&nbsp; name: <em>'Vithurshajini'</em>,</p>
              <p><i>03</i>&nbsp; role: <em>'Software Engineer'</em>,</p>
              <p><i>04</i>&nbsp; passion: [</p>
              <p><i>05</i>&nbsp;&nbsp; <em>'Building for people'</em>,</p>
              <p><i>06</i>&nbsp;&nbsp; <em>'Learning every day'</em></p>
              <p><i>07</i>&nbsp; ]</p>
              <p><i>08</i>{"}"};</p>
              <p className="code-comment"><i>09</i>// Always improving ✦</p>
            </div>
          </div>
          <div className="portrait-card">
            <div className="portrait-glow" />
            <img src={avatar} alt="Portrait of Vithurshajini Arumainayagam" />
            <div className="portrait-caption"><span>V</span><div><strong>Vithurshajini</strong><small>Software Engineer</small></div><Sparkles size={17} /></div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon">{"{ }"}</span> Clean code</div>
          <div className="floating-chip chip-bottom"><span className="chip-pulse" /> Problem solver</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="intro-strip section-wrap">
        <div className="intro-label">WHAT I DO</div>
        <div className="focus-grid">
          {focusAreas.map(({ label, icon: Icon }) => <div className="focus-item" key={label}>
            <span className="focus-icon"><Icon size={19} /></span><span>{label}</span>
          </div>)}
        </div>
      </section>

      <section className="section section-wrap" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Engineer by craft." description="I enjoy learning how things work, finding practical solutions, and building software that makes a difference." />
        <div className="about-layout">
          <div className="about-main panel">
            <div className="panel-icon"><Sparkles size={20} /></div>
            <h3>Turning ideas into useful software.</h3>
            <p>
              I'm a Computer Science graduate and Associate Software Engineer with experience
              in full-stack web development, enterprise applications, workflow solutions,
              and system integrations. I enjoy working across the development process—from
              understanding requirements and building interfaces to integrating APIs and
              troubleshooting issues.
            </p>
            <p>
              My experience includes developing and enhancing web applications,
              working with document management solutions, and contributing to
              workflow-based systems. I'm passionate about exploring new technologies,
              continuously strengthening my engineering skills, solving technical
              challenges, and collaborating with teams to build meaningful
              software solutions.
            </p>
            <div className="about-tags"><span>Continuous learning</span><span>Team collaboration</span><span>Problem solving</span></div>
          </div>
          <div className="about-side">
            <div className="stat-card panel"><span className="stat-number">B.Sc.</span><span className="stat-label">Computer Science</span><small>Second Class Upper Division</small></div>
            <div className="stat-card panel"><span className="stat-number">Full-stack</span><span className="stat-label">Development focus</span><small>Frontend · Backend · APIs</small></div>
            <div className="quote-card"><span className="quote-mark">“</span><p>Stay curious, keep building, and make every line of code count.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with" description="A growing toolkit across application development, databases, APIs, and enterprise platforms." />
        <div className="skills-layout">
          {skillGroups.map((group, index) => <article className="skill-card panel" key={group.title}>
            <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3></div>
            <div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
        <div className="skills-note"><span className="note-spark">✳</span> Always exploring better tools and ways to build.</div>
      </section>

      <section className="section section-wrap" id="experience">
        <SectionHeading eyebrow="WHERE I'VE GROWN" title="Experience & journey" description="The teams, products, and challenges that have shaped my software development experience." />
        <div className="timeline">
          {experiences.map((job, index) => <article className="timeline-item" key={job.company}>
            <div className="timeline-marker"><span>{index + 1}</span></div>
            <div className="experience-card panel">
              <div className="experience-head">
                <div><span className="experience-period">{job.period}</span><h3>{job.role}</h3><h4>{job.company}</h4></div>
                <span className="experience-icon"><BriefcaseBusiness size={20} /></span>
              </div>
              <p>{job.description}</p>
              <ul>{job.highlights.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
              <div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section section-wrap" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects & contributions" description="A selection of professional, internship, and academic work. Some are team or workplace contributions rather than independent products." />
        <div className="project-toolbar">
          <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          <div className="filter-list">{categories.map(cat => <button key={cat} className={filter === cat ? "filter active" : "filter"} onClick={() => setFilter(cat)}>{cat}</button>)}</div>
        </div>
        <div className="project-grid">
          {visibleProjects.map(project => {
            const Icon = project.icon;
            return <article className="project-card panel" key={project.number}>
              <div className="project-card-head"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="project-icon"><Icon size={22} /></span></div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-details">{project.details.map(d => <li key={d}>{d}</li>)}</ul>
              <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>;
          })}
        </div>
        <p className="project-disclaimer">Professional project descriptions are intentionally high-level and avoid confidential business details.</p>
      </section>

      <section className="section section-wrap" id="education">
        <SectionHeading eyebrow="ACADEMIC FOUNDATION" title="Education" />
        <div className="education-grid">
          <article className="education-card panel">
            <div className="education-icon"><GraduationCap size={24} /></div>
            <span className="experience-period">UNDERGRADUATE DEGREE</span>
            <h3>{education.qualification}</h3>
            <p>{education.institution}</p>
            <span className="education-result">{education.result}</span>
          </article>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card">
          <div className="contact-orb orb-a" /><div className="contact-orb orb-b" />
          <div className="contact-content">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something<br /><span>meaningful together.</span></h2>
            <p>I'm always happy to connect, exchange ideas, and explore opportunities to create useful software.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={openEmail}>Say hello <Send size={16} /></button>
              <button className="button button-ghost" onClick={copyEmail}>{copied ? "Email copied" : "Copy email"} {copied ? <CheckCheck size={16} /> : <Copy size={16} />}</button>
            </div>
          </div>
          <div className="contact-email"><Mail size={19} /><span>{profile.email}</span></div>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a className="brand" href="#home"><span className="brand-mark"><Code2 size={18} /></span><span>vithursha<span className="brand-dot">.</span></span></a>
      <p>Designed & built with curiosity by {profile.name}.</p>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
        <a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
      </div>
      <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
    </footer>
  </div>;
}

export default App;
