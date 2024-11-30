'use client';
import EvilCat from '@/assets/minievilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import SparklesText from '@/components/ui/sparkles-text';
import Config from '@/config';
import { sendIt, toastDark } from '@/lib/utils';
import { Button, cn, Snippet } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

export default function App() {
  const [copiedText, copy] = useCopyToClipboard();
  const router = useRouter();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        toastDark('CA copied to clipboard!');
      })
      .catch((error) => {
        toastDark('Failed to copy!', { type: 'error' });
      });
  };
  function truncateString(str: string, maxLength: number): string {
    if (!str) {
      return 'HODL, we’re heading 🚀🌕!';
    }
    if (str.length <= maxLength) {
      return str;
    }

    const halfLength = Math.floor((maxLength - 3) / 2);
    return str.slice(0, halfLength) + '...' + str.slice(-halfLength);
  }

  useEffect(() => {}, []);

  return (
    <div className="global-bg bg-black font-mono relative pt-16 pb-24 xl:flex">
      <div className="absolute top-0 left-0 w-full z-20 xl:-z-0">
        <VelocityScroll
          text="$EVILCAT"
          default_velocity={1}
          className="text-5xl font-bold tracking-[-0.02em] text-gray-700 drop-shadow-sm lg:leading-[3rem]"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-start sm:items-center xl:flex-row gap-4 xl:gap-8 max-w-6xl px-6 mx-auto">
        <div className=" relative flex-1 flex flex-col justify-start items-center">
          <Image
            src={EvilCat}
            alt=""
            priority={true}
            className="max-w-full sm:max-w-sm ml-4 z-10"
          />

          <div
            className="relative -mt-4"
            onClick={() => {
              if (Config.url.dexscreener) {
                window.open(Config.url.dexscreener, '_blank');
              } else {
                sendIt();
              }
            }}
          >
            <AnimatedGradientText className="bg-gray-800 text-4xl lg:text-5xl rounded-full pt-4">
              💎🙌 <hr className="mx-2 h-6 w-px shrink-0 bg-gray-300" />{' '}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r font-bold from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                BUY NOW
              </span>
              <ChevronRight className="ml-1 size-6 transition-transform text-yellow-500 duration-300 ease-in-out group-hover:translate-x-1" />
            </AnimatedGradientText>
          </div>
        </div>
        <div className="relative shadow-2xl gap-4 rounded-lg flex flex-col flex-shrink-0 flex-grow-0">
          <div className="bg-transparent backdrop-blur-xl p-4 rounded-xl shadow-xl hidden sm:block">
            <SparklesText
              className="text-gray-100"
              text="$EVILCAT"
              sparklesCount={9}
              colors={{ first: '#ca8a04', second: '#ca8a04' }}
            />

            <div className="mt-2">
              <Snippet
                color="primary"
                className="text-yellow-600"
                variant="solid"
                symbol={Config.ca ? 'CA:' : ''}
              >
                {Config.ca ? Config.ca : 'HODL, we’re heading 🚀🌕!'}
              </Snippet>
            </div>
          </div>

          <Button
            className="sm:hidden break-words w-auto"
            color="warning"
            onClick={() => {
              if (Config.ca) {
                handleCopy(Config.ca);
              } else {
                sendIt();
              }
            }}
          >
            {truncateString(Config.ca, 30)}
          </Button>
          <div className="bg-transparent p-4 rounded-xl backdrop-blur-xl shadow-lg">
            <div className="text-white text-center lg:text-left text-3xl sm:text-5xl">
              Evil, but cute!
            </div>
          </div>
          <div className="relative rounded-md">
            <ClientTweetCard id={Config.xId} />
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </div>
      </div>
      <div className="py-2 lg:pb-4 rounded-t-3xl fixed bottom-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg xl:bg-transparent xl:backdrop-blur-none">
        <Docker />
      </div>
    </div>
  );
}
