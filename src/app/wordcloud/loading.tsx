import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-[95%] mx-auto container flex justify-center items-center border mt-2 p-4">
      <Skeleton className="w-[600px] h-[600px]" />
    </div>
  );
}
