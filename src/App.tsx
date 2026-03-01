import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LANGUAGES, Translation } from './utils/translations';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Guests from './components/Guests/Guests';
import Program from './components/Program/Program';
import Registration from './components/Registration/Registration';
import Organizers from './components/Organizers/Organizers';
import Footer from './components/Footer/Footer';
import { AnimatedSection } from './components/AnimatedSection/AnimatedSection';
import './styles/global.css';

interface LanguageContextType {
    t: Translation;
    lang: 'ro' | 'en';
    setLang: (lang: 'ro' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useTranslation must be used within LanguageProvider');
    return context;
};

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <main id="main">
            <Hero />

            <AnimatedSection id="about">
                <section className="container" style={{ textAlign: 'center' }}>
                    <div className="slabel">{t.welcome.sectionLabel}</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>{t.welcome.heading}</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
                        <p style={{ marginBottom: '1.5rem' }}>{t.welcome.p1}</p>
                        <p style={{ marginBottom: '1.5rem' }}>{t.welcome.p2}</p>
                        <blockquote style={{
                            fontFamily: 'var(--ff-a)',
                            fontSize: '1.5rem',
                            fontStyle: 'italic',
                            color: 'var(--gold-accent)',
                            marginTop: '3rem'
                        }}>
                            "{t.welcome.quote}"
                        </blockquote>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection id="guest">
                <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="slabel">{t.guest.sectionLabel}</div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-accent)' }}>Invitați Speciali</h2>
                </div>
                <Guests isOverview={true} />
                <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/invitati" className="btn btn-primary">Vezi toți invitații</Link>
                </div>
            </AnimatedSection>

            <AnimatedSection id="program">
                <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="slabel">{t.program.sectionLabel}</div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-accent)' }}>Program</h2>
                </div>
                <Program isOverview={true} />
                <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/program" className="btn btn-primary">Vezi programul complet</Link>
                </div>
            </AnimatedSection>

            <AnimatedSection id="register">
                <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="slabel">{t.registration.sectionLabel}</div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--gold-accent)' }}>Înregistrare</h2>
                </div>
                <Registration isOverview={true} />
            </AnimatedSection>

            <AnimatedSection id="partners">
                <Organizers />
            </AnimatedSection>
        </main>
    );
};

const App: React.FC = () => {
    const [lang, setLang] = useState<'ro' | 'en'>('ro');
    const t = LANGUAGES[lang];
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = t.dir;
        document.title = t.meta.title;
    }, [lang, t]);

    return (
        <LanguageContext.Provider value={{ t, lang, setLang }}>
            <div className="app">
                <a href="#main" className="skip-link">Skip to content</a>
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/invitati" element={<div className="pt-nav"><Guests /></div>} />
                    <Route path="/program" element={<div className="pt-nav"><Program /></div>} />
                    <Route path="/inscriere" element={<div className="pt-nav"><Registration /></div>} />
                    <Route path="/organizatori" element={<div className="pt-nav"><Organizers /></div>} />
                </Routes>

                <Footer />
            </div>
        </LanguageContext.Provider>
    );
};

export default App;

