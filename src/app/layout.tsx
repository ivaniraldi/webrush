import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://webrush-a7209.web.app'),
  title: 'WebRush: Sites Profissionais Rápidos com Domínio Grátis',
  description: 'Crie seu site profissional com domínio incluso. Planos a partir de R$49. Sites rápidos, seguros e com design responsivo para o mercado global. Comece já!',
  keywords: ['criação de sites', 'site profissional', 'domínio grátis', 'site rápido', 'desenvolvimento web', 'SykoTech', 'WebRush', 'loja virtual', 'site para pequenas empresas'],
  openGraph: {
    title: 'WebRush: Lançamento Rápido de Sites Profissionais',
    description: 'Transforme sua ideia em um site global. Rápido, seguro e com a agilidade que seu negócio precisa para se destacar online.',
    url: 'https://webrush-a7209.web.app',
    siteName: 'WebRush',
    images: [
      {
        url: '/og-image.png', // Substitua pelo caminho da sua imagem Open Graph
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
    images: ['/twitter-image.png'], // Substitua pelo caminho da sua imagem para Twitter
  },
  alternates: {
    canonical: 'https://webrush-a7209.web.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  'name': 'WebRush',
  'url': 'https://webrush-a7209.web.app',
  'logo': 'https://webrush-a7209.web.app/logo.png', // Substitua pelo caminho do seu logo
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
