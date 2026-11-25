import React, { useState, useEffect, useRef } from 'react';
import { profile, projects, skills, research, education, experience, gallery } from './content';
import { siteConfig } from './site.config';
import Hero from './components/Hero';
import Media from './components/Media';
import { Links, ExternalLink } from './components/Links';

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow">{number} / {label}</p><h2>{title}</h2></div>{children && <p>{children}</p>}</div>;
}

function RepositoryLink({ repository }) {
  if (!repository) return null;
  return <ExternalLink href={repository.url}>{repository.name} (private repository) ↗</ExternalLink>;
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = oldOverflow; previousFocus?.focus(); };
  }, []);
  return <dialog aria-labelledby="dialog-title" ref={dialog} className="project-dialog" onCancel={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-content">
      <button className="close-dialog" onClick={onClose} aria-label="Close project details" autoFocus>Close ×</button>
      <p className="eyebrow">{project.category} · {project.status}</p>
      <h2 id="dialog-title">{project.title}</h2>
      <div className={project.secondRun ? 'field-runs' : undefined}>
        <div>
          <Media photo={project.photo} video={project.video} kind={project.illustration} label={project.mediaLabel} path={`public/media/${project.file}-demo.mp4`} />
          {project.caption && <p className="lab-caption">{project.caption}</p>}
        </div>
        {project.secondRun && <div>
          <Media video={project.secondRun.video} photo={project.secondRun.photo} label={project.secondRun.label} />
          <p className="lab-caption">{project.secondRun.label}</p>
        </div>}
      </div>
      <h3>My contribution</h3><p>{project.contribution}</p>
      {project.details.length > 0 && <><h3>Inside the project</h3><ul className="detail-list">{project.details.map(item => <li key={item}>{item}</li>)}</ul></>}
      {project.results.length > 0 && <><h3>Results</h3><ul className="detail-list">{project.results.map(item => <li key={item}>{item}</li>)}</ul></>}
      {project.fieldPhotos && <section>
        <h3>Field photos</h3>
        <div className="field-photos">{project.fieldPhotos.map(item => <figure key={item.photo}>
          <a href={item.photo} target="_blank" rel="noreferrer"><img src={item.photo} alt={item.label} loading="lazy" /></a>
          <figcaption className="lab-caption">{item.label}</figcaption>
        </figure>)}</div>
      </section>}
      <div className="project-links">
        <ExternalLink href={project.demoUrl}>Watch demo ↗</ExternalLink>
        <ExternalLink href={project.code}>Code ↗</ExternalLink>
        <RepositoryLink repository={project.repository} />
        {project.relatedWork.map(link => <ExternalLink href={link.url} key={link.url}>{link.label} ↗</ExternalLink>)}
      </div>
      {siteConfig.showEditingHints && <p className="editing-note"><b>To complete this project:</b> {project.editingNote}</p>}
    </div>
  </dialog>;
}

function Work() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const shown = projects.filter(project => filter === 'All' || project.category === filter);
  return <section className="section work-section" id="work">
    <SectionHeading number="01" label="Selected work" title="Ideas, running on robots.">Perception systems, physical demos, and the engineering that connects them.</SectionHeading>
    <div className="work-toolbar"><div className="filters" role="group" aria-label="Filter projects">
      {categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
    </div><span className="project-count" aria-live="polite">{shown.length} {shown.length === 1 ? 'project' : 'projects'}</span></div>
    <div className="project-list">{shown.map(project => <article className="project-row" id={project.id} key={project.id}>
      <div className="project-visual"><Media photo={project.photo} video={project.photo ? '' : project.video} kind={project.illustration} label={project.mediaLabel} path={`public/media/${project.file}-poster.webp`} />
        {project.caption && <p className="lab-caption">{project.caption}</p>}
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}<span className="status-tag">{project.status}</span></p>
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><button onClick={() => setSelected(project)} aria-label={`Project notes: ${project.title}`}>Project notes <span>↗</span></button>
          <ExternalLink href={project.demoUrl || project.video}>{project.videoLabel || 'Watch demo'} ↗</ExternalLink><ExternalLink href={project.code}>Code ↗</ExternalLink>
          <RepositoryLink repository={project.repository} />
        </div>
      </div>
    </article>)}</div>
    {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
  </section>;
}

