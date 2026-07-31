import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Poppins, Parisienne } from "next/font/google";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Mahmoud & Ons",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${script.variable}`}>
        {children}
      </body>
    </html>
  );
}