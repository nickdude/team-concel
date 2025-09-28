"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Onest, Bricolage_Grotesque, Space_Grotesk, PT_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

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

// export const metadata = {
//   title: "My App",
//   description: "Next.js + Tailwind + Fonts + Colors",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <html
      lang="en"
      className={`${onest.variable} ${bricolage.variable} ${spaceGrotesk.variable} ${ptSerif.variable}`}
    >
      <body className="font-onest bg-brand-white text-brand-navy">
        {!isAdminPage && <Navbar />}
        <main className="min-h-screen">{children}</main>
        {!isAdminPage && <Footer />}
      </body>
    </html>
  );
}
