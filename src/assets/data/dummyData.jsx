export const headerData = {

  title: "ダッシュボード",

  dateRange: "2004年2月1日 - 2004年2月5日",

};



export const statData = [

  {

    title: "ユーザー登録数計",

    number:"450",

    value: "人",

    subValue: "400人 (前月時点の登録)",

    change: "12.5%",

    positive: true,

    date: "2004年2月1日 2004年2月5日",

  },

  {

    title: "アクティブユーザー",

    number:"50",

    value: "人 / 今日",

    subValue: "12人 (前月の今日時点)",

    change: "316.6%",

    positive: true,

    date: "2074年1月1日 2024年1月1日",

  },

  {

    title: "定着率",

    number:"10",

    value: " % / 前月",

    subValue: "12% (前月)",

    change: "-16.6%",

    positive: false,

    date: "2024年2月1日 2024-2月5日",

  },

  {

    title: "平均来店回数",

    number:"4",

    value: "回 / 今日",

    subValue: "2回 (前月の今日時点)",

    change: "100%",

    positive: true,

    date: "2024年2月1日-2024年2月5日",

  },

  {

    title: "継続利用回数",

    number:"125",

    value: "回 / 今日",

    subValue: "85回 (前月の今日時点)",

    change: "47%",

    positive: true,

    date: "2024年2月1日 2024年2月5日",

  },

  {

    title: "アカウント削除数",

    number:"10",

    value: "人 / 今日",

    subValue: "8人 (前月の今日時点)",

    change: "25%",

    positive: true,

    date: "2024年2月1日 2024年2月5日",

  },

];



export const allData = [
  {
    month: 1,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [50, 100, 150, 200, 250] },
      { label: "女性", data: [30, 70, 110, 150, 190] },
      { label: "その他", data: [10, 20, 30, 40, 50] },
      { label: "回答なし", data: [5, 10, 15, 20, 25] },
    ],
  },
  {
    month: 2,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [60, 110, 170, 220, 270] },
      { label: "女性", data: [40, 80, 130, 180, 230] },
      { label: "その他", data: [15, 25, 35, 45, 55] },
      { label: "回答なし", data: [10, 15, 20, 25, 30] },
    ],
  },
  {
    month: 3,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [70, 120, 190, 240, 300] },
      { label: "女性", data: [50, 100, 160, 210, 270] },
      { label: "その他", data: [20, 35, 50, 65, 80] },
      { label: "回答なし", data: [12, 18, 25, 30, 38] },
    ],
  },
  {
    month: 4,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [80, 130, 200, 250, 310] },
      { label: "女性", data: [60, 110, 170, 220, 280] },
      { label: "その他", data: [25, 40, 55, 70, 85] },
      { label: "回答なし", data: [15, 20, 28, 35, 42] },
    ],
  },
  {
    month: 5,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [90, 140, 210, 260, 320] },
      { label: "女性", data: [70, 120, 180, 230, 290] },
      { label: "その他", data: [30, 45, 60, 75, 90] },
      { label: "回答なし", data: [18, 25, 35, 45, 55] },
    ],
  },
  {
    month: 6,
    year: 2024,
    labels: ["10代", "20代", "30代", "40代", "50代"],
    datasets: [
      { label: "男性", data: [100, 150, 220, 270, 330] },
      { label: "女性", data: [80, 130, 190, 240, 300] },
      { label: "その他", data: [35, 50, 65, 80, 95] },
      { label: "回答なし", data: [20, 30, 40, 50, 60] },
    ],
  },
  // Continue adding more months as needed...
];



export const dummyData = Array.from({ length: 500 }, (_, index) => ({
  no: index + 1,
  nickname: `ニックネーム ${index + 1}`,
  email: `dummy${index + 1}@example.com`,
  birth: `199${index % 10}年 ${index % 12 + 1}月`,
  gender: index % 2 === 0 ? "男性" : "女性",
  location: `都道府県 ${index % 47 + 1}`,
  registrationDate: `2024年01月${index % 31 + 1}日`,
}));

