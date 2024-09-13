import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const JotaiProvider = dynamic(() => import("@/providers/jotaiProvider"), { ssr: false });
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'], // Changed from "weights" to "weight"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap" rel="stylesheet" />
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </body>
    </html>
  );
}