import Link from 'next/link';
import type { ReactNode } from 'react';
import './globals.css';
import NavBar from '@/app/components/NavBar';
import { exo2, orbitron } from '@/app/fonts';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
  description: 'only best Game review',
};
interface LayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
      <body className=' flex min-h-screen flex-col bg-orange-50 px-4 py-2'>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs text-slate-500'>
          Ganme data and images courtesy of{' '}
          <a
            href='https://rawg.io/'
            className='text-orange-800 hover:underline'
            target='_blank'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
