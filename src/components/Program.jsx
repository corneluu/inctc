import { useTranslation } from '../App';

const Program = () => {
    const { t } = useTranslation();

    const getIcon = (icon) => {
        switch (icon) {
            case 'cross': return '♰';
            case 'book': return '📖';
            case 'music': return '♫';
            case 'sun': return '☀';
            default: return '●';
        }
    };

    return (
        <section id="program">
            <div className="c">
                <div className="prog-hd reveal r1">
                    <div className="slabel">{t.program.sectionLabel}</div>
                    <h2>{t.program.heading}</h2>
                    <p className="prog-note">{t.program.note}</p>
                </div>

                <div className="days-grid">
                    {t.program.days.map((day, i) => (
                        <div key={day.key} className={`day-card reveal r${(i % 4) + 1} c${day.color.charAt(0)} ${day.icon === 'sun' || day.icon === 'book' ? 'day-grade' : 'eve-grade'}`}>
                            <div className="dhd">
                                <div className="dicon">{getIcon(day.icon)}</div>
                                <div>
                                    <div className="dname">{day.day}</div>
                                    <div className="dtheme">{day.theme}</div>
                                </div>
                            </div>
                            <div className="devents">
                                {day.events.map((ev, j) => (
                                    <div key={j} className="ev">
                                        <span className={`etag ${ev.tag.substring(0, 2)}`}>
                                            {t.program.tagLabels[ev.tag] || ev.tag}
                                        </span>
                                        <span className="etxt">{ev.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program;
