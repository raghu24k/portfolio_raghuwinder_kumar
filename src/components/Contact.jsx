import React from 'react';
import { portfolioData } from '../data';
import { Github, Instagram, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {/* Header */}
                <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '2rem' }}>
                        <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Contact Me</h2>
                        <div className="section-line"></div>
                    </div>
                    <p style={{ color: '#aaa', fontSize: '1.1rem', marginTop: '2rem' }}>
                        I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Form Visual */}
                <form style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }} onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', letterSpacing: '1px' }}>Name</label>
                        <input type="text" className="custom-input" />
                    </div>
                    <div>
                        <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', letterSpacing: '1px' }}>Email</label>
                        <input type="email" className="custom-input" />
                    </div>
                    <div>
                        <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', letterSpacing: '1px' }}>Message</label>
                        <textarea className="custom-input" rows={4} style={{ resize: 'vertical' }}></textarea>
                    </div>

                    <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                        <button className="btn-text">Send Message</button>
                    </div>
                </form>

                {/* Footer Part */}
                <div style={{
                    marginTop: '8rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #333',
                    paddingTop: '2rem'
                }} className="footer-content">
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                        {portfolioData.personalInfo.name.split(' ')[0]}<span style={{ color: '#777' }}>{portfolioData.personalInfo.name.split(' ')[1]}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {portfolioData.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a key={idx} href={social.url} target="_blank" rel="noreferrer">
                                    <Icon size={24} color="#fff" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 600px) {
                    .footer-content { flexDirection: column; gap: 2rem; }
                }
            `}} />
        </section>
    );
};

export default Contact;
