"use client";

import { useWatch } from "@/context/watch-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CollectionSelector() {
  const { collections, configuration, setCollection } = useWatch();

  return (
    <div className="w-full max-w-xs">
      <Select
        value={configuration.collection?.id}
        onValueChange={(value) => {
          const collection = collections.find((c) => c.id === value);
          if (collection) {
            console.log("Selected Collection:", collection); // Log selected collection
            setCollection(collection); // Set new collection
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a collection" />
        </SelectTrigger>
        <SelectContent>
          {collections.map((collection) => (
            <SelectItem key={collection.id} value={collection.id}>
              {collection.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
