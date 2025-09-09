import React from 'react';
import FadeUp from './FadeUp';
// Import your project screenshots here
// import GelmarScreenshot from './assets/gelmar-screenshot.png';
// import GreenPipsScreenshot from './assets/greenpips-screenshot.png';
// import MockProject1Screenshot from './assets/mock1-screenshot.png';
// import MockProject2Screenshot from './assets/mock2-screenshot.png';

const Projects = () => {
  const realWorldProjects = [
    {
      id: 1,
      title: "Gelmar",
      description: "Comprehensive website redesign focusing on user experience enhancement and visual sophistication. Implemented modern design principles and improved site navigation.",
      image: "/path-to-gelmar-screenshot.png", // Replace with actual path
      link: "https://gelmar.co.za",
      technologies: ["React", "CSS", "JavaScript"],
      type: "Website Redesign"
    },
    {
      id: 2,
      title: "Green Pips Trading",
      description: "Developed a modern trading platform interface with enhanced user experience and streamlined trading workflows.",
      image: "/path-to-greenpips-screenshot.png", // Replace with actual path
      link: "https://greenpipstrading.com",
      technologies: ["React", "Node.js", "CSS"],
      type: "Trading Platform"
    }
  ];

  const personalProjects = [
    {
      id: 3,
      title: "Mock Company 1",
      description: "A fictional e-commerce platform showcasing modern design patterns and responsive layouts with advanced filtering capabilities.",
      image: "/path-to-mock1-screenshot.png", // Replace with actual path
      githubLink: "https://github.com/yourusername/mock-project-1",
      liveLink: "https://your-mock-project-1.netlify.app",
      technologies: ["React", "Tailwind CSS", "API Integration"],
      type: "E-commerce Platform"
    },
    {
      id: 4,
      title: "Mock Company 2",
      description: "A corporate website template featuring elegant animations, modern typography, and optimized performance metrics.",
      image: "/path-to-mock2-screenshot.png", // Replace with actual path
      githubLink: "https://github.com/yourusername/mock-project-2",
      liveLink: "https://your-mock-project-2.netlify.app",
      technologies: ["React", "GSAP", "CSS3"],
      type: "Corporate Website"
    }
  ];

  const ProjectCard = ({ project, isPersonal = false }) => (
    <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-light-grey text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {isPersonal ? (
            <>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                View Code
              </a>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Live Demo
              </a>
            </>
          ) : (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <FadeUp>
      <section id="projects" className="py-16 max-w-6xl mx-auto text-light-grey px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Projects & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contributions</span>
          </h2>
          <p className="text-light-grey max-w-2xl mx-auto">
            A showcase of my work ranging from real-world client projects to personal creative endeavors, 
            demonstrating versatility in modern web development.
          </p>
        </div>

        {/* Real World Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, #A855F7, transparent)' }}></div>
            <h3 className="text-2xl font-bold text-white mx-6">
              Real World Projects
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, #A855F7, transparent)' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realWorldProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, #A855F7, transparent)' }}></div>
            <h3 className="text-2xl font-bold text-white mx-6">
              Personal Projects
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, #A855F7, transparent)' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isPersonal={true} />
            ))}
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Projects;