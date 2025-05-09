import React, { useEffect } from 'react';
import FadeUp from './FadeUp';
import Before from './assets/before.png';
import After1 from './assets/after1.png';
import Before1 from './assets/before1.png';
import After2 from './assets/after2.png';
import Before2 from './assets/before2.png';
import After3 from './assets/after3.png';
import Before4 from './assets/before4.png';
import After10 from './assets/after10.png';

const Projects = () => {
  const sliders = [
    { before: Before, after: After1, id: 'slider1' },
    { before: Before1, after: After2, id: 'slider2' },
    //{ before: Before2, after: After3, id: 'slider3' },
    { before: Before4, after: After10, id: 'slider4' },
  ];

  useEffect(() => {
    const handleSliderChange = (e) => {
      const sliderId = e.target.dataset.target;
      const value = e.target.value;
      const afterImage = document.querySelector(`.${sliderId} .after-image`);
      afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    };

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider) => {
      slider.addEventListener('input', handleSliderChange);
    });

    return () => {
      sliders.forEach((slider) => {
        slider.removeEventListener('input', handleSliderChange);
      });
    };
  }, []);

  return (
    <FadeUp>
      <section id="projects" className="py-16 max-w-5xl mx-auto text-light-grey">
        <h2 className="text-4xl font-bold mb-6 text-left">Projects & Contributions</h2>
        <h3 className="text-xl font-semibold mb-4 text-left">Gelmar’s New Look</h3>
        <p className="text-light-grey mb-8 text-left">
          During my time at Gelmar, I undertook a series of thoughtful and strategic enhancements to their website, with the primary goals of significantly improving the user experience and elevating its visual sophistication. Below, you will find a collection of before-and-after representations that vividly illustrate the impact of these changes. Each example showcases the evolution of key elements, highlighting the careful design decisions and attention to detail that have contributed to the site’s overall improvement. To explore these visuals, use the slider to seamlessly transition between the original and updated versions, offering a clear perspective on the transformative journey of the website.
        </p>
        <div className="space-y-8">
          {sliders.map((slider, index) => (
            <div key={index} className={`before-after-slider ${slider.id}`}>
              <div className="relative w-full h-96">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="slider absolute top-0 left-0 w-full z-10"
                  data-target={slider.id}
                />
                <div className="relative w-full h-full">
                  <img src={slider.before} alt="Before" className="absolute w-full h-full object-cover rounded-[8px]" />
                  <img src={slider.after}  alt="After" className={`absolute w-full h-full object-cover after-image rounded-[8px]`} style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
};

export default Projects;
