"use client";

import { useWatch } from "@/context/watch-context";
import { motion, AnimatePresence } from "framer-motion";

export function WatchPreview() {
  const { configuration } = useWatch();

  return (
    <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {configuration.band && (
          <motion.div
            key={`band-${configuration.band.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
    </div>
  );
}
