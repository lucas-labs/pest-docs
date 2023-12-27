import { Config } from "tailwindcss";

export const darkMode = ['class'];

// export const plugins: Config['plugins'] = [
//     require('tailwindcss-animate'),
//     require('@tailwindcss/typography'),
// ];

export const content: Config['content'] = [
    './pages/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx,md,mdx}'
];

export const theme: Config['theme'] = {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            '2xl': '1400px',
        },
    },
    extend: {
        colors: {
            border: 'hsl(var(--color_border))',
            input: 'hsl(var(--color_input))',
            shadow: 'hsl(var(--color_shadow))',
            ring: 'hsl(var(--color_ring))',
            background: 'hsl(var(--color_background))',
            foreground: 'hsl(var(--color_foreground))',
            primary: {
                DEFAULT: 'hsl(var(--color_primary))',
                foreground: 'hsl(var(--color_primary_foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--color_secondary))',
                foreground: 'hsl(var(--color_secondary_foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--color_destructive))',
                foreground: 'hsl(var(--color_destructive_foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--color_muted))',
                foreground: 'hsl(var(--color_muted_foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--color_accent))',
                foreground: 'hsl(var(--color_accent_foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--color_popover))',
                foreground: 'hsl(var(--color_popover_foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--color_card))',
                foreground: 'hsl(var(--color_card_foreground))',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Source Code Pro', 'Menlo', 'Consolas', 'monospace'],
        },
        borderRadius: {
            sm: 'calc(var(--var_radius) - 4px)',
            md: 'calc(var(--var_radius) - 2px)',
            lg: 'var(--var_radius)',
        },
        keyframes: {
            'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
        },
    },
};
