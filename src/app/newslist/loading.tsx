import Classifier from "@/ui/Classifier";
import NewsList from "@/ui/newslist/NewsList";
import NewsPagination from "@/ui/newslist/NewsPagination";

export default function Loading() {
  return (
    <div>
      <Classifier />
      <NewsList />
      <NewsPagination />
    </div>
  );
}
