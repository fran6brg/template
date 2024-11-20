'use client'

import { APP_THEMES } from '@/config/app.config'
import { cn } from '@/utils'
import SvgMapper from '../common/SvgMapper'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import IconWrapper from '../common/IconWrapper'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (mounted) {
        return (
            <div className="z-50 flex items-center gap-0.5 rounded-sm sm:gap-1 lg:gap-2">
                {Object.entries(APP_THEMES)
                    .sort((curr, next) => curr[1].index - next[1].index)
                    .map(([theme, config]) => (
                        <button
                            key={theme}
                            onClick={() => setTheme(theme)}
                            className={cn('rounded-sm px-2 sm:px-2.5 py-2 hover:bg-light-hover', {
                                'bg-light-hover text-primary': resolvedTheme === theme,
                                'text-inactive': resolvedTheme !== theme,
                            })}
                        >
                            <IconWrapper icon={config.iconId} className="h-5 w-5" />
                        </button>
                    ))}
            </div>
        )
    } else
        return (
            <div className="z-50 flex items-center rounded-sm sm:gap-1 lg:gap-2">
                {Object.entries(APP_THEMES)
                    .sort((curr, next) => curr[1].index - next[1].index)
                    .map(([theme, config]) => (
                        <button key={theme} className="rounded-sm p-2 hover:bg-light-hover sm:px-2.5">
                            <SvgMapper icon={config.iconId} className="h-5 w-5" />
                        </button>
                    ))}
            </div>
        )
}
