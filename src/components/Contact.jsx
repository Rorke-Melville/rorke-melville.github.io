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
          <style>
            {`
              .form-group {
                position: relative;
                margin-bottom: 1.5rem;
              }
              .form-group .contact-input,
              .form-group .contact-textarea {
                width: 100%;
                padding: 0.75rem;
                background: #2A3545;
                border: 2px solid transparent;
                border-image: linear-gradient(45deg, #3B82F6, #A855F7) 1;
                color: #D1D5DB;
                transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
              }
              .form-group .contact-textarea {
                resize: vertical;
              }
              .form-group .contact-input:focus,
              .form-group .contact-textarea:focus {
                background: transparent;
                border: 2px solid transparent;
                border-image: linear-gradient(45deg, #3B82F6, #A855F7) 1;
                box-shadow: 0 0 8px 2px rgba(113, 107, 246, 0.5);
                outline: none;
              }
              .form-group label {
                position: absolute;
                left: 0.75rem;
                top: 50%;
                transform: translateY(-50%);
                color: #6B7280;
                font-size: 1rem;
                pointer-events: none;
                transition: all 0.3s ease;
                background: #2A3545;
                padding: 0 0.25rem;
              }
              .form-group input:focus + label,
              .form-group textarea:focus + label,
              .form-group input:not(:placeholder-shown) + label,
              .form-group textarea:not(:placeholder-shown) + label {
                top: 0;
                transform: translateY(-100%) scale(0.85);
                color: #FFFFFF;
                background: transparent;
              }
              .form-group input::placeholder,
              .form-group textarea::placeholder {
                color: transparent;
              }
              .contact-links {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                margin-top: 1.5rem;
                flex-wrap: wrap;
              }
              .contact-link, .contact-text {
                display: flex;
                align-items: center;
                color: #D1D5DB;
                text-decoration: none;
                transition: all 0.3s ease;
              }
              .contact-link:hover, .contact-text:hover {
                background: linear-gradient(45deg, #3B82F6, #A855F7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                color: #A855F7; /* Fallback for older browsers */
              }
              .contact-link i, .contact-text i {
                margin-right: 0.5rem;
                font-size: 1.2rem;
              }
            `}
          </style>
          <form action="https://getform.io/f/byvkndla" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input"
                  style={{ borderRadius: '10px' }}
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-input"
                  style={{ borderRadius: '10px' }}
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="contact-textarea"
                style={{ borderRadius: '10px' }}
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg education-button"
                style={{
                  background:
                    'linear-gradient(rgba(26, 38, 52, 0.8), rgba(26, 38, 52, 0.8)) padding-box, linear-gradient(45deg, #3B82F6, #A855F7) border-box',
                  border: '2px solid transparent',
                  color: 'white',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 8px 2px rgba(113, 107, 246, 0.5)')}
                onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rorke-melville/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Rorke-Melville" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:rorkemelville2@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default Contact;