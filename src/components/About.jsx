import { useTranslation } from '../App';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="c about-grid">
                <div className="about-text reveal r1">
                    <div className="slabel">{t.welcome.sectionLabel}</div>
                    <h2>{t.welcome.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t.welcome.p1 }}></p>
                    <p dangerouslySetInnerHTML={{ __html: t.welcome.p2 }}></p>

                    <div className="pull-q reveal r2">
                        <p>{t.welcome.quote}</p>
                    </div>
                </div>

                <div className="about-visual reveal r3">
                    <div className="vis-ph">
                        <div className="vis-icon">🕂</div>
                        <div className="vis-lbl">
                            Timișoara 2025<br />
                            <em>{t.hero.subtitle}</em>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
