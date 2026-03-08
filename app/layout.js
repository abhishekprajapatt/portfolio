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
  title: "Abhishek Prajapatt | Deep Systems Intelligence Engineer.",
  description:
    "Full Stack Developer building scalable enterprise applications with Java Spring Boot, Node.js, React, and modern web technologies. Also skilled in AI/ML and deep systems architecture.",
  keywords:
    "Full Stack Developer, Java Spring Boot, Node.js, React, Next.js, Web Development, JavaScript, TypeScript, AI/ML, Portfolio, Abhishek Prajapati",
  metadataBase: new URL("https://abhishek-g.vercel.app/"),
  openGraph: {
    title: "Abhishek Prajapatt | Deep Systems Intelligence Engineer.",
    description:
      "Building scalable applications with Java Spring Boot, Node.js, and React. Also skilled in AI/ML and deep systems.",
    url: "https://abhishek-g.vercel.app/",
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Prajapatt | Deep Systems Intelligence Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Prajapati | Deep Systems Intelligence Engineer.",
    description:
      "Building scalable applications with Java Spring Boot, Node.js, React, and AI/ML expertise.",
    creator: "@AbhishekPrajapati",
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Prajapatt",
              url: "https://abhishek-g.vercel.app",
              jobTitle: "Deep Systems Intelligence Engineer",
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
