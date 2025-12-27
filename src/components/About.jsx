import React from 'react';
import { portfolioData } from '../data';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                {/* Header Style from Image */}
                <div className="section-header">
                    <h2 className="section-title" style={{ textTransform: 'lowercase' }}>about</h2>
                    <div className="section-line"></div>
                </div>

                <div style={{ marginBottom: '5rem' }}>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-light)',
                        lineHeight: '1.8',
                        maxWidth: '800px'
                    }}>
                        {portfolioData.personalInfo.about}
                    </p>
                </div>

                {/* 3-Column Skills/Stats Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Front-End</h3>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textDecoration: 'underline' }}>React, HTML, CSS</span>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Back-End</h3>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textDecoration: 'underline' }}>Java, SQL, MySQL</span>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AI & ML</h3>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '1rem', textDecoration: 'underline' }}>Python, Machine Learning</span>
                    </div>
                </div>

                {/* Keep Education Data Visible but minimal */}
                <div style={{ marginTop: '5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Education</h3>
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem', borderLeft: '3px solid #333', paddingLeft: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'white' }}>{edu.degree}</h4>
                            <p style={{ color: '#888', margin: '0.5rem 0' }}>{edu.institution} | {edu.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
