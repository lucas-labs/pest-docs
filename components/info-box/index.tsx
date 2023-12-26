import { cn } from '@utils/class-name';

export function InfoBox({ title, children }) {
    return (
        <details
            className={cn(
                'last-of-type:mb-0',
                'rounded-lg',
                'bg-red-50/60',
                'dark:bg-red-200/5',
                'p-2',
                'mt-4',
            )}
        >
            <summary>
                <strong>{title}</strong>
            </summary>
            <div className={cn('nx-p-2')}>{children}</div>
        </details>
    );
}
