import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[];
    direction?: 'row' | 'column';
    justify?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
    align?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
    wrap?: 'wrap' | 'nowrap';
    m?: string;
    p?: string;
};

export function Flex({
    children,
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'nowrap',
    m,
    p,
}: Props) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                flexWrap: wrap,
                margin: m,
                padding: p,
            }}
        >
            {children}
        </div>
    );
}
