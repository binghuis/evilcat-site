'use client';
import EvilCat from '@/assets/evilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import { BorderBeam } from '@/components/ui/border-beam';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import ShinyButton from '@/components/ui/shiny-button';
import SparklesText from '@/components/ui/sparkles-text';
import Config from '@/config';
import { Snippet } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import type { UrlObject } from 'url';

export default function App() {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <main className="global-bg w-screen font-mono relative overflow-x-hidden py-32 lg:h-screen">
      <div className="absolute left-0 top-0 w-full pt-2">
        <VelocityScroll
          text="Evil Cat."
          default_velocity={2}
          className="font-display text-center text-5xl font-bold text-gray-300 tracking-[-0.02em] drop-shadow-sm lg:text-6xl sm:leading-[3.2rem]"
        />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col justify-start items-center lg:justify-between lg:flex-row gap-8 max-w-6xl px-6 mx-auto">
        <div className="relative shadow-2xl rounded-lg flex flex-shrink-0 flex-grow-0">
          <ClientTweetCard id="1678577280489234432" />
          <BorderBeam size={300} duration={12} delay={9} />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-start items-center sm:items-start">
          <div className="bg-transparent backdrop-blur-xl p-2 rounded-lg shadow-lg">
            <SparklesText
              className="text-gray-100"
              text="$EVILCAT"
              sparklesCount={9}
              colors={{ first: '#ca8a04', second: '#ca8a04' }}
            />
            <div className="mt-2 hidden sm:block">
              <Snippet color="primary" variant="solid" symbol="CA:">
                {Config.ca}
              </Snippet>
            </div>
          </div>

          <div>
            <NeonGradientCard className="z-0">
              <span className="pointer-events-none z-10 h-full whitespace-nowrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center sm:text-5xl text-3xl font-bold leading-none tracking-tighter text-transparent">
                Evil, but cute.
              </span>
            </NeonGradientCard>
          </div>

          <Link
            href={Config.url.dexscreener as unknown as UrlObject}
            target="_blank"
            className="flex justify-center sm:justify-start relative"
          >
            <ShinyButton>
              <div className="font-bold text-5xl sm:text-7xl text-yellow-600">
                <span>BUY NOW</span>
              </div>
            </ShinyButton>
          </Link>
        </div>
      </div>
      <div className="py-2 lg:pb-4 rounded-t-3xl fixed bottom-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl sm:bg-transparent sm:backdrop-blur-none">
        <Docker />
      </div>
      <Image
        src={EvilCat}
        alt=""
        className="absolute max-w-sm md:max-w-md lg:max-w-xl -right-36 bottom-0  -z-0"
      />
    </main>
  );
}
