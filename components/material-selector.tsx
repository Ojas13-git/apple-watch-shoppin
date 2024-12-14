"use client";

import { useWatch } from "@/context/watch-context";
import { Button } from "@/components/ui/button";

export function MaterialSelector() {
  const { configuration, setCase } = useWatch();
  const materials = ["Aluminum", "Titanium"];

  const handleMaterialChange = (material: string) => {
    const currentCase = configuration.case;
    const newCase = configuration.collection?.cases.find(
      (c) => c?.material === material && c?.size === currentCase?.size
    );
    if (newCase) {
      setCase(newCase);
    }
  };

  return (
    <div className="flex gap-2">
      {materials.map((material) => (
        <Button
          key={material}
          variant={configuration.case?.material === material ? "default" : "outline"}
          onClick={() => handleMaterialChange(material)}
          className="flex-1"
        >
          {material}
        </Button>
      ))}
    </div>
  );
}