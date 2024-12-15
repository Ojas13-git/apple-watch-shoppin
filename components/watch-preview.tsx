"use client";

import { useWatch } from "@/context/watch-context";
import { useFilteredBands } from "@/hooks/use-filtered-bands";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export function WatchPreview() {
  const { configuration, setBand } = useWatch();
  const [currentBandIndex, setCurrentBandIndex] = useState(0);
  const { filteredBands } = useFilteredBands(configuration);

  const handleNextBand = () => {
    if (filteredBands) {
      const nextIndex = (currentBandIndex + 1) % filteredBands.length;
      const newBand = filteredBands[nextIndex];
      setBand(newBand);
      setCurrentBandIndex(nextIndex);
    }
  };

  const handlePreviousBand = () => {
    if (filteredBands) {
      const prevIndex = (currentBandIndex - 1 + filteredBands.length) % filteredBands.length;
      const newBand = filteredBands[prevIndex];
      setBand(newBand);
      setCurrentBandIndex(prevIndex);
    }
  };

  return (
    <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {configuration.band && (
          <motion.div
            key={`band-${configuration.band.id}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="absolute inset-0"
          >
            <img
              src={configuration.band.image}
              alt={configuration.band.name}
              className="object-contain w-full h-full"
            />
          </motion.div>
        )}
        {configuration.case && (
          <motion.div
            key={`case-${configuration.case.id}`}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 1 }}
            className="absolute inset-0"
          >
            <img
              src={configuration.case.image}
              alt={configuration.case.name}
              className="object-contain w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={handlePreviousBand} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#9664;
      </button>
      <button 
        onClick={handleNextBand} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#9654;
      </button>
    </div>
  );
}
