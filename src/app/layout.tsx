import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warung IELTS Pare - Pelopor Metode Imitative Writing",
  description: "Warung IELTS Pare - Kursus IELTS terbaik dengan metode imitative writing pioneer. Program intensif persiapan IELTS dengan fasilitas lengkap di Kampung Inggris.",
  keywords: ["Warung IELTS", "Kampung Inggris", "IELTS Preparation", "Imitative Writing", "Kursus IELTS", "Pare", "Kediri"],
  authors: [{ name: "Warung IELTS Team" }],
  openGraph: {
    title: "Warung IELTS Pare - Pelopor Metode Imitative Writing",
    description: "Kursus IELTS terbaik dengan metode imitative writing pioneer di Kampung Inggris Pare",
    url: "https://warungielts.com",
    siteName: "Warung IELTS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warung IELTS Pare - Pelopor Metode Imitative Writing",
    description: "Kursus IELTS terbaik dengan metode imitative writing pioneer di Kampung Inggris Pare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
