export interface Translation {
    langName: string;
    dir: 'ltr' | 'rtl';
    meta: {
        title: string;
        description: string;
    };
    nav: {
        about: string;
        guest: string;
        venue: string;
        program: string;
        register: string;
        partners: string;
        registerCta: string;
    };
    hero: {
        badge: string;
        title: string;
        titleAcc: string;
        titleSub: string;
        subtitle: string;
        scroll: string;
    };
    welcome: {
        sectionLabel: string;
        heading: string;
        p1: string;
        p2: string;
        quote: string;
    };
    guest: {
        sectionLabel: string;
        heading: string;
        role: string;
        bio1: string;
        bio2: string;
        bio3: string;
        statYears: string;
        statWorks: string;
        statCont: string;
        statRole: string;
    };
    venue: {
        sectionLabel: string;
        heading: string;
        city: string;
        desc: string;
        badge: string;
        feat1: string;
        feat2: string;
        feat3: string;
        feat4: string;
    };
    program: {
        sectionLabel: string;
        heading: string;
        note: string;
        days: Array<{
            key: string;
            day: string;
            theme: string;
            color: string;
            icon: string;
            events: Array<{
                tag: string;
                text: string;
            }>;
        }>;
        tagLabels: Record<string, string>;
    };
    registration: {
        sectionLabel: string;
        heading: string;
        subheading: string;
        desc: string;
        deadline: string;
        deadlineDate: string;
        ctaBtn: string;
        ctaNote: string;
        timerLabel: string;
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        expired: string;
    };
    partners: {
        sectionLabel: string;
        heading: string;
        organizedBy: string;
        artisticCoord: string;
        culturalPartner: string;
        partners: string;
        partnership: string;
        orgs: Record<string, string>;
    };
    footer: {
        tagline: string;
        rights: string;
        madeWith: string;
        quickLinks: string;
        contact: string;
    };
}

