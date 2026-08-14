import type { Metadata } from "next";
import { Geist } from "next/font/google";
// import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import VideoGreetingWidget from "@/components/site/Home/AIVideo";
import WhatsappWidgetButton from "@/components/site/utils/WhatsappWidgetButton";
import ChatbotWidget from "@/components/common/GHLChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myloandesk.com"),
  title: "MyLoanDesk - Your Trusted Mortgage Partner",
  description:
    "MyLoanDesk is your trusted partner for all your mortgage needs, providing expert guidance and seamless online services.",
  openGraph: {
    title: "MyLoanDesk - Your Trusted Mortgage Partner",
    description:
      "MyLoanDesk is your trusted partner for all your mortgage needs, providing expert guidance and seamless online services.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} h-full antialiased bg-cream`}
    >
      <body className="min-h-full flex flex-col relative bg-cream">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter />
        <VideoGreetingWidget />

        {/* Fixed WhatsApp Button */}
        <WhatsappWidgetButton />

        {/* LeadConnector AI Chatbot Widget */}
        <ChatbotWidget />

        {/* Microsoft Clarity */}
        {/* <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xxjjkwpvdd");
            `,
          }}
        /> */}

        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-KQ5H354K"}
        />
      </body>
    </html>
  );
}
