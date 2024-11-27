'use client';
import EvilCat from '@/assets/minievilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { CoolMode } from '@/components/ui/cool-mode';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import SparklesText from '@/components/ui/sparkles-text';
import Config from '@/config';
import { cn, Snippet } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import type { UrlObject } from 'url';

export default function App() {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <main className="global-bg bg-black w-screen font-mono relative overflow-x-hidden pt-16 pb-28 lg:h-screen">
      <div className="absolute top-0 left-0 w-full z-20">
        <VelocityScroll
          text="Evil Cat."
          default_velocity={1}
          className="text-5xl  font-bold tracking-[-0.02em] text-gray-700 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col justify-start items-start lg:justify-between lg:flex-row gap-8 max-w-6xl px-6 mx-auto">
        <div className=" relative flex-1 flex flex-col justify-start items-center sm:items-start">
          <CoolMode
            options={{
              particle: 'https://raw.githubusercontent.com/binghuis/assets/main/imgs/evilcat.png',
            }}
          >
            <Image
              src={EvilCat}
              alt=""
              className="max-w-full md:max-w-xs ml-4 z-10 cursor-pointer"
            />
          </CoolMode>

          <Link
            href={Config.url.raydium as unknown as UrlObject}
            target="_blank"
            className="flex justify-center sm:justify-start relative -mt-6"
          >
            <AnimatedGradientText className="bg-gray-800 text-4xl md:text-5xl rounded-full pt-4">
              👋 <hr className="mx-2 h-6 w-px shrink-0 bg-gray-300" />{' '}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r font-bold from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                BUY NOW
              </span>
              <ChevronRight className="ml-1 size-6 transition-transform text-yellow-500 duration-300 ease-in-out group-hover:translate-x-1" />
            </AnimatedGradientText>
          </Link>
          <div className="relative md:block hidden">
            <div className="absolute left-0 top-0 w-screen pt-2">
              <VelocityScroll
                text="Evil Cat."
                default_velocity={1}
                className="font-display text-center text-5xl font-bold text-gray-700 tracking-[-0.02em] drop-shadow-sm lg:text-7xl sm:leading-[3.2rem]"
              />
            </div>
          </div>
        </div>
        <div className="relative shadow-2xl gap-4 rounded-lg flex flex-col flex-shrink-0 flex-grow-0">
          <div className="bg-transparent backdrop-blur-xl p-4 rounded-xl shadow-xl">
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
          <div className="bg-transparent p-4 rounded-xl backdrop-blur-lg shadow-lg pointer-events-none z-10">
            <div className="text-white text-3xl md:text-5xl">Evil, but cute.</div>
          </div>
          <div className="relative rounded-md">
            <ClientTweetCard id="1678577280489234432" />
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </div>
      </div>
      <div className="py-2 lg:pb-4 rounded-t-3xl fixed bottom-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl sm:bg-transparent sm:backdrop-blur-none">
        <Docker />
      </div>
    </main>
  );
}
