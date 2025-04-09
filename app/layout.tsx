// app/layout.tsx or app/layout.js
import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Marikenyo',
  description: 'A festival promotion website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      <meta property="og:image" content="/logo.png" />
      <body>{children}</body>
    </html>
  );
}
