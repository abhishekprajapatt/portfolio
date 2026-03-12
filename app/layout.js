import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Abhishek Prajapatt | Java Full Stack & Backend Developer",
  description:
    "Full Stack & Backend Developer: Java Spring Boot backends with Angular, React, (Next.js + Node.js) frontends. Building scalable enterprise applications with modern web technologies.",
  keywords:
    "Full Stack Developer, Backend Developer, Java Spring Boot, Node.js Express, React, Next.js, Angular, Web Development, JavaScript, TypeScript, Microservices, Portfolio, Abhishek Prajapatt",
  metadataBase: new URL("https://abhishekeng.vercel.app/"),
  openGraph: {
    title: "Abhishek Prajapatt | Java Full Stack & Backend Developer",
    description:
      "Building scalable applications with Java Spring Boot backend and Angular, React, (Next.js + Node.js) frontend. Available for Full Stack and Backend roles.",
    url: "https://abhishekeng.vercel.app/",
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Prajapatt | Java Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Prajapatt | Java Full Stack & Backend Developer",
    description:
      "Full Stack & Backend Developer: Building scalable applications - Java Spring Boot backend, Angular, React, (Next.js + Node.js) frontend.",
    creator: "@AbhishekPrajapatt",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/abhishekprajapatt.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="abhishekprajapatt" href="/abhishekprajapatt.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Prajapatt",
              url: "https://abhishekeng.vercel.app",
              jobTitle: "Java Full Stack & Backend Developer",
              sameAs: [
                "https://github.com/abhishekprajapatt",
                "https://www.linkedin.com/in/abhishekprajapatt",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
