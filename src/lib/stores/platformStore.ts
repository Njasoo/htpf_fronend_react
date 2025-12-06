import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Category, PlatformStore } from "../definition";

export const usePlatformStore = create(
  persist<PlatformStore>(
    (set) => ({
      currentPlatform_en: "weibo",
      currentPlatform_zh: "微博",
      currentCategories: [
        { category: "文化", text: "文化", checked: true },
        { category: "国际新闻", text: "国际新闻", checked: true },
        { category: "财经新闻", text: "财经新闻", checked: true },
        { category: "体育", text: "体育", checked: true },
        { category: "娱乐", text: "娱乐", checked: true },
        { category: "港澳政治", text: "港澳", checked: true },
        { category: "中国大陆政治", text: "中国大陆", checked: true },
      ],

      setCurrentPlatform_en: (newPlatform: string) =>
        set({ currentPlatform_en: newPlatform }),

      setCurrentPlatform_zh: (newPlatform: string) =>
        set({ currentPlatform_zh: newPlatform }),

      toggleCategory: (categoryName: string) =>
        set((state: PlatformStore) => ({
          currentCategories: state.currentCategories.map((c: Category) =>
            c.text === categoryName ? { ...c, checked: !c.checked } : c
          ),
        })),
    }),
    {
      name: "platform-storage",
    }
  )
);
