import Classifier from "@/ui/Classifier";
import NewsList from "@/ui/newslist/NewsList";
import NewsPagination from "@/ui/newslist/NewsPagination";

export default function Page() {
  return (
    <div>
      <Classifier />
      <NewsList />
      <NewsPagination />
    </div>
  );
}
