// import { cn } from '@utils/class-name';

import { cn } from '@utils/class-name';
import { Window, WindowProps } from './window';
// import Link from 'next/link';


const TerminalTitle = (title: string) => {
    return (
        <span
            className={cn(
                'text-sm',
                'text-slate-600',
                'dark:text-yellow-50/40',
            )}
        >
            {title}
        </span>
    );
};

export const Terminal = ({
    title,
    children,
    invert = false,
}: WindowProps & {
    title: string;
}) => {
    return <Window invert={invert} title={TerminalTitle(title)}>{children}</Window>;
};
