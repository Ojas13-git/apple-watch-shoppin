"use client";

import { useWatch } from "@/context/watch-context";
import { Button } from "@/components/ui/button";

export function SizeSelector() {
  const { configuration, setCase } = useWatch();
  const sizes = ["42mm", "46mm"];

  const handleSizeChange = (size: string) => {
    const currentCase = configuration.case;
    const newCase = configuration.collection?.cases.find(
      (c) => c.size === size && c.material === currentCase?.material
    );
    if (newCase) {
      setCase(newCase);
    }
  };

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={configuration.case?.size === size ? "default" : "outline"}
          onClick={() => handleSizeChange(size)}
          className="flex-1"
        >
          {size}
        </Button>
      ))}
    </div>
  );
}