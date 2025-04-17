import React, { useState, useEffect, useRef } from 'react';
import FadeUp from './FadeUp';
import UpLogo from './assets/up_logo-650x479.png';
import MhsBadge from './assets/Mhs_badgeNB.png';
import UdemyLogo from './assets/udemylogo.png';

const Education = () => {
  const education = [
    {
      degree: 'BIS Information Science',
      institution: 'University of Pretoria',
      period: 'Graduated: 2023',
      logo: UpLogo,
      link: 'https://www.up.ac.za/',
    },
    {
      degree: 'Matric in Science, IT & EGD',
      institution: 'Michaelhouse',
      period: 'Matriculated: 2019',
      logo: MhsBadge,
      link: 'https://www.michaelhouse.org/',
    },
    {
      degree: 'Udemy Courses',
      institution: '',
      period: '',
      courses: [
        {
          name: 'React Native & Expo: Build a Modern eCommerce App Fast 2025',
          details: ['React Native, Expo, MangoDB, Express, Nativewind'],
        },
        {
          name: 'The Complete Web Developer Course 3.0',
          details: ['HTML 5, CSS 3, JavaScript, jQuery, Bootstrap 5, WordPress, PHP, MySQL, APIs, Linux Command Line, Python, SEO'],
        },
        {
          name: 'Data Analysis & Business Intelligence: SQL MySQL Power BI',
          details: ['SQL, MySQL, Power BI, Microsoft SQL, PostgreSQL, Tableau'],
        },
        {
          name: 'Blazor CRUD Jumpstart',
          details: ['Blazor and Entity Framework Core in .NET 8'],
        },
      ],
      logo: UdemyLogo,
      link: 'https://www.udemy.com/',
    },
  ];

  const [cardTops, setCardTops] = useState(() => {
    const windowHeight = window.innerHeight;
    return [windowHeight, windowHeight, windowHeight]; // Start just below the viewport
  });
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollProgress = Math.max(0, windowHeight - sectionTop);

      // Sequential movement with adjusted timing
      const initialDelay = 200; // Delay before Card 1 starts moving
      const scrollPerCard = 200; // Scroll distance per card
      const headingHeight = 60; // Estimated heading height (text-4xl + padding)
      const baseTop = headingHeight + 20; // Base top position for Card 1 (below heading)

      const tops = education.map((_, index) => {
        const startScroll = initialDelay + index * scrollPerCard; // Card 1: 200px, Card 2: 400px, Card 3: 600px
        const endScroll = initialDelay + (index + 1) * scrollPerCard; // Card 1: 400px, Card 2: 600px, Card 3: 800px
        const finalTop = baseTop + index * 30; // Final position: Card 1: 80px, Card 2: 110px, Card 3: 140px

        if (scrollProgress < startScroll) {
          // Before this card's scroll range: keep it just below the viewport
          return windowHeight;
        } else if (scrollProgress >= startScroll && scrollProgress <= endScroll) {
          // Within this card's scroll range: move it up to final position
          const progress = (scrollProgress - startScroll) / scrollPerCard;
          const newTop = windowHeight - progress * (windowHeight - finalTop);
          return Math.max(newTop, finalTop); // Ensure it doesn't go above finalTop
        } else {
          // After this card's scroll range: lock it in final position
          return finalTop;
        }
      });

      setCardTops(tops);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set positions

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FadeUp>
      <section id="education" ref={sectionRef} className="max-w-5xl mx-auto text-light-grey">
        <style>
          {`
            .education-section {
              position: sticky;
              top: 60px; /* Account for navbar height */
              min-height: 100vh; /* Ensure the section takes up the viewport */
              height: 450px; /* Adjusted height: heading (60px) + Card 3 top (140px) + card height (~300px) - reduced buffer */
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .education-heading {
              width: 100%;
              max-width: 1280px; /* Match max-w-5xl */
              text-align: center;
              background: inherit;
              z-index: 10;
              padding: 1rem 0;
            }
            .education-container {
              position: relative;
              width: 100%;
              height: 100%;
            }
            .education-card {
              position: absolute; /* Position relative to the section */
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
              max-width: 800px;
              opacity: 0;
              transition: opacity 0.5s ease, top 0.5s ease;
            }
            .education-card.visible {
              opacity: 1;
            }
            .education-button {
              background: rgba(26, 38, 52, 0.8);
              border: 2px solid transparent;
              background: linear-gradient(rgba(26, 38, 52, 0.8), rgba(26, 38, 52, 0.8)) padding-box,
                          linear-gradient(45deg, #3B82F6, #A855F7) border-box;
              color: white;
              transition: box-shadow 0.3s ease;
            }
            .education-button:hover {
              box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
            }
          `}
        </style>
        <div className="education-section">
          <h2 className="text-4xl font-bold text-center education-heading">Education & Courses</h2>
          <div className="education-container" ref={containerRef}>
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-card-bg rounded-lg p-6 flex flex-col md:flex-row border-2 border-transparent shadow-lg education-card ${cardTops[index] <= window.innerHeight - 50 ? 'visible' : ''}`}
                style={{
                  background:
                    'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
                  top: `${cardTops[index]}px`, // Position relative to the section
                  zIndex: index, // Card 3 in front, Card 1 at back
                }}
              >
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white text-left">{edu.degree}</h3>
                  {edu.institution && <p className="text-sm text-light-grey text-left">{edu.institution} | {edu.period}</p>}
                  {edu.courses && (
                    <ul className="list-disc list-inside mt-2 text-light-grey">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="text-left">
                          <strong>{course.name}:</strong>
                          <ul className="list-disc list-inside ml-4">
                            {course.details.map((detail, j) => (
                              <li key={j} className="text-left">{detail}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 rounded-lg education-button"
                  >
                    Visit Website
                  </a>
                </div>
                <div className="md:w-1/4 flex justify-center items-center mt-4 md:mt-0">
                  <img src={edu.logo} alt={`${edu.institution || 'Udemy'} Logo`} className="w-26 h-26 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Education;