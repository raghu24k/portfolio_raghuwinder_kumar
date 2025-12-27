import React from 'react';
import { portfolioData } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <h2 className="section-title" style={{ textTransform: 'lowercase' }}>work</h2>
                    <div className="section-line"></div>
                </div>

                <p style={{ maxWidth: '800px', marginBottom: '4rem', color: '#a3a3a3' }}>
                    A selection of my recent projects. I specialize in building robust applications with clean code and intuitive user interfaces.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem'
                }} className="projects-grid">
                    {portfolioData.projects.map((project, idx) => (
                        <div key={idx} className="project-item">
                            {/* Card Visual / Mockup */}
                            <div style={{
                                background: 'linear-gradient(135deg, #4c1d95 0%, #3b82f6 100%)', // Deep purple-blue
                                aspectRatio: '16/9',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Inner "App Screen" Placeholder */}
                                <div style={{
                                    width: '80%',
                                    height: '80%',
                                    background: '#fff',
                                    borderRadius: '4px',
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}>
                                    <div style={{ width: '30%', height: '8px', background: '#e5e7eb', marginBottom: '1rem' }} />
                                    <div style={{ flex: 1, background: '#f3f4f6', borderRadius: '2px' }} />
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: '#777',
                                        fontFamily: 'monospace',
                                        textTransform: 'uppercase'
                                    }}>
                                        {project.techStack.join('  •  ')}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                                            <Github size={20} color="#fff" />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noreferrer">
                                            <ExternalLink size={20} color="#fff" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .projects-grid { grid-template-columns: 1fr !important; }
                }
            `}} />
        </section>
    );
};

export default Projects;
