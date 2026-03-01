import { useTranslation } from '../App';

const Hero = () => {
    const { t } = useTranslation();

    // Create 14 background notes with random positions and delays
    const notes = Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        char: i % 2 === 0 ? '♪' : '♫',
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${10 + Math.random() * 10}s`
    }));

    return (
        <section id="hero">
            <div className="hero-bg"></div>
            <div className="hero-rays"></div>
            <div className="hero-notes">
                {notes.map(note => (
                    <span
                        key={note.id}
                        className="note"
                        style={{
                            top: note.top,
                            left: note.left,
                            animationDelay: note.delay,
                            animationDuration: note.duration
                        }}
                    >
                        {note.char}
                    </span>
                ))}
            </div>

            <div className="hero-content">
                <div className="hero-badge reveal r1">
                    {t.hero.badge}
                </div>

                <h1 className="hero-title reveal r2">
                    <span className="l1">{t.hero.title}</span>
                    <span className="l2">{t.hero.titleAcc}</span>
                    <span className="l3">{t.hero.titleSub}</span>
                </h1>

                <p className="hero-sub reveal r3">
                    {t.hero.subtitle}
                </p>

                <a href="#about" className="hero-scroll reveal r4">
                    <span>{t.hero.scroll}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="7 13 12 18 17 13"></polyline>
                        <polyline points="7 6 12 11 17 6"></polyline>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
