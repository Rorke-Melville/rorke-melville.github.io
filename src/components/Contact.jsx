import React from 'react';
import FadeUp from './FadeUp';

const Contact = () => {
  return (
    <FadeUp>
      <section id="contact" className="py-16 max-w-5xl mx-auto text-light-grey">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
        <div
          className="bg-card-bg rounded-lg p-6 border-2 border-transparent shadow-lg"
          style={{
            background:
              'linear-gradient(#1A2634, #1A2634) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
          }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <label htmlFor="name" className="block mb-2 text-light-grey">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-card-bg border border-dark-red rounded-lg text-light-grey"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block mb-2 text-light-grey">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-card-bg border border-dark-red rounded-lg text-light-grey"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block mb-2 text-light-grey">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 bg-card-bg border border-dark-red rounded-lg text-light-grey"
                rows="5"
                placeholder="This form is for display purposes only"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-dark-red text-white rounded-lg hover:bg-light-grey hover:text-dark-red transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </FadeUp>
  );
};

export default Contact;