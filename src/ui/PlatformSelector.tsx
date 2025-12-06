"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Source } from "@/lib/definition";
import { useEffect, useState } from "react";
import { usePlatformStore } from "@/lib/stores/platformStore";
import { zh2en } from "@/lib/definition";

export default function PlatformSelector() {
  const [platformList, setPlatformList] = useState<Source[]>([]);
  const platformStore = usePlatformStore();

  const changePlatformHandle = (value: string) => {
    platformStore.setCurrentPlatform_en(value);
    for (const item of zh2en) {
      if (item.english == value) {
        platformStore.setCurrentPlatform_zh(item.chinese);
        break;
      }
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/source/`)
      .then((res: any) => res.json())
      .then((data: any) => {
        setPlatformList(data);
      })
      .catch((err: any) => console.error(err));
  }, []);

  return (
    <Select
      value={platformStore.currentPlatform_en}
      onValueChange={changePlatformHandle}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择平台" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>平台</SelectLabel>
          {platformList.map((platform) => (
            <SelectItem key={platform.id} value={platform.value}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
