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
    id: 2,
    category: "all",
    date: "2026.05.04",
    tag: "大会",
    title: "関東学生大会の簡易的なタイムスケジュールの掲載",
    path: "/news/2",
  },
  {
    id: 1,
    category: "all",
    date: "2026.05.03",
    tag: "お知らせ",
    title: "関東学生少林寺連盟ウェブサイトを公開しました",
    path: "/news/1",
  },
  {
    id: 100,
    category: "all",
    date: "2026.05.02",
    tag: "お問い合わせ",
    title: "ご意見・ご要望をお聞かせください（お問い合わせページ公開）",
    path: "components/contactspace",
  },
];
