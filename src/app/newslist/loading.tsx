import Classifier from "@/ui/Classifier";
import NewsListSkeleton from "@/ui/newslist/NewsListSkeleton";
import NewsPagination from "@/ui/newslist/NewsPagination";

export default function Loading() {
  return (
    <div>
      <Classifier />
      <NewsListSkeleton />
      <NewsPagination />
    </div>
  );
}
