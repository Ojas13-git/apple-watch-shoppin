"use client";

import { Button } from "@/components/ui/button";

interface BandTypeFilterProps {
  types: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function BandTypeFilter({ types, selectedType, onTypeChange }: BandTypeFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      <Button
        variant={selectedType === "all" ? "default" : "outline"}
        onClick={() => onTypeChange("all")}
        className="whitespace-nowrap"
      >
        All
      </Button>
      {types.map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "default" : "outline"}
          onClick={() => onTypeChange(type)}
          className="whitespace-nowrap"
        >
          {type}
        </Button>
      ))}
    </div>
  );
}