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
            brand: 'hsl(var(--color_brand))',
        },
    },
};
