import { Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myloandesk.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} h-full antialiased bg-cream`}
    >
      <body className="min-h-full flex flex-col relative bg-cream">
        {children}
      </body>
    </html>
  );
}
