'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import GoBack from './GoBack'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const pathname = usePathname()
    return (
        <Suspense
            fallback={
                <div className="flex h-full w-full items-center justify-center">
                    <p className="text-orange-400">Page loading...</p>
                </div>
            }
        >
            <div
                {...props}
                className={cn(
                    'mx-auto mb-10 pb-28 mt-24 flex max-w-[600px] flex-col items-start overflow-auto px-6 sm:max-w-[700px] sm:px-16 md:mt-28 md:max-w-[700px] xl:max-w-[800px]',
                    className, // gap-2 md:gap-6
                )}
            >
                {pathname !== '/' && <GoBack />}
                {children}
            </div>
        </Suspense>
    )
}
