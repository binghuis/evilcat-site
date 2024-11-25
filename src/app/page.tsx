'use client';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import NumberTicker from '@/components/ui/number-ticker';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import ShineBorder from '@/components/ui/shine-border';
import SparklesText from '@/components/ui/sparkles-text';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {}, []);

  return (
    <main className="global-bg w-full h-full">
      <VelocityScroll
        text="Evil Cat."
        default_velocity={2}
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />

      <div className="w-[860px] h-5/6 m-auto flex flex-col justify-between">
        <div className="flex justify-between gap-8">
          <div className="w-96 relative shadow-2xl rounded-lg">
            <ClientTweetCard id="1678577280489234432" />
          </div>
          <ShineBorder
            className="backdrop-blur-md bg-transparent shadow-lg flex-1"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          >
            <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
              <NumberTicker value={100} />
            </p>
            <SparklesText text="Buy" />
            CA: 222
          </ShineBorder>
        </div>

        {/* <AnimatedGradientText>
          <Telegram /> <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Telegram
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText> */}

        <div className="mb-24 relative">
          <Docker />
        </div>
      </div>
    </main>
  );
}
