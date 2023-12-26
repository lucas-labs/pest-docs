import { useColorScheme } from '../=common/color-scheme';
import { ElementType, ReactElement } from 'react';
import dynamic from 'next/dynamic';
import styles from './themed.module.css';

type ThemedProps = {
    children: any;
    padding?: string;
    margin?: string;
    as?: ElementType;
};

function ThemedContainer({ children, as }: ThemedProps): ReactElement {
    const colorScheme = useColorScheme();

    const Elmt = as || 'div';

    return (
        <Elmt className={styles.themed} color-scheme={colorScheme}>
            {children}
        </Elmt>
    );
}

const Themed = dynamic({
    loader: async () => ThemedContainer,
    ssr: false,
});

export { Themed };
