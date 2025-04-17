import React, { useState, useEffect, useRef } from 'react';
import FadeUp from './FadeUp';

const About = () => {
  const skillCards = [
    { title: 'UX/UI Design', icon: 'fas fa-paint-brush' },
    { title: 'Full Stack Development', icon: 'fas fa-code' },
    { title: 'React Development', icon: 'fab fa-react' },
    { title: 'JavaScript Frameworks', icon: 'fab fa-js' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
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

  // Define the order: Card 1 (index 0), Card 3 (index 2), Card 2 (index 1), Card 4 (index 3)
  const animationOrder = [0, 2, 1, 3];

  const [tilt, setTilt] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;

    const maxTilt = 10;
    const rotateX = -(mouseY / centerY) * maxTilt;
    const rotateY = (mouseX / centerX) * maxTilt;

    setTilt((prev) => ({
      ...prev,
      [index]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (index) => {
    setTilt((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <FadeUp>
      <section id="about" ref={sectionRef} className="py-16 max-w-5xl mx-auto text-light-grey">
        <style>
          {`
            .about-gradient-icon {
              background: linear-gradient(45deg, #3B82F6, #A855F7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .about-skill-card {
              opacity: 0;
              transform-style: preserve-3d;
              box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
              position: relative;
            }
            .about-skill-card.visible {
              animation: fadeIn 0.5s ease forwards;
            }
            .about-skill-card-content {
              transform: translateY(-20px);
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .about-skill-card.visible .about-skill-card-content {
              animation: slideDown 0.5s ease forwards;
            }
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            @keyframes slideDown {
              0% {
                transform: translateY(-20px);
              }
              100% {
                transform: translateY(0);
              }
            }
            ${animationOrder.map((index, order) => `
              .about-skill-card.visible[data-index="${index}"],
              .about-skill-card.visible[data-index="${index}"] .about-skill-card-content {
                animation-delay: ${order * 0.5}s;
              }
              .about-skill-card.visible[data-index="${index}"]::before {
                animation: splashWater1 1s ease forwards;
                animation-delay: ${order * 0.5}s;
              }
              .about-skill-card.visible[data-index="${index}"]::after {
                animation: splashWater2 1s ease forwards;
                animation-delay: ${order * 0.5}s;
              }
            `).join('')}
            @keyframes splash {
              0% {
                box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
              }
              100% {
                box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
              }
            }
            .about-skill-card::before,
            .about-skill-card::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0;
              height: 0;
              background: radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent);
              border-radius: 50%;
              transform: translateX(-50%) scale(0);
              z-index: -1;
            }
            @keyframes splashWater1 {
              0% {
                width: 0;
                height: 0;
                transform: translateX(-50%) scale(0);
                opacity: 1;
              }
              100% {
                width: 150px;
                height: 30px;
                transform: translateX(-50%) scale(1);
                opacity: 0;
              }
            }
            @keyframes splashWater2 {
              0% {
                width: 0;
                height: 0;
                transform: translateX(-50%) scale(0);
                opacity: 1;
              }
              100% {
                width: 200px;
                height: 40px;
                transform: translateX(-50%) scale(1);
                opacity: 0;
              }
            }
          `}
        </style>
        <h2 className="text-5xl font-bold mb-6 text-left">About Me</h2>
        <div className="max-w-4xl">
          <p className="text-xl mb-8 text-left">
            As a web developer with foundational experience in Adobe Magento 2 and user experience optimization, I bring a creative and proactive approach to solving technical challenges. My journey includes practical development work complemented by diverse experiences in coaching and management, which instilled strong principles of teamwork, leadership, and maintaining a positive focus on results. Valuing honesty and lifelong learning, I am committed to contributing solutions that genuinely improve processes and user engagement. My professional energy is now also directed towards software and full-stack development, leveraging my adaptability and enthusiasm to help forward-thinking organizations master new technologies and drive meaningful success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {skillCards.map((card, index) => (
            <div
              key={index}
              data-index={index}
              className={`bg-card-bg rounded-lg p-6 flex flex-col items-center border-2 border-transparent about-skill-card ${isVisible ? 'visible' : ''}`}
              style={{
                background: 'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
                transform: `rotateX(${(tilt[index]?.rotateX || 0)}deg) rotateY(${(tilt[index]?.rotateY || 0)}deg)`,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="about-skill-card-content">
                <i className={`${card.icon} text-4xl about-gradient-icon mb-4`}></i>
                <h4 className="text-lg font-semibold text-white text-center">{card.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
};

export default About;