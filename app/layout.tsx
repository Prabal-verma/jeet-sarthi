import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JEET SARTHI - Secure Your Dream Rank in NEET & JEE",
  description: "Personalized One-on-One Mentorship from IITians & Doctors Who've Already Cracked It",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
