"use client";

import { CaseSelection } from "@/components/case-selection";
import { BandSelection } from "@/components/band-selection";
import { CollectionSelector } from "@/components/collection-selector";
import { WatchPreview } from "@/components/watch-preview";
import { PriceDisplay } from "@/components/price-display";
import { ShareButton } from "@/components/share-button";
import { useRef } from "react";

export function WatchStudio() {
  // Ref for the WatchPreview component
  const watchPreviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-screen-lg mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <CollectionSelector />
          <ShareButton watchPreviewRef={watchPreviewRef} />
        </div>
        
        {/* Watch Preview and Price Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Watch Preview */}
          <div
            className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md"
            ref={watchPreviewRef} // Attach ref here
          >
            <WatchPreview />
          </div>

          {/* Price Display */}
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
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
