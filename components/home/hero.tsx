// import dynamic from 'next/dynamic';
import Link from 'next/link';
import { cn } from '@utils/class-name';
import { PestTag, NestjsTag, FastapiTag, StarletteTag } from '..';
import { ArrowLink } from './button';

export function Hero() {
    return (
        <div className="relative h-full pt-20">
            <div 
                className={cn(
                    'flex', 
                    'flex-col',
                    'gap-y-16',
                    'lg:flex-row',
                    'xl:gap-x-[15%]',
                )}
            >
                <header 
                    className={cn(
                        'max-w-xl',
                        'sm:min-w-[36rem]',
                        'flex',
                        'flex-col',
                        'justify-between'
                    )
                }>
                    <h1 className={cn('font-bold', 'text-4xl leading-relaxed')}>
                        pest.-&nbsp;
                        <span className='text-white font-normal'>
                            python framework for building APIs
                        </span>
                    </h1>

                    <ArrowLink to='/docs' className="mt-4">
                        Check out the docs
                    </ArrowLink>
                </header>

                <div>
                <p className="text-lg leading-7">
                    <PestTag />&nbsp; is a Python framework for building 
                    scalable APIs. Inspired by <NestjsTag/>, it&apos;s built on <FastapiTag/>, 
                    &nbsp;<StarletteTag/>, and&nbsp;
                    <Link 
                        className='text-[#db4a01] underline [text-underline-position:from-font]'
                        href="https://github.com/Neoteroi/rodi">
                            rodi
                    </Link>, providing a simple yet powerful interface for creating modularized and easily
                    scalable APIs.
                </p>
                <p className='text-lg leading-7 mt-8'>
                    Make your API development journey efficient, structured, and scalable with&nbsp;
                    <PestTag />
                </p>
                </div>
            </div>
        </div>
    );
}
