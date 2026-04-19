import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Toaster } from "sonner";
import ScrollProgress from "@/app/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhanusanikommu.vercel.app"),
  title: {
    default: "Bhanu Sanikommu — Full Stack & AI/ML Developer",
    template: "%s | Bhanu Sanikommu",
  },
  description:
    "Full Stack Developer, UI/UX Designer, AI/ML Builder. Building premium products with live demos, clear UX, and real-world impact.",
  keywords: [
    "Bhanu Sanikommu",
    "Full Stack Developer",
    "AI ML Developer",
    "Next.js",
    "React",
    "Python",
    "Portfolio",
    "Internship",
    "Saveetha",
    "UI/UX Designer",
  ],
  authors: [{ name: "Sanikommu Bhanu", url: "https://github.com/sanikommu-bhanu" }],
  creator: "Sanikommu Bhanu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhanusanikommu.vercel.app",
    title: "Bhanu Sanikommu — Full Stack & AI/ML Developer",
    description:
      "Full Stack Developer, UI/UX Designer, AI/ML Builder. Building premium products with live demos, clear UX, and real-world impact.",
    siteName: "Bhanu Sanikommu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Sanikommu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Sanikommu — Full Stack & AI/ML Developer",
    description: "Building premium products with live demos, clear UX, and real-world impact.",
    images: ["/og-image.png"],
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
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: {
    google: "your-google-verification",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070d1a" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "hsl(222, 47%, 8%)",
                border: "1px solid hsl(222, 47%, 14%)",
                color: "hsl(213, 31%, 91%)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
