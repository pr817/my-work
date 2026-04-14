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
    category: "all",
    date: "2026.05.03",
    tag: "お知らせ",
    title: "関東学生少林寺連盟ウェブサイトを公開しました",
    path: "/news/1",
  },
  {
    id: 2,
    category: "all",
    date: "2026.05.02",
    tag: "お問い合わせ",
    title: "ご意見・ご要望をお聞かせください（お問い合わせページ公開）",
    path: "/contactspace",
  },
  {
    id: 3,
    category: "all",
    date: "2026.05.01",
    tag: "作成者より",
    title: "ウェブサイト制作にあたってのメッセージ",
    path: "/news/3",
  },
  {
    id: 4,
    category: "internal",
    date: "2026.04.30",
    tag: "活動報告",
    title: "令和8年度 春季練習会の実施について",
    path: "/news/4",
  },
  {
    id: 5,
    category: "obog",
    date: "2026.04.28",
    tag: "OB・OG",
    title: "OB・OG交流会の日程が決定しました",
    path: "/news/5",
  },
  {
    id: 6,
    category: "all",
    date: "2026.04.25",
    tag: "今後の予定",
    title: "夏期合宿の計画について（準備中）",
    path: "/news/6",
  },
];
