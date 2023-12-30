import { RootLayout } from '@/components/RootLayout';
import CookieConsent from '@/components/CookieConsent';
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/tailwind.css';

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>
          <SpeedInsights />
          {children}
          <CookieConsent />
        </RootLayout>
      </body>
    </html>
  );
}
