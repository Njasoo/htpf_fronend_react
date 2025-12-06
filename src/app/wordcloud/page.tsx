"use client";

import { usePlatformStore } from "@/lib/stores/platformStore";
import { useEffect, useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const currentPlatform_en = usePlatformStore((s) => s.currentPlatform_en);
  useEffect(() => {
    const params = new URLSearchParams();
    params.append("source", currentPlatform_en);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/wordcloud/?${params.toString()}`)
      .then((res: any) => res.json())
      .then((data: any) => {
        setUrl(data.url);
      })
      .catch((err: any) => console.error(err));
  }, [currentPlatform_en]);

  return (
    <div className="w-[95%] mx-auto container flex justify-center items-center border mt-2 p-4">
      <img src={url} alt="" width="600px" />
    </div>
  );
}
