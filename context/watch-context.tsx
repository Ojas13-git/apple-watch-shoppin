"use client";

import React, { createContext, useContext, useState } from "react";
import { WatchBand, WatchCase, WatchCollection, WatchConfiguration } from "@/types/watch";
import { collections } from "@/data/collections";

interface WatchContextType {
  configuration: WatchConfiguration;
  collections: WatchCollection[];
  setCase: (watchCase: WatchCase) => void;
  setBand: (band: WatchBand) => void;
  setCollection: (collection: WatchCollection) => void;
  totalPrice: number;
}

const WatchContext = createContext<WatchContextType | undefined>(undefined);

export function WatchProvider({ children }: { children: React.ReactNode }) {
  const [configuration, setConfiguration] = useState<WatchConfiguration>({
    case: null,
    band: null,
    collection: collections[0],
  });

  const setCase = (watchCase: WatchCase) => {
    setConfiguration((prev) => ({ ...prev, case: watchCase }));
  };

  const setBand = (band: WatchBand) => {
    setConfiguration((prev) => ({ ...prev, band: band }));
  };

  const setCollection = (collection: WatchCollection) => {
    setConfiguration((prev) => {
      console.log("Previous configuration:", prev); // Log previous state
      const updatedConfig = {
        case: null,    // Clear previous case
        band: null,    // Clear previous band
        collection,    // Update with new collection
      };
      console.log("Updated configuration:", updatedConfig); // Log new state
      return updatedConfig;
    });
  };
  

  const totalPrice = (configuration.case?.price || 0) + (configuration.band?.price || 0);

  return (
    <WatchContext.Provider
      value={{
        configuration,
        collections,
        setCase,
        setBand,
        setCollection,
        totalPrice,
      }}
    >
      {children}
    </WatchContext.Provider>
  );
}

export function useWatch() {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error("useWatch must be used within a WatchProvider");
  }
  return context;
}