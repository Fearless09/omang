import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/contexts/GlobalContext";

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
        url: url + "/omang.svg",
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
    images: [url + "/omang.svg"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
