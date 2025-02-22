import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";
import { MediaProvider } from "@/context/MediaQueryContext";
import "../styles/mainStyles.css";

export const metadata: Metadata = {
    title: "سندباد تریپ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa">
            <body>
                <MediaProvider>
                    <ClientLayout>{children}</ClientLayout>
                </MediaProvider>
            </body>
        </html>
    );
}
