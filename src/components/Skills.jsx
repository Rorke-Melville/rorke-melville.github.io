import React from 'react';
import FadeUp from './FadeUp';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'jQuery', icon: 'fas fa-code' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  ];

  const particleCount = 10; // Number of particles per card

  return (
    <FadeUp>
      <section id="skills" className="py-16 max-w-6xl mx-auto text-light-grey">
        <style>
          {`
            .gradient-icon {
              background: linear-gradient(45deg, #3B82F6, #A855F7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              transition: transform 0.3s ease;
            }
            .skill-card {
              position: relative;
              transition: box-shadow 0.3s ease;
            }
            .skill-card:hover {
              animation: pulseGlow 1.5s infinite ease-in-out;
            }
            .skill-card:hover .gradient-icon {
              transform: scale(1.1);
            }
            @keyframes pulseGlow {
              0% {
                box-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(168, 85, 247, 0.5);
              }
              50% {
                box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(168, 85, 247, 0.8);
              }
              100% {
                box-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(168, 85, 247, 0.5);
              }
            }
            .particle {
              position: absolute;
              width: 3px;
              height: 3px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 50%;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .skill-card:hover .particle {
              opacity: 1;
            }
            ${Array.from({ length: particleCount }, (_, i) => `
              .particle-${i} {
                animation: orbit-${i} ${2 + i * 0.3}s linear infinite;
                transform-origin: center center;
              }
              @keyframes orbit-${i} {
                0% {
                  transform: translate(-50%, -50%) rotate(${i * 72}deg) translateY(-55px);
                }
                100% {
                  transform: translate(-50%, -50%) rotate(${i * 72 + 360}deg) translateY(-55px);
                }
              }
            `).join('')}
          `}
        </style>
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex justify-center flex-wrap gap-6 max-w-7xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-24 h-24 rounded-full border-2 border-transparent skill-card"
              style={{
                background: 'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <i className={`${skill.icon} text-3xl gradient-icon`}></i>
                <span className="mt-2 text-xs text-light-grey text-center">{skill.name}</span>
              </div>
              {Array.from({ length: particleCount }).map((_, i) => (
                <div
                  key={i}
                  className={`particle particle-${i}`}
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
};

export default Skills;