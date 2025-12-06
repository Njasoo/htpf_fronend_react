"use client";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({
  pageList,
}: {
  pageList: { text: string; path: string }[];
}) {
  const [isDark, setIsDark] = useState(false);
  const [themeText, setThemeText] = useState("浅色模式");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      setThemeText("深色模式");
    } else {
      root.classList.remove("dark");
      setThemeText("浅色模式");
    }
  }, [isDark]); //当isDark发生改变的时候才会重新执行

  return (
    <nav className="flex py-1 px-4 border-b items-center justify-between whitespace-nowrap">
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-bold">Trend</span>
        <div className="flex items-center">
          {pageList.map((page) => (
            <Link
              key={page.text}
              href={page.path}
              className="px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-900 hover:cursor-pointer rounded-sm transition-colors"
            >
              {page.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center space-x-2">
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => setIsDark(checked)}
          className="hover:cursor-pointer"
        />
        <span>{themeText}</span>
      </div>
    </nav>
  );
}
