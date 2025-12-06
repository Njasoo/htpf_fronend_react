export type Source = {
  id: number;
  name: string;
  value: string;
};

export type Category = {
  category: string;
  text: string;
  checked: boolean;
};

export type PlatformStore = {
  currentPlatform_en: string;
  currentPlatform_zh: string;
  currentCategories: Category[];
  setCurrentPlatform_en: (value: string) => void;
  setCurrentPlatform_zh: (value: string) => void;
  toggleCategory: (categoryName: string) => void;
};

export type NewsItemProps = {
  title: string;
  source: string;
  rank: number;
  url: string;
  category: string;
  crawL_time: string;
  index: number;
  pageNumber: number;
};

export type HotItem = {
  id: number;
  title: string;
  source: string;
  rank: number;
  url: string;
  category: string;
  crawL_time: string;
};

export type ZhEnPair = {
  chinese: string;
  english: string;
};

export type PageNumberStore = {
  pageNumber: number;
  setPageNumber: (newPageNumber: number) => void;
};

export const zh2en: ZhEnPair[] = [
  { chinese: "微博", english: "weibo" },
  { chinese: "贴吧", english: "tieba" },
  { chinese: "哔哩哔哩", english: "bilibili" },
];

export const PageSize = 10;
