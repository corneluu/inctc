import { useState } from 'react';
import { useTranslation } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { lang, setLang, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Spring transition for smooth, premium feel
    const springTransition = {
        type: "spring",
        stiffness: 260,
        damping: 20
    };

    return (
        <>
            <nav id="nav">
                <div className="c nav-inner">
                    <a href="#hero" className="nav-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span>INCTC 2025</span>
                    </a>

                    <ul className="nav-links">
                        <li><a href="#about">{t.nav.about}</a></li>
                        <li><a href="#guest">{t.nav.guest}</a></li>
                        <li><a href="#venue">{t.nav.venue}</a></li>
                        <li><a href="#program">{t.nav.program}</a></li>
                        <li><a href="#partners">{t.nav.partners}</a></li>
                    </ul>

                    <div className="nav-right">
                        <div className="lang-sw">
                            <button
                                className={`lb ${lang === 'ro' ? 'active' : ''}`}
                                onClick={() => setLang('ro')}
                            >RO</button>
                            <button
                                className={`lb ${lang === 'en' ? 'active' : ''}`}
                                onClick={() => setLang('en')}
                            >EN</button>
                        </div>
                        <a href="#register" className="nav-cta">{t.nav.registerCta}</a>

                        {/* Animated Hamburger with Framer Motion */}
                        <motion.div
                            className={`hamburger ${isOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                transition={springTransition}
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                                transition={{ duration: 0.1 }}
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                transition={springTransition}
                            />
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mob-menu open"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className="mob-close" onClick={closeMenu}>&times;</div>
                        <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
                        <a href="#guest" onClick={closeMenu}>{t.nav.guest}</a>
                        <a href="#venue" onClick={closeMenu}>{t.nav.venue}</a>
                        <a href="#program" onClick={closeMenu}>{t.nav.program}</a>
                        <a href="#partners" onClick={closeMenu}>{t.nav.partners}</a>
                        <a href="#register" className="nav-cta" style={{ display: 'inline-flex' }} onClick={closeMenu}>
                            {t.nav.registerCta}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
