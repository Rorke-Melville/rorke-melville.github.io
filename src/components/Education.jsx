import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import FadeUp from './FadeUp';
import UpLogo from './assets/up_logo-650x479.png';
import MhsBadge from './assets/Mhs_badgeNB.png';
import UdemyLogo from './assets/udemylogo.png';

const CardRotate = ({ children, onSendToBack, sensitivity }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
};

const EducationCard = ({ edu, index, isDesktop, sendToBack, cards }) => {
  const cardContent = (
    <div className="flex h-full p-6">
      <div className="md:w-3/4 w-full">
        <h3 className="text-lg font-semibold text-white text-left">{edu.degree}</h3>
        {edu.institution && (
          <p className="text-xs text-light-grey text-left">
            {edu.institution} | {edu.period}
          </p>
        )}
        {edu.courses && (
          <ul className="list-disc list-inside mt-2 text-light-grey">
            {edu.courses.map((course, i) => (
              <li key={i} className="text-left text-sm">{course.name}</li>
            ))}
          </ul>
        )}
        <div className="flex justify-center mt-4">
          <a
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 text-sm rounded-lg bg-card-bg text-white"
            style={{
              background: 'linear-gradient(rgba(26, 38, 52, 0.8), rgba(26, 38, 52, 0.8)) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
              border: '2px solid transparent',
            }}
          >
            Visit Website
          </a>
        </div>
      </div>
      <div className="md:w-1/4 hidden md:flex justify-center items-center">
        <img
          src={edu.logo}
          alt={`${edu.institution || 'Udemy'} Logo`}
          className="w-26 h-26 object-contain"
        />
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <CardRotate
        key={edu.id}
        onSendToBack={() => sendToBack(edu.id)}
        sensitivity={200}
      >
        <motion.div
          className="rounded-lg border-2 border-transparent shadow-lg overflow-hidden"
          style={{
            background: 'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
            width: 600,
            height: 300,
          }}
          animate={{
            rotateZ: (cards.length - index - 1) * 4,
            scale: 1 + index * 0.06 - cards.length * 0.06,
            transformOrigin: '90% 90%',
          }}
          initial={false}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => sendToBack(edu.id)}
        >
          {cardContent}
        </motion.div>
      </CardRotate>
    );
  }

  // Mobile view - static cards
  return (
    <motion.div
      key={edu.id}
      className="rounded-lg border-2 border-transparent shadow-lg overflow-hidden mb-6 mx-4"
      style={{
        background: 'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
        minHeight: '200px',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Mobile: Show logo at the top */}
      <div className="md:hidden flex justify-center pt-4">
        <img
          src={edu.logo}
          alt={`${edu.institution || 'Udemy'} Logo`}
          className="w-16 h-16 object-contain"
        />
      </div>
      {cardContent}
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Matric in Science, IT & EGD',
      institution: 'Michaelhouse',
      period: 'Matriculated: 2019',
      logo: MhsBadge,
      link: 'https://www.michaelhouse.org/',
    },
    {
      id: 2,
      degree: 'BIS Information Science',
      institution: 'University of Pretoria',
      period: 'Graduated: 2023',
      logo: UpLogo,
      link: 'https://www.up.ac.za/',
    },
    {
      id: 3,
      degree: 'Udemy Courses',
      institution: '',
      period: '',
      courses: [
        { name: 'React Native & Expo: Build a Modern eCommerce App Fast 2025' },
        { name: 'The Complete Web Developer Course 3.0' },
        { name: 'Data Analysis & Business Intelligence: SQL MySQL Power BI' },
        { name: 'Blazor CRUD Jumpstart' },
      ],
      logo: UdemyLogo,
      link: 'https://www.udemy.com/',
    },
  ];

  const [cards, setCards] = useState(education.reverse());

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <FadeUp>
      <section id="education" className="max-w-5xl mx-auto text-light-grey py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Education & Courses</h2>
        
        {/* Desktop View */}
        <div className="hidden md:flex justify-center">
          <div className="relative mb-[25px]" style={{ width: 600, height: 300, perspective: 600 }}>
            {cards.map((edu, index) => (
              <EducationCard
                key={edu.id}
                edu={edu}
                index={index}
                isDesktop={true}
                sendToBack={sendToBack}
                cards={cards}
              />
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Display in original order (Michaelhouse, UP, Udemy) */}
          {education.slice().reverse().map((edu, index) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              index={index}
              isDesktop={false}
              sendToBack={sendToBack}
              cards={cards}
            />
          ))}
        </div>
      </section>
    </FadeUp>
  );
};

export default Education;