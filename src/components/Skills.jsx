import React from 'react';
import { portfolioData } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="title">My <span className="text-gradient">Expertise</span></h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {portfolioData.skills.map((skill, idx) => (
                        <div key={idx} className="skill-pill" style={{
                            padding: '12px 24px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            color: 'var(--text-main)',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(56, 189, 248, 0.1)';
                                e.target.style.borderColor = 'var(--accent)';
                                e.target.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
