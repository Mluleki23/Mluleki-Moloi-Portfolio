const Projects = () => {
  const projects = [
    {
      title: "Shopping List App",
      description: "A practical shopping list application that helps users organize their grocery shopping. Features include adding, editing, and deleting items, with a clean and intuitive interface for managing shopping lists efficiently.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      github: "https://github.com/Mluleki23/Task-5-Shopping-List-App-",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800&h=600&fit=crop"
    },
    {
      title: "Links Vault",
      description: "A bookmark management application for organizing and storing important links. Users can categorize, search, and manage their favorite websites and resources in one centralized location.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Web Storage API"],
      github: "https://github.com/Mluleki23/Task-2-Links-Vault",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    },
    {
      title: "Ollama AI React",
      description: "An AI-powered application built with React that integrates with Ollama for intelligent conversations and interactions. Demonstrates modern AI integration techniques and responsive UI design.",
      techStack: ["React", "TypeScript", "Ollama AI", "REST API"],
      github: "https://github.com/Mluleki23/Ollama-AI-React",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Weather Application",
      description: "A comprehensive weather application that provides real-time weather information, forecasts, and detailed meteorological data. Features location-based weather updates and beautiful data visualization.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Weather API", "Geolocation"],
      github: "https://github.com/Mluleki23/Task-4-Weather-Application",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features include dynamic routing, smooth animations, and a clean, professional design showcasing my skills, education, and projects.",
      techStack: ["React", "TypeScript", "CSS3", "React Router", "Vite"],
      github: "https://github.com/Mluleki23/Mluleki-Moloi-Portfolio",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="projects-subtitle">A collection of my work showcasing various technologies and skills</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>View on GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <h2>Interested in collaborating?</h2>
        <p>I'm always open to working on exciting new projects</p>
        <a href="/contact" className="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  );
};

export default Projects;