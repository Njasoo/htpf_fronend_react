import { persist } from "zustand/middleware";
import { create } from "zustand";
import { PageNumberStore } from "../definition";

export const usePageNumberStore = create(
  persist<PageNumberStore>(
    (set) => ({
      pageNumber: 1,

      setPageNumber: (newPageNumber: number) =>
        set({ pageNumber: newPageNumber }),
    }),
    {
      name: "pageNumber-storage",
    }
  )
);
