import { useTranslation } from '../App';

const StickyCTA = ({ visible }) => {
    const { t } = useTranslation();

    return (
        <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
            <div className="sticky-cta-text">
                <span>{t.hero.badge}</span>
                {t.hero.title} {t.hero.titleSub}
            </div>
            <a href="#register" className="nav-cta">
                {t.nav.registerCta}
            </a>
        </div>
    );
};

export default StickyCTA;
