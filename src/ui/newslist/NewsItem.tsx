import { NewsItemProps } from "@/lib/definition";
import { PageSize } from "@/lib/definition";

export default function NewsItem(props: NewsItemProps) {
  return (
    <li
      onClick={() => {
        window.open(props.url, "_blank");
      }}
      className="border border-t-0 p-4 space-x-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors list-none"
    >
      <span>{props.index + 1 + (props.pageNumber - 1) * PageSize}</span>
      <span>{props.title}</span>
    </li>
  );
}
