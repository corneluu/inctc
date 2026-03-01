import React from 'react';
import { motion } from 'framer-motion';
import styles from './Organizers.module.css';

const organizers = {
    main: {
        name: 'Corul Harmonia Christi',
        role: 'Organizator Principal',
        description: 'Corul Harmonia Christi din Timișoara este inima acestui proiect, reunind tineri pasionați de muzica sacră sub conducerea dirijorului Iustin Călin.'
    },
    partners: [
        {
            name: 'Asociația Culturală "Artistul de Mâine"',
            type: 'Partener Co-Organizator',
            logo: '/logos/artistul-de-maine.png'
        },
        {
            name: 'Episcopia Romano-Catolică de Timișoara',
            type: 'Partener Instituțional',
            logo: '/logos/episcopia-timisoara.png'
        },
        {
            name: 'Filarmonica Banatul Timișoara',
            type: 'Partener Cultural',
            logo: '/logos/filarmonica-banatul.png'
        },
        {
            name: 'Oficiul Național pentru Pastorația Tinerilor',
            type: 'În parteneriat cu',
            logo: '/logos/onpt.png'
        }
    ],
    artisticLeadership: 'Iustin Călin, coordonator artistic'
};

const Organizers: React.FC = () => {
    return (
        <section className={styles.organizersWrapper}>
            <div className="container">
                <div className={styles.mainOrganizerBox}>
                    <motion.div
                        className={styles.mainHeader}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="slabel">{organizers.main.role}</div>
                        <h2 className={styles.mainTitle}>{organizers.main.name}</h2>
                        <p className={styles.mainDesc}>{organizers.main.description}</p>
                        <div className={styles.coordinator}>
                            <span className={styles.coordLabel}>Coordonare Artistica:</span>
                            <span className={styles.coordName}>{organizers.artisticLeadership}</span>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.partnersSection}>
                    <div className={styles.partnersHeader}>
                        <div className="slabel">Parteneri și Susținători</div>
                        <div className={styles.headerLine}></div>
                    </div>

                    <div className={styles.partnersGrid}>
                        {organizers.partners.map((partner, i) => (
                            <motion.div
                                key={i}
                                className={styles.partnerCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.logoPlaceholder}>
                                    {/* Real logos would be placed here */}
                                    <div className={styles.logoCircle}>
                                        <span className={styles.logoInitials}>
                                            {partner.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.partnerInfo}>
                                    <span className={styles.partnerType}>{partner.type}</span>
                                    <h4 className={styles.partnerName}>{partner.name}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;
