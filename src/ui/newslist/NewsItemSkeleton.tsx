import { Skeleton } from "@/components/ui/skeleton";

export default function NewsItemSkeleton() {
  return (
    <li className="border border-t-0 p-4 space-x-2 transition-colors list-none flex">
      <Skeleton className="h-6 rounded-full w-6" />
      <Skeleton className="h-6 w-full" />
    </li>
  );
}
