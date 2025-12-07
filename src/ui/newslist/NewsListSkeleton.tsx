import { PageSize } from "@/lib/definition";
import NewsItemSkeleton from "./NewsItemSkeleton";
import { NewsItemProps } from "@/lib/definition";

export default function NewsListSkeleton() {
  // const tempNewsItem: NewsItemProps = {
  //   title: "",
  //   source: "",
  //   rank: 0,
  //   url: "",
  //   category: "",
  //   crawL_time: "",
  //   index: 0,
  //   pageNumber: 0,
  // };
  const news = [...Array(PageSize)].map((_, i) => {
    return i + 1;
  });
  return (
    <div className="w-[95%] mx-auto container">
      {news.map((item) => (
        <NewsItemSkeleton />
      ))}
    </div>
  );
}
