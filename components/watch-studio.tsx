"use client";

import { CaseSelection } from "@/components/case-selection";
import { BandSelection } from "@/components/band-selection";
import { CollectionSelector } from "@/components/collection-selector";
import { WatchPreview } from "@/components/watch-preview";
import { PriceDisplay } from "@/components/price-display";
import { ShareButton } from "@/components/share-button";

export function WatchStudio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <CollectionSelector />
          <WatchPreview />
          <PriceDisplay />
          <ShareButton />
        </div>
        <div className="space-y-8">
          <CaseSelection />
          <BandSelection />
        </div>
      </div>
    </div>
  );
}