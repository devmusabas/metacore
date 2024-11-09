import type { Metadata } from 'next';

// import { redirect } from 'next/navigation';

import { Provider } from '@/components/Provider';

// import { createClient } from '@/utils/supabase/server';

// import { headers } from 'next/headers';

// import { AppHeader, Footer, Provider } from '@/components';
// import { APP_HEADER_HEIGHT } from '@/constants';

export const metadata: Metadata = {
  title: 'EduTrack',
  description:
    'We provide a platform for educators to track and analyze student progress.',
  keywords: 'education,tracking,analytics,student,progress',
  manifest: '',
  openGraph: {
    title: 'EduTrack',
    description:
      'We provide a platform for educators to track and analyze student progress.',
    url: 'https://edutrack.com/',
    type: 'website',
    siteName: 'EduTrack',
    images: [{ url: 'https://edutrack.com/social-pfp.png' }],
  },
  twitter: {
    card: 'summary',
    title: 'EduTrack',
    description:
      'We provide a platform for educators to track and analyze student progress.',
    images: ['https://edutrack.com/social-pfp.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <Provider>
      {/* <AppHeader style={{ height: `${APP_HEADER_HEIGHT}px` }} /> */}
      {children}
      {/* <Footer /> */}
    </Provider>
  );
}
