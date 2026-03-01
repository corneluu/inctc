import React from 'react';
import styles from './FlyingCard.module.css';

interface FlyingCardProps {
    children: React.ReactNode;
    className?: string;
    hoverOffset?: number;
    onClick?: () => void;
}

export const FlyingCard: React.FC<FlyingCardProps> = ({
    children,
    className = '',
    hoverOffset = -12,
    onClick
}) => {
    return (
        <div
            className={`${styles.flyingCard} ${className}`}
            style={{ '--hover-offset': `${hoverOffset}px` } as React.CSSProperties}
            onClick={onClick}
        >
            <div className={styles.cardContent}>
                {children}
            </div>
            <div className={styles.cardGlow} aria-hidden="true" />
        </div>
    );
};

export const CardContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = ''
}) => {
    return <div className={`${styles.cardContainer} ${className}`}>{children}</div>;
};
