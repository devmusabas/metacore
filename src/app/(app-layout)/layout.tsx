import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
// import { redirect } from 'next/navigation';

import { Provider } from '@/components/Provider';

// import { createClient } from '@/utils/supabase/server';

// import { headers } from 'next/headers';

// import { AppHeader, Footer, Provider } from '@/components';
// import { APP_HEADER_HEIGHT } from '@/constants';

export const metadata: Metadata = {
  title: 'MetaCORE Education',
  description:
    'MetaCORE Education provides dedicated online tuition services to help students reach their full academic potential.',
  keywords:
    'MetaCORE Education,online tuition,academic support,personalized learning,student success,gsce,A-level,subject-specific tuition, optional subjects,initial assessment,tailored curriculum,student progress tracking, entoring services,experienced professionals,one-on-one tuition,subject expertise',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'MetaCORE Education',
    description:
      'MetaCORE Education provides dedicated online tuition services to help students reach their full academic potential.',
    url: 'https://metacoreeducation.com/',
    type: 'website',
    siteName: 'MetaCORE Education',
    images: [
      {
        url: 'https://metacoreeducation.com/social-pfp.png',
        width: 800,
        height: 600,
        alt: 'MetaCORE Education Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaCORE Education',
    description:
      'MetaCORE Education provides dedicated online tuition services to help students reach their full academic potential.',
    images: ['https://metacoreeducation.com/social-pfp.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '192x192' }],
  },
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <Provider>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
