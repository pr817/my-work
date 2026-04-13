// src/data/newsData.ts

// 型（データのルール）を定義してexport（書き出し）する
export type NewsCategory = "all" | "internal" | "obog";

export type NewsItem = {
  id: number;
  category: NewsCategory;
  date: string;
  tag: string;
  title: string;
  path: string;
};

// 実際のデータを定義してexportする
export const newsData: NewsItem[] = [
  {
    id: 1,
    category: "internal",
    date: "2026.04.01",
    tag: "お知らせ",
    title: "令和8年度 春季合同合宿のスケジュールについて",
    path: "/news/1",
  },
  {
    id: 2,
    category: "all",
    date: "2026.03.15",
    tag: "大会結果",
    title: "第60回 全日本学生少林寺拳法大会 結果報告",
    path: "/news/2",
  },
  {
    id: 3,
    category: "obog",
    date: "2026.02.28",
    tag: "OB・OG",
    title: "OB・OG総会および懇親会のお知らせ",
    path: "/news/3",
  },
];
