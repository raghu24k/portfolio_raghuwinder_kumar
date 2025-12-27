import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import { Github } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Split name for styling "First" "Last"
    const fullName = portfolioData.personalInfo.name.split(' ');
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(' ');

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '2rem 0',
            background: scrolled ? 'var(--bg-color)' : 'transparent',
            transition: 'all 0.3s ease',
            zIndex: 1000
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo / Name */}
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                    {firstName}<span style={{ color: '#aaa', fontWeight: 400 }}>{lastName}</span>
                </a>

                {/* Center Links */}
                <div style={{ display: 'flex', gap: '3rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} className="nav-links">
                    <a href="#hero" style={{ fontSize: '1rem', color: '#fff' }}>Home</a>
                    <a href="#about" style={{ fontSize: '1rem', color: '#fff' }}>About</a>
                    <a href="#projects" style={{ fontSize: '1rem', color: '#fff' }}>Work</a>
                </div>

                {/* Right Icon */}
                <div>
                    {portfolioData.socials.find(s => s.name === 'GitHub') && (
                        <a href={portfolioData.socials.find(s => s.name === 'GitHub').url} target="_blank" rel="noreferrer">
                            <Github color="#fff" size={28} />
                        </a>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                }
            `}} />
        </nav>
    );
};

export default Navbar;
