"use client";

import { CaseSelection } from "@/components/case-selection";
import { BandSelection } from "@/components/band-selection";
import { CollectionSelector } from "@/components/collection-selector";
import { WatchPreview } from "@/components/watch-preview";
import { PriceDisplay } from "@/components/price-display";
import { ShareButton } from "@/components/share-button";

export function WatchStudio() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-screen-lg mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <CollectionSelector />
          <ShareButton />
        </div>
        
        {/* Watch Preview and Price Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <WatchPreview />
          </div>
          <div className="w-full md:w-1/3">
            <PriceDisplay />
          </div>
        </div>

        {/* Case and Band Selection Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <CaseSelection />
          </div>
          <div className="space-y-4">
            <BandSelection />
          </div>
        </div>
        
      </div>
    </div>
  );
}
