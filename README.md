# React CV Site

This project is a personal CV website built using React and styled with Tailwind CSS. It showcases the individual's skills, experience, education, and projects in a modern and responsive layout.

## Project Structure

```
react-cv-site
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Contains all React components
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   ├── Offcanvas.jsx  # Offcanvas menu component
│   │   ├── Hero.jsx      # Hero section component
│   │   ├── About.jsx     # About section component
│   │   ├── Skills.jsx    # Skills section component
│   │   ├── Experience.jsx # Experience section component
│   │   ├── Education.jsx  # Education section component
│   │   └── Projects.jsx   # Projects section component
│   ├── App.jsx           # Main application component
│   ├── index.css         # Main CSS file for Tailwind CSS styles
│   └── index.js          # Entry point of the React application
├── tailwind.config.js    # Configuration file for Tailwind CSS
├── postcss.config.js     # Configuration file for PostCSS
├── package.json          # npm configuration file
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-cv-site
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- PostCSS: A tool for transforming CSS with JavaScript plugins.

## Features

- Responsive design that adapts to different screen sizes.
- Offcanvas navigation for easy access to different sections.
- Progress bars to visually represent skills.
- Sections for experience, education, and projects.

## Author

Rorke Melville

## License

This project is open-source and available under the [MIT License](LICENSE).