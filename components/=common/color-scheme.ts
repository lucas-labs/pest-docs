import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

function getInitialColorScheme() {
    if (!isServer) {
        try {
            const html = document.querySelector('html');
            const styleAttribute = html.getAttribute('style');
            const match = styleAttribute.match(/color-scheme:\s*(\w+)/i);
            if (match) {
                return match[1].toLowerCase();
            }
            return 'light'; // Default value if color-scheme is not set in the style attribute
        } catch (err) {
            console.log('error getting color scheme: ', err);
            return 'light';
        }
    }
}

export function useColorScheme() {
    const [colorScheme, setColorScheme] = useState(getInitialColorScheme());

    useEffect(() => {
        // Create a new MutationObserver
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const html = document.querySelector('html');
                    const styleAttribute = html.getAttribute('style');

                    // Extract the color-scheme value from the style attribute
                    const match = styleAttribute.match(/color-scheme:\s*(\w+)/i);
                    if (match) {
                        const scheme = match[1].toLowerCase();
                        setColorScheme(scheme);
                    }
                }
            }
        });

        // Observe changes to the HTML element
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style'],
        });

        // Cleanup function to disconnect the observer
        return () => {
            observer.disconnect();
        };
    }, []);

    return colorScheme;
}
