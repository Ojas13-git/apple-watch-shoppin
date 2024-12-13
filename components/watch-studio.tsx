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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <CollectionSelector />
        </div>
        
        <div className="mb-12">
          <WatchPreview />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <CaseSelection />
            <PriceDisplay />
            <ShareButton />
          </div>
          <div>
            <BandSelection />
          </div>
        </div>
      </div>
    </div>
  );
}