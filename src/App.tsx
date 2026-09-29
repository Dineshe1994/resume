import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Code2, ExternalLink, Github, Globe2,
  Layers3, Linkedin, Mail, MapPin, Menu, Moon, Send, Server, Sparkles, Sun, X,
} from 'lucide-react';
import { experience, projects, skills, socialLinks } from '@/data/portfolio';

const resumeUrl = '/resume/resumeDinesh.pdf';

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dinesh home"><span className="brand-mark">D</span><span>Dinesh</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="button button-small button-outline nav-resume" href={resumeUrl} download>Resume <ArrowDownRight size={15} /></a>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
            <h1>Interfaces with <em>intention.</em><br /><span>Built to move people forward.</span></h1>
            <p className="hero-lede">I’m Dinesh, a Frontend Developer specializing in React.js and Vue.js. I build scalable, responsive web experiences while growing toward full-stack development.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Let’s connect <Mail size={16} /></a></div>
            <div className="social-row"><a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /> GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /> LinkedIn</a><a href={socialLinks.email} aria-label="Email"><Mail size={17} /> Email</a></div>
          </div>
          <div className="hero-visual reveal reveal-delay" aria-label="Abstract frontend development visual">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="code-card"><div className="code-top"><span /><span /><span /><small>portfolio.tsx</small></div><div className="code-content"><p><b className="code-purple">const</b> <b className="code-blue">developer</b> <span>=</span> <span className="code-yellow">{'{'}</span></p><p className="indent"><span className="code-blue">name:</span> <span className="code-green">'Dinesh'</span><span>,</span></p><p className="indent"><span className="code-blue">focus:</span> <span className="code-green">'frontend'</span><span>,</span></p><p className="indent"><span className="code-blue">next:</span> <span className="code-green">'full stack'</span></p><p><span className="code-yellow">{'}'}</span></p><p className="code-comment">// always learning</p><p><b className="code-purple">export default</b> <span className="code-blue">developer</span></p></div></div>
            <div className="floating-chip chip-react"><span className="chip-icon">R</span> React.js</div><div className="floating-chip chip-vue"><span className="chip-icon">V</span> Vue.js</div><div className="floating-chip chip-ts">TS</div>
          </div>
          <div className="hero-tech"><span>Currently working with</span><b>React.js</b><b>Vue.js</b><b>TypeScript</b><b>REST APIs</b><b>Node.js</b></div>
        </section>

        <section id="about" className="section-shell section-block about-section"><SectionHeading eyebrow="01 — About me" title="A frontend developer who cares about the details." description="Good interfaces are more than pixels. They create clarity, build trust, and make complex things feel simple." /><div className="about-grid"><div className="about-text"><p>I’m a Frontend Developer with 5+ years of experience building modern, scalable, and responsive web applications. My day-to-day work sits at the intersection of thoughtful UI, maintainable architecture, and real user needs.</p><p>My strongest tools are React.js, Vue.js, JavaScript, and TypeScript. I enjoy creating reusable systems, connecting interfaces to APIs, and making sure the final experience feels fast, accessible, and considered.</p><p>Now I’m intentionally expanding into Node.js, Express.js, MongoDB, authentication, API development, and cloud deployment — moving from frontend specialist toward full-stack developer.</p></div><div className="highlight-stack"><div className="highlight-card"><strong>5+</strong><span>Years of<br />experience</span></div><div className="highlight-card highlight-accent"><strong>R + V</strong><span>React & Vue<br />specialist</span></div><div className="highlight-card"><strong>∞</strong><span>Always<br />learning</span></div></div></div></section>

        <section id="skills" className="section-shell section-block skills-section"><SectionHeading eyebrow="02 — Toolkit" title="The tools behind the work." description="A practical toolkit shaped by shipping real interfaces, collaborating across teams, and staying curious about what’s next." /><div className="skill-grid">{skills.map((skill) => <div className="skill-item" key={skill.name}><div className="skill-name"><span>{skill.name}</span><span className="skill-level">{skill.level}</span></div><div className="skill-category">{skill.category}</div></div>)}</div></section>

        <section id="experience" className="section-shell section-block"><SectionHeading eyebrow="03 — Experience" title="A career built through collaboration." description="Selected roles and responsibilities. Details are intentionally kept easy to update as my journey continues." /><div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.period}`}><div className="timeline-marker">{item.current && <span />}</div><div className="timeline-date">{item.period}</div><div className="timeline-content"><div className="role-heading"><div><h3>{item.role}</h3><p className="company">{item.company}</p></div>{item.current && <span className="current-badge">Current</span>}</div><p className="location"><MapPin size={14} /> {item.location}</p><p className="role-summary">{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></section>

        <section id="projects" className="section-shell section-block projects-section"><div className="projects-heading"><SectionHeading eyebrow="04 — Selected work" title="A few things I’m exploring." description="Sample projects that reflect the kind of products I enjoy building. Replace these with your professional work when ready." /><a className="text-link" href={socialLinks.github} target="_blank" rel="noreferrer">See GitHub profile <ArrowUpRight size={16} /></a></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><div className="window-dots"><i /><i /><i /></div><div className="project-lines"><span /><span /><span /><span /></div><div className="project-stat">{project.accent === 'coral' ? '12' : project.accent === 'blue' ? '24' : '08'}<small>active items</small></div><div className="project-ring" /></div><div className="project-body"><div className="project-label"><span>{project.type}</span><ExternalLink size={15} /></div><h3>{project.title}</h3><p>{project.description}</p><p className="problem"><b>Intent</b> {project.problem}</p><div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="feature-list">{project.features.map((feature) => <span key={feature}><Check size={13} />{feature}</span>)}</div></div></article>)}</div></section>

        <section className="journey section-shell section-block"><div className="journey-copy"><SectionHeading eyebrow="05 — The next chapter" title="From frontend to full stack." description="I’m building on a strong frontend foundation and deliberately expanding the parts of the stack that turn ideas into complete products." /><div className="journey-status"><span className="status-line"><i /> Frontend Developer</span><ArrowUpRight size={18} /><span className="status-line muted">Full Stack Developer</span></div></div><div className="roadmap"><div className="roadmap-step complete"><div className="roadmap-icon"><Code2 size={19} /></div><div><b>Frontend</b><span>React · Vue · TypeScript · Architecture</span></div><Check size={17} /></div><div className="roadmap-step active"><div className="roadmap-icon"><Server size={19} /></div><div><b>Backend</b><span>Node · Express · APIs · Auth</span></div><Sparkles size={17} /></div><div className="roadmap-step"><div className="roadmap-icon"><Layers3 size={19} /></div><div><b>Data & delivery</b><span>MongoDB · Docker · Cloud · CI/CD</span></div></div></div></section>

        <section id="education" className="section-shell section-block education-section"><SectionHeading eyebrow="06 — Education & certifications" title="The foundation, still in progress." /><div className="education-grid"><div className="education-card"><div className="card-icon"><BriefcaseBusiness size={20} /></div><div><p className="eyebrow">Education</p><h3>[Add Degree]</h3><p>[Add College / University]</p><span>[Add Year]</span></div><ChevronDown size={18} /></div><div className="education-card"><div className="card-icon mint-icon"><Sparkles size={20} /></div><div><p className="eyebrow">Certifications</p><h3>Certifications can be added here.</h3><p>Only verified certifications will be displayed.</p></div><ChevronDown size={18} /></div></div></section>

        <section className="services-section"><div className="section-shell section-block"><SectionHeading eyebrow="07 — What I can build" title="Useful, thoughtful digital products." /><div className="service-grid"><div className="service-card"><Globe2 size={21} /><h3>Frontend development</h3><p>React and Vue applications, responsive websites, and component libraries.</p></div><div className="service-card"><Code2 size={21} /><h3>UI development</h3><p>Pixel-aware interfaces, accessibility, design systems, and clean responsive layouts.</p></div><div className="service-card"><Server size={21} /><h3>API integration</h3><p>REST APIs, Axios, authentication flows, and clear error handling.</p></div><div className="service-card"><Layers3 size={21} /><h3>Full-stack growth</h3><p>Node.js, Express, MongoDB, and CRUD applications as I expand the stack.</p></div></div></div></section>

        <section id="contact" className="section-shell section-block contact-section"><div className="contact-intro"><SectionHeading eyebrow="08 — Contact" title="Let’s build something great." description="I’m open to frontend development opportunities, full-stack projects, and interesting engineering challenges." /><div className="contact-details"><a href={socialLinks.email}><Mail size={17} />dineshgokulan1994@gmail.com</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile</a><a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Subject<input required name="subject" placeholder="How can I help?" /></label><label>Message<textarea required name="message" rows={5} placeholder="Tell me a little about the opportunity..." /></label><button className="button button-primary" type="submit">{sent ? <>Message ready to send <Check size={16} /></> : <>Send message <Send size={16} /></>}</button><p className="form-note">This form is ready to connect to <code>POST /api/contact</code>.</p></form></section>
      </main>

      <footer className="footer"><div className="section-shell footer-inner"><div><a className="brand" href="#home"><span className="brand-mark">D</span><span>Dinesh</span></a><p>Frontend Developer building useful things for the web.</p></div><div className="footer-links"><a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={socialLinks.email}><Mail size={16} /> Email</a><a href={resumeUrl} download>Download resume <ArrowDownRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 Dinesh. All rights reserved.</span><span>Built with React.js & TypeScript</span></div></div></footer>
    </div>
  );
}

export default App;
