//'use client';

import type { Metadata } from 'next'
import { Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700']
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-mono',
  weight: ['400', '500']
});

export const metadata: Metadata = {
  title: 'Newton Oduor - Full Stack Developer',
  description: 'Portfolio of Newton Oduor, a full-stack developer building scalable web applications and modern digital solutions.',
  generator: 'Newton Oduor Portfolio',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${firaCode.variable}`}>
      <head>
        {/* Google Analytics setup */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-STJL3KWTDH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-STJL3KWTDH');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  )
}
