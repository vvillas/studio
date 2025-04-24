'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {ReactNode} from 'react';
import {SessionProvider as NextAuthSessionProvider} from 'next-auth/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

// Create a client component for SessionProvider

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

interface ClientSessionProviderProps {
  children: ReactNode;
}

function ClientSessionProvider({children}: ClientSessionProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientSessionProvider>
          <Navbar />
          <div className="container mx-auto py-8">
            {children}
          </div>
        </ClientSessionProvider>
      </body>
    </html>
  );
}

