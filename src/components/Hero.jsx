// javascript
// this is hero jsx file 
import React from 'react';
import { portfolioData } from '../data';

const Hero = () => {
    return (
        <section id="hero" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: '80px'
        }}>
            <div className="container grid-2">
                {/* Left Content */}
                <div style={{ textAlign: 'left' }}>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: '#fff', 
                        fontWeight: 600, 
                        marginBottom: '0.5rem' 
                    }}>
                        Hello, I'm {portfolioData.personalInfo.name.split(' ')[0]},
                    </p>

                    <h1 style={{ 
                        fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', 
                        lineHeight: 1.1, 
                        marginBottom: '2rem',
                        color: '#9ca3af' // Muted grey for the big title as per darker aesthetic
                    }}>
                        <span style={{ color: '#fff' }}>{portfolioData.personalInfo.role.split(' & ')[1] || "Developer"}</span><br />
                        {portfolioData.personalInfo.role.split(' & ')[0] || "Designer"}
                    </h1>

                    <a href="#contact" className="link-underline">
                        Contact Me
                    </a>
                </div>

                {/* Right Image Placeholder */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '450px',
                        aspectRatio: '0.85',
                        background: 'linear-gradient(to bottom right, #333, #151515)',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}>
                        {/* Placeholder text or Icon */}
                        <span style={{ color: '#555', fontSize: '1.5rem', fontWeight: 600 }}>
                            [ Your Image ]
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

