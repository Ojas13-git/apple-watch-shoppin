"use client";

import { useWatch } from "@/context/watch-context";
import { WatchCase } from "@/types/watch";
import { motion } from "framer-motion";
import { SizeSelector } from "./size-selector";
import { MaterialSelector } from "./material-selector";

export function CaseSelection() {
  const { configuration, setCase } = useWatch();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Choose your case</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <SizeSelector />
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Material</h3>
          <MaterialSelector />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {configuration.collection?.cases.map((watchCase: WatchCase) => (
          <motion.button
            key={watchCase.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCase(watchCase)}
            className={`p-4 rounded-lg border ${
              configuration.case?.id === watchCase.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="aspect-square relative mb-2">
              <img
                src={watchCase.image}
                alt={watchCase.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-sm font-medium">{watchCase.name}</div>
            <div className="text-sm text-gray-500">{watchCase.material}</div>
            <div className="text-sm font-semibold">${watchCase.price}</div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}