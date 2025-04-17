import React from 'react';

const Offcanvas = () => {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvas">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvas">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="offcanvas-li"><a className="dropdown-item" href="#about">About Me</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#skills">Skills</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#experience">Experience</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#education">Education</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#projects">Projects</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#videos">Videos</a></li>
          <li className="offcanvas-li"><a className="dropdown-item" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Offcanvas;