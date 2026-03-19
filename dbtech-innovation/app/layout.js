import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { RevealHelper } from "../components/RevealHelper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DB Tech Innovation | Architecture Digitale Premium",
    template: "%s | DB Tech Innovation"
  },
  description: "Expertise structurée pour la performance des institutions et des entreprises au Gabon. Digitalisation GED, Workflows métiers et Tableaux de bord stratégiques.",
  metadataBase: new URL('https://dbtech-innovation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DB Tech Innovation | Architecture Digitale Premium",
    description: "Transformation digitale premium pour les institutions et entreprises au Gabon.",
    url: 'https://dbtech-innovation.com',
    siteName: 'DB Tech Innovation',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DB Tech Innovation",
    description: "Expertise digitale premium au Gabon.",
    images: [
      {
        url: '/Logo.png',
        alt: 'DB Tech Innovation Logo',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="pageRoot">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <RevealHelper />
      </body>
    </html>
  );
}
