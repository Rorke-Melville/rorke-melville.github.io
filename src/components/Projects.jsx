import React from 'react';
import FadeUp from './FadeUp';
// Import your project screenshots here
import LambertBrothers from './assets/LambertBrothers.png';
import Gelmar from './assets/Gelmar.png';
import GreenPipsTrading from './assets/GreenPipsTrading.png';
import AegisDynamics from './assets/AegisDynamicsCybersecurity.png';
import ModelLoft from './assets/ModelLoftScreenshot.png';

const FuturisticStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');

    /* ── Shared card base ── */
    .hud-card {
      position: relative;
      background: linear-gradient(135deg, rgba(10,8,30,0.9) 0%, rgba(5,4,20,0.97) 100%);
      border: 1px solid rgba(99,102,241,0.2);
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
      transition: border-color 0.4s ease, box-shadow 0.4s ease;
      overflow: hidden;
    }
    /* grid texture */
    .hud-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
      background-size: 28px 28px;
      pointer-events: none;
      z-index: 0;
    }
    /* top-right bevel fill */
    .hud-card::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 18px; height: 18px;
      background: rgba(168,85,247,0.3);
      clip-path: polygon(100% 0, 100% 100%, 0 0);
      pointer-events: none;
      z-index: 1;
    }
    .hud-card:hover {
      border-color: rgba(99,102,241,0.55);
      box-shadow:
        0 0 35px rgba(99,102,241,0.15),
        0 0 80px rgba(168,85,247,0.07),
        inset 0 0 40px rgba(99,102,241,0.04);
    }

    /* scan line */
    .hud-card .scan-line {
      position: absolute;
      left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(99,102,241,0.7), rgba(168,85,247,0.7), transparent);
      top: -2px;
      pointer-events: none;
      z-index: 10;
      opacity: 0;
    }
    .hud-card:hover .scan-line {
      opacity: 1;
      animation: scan 1.8s ease-in-out infinite;
    }
    @keyframes scan {
      0%   { top: -2px; opacity: 0; }
      5%   { opacity: 1; }
      95%  { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }

    /* image zoom */
    .hud-img-wrap img {
      transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease;
      filter: saturate(0.75) brightness(0.85);
    }
    .hud-card:hover .hud-img-wrap img {
      transform: scale(1.06);
      filter: saturate(1) brightness(1);
    }

    /* glowing title underline */
    .hud-title-line {
      height: 1px;
      background: linear-gradient(90deg, #6366f1, #a855f7, transparent);
      margin-top: 6px;
      margin-bottom: 12px;
      width: 55%;
      transition: width 0.4s ease;
    }
    .hud-card:hover .hud-title-line { width: 100%; }

    /* tech badge */
    .hud-badge {
      font-family: 'Share Tech Mono', monospace;
      font-size: 10px;
      color: #a5b4fc;
      border: 1px solid rgba(99,102,241,0.3);
      padding: 2px 8px;
      background: rgba(99,102,241,0.1);
      clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
      letter-spacing: 0.05em;
    }

    /* mono label */
    .hud-mono {
      font-family: 'Share Tech Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.15em;
      color: rgba(165,180,252,0.5);
      text-transform: uppercase;
    }

    /* index number */
    .hud-index {
      font-family: 'Share Tech Mono', monospace;
      font-size: 11px;
      color: rgba(165,180,252,0.35);
      letter-spacing: 0.1em;
    }

    /* primary CTA button */
    .hud-btn {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #c4b5fd;
      border: 1px solid rgba(168,85,247,0.4);
      padding: 8px 22px;
      background: rgba(168,85,247,0.08);
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }
    .hud-btn:hover {
      background: rgba(168,85,247,0.22);
      border-color: rgba(168,85,247,0.75);
      color: #fff;
      box-shadow: 0 0 18px rgba(168,85,247,0.3);
    }

    /* ghost button */
    .hud-btn-ghost {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(200,210,255,0.6);
      border: 1px solid rgba(99,102,241,0.25);
      padding: 8px 22px;
      background: rgba(99,102,241,0.06);
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }
    .hud-btn-ghost:hover {
      background: rgba(99,102,241,0.18);
      border-color: rgba(99,102,241,0.6);
      color: #fff;
    }

    /* section divider */
    .hud-divider {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 28px;
    }
    .hud-divider-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, #6366f1, #a855f7, transparent);
    }
    .hud-divider-label {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      letter-spacing: 0.08em;
      color: #fff;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* typography */
    .hud-heading {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: clamp(2rem, 5vw, 3rem);
      letter-spacing: 0.05em;
      color: #fff;
      line-height: 1;
    }
    .hud-title {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
      letter-spacing: 0.04em;
      color: #fff;
      transition: color 0.3s ease;
    }
    .hud-card:hover .hud-title { color: #a78bfa; }

    .hud-title-lg {
      font-family: 'Rajdhani', sans-serif;
      font-weight: 700;
      font-size: 1.7rem;
      letter-spacing: 0.04em;
      color: #fff;
      transition: color 0.3s ease;
    }
    .hud-card:hover .hud-title-lg { color: #a78bfa; }

    .hud-body {
      font-family: 'Rajdhani', sans-serif;
      font-size: 0.92rem;
      color: rgba(200,210,230,0.7);
      line-height: 1.65;
    }

    /* status dot */
    .hud-status {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #818cf8;
      box-shadow: 0 0 7px #818cf8;
      animation: pulse-dot 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.25; }
    }

    /* corner brackets on images */
    .hud-corner {
      position: absolute;
      width: 14px; height: 14px;
      pointer-events: none;
    }
    .hud-corner-tl { top:8px; left:8px;
      border-top: 2px solid rgba(99,102,241,0.75);
      border-left: 2px solid rgba(99,102,241,0.75); }
    .hud-corner-tr { top:8px; right:8px;
      border-top: 2px solid rgba(168,85,247,0.75);
      border-right: 2px solid rgba(168,85,247,0.75); }
    .hud-corner-bl { bottom:8px; left:8px;
      border-bottom: 2px solid rgba(99,102,241,0.75);
      border-left: 2px solid rgba(99,102,241,0.75); }
    .hud-corner-br { bottom:8px; right:8px;
      border-bottom: 2px solid rgba(168,85,247,0.75);
      border-right: 2px solid rgba(168,85,247,0.75); }

    /* "Latest Work" badge */
    .hud-latest-badge {
      font-family: 'Share Tech Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #e9d5ff;
      background: linear-gradient(90deg, rgba(99,102,241,0.5), rgba(168,85,247,0.5));
      border: 1px solid rgba(168,85,247,0.4);
      padding: 3px 10px;
      clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
    }
  `}</style>
);

const Projects = () => {
  const realWorldProjects = [
    {
      id: 1,
      title: "Lambert Brothers Insurance",                            
      description: "Built an insurance brokerage website from scratch for Lambert Brothers Insurance, a South African firm established in 1997. Developed using React, TypeScript, and Tailwind CSS with a focus on clean UI, intuitive navigation, and clearly communicating their healthcare, life, and short-term insurance services.",
      image: LambertBrothers,                                     
      link: "https://www.lambertbrothers.co.za",                  
      technologies: ["React", "TypeScript", "Tailwind CSS"],         
      type: "Website Rebuild"                                  
    },
    {
      id: 2,
      title: "Gelmar",
      description: "Comprehensive website redesign focusing on user experience enhancement and visual sophistication. Implemented modern design principles and improved site navigation.",
      image: Gelmar,
      link: "https://www.gelmar.co.za",
      technologies: ["PHP", "CSS", "JavaScript", "HTML"],
      type: "Website Redesign"
    },
    {
      id: 3,
      title: "Green Pips Trading",
      description: "Built the frontend of a modern prop firm brokerage platform, delivering a polished interface with an intuitive user experience and streamlined trading workflows tailored to both new and experienced traders.",
      image: GreenPipsTrading,
      link: "https://greenpipstrading.com",
      technologies: ["Vue", "Tailwind CSS", "Supabase"],
      type: "Trading Platform"
    }
  ];

  const personalProjects = [
    {
      id: 4,
      title: "Aegis-Dynamics",
      description: "Front-end web application designed to showcase features for a mock cybersecurity company. Developed using React for component-based architecture, Bootstrap for a streamlined UI, and Three.js for engaging data visualizations.",
      image: AegisDynamics,
      githubLink: "https://github.com/Rorke-Melville/Aegis-Dynamics",
      liveLink: "https://rorkemelville.com/Aegis-Dynamics/",
      technologies: ["React", "Bootstrap", "Three.js", "Lucide React"],
      type: "Cybersecurity"
    },
    {
      id: 5,
      title: "The Model Loft",
      description: "A mock portfolio website created to showcase high-quality web development skills. Features a fictional clay artist's work with beautiful galleries, interactive elements, and professional presentation.",
      image: ModelLoft,
      githubLink: "https://github.com/Rorke-Melville/The-Model-Loft",
      liveLink: "https://rorkemelville.com/The-Model-Loft/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "OGL"],
      type: "Artist Portfolio"
    }
  ];

  // Image bracket overlays — reused on every card
  const BracketOverlay = () => (
    <>
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />
    </>
  );

  // Full-width horizontal featured card
  const FeaturedCard = ({ project }) => (
    <div className="hud-card mb-4">
      <div className="scan-line" />
      <div className="flex flex-col md:flex-row">
        {/* Image — left half on desktop */}
        <div className="hud-img-wrap relative md:w-1/2 overflow-hidden" style={{ minHeight: '240px' }}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover absolute inset-0" style={{ objectPosition: 'top left' }} />
          {/* Dark gradient towards content side */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(5,4,20,0.1), rgba(5,4,20,0.55))',
            pointerEvents: 'none'
          }} />
          <BracketOverlay />
          {/* Latest Work badge over image */}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span className="hud-latest-badge">✦ Latest Work</span>
          </div>
        </div>

        {/* Content — right half */}
        <div className="relative z-10 flex flex-col justify-between p-8 md:w-1/2">
          <div>
            <p className="hud-title-lg">{project.title}</p>
            <div className="hud-title-line" style={{ width: '55%' }} />

            <p className="hud-body mb-5">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="hud-badge">{tech}</span>
              ))}
            </div>
          </div>

          <a href={project.link} target="_blank" rel="noopener noreferrer" className="hud-btn self-start">
            Access Site →
          </a>
        </div>
      </div>
    </div>
  );

  // Standard card — used for the two below the featured and for personal projects
  const ProjectCard = ({ project, index, isPersonal = false }) => (
    <div className="hud-card">
      <div className="scan-line" />

      <div className="hud-img-wrap relative overflow-hidden" style={{ height: '180px' }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,4,20,0.1), rgba(5,4,20,0.65))',
          pointerEvents: 'none'
        }} />
        <BracketOverlay />
      </div>

      <div className="relative z-10 p-6">
        <p className="hud-title">{project.title}</p>
        <div className="hud-title-line" />

        <p className="hud-body mb-4" style={{
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="hud-badge">{tech}</span>
          ))}
        </div>

        <div className="flex gap-3">
          {isPersonal ? (
            <>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hud-btn-ghost">
                Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hud-btn">
                Live Demo →
              </a>
            </>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hud-btn">
              Access Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const [featured, ...rest] = realWorldProjects;

  return (
    <>
      <FuturisticStyles />
      <FadeUp>
        <section id="projects" className="py-16 max-w-6xl mx-auto px-4">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="hud-heading mb-3">
              Projects <span style={{ color: '#a78bfa' }}>&</span> Contributions
            </h2>
            <p className="hud-body max-w-xl mx-auto">
              A showcase of my work ranging from real-world client projects to personal creative endeavors,
              demonstrating versatility in modern web development.
            </p>
          </div>

          {/* ── Real World Projects ── */}
          <div className="mb-14">
            <div className="hud-divider">
              <div className="hud-divider-line" />
              <span className="hud-divider-label">Real World Projects</span>
              <div className="hud-divider-line" />
            </div>

            {/* Featured hero card — newest project */}
            <FeaturedCard project={featured} />

            {/* Two standard cards below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 2} />
              ))}
            </div>
          </div>

          {/* ── Personal Projects ── */}
          <div>
            <div className="hud-divider">
              <div className="hud-divider-line" />
              <span className="hud-divider-label">Personal Projects</span>
              <div className="hud-divider-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 4} isPersonal={true} />
              ))}
            </div>
          </div>

        </section>
      </FadeUp>
    </>
  );
};

export default Projects;