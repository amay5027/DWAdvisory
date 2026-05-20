import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dw-advisory.co.uk"),
  title: {
    default: "DW Advisory · Accounts, Tax and Business Advisory for UK SMEs",
    template: "%s · DW Advisory",
  },
  description:
    "Proactive accounting and tax advisory for UK start-ups, contractors and owner-managed businesses. Led by David Whiteman FCCA, a chartered accountant with over twenty years in practice.",
  keywords: [
    "accountant",
    "advisory",
    "FCCA",
    "SME accountant UK",
    "startup accountant",
    "contractor accountant",
    "R&D tax credits",
    "EIS SEIS",
    "HMRC",
    "Corporation Tax",
  ],
  openGraph: {
    title: "DW Advisory · Accounts, Tax and Business Advisory",
    description:
      "Proactive accounting and advisory for UK start-ups, contractors and owner-managed businesses. Led by David Whiteman FCCA.",
    type: "website",
    locale: "en_GB",
    siteName: "DW Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "DW Advisory · Accounts, Tax and Business Advisory",
    description:
      "Proactive accounting and advisory for UK start-ups, contractors and SMEs.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${instrumentSerif.variable}`}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
