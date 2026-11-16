import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Codiva - Code Driven by Vision',
  description: 'A startup of passionate full-stack developers and digital marketers creating scalable, modern web solutions that drive business growth.',
  keywords: ['full-stack development', 'web development', 'digital marketing', 'React', 'Next.js', 'startup'],
  authors: [{ name: 'Codiva Team' }],
  openGraph: {
    title: 'Codiva - Code Driven by Vision',
    description: 'Creating scalable, modern web solutions that drive business growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codiva - Code Driven by Vision',
    description: 'Creating scalable, modern web solutions that drive business growth.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased landing-page-theme bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}