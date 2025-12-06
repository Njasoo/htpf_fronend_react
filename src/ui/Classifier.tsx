"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePlatformStore } from "@/lib/stores/platformStore";

export default function Classifier() {
  const platformStore = usePlatformStore();
  return (
    <div className="w-[95%] mx-auto flex space-x-4 mt-2 p-4 border overflow-x-auto whitespace-nowrap container">
      {platformStore.currentCategories.map((item, index) => (
        <div className="flex space-x-1" key={`${item}-${index}`}>
          <Label htmlFor={`checkbox${index}`}>{item.text}</Label>
          <Checkbox
            id={`checkbox${index}`}
            checked={item.checked}
            onCheckedChange={() => platformStore.toggleCategory(item.text)}
          />
        </div>
      ))}
    </div>
  );
}
