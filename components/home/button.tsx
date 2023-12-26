import { cn } from '@utils/class-name';
import style from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    to: string;
}

export function ArrowLink({ children, to, className }: ButtonProps) {
    return (
        <span className={cn('flex', className)}>
            <Link href={to} className={cn(
                style['link'], 'flex items-center'
            )}>
                <span className='underline underline-offset-8'>
                    {children}
                </span>

                <div className={cn(style['link-icon'], 'inline-block')}>
                    <svg className={style['icon']} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    <svg className={style['icon']} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </div>
            </Link>
        </span>
    );
}
