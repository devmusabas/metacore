import '../globals.css';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00000',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full flex-col items-start justify-start bg-background text-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
