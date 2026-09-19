import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Semachew Molla Kassa | PhD Researcher in Geotechnical Engineering & AI',
  description: 'Official academic and research website of Semachew Molla Kassa. PhD Researcher in Geotechnical Engineering at Warsaw University of Technology, Poland. Focus on slope stability, landslide risk assessment, stratigraphic uncertainty, numerical modeling (PLAXIS), and artificial intelligence.',
  keywords: [
    'Semachew Molla Kassa',
    'Geotechnical Engineering',
    'Warsaw University of Technology',
    'Slope Stability',
    'Landslide Risk Assessment',
    'Rainfall-Induced Landslides',
    'Artificial Intelligence and Machine Learning',
    'Stratigraphic Uncertainty',
    'Reliability-Based Geotechnical Design',
    'Monte Carlo Simulation',
    'Bayesian Methods',
    'Finite Element Modeling',
    'PLAXIS 2D 3D',
    'DAAD Research Fellow',
  ],
  authors: [{ name: 'Semachew Molla Kassa' }],
  creator: 'Semachew Molla Kassa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://semachew-kassa.is-a.dev',
    title: 'Semachew Molla Kassa | Geotechnical Engineering & AI Research',
    description: 'PhD Researcher in Geotechnical Engineering at Warsaw University of Technology, Poland. Integrating geotechnical engineering, AI, and numerical modeling.',
    siteName: 'Semachew Molla Kassa Academic Website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Semachew Molla Kassa Academic Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semachew Molla Kassa | Geotechnical Engineering & AI Research',
    description: 'PhD Researcher in Geotechnical Engineering at Warsaw University of Technology, Poland.',
    creator: '@semachew_kassa',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD for Academic Person
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Semachew Molla Kassa',
    jobTitle: 'PhD Researcher in Geotechnical Engineering',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Warsaw University of Technology, Poland',
    },
    url: 'https://semachew-kassa.is-a.dev',
    sameAs: [
      'https://scholar.google.com',
      'https://orcid.org',
      'https://github.com',
      'https://linkedin.com',
      'https://researchgate.net',
    ],
    knowsAbout: [
      'Geotechnical Engineering',
      'Slope Stability',
      'Landslide Risk Assessment',
      'Artificial Intelligence',
      'Stratigraphic Uncertainty',
      'Numerical Modeling',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
