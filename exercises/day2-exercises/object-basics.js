// Day 2 演習: オブジェクトの基本操作

console.log("=== Day 2 演習: オブジェクトの基本操作 ===");

// 演習1: オブジェクトの作成と操作
console.log("\n演習1: オブジェクトの作成と操作");
console.log("------------------------------");

// TODO: 以下のユーザー情報をオブジェクトで作成してください
// 名前: "田中太郎", 年齢: 25, 部署: "営業部"
const user = {
  // ここに実装
  name: "田中太郎",
};

console.log("ユーザー情報:", user);
console.log("名前:", user.name);
console.log("年齢:", user.age);

// 演習2: プロパティの追加・変更
console.log("\n演習2: プロパティの追加・変更");
console.log("--------------------------------");

// TODO: userオブジェクトに以下を追加してください
// - email: "tanaka@example.com"
// - active: true
// - 年齢を26に変更

console.log("更新後のユーザー情報:", user);

// 演習3: オブジェクトの比較
console.log("\n演習3: オブジェクトの比較");
console.log("------------------------");

const user1 = { name: "田中", age: 25 };
const user2 = { name: "田中", age: 25 };
const user3 = user1;

// TODO: 以下の比較結果を予想してから実行してください
console.log("user1 === user2:", user1 === user2); // 予想: ?
console.log("user1 === user3:", user1 === user3); // 予想: ?
console.log("設問3: なぜ比較結果がこうなったのか理由を説明してください");

// 演習4: 配列のコピー問題
console.log("\n演習4: 配列のコピー問題");
console.log("------------------------");

const originalArray = [1, 2, 3];
const copiedArray = originalArray; // これは参照のコピー

copiedArray.push(4);

// TODO: 以下の結果を予想してから実行してください
console.log("originalArray:", originalArray); // 予想: ?
console.log("copiedArray:", copiedArray);     // 予想: ?
console.log("設問4: なぜoriginalArrayも変更されてしまったのか理由を説明してください");

// TODO: 正しい配列のコピー方法を実装してください
const correctCopy = [...originalArray]; // スプレッド演算子を使用

console.log("正しいコピー:", correctCopy);
console.log("設問4-2: 正しいコピー方法を使った場合、元の配列は変更されませんか？");

// 演習5: ネストしたオブジェクト
console.log("\n演習5: ネストしたオブジェクト");
console.log("----------------------------");

const company = {
  name: "ABC商事",
  address: {
    prefecture: "東京都",
    city: "渋谷区"
  },
  employees: [
    { name: "田中", department: "営業" },
    { name: "佐藤", department: "開発" }
  ]
};

// TODO: 以下の情報を取得してください
// 1. 会社の都道府県
// 2. 最初の従業員の名前
// 3. 従業員数

console.log("都道府県:", /* ここに実装 */);
console.log("最初の従業員:", /* ここに実装 */);
console.log("従業員数:", /* ここに実装 */);

// 演習6: typeof演算子の練習
console.log("\n演習6: typeof演算子の練習");
console.log("----------------------------");

const values = [
  42,
  "hello",
  true,
  null,
  undefined,
  {},
  [],
  function() {}
];

// TODO: 各値の型を出力してください
values.forEach((value, index) => {
  console.log(`values[${index}]:`, value, "型:", typeof value);
});
console.log("設問6: nullの型が'object'になることに注意してください。なぜでしょうか？");

// 演習7: 配列の判定
console.log("\n演習7: 配列の判定");
console.log("------------------");

const testValues = [
  [1, 2, 3],
  { length: 3 },
  "string",
  null
];

testValues.forEach((value, index) => {
  console.log(`testValues[${index}]:`, value);
  console.log("  typeof:", typeof value);
  console.log("  Array.isArray:", Array.isArray(value));
  console.log("---");
});
console.log("設問7: typeofだけでは配列を正しく判定できません。Array.isArray()を使う理由を説明してください");

// 演習8: 実践問題 - ユーザーデータ処理
console.log("\n演習8: 実践問題 - ユーザーデータ処理");
console.log("------------------------------------");

const users = [
  { id: 1, name: "田中", age: 25, active: true },
  { id: 2, name: "佐藤", age: 30, active: false },
  { id: 3, name: "鈴木", age: 28, active: true }
];

// TODO: 以下の関数を実装してください

// 1. 特定のIDのユーザーを見つける関数
function findUserById(users, id) {
  // ここに実装
}

// 2. アクティブなユーザーのみを返す関数
function getActiveUsers(users) {
  // ここに実装
}

// 3. ユーザーの平均年齢を計算する関数
function calculateAverageAge(users) {
  // ここに実装
}

// テスト実行
console.log("ID=2のユーザー:", findUserById(users, 2));
console.log("アクティブユーザー:", getActiveUsers(users));
console.log("平均年齢:", calculateAverageAge(users));

console.log("\n=== Day 2 演習完了 ==="); 