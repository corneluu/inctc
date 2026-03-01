import { useState, useEffect } from 'react';

interface BrowserInfo {
    isBrave: boolean;
    isOpera: boolean;
    isFirefox: boolean;
    isSafari: boolean;
    isChrome: boolean;
}

export const useBrowserDetect = (): BrowserInfo => {
    const [browser, setBrowser] = useState<BrowserInfo>({
        isBrave: false,
        isOpera: false,
        isFirefox: false,
        isSafari: false,
        isChrome: false,
    });

    useEffect(() => {
        const ua = navigator.userAgent;
        const isBrave = (navigator as any).brave !== undefined;
        const isOpera = ua.includes('OPR') || ua.includes('Opera');
        const isFirefox = ua.includes('Firefox');
        const isSafari = ua.includes('Safari') && !ua.includes('Chrome');
        const isChrome = ua.includes('Chrome') && !ua.includes('OPR') && !ua.includes('Edge');

        setBrowser({ isBrave, isOpera, isFirefox, isSafari, isChrome });
    }, []);

    return browser;
};
