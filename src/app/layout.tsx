import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/features/Providers";
import Navbar from "@/components/Navbar";

const poppins_font = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Gemma NGO",
  description: "NGO",
  icons: "/next.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins_font.className}>
          <Navbar />
          {children}
          </body>
      </html>
    </Providers>
  );
}
