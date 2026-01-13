import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { locales } from '../i18n/request';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AISOD LRLM - Namqula | African-First AI Language Model",
    description: "Namqula is the first sovereign Low Resource and Reasoning Language Model optimized for African languages. 65% more efficient tokenization, offline-capable, and built for African cultural reasoning.",
  keywords: [
    "African AI",
    "Language Model",
    "LRLM",
    "Namqula",
    "AISOD",
    "African Languages",
    "Oshiwambo",
    "AI for Africa",
    "Low Resource AI",
    "Edge AI",
    "Namibian AI",
    "Sovereign AI",
    "African LLM",
    "Cultural AI",
    "Offline AI",
    "Enterprise AI",
    "Government AI",
    "Financial AI",
    "Healthcare AI",
    "Agricultural AI",
  ],
  authors: [{ name: "AISOD Tech" }],
  creator: "AISOD Tech",
  publisher: "AISOD Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aisod.solutions"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AISOD LRLM - Namqula | African-First AI Language Model",
    description: "Namqula: The first sovereign Low Resource and Reasoning Language Model optimized for African languages. 65% more efficient, offline-capable, and culturally-aware.",
    url: "https://aisod.solutions",
    siteName: "AISOD LRLM",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "AISOD LRLM - Namqula",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISOD LRLM - Namqula | African-First AI Language Model",
    description: "Namqula: The first sovereign Low Resource and Reasoning Language Model optimized for African languages.",
    images: ["/og-image"],
    creator: "@AISODTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Artificial Intelligence",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AISOD Tech",
              url: "https://aisod.solutions",
              logo: "https://aisod.solutions/logo.png",
              description: "AISOD Tech develops Namqula, the first sovereign Low Resource and Reasoning Language Model optimized for African languages.",
              foundingDate: "2024",
              headquarters: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Namibia",
                  addressRegion: "Windhoek"
                }
              },
              sameAs: [
                "https://twitter.com/AISODTech",
                "https://linkedin.com/company/aisod-tech",
                "https://github.com/aisod-tech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Enterprise Sales",
                email: "enterprise@aisod.solutions",
                areaServed: "Africa"
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Namqula LRLM",
              applicationCategory: "Artificial Intelligence",
              operatingSystem: "Web, Mobile, Edge Devices",
              description: "Low Resource and Reasoning Language Model optimized for African languages with 65% more efficient tokenization.",
              author: {
                "@type": "Organization",
                name: "AISOD Tech"
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
              applicationSubCategory: "Language Model",
              fileSize: "1GB-8GB",
              softwareVersion: "1.0",
              featureList: [
                "African language optimization",
                "65% efficient tokenization",
                "Offline capability",
                "Edge deployment",
                "Cultural reasoning",
                "Data sovereignty"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AISOD LRLM - Namqula",
              description: "African-First AI Language Model for sovereign data processing",
              url: "https://aisod.solutions",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aisod.solutions/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              publisher: {
                "@type": "Organization",
                name: "AISOD Tech"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
