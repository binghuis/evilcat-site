'use client';
import EvilCat from '@/assets/evilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import NumberTicker from '@/components/ui/number-ticker';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import ShinyButton from '@/components/ui/shiny-button';
import SparklesText from '@/components/ui/sparkles-text';
import { Snippet } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {}, []);

  return (
    <main className="global-bg w-full h-full font-mono relative">
      <VelocityScroll
        text="Evil Cat."
        default_velocity={2}
        className="font-display  text-center text-5xl font-bold text-slate-600 tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[3.2rem]"
      />
      <div className="flex justify-between gap-8 max-w-7xl px-6 mx-auto mt-4">
        <div className="w-96 relative shadow-2xl rounded-lg flex-shrink-0 flex-grow-0">
          <ClientTweetCard id="1678577280489234432" />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-start items-start">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <SparklesText text="$EVILCAT" sparklesCount={9} />
            <Snippet color="primary" variant="solid" symbol="CA:" className="mt-2">
              zSyuawLybV374Fiufx4bQnLnwfFRxX2cFsQ6kwKpump
            </Snippet>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <div className="font-bold text-5xl">Evil, but cute!</div>
          </div>
          <div className="rounded-lg bg-transparent backdrop-blur-lg  p-2 shadow-lg">
            <p className="whitespace-pre-wrap text-7xl font-bold tracking-tighter text-black ">
              $<NumberTicker value={1000000} />
            </p>
          </div>
          <ShinyButton className="">
            <div className="font-bold text-5xl">BUY NOW</div>
          </ShinyButton>
        </div>
      </div>
      <Image
        src={EvilCat}
        alt=""
        className="absolute -right-64 bottom-0"
        width={800}
        height={800}
      />

      <div className="mb-24">
        <Docker />
      </div>
    </main>
  );
}
