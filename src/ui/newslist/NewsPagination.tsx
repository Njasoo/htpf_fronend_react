"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePlatformStore } from "@/lib/stores/platformStore";
import { useEffect, useState } from "react";
import { PageSize } from "@/lib/definition";
import { usePageNumberStore } from "@/lib/stores/pageNumberStore";
import clsx from "clsx";

export default function NewsPagination() {
  const platformStore = usePlatformStore();
  const [totalPages, setTotalPages] = useState<number>(0);
  const pageNumber = usePageNumberStore((state) => state.pageNumber);
  const setPageNumber = usePageNumberStore((state) => state.setPageNumber);
  const currentPlatform_en = usePlatformStore((s) => s.currentPlatform_en);
  const currentPlatform_zh = usePlatformStore((s) => s.currentPlatform_zh);
  const currentCategories = usePlatformStore((s) => s.currentCategories);

  const fetchNews = () => {
    const params = new URLSearchParams();
    params.append("source", platformStore.currentPlatform_en);
    for (const item of platformStore.currentCategories) {
      if (item.checked) {
        params.append("categories", item.category);
      }
    }
    console.log("pageNumber:", pageNumber);
    params.append("page", pageNumber.toString());
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/hot/?${params.toString()}`)
      .then((res: any) => res.json())
      .then((data: any) => {
        const countPages = Math.ceil(data.count / PageSize);
        console.log("countPages:", countPages);
        setTotalPages(countPages);
      })
      .catch((err: any) => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, [currentCategories, currentPlatform_zh, currentPlatform_en]);

  const pages: number[] = [...Array(totalPages)].map((_, i) => i + 1); //第二个参数是index,这时数组里面的元素还全是空的

  return (
    <Pagination className="mt-2">
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious
            onClick={() => {
              if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}
          />
        </PaginationItem>
        {pages.map((item) => (
          <PaginationItem
            key={item}
            className={clsx("hover:cursor-pointer", {
              "bg-gray-200 rounded-md": item === pageNumber,
            })}
          >
            <PaginationLink onClick={(e) => setPageNumber(item)}>
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext
            onClick={() => {
              if (pageNumber < totalPages) setPageNumber(pageNumber + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
