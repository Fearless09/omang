import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ContextProvider } from "@/contexts/GlobalContext";
import Background from "@/components/shared/Background";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baloo_2 = localFont({
  src: "./fonts/Baloo_2/Baloo2-VariableFont_wght.ttf",
  variable: "--font-baloo-2",
});

const libre_bodoni = localFont({
  src: [
    {
      path: "./fonts/Libre_Bodoni/LibreBodoni-VariableFont_wght.ttf",
    },
    {
      path: "./fonts/Libre_Bodoni/LibreBodoni-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-libre-bodoni",
});

const sf_pro = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-ThinItalic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Ultralight.otf",
      weight: "200",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-UltralightItalic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-LightItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-RegularItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Semibold.otf",
      weight: "600",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-SemiboldItalic.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-BoldItalic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Heavy.otf",
      weight: "800",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-HeavyItalic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-Black.otf",
      weight: "900",
    },
    {
      path: "./fonts/sf-pro-display/SF-Pro-Display-BlackItalic.otf",
      style: "italic",
      weight: "900",
    },
  ],
  variable: "--font-sf_pro",
});

const url = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Omang Thomas - UI/UX Designer",
  description:
    "Portfolio of Omang Thomas, a passionate UI/UX designer crafting intuitive and engaging digital experiences. Explore my work, skills, and contact details for a seamless user experience.",
  keywords: [
    "Omang Thomas",
    "UI/UX Designer",
    "Portfolio",
    "Skills",
    "Contact",
    "User Experience",
    "Design",
    "Figma",
    "Adobe XD",
    "Sketch",
    "Prototyping",
    "Wireframing",
    "Interaction Design",
    "Visual Design",
    "User-Centered Design",
  ],
  authors: [{ name: "Omang Thomas", url }],
  icons: "/ux.svg",
  openGraph: {
    title: "Omang Thomas - UI/UX Designer",
    description:
      "Portfolio of Omang Thomas, a passionate UI/UX designer crafting intuitive and engaging digital experiences. Explore my work, skills, and contact details for a seamless user experience.",
    url,
    siteName: "Omang Thomas Portfolio",
    images: [
      {
        url: url + "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Omang Thomas Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omang Thomas - UI/UX Designer",
    description:
      "Portfolio of Omang Thomas, a passionate UI/UX designer crafting intuitive and engaging digital experiences. Explore my work, skills, and contact details for a seamless user experience.",
    images: [url + "/profile.jpg"],
    creator: "@omang_tech",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable} ${baloo_2.variable} ${libre_bodoni.variable} ${sf_pro.variable} antialiased`}
      >
        <ContextProvider>
          <section className="min-h-dvh w-screen overflow-clip">
            <Background />
            <Navbar />
            {children}
            <Footer />
          </section>
        </ContextProvider>
      </body>
    </html>
  );
}
