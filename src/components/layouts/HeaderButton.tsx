'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { useAppStore } from '@/stores/app.store'
import { AppPagePaths } from '@/enums'
import { InterfaceAppLink } from '@/interfaces'

export default function HeaderButton(props: { pagePath: AppPagePaths; disabled?: boolean }) {
    const { links } = useAppStore()
    const pathname = usePathname()
    const isCurrentPath = () => {
        if (props.pagePath === '/') return pathname === props.pagePath
        else return pathname.startsWith(props.pagePath)
    }
    let link: undefined | InterfaceAppLink = undefined
    for (let linkIndex = 0; linkIndex < links.length && !link; linkIndex++) {
        if (links[linkIndex].path === props.pagePath) link = links[linkIndex]
        for (let sublinkIndex = 0; sublinkIndex < links[linkIndex].sublinks.length && !link; sublinkIndex++) {
            if (links[linkIndex].sublinks[sublinkIndex].path === props.pagePath) link = links[linkIndex].sublinks[sublinkIndex]
        }
    }
    return (
        <LinkWrapper
            href={props.disabled ? pathname : props.pagePath}
            className={cn('rounded-sm p-1.5 sm:px-2 lg:px-2.5 xl:px-3 sm:py-1 hover:bg-light-hover bg-opacity-50 group', {
                'bg-light-hover': isCurrentPath(),
            })}
        >
            <p>
                <span className={cn({ 'text-secondary': isCurrentPath(), 'text-light-hover group-hover:text-inactive': !isCurrentPath() })}>/</span>
                <span className={cn({ 'text-primary': isCurrentPath(), 'text-inactive': !isCurrentPath() })}>{link?.name ?? 'Not found'}</span>
            </p>
        </LinkWrapper>
    )
}
