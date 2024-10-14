import { AppThemes, IconIds } from '@/enums'

export const APP_METADATA = {
    EMOJI: '👨‍💻',
    SITE_NAME: 'fberger',
    SITE_INFO: 'SITE_INFO',
    SITE_DESCRIPTION: 'SITE_DESCRIPTION',
    SITE_URL: 'https://fberger.vercel.app/',
    SOCIAL_TWITTER: 'tba',
    ENS: 'fran6.eth',
    PROFILE_PICTURE: 'https://pbs.twimg.com/profile_images/1824850421078220800/jWMhjkyv_400x400.jpg',
    MAIL: 'tba@protonmail.com',
    TELEGRAM: 'tba',
}

export const APP_THEMES: Record<AppThemes, { index: number; iconId: IconIds }> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}
