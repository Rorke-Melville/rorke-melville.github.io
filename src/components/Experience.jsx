import React, { useState, useEffect, useRef } from 'react';
import FadeUp from './FadeUp';

const Experience = () => {
  const experiences = [
    {
      title: 'Remote Software Developer',
      company: 'Freelance',
      dates: '2023 – Present',
      description: 'Built a variety of personal projects using React, JavaScript, and PHP, focusing on developing practical, user-friendly solutions. These projects helped me strengthen my understanding of full-stack development, user-centered design, and the importance of thoughtful, clear communication when building applications.',
    },
    {
      title: 'Junior Web Developer',
      company: 'Gelmar',
      dates: '2024 – Present',
      description: 'Brought custom Magento 2 modules to life using PHP and HTML, contributing to meaningful improvements across both the backend and frontend. With little prior experience on the platform, I quickly found my footing and began building solutions that enhanced site functionality and elevated the user experience. This role has fueled my passion for clean, purposeful design and sharpened my drive to keep learning, creating, and growing as a developer.',
    },
    {
      title: 'Sales & Coaching Experience',
      company: 'Various',
      dates: '2019 – 2024',
      description: 'Cultivated strong teamwork, leadership, and communication skills through hands-on experience in sales and sports coaching. These roles taught me how to foster collaboration, adapt to different team dynamics, and stay focused on shared goals—skills that continue to shape how I approach problem-solving and contribute in tech environments.',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]); // One state for each card
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Stagger card visibility based on when the line reaches each card
            setTimeout(() => {
              setCardVisibility((prev) => [true, prev[1], prev[2]]); // Card 1 at 0.67s
            }, 670);
            setTimeout(() => {
              setCardVisibility((prev) => [prev[0], true, prev[2]]); // Card 2 at 1.33s
            }, 1330);
            setTimeout(() => {
              setCardVisibility((prev) => [prev[0], prev[1], true]); // Card 3 at 2s
            }, 2000);
          }, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <FadeUp>
      <section id="experience" ref={sectionRef} className="py-16 max-w-5xl mx-auto text-light-grey">
        <style>
          {`
            .timeline {
              position: relative;
              padding: 0;
              list-style: none;
            }
            .timeline::before {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              left: 50%;
              width: 2px;
              background: linear-gradient(180deg, #3B82F6, #A855F7);
              transform: translateX(-50%);
              opacity: 0;
            }
            .timeline.visible::before {
              opacity: 1;
              animation: drawLine 2s ease forwards;
            }
            @keyframes drawLine {
              0% {
                height: 0;
              }
              100% {
                height: 100%;
              }
            }
            .timeline-item {
              position: relative;
              width: 50%;
              padding: 20px;
              box-sizing: border-box;
            }
            .timeline-item:nth-child(odd) {
              left: 0;
              text-align: right;
            }
            .timeline-item:nth-child(even) {
              left: 50%;
              text-align: left;
            }
            .timeline-card {
              background: rgba(26, 38, 52, 0.8);
              border: 2px solid transparent;
              border-radius: 8px;
              padding: 16px;
              box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
              transition: transform 0.3s ease;
              position: relative;
              opacity: 0;
            }
            .timeline-card.visible[data-index="0"],
            .timeline-card.visible[data-index="2"] {
              animation: fadeRightToLeft 0.5s ease forwards;
            }
            .timeline-card.visible[data-index="1"] {
              animation: fadeLeftToRight 0.5s ease forwards;
            }
            @keyframes fadeRightToLeft {
              0% {
                opacity: 0;
                transform: translateX(20px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes fadeLeftToRight {
              0% {
                opacity: 0;
                transform: translateX(-20px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .timeline-card:hover {
              transform: translateY(-5px);
            }
            .timeline-item:nth-child(odd) .timeline-card::after {
              content: '';
              position: absolute;
              top: 50%;
              right: -10px;
              width: 20px;
              height: 2px;
              background: linear-gradient(90deg, #3B82F6, #A855F7);
              transform: translateY(-50%);
              opacity: 0;
            }
            .timeline-item:nth-child(even) .timeline-card::after {
              content: '';
              position: absolute;
              top: 50%;
              left: -10px;
              width: 20px;
              height: 2px;
              background: linear-gradient(90deg, #3B82F6, #A855F7);
              transform: translateY(-50%);
              opacity: 0;
            }
            .timeline.visible .timeline-item:nth-child(odd) .timeline-card::after,
            .timeline.visible .timeline-item:nth-child(even) .timeline-card::after {
              opacity: 1;
            }
            .timeline-description {
              margin-top: 8px;
            }
          `}
        </style>
        <h2 className="text-4xl font-bold mb-12 text-left">Experience</h2>
        <ul className={`timeline ${isVisible ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <li key={index} className="timeline-item">
              <div
                className={`timeline-card ${cardVisibility[index] ? 'visible' : ''}`}
                data-index={index}
                style={{
                  background: 'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
                }}
              >
                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                <p className="text-sm text-light-grey">{exp.company} | {exp.dates}</p>
                <p className="text-sm text-light-grey timeline-description">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </FadeUp>
  );
};

export default Experience;