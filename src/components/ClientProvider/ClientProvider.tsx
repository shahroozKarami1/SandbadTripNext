"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { Box, CircularProgress, useMediaQuery } from '@mui/material'


const CusLoader = () => {
  // const isMobile = useMediaQuery("(max-width:768px)")
  // if (!isMobile) {
  //   return null
  // }
  return (

    <Box sx={{
      display: 'flex'
      , justifyContent: "center"
      , alignItems: 'center',
      flexDirection: 'column'
      , height: '100vh'
      , backgroundColor: "#fff"
    }}>
      <img src="/images/AllNewLogos/persian vertical 2-01.svg" alt="" style={{
        width: "300px",
        height: "300px"
      }} />

      <CircularProgress size="5rem" />

    </Box >
  )
}
const MediaProvider = dynamic(
  () => import("@/context/MediaQueryContext").then((mod) => mod.MediaProvider),
  { ssr: false, loading: () => <CusLoader /> }
);

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MediaProvider>
      <div>{children}</div>
    </MediaProvider>
  );
}