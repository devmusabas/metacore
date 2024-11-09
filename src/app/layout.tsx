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
        <div className="flex min-h-screen w-full flex-1 flex-col overflow-hidden bg-background text-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
