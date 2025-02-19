import type { Metadata } from "next";
import "../styles/mainStyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";
import { MediaProvider } from "@/context/MediaQueryContext";

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
