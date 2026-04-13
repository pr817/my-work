export type NewsCategory = "all" | "internal" | "obog";

export type NewsItem = {
  id: number;
  category: NewsCategory;
  date: string;
  title: string;
  tag: string;
  path: string;
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    category: "all",
    date: "2026.03.15",
    title: "令和8年度 春季大会のエントリー受付を開始しました",
    tag: "大会情報",
    path: "/news/1",
  },
  {
    id: 2,
    category: "internal",
    date: "2026.03.10",
    title: "【加盟校向け】新入生歓迎用ポスターのデータ配布について",
    tag: "加盟校へ",
    path: "/news/2",
  },
  {
    id: 3,
    category: "obog",
    date: "2026.03.01",
    title: "OB・OG総会および懇親会のご案内",
    tag: "OB・OG",
    path: "/news/3",
  },
  {
    id: 4,
    category: "all",
    date: "2026.02.20",
    title: "関東学生少林寺連盟 新ウェブサイトをプレオープンしました",
    tag: "お知らせ",
    path: "/news/4",
  },
  {
    id: 5,
    category: "internal",
    date: "2026.02.15",
    title: "第2回 運営委員会の開催場所変更について",
    tag: "加盟校へ",
    path: "/news/5",
  },
  {
    id: 6,
    category: "all",
    date: "2026.01.10",
    title: "令和7年度 全日本学生大会の結果報告",
    tag: "大会情報",
    path: "/news/6",
  },
];
