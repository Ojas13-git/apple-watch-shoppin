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
  const initialCollection = collections[0];
  const initialCase = initialCollection.cases[0] || null;
  const initialBand = initialCollection.bands[0] || null;

  const [configuration, setConfiguration] = useState<WatchConfiguration>({
    case: initialCase,
    band: initialBand,
    collection: initialCollection,
  });

  const setCase = (watchCase: WatchCase) => {
    setConfiguration((prev) => ({ ...prev, case: watchCase }));
  };

  const setBand = (band: WatchBand) => {
    setConfiguration((prev) => ({ ...prev, band: band }));
  };

  const setCollection = (collection: WatchCollection) => {
    const initialCase = collection.cases[0] || null;
    const initialBand = collection.bands[0] || null;
    setConfiguration(() => {
      const updatedConfig = {
        case: initialCase,    // Set initial case
        band: initialBand,    // Set initial band
        collection,           // Update with new collection
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
