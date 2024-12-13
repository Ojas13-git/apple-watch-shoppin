"use client";

import { WatchBand } from "@/types/watch";
import { motion } from "framer-motion";

interface BandGridProps {
  bands: WatchBand[];
  selectedBandId: string | undefined;
  onBandSelect: (band: WatchBand) => void;
}

export function BandGrid({ bands, selectedBandId, onBandSelect }: BandGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {bands?.map((band: WatchBand) => (
        <motion.button
          key={band.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onBandSelect(band)}
          className={`p-4 rounded-lg border ${
            selectedBandId === band.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="aspect-square relative mb-2">
            <img
              src={band.image}
              alt={band.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-sm font-medium">{band.name}</div>
          <div className="text-sm text-gray-500">{band.type}</div>
          <div className="text-sm font-semibold">${band.price}</div>
        </motion.button>
      ))}
    </div>
  );
}