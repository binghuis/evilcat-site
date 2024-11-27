'use client';
import EvilCat from '@/assets/minievilcat.png';
import { Docker } from '@/components/docker';
import ClientTweetCard from '@/components/magicui/client-tweet-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import SparklesText from '@/components/ui/sparkles-text';
import Config from '@/config';
import { Button, cn, Snippet } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import type { UrlObject } from 'url';
import { useCopyToClipboard } from 'usehooks-ts';

export default function App() {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        toast.success('CA copied to clipboard!', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .catch((error) => {
        toast.success('Failed to copy!', {
          icon: '😭',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <main className="global-bg bg-black font-mono relative pt-28 ">
      <div className="absolute top-0 left-0 w-full z-20">
        <VelocityScroll
          text="Evil Cat."
          default_velocity={1}
          className="text-5xl font-bold tracking-[-0.02em] text-gray-700 drop-shadow-sm lg:leading-[3rem]"
        />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col justify-start items-start lg:justify-between lg:flex-row gap-4 max-w-6xl px-6 mx-auto">
        <div className=" relative flex-1 flex flex-col justify-start items-center">
          <Image src={EvilCat} alt="" className="max-w-full sm:max-w-sm ml-4 z-10 cursor-pointer" />

          <Link
            href={Config.url.dexscreener as unknown as UrlObject}
            target="_blank"
            className="relative -mt-4"
          >
            <AnimatedGradientText className="bg-gray-800 text-4xl lg:text-5xl rounded-full pt-4">
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
        <div className="relative shadow-2xl gap-4 rounded-lg flex flex-col flex-shrink-0 flex-grow-0">
          <div className="bg-transparent backdrop-blur-xl p-4 rounded-xl shadow-xl hidden sm:block">
            <SparklesText
              className="text-gray-100"
              text="$EVILCAT"
              sparklesCount={9}
              colors={{ first: '#ca8a04', second: '#ca8a04' }}
            />

            <div className="mt-2 ">
              <Snippet color="primary" variant="solid" symbol="CA:">
                {Config.ca}
              </Snippet>
            </div>
          </div>

          <Button
            className="sm:hidden"
            color="warning"
            onClick={() => {
              handleCopy(Config.ca);
            }}
          >
            <span>{Config.ca}</span>
          </Button>
          <div className="bg-transparent p-4 rounded-xl backdrop-blur-xl shadow-lg">
            <div className="text-white text-center lg:text-left text-3xl sm:text-5xl">
              Evil, but cute.
            </div>
          </div>
          <div className="relative rounded-md mb-24">
            <ClientTweetCard id="1678577280489234432" />
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </div>
      </div>
      <div className="py-2 lg:pb-4 rounded-t-3xl fixed bottom-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg md:bg-transparent md:backdrop-blur-none">
        <Docker />
      </div>
    </main>
  );
}
