"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";
import { usePlatformStore } from "@/lib/stores/platformStore";

function PlatformSearcher() {
  const [searchText, setSearchText] = useState("");
  const currentPlatform_en = usePlatformStore((s) => s.currentPlatform_en);
  const searchHandle = () => {
    if (currentPlatform_en == "tieba") {
      window.open(
        `https://tieba.baidu.com/f?ie=utf-8&kw=${searchText}&fr=search`,
        "_blank"
      );
    } else if (currentPlatform_en == "weibo") {
      window.open(`https://s.weibo.com/weibo?q=${searchText}`, "_blank");
    } else if (currentPlatform_en == "bilibili") {
      window.open(
        `https://search.bilibili.com/all?keyword=${searchText}`,
        "_blank"
      );
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="在对应平台进行搜索"
        className="w-[180px] rounded-r-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        className="rounded-l-none hover:cursor-pointer"
        onClick={searchHandle}
      >
        确认
      </Button>
    </div>
  );
}

export default function Platform() {
  return (
    <div className="w-[95%] mx-auto mt-2 border p-4 flex flex-col space-y-3">
      <div className="flex items-center space-x-2">
        <span>搜索</span>
        <PlatformSearcher />
      </div>
      <div className="flex items-center space-x-2">
        <span>平台</span>
        <PlatformSelector />
      </div>
    </div>
  );
}
