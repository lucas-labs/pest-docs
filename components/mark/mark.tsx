import styles from './mark.module.scss';
import { useColorScheme } from '../=common/color-scheme';
import { CSSProperties } from 'react';
import dynamic from 'next/dynamic';

type MarkProps = {
    children: any;
    hue: string;
    color: string;
};

interface MarkCss extends CSSProperties {
    '--mark-hue': string;
    '--mark-color': string;
}

function MarkComponent({ children, hue = '20deg', color }: MarkProps) {
    const colorScheme = useColorScheme();

    return (
        <span
            className={`${styles['mark']}`}
            color-scheme={colorScheme}
            style={
                {
                    '--mark-hue': hue,
                    '--mark-color': color,
                } as MarkCss
            }
        >
            {children}
        </span>
    );
}

const Mark = dynamic({
    loader: async () => MarkComponent,
    ssr: false,
});

export { Mark };
