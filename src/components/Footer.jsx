import { useTranslation } from '../App';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="c">
                <div className="ft-grid">
                    <div className="ft-col">
                        <div className="ft-logo">INCTC 2025</div>
                        <p className="ft-tag">{t.footer.tagline}</p>
                    </div>

                    <div className="ft-col">
                        <h4>{t.footer.quickLinks}</h4>
                        <ul>
                            <li><a href="#about">{t.nav.about}</a></li>
                            <li><a href="#guest">{t.nav.guest}</a></li>
                            <li><a href="#venue">{t.nav.venue}</a></li>
                            <li><a href="#program">{t.nav.program}</a></li>
                        </ul>
                    </div>

                    <div className="ft-col">
                        <h4>{t.footer.contact}</h4>
                        <ul>
                            <li><a href="mailto:contact@harmoniachristi.ro">contact@harmoniachristi.ro</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                <div className="ft-bot">
                    <p>{t.footer.rights}</p>
                    <p>{t.footer.madeWith}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
