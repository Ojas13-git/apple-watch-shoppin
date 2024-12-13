"use client";

import { WatchBand, WatchConfiguration } from "@/types/watch";

export function useFilteredBands(
  configuration: WatchConfiguration,
  selectedType: string = "all"
) {
  const filteredBands = configuration.collection?.bands.filter((band) => {
    const sizeMatch = configuration.case
      ? band.name.toLowerCase().includes(configuration.case.size.toLowerCase())
      : true;
    const typeMatch = selectedType === "all" || band.type === selectedType;
    return sizeMatch && typeMatch;
  });

  const bandTypes = Array.from(
    new Set(configuration.collection?.bands.map((band) => band.type))
  );

  return {
    filteredBands,
    bandTypes,
  };
}