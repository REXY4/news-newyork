import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MyProvider } from "@/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Generated by create next app",
  authors :{name :  "rexy4<muhammadrzki96@gmail.com>", "url": "https://github.com/REXY4" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyProvider>
        {children}
        </MyProvider>
      </body>
    </html>
  );
}
