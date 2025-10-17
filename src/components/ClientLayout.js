"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin");

    return (
        <>
            {!isAdminPage && <Navbar />}
            <main className="min-h-screen">{children}</main>
            {!isAdminPage && <Footer />}
        </>
    );
}
