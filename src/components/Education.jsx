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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? education.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === education.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, 3000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isHovered]);

  return (
    <FadeUp>
      <section id="education" className="max-w-5xl mx-auto text-light-grey py-8">
        <style>
          {`
            .carousel-container {
              position: relative;
              width: 100%;
              height: 400px;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .carousel-card {
              position: absolute;
              width: 100%;
              max-width: 800px;
              opacity: 0;
              transform: translateX(-100%) translateY(50%);
              transition: opacity 0.5s ease, transform 0.5s ease;
              display: none;
              pointer-events: none;
            }
            .carousel-card.incoming {
              display: flex;
              opacity: 0;
              transform: translateX(-100%) translateY(50%);
              pointer-events: none;
              z-index: 4;
            }
            .carousel-card.active {
              display: flex;
              opacity: 1;
              transform: translateX(0) translateY(0);
              pointer-events: auto;
              z-index: 5;
            }
            .carousel-card.exit {
              display: flex;
              opacity: 0;
              transform: translateX(100%) translateY(-50%);
              pointer-events: none;
              z-index: 4;
            }
            .arrow {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(26, 38, 52, 0.8);
              border: 2px solid transparent;
              background: linear-gradient(rgba(26, 38, 52, 0.8), rgba(26, 38, 52, 0.8)) padding-box,
                          linear-gradient(45deg, #3B82F6, #A855F7) border-box;
              color: white;
              width: 36px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              border-radius: 50%;
              cursor: pointer;
              z-index: 10;
              transition: box-shadow 0.3s ease;
            }
            .arrow:hover {
              box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
            }
            .arrow-left {
              left: 45px;
            }
            .arrow-right {
              right: 45px;
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
        <h2 className="text-4xl font-bold text-center mb-8">Education & Courses</h2>
        <div className="carousel-container">
          <div className="arrow arrow-left" onClick={goToPrevious}>←</div>
          {education.map((edu, index) => {
            let cardClass = 'carousel-card';
            if (index === currentIndex) {
              cardClass += ' active';
            } else if (index === (currentIndex - 1 + education.length) % education.length) {
              cardClass += ' exit';
            } else if (index === (currentIndex + 1) % education.length) {
              cardClass += ' incoming';
            }
            return (
              <div
                key={index}
                className={`bg-card-bg rounded-lg p-6 flex flex-col md:flex-row border-2 border-transparent shadow-lg ${cardClass}`}
                style={{
                  background:
                    'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white text-left">{edu.degree}</h3>
                  {edu.institution && (
                    <p className="text-sm text-light-grey text-left">
                      {edu.institution} | {edu.period}
                    </p>
                  )}
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
                  <img
                    src={edu.logo}
                    alt={`${edu.institution || 'Udemy'} Logo`}
                    className="w-26 h-26 object-contain"
                  />
                </div>
              </div>
            );
          })}
          <div className="arrow arrow-right" onClick={goToNext}>→</div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Education;