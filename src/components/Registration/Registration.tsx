import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

interface RegistrationForm {
    tipParticipant: 'cor' | 'corist-independent' | 'cor-adulti';
    numeCor?: string;
    numeReprezentant: string;
    email: string;
    telefon: string;
    numarParticipanti: number;
    varstaParticipanti: string;
    observatii?: string;
}

const registrationInfo = {
    title: 'Pre-înscrieri',
    period: {
        start: '2026-03-01',
        end: '2026-03-25',
        displayStart: '1 martie',
        displayEnd: '25 martie'
    },
    process: 'În perioada 1–25 martie, fiecare cor sau corist care dorește să participe va completa formularul de preînscriere, exprimând intenția de participare la eveniment.',
    eligibility: [
        'Coruri de tineret din România',
        'Tineri coriști independenți, cu vârsta de până la 35 de ani',
        'Coruri de adulți care au tineri în componența lor'
    ],
    submitButton: 'Trimite pre-înscrierea',
    successMessage: 'Pre-înscrierea a fost trimisă cu succes! Vă vom contacta în curând cu mai multe detalii.',
    deadlineWarning: 'Termen limită: 25 martie 2026'
};

const FlipNumber = ({ value, label }: { value: number; label: string }) => {
    return (
        <div className={styles.flipContainer}>
            <div className={styles.flipCard}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={value}
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -90, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={styles.flipValue}
                    >
                        {value.toString().padStart(2, '0')}
                    </motion.div>
                </AnimatePresence>
            </div>
            <span className={styles.flipLabel}>{label}</span>
        </div>
    );
};

interface RegistrationProps {
    isOverview?: boolean;
}

const Registration: React.FC<RegistrationProps> = ({ isOverview = false }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const target = new Date('2026-03-25T23:59:59').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<RegistrationForm>({
        mode: 'onChange'
    });

    const tipParticipant = watch('tipParticipant');

    const onSubmit = (data: RegistrationForm) => {
        console.log(data);
        setSubmitted(true);
    };

    if (isOverview) {
        return (
            <div className={styles.overviewCard}>
                <div className={styles.overviewInfo}>
                    <h3>{registrationInfo.title}</h3>
                    <p className={styles.dates}>{registrationInfo.period.displayStart} — {registrationInfo.period.displayEnd}</p>
                    <div className={styles.countdownGrid}>
                        <FlipNumber value={timeLeft.days} label="Zile" />
                        <FlipNumber value={timeLeft.hours} label="Ore" />
                        <FlipNumber value={timeLeft.minutes} label="Minute" />
                        <FlipNumber value={timeLeft.seconds} label="Secunde" />
                    </div>
                    <Link to="/inscriere" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Înscrie-te acum
                    </Link>
                </div>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className={styles.successWrapper}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.successCard}
                >
                    <div className={styles.successIcon}>✓</div>
                    <h2>Mulțumim!</h2>
                    <p>{registrationInfo.successMessage}</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-primary">Trimite alt formular</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className={styles.registrationWrapper}>
            <div className="container">
                <div className={styles.formGrid}>
                    <div className={styles.infoSection}>
                        <div className="slabel">Înscrieri</div>
                        <h2 className={styles.formTitle}>{registrationInfo.title}</h2>
                        <p className={styles.formDesc}>{registrationInfo.process}</p>

                        <div className={styles.eligibility}>
                            <h4>Cine se poate înscrie?</h4>
                            <ul>
                                {registrationInfo.eligibility.map((item, i) => (
                                    <li key={i}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.warningBanner}>
                            <span>⚠️</span> {registrationInfo.deadlineWarning}
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Tip participant *</label>
                                <select
                                    {...register('tipParticipant', { required: true })}
                                    className={`${styles.select} ${errors.tipParticipant ? styles.error : ''}`}
                                >
                                    <option value="">Selectează...</option>
                                    <option value="cor">Cor de tineret (întreg corul)</option>
                                    <option value="corist-independent">Corist independent</option>
                                    <option value="cor-adulti">Cor de adulți (cu tineri în componență)</option>
                                </select>
                            </div>

                            <AnimatePresence mode="wait">
                                {tipParticipant && (
                                    <motion.div
                                        key={tipParticipant}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={styles.dynamicFields}
                                    >
                                        {(tipParticipant === 'cor' || tipParticipant === 'cor-adulti') && (
                                            <div className={styles.formGroup}>
                                                <label>Numele corului *</label>
                                                <input
                                                    {...register('numeCor', { required: true })}
                                                    placeholder="Ex: Corul Harmonia"
                                                    className={`${styles.input} ${errors.numeCor ? styles.error : ''}`}
                                                />
                                            </div>
                                        )}

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label>Nume reprezentant *</label>
                                                <input
                                                    {...register('numeReprezentant', { required: true })}
                                                    className={`${styles.input} ${errors.numeReprezentant ? styles.error : ''}`}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label>Adresă de email *</label>
                                                <input
                                                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label>Telefon *</label>
                                                <input
                                                    {...register('telefon', { required: true })}
                                                    className={`${styles.input} ${errors.telefon ? styles.error : ''}`}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label>Nr. estimat participanți *</label>
                                                <input
                                                    type="number"
                                                    {...register('numarParticipanti', { required: true, min: 1 })}
                                                    className={`${styles.input} ${errors.numarParticipanti ? styles.error : ''}`}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Vârsta participanților *</label>
                                            <input
                                                {...register('varstaParticipanti', { required: true })}
                                                placeholder="Ex: 18-35 ani"
                                                className={`${styles.input} ${errors.varstaParticipanti ? styles.error : ''}`}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Observații</label>
                                            <textarea
                                                {...register('observatii')}
                                                rows={4}
                                                className={styles.textarea}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ width: '100%' }}
                                        >
                                            {registrationInfo.submitButton}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

