import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../App';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    const { t, lang, setLang } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'about', label: t.nav.about },
        { id: 'guest', label: t.nav.guest },
        { id: 'venue', label: t.nav.venue },
        { id: 'program', label: t.nav.program },
        { id: 'partners', label: t.nav.partners },
    ];

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.logo}>
                        TIMIȘOARA 2026
                    </div>

                    <ul className={styles.links}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className={styles.link}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <div className={styles.langSwitch}>
                            <button
                                className={`${styles.langBtn} ${lang === 'ro' ? styles.langBtnActive : ''}`}
                                onClick={() => setLang('ro')}
                            >
                                RO
                            </button>
                            <button
                                className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
                                onClick={() => setLang('en')}
                            >
                                EN
                            </button>
                        </div>

                        <a href="#register" className={styles.cta}>
                            {t.nav.registerCta}
                        </a>

                        <div
                            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} />
                            <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} />
                            <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} />
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={styles.mobileLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#register"
                            className={styles.mobileLink}
                            style={{ color: 'var(--gold-accent)' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.registerCta}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
