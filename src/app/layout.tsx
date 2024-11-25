import '@/styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import StyledJsxRegistry from './registry';
// import type { Route } from 'next';

export const metadata: Metadata = {
  title: 'Tmpl Nextjs',
  description: 'Tmpl Nextjs',
  keywords: ['nextjs'],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
