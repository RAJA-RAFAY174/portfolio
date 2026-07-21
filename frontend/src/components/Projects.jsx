import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section" id="project">
      <div className="projects-head">
        <h2>Projects</h2>
        <p>Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
      </div>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading projects...</p>
      ) : (
        <div className="chroma-grid">
          {projects.map((project, idx) => (
            <article className="chroma-card" key={idx}>
              <div className="chroma-inner">
                <div className="chroma-img-wrapper">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                 <footer className="chroma-info">
                  <h3 className="name">{project.title}</h3>
                  <p className="role">{project.description}</p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link github">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link live">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
