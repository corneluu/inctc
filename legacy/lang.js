/**
 * lang.js - Language configuration for Întâlnirea Națională a Corurilor de Tineret Catolice
 *
 * HOW TO ADD A NEW LANGUAGE:
 *  1. Add a new key to the `translations` object (e.g. "fr" for French).
 *  2. Copy the entire "en" block and translate every string value.
 *  3. Add the language button in index.html inside #lang-switcher (optional).
 *
 * USAGE IN HTML:
 *  Elements that need translation should carry a data-i18n="key" attribute.
 *  Nested keys use dot notation: data-i18n="nav.about"
 *  For HTML content (bold, line-breaks) use data-i18n-html="key".
 *  The JS in index.html calls window.applyLang(langCode) to apply.
 */

window.LANGUAGES = {

    /* ──────────────────────────────────────────────
       ROMÂNĂ  (default)
    ────────────────────────────────────────────── */
    ro: {
        langName: "RO",
        dir: "ltr",

        /* META */
        meta: {
            title: "Întâlnirea Națională a Corurilor de Tineret Catolice | Timișoara 2025",
            description:
                "Prima întâlnire națională a corurilor de tineret catolic din România, cu dirijorul de renume mondial Mons. Marco Frisina, la Filarmonica Banatul Timișoara.",
        },

        /* NAVIGATION */
        nav: {
            about: "Despre",
            guest: "Invitat Special",
            venue: "Locație",
            program: "Program",
            register: "Înregistrare",
            partners: "Parteneri",
            registerCta: "Înregistrează-te",
        },

        /* HERO */
        hero: {
            badge: "Timișoara · 2025",
            title: "Întâlnirea Națională",
            titleAcc: "a Corurilor de Tineret",
            titleSub: "Catolice",
            subtitle: "Cristos, Lumina și speranța noastră",
            scroll: "Descoperă mai mult",
        },

        /* WELCOME */
        welcome: {
            sectionLabel: "Bine ai venit",
            heading: "O întâlnire a sufletelor prin muzică sacră",
            p1: "Corurile de tineret catolic din toată România sunt chemate să se unească într-un eveniment unic: zile de comuniune, formare spirituală și muzicală, oferind prin muzică un serviciu adus lui Dumnezeu și comunității.",
            p2: "Evenimentul este deschis tinerilor cu vârsta <strong>până la 35 de ani</strong>. Sunt binevenite corurile independente de tineret, soliștii individuali, precum și corurile adulte care au în componență membri tineri.",
            quote: "Muzica sacră nu este doar artă — este rugăciune înălțată spre cer.",
        },

        /* FEATURED GUEST */
        guest: {
            sectionLabel: "Invitat Special",
            heading: "Mons. Marco Frisina",
            role: "Compozitor, Dirijor, Biblicist",
            bio1: "Preot catolic italian de renume mondial, Mons. Marco Frisina și-a dedicat peste <strong>40 de ani</strong> muzicii sacre liturgice. Absolvent al Conservatorului di Santa Cecilia din Roma, al Pontificiei Università Gregoriana și al Institutului Pontifical Biblic, a fost hirotonit preot în 1982.",
            bio2: "Dirijează corul Diecezei de Roma și este Rector al Bazilicii Santa Cecilia in Trastevere. Operele sale liturgice sunt interpretate pe toate continentele, iar multe dintre ele au fost prezentate <em>în fața Papei</em>.",
            bio3: "Este cunoscut la nivel mondial pentru imnul creștin de tineret <strong>«Gesù, tu sei la mia vita»</strong> (Isuse, Tu ești viața mea), un simbol al generațiilor de tineri creștini.",
            statYears: "Ani de activitate",
            statWorks: "Lucrări liturgice",
            statCont: "Continente",
            statRole: "Rector Basilica",
        },

        /* VENUE */
        venue: {
            sectionLabel: "Locație",
            heading: "Filarmonica Banatul",
            city: "Timișoara, România",
            desc: "Pentru prima dată într-un astfel de format, corurile de tineret catolic se unesc pentru un concert excepțional pe scena Filarmonicii Banatul din Timișoara — alături de o orchestră simfonică independentă.",
            badge: "Premieră națională",
            feat1: "Concert cu orchestră simfonică",
            feat2: "Dirijați de Mons. Marco Frisina",
            feat3: "Evenimentul culminant al întâlnirii",
            feat4: "Don Maurizio Lieggi — co-dirijor",
        },

        /* PROGRAM */
        program: {
            sectionLabel: "Program",
            heading: "4 Zile de Comuniune și Muzică",
            note: "Programul este orientativ. Orele exacte vor fi anunțate după confirmarea corurilor.",
            days: [
                {
                    key: "thu",
                    day: "Joi",
                    theme: "Deschiderea",
                    color: "blue",
                    icon: "cross",
                    events: [
                        { tag: "liturgie", text: "Sfânta Liturghie Solemnă la Catedrala Romano-Catolică" },
                        { tag: "muzică", text: "Repetiție corală comună" },
                        { tag: "social", text: "Cina festivă" },
                        { tag: "social", text: "Timp liber" },
                    ],
                },
                {
                    key: "fri",
                    day: "Vineri",
                    theme: "Ziua Formării",
                    color: "gold",
                    icon: "book",
                    events: [
                        { tag: "liturgie", text: "Rugăciunea dimineții" },
                        { tag: "formare", text: "Prelegere tematică" },
                        { tag: "muzică", text: "Ateliere cu invitații speciali" },
                        { tag: "social", text: "Prânz" },
                        { tag: "muzică", text: "Festival coral — fiecare cor cântă ~20 min (fără soliști)" },
                        { tag: "muzică", text: "Repetiție generală cu orchestra" },
                        { tag: "social", text: "Cina" },
                    ],
                },
                {
                    key: "sat",
                    day: "Sâmbătă",
                    theme: "Ziua Concertului",
                    color: "crimson",
                    icon: "music",
                    events: [
                        { tag: "liturgie", text: "Rugăciunea dimineții" },
                        { tag: "formare", text: "Scurtă prelegere" },
                        { tag: "muzică", text: "Ateliere finale" },
                        { tag: "social", text: "Prânz" },
                        { tag: "muzică", text: "Pregătire concert + Soundcheck la Filarmonica Banatul" },
                        { tag: "muzică", text: "Concert final cu orchestra și toate corurile — moment culminant" },
                        { tag: "social", text: "Cina festivă · Moment de comuniune" },
                    ],
                },
                {
                    key: "sun",
                    day: "Duminică",
                    theme: "Încheierea",
                    color: "blue",
                    icon: "sun",
                    events: [
                        { tag: "social", text: "Dimineață liberă" },
                        { tag: "formare", text: "Ședință de evaluare cu dirijori și invitați" },
                        { tag: "liturgie", text: "Sfânta Liturghie Solemnă de Încheiere la Catedrală" },
                        { tag: "social", text: "Prânz de final · La revedere!" },
                    ],
                },
            ],
            tagLabels: {
                liturgie: "Liturgie",
                muzică: "Muzică",
                formare: "Formare",
                social: "Social",
            },
        },

        /* REGISTRATION */
        registration: {
            sectionLabel: "Înregistrare",
            heading: "Alătură-te acestui eveniment unic",
            subheading: "Preînregistrare: 1 – 25 Martie",
            desc: "Fiecare cor sau solist independent completează formularul pentru a-și exprima intenția de participare. Locurile sunt limitate — nu rata această oportunitate istorică!",
            deadline: "Termen limită înregistrare:",
            deadlineDate: "25 Martie 2025",
            ctaBtn: "Completează formularul de înregistrare",
            ctaNote: "Formular de exprimare a intenției de participare",
            timerLabel: "Timp rămas:",
            days: "Zile",
            hours: "Ore",
            minutes: "Minute",
            seconds: "Secunde",
            expired: "Înregistrările s-au încheiat",
        },

        /* PARTNERS */
        partners: {
            sectionLabel: "Organizatori & Parteneri",
            heading: "Împreună facem posibil acest eveniment",
            organizedBy: "Organizat de",
            artisticCoord: "Coordonare artistică",
            culturalPartner: "Partener cultural",
            partners: "Parteneri",
            partnership: "Parteneriat",
            orgs: {
                harmonia: "Corul Harmonia Christi",
                artistul: "Asociația Culturală «Artistul de Mâine»",
                episcopia: "Episcopia Romano-Catolică de Timișoara",
                iustin: "Iustin Călin — Dirijor cor",
                filarmonica: "Filarmonica Banatul Timișoara",
                oficiul: "Oficiul Național pentru Pastorația Tinerilor",
            },
        },

        /* FOOTER */
        footer: {
            tagline: "Cristos, Lumina și speranța noastră",
            rights: "© 2025 Corul Harmonia Christi · Toate drepturile rezervate",
            madeWith: "Realizat cu ❤ pentru muzica sacră",
            quickLinks: "Linkuri rapide",
            contact: "Contact",
        },
    },

    /* ──────────────────────────────────────────────
       ENGLISH
    ────────────────────────────────────────────── */
    en: {
        langName: "EN",
        dir: "ltr",

        meta: {
            title: "National Meeting of Catholic Youth Choirs | Timișoara 2025",
            description:
                "The first national meeting of Romanian Catholic youth choirs, featuring world-renowned conductor Mons. Marco Frisina, at the Banatul Philharmonic in Timișoara.",
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
            badge: "Timișoara · 2025",
            title: "National Meeting of",
            titleAcc: "Catholic Youth",
            titleSub: "Choirs",
            subtitle: "Christ, Our Light and Hope",
            scroll: "Discover more",
        },

        welcome: {
            sectionLabel: "Welcome",
            heading: "A meeting of souls through sacred music",
            p1: "Catholic youth choirs from across Romania are called to unite in a unique event: days of communion, spiritual and musical formation, offering through music a service to God and the community.",
            p2: "The event is open to young people <strong>up to 35 years of age</strong>. Independent youth choirs, individual singers, and adult choirs with young members are all welcome.",
            quote: "Sacred music is not merely art — it is prayer lifted toward heaven.",
        },

        guest: {
            sectionLabel: "Special Guest",
            heading: "Mons. Marco Frisina",
            role: "Composer, Conductor, Biblical Scholar",
            bio1: "A world-renowned Italian Catholic priest, Mons. Marco Frisina has dedicated over <strong>40 years</strong> to sacred liturgical music. A graduate of the Conservatorio di Santa Cecilia in Rome, the Pontificia Università Gregoriana, and the Pontifical Biblical Institute, he was ordained a priest in 1982.",
            bio2: "He conducts the Diocese of Rome choir and serves as Rector of the Basilica of Santa Cecilia in Trastevere. His liturgical works are performed on every continent, many of them <em>in the presence of the Pope</em>.",
            bio3: "He is world-famous for the Christian youth anthem <strong>«Gesù, tu sei la mia vita»</strong> (Jesus, You Are My Life), a symbol for generations of young Christians.",
            statYears: "Years of Activity",
            statWorks: "Liturgical Works",
            statCont: "Continents",
            statRole: "Basilica Rector",
        },

        venue: {
            sectionLabel: "Venue",
            heading: "Banatul Philharmonic",
            city: "Timișoara, Romania",
            desc: "For the first time in this format, Catholic youth choirs unite for an exceptional concert on the stage of the Banatul Philharmonic in Timișoara — alongside an independent symphony orchestra.",
            badge: "National Premiere",
            feat1: "Concert with symphony orchestra",
            feat2: "Conducted by Mons. Marco Frisina",
            feat3: "Culminating event of the gathering",
            feat4: "Don Maurizio Lieggi — co-conductor",
        },

        program: {
            sectionLabel: "Program",
            heading: "4 Days of Communion & Music",
            note: "The schedule is indicative. Exact times will be announced after choir confirmations.",
            days: [
                {
                    key: "thu",
                    day: "Thursday",
                    theme: "Opening",
                    color: "blue",
                    icon: "cross",
                    events: [
                        { tag: "liturgy", text: "Solemn Holy Mass at the Roman-Catholic Cathedral" },
                        { tag: "music", text: "Common choral rehearsal" },
                        { tag: "social", text: "Festive dinner" },
                        { tag: "social", text: "Free time" },
                    ],
                },
                {
                    key: "fri",
                    day: "Friday",
                    theme: "Formation Day",
                    color: "gold",
                    icon: "book",
                    events: [
                        { tag: "liturgy", text: "Morning prayer" },
                        { tag: "formation", text: "Thematic lecture" },
                        { tag: "music", text: "Workshops with special guests" },
                        { tag: "social", text: "Lunch" },
                        { tag: "music", text: "Choral festival — each choir sings ~20 min (no soloists)" },
                        { tag: "music", text: "General rehearsal with the orchestra" },
                        { tag: "social", text: "Dinner" },
                    ],
                },
                {
                    key: "sat",
                    day: "Saturday",
                    theme: "Concert Day",
                    color: "crimson",
                    icon: "music",
                    events: [
                        { tag: "liturgy", text: "Morning prayer" },
                        { tag: "formation", text: "Short lecture" },
                        { tag: "music", text: "Final workshops" },
                        { tag: "social", text: "Lunch" },
                        { tag: "music", text: "Concert preparation + Soundcheck at the Philharmonic" },
                        { tag: "music", text: "Final concert with orchestra and all choirs — culminating moment" },
                        { tag: "social", text: "Festive dinner · Communion moment" },
                    ],
                },
                {
                    key: "sun",
                    day: "Sunday",
                    theme: "Closing",
                    color: "blue",
                    icon: "sun",
                    events: [
                        { tag: "social", text: "Free morning" },
                        { tag: "formation", text: "Evaluation meeting with conductors and guests" },
                        { tag: "liturgy", text: "Solemn Closing Holy Mass at the Cathedral" },
                        { tag: "social", text: "Final lunch · Farewell!" },
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
            desc: "Each choir or independent singer fills in the form to express their intention to participate. Spots are limited — don't miss this historic opportunity!",
            deadline: "Registration deadline:",
            deadlineDate: "March 25, 2025",
            ctaBtn: "Complete the registration form",
            ctaNote: "Expression of participation intent form",
            timerLabel: "Time remaining:",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            expired: "Registration has closed",
        },

        partners: {
            sectionLabel: "Organizers & Partners",
            heading: "Together we make this event possible",
            organizedBy: "Organized by",
            artisticCoord: "Artistic coordination",
            culturalPartner: "Cultural partner",
            partners: "Partners",
            partnership: "Partnership",
            orgs: {
                harmonia: "Harmonia Christi Choir",
                artistul: "Cultural Association «The Artist of Tomorrow»",
                episcopia: "Roman-Catholic Diocese of Timișoara",
                iustin: "Iustin Călin — Choir Conductor",
                filarmonica: "Banatul Philharmonic Timișoara",
                oficiul: "National Office for Youth Ministry",
            },
        },

        footer: {
            tagline: "Christ, Our Light and Hope",
            rights: "© 2025 Harmonia Christi Choir · All rights reserved",
            madeWith: "Made with ❤ for sacred music",
            quickLinks: "Quick links",
            contact: "Contact",
        },
    },
};

/* ──────────────────────────────────────────────
   applyLang(code) — call from index.html
   Walks all [data-i18n] and [data-i18n-html] elements
   and replaces their text / innerHTML.
────────────────────────────────────────────── */
window.applyLang = function (code) {
    const lang = window.LANGUAGES[code];
    if (!lang) { console.warn(`[i18n] Unknown language: "${code}"`); return; }

    /* utility: deep-get nested keys like "nav.about" */
    function get(obj, path) {
        return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
    }

    /* plain text */
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const val = get(lang, el.dataset.i18n);
        if (val !== undefined) el.textContent = val;
    });

    /* HTML content */
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const val = get(lang, el.dataset.i18nHtml);
        if (val !== undefined) el.innerHTML = val;
    });

    /* meta tags */
    document.title = lang.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", lang.meta.description);

    /* dir */
    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute("dir", lang.dir || "ltr");

    /* rebuild dynamic sections that require complex rendering */
    if (typeof window.renderProgram === "function") window.renderProgram(lang);
    if (typeof window.renderPartners === "function") window.renderPartners(lang);

    /* persist choice */
    try { localStorage.setItem("preferred-lang", code); } catch (_) { }

    /* update switcher button labels */
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.langBtn === code);
    });

    window._currentLang = code;
};
