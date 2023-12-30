import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

function SectionHeading({ number, children, className, ...props }) {
    return (
        <h2
            className={clsx(
                className,
                'inline-flex items-center rounded-full px-4 py-1 mb-4 text-zinc-800 ring-1 ring-inset ring-zinc-400',
            )}
            {...props}
        >
            <span className="text-sm" aria-hidden="true">
                {number.padStart(2, '0')}
            </span>
            <span className="ml-3 h-3.5 w-px bg-zinc-600/20" />
            <span className="ml-3 text-base font-medium tracking-tight">
                {children}
            </span>
        </h2>
    )
}

const resources = [
    {
        title: 'Campaign Workshop',
        description:
            'Design immersive campaigns with a toolkit that brings your RPG world to life.',
        image: function FigmaImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image src={figmaImage} alt="" unoptimized />
                </div>
            )
        },
    },
    {
        title: 'Character & NPC Studio',
        description:
            'Create rich, detailed characters and NPCs, complete with backstories, traits, and gear.',
        image: function VideoPlayerImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        src={abstractBackgroundImage}
                        alt=""
                        sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
                    />
                    <Image
                        className="relative"
                        src={videoPlayerImage}
                        alt=""
                        unoptimized
                    />
                </div>
            )
        },
    },
    {
        title: 'Global RPG Community',
        description:
            'Connect with players and storytellers, share your adventures, and join others in a global RPG community.',
        image: function DiscordImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image src={discordImage} alt="" unoptimized />
                </div>
            )
        },
    },
]

export function Resources() {
    return (
        <section
            id="Features"
            aria-labelledby="resources-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-10 mt-16"
        >
            <Container>
                <h1 className="text-4xl font-display font-medium tracking-tight text-gray-900">
                RPG Crafting Reimagined                </h1>
                <p className="mt-6 text-md font-display text-gray-600 max-w-xl">
                Elevate your RPG experience with tools for campaign and character creation, and connect with a vibrant community of enthusiasts.
                </p>
            </Container>

            <Container className="mt-10">
                <ol
                    role="list"
                    className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                >
                    {resources.map((resource) => (
                        <li
                            key={resource.title}
                            className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                        >
                            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                <resource.image />
                            </div>
                            <div>
                                <h3 className="text-base font-medium tracking-tight text-slate-900">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {resource.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
