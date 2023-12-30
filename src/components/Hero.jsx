import { useId } from 'react'
import Image from 'next/image'
import React from 'react';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import figmaImage from '@/images/resources/figma.svg'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <Container>
      <div className="lg:grid mt-16 font-display lg:grid-cols-12 lg:gap-y-20">
        <div className="relative z-10 col-span-6 lg:pt-6 max-w-lg ">
          <h1 className="text-4xl font-medium tracking-tight text-gray-900">
            Embark on Epic Adventures.
          </h1>
          <p className="mt-6 text-md text-gray-600">
            With our platform, gain unparalleled insights into mythical worlds and legendary quests. Know exactly where to find hidden treasures and how to outsmart cunning foes. Your journey to glory begins here.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4">
            <Button outline>Explore Features</Button>
            <Button href="/auth/register">Sign Up</Button>
          </div>
        </div>
        <div className="relative mt-10 sm:mt-10 col-span-6 lg:row-span-2">
          <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
          <div className=" aspect-video max-w-none bg-gray-50 object-cover">
            <div className="absolute inset-0 mb-6 flex items-center rounded-3xl justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
              <Image src={figmaImage} alt="" unoptimized />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}