import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from '../../App';
import styles from './Hero.module.css';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1] as any
        },
    },
};

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const notes = [
        { id: 1, char: '♪', top: '15%', left: '10%', delay: 0 },
        { id: 2, char: '♫', top: '25%', left: '85%', delay: 1.5 },
        { id: 3, char: '♯', top: '65%', left: '15%', delay: 3 },
        { id: 4, char: '♭', top: '75%', left: '80%', delay: 0.5 },
        { id: 5, char: '♩', top: '45%', left: '90%', delay: 2 },
    ];

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.bg}></div>
            <div className={styles.rays}></div>

            {notes.map((note) => (
                <motion.div
                    key={note.id}
                    className={styles.note}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 0.1,
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: note.delay },
                        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: note.delay },
                        opacity: { duration: 2 }
                    }}
                    style={{ top: note.top, left: note.left }}
                >
                    {note.char}
                </motion.div>
            ))}

            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.badge} variants={itemVariants}>
                    {t.hero.badge}
                </motion.div>

                <motion.h1 className={styles.title} variants={itemVariants}>
                    <span className={styles.t1}>{t.hero.title}</span>
                    <span className={styles.t2}>{t.hero.titleAcc}</span>
                    <span className={styles.t3}>{t.hero.titleSub}</span>
                </motion.h1>

                <motion.p className={styles.subtitle} variants={itemVariants}>
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
                    className={styles.scroll}
                    variants={itemVariants}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span>{t.hero.scroll}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