function Research() {
  if (!research.length) return null;
  return <section className="research-wrap" id="research"><div className="section">
    <SectionHeading number="02" label="Research" title="Questions I’m exploring.">Ongoing experiments and graduate research.</SectionHeading>
    {research.map(item => <div className="research-row" key={item.title}><span className="research-status">{item.status}</span><div>
      <h3>{item.title}</h3><p>{item.description}</p><ExternalLink href={item.url}>Read more ↗</ExternalLink>
      <RepositoryLink repository={item.repository} />
      {item.video && <div className="lab-footage">
        <Media photo={item.photo} video={item.video} label={item.mediaLabel} />
        <p className="lab-caption">{item.caption}</p>
      </div>}
      {siteConfig.showEditingHints && <p className="editing-note">{item.editingNote}</p>}
    </div></div>)}
  </div></section>;
}

function Skills() {
  return <section className="section" id="skills">
    <SectionHeading number="03" label="Toolkit" title="What I work with.">From camera calibration to robot integration.</SectionHeading>
    <div className="skills-grid">{skills.map((group, index) => <div className="skill-group" key={group.title}>
      <span className="skill-number">{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>)}</div>
  </section>;
}

function About() {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const hasPortrait = profile.portrait && !portraitFailed;
  const photos = gallery.filter(item => item.photo || siteConfig.showEditingHints);
  return <>
    <section className={`section about ${!hasPortrait ? 'about-text-only' : ''}`} id="about">
      {hasPortrait ? <div className="about-photo"><Media photo={profile.portrait} label={profile.portraitAlt} kind="portrait" path="public/media/portrait.webp" onPhotoError={() => setPortraitFailed(true)} /></div>
        : <div className="about-heading"><p className="eyebrow">04 / A little about me</p><h2>Curious about <br />the code.<br /><em>Hands-on with <br />the robot.</em></h2></div>}
      <div>
        {hasPortrait && <><p className="eyebrow">04 / A little about me</p><h2>Curious about the code.<br /><em>Hands-on with the robot.</em></h2></>}
        <p>{profile.about}</p>
        <div className="lab-footage">
          <Media photo="./media/wafflebot-workbench.webp" video="./media/wafflebot-workbench.mp4" label="Abhi assembling the TurtleBot at the workbench" />
          <p className="lab-caption">At the workbench · Assembling the TurtleBot Waffle.</p>
        </div>
        <div className="education-list">{education.map(item => <div className="education" key={item.degree}><span>{item.dates}</span><div><b>{item.degree}</b><br />{item.school}</div></div>)}</div>
        {experience.length > 0 && <div className="experience"><h3>Before robotics</h3><p className="experience-intro">A foundation in building and debugging software.</p>{experience.map(item => <div className="experience-row" key={item.company}>
          <div><b>{item.company}</b><span>{item.dates}</span></div><p className="experience-role">{item.role}</p><p>{item.description}</p>
        </div>)}</div>}
        <div className="social-links"><Links /></div>
      </div>
    </section>
    {photos.length > 0 && <section className="section gallery">
      <SectionHeading number="05" label="Behind the demos" title="Out of the notebook.">The people and setups behind the work.</SectionHeading>
      <div className="gallery-grid">{photos.map(item => <div key={item.file}><Media photo={item.photo} label={item.alt} path={`public/media/${item.file}.webp`} /><p>{item.title}</p></div>)}</div>
    </section>}
  </>;
}

function Footer() {
  return <footer id="contact"><div className="section">
    <p className="eyebrow">Let’s connect</p><div className="footer-title"><h2>Let’s build something<br />that <em>moves.</em></h2><a className="circle-link" href={`mailto:${profile.email}`} aria-label={`Email ${profile.firstName}`}>↗</a></div>
    <p>{profile.availability}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><div className="social-links"><Links /></div><a href="#top">Back to top ↑</a></div>
  </div></footer>;
}

export default function App() {
  return <div className="portfolio"><a className="skip-link" href="#work">Skip to projects</a><Hero />
    {siteConfig.showEditingHints && <div className="editing-strip">Editing hints are on. Change showEditingHints to false in src/site.config.js before sharing.</div>}
    <main><Work /><Research /><Skills /><About /></main><Footer />
  </div>;
}
