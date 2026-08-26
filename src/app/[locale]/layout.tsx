import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import VideoGreetingWidget from "@/components/site/Home/AIVideo";
import WhatsappWidgetButton from "@/components/site/utils/WhatsappWidgetButton";
import ChatbotWidget from "@/components/common/GHLChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    metadataBase: new URL("https://www.myloandesk.com"),
    title: isEs
      ? "MyLoanDesk | Compare Tasas Hipotecarias y Préstamos en EE. UU."
      : "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
    description: isEs
      ? "Acceda a cientos de soluciones hipotecarias a través de nuestra red nacional. Comparamos más de 100 prestamistas mayoristas para asegurar tasas competitivas."
      : "MyLoanDesk is your trusted mortgage brokerage. We compare 100+ lenders to secure competitive interest rates and custom financing solutions from application to closing.",
    alternates: {
      canonical: isEs
        ? "https://www.myloandesk.com/es/"
        : "https://www.myloandesk.com/",
      languages: {
        en: "https://www.myloandesk.com/",
        es: "https://www.myloandesk.com/es/",
        "x-default": "https://www.myloandesk.com/",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Required for Next.js static export: informs next-intl of the current locale without calling headers()
  setRequestLocale(locale);

  // Pass locale explicitly to prevent header fallback
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${geistSans.className} h-full antialiased bg-cream`}
    >
      <body className="min-h-full flex flex-col relative bg-cream">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <VideoGreetingWidget />
          <WhatsappWidgetButton />
          <ChatbotWidget />
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-KQ5H354K"}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
