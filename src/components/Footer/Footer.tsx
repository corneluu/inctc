import React from 'react';
import { useTranslation } from '../../App';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>TIMIȘOARA 2026</h3>
                        <p>{t.footer.tagline}</p>
                    </div>

                    <div className={styles.col}>
                        <h4>{t.footer.quickLinks}</h4>
                        <ul className={styles.links}>
                            <li><a href="#hero">{t.nav.about}</a></li>
                            <li><a href="#guest">{t.nav.guest}</a></li>
                            <li><a href="#venue">{t.nav.venue}</a></li>
                            <li><a href="#program">{t.nav.program}</a></li>
                            <li><a href="#register">{t.nav.register}</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>{t.footer.contact}</h4>
                        <div className={styles.contact}>
                            <p>Email: contact@harmoniachristi.ro</p>
                            <p>Web: harmoniachristi.ro</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2026 Harmonia Christi. All rights reserved.</p>
                    <p>{t.footer.madeWith} {t.footer.madeWith.includes('❤') ? '' : '❤'}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
