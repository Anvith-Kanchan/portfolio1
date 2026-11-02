import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {number:'01',title:'Privacy-preserving similarity search',type:'RESEARCH · SAMSUNG R&D',summary:'Exploring how similarity search can work over encrypted data, bringing together homomorphic encryption and vector databases.',details:['Designed and evaluated system architectures with senior researchers.','Built and tested encrypted-query approaches.','Examined trade-offs between performance, scalability, and data confidentiality.'],stack:['Homomorphic encryption','Vector databases','Secure systems']},
  {number:'02',title:'Network intrusion detection system',type:'MACHINE LEARNING · CYBERSECURITY',summary:'An automated detection-and-response pipeline that classifies network activity and generates firewall rules for malicious traffic.',details:['Built the ingestion-to-classification-to-action data flow.','Reached 90% detection accuracy on the NSL-KDD dataset, as reported in the project evaluation.','Reviewed misclassifications and tuned features to improve reliability and reduce false positives.'],stack:['Python','Machine learning','NSL-KDD','Firewall automation']},
  {number:'03',title:'AI-based financial analysis',type:'BACKEND · APPLIED AI',summary:'A modular workflow that combines external market-data APIs and LLM services to retrieve, analyse, and generate structured reports.',details:['Connected multiple data sources and services through a multi-step workflow.','Used LangChain to organise the pipeline into modular components.','Designed repeatable execution from data ingestion to report output.'],stack:['Python','LangChain','LLMs','External APIs']},
  {number:'04',title:'PG booking platform',type:'FULL-STACK · WEB APPLICATION',summary:'A booking application spanning search, filtering, listing management, and booking workflows backed by MySQL and REST services.',details:['Translated booking requirements into frontend, backend, and database modules.','Built RESTful services for users, listings, and bookings.','Implemented dynamic search and filtering and worked on query performance across listing data.'],stack:['MySQL','REST APIs','Full-stack development']}
];
const skillGroups = [
  {label:'LANGUAGES',items:'Python, Java, C++, C, SQL'},
  {label:'BACKEND & DATA',items:'REST APIs, Spring Boot, Spring Security, Microservices, MySQL, MongoDB, Vector Databases, Apache Kafka'},
  {label:'AI & MACHINE LEARNING',items:'Machine Learning, Generative AI, LLMs, AI Agents, LangChain'},
  {label:'SECURITY & SYSTEMS',items:'Cybersecurity, Homomorphic Encryption, Secure Architecture, Wireshark, IoT'},
  {label:'ENGINEERING',items:'Git, GitHub, Docker, Kubernetes, GitHub Actions, GCP, JUnit, Mockito, Postman, Swagger/OpenAPI'},
  {label:'FOUNDATIONS',items:'Data Structures & Algorithms, OOP, Operating Systems, DBMS, Software Architecture, Design Patterns'}
];
const Arrow = ({diagonal=false}) => <span aria-hidden="true" className="arrow">{diagonal?'↗':'→'}</span>;

