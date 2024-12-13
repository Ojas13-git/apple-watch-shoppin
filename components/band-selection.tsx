"use client";

import { useWatch } from "@/context/watch-context";
import { useState } from "react";
import { useFilteredBands } from "@/hooks/use-filtered-bands";
import { BandTypeFilter } from "./band-type-filter";
import { BandGrid } from "./band-grid";

export function BandSelection() {
  const { configuration, setBand } = useWatch();
  const [selectedType, setSelectedType] = useState<string>("all");
  const { filteredBands, bandTypes } = useFilteredBands(configuration, selectedType);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Choose your band</h2>
      
      <BandTypeFilter
        types={bandTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <BandGrid
        bands={filteredBands || []}
        selectedBandId={configuration.band?.id}
        onBandSelect={setBand}
      />
    </section>
  );
}