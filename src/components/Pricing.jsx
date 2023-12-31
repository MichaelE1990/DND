'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { CheckIcon } from './Icons/generalIcons'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
    {
        name: 'Adventurer',
        featured: false,
        price: { Monthly: '$10', Annually: '$80' },
        description:
            'Perfect for new players beginning their D&D journey. Start exploring for free.',
        button: {
            label: 'Get started for free',
            href: '/register',
        },
        features: [
            'Access to basic character creation tools',
            'Standard D&D campaign modules',
            'Community forum access',
            'Create up to 3 characters',
        ],
        logomarkClassName: 'fill-white dark:fill-zinc-400',
    },
    {
        name: 'Dungeon Master',
        featured: true,
        price: { Monthly: '$15', Annually: '$90' },
        description:
            'For Dungeon Masters who want to craft unique and engaging experiences.',
        button: {
            label: 'Subscribe',
            href: '/register',
        },
        features: [
            'Advanced campaign creation tools',
            'NPC and monster customization',
            'Interactive map builder',
            'Create unlimited campaigns',
            'Premium community access',
        ],
        logomarkClassName: 'fill-white dark:fill-zinc-400',
    },
    {
        name: 'Guild Leader',
        featured: false,
        price: { Monthly: '$25', Annually: '$150' },
        description:
            'Ideal for groups or guilds seeking a comprehensive D&D experience.',
        button: {
            label: 'Subscribe',
            href: '/register',
        },
        features: [
            'All Dungeon Master features',
            'Group management tools',
            'Shared campaign and character libraries',
            'Access to exclusive content and early releases',
            'Enhanced community features',
        ],
        logomarkClassName: 'fill-zinc-800 dark:fill-zinc-400',
    },
]

function Plan({
    name,
    price,
    description,
    button,
    features,
    activePeriod,
    logomarkClassName,
    featured = false,
}) {
    const priceSuffix = activePeriod === 'Monthly' ? '/ month' : '/ year';

    return (
        <section className={clsx(
            'flex flex-col overflow-hidden font-display rounded-3xl p-6 shadow-lg shadow-gray-900/5',
            featured ? 'bg-zinc-500/10' : 'bg-zinc-500/10',
        )}
        >
            <h3 className={clsx('flex items-center text-sm font-semibold', featured ? 'text-white' : 'text-white',)}>
                <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
                <span className="ml-4">{name}</span>
            </h3>
            <div
                className={clsx(
                    'mt-5 flex items-baseline text-3xl tracking-tight',
                    featured ? 'text-white' : 'text-white',
                )}
            >
                <span>
                    {activePeriod === 'Monthly' ? price.Monthly : price.Annually}
                </span>
                <span className="ml-2 text-lg">
                    {priceSuffix}
                </span>
            </div>
            <p className={clsx('mt-3 text-sm', featured ? 'text-gray-300' : 'text-white',)}>
                {description}
            </p>
            <div className="order-last mt-10">
                <ul role="list" className={clsx(
                    '-my-2 text-sm',
                    featured ? 'divide-gray-800 text-gray-300' : 'divide-gray-200 text-white',
                )}
                >
                    {features.map((feature) => (
                        <li key={feature} className="flex py-2">
                            <CheckIcon
                                className={clsx(
                                    'h-6 w-6 flex-none',
                                    featured ? 'text-white' : 'text-deep-green',
                                )}
                            />
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                href={button.href}
                color="white"
                className="mt-6"
                aria-label={`Get started with the ${name} plan for ${price}`}
            >
                {button.label}
            </Button>
        </section>
    )
}

export function Pricing() {
    let [activePeriod, setActivePeriod] = useState('Monthly')
    return (



        <section id="pricing" aria-labelledby="pricing-title" className="border-t relative   bg-[radial-gradient(#2C313D_35%,#000)] rounded-4xl border-gray-200 py-20 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center font-display">
                    <h2 id="pricing-title" className="text-3xl font-medium tracking-tight text-white">
                        Simple and Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 ">
                        Our plans are tailored to fit your needs, whether you&rsquo;re a solo adventurer or a full-scale guild. No hidden fees, gimmicks, or mimics.
                    </p>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="rounded-full p-1 shadow-sm">
                        <RadioGroup value={activePeriod} onChange={setActivePeriod} className="grid grid-cols-2 gap-x-1 text-center text-xs font-semibold leading-5 text-zinc-800">
                            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                            {['Monthly', 'Annually'].map((period) => (
                                <RadioGroup.Option key={period} value={period} className={({ checked }) =>
                                    clsx(
                                        'cursor-pointer rounded-full px-3 py-1 transition-colors duration-300 ease-in-out',
                                        checked ? 'bg-zinc-700/10 text-zinc-600' : 'bg-transparent text-zinc-600 hover:bg-white/20'
                                    )
                                }
                                >
                                    {period}
                                </RadioGroup.Option>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
                    ))}
                </div>
            </Container>
        </section>

    )
}
