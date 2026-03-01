import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    id,
    className = '',
    threshold = 0.2
}) => {
    const { ref, isVisible } = useScrollAnimation({ threshold });

    return (
        <div
            ref={ref}
            id={id}
            className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
