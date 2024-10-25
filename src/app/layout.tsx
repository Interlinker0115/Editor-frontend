"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const JotaiProvider = dynamic(() => import("@/providers/jotaiProvider"), { ssr: false });
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Suspense } from "react";
import Loading from "../app/loading"


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['100', '400', '700', '900'], // Changed from "weights" to "weight"
//   display: 'swap'
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   icons: {
//     icon: '/favicon.ico',
//   }
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Elements stripe={stripePromise}>
        <html lang="en">
          <body>
            <JotaiProvider>
              <Suspense fallback={<Loading />}></Suspense>
              {children}
            </JotaiProvider>
          </body>
        </html>
      </Elements>
    </ClerkProvider>
  );
}
