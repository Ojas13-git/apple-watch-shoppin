"use client";

import { useWatch } from "@/context/watch-context";
import { motion } from "framer-motion";

export function PriceDisplay() {
  const { totalPrice, configuration } = useWatch();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <motion.div
        key={totalPrice}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold"
      >
        ${totalPrice}
      </motion.div>
      <div className="text-sm text-gray-500 mt-1">
        {configuration.case && (
          <div>{configuration.case.name} - ${configuration.case.price}</div>
        )}
        {configuration.band && (
          <div>{configuration.band.name} - ${configuration.band.price}</div>
        )}
      </div>
    </div>
  );
}