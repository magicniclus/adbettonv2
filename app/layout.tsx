import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bati France - Spécialistes en Rénovation à Paris | Devis Gratuit",
  description: "Bati France, spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale. Devis gratuit à Paris 75020. Intervention rapide et professionnelle.",
  keywords: "rénovation Paris, peinture ravalement Paris, électricité plomberie Paris, rénovation globale Paris, entrepreneur bâtiment Paris, travaux rénovation 75020, Bati France, construction Paris, artisan rénovation, devis gratuit",
  authors: [{ name: "Bati France" }],
  creator: "Bati France",
  publisher: "Bati France",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://batifrance.fr"),
  alternates: {
    canonical: "https://batifrance.fr",
  },
  openGraph: {
    title: "Bati France - Spécialistes en Rénovation à Paris",
    description: "Bati France, spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale. Devis gratuit à Paris.",
    url: "https://batifrance.fr",
    siteName: "Bati France - Spécialistes en Rénovation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bati France - Spécialistes en Rénovation à Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bati France - Spécialistes en Rénovation",
    description: "Spécialistes dans tous les corps d'état : peinture, ravalement, électricité, plomberie, rénovation globale à Paris.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        {/*<Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>*/}

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
