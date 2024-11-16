import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { APP_METADATA } from '@/config/app.config'
import { IconIds } from '@/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | fberger',
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            {/* tldr */}
            <div className="mt-4 flex flex-col gap-2">
                <p className="font-bold text-primary">Tldr;</p>
                <ul className="flex flex-col gap-1 text-sm">
                    {/* {[
                        { text: '10x dev' },
                        { text: 'XP in DeFi and Risk Management @CoinShares' },
                        { text: APP_METADATA.SITE_DESCRIPTION },
                        { text: '🇫🇷' },
                    ].map((interest) => (
                        <li key={interest.text} className="flex gap-3">
                            <span className="text-inactive">&#x2022;</span>
                            <p>{interest.text}</p>
                        </li>
                    ))} */}

                    <li className="flex gap-3">
                        <span className="text-inactive">&#x2022;</span>
                        <p>10x dev</p>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-inactive">&#x2022;</span>
                        <p>XP in DeFi and Risk Management @CoinShares</p>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-inactive">&#x2022;</span>
                        <div className="flex items-center gap-1">
                            <p className="pr-0.5">"Connecting the Dots"</p>
                            <p>TradFi</p>
                            <SvgMapper icon={IconIds.LOADING_DOTS} className="size-4 text-primary" />
                            <p>DeFi</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-inactive">&#x2022;</span>
                        <p>🇫🇷</p>
                    </li>
                </ul>
            </div>

            {/* context */}
            <div className="flex flex-col gap-2">
                <p className="font-bold text-primary">Contact me</p>
                <ul className="flex flex-col gap-1.5 text-sm">
                    {[
                        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM, id: `@${APP_METADATA.SOCIALS.TELEGRAM}` },
                        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X, id: `@${APP_METADATA.SOCIALS.X}` },
                        {
                            href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`,
                            icon: IconIds.LINKEDIN,
                            id: 'Francis Berger',
                        },
                        {
                            href: `https://github.com/${APP_METADATA.SOCIALS.GITHUB}`,
                            icon: IconIds.GITHUB,
                            id: 'fberger-xyz',
                        },
                    ].map((social) => (
                        <li key={social.href} className="flex items-center gap-3">
                            <IconWrapper icon={social.icon} className="size-4" />
                            <LinkWithIcon href={social.href}>{social.id}</LinkWithIcon>
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    )
}
