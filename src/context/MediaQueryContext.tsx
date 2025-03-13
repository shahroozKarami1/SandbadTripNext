"use client";

import { createContext, ReactNode, useContext } from "react";
import { useMediaQuery } from "@mui/material";

type MediaContextType = boolean;

const MediaContext = createContext<MediaContextType>(false);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const isXs = useMediaQuery("(max-width: 768px)");

  return <MediaContext.Provider value={isXs}>{children}</MediaContext.Provider>;
};

export const useMedia = () => {
  return useContext(MediaContext);
};
