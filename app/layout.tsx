import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FloodAware",
  description: "AI-Driven Flood Risk Detection",
    icons: {
    icon: "/logo.png",
  },
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-emerald-800 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-bold text-white">FloodAware</p>
            <p className="mt-2 text-sm text-emerald-100">
              Empowering communities with AI-powered flood risk detection and awareness.
            </p>
            <p className="mt-4 text-sm text-emerald-200">
              Contact: <a href="mailto:shahryaramjadmos2@gmail.com" className="underline hover:text-white">shahryaramjadmos2@gmail.com</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
