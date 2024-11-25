import Link from 'next/link';
import React from 'react';

import IconDEXScreener from '@/assets/dexscreener.png';
import IconRaydium from '@/assets/raydium.png';
import IconTelegram from '@/assets/telegram.png';
import IconX from '@/assets/x.png';
import { buttonVariants } from '@/components/ui/button';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Image, { type ImageProps } from 'next/image';
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
};

const DATA = {
  navbar: [
    { href: '#', icon: Icons.dexscreener, label: 'DEX Screener' },
    { href: '#', icon: Icons.raydium, label: 'Raydium' },
  ],
  contact: {
    social: {
      Telegram: {
        name: 'Telegram',
        url: '#',
        icon: Icons.telegram,
      },
      X: {
        name: 'X',
        url: '#',
        icon: Icons.x,
      },
    },
  },
};

export function Docker() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={{ href: item.href }}
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
                  href={{ href: social.url }}
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
      </Dock>
    </TooltipProvider>
  );
}