import { useTranslation } from '../App';

const Venue = () => {
    const { t } = useTranslation();

    return (
        <section id="venue">
            <div className="c venue-grid">
                <div className="venue-info reveal r1">
                    <div className="vbadge">
                        <span style={{ fontSize: '0.8rem', marginRight: '5px' }}>✦</span>
                        {t.venue.badge}
                    </div>
                    <div className="slabel">{t.venue.sectionLabel}</div>
                    <h2>{t.venue.heading}</h2>
                    <div className="vcity">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {t.venue.city}
                    </div>
                    <p>{t.venue.desc}</p>

                    <div className="vfeats">
                        {[t.venue.feat1, t.venue.feat2, t.venue.feat3, t.venue.feat4].map((feat, i) => (
                            <div key={i} className={`vfeat reveal r${i + 2}`}>
                                <div className="vfeat-icon">✓</div>
                                <div className="vfeat-content">
                                    <h4>{feat.split(' — ')[0]}</h4>
                                    {feat.includes(' — ') && <p>{feat.split(' — ')[1]}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="venue-vis reveal r3">
                    <div className="vov">
                        <div className="bi">🏛️</div>
                        <span>Filarmonica Banatul<br />Timișoara</span>
                    </div>
                    <div className="vpin">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Bvd. C.D. Loga Nr. 2
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
