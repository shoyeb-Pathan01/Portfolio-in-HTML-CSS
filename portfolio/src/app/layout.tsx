import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer | Modern Web Solutions',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating innovative digital solutions with clean code and exceptional user experiences.',
  keywords: 'full stack developer, react developer, next.js, web development, javascript, typescript, portfolio',
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  publisher: 'John Doe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://johndoe-portfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe-portfolio.com',
    title: 'John Doe - Full Stack Developer',
    description: 'Experienced Full Stack Developer creating innovative digital solutions with modern web technologies.',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer',
    description: 'Experienced Full Stack Developer creating innovative digital solutions with modern web technologies.',
    creator: '@johndoe',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Doe',
  jobTitle: 'Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  url: 'https://johndoe-portfolio.com',
  sameAs: [
    'https://github.com/johndoe',
    'https://linkedin.com/in/johndoe',
    'https://twitter.com/johndoe',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Full Stack Development',
    'Web Development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}