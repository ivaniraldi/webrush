import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://webrush-a7209.web.app'),
  title: {
    default: 'WebRush: Sites Profissionais Rápidos com Domínio Grátis',
    template: '%s | WebRush',
  },
  description: 'Crie seu site profissional com domínio incluso. Planos a partir de R$69. Sites rápidos, seguros e com design responsivo para o mercado global. Comece já!',
  keywords: ['criação de sites', 'site profissional', 'domínio grátis', 'site rápido', 'desenvolvimento web', 'SykoTech', 'WebRush', 'loja virtual', 'site para pequenas empresas', 'landing page', 'one-page'],
  openGraph: {
    title: 'WebRush: Lançamento Rápido de Sites Profissionais',
    description: 'Transforme sua ideia em um site global. Rápido, seguro e com a agilidade que seu negócio precisa para se destacar online.',
    url: 'https://webrush-a7209.web.app',
    siteName: 'WebRush',
    images: [
      {
        url: 'https://webrush-a7209.web.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebRush - Seu site profissional no ar em tempo recorde.',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: 'WebRush: Sites Profissionais para o Mundo',
    description: 'Domínio grátis, performance e design de ponta. Lance seu negócio no cenário digital com a WebRush.',
    images: ['https://webrush-a7209.web.app/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://webrush-a7209.web.app',
    languages: {
      'pt-BR': 'https://webrush-a7209.web.app',
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'WebRush',
  },
  formatDetection: {
    telephone: false,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  'name': 'WebRush',
  'alternateName': 'SykoTech',
  'url': 'https://webrush-a7209.web.app',
  'logo': 'https://webrush-a7209.web.app/logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+55-48-99208-4572',
    'contactType': 'sales',
    'areaServed': 'BR',
    'availableLanguage': ['Portuguese']
  },
  'sameAs': [
    'https://www.sykotech.com'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
