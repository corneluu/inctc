import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../App';
import styles from './Program.module.css';

interface Activity {
    time: string;
    title: string;
    location?: string;
    type: 'liturgy' | 'rehearsal' | 'meal' | 'free' | 'prayer' | 'lecture' | 'workshop' | 'festival' | 'break' | 'preparation' | 'concert' | 'meeting';
    description?: string;
    highlight?: boolean;
}

interface Day {
    id: string;
    day: string;
    title: string;
    date: string;
    icon: string;
    activities: Activity[];
    highlight?: boolean;
}

const programDays: Day[] = [
    {
        id: 'joi',
        day: 'Joi',
        title: 'Deschiderea evenimentului',
        date: '15 Mai 2026',
        icon: 'church',
        activities: [
            {
                time: 'To Be Determined',
                title: 'Sfânta Liturghie Solemnă de deschidere',
                location: 'Catedrala Romano-Catolică Timișoara',
                type: 'liturgy',
                description: 'Deschiderea oficială a întâlnirii cu Sfânta Liturghie'
            },
            {
                time: 'To Be Determined',
                title: 'Repetiție corală comună',
                location: 'To Be Determined',
                type: 'rehearsal',
                description: 'Dedicată pregătirii concertului final'
            },
            {
                time: 'To Be Determined',
                title: 'Cină',
                location: 'To Be Determined',
                type: 'meal'
            },
            {
                time: 'Seara',
                title: 'Program liber',
                type: 'free'
            }
        ]
    },
    {
        id: 'vineri',
        day: 'Vineri',
        title: 'Zi de formare și festival coral',
        date: '16 Mai 2026',
        icon: 'music',
        activities: [
            {
                time: 'Dimineața',
                title: 'Rugăciune de dimineață',
                type: 'prayer'
            },
            {
                time: 'To Be Determined',
                title: 'Scurtă prelegere',
                type: 'lecture',
                description: 'Cu tematică specifică evenimentului'
            },
            {
                time: 'To Be Determined',
                title: 'Workshop-uri',
                location: 'To Be Determined',
                type: 'workshop',
                description: 'Susținute de invitații speciali'
            },
            {
                time: 'To Be Determined',
                title: 'Prânz',
                type: 'meal'
            },
            {
                time: 'To Be Determined',
                title: 'Festival coral',
                location: 'To Be Determined',
                type: 'festival',
                description: 'Fiecare cor participant va susține un moment artistic propriu (aproximativ 20 minute; participanții individuali nu pot susține momente solistice)'
            },
            {
                time: 'To Be Determined',
                title: 'Pauză',
                type: 'break'
            },
            {
                time: 'To Be Determined',
                title: 'Repetiție generală cu orchestra',
                location: 'To Be Determined',
                type: 'rehearsal',
                description: 'În vederea concertului final'
            },
            {
                time: 'Seara',
                title: 'Cină',
                type: 'meal'
            }
        ]
    },
    {
        id: 'sambata',
        day: 'Sâmbătă',
        title: 'Ziua concertului',
        date: '17 Mai 2026',
        icon: 'concert',
        highlight: true,
        activities: [
            {
                time: 'Dimineața',
                title: 'Rugăciune de dimineață',
                type: 'prayer'
            },
            {
                time: 'To Be Determined',
                title: 'Scurtă prelegere',
                type: 'lecture'
            },
            {
                time: 'To Be Determined',
                title: 'Workshop-uri',
                type: 'workshop'
            },
            {
                time: 'To Be Determined',
                title: 'Prânz',
                type: 'meal'
            },
            {
                time: 'To Be Determined',
                title: 'Activități de pregătire pentru concert',
                type: 'preparation',
                description: 'Ultimele repetiții și ajustări artistice'
            },
            {
                time: 'To Be Determined',
                title: 'Soundcheck și repetiție',
                location: 'Filarmonica Banatul Timișoara',
                type: 'rehearsal',
                description: 'Pregătirea tehnică pentru concert'
            },
            {
                time: 'Seara',
                title: 'Concertul final',
                location: 'Filarmonica Banatul Timișoara',
                type: 'concert',
                highlight: true,
                description: 'Cu orchestră și toate corurile reunite, sub conducerea maeștrilor Mons. Marco Frisina și Don Maurizio Lieggi. Punctul culminant al întâlnirii!'
            },
            {
                time: 'După concert',
                title: 'Cină festivă și moment de comuniune',
                type: 'meal',
                highlight: true
            }
        ]
    },
    {
        id: 'duminica',
        day: 'Duminică',
        title: 'Încheierea evenimentului',
        date: '18 Mai 2026',
        icon: 'blessing',
        activities: [
            {
                time: 'Dimineața',
                title: 'Dimineață liberă',
                type: 'free'
            },
            {
                time: 'To Be Determined',
                title: 'Întâlnire de evaluare și dialog',
                location: 'To Be Determined',
                type: 'meeting',
                description: 'Cu dirijorii și invitații speciali'
            },
            {
                time: 'To Be Determined',
                title: 'Sfânta Liturghie Solemnă de încheiere',
                location: 'Catedrala Romano-Catolică Timișoara',
                type: 'liturgy'
            },
            {
                time: 'To Be Determined',
                title: 'Prânzul final',
                type: 'meal'
            }
        ]
    }
];

interface ProgramProps {
    isOverview?: boolean;
}

const Program: React.FC<ProgramProps> = ({ isOverview = false }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    const displayDays = isOverview ? programDays.filter(day => day.highlight) : programDays;

    return (
        <section className={styles.programWrapper}>
            <div className="container">
                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    {displayDays.map((day, i) => (
                        <div key={day.id} className={`${styles.daySection} ${day.highlight ? styles.dayHighlight : ''}`}>
                            <motion.div
                                className={styles.dayHeader}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.dayMeta}>
                                    <span className={styles.dayName}>{day.day}</span>
                                    <span className={styles.date}>{day.date}</span>
                                </div>
                                <div className={styles.dayTitle}>{day.title}</div>
                            </motion.div>

                            <div className={styles.activitiesGrid}>
                                {day.activities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        className={`${styles.activityItem} ${styles[activity.type]} ${activity.highlight ? styles.activityHighlight : ''}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.activityHeader}>
                                            <span className={styles.time}>{activity.time}</span>
                                            <span className={`${styles.typeTag} ${styles[`tag-${activity.type}`]}`}>
                                                {activity.type}
                                            </span>
                                        </div>
                                        <h4 className={styles.activityTitle}>{activity.title}</h4>
                                        {activity.location && (
                                            <div className={styles.location}>
                                                <span className={styles.locIcon}>📍</span>
                                                {activity.location}
                                            </div>
                                        )}
                                        {activity.description && (
                                            <p className={styles.description}>{activity.description}</p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {!isOverview && (
                    <div className={styles.programNote}>
                        <div className={styles.noteIcon}>ℹ</div>
                        <p>Programul este orientativ; orele exacte și unele locații vor fi comunicate după confirmarea finală a corurilor.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Program;

