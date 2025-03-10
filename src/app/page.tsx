'use client'

import Image from 'next/image'
import { SocialLogo } from 'social-logos'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 my-5 p-5 sm:p-0">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <div className="w-56 h-56 relative border-b-8 border-b-[#52FFB8] overflow-hidden">
          <Image
            fill
            src={'./Me.jpg'}
            alt="Ali Bahaari"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold border-b-2 border-b-[#52FFB8] inline">
          Hey! This Is Ali Bahaari!
        </h1>
        <p className="mt-5">
          I am a skilled full stack and mobile developer with extensive
          experience in various technologies, including frameworks and
          libraries.
        </p>
        <p>
          My expertise in Python allows me to handle a wide range of tasks, from
          Neuroscience experiments with PsychoPy software to web crawling,
          ethical hacking, and financial bots development.
        </p>
        <p>
          I am also passionate about analyzing financial markets, using multiple
          approaches with a special interest in the Elliott.
        </p>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold border-b-2 border-b-[#52FFB8] inline">
          Contact Me!
        </h2>

        <div className="flex flex-row gap-5 items-center justify-center mt-5">
          <a
            href="https://github.com/AliBahaari"
            target="_blank"
            className="border-b-2 border-b-[#181717] pb-1 group"
          >
            <SocialLogo
              icon={'github'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="https://dribbble.com/AliBahaari"
            target="_blank"
            className="border-b-2 border-b-[#EA4C89] pb-1 group"
          >
            <SocialLogo
              icon={'dribbble'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="https://t.me/AliBahaari"
            target="_blank"
            className="border-b-2 border-b-[#2CA5E0] pb-1 group"
          >
            <SocialLogo
              icon={'telegram'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="https://alibahaari.medium.com"
            target="_blank"
            className="border-b-2 border-b-[#000] pb-1 group"
          >
            <SocialLogo
              icon={'medium'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="https://linkedin.com/in/alibahaari"
            target="_blank"
            className="border-b-2 border-b-[#0A66C2] pb-1 group"
          >
            <SocialLogo
              icon={'linkedin'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="mailto:alibahaari1997@gmail.com"
            target="_blank"
            className="border-b-2 border-b-[#EA4335] pb-1 group"
          >
            <SocialLogo
              icon={'google'}
              size={26}
              className="relative group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="https://tradingview.com/u/AliBahaari"
            target="_blank"
            className="group w-[26px] h-[26px] relative flex flex-row justify-center items-start"
          >
            <div className="w-[20px] h-[20px] relative">
              <Image
                fill
                src={'./TradingView.svg'}
                alt="TradingView"
                className="relative group-hover:-translate-y-1 transition-transform object-contain"
              />
            </div>
            <div className="w-full h-[2px] bg-[#000] left-0 top-[calc(100%+2px)] absolute" />
          </a>
        </div>
      </div>
    </div>
  )
}