function Header(){
  const [open,setOpen]=useState(false);
  const links=[['Work','#work'],['Experience','#experience'],['About','#about'],['Contact','#contact']];
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Anvith Kanchan home">AK<span>.</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
    <nav className={open?'nav open':'nav'} aria-label="Main navigation">
      {links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href="/portfolio/Anvith-Kanchan-Resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow diagonal/></a>
    </nav>
  </header>;
}
function Project({project,onOpen}){
  return <article className="project">
    <div className="project-index">{project.number}</div>
    <div className="project-main"><div className="eyebrow">{project.type}</div><h3>{project.title}</h3><p>{project.summary}</p>
      <div className="tag-row">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
    </div>
    <button className="project-open" onClick={()=>onOpen(project)} aria-label={'Read details about '+project.title}>Details <Arrow diagonal/></button>
  </article>;
}
function ProjectDialog({project,onClose}){
  if(!project)return null;
  return <div className="dialog-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}>
    <section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <button className="dialog-close" onClick={onClose} aria-label="Close project details">×</button>
      <div className="eyebrow">{project.type} / {project.number}</div><h2 id="dialog-title">{project.title}</h2>
      <p className="dialog-intro">{project.summary}</p><h4>What I worked on</h4>
      <ul>{project.details.map(detail=><li key={detail}>{detail}</li>)}</ul>
      <div className="tag-row">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
    </section>
  </div>;
}
function App(){
  const [selected,setSelected]=useState(null);
  return <div id="top">
    <Header/><main>
      <section className="hero wrap">
        <div className="hero-copy"><div className="availability"><span className="availability-dot"></span> COMPUTER SCIENCE · BENGALURU, INDIA</div>
          <h1>Engineering systems<br>with <em>purpose.</em></h1>
          <p className="hero-lede">I’m Anvith Kanchan, a computer science undergraduate interested in backend engineering, applied AI, and security-focused systems.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore selected work <Arrow/></a><a className="text-link" href="mailto:anvithkanchan.ci23@bmsce.ac.in">Get in touch <Arrow diagonal/></a></div>
        </div>
        <aside className="hero-note" aria-label="Professional snapshot"><div className="note-rule"></div><span className="eyebrow">CURRENTLY</span>
          <p>Researching privacy-preserving similarity search at <strong>Samsung R&D</strong>.</p><div className="note-rule"></div><span className="eyebrow">EDUCATION</span>
          <p>B.E. Computer Science & Engineering<br><strong>B. M. S. College of Engineering</strong></p>
          <div className="note-meta"><span>CGPA</span><strong>8.91 / 10</strong></div><div className="note-meta"><span>EXPECTED GRADUATION</span><strong>JUNE 2027</strong></div>
        </aside>
        <div className="hero-index"><span>01</span><span>BUILD / TEST / REFINE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>
      <section id="work" className="section section-work"><div className="wrap">
        <div className="section-heading"><div><div className="eyebrow">SELECTED WORK / 2024—26</div><h2>Projects & research<span>.</span></h2></div><p>A selection of engineering work across privacy, security, intelligent workflows, and full-stack applications.</p></div>
        <div className="projects-list">{projects.map(project=><Project key={project.number} project={project} onOpen={setSelected}/>)}</div>
        <div className="work-footnote">Project summaries reflect the work described in my resume. Detailed case studies and public demos will be added as they are ready.</div>
      </div></section>
      <section id="experience" className="section section-experience"><div className="wrap">
        <div className="eyebrow">EXPERIENCE / 2026</div><div className="experience-layout"><div><h2>Research, then<br><em>make it work.</em></h2></div>
          <div className="experience-detail"><div className="experience-top"><h3>Samsung R&D</h3><span>RESEARCH & DEVELOPMENT INTERN</span></div>
            <p className="experience-summary">Privacy-preserving similarity search using homomorphic encryption and vector databases.</p>
            <ul><li>Collaborated with senior researchers to design and evaluate system architectures for encrypted similarity search.</li><li>Built and tested encrypted-query approaches, considering performance, scalability, and data confidentiality.</li><li>Applied secure software design principles while building and troubleshooting systems, incorporating feedback from senior engineers.</li></ul>
          </div>
        </div>
      </div></section>
      <section id="about" className="section section-about"><div className="wrap about-layout">
        <div className="about-intro"><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Curious about what happens <em>under the hood.</em></h2>
          <p>I enjoy working across the boundaries between software, data, and security. I’m especially interested in systems that need to be useful, reliable, and careful with the information they handle.</p>
          <p>My approach is hands-on: understand the requirement, break it into working components, test the integration, and improve it through feedback.</p>
        </div>
        <div className="skills-panel"><div className="eyebrow">TOOLS & WORKING KNOWLEDGE</div>
          {skillGroups.map(group=><div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.items}</p></div>)}
        </div>
      </div></section>
      <section className="education-strip"><div className="wrap education-inner">
        <div><div className="eyebrow">EDUCATION</div><h2>B. M. S. College of Engineering</h2><p>B.E. Computer Science and Engineering · IoT & Cybersecurity including Blockchain</p></div>
        <div className="education-score"><strong>8.91</strong><span>CGPA / 10</span><small>Expected June 2027</small></div>
      </div></section>
      <section className="section section-certifications"><div className="wrap cert-layout">
        <div><div className="eyebrow">CONTINUOUS LEARNING</div><h2>Certifications<span>.</span></h2></div>
        <div className="cert-list"><div><span>01</span><strong>Introduction to AI</strong><small>Google</small></div><div><span>02</span><strong>Introduction to Amazon EC2</strong><small>AWS Skill Builder</small></div></div>
      </div></section>
      <section id="contact" className="contact-section"><div className="wrap">
        <div className="eyebrow">CONTACT / OPEN TO CONVERSATION</div><h2>Have a thoughtful<br><em>problem to solve?</em></h2>
        <div className="contact-bottom"><a className="contact-email" href="mailto:anvithkanchan.ci23@bmsce.ac.in">anvithkanchan.ci23@bmsce.ac.in <Arrow diagonal/></a>
          <div className="contact-links"><a href="https://github.com/Anvith-Kanchan" target="_blank" rel="noreferrer">GitHub <Arrow diagonal/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/></a><a href="tel:+918105459960">+91 81054 59960</a></div>
        </div>
      </div></section>
    </main>
    <footer><div className="wrap footer-inner"><a className="wordmark" href="#top">AK<span>.</span></a><span>Designed & built by Anvith Kanchan</span><span>© {new Date().getFullYear()}</span></div></footer>
    <ProjectDialog project={selected} onClose={()=>setSelected(null)}/>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
