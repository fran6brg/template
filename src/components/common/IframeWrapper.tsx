'use client'

import { toastStyle } from '@/config/toasts.config'
import { useState } from 'react'
import toast from 'react-hot-toast'

const IframeWrapper: React.FC<{
    src: string
    width?: string
    height?: string
}> = ({ src, width = 'w-full', height = 'h-[300px]' }) => {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoad = () => {
        toast.success('Preview loaded ⬆️', { style: toastStyle })
        setIsLoading(false)
    }

    return (
        // <div className={`relative ${width} ${height} group transition-all duration-100`}>
        <div className={`relative ${width} ${height}`}>
            {isLoading && (
                <div className="absolute inset-0 z-10 flex animate-pulse items-center justify-center bg-background">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-secondary border-t-primary" />
                </div>
            )}
            <iframe
                src={src}
                className={`absolute left-0 top-0 rounded-md border-2 border-very-light-hover hover:border-secondary ${width} ${height}`}
                // className={`absolute left-0 top-0 rounded-md border border-inactive grayscale hover:border-blue-500 group-hover:grayscale-0 ${width} ${height}`}
                onLoad={handleLoad}
            ></iframe>
        </div>
    )
}

export default IframeWrapper
