import React from 'react';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';
import ProfilePic from './assets/f3848e99-b88a-4b10-8824-cb5891e48fdf.webp';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.4 } },
  };

  return (
    <FadeUp>
      <section id="hero" className="min-h-screen flex items-center justify-center text-light-grey">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:flex-row md:items-start px-4">
          <div className="md:w-2/3 text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-left"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              Hi, I'm Rorke
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-6 text-left"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              I craft innovative and user-focused solutions that empower business growth.
            </motion.p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <motion.img
              src={ProfilePic}
              alt="Rorke's Profile"
              className="rounded-full w-52 h-52 object-cover shadow-lg"
              initial="hidden"
              animate="visible"
              variants={variants}
            />
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Hero;