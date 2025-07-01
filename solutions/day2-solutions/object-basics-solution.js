// Day 2 演習解答: オブジェクトの基本操作

console.log("=== Day 2 演習解答: オブジェクトの基本操作 ===");

// 設問の解答
console.log("\n設問の解答");
console.log("----------");

console.log("設問3: user1 === user2はfalse、user1 === user3はtrue");
console.log("理由: オブジェクトは参照で比較されます。user1とuser2は内容が同じでも異なるオブジェクト、user3はuser1と同じ参照です");

console.log("\n設問4: originalArrayも[1, 2, 3, 4]に変わってしまいます");
console.log("理由: copiedArray = originalArrayは参照のコピーのため、同じ配列を指しています");

console.log("\n設問4-2: 正しいコピー方法を使った場合、元の配列は変更されません");
console.log("理由: スプレッド演算子[...array]は新しい配列を作成するためです");

console.log("\n設問6: nullの型が'object'になるのはJavaScriptの歴史的な仕様です");
console.log("理由: 初期の実装での不具合が、後方互換性のために残されています");

console.log("\n設問7: typeofだけでは配列もオブジェクトも'object'になってしまいます");
console.log("理由: 配列は内部的にはオブジェクトなので、Array.isArray()で正確に判定する必要があります");

// 演習1: オブジェクトの作成と操作
console.log("\n演習1: オブジェクトの作成と操作");
console.log("------------------------------");

const user = {
  name: "田中太郎",
  age: 25,
  department: "営業部"
};

console.log("ユーザー情報:", user);
console.log("名前:", user.name);
console.log("年齢:", user.age);

// 演習2: プロパティの追加・変更
console.log("\n演習2: プロパティの追加・変更");
console.log("--------------------------------");

user.email = "tanaka@example.com";
user.active = true;
user.age = 26;

console.log("更新後のユーザー情報:", user);

// 演習3: オブジェクトの比較
console.log("\n演習3: オブジェクトの比較");
console.log("------------------------");

const user1 = { name: "田中", age: 25 };
const user2 = { name: "田中", age: 25 };
const user3 = user1;

console.log("user1 === user2:", user1 === user2); // false (異なる参照)
console.log("user1 === user3:", user1 === user3); // true (同じ参照)
console.log("設問3: なぜuser1 === user2はfalseで、user1 === user3はtrueなのか理由を説明してください");

// 演習4: 配列のコピー問題
console.log("\n演習4: 配列のコピー問題");
console.log("------------------------");

const originalArray = [1, 2, 3];
const copiedArray = originalArray; // これは参照のコピー

copiedArray.push(4);

console.log("originalArray:", originalArray); // [1, 2, 3, 4] 元も変わってしまう
console.log("copiedArray:", copiedArray);     // [1, 2, 3, 4]
console.log("設問4: なぜoriginalArrayも変更されてしまったのか理由を説明してください");

// 正しい配列のコピー方法
const correctCopy = [...originalArray]; // スプレッド演算子を使用
// または const correctCopy = originalArray.slice();

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

console.log("都道府県:", company.address.prefecture);
console.log("最初の従業員:", company.employees[0].name);
console.log("従業員数:", company.employees.length);

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

// 1. 特定のIDのユーザーを見つける関数
function findUserById(users, id) {
  return users.find(user => user.id === id);
}

// 2. アクティブなユーザーのみを返す関数
function getActiveUsers(users) {
  return users.filter(user => user.active);
}

// 3. ユーザーの平均年齢を計算する関数
function calculateAverageAge(users) {
  if (users.length === 0) return 0;
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

// テスト実行
console.log("ID=2のユーザー:", findUserById(users, 2));
console.log("アクティブユーザー:", getActiveUsers(users));
console.log("平均年齢:", calculateAverageAge(users));

console.log("\n=== Day 2 演習解答完了 ==="); 