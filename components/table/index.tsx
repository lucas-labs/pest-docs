import { ReactNode } from 'react';

import styles from './style.module.css';
import { cn } from '../../utils/class-name';

interface Cell {
    content: ReactNode;
    className?: string;
}

interface TableProps {
    headers?: Cell[];
    rows: Cell[][];
}

export function Table({ headers, rows }: TableProps) {
    return (
        <div
            className={cn(
                '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ',
                styles.container,
            )}
        >
            <table className="w-full border-collapse text-sm">
                {headers && headers.length > 0 && (
                    <thead>
                        <tr className={cn('border-b text-left dark:border-neutral-700')}>
                            {headers?.map(({ content, className }, index) => (
                                <th
                                    key={index}
                                    className={cn('font-semibold py-4 pl-4 first:pl-0', className)}
                                >
                                    {content}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className={cn('text-gray-900 dark:text-gray-100')}>
                    {rows.map((row, index) => (
                        <tr
                            key={index}
                            className={cn('border-b border-gray-100 dark:border-neutral-700/50')}
                        >
                            {row.map(({ content, className }, index) => (
                                <td key={index} className={cn('py-4 pl-4 first:pl-0', className)}>
                                    {content}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
