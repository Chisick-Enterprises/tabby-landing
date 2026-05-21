import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteChrome } from "@/components/SiteChrome";
import { Ready } from "@/components/Ready";
import { LazyHelpAgent } from "@/components/LazyHelpAgent";
import { HashScroller } from "@/components/HashScroller";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  title: "Tabby — Enjoy the meal, not the math.",
  description:
    "Scan the receipt. Claim your items. Settle up before you leave the table. Tabby launches Q4 2026.",
  metadataBase: new URL("https://splittabby.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tabby — Enjoy the meal, not the math.",
    description:
      "Scan the receipt. Claim your items. Settle up before you leave the table.",
    type: "website",
    url: "https://splittabby.com",
    siteName: "Tabby",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabby — Enjoy the meal, not the math.",
    description:
      "Scan the receipt. Claim your items. Settle up before you leave the table.",
  },
};

const CABINET_BOLD_WOFF =
  "https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Bold.woff";
const CABINET_MEDIUM_WOFF =
  "https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Medium.woff";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={CABINET_BOLD_WOFF}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={CABINET_MEDIUM_WOFF}
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/screens/settle.webp" as="image" />
      </head>
      <body>
        <PostHogProvider>
          <Ready />
          <SmoothScroll />
          <HashScroller />
          <SiteChrome>{children}</SiteChrome>
          <LazyHelpAgent />
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
