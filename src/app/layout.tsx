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
  title: 'Semachew Molla Kassa | Academic & Artificial Intelligence Researcher',
  description: 'Official academic website of Semachew Molla Kassa. Assistant Professor and Lead AI Researcher specializing in Trustworthy AI, Graph Neural Networks, Explainable Deep Learning, and Privacy-Preserving Federated Learning.',
  keywords: [
    'Semachew Molla Kassa',
    'AI Researcher',
    'Machine Learning Professor',
    'Graph Neural Networks',
    'Explainable AI',
    'Federated Learning',
    'Trustworthy AI',
    'Computer Science',
    'Academic Portfolio',
  ],
  authors: [{ name: 'Semachew Molla Kassa' }],
  creator: 'Semachew Molla Kassa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://semachew-kassa.is-a.dev',
    title: 'Semachew Molla Kassa | Academic & AI Research Portfolio',
    description: 'Pioneering Trustworthy Artificial Intelligence, Graph Neural Networks, and Distributed Machine Learning.',
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
    title: 'Semachew Molla Kassa | Academic & AI Research Portfolio',
    description: 'Pioneering Trustworthy Artificial Intelligence, Graph Neural Networks, and Distributed Machine Learning.',
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
    jobTitle: 'Assistant Professor & Lead AI Researcher',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Department of Computer Science & Artificial Intelligence',
    },
    url: 'https://semachew-kassa.is-a.dev',
    sameAs: [
      'https://scholar.google.com',
      'https://orcid.org',
      'https://github.com',
      'https://linkedin.com',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Graph Neural Networks',
      'Explainable AI',
      'Federated Learning',
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
