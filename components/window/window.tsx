import { cn } from '@utils/class-name';

export interface WindowProps {
    children?: React.ReactNode;
    // url?: string;
    title?: React.ReactNode;
    invert?: boolean;
}

export function Window({ children, title, invert = false }: WindowProps) {
    return (
        <div className="relative dark:bg-[#211512] bg-[#fcf5f2] w-full rounded-lg overflow-hidden mt-6">
            <div className="dark:bg-[#130c0a] bg-[hsl(18,50%,91%)] flex justify-between p-2 px-4 min-h-[40px]">
                <div className="flex space-x-1 items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                {title}
                <div className="w-[44px]" />
            </div>
            <div
                className={cn(
                    'w-full',
                    
                    '[&_pre]:m-0 [&_pre]:!bg-transparent',
                    '[&_.nextra-code-block]:m-0 [&_pre]:p-0 first:[&_.nextra-code-block]:mt-4 last:[&_.nextra-code-block]:mb-4',
                    '[&_button]:absolute [&_button]:-top-4 [&_button]:right-0',

                    invert && 'dark [&_pre]:dark:brightness-150 [&_pre]:dark:-hue-rotate-90',
                    invert && '[&_pre]:invert [&_pre]:dark:invert-0',
                )}
            >
                {children}
            </div>
        </div>
    );
}
