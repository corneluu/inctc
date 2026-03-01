import { useTranslation } from '../App';

const Guest = () => {
    const { t } = useTranslation();

    return (
        <section id="guest">
            <div className="c guest-grid">
                <div className="guest-portrait-wrap reveal r1">
                    <div className="portrait-frame">
                        <div className="portrait-bg">
                            <div className="p-init">MF</div>
                            <p className="p-name">{t.guest.heading}</p>
                        </div>
                        <div className="p-ring"></div>
                    </div>

                    <div className="guest-stats reveal r2">
                        <div className="scard">
                            <div className="snum">40+</div>
                            <div className="slbl">{t.guest.statYears}</div>
                        </div>
                        <div className="scard">
                            <div className="snum">500+</div>
                            <div className="slbl">{t.guest.statWorks}</div>
                        </div>
                        <div className="scard">
                            <div className="snum">5</div>
                            <div className="slbl">{t.guest.statCont}</div>
                        </div>
                        <div className="scard">
                            <div className="snum">Rector</div>
                            <div className="slbl">{t.guest.statRole}</div>
                        </div>
                    </div>
                </div>

                <div className="guest-info reveal r3">
                    <div className="slabel">{t.guest.sectionLabel}</div>
                    <h2 className="gname">{t.guest.heading}</h2>
                    <p className="guest-role gtitle">{t.guest.role}</p>

                    <div className="guest-bio">
                        <p dangerouslySetInnerHTML={{ __html: t.guest.bio1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.guest.bio2 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.guest.bio3 }}></p>
                    </div>

                    <div className="gquote reveal r4">
                        <p>{t.welcome.quote}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guest;
