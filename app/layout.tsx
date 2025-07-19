// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

// ✅ SEO & OpenGraph Metadata
export const metadata: Metadata = {
  title: "Darsh Gajdhar | Software Dev",
  description:
    "Level up with pixel-perfect game dev portfolio built with Next.js!",
  keywords: [
    "Darsh Gajdhar",
    "Frontend Developer",
    "Next.js Portfolio",
    "Game Developer",
    "Software Developer",
    "MERN Developer",
    "React Developer",
    "Full Stack Developer",
  ],
  metadataBase: new URL("https://darshgajdhar.in"),
  openGraph: {
    title: "Darsh Gajdhar | Software Dev",
    description:
      "Level up with pixel-perfect game dev portfolio built with Next.js!",
    url: "https://darshgajdhar.in",
    siteName: "Darsh Gajdhar",
    images: [
      {
        url: "/og.png", // ✅ Keep it relative for better portability
        width: 800,
        height: 600,
        alt: "Darsh’s portfolio preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics setup */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CRDZGDNKZ0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-CRDZGDNKZ0');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
