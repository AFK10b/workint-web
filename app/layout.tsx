import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workint.in"),
  title: "WORKINT — Launching Soon",
  description:
    "WORKINT is the career platform connecting ambitious students and fresh graduates with verified employers. Be among the first 1000 users — get lifetime premium free.",
  keywords: [
    "internship",
    "jobs",
    "career",
    "students",
    "graduates",
    "hiring",
    "workint",
  ],
  authors: [{ name: "WORKINT" }],
  openGraph: {
    title: "WORKINT — Launching Soon",
    description:
      "Where ambition meets opportunity. Sign up for early access and get lifetime premium free.",
    url: "https://workint.in",
    siteName: "WORKINT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WORKINT — Launching Soon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WORKINT — Launching Soon",
    description: "Where ambition meets opportunity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-surface-base text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
