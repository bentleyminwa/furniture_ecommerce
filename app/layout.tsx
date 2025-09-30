import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Furniro',
  description:
    'An ecommerce website where you can find and buy all the furniture you need.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${quicksand.className} antialiased`}>
        <Navbar />
        <main className='min-h-[50vh]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
