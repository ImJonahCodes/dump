import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atlanta Dump Rental | Professional Dumpster Rental Services',
  description: 'Atlanta\'s trusted dumpster rental service. Serving residential and commercial clients with reliable waste management solutions across the metro area.',
  keywords: 'dumpster rental, Atlanta, waste management, construction debris, junk removal, roll-off dumpster',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
