import React from 'react';
import { motion } from 'framer-motion';
import { FlyingCard } from '../FlyingCard/FlyingCard';
import { useTranslation } from '../../App';
import styles from './Guests.module.css';

interface Stat {
    number: string;
    label: string;
}

interface Guest {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string[];
    achievements?: Stat[];
    famousWorks?: string[];
    quote?: string;
    organization?: string;
}

const guests: Guest[] = [
    {
        id: 'marco-frisina',
        name: 'Mons. Marco Frisina',
        role: 'Invitat Principal',
        image: '/marco_frisina_portrait_1772377315346.png',
        bio: [
            'Este un prelat catolic italian de renume mondial, profesor, compozitor, dirijor și biblist, considerat unul dintre cei mai influenți creatori de muzică sacră contemporană.',
            'Născut la Roma, a studiat compoziția la prestigiosul Conservatorio di Santa Cecilia, teologia la Pontificia Università Gregoriana și Sfintele Scripturi la Pontifical Biblical Institute, fiind ordinat preot în 1982.',
            'Din peste patru decenii de activitate, a compus sute de lucrări liturgice și oratorii interpretate în întreaga lume, multe dintre ele prezentate în fața Papei în celebrări solemne.',
            'De asemenea, conduce Corul Diecezei de Roma și este rector al Bazilicii Santa Cecilia în Trastevere, cultivând muzica ca limbaj al credinței și comuniunii spirituale. Cântece precum "Jesus Christ, You Are My Life" au devenit adevărate imnuri ale tineretului creștin.'
        ],
        achievements: [
            { number: '40+', label: 'Ani de activitate' },
            { number: '100+', label: 'Lucrări liturgice' },
            { number: '∞', label: 'Concerte în lume' }
        ],
        famousWorks: ['Jesus Christ, You Are My Life'],
        quote: 'Muzica este limbajul credinței și al comuniunii spirituale'
    },
    {
        id: 'maurizio-lieggi',
        name: 'Don Maurizio Lieggi',
        role: 'Sacerdote, Compozitor și Dirijor',
        image: '/maurizio_lieggi_portrait_1772377489034.png',
        bio: [
            'Don Maurizio Lieggi este un sacerdote, compozitor și dirijor italian din Arhiepiscopia Bari-Bitonto, care îmbină cu măiestrie teologia și arta muzicală.',
            'Format teologic la Pontificia Facoltà Teologica dell’Italia Meridionale, el și-a aprofundat pasiunea pentru muzică studiind orga, compoziția și dirijatul de orchestră, obținând inclusiv diploma de Dirijor de Orchestră la Conservatorul „N. Piccinni” din Bari.',
            'Vice-director al Ufficiului de Muzică Sacră și profesor de armonie, orga și dirijat de cor, don Maurizio este recunoscut pentru capacitatea sa de a conduce și inspira ansambluri corale și orchestre în proiecte de înaltă ținută artistică.',
            'De peste 15 ani, el coordonează cu sensibilitate și profesionalism activitatea muzicală a fundației Frammenti di Luce, realizând peste 100 de concerte meditație, lucrări liturgice și momente de profundă reflecție sufletească.'
        ],
        organization: 'Fundația Frammenti di Luce'
    },
    {
        id: 'cristina-alfano',
        name: 'Sora Cristina Alfano',
        role: 'Artistă Lirică și Soprană',
        image: '/cristina_alfano_portrait_1772377503501.png',
        bio: [
            'Sora Cristina Alfano este o soră catolică italiană și artistă lirică specializată în muzica sacră, recunoscută pentru vocea sa de soprano și contribuția sa la muzica religioasă contemporană.',
            'Originară din Palermo, s-a format ca solistă de operă la Conservatorul „Santa Cecilia” din Roma și și-a perfecționat stilul sub îndrumarea unor maeștri ai operei și ai muzicii gregoriene.',
            'După o carieră solistică remarcabilă, a ales să pună talentul în slujba frumosului și spiritualității, devenind maestră de cor și voce solistă pentru proiecte corale și orchestrale de mare impact.',
            'Sora Cristina a cântat în numeroase spectacole, inclusiv în fața Sfântului Părinte și în cadrul festivităților liturgice la Vatican, aducând profunzime și emoție prin interpretările sale sacre.'
        ]
    },
    {
        id: 'frammenti-di-luce',
        name: 'Fundația „Frammenti di Luce”',
        role: 'Asociație Cultural-Muzicală',
        image: '/frammenti_di_luce_choir_1772377535802.png',
        bio: [
            'Fundația Frammenti di Luce (în română „Fragmente de Lumină”) este o asociație cultural-muzicală italiană cu misiunea de a evangeliza prin frumusețe și artă, în special prin muzică corală și orchestră.',
            'Proiectele sale sunt inspirate de credința creștină și de dorința de a aduce oamenilor o experiență spirituală profundă prin concerte meditație, ateliere de formare și evenimente artistice care unesc tinerii muzicieni din întreaga Italie și nu numai.',
            'Sub conducerea dirijorului don Maurizio Lieggi și cu contribuția unor artiști consacrați precum sora Cristina Alfano, fundația promovează noțiuni de frumusețe, comuniune și educație muzicală în rândul tinerilor.'
        ]
    }
];

interface GuestsProps {
    isOverview?: boolean;
}

const Guests: React.FC<GuestsProps> = ({ isOverview = false }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    const displayGuests = isOverview ? [guests[0]] : guests;

    return (
        <section className={styles.guestsWrapper}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div className="slabel">Invitați Speciali</div>
                    <h2 style={{ fontSize: '3.5rem', color: 'var(--gold-accent)', marginTop: '1rem' }}>Soliști și Maeștri</h2>
                </div>

                {displayGuests.map((guest, idx) => (
                    <motion.div
                        key={guest.id}
                        className={`${styles.guestSection} ${idx === 0 ? styles.heroGuest : ''} ${idx % 2 !== 0 ? styles.reverse : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className={styles.guestGrid}>
                            <div className={styles.imageColumn}>
                                <FlyingCard>
                                    <div className={styles.imageBox}>
                                        <img
                                            src={guest.image}
                                            alt={guest.name}
                                            className={styles.guestImg}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                        <div className={styles.imagePlaceholder}>
                                            {guest.name[0]}
                                        </div>
                                        <div className={styles.roleOverlay}>{guest.role}</div>
                                    </div>
                                </FlyingCard>

                                {guest.achievements && (
                                    <div className={styles.statsGrid}>
                                        {guest.achievements.map((stat, i) => (
                                            <div key={i} className={styles.statItem}>
                                                <div className={styles.statNumber}>{stat.number}</div>
                                                <div className={styles.statLabel}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className={styles.contentColumn}>
                                <div className="slabel">{guest.organization || 'Invitat Special'}</div>
                                <h2 className={styles.guestName}>{guest.name}</h2>

                                <div className={styles.bioBox}>
                                    {guest.bio.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>

                                {guest.quote && (
                                    <blockquote className={styles.quoteBox}>
                                        <span className={styles.quoteMark}>“</span>
                                        {guest.quote}
                                    </blockquote>
                                )}

                                {idx === 0 && guest.famousWorks && (
                                    <div className={styles.famousWorks}>
                                        <h4>Lucrări Celebre:</h4>
                                        <div className={styles.worksList}>
                                            {guest.famousWorks.map((work, i) => (
                                                <span key={i} className={styles.workTag}>{work}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Guests;
