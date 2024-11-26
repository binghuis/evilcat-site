import Link from 'next/link';
import React from 'react';

import IconChat from '@/assets/chat.png';
import IconDEXScreener from '@/assets/dexscreener.png';
import IconRaydium from '@/assets/raydium.png';
import IconTelegram from '@/assets/telegram.png';
import IconX from '@/assets/x.png';
import { buttonVariants } from '@/components/ui/button';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Config from '@/config';
import { cn } from '@/lib/utils';
import Image, { type ImageProps } from 'next/image';
import type { UrlObject } from 'url';
import { BorderBeam } from './ui/border-beam';
export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  x: (props: Omit<ImageProps, 'src' | 'alt'>) => <Image src={IconX} alt="" {...props} />,
  telegram: (props: Omit<ImageProps, 'src' | 'alt'>) => (
    <Image src={IconTelegram} alt="" {...props} />
  ),
  raydium: (props: Omit<ImageProps, 'src' | 'alt'>) => (
    <Image src={IconRaydium} alt="" {...props} />
  ),
  dexscreener: (props: Omit<ImageProps, 'src' | 'alt'>) => (
    <Image src={IconDEXScreener} alt="" {...props} />
  ),
  chat: (props: Omit<ImageProps, 'src' | 'alt'>) => <Image src={IconChat} alt="" {...props} />,
};

const DATA = {
  navbar: [
    {
      href: Config.url.dexscreener,
      icon: Icons.dexscreener,
      label: 'DEX Screener',
    },
    {
      href: Config.url.raydium,
      icon: Icons.raydium,
      label: 'Raydium',
    },
  ],
  contact: {
    social: {
      Telegram: {
        name: 'Telegram',
        url: Config.url.telegram,
        icon: Icons.telegram,
      },
      X: {
        name: 'X',
        url: Config.url.x,
        icon: Icons.x,
      },
    },
  },
};

export function Docker() {
  return (
    <div>
      <TooltipProvider>
        <Dock direction="middle" className="bg-gray-600 shadow-lg border-none">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    prefetch
                    href={item.href as unknown as UrlObject}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <item.icon className="size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    prefetch
                    target="_blank"
                    href={social.url as unknown as UrlObject}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <social.icon className="size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <BorderBeam />
        </Dock>
      </TooltipProvider>
    </div>
  );
}