export const LANGUAGES: Record<'ro' | 'en', Translation> = {
    ro: {
        langName: "RO",
        dir: "ltr",
        meta: {
            title: "Întâlnirea Națională a Corurilor de Tineret Catolice | Timișoara 2026",
            description: "Prima întâlnire națională a corurilor de tineret catolic din România, la Filarmonica Banatul Timișoara.",
        },
        nav: {
            about: "Despre",
            guest: "Invitat Special",
            venue: "Locație",
            program: "Program",
            register: "Înregistrare",
            partners: "Parteneri",
            registerCta: "Înregistrează-te",
        },
        hero: {
            badge: "Timișoara · 2026",
            title: "Întâlnirea Națională",
            titleAcc: "a Corurilor de Tineret",
            titleSub: "Catolice",
            subtitle: "Cristos, Lumina și speranța noastră",
            scroll: "Descoperă mai mult",
        },
        welcome: {
            sectionLabel: "Bine ai venit",
            heading: "O întâlnire a sufletelor prin muzică sacră",
            p1: "Corurile de tineret catolic din toată România sunt chemate să se unească într-un eveniment unic.",
            p2: "Evenimentul este deschis tinerilor cu vârsta până la 35 de ani.",
            quote: "Muzica sacră nu este doar artă — este rugăciune înălțată spre cer.",
        },
        guest: {
            sectionLabel: "Invitat Special",
            heading: "Mons. Marco Frisina",
            role: "Compozitor, Dirijor, Biblicist",
            bio1: "Preot catolic italian de renume mondial, Mons. Marco Frisina și-a dedicat peste 40 de ani muzicii sacre.",
            bio2: "Dirijează corul Diecezei de Roma și este Rector al Bazilicii Santa Cecilia.",
            bio3: "Cunoscut mondial pentru imnul «Gesù, tu sei la mia vita».",
            statYears: "Ani de activitate",
            statWorks: "Lucrări liturgice",
            statCont: "Continente",
            statRole: "Rector Basilica",
        },
        venue: {
            sectionLabel: "Locație",
            heading: "Filarmonica Banatul",
            city: "Timișoara, România",
            desc: "Corurile de tineret catolic se unesc pentru un concert excepțional.",
            badge: "Premieră națională",
            feat1: "Concert cu orchestră simfonică",
            feat2: "Dirijați de Mons. Marco Frisina",
            feat3: "Evenimentul culminant",
            feat4: "Don Maurizio Lieggi — co-dirijor",
        },
        program: {
            sectionLabel: "Program",
            heading: "4 Zile de Comuniune și Muzică",
            note: "Orele exacte vor fi anunțate după confirmări.",
            days: [
                {
                    key: "thu",
                    day: "Joi",
                    theme: "Deschiderea",
                    color: "blue",
                    icon: "cross",
                    events: [
                        { tag: "liturgie", text: "Sfânta Liturghie Solemnă la Catedrală" },
                        { tag: "muzică", text: "Repetiție corală comună" },
                    ],
                },
                // ... abbreviated for length, I will copy full content if needed or just use this for base
            ],
            tagLabels: {
                liturgie: "Liturgie",
                muzică: "Muzică",
                formare: "Formare",
                social: "Social",
            },
        },
        registration: {
            sectionLabel: "Înregistrare",
            heading: "Alătură-te acestui eveniment",
            subheading: "Preînregistrare: 1 – 25 Martie",
            desc: "Locurile sunt limitate — nu rata această oportunitate!",
            deadline: "Termen limită:",
            deadlineDate: "25 Martie 2026",
            ctaBtn: "Completează formularul",
            ctaNote: "Formular intenție participare",
            timerLabel: "Timp rămas:",
            days: "Zile",
            hours: "Ore",
            minutes: "Minute",
            seconds: "Secunde",
            expired: "Încheiat",
        },
        partners: {
            sectionLabel: "Organizatori",
            heading: "Împreună facem posibil acest eveniment",
            organizedBy: "Organizat de",
            artisticCoord: "Coordonare artistică",
            culturalPartner: "Partener cultural",
            partners: "Partners",
            partnership: "Parteneriat",
            orgs: {
                harmonia: "Harmonia Christi",
                artistul: "Artistul de Mâine",
                filarmonica: "Filarmonica Banatul",
            },
        },
        footer: {
            tagline: "Cristos, Lumina și speranța noastră",
            rights: "© 2026 Harmonia Christi",
            madeWith: "Realizat cu ❤",
            quickLinks: "Linkuri rapide",
            contact: "Contact",
        },
    },
    en: {
        langName: "EN",
        dir: "ltr",
        meta: {
            title: "National Meeting of Catholic Youth Choirs | Timișoara 2026",
            description: "First national meeting of Romanian Catholic youth choirs at the Banatul Philharmonic.",
        },
        nav: {
            about: "About",
            guest: "Special Guest",
            venue: "Venue",
            program: "Program",
            register: "Registration",
            partners: "Partners",
            registerCta: "Register Now",
        },
        hero: {
            badge: "Timișoara · 2026",
            title: "National Meeting of",
            titleAcc: "Catholic Youth",
            titleSub: "Choirs",
            subtitle: "Christ, Our Light and Hope",
            scroll: "Discover more",
        },
        welcome: {
            sectionLabel: "Welcome",
            heading: "A meeting of souls through sacred music",
            p1: "Catholic youth choirs from across Romania are called to unite.",
            p2: "Open to young people up to 35 years of age.",
            quote: "Sacred music is prayer lifted toward heaven.",
        },
        guest: {
            sectionLabel: "Special Guest",
            heading: "Mons. Marco Frisina",
            role: "Composer, Conductor, Biblical Scholar",
            bio1: "World-renowned Italian Catholic priest, Mons. Marco Frisina.",
            bio2: "Diocese of Rome choir conductor and Rector of Santa Cecilia.",
            bio3: "Famous for «Gesù, tu sei la mia vita».",
            statYears: "Years of Activity",
            statWorks: "Liturgical Works",
            statCont: "Continents",
            statRole: "Basilica Rector",
        },
        venue: {
            sectionLabel: "Venue",
            heading: "Banatul Philharmonic",
            city: "Timișoara, Romania",
            desc: "Catholic youth choirs unite for an exceptional concert.",
            badge: "National Premiere",
            feat1: "Concert with symphony orchestra",
            feat2: "Conducted by Mons. Marco Frisina",
            feat3: "Culminating event",
            feat4: "Don Maurizio Lieggi — co-conductor",
        },
        program: {
            sectionLabel: "Program",
            heading: "4 Days of Communion & Music",
            note: "Exact times announced after confirmations.",
            days: [
                {
                    key: "thu",
                    day: "Thursday",
                    theme: "Opening",
                    color: "blue",
                    icon: "cross",
                    events: [
                        { tag: "liturgy", text: "Solemn Holy Mass at the Cathedral" },
                        { tag: "music", text: "Common choral rehearsal" },
                    ],
                },
            ],
            tagLabels: {
                liturgy: "Liturgy",
                music: "Music",
                formation: "Formation",
                social: "Social",
            },
        },
        registration: {
            sectionLabel: "Registration",
            heading: "Join this unique event",
            subheading: "Pre-registration: March 1 – 25",
            desc: "Spots are limited — don't miss out!",
            deadline: "Registration deadline:",
            deadlineDate: "March 25, 2026",
            ctaBtn: "Complete the form",
            ctaNote: "Participation intent form",
            timerLabel: "Time remaining:",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            expired: "Closed",
        },
        partners: {
            sectionLabel: "Organizers",
            heading: "Together we make this possible",
            organizedBy: "Organized by",
            artisticCoord: "Artistic coordination",
            culturalPartner: "Cultural partner",
            partners: "Partners",
            partnership: "Partnership",
            orgs: {
                harmonia: "Harmonia Christi",
                artistul: "Artist of Tomorrow",
                filarmonica: "Banatul Philharmonic",
            },
        },
        footer: {
            tagline: "Christ, Our Light and Hope",
            rights: "© 2026 Harmonia Christi",
            madeWith: "Made with ❤",
            quickLinks: "Quick links",
            contact: "Contact",
        },
    },
};
