import '@/styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: '$EVILCAT',
  description: 'Evil, but cute.',
  keywords: ['EVILCAT', 'Evil Cat', 'Evil', 'Cat'],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <StyledJsxRegistry>
            <main className="relative w-screen h-screen ">{children}</main>
          </StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
