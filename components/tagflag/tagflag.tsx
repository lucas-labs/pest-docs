import { ElementType, HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@utils/class-name';

import GithubIcon from './icons/github.svg';
import PestIcon from './icons/pest.svg';
import FastapiIcon from './icons/fastapi.svg';
import StarletteIcon from './icons/starlette.svg';
import NestjsIcon from './icons/nestjs.svg';

const linkClasses = [
    'nx-text-primary-600',
    'nx-underline',
    'nx-decoration-from-font',
    '[text-underline-position:from-font]',
];

interface TagflagProps extends HTMLAttributes<HTMLElement> {
    to?: string;
    on?: 'blank' | 'self' | 'parent' | 'top';
    icon?: ElementType<{ className?: string }>;
    iconClassName?: string;
}

type CustomTagProps = Omit<TagflagProps, 'icon'> & {
    nolink?: boolean;
    noicon?: boolean;
};

interface GithubTagProps extends CustomTagProps {
    repo: string;
    issue?: number;
    pr?: number;
}

export const Tagflag = ({
    children,
    className,
    icon: Icon,
    iconClassName,
    to,
    on = 'self',
    ...props
}: TagflagProps) => {
    const classes = [to && linkClasses, className];

    const content = (
        <span {...props} className={cn(classes, 'inline-flex items-center gap-x-1')}>
            {children}
            {Icon && <Icon className={cn('h-[16px] text-[currentColor]', iconClassName)} />}
        </span>
    );

    return to ? (
        <Link href={to} {...props} target={`_${on}`}>
            {content}
        </Link>
    ) : (
        content
    );
};

export const GithubTag = ({
    className,
    repo = 'lucas-labs/pest',
    issue,
    nolink,
    noicon,
    pr,
    ...props
}: GithubTagProps) => {
    let issueLnk: string | undefined = '';
    if (issue || pr) {
        const pullOrIssue = issue ? 'issues' : 'pull';
        issueLnk = `${pullOrIssue}/${issue || pr}`;
    }

    return (
        <Tagflag
            to={nolink ? undefined : `https://github.com/${repo}/${issueLnk}`}
            on="blank"
            {...props}
            className={className}
            icon={noicon ? undefined : GithubIcon}
        />
    );
};

type PestTagProps = Omit<CustomTagProps, 'nolink'>;

export const PestTag = ({
    className,
    to,
    on = 'blank',
    noicon,
    children = 'pest',
    ...props
}: PestTagProps) => (
    <Tagflag
        {...props}
        className={cn(className, 'font-mono', '[text-underline-position:under]')}
        // iconClassName="text-[#642102]"
        icon={noicon ? undefined : PestIcon}
        to={to}
        on={on}
    >
        {children}
    </Tagflag>
);

export const FastapiTag = ({
    className,
    children = 'FastAPI',
    nolink,
    noicon,
    to = '',
    ...props
}: CustomTagProps) => {
    const url = `https://fastapi.tiangolo.com/${to}`;

    return (
        <Tagflag
            {...props}
            className={cn(className)}
            // iconClassName="text-[#009688]"
            icon={noicon ? undefined : FastapiIcon}
            to={nolink ? undefined : url}
            on="blank"
        >
            {children}
        </Tagflag>
    );
};

export const StarletteTag = ({
    className,
    children = 'Starlette',
    noicon,
    to = '',
    ...props
}: CustomTagProps) => {
    const url = `https://www.starlette.io/${to}`;

    return (
        <Tagflag
            {...props}
            className={cn(className)}
            // iconClassName="text-[#fcda58]"
            icon={noicon ? undefined : StarletteIcon}
            to={url}
            on="blank"
        >
            {children}
        </Tagflag>
    );
};

export const NestjsTag = ({
    className,
    children = 'nest.js',
    noicon,
    to = '',
    ...props
}: CustomTagProps) => {
    const url = `https://docs.nestjs.com/${to}`;

    return (
        <Tagflag
            {...props}
            className={cn(className)}
            // iconClassName="text-[#e0234e]"
            icon={noicon ? undefined : NestjsIcon}
            to={url}
            on="blank"
        >
            {children}
        </Tagflag>
    );
};
