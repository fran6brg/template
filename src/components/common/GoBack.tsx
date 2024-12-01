'use client'

import { useRouter } from 'next/navigation'
import IconWrapper from './IconWrapper'
import { IconIds } from '@/enums'

export default function GoBack() {
    const router = useRouter()
    return (
        <button onClick={() => router.back()} className="flex items-center gap-1 rounded-sm py-1 pl-1 pr-2 hover:bg-light-hover">
            <IconWrapper icon={IconIds.CARBON_CHEVRON_LEFT} />
            <p className="text-base sm:text-sm">Back</p>
        </button>
    )
}
