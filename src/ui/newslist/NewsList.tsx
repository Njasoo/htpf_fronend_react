"use client";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { usePlatformStore } from "@/lib/stores/platformStore";
import { HotItem } from "@/lib/definition";
import { useDebouncedCallback } from "use-debounce";
import { usePageNumberStore } from "@/lib/stores/pageNumberStore";

export default function NewsList() {
  // const platformStore = usePlatformStore();
  const currentPlatform_en = usePlatformStore((s) => s.currentPlatform_en);
  const currentPlatform_zh = usePlatformStore((s) => s.currentPlatform_zh);
  const currentCategories = usePlatformStore((s) => s.currentCategories);
  const [newsList, setNewsList] = useState<HotItem[]>([]);
  const pageNumber = usePageNumberStore((s) => s.pageNumber);
  const setPageNumber = usePageNumberStore((s) => s.setPageNumber);

  const fetchNews = useDebouncedCallback(() => {
    let params = new URLSearchParams();
    params.append("source", currentPlatform_en);
    for (const item of currentCategories) {
      if (item.checked) {
        params.append("categories", item.category);
      }
    }
    params.append("page", pageNumber.toString());
    console.log(
      `${process.env.NEXT_PUBLIC_API_BASE}/hot/?${params.toString()}`
    );
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/hot/?${params.toString()}`)
      .then((res: any) => res.json())
      .then((data: any) => {
        console.log("data:", data);
        setNewsList(data.results);
      })
      .catch((err: any) => console.error(err));
  }, 300);

  useEffect(() => {
    setPageNumber(1);
    fetchNews();
  }, [currentCategories, currentPlatform_en, currentPlatform_zh]);

  useEffect(() => {
    fetchNews();
  }, [pageNumber]); //页码变的时候就不要重置页码了

  return (
    <div className="w-[95%] mx-auto container">
      {newsList.map((news, index) => (
        <NewsItem
          key={news.id}
          {...news}
          index={index}
          pageNumber={pageNumber}
        />
      ))}
    </div>
  );
}
