// import { cn } from '@utils/class-name';

import { cn } from '@utils/class-name';
import { Window, WindowProps } from './window';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

function CopyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="12"
            width="12"
            fill="currentColor"
            strokeWidth="1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path>
            <path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path>
        </svg>
    );
}

const RequestBar = (method: HttpMethod, url: string) => {
    const weburi = url.replace(/https?:\/\//, '');

    return (
        <div className="flex items-center space-x-2 w-[50%]">
            <div
                className={cn(
                    'flex justify-between items-center',
                    'dark:bg-[#312421] bg-[#fcf5f2] py-1 rounded-md w-full',
                )}
            >
                <span
                    className={cn(
                        'text-sm font-bold px-2',
                        method == 'GET' && 'text-green-800/60 dark:text-green-400/70',
                        method == 'POST' && 'text-yellow-700 dark:text-yellow-500',
                        method == 'PATCH' && 'text-purple-900/70 dark:text-purple-400/70',
                        method == 'PUT' && 'text-blue-900/70 dark:text-blue-400/70',
                        method == 'DELETE' && 'text-red-600 dark:text-red-300/70',
                    )}
                >
                    {method}
                </span>

                <button
                    onClick={() => navigator.clipboard.writeText(url)}
                    className={cn(
                        'text-sm flex items-center gap-x-2 transition-colors',
                        'text-slate-600 hover:text-black',
                        'dark:text-yellow-50/40 dark:hover:text-yellow-50/60',
                    )}
                >
                    {weburi}
                    <CopyIcon className="inline-bloc " />
                </button>

                <div className="w-[24px]" />
            </div>
        </div>
    );
};

export interface RequestProps extends WindowProps {
    method: HttpMethod;
    url: string;
    invert?: boolean;
}

export const Request = ({ method, url, children, invert = false }: RequestProps) => {
    return (
        <Window invert={invert} title={RequestBar(method, url)}>
            {children}
        </Window>
    );
};

function Badge({ text, className }: { text: string; className?: string }) {
    return <span className={cn('inline-block px-2 py-1 rounded-md', className)}>{text}</span>;
}

function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <header className="text-xs mx-4 my-2">
                <Badge
                    text="Body"
                    className="bg-red-500/10 dark:bg-[#130c0a] dark:text-amber-100/80"
                />
            </header>

            {children}
        </div>
    );
}

const HttpCodes = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
};

function Response({ children, code = -1 }: { children: React.ReactNode; code?: number }) {
    const codeText = HttpCodes[code] || 'Unknown';
    const codeClasses =
        code < 300
            ? 'bg-green-500/10 dark:bg-green-500/20 dark:text-green-500'
            : 'bg-red-600 text-red-50 dark:bg-red-500/20 dark:text-red-300';

    return (
        <div className="">
            <header className="text-xs mx-4 my-2 flex gap-x-2">
                <Badge
                    text="Response"
                    className="bg-red-500/10 dark:bg-[#130c0a] dark:text-amber-100/80"
                />
                {code > 0 && <Badge text={`${code} ${codeText}`} className={codeClasses} />}
            </header>

            {children}
        </div>
    );
}

Request.Body = Body;
Request.Response = Response;
