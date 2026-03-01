import { useState, useEffect } from 'react';
import { useTranslation } from '../App';

const Registration = () => {
    const { t } = useTranslation();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('March 25, 2025 23:59:59').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft(null);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="register">
            <div className="c reg-inner">
                <div className="slabel reveal r1">{t.registration.sectionLabel}</div>
                <h2 className="reveal r2">{t.registration.heading}</h2>
                <p className="reg-sub reveal r2">{t.registration.subheading}</p>
                <p className="reg-desc reveal r3">{t.registration.desc}</p>

                <div className="countdown">
                    {timeLeft ? (
                        <>
                            <div className="cblock reveal r1">
                                <div className="cnum">{timeLeft.days}</div>
                                <div className="clab">{t.registration.days}</div>
                            </div>
                            <div className="cblock reveal r2">
                                <div className="cnum">{timeLeft.hours}</div>
                                <div className="clab">{t.registration.hours}</div>
                            </div>
                            <div className="cblock reveal r3">
                                <div className="cnum">{timeLeft.minutes}</div>
                                <div className="clab">{t.registration.minutes}</div>
                            </div>
                            <div className="cblock reveal r4">
                                <div className="cnum">{timeLeft.seconds}</div>
                                <div className="clab">{t.registration.seconds}</div>
                            </div>
                        </>
                    ) : (
                        <div className="expired reveal r1">{t.registration.expired}</div>
                    )}
                </div>

                <div className="reveal r4">
                    <button className="reg-btn">
                        {t.registration.ctaBtn}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <p className="reg-note">{t.registration.ctaNote}</p>
                </div>
            </div>
        </section>
    );
};

export default Registration;
