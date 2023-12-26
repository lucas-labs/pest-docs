import styles from './header-logo.module.scss';
import LogoSvg from './../icons/logo.svg';

export function LogoComponent() {
    return <LogoSvg className={`${styles['logo']}`} />;
}
