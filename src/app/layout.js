import "./globals.css";
import { Onest, Bricolage_Grotesque, Space_Grotesk, PT_Serif } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptserif",
});

export const metadata = {
  title: "Team Counsel",
  description:
    "BigLaw-quality legal services for early-stage startups and investors — without the BigLaw price tag.",
  metadataBase: new URL("https://teamcounsel.in"),
  openGraph: {
    title: "Team Counsel",
    description:
      "Startup-first legal solutions — fractional GC, contract solutions, and legal design.",
    url: "https://teamcounsel.in",
    siteName: "Team Counsel",
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Counsel",
    description:
      "Startup-first legal solutions — fractional GC, contract solutions, and legal design.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${bricolage.variable} ${spaceGrotesk.variable} ${ptSerif.variable}`}
    >
      <body className="font-onest bg-brand-white text-brand-navy">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
