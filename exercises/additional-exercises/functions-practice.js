// Day 2.5 演習: 関数の基礎

console.log("=== Day 2.5 演習: 関数の基礎 ===");

// 演習1: 基本的な関数作成
console.log("\n演習1: 基本的な関数作成");
console.log("------------------------");

// TODO: 2つの数値を受け取って合計を返す関数 add を作成してください
// function add(a, b) {
//   // ここに実装
// }

// テスト
// console.log(add(3, 5)); // 8
// console.log(add(10, -2)); // 8

// 演習2: デフォルト引数を使った関数
console.log("\n演習2: デフォルト引数を使った関数");
console.log("------------------------------");

// TODO: 挨拶メッセージを返す関数 greet を作成してください
// 引数: name（デフォルト値: "ゲスト"）
// 戻り値: "こんにちは、[name]さん！"
// function greet(name = "ゲスト") {
//   // ここに実装
// }

// テスト
// console.log(greet()); // "こんにちは、ゲストさん！"
// console.log(greet("田中")); // "こんにちは、田中さん！"

// 演習3: 複数の引数を持つ関数
console.log("\n演習3: 複数の引数を持つ関数");
console.log("----------------------------");

// TODO: 商品の情報を受け取って説明文を返す関数 createProductDescription を作成してください
// 引数: name, price, category
// 戻り値: "[category]の[name]は[price]円です。"
// function createProductDescription(name, price, category) {
//   // ここに実装
// }

// テスト
// console.log(createProductDescription("iPhone", 100000, "スマートフォン"));
// // "スマートフォンのiPhoneは100000円です。"

// 演習4: 条件分岐を含む関数
console.log("\n演習4: 条件分岐を含む関数");
console.log("------------------------");

// TODO: 年齢を受け取って年齢層を返す関数 getAgeGroup を作成してください
// 0-12: "子供", 13-19: "ティーン", 20-64: "大人", 65以上: "シニア"
// function getAgeGroup(age) {
//   // ここに実装
// }

// テスト
// console.log(getAgeGroup(10)); // "子供"
// console.log(getAgeGroup(16)); // "ティーン"
// console.log(getAgeGroup(30)); // "大人"
// console.log(getAgeGroup(70)); // "シニア"

// 演習5: 配列を扱う関数
console.log("\n演習5: 配列を扱う関数");
console.log("--------------------");

// TODO: 数値の配列を受け取って平均値を返す関数 calculateAverage を作成してください
// 配列が空の場合は0を返す
// function calculateAverage(numbers) {
//   // ここに実装
// }

// テスト
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// console.log(calculateAverage([10, 20, 30])); // 20
// console.log(calculateAverage([])); // 0

// 演習6: オブジェクトを扱う関数
console.log("\n演習6: オブジェクトを扱う関数");
console.log("------------------------");

// TODO: ユーザー情報を受け取って自己紹介文を返す関数 createIntroduction を作成してください
// userオブジェクト: { name, age, job }
// 戻り値: "私は[name]です。[age]歳で、[job]をしています。"
// jobが未設定の場合は"お仕事を探し中"にする
// function createIntroduction(user) {
//   // ここに実装
// }

// テスト
const user1 = { name: "田中", age: 25, job: "エンジニア" };
const user2 = { name: "佐藤", age: 30, job: "" };
// console.log(createIntroduction(user1));
// // "私は田中です。25歳で、エンジニアをしています。"
// console.log(createIntroduction(user2));
// // "私は佐藤です。30歳で、お仕事を探し中です。"

// 演習7: バリデーション関数
console.log("\n演習7: バリデーション関数");
console.log("---------------------");

// TODO: メールアドレスの妥当性をチェックする関数 isValidEmail を作成してください
// 条件: 空でない、@を含む、@の前後に文字がある
// function isValidEmail(email) {
//   // ここに実装
// }

// テスト
// console.log(isValidEmail("test@example.com")); // true
// console.log(isValidEmail("invalid-email")); // false
// console.log(isValidEmail("@example.com")); // false
// console.log(isValidEmail("test@")); // false
// console.log(isValidEmail("")); // false

// 演習8: アロー関数の練習
console.log("\n演習8: アロー関数の練習");
console.log("---------------------");

// TODO: 以下の関数宣言をアロー関数に書き換えてください

// 1. 数値を2倍にする関数
// function double(x) {
//   return x * 2;
// }
// const double = // ここに実装

// 2. 2つの文字列を結合する関数
// function concatenate(str1, str2) {
//   return str1 + str2;
// }
// const concatenate = // ここに実装

// 3. 配列の長さを返す関数
// function getLength(array) {
//   return array.length;
// }
// const getLength = // ここに実装

// テスト
// console.log(double(5)); // 10
// console.log(concatenate("Hello", "World")); // "HelloWorld"
// console.log(getLength([1, 2, 3, 4])); // 4

// 演習9: 高階関数の基礎
console.log("\n演習9: 高階関数の基礎");
console.log("---------------------");

// TODO: 配列の各要素に対して指定された関数を適用する関数 applyToAll を作成してください
// function applyToAll(array, func) {
//   // ここに実装
// }

// テスト用の関数
const square = x => x * x;
const addOne = x => x + 1;

// テスト
const numbers = [1, 2, 3, 4];
// console.log(applyToAll(numbers, square)); // [1, 4, 9, 16]
// console.log(applyToAll(numbers, addOne)); // [2, 3, 4, 5]

// 演習10: 実践問題 - 計算機の実装
console.log("\n演習10: 実践問題 - 計算機の実装");
console.log("--------------------------------");

// TODO: 簡単な計算機オブジェクトを作成してください
// calculator オブジェクトに以下のメソッドを実装：
// - add(a, b): 加算
// - subtract(a, b): 減算
// - multiply(a, b): 乗算
// - divide(a, b): 除算（0で割る場合は"エラー: 0で割ることはできません"を返す）

// const calculator = {
//   add: function(a, b) {
//     // ここに実装
//   },
//   subtract: function(a, b) {
//     // ここに実装
//   },
//   multiply: function(a, b) {
//     // ここに実装
//   },
//   divide: function(a, b) {
//     // ここに実装
//   }
// };

// テスト
// console.log(calculator.add(10, 5)); // 15
// console.log(calculator.subtract(10, 3)); // 7
// console.log(calculator.multiply(4, 6)); // 24
// console.log(calculator.divide(15, 3)); // 5
// console.log(calculator.divide(10, 0)); // "エラー: 0で割ることはできません"

console.log("\n=== Day 2.5 関数基礎演習完了 ===");
console.log("※ 解答は solutions/additional-solutions/ フォルダにあります"); 