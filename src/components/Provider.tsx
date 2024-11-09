'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { ThemeProvider } from 'next-themes';
// import { toast } from '@/features/toast';
import { AppController } from '@/components/AppController';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

export const Provider: FCWC = ({ children }) => {
  return (
    <>
      {/* <ThemeProvider enableSystem={false} enableColorScheme={false} attribute="class" defaultTheme="dark"> */}
      <QueryClientProvider client={queryClient}>
        <AppController />
        <ReactQueryDevtools initialIsOpen={true} />
        {children}
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </>
  );
};
