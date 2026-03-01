import { useTranslation } from '../App';

const Partners = () => {
    const { t } = useTranslation();

    const partners = [
        { cat: t.partners.organizedBy, name: t.partners.orgs.harmonia, icon: '🎶' },
        { cat: t.partners.culturalPartner, name: t.partners.orgs.episcopia, icon: '⛪' },
        { cat: t.partners.artisticCoord, name: t.partners.orgs.iustin, icon: '🎼' },
        { cat: t.partners.artisticCoord, name: t.partners.orgs.artistul, icon: '🎭' },
        { cat: t.partners.partnership, name: t.partners.orgs.filarmonica, icon: '🏛️' },
        { cat: t.partners.partnership, name: t.partners.orgs.oficiul, icon: '🕊️' }
    ];

    return (
        <section id="partners">
            <div className="c">
                <div className="prt-hd reveal r1">
                    <div className="slabel">{t.partners.sectionLabel}</div>
                    <h2>{t.partners.heading}</h2>
                </div>

                <div className="prt-grid">
                    {partners.map((p, i) => (
                        <div key={i} className={`pcard reveal r${(i % 3) + 1}`}>
                            <div className="pcat">{p.cat}</div>
                            <div className="picon">{p.icon}</div>
                            <div className="pname">{p.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
