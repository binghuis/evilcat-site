'use client';
import EvilCat from '@/assets/evilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import NumberTicker from '@/components/ui/number-ticker';
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
    <main className="global-bg w-full h-full flex flex-col justify-between font-mono relative overflow-hidden">
      <VelocityScroll
        text="Evil Cat."
        default_velocity={2}
        className="font-display text-center text-5xl font-bold text-slate-600 tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[3.2rem]"
      />
      <div className="flex justify-between gap-8 max-w-7xl px-6 mx-auto mt-4 z-10">
        <div className="w-96 relative shadow-2xl rounded-lg flex-shrink-0 flex-grow-0">
          <ClientTweetCard id="1678577280489234432" />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-start items-start">
          <div className="bg-transparent backdrop-blur-xl p-2 rounded-lg shadow-lg">
            <SparklesText
              text="$EVILCAT"
              sparklesCount={9}
              colors={{ first: '#FFD700', second: '#006400' }}
            />
            <Snippet color="primary" variant="solid" symbol="CA:" className="mt-2">
              {Config.ca}
            </Snippet>
          </div>
          <div>
            <NeonGradientCard className="max-w-md">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Evil, but cute!
              </span>
            </NeonGradientCard>
          </div>
          <div className="rounded-lg bg-transparent backdrop-blur-xl p-2 shadow-lg">
            <p className="whitespace-pre-wrap text-7xl font-bold tracking-tighter text-black ">
              $<NumberTicker value={1000000} />
            </p>
          </div>
          <Link href={Config.url.dexscreener as unknown as UrlObject} target="_blank">
            <ShinyButton>
              <div className="font-bold text-7xl text-yellow-600">BUY NOW</div>
            </ShinyButton>
          </Link>
        </div>
      </div>
      <div className="mb-24">
        <Docker />
      </div>
      <Image
        src={EvilCat}
        alt=""
        className="absolute -right-64 -bottom-7"
        width={800}
        height={800}
      />
    </main>
  );
}
