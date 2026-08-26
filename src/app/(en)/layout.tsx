import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import enMessages from "@/locales/en.json";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import VideoGreetingWidget from "@/components/site/Home/AIVideo";
import WhatsappWidgetButton from "@/components/site/utils/WhatsappWidgetButton";
import ChatbotWidget from "@/components/common/GHLChatBot";
import { GoogleTagManager } from "@next/third-parties/google";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Explicitly set locale for static export on root routes
  setRequestLocale("en");

  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
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
  );
}
