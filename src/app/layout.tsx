import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";
import "../styles/mainStyles.css";
import ClientProvider from "@/components/ClientProvider/ClientProvider";

export const metadata: Metadata = {
    title: "سندباد تریپ",
    icons :{
        icon : "/images/AllNewLogos/singleLogo.svg"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa">
            <body>
                <ClientProvider >
                    <ClientLayout>{children}</ClientLayout>
                </ClientProvider>
            </body>
        </html>
    );
}
