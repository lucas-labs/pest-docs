import styles from './version-tag.module.css';
import pkg from '../../package.json';
import dynamic from 'next/dynamic';
import { useColorScheme } from '../=common/color-scheme';

type VersionTagProps = {
    version?: string;
    size?: string;
    padding?: string;
    margin?: string;
};

function VersionTagComponent({ version, size = '0.5em', padding, margin }: VersionTagProps) {
    const colorScheme = useColorScheme();

    return (
        <span
            className={styles['version-tag']}
            color-scheme={colorScheme}
            style={{
                padding,
                margin,
                fontSize: size,
            }}
        >
            {version || `v${pkg.version}`}
        </span>
    );
}

const VersionTag = dynamic({
    loader: async () => VersionTagComponent,
    ssr: false,
});

export { VersionTag };
