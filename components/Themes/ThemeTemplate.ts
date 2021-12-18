export interface ThemeTemplateInterface {
    font: {
        family: string;
        lineHeight: number;
        size: {
            default: string;
            small: string;
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    };
    dimensions: {
        padding: {
            container: string | number;
            default: string | number;
            square: string | number;
            withBorder: string | number;
        };
    };
    media: {
        tabletLarge: number;
        tablet: number;
        phone: number;
    };
    speed: {
        fast: number;
        normal: number;
        slow: number;
        page: number;
    };
    depth: string[];
}

const Theme: ThemeTemplateInterface = {
    font: {
        family: '"Quicksand", sans-serif',
        lineHeight: 1.6,
        size: {
            default: '1rem',
            small: '0.85rem',
            h1: '2rem',
            h2: '1.75rem',
            h3: '1.55rem',
            h4: '1.4rem',
            h5: '1.3rem',
            h6: '1.2rem',
        },
    },
    dimensions: {
        padding: {
            container: '16px',
            default: '12px 20px',
            square: '12px',
            withBorder: '10.5px 18.5px',
        },
    },
    media: {
        tabletLarge: 1024,
        tablet: 768,
        phone: 425,
    },
    speed: {
        fast: 150,
        normal: 250,
        slow: 400,
        page: 600,
    },
    depth: ['none', '0 1px 3px rgba(0,0,0,0.2)', '0 2px 6px rgba(0,0,0,0.3)'],
};

export default Theme;