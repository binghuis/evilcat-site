'use client';
import EvilCat from '@/assets/evilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
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
    <main className="global-bg bg-black w-screen font-mono relative overflow-x-hidden py-28 lg:h-screen">
      {/* <div className="absolute left-0 top-0 w-full pt-2">
        <VelocityScroll
          text="Evil Cat."
          default_velocity={2}
          className="font-display text-center text-5xl font-bold text-gray-300 tracking-[-0.02em] drop-shadow-sm lg:text-6xl sm:leading-[3.2rem]"
        />
      </div> */}
      <div className="relative z-10 h-full w-full flex flex-col justify-start items-start lg:justify-between lg:flex-row gap-8 max-w-6xl px-6 mx-auto">
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
          <div className="bg-transparent p-4 rounded-xl backdrop-blur-lg shadow-lg pointer-events-none z-10 whitespace-nowrap ">
            <div className="bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent">
              Evil, but cute.
            </div>
          </div>
          <div className="relative rounded-md">
            <ClientTweetCard id="1678577280489234432" />
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-start items-center sm:items-start">
          <Link
            href={Config.url.raydium as unknown as UrlObject}
            target="_blank"
            className="flex justify-center sm:justify-start relative"
          >
            <AnimatedGradientText className="bg-gray-800 text-5xl rounded-full">
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
        </div>
      </div>
      <div className="py-2 lg:pb-4 rounded-t-3xl fixed bottom-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl sm:bg-transparent sm:backdrop-blur-none">
        <Docker />
      </div>
      <Image src={EvilCat} alt="" className="absolute max-w-sm -right-24 bottom-0  -z-0" />
    </main>
  );
}
