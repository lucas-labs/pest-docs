import { cn } from '@utils/class-name';

import { Window, WindowProps } from './window';
import Link from 'next/link';

function Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="24"
            fill="none"
            strokeWidth="1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
        >
            <line y1="3" x2="24" y2="3" />
            <line y1="9" x2="24" y2="9" />
            <line x1="-0.00003" y1="15" x2="23.99997" y2="15" />
            <line y1="21" x2="14" y2="21" />
        </svg>
    );
}

function LinkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -256 1850 1850"
            height="12"
            width="12"
            fill="currentColor"
            strokeWidth="1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g transform="matrix(1,0,0,-1,30.372881,1426.9492)">
                <path d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z" />
            </g>
        </svg>
    );
}

const SearchBar = (url: string) => {
    const weburi = url.replace(/https?:\/\//, '');

    return (
        <div className="flex items-center space-x-2 w-[50%]">
            <div
                className={cn(
                    'flex justify-between items-center',
                    'dark:bg-[#312421] bg-[#fcf5f2] py-1 rounded-md w-full',
                )}
            >
                <Icon className={cn('text-slate-600', 'dark:text-yellow-50/40')} />

                <Link target="_blank" href={url}>
                    <span
                        className={cn(
                            'text-sm flex items-center gap-x-2 transition-colors',
                            'text-slate-600 hover:text-black',
                            'dark:text-yellow-50/40 dark:hover:text-yellow-50/60',
                        )}
                    >
                        {weburi}
                        <LinkIcon className="inline-bloc " />
                    </span>
                </Link>

                <div className="w-[24px]" />
            </div>
        </div>
    );
};

export const Browser = ({
    url,
    children,
    invert = false,
}: WindowProps & {
    url: string;
}) => {
    return <Window invert={invert} title={SearchBar(url)}>{children}</Window>;
};
