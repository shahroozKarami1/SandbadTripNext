"use client"; 
import { Box, Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "../MainHeader/MainHeader";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import Footer from "../Footer/Footer";
import { useMedia } from "@/context/MediaQueryContext";
export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isXs = useMedia();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Box>
            {pathname !== "/" && <MainHeader />}
            {isXs && <ResponsiveMenu />}
            {children}
            <Stack>
                <Box bgcolor={"#F2F2F2"} sx={{ marginTop: "2rem", padding: "2rem  0", display: "block" }}>
                    <Container>
                        <Footer />
                    </Container>
                </Box>
            </Stack>
        </Box>
    );
}
