// Day 3 演習解答: 比較演算子（== vs ===）の練習

console.log("=== Day 3 演習解答: 比較演算子の練習 ===");

// 演習2: 予想してから確認 - 解答と解説
console.log("\n演習2: 予想してから確認 - 解答と解説");
console.log("----------------------------------");

console.log('"0" === 0:', "0" === 0); // false - 型が異なる
console.log('"0" == 0:', "0" == 0);   // true - "0"が数値0に変換される

console.log('[] === []:', [] === []); // false - 異なるオブジェクト参照
console.log('[] == []:', [] == []);   // false - 異なるオブジェクト参照

console.log('[] == false:', [] == false); // true - []が""に変換され、falseが0に変換され、""が0に変換される
console.log('"" == 0:', "" == 0);         // true - ""が数値0に変換される
console.log('" " == 0:', " " == 0);       // true - " "が数値0に変換される
console.log('NaN === NaN:', NaN === NaN); // false - NaNは自分自身とも等しくない

// 演習5: 実際のバグパターン - 解答
console.log("\n演習5: 実際のバグパターン - 解答");
console.log("----------------------------------");

// 安全なバリデーション関数の実装
function validateInputSafe(input) {
  // === を使用した安全な比較
  if (input === "" || input === null || input === undefined) {
    return "入力してください";
  }
  return `入力値: ${input}`;
}

const testInputs = [0, "", " ", false, null, undefined, "0", "hello"];

console.log("\n安全なバリデーション結果:");
testInputs.forEach(input => {
  console.log(`入力: ${input} (${typeof input}) → ${validateInputSafe(input)}`);
});

// 演習6: オブジェクトの比較 - 解答
console.log("\n演習6: オブジェクトの比較 - 解答");
console.log("------------------------------");

// オブジェクトの内容を比較する関数
function compareObjectsByContent(obj1, obj2) {
  // 簡単な内容比較（シャローな比較）
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  return keys1.every(key => obj1[key] === obj2[key]);
}

const obj1 = { name: "田中" };
const obj2 = { name: "田中" };

console.log('内容での比較:', compareObjectsByContent(obj1, obj2)); // true

// より高度な比較関数
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  
  if (typeof obj1 !== typeof obj2) return false;
  
  if (typeof obj1 !== 'object') return obj1 === obj2;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// 演習8: 実践的な比較関数の作成 - 解答
console.log("\n演習8: 実践的な比較関数の作成 - 解答");
console.log("--------------------------------------");

// 1. 厳密な等価性チェック
function isStrictlyEqual(a, b) {
  return a === b;
}

// 2. 型を考慮しない値の比較（ただし安全に）
function isLooselyEqualSafe(a, b) {
  // null/undefined の特殊ケース
  if ((a === null || a === undefined) && (b === null || b === undefined)) {
    return a === b;
  }
  
  // 型を明示的に変換してから比較
  return String(a) === String(b);
}

// 3. 数値としての比較
function isNumericallyEqual(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  // NaN の場合は false
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return false;
  }
  
  return numA === numB;
}

// テスト実行
const testPairs = [
  [5, "5"],
  [0, ""],
  [null, undefined],
  ["", false],
  [1, true],
  ["abc", "abc"],
  [NaN, NaN]
];

testPairs.forEach(([a, b]) => {
  console.log(`${a} と ${b}:`);
  console.log(`  厳密: ${isStrictlyEqual(a, b)}`);
  console.log(`  緩い(安全): ${isLooselyEqualSafe(a, b)}`);
  console.log(`  数値: ${isNumericallyEqual(a, b)}`);
  console.log("---");
});

// 演習10: 実務での適用 - 解答
console.log("\n演習10: 実務での適用 - 解答");
console.log("-----------------------------");

// 1. ユーザーIDの比較
function findUserById(users, id) {
  return users.find(user => user.id === id); // 厳密な比較を使用
}

// 2. フォーム入力値の検証
function validateForm(formData) {
  const errors = [];
  
  // 名前のチェック（空文字列とnull/undefinedを区別）
  if (formData.name === "" || formData.name === null || formData.name === undefined) {
    errors.push("名前を入力してください");
  }
  
  // 年齢のチェック（0も有効な値として扱う）
  if (formData.age === null || formData.age === undefined || formData.age === "") {
    errors.push("年齢を入力してください");
  }
  
  return errors;
}

// より堅牢なバリデーション関数
function validateFormRobust(formData) {
  const errors = [];
  
  // 名前の検証
  if (!formData.name || formData.name.trim() === "") {
    errors.push("有効な名前を入力してください");
  }
  
  // 年齢の検証
  const age = Number(formData.age);
  if (isNaN(age) || age < 0 || age > 150) {
    errors.push("有効な年齢（0-150）を入力してください");
  }
  
  // メールの検証
  if (formData.email && typeof formData.email === 'string' && !formData.email.includes('@')) {
    errors.push("有効なメールアドレスを入力してください");
  }
  
  return errors;
}

// テストデータ
const users = [
  { id: 1, name: "田中" },
  { id: 2, name: "佐藤" }
];

const formTests = [
  { name: "田中", age: 25 },
  { name: "", age: 30 },
  { name: "佐藤", age: 0 },
  { name: null, age: null },
  { name: undefined, age: "" },
  { name: "  ", age: "25" } // 空白とstring型の年齢
];

console.log("ユーザー検索テスト:");
console.log("ID=1:", findUserById(users, 1));
console.log("ID='1':", findUserById(users, "1")); // 見つからない（厳密な比較）

console.log("\nフォーム検証テスト:");
formTests.forEach((form, index) => {
  const errors = validateForm(form);
  const robustErrors = validateFormRobust(form);
  console.log(`Form ${index + 1}:`, form);
  console.log(`  基本エラー: ${errors.join(', ') || 'なし'}`);
  console.log(`  堅牢エラー: ${robustErrors.join(', ') || 'なし'}`);
  console.log("---");
});

// 型安全な比較のためのヘルパー関数
console.log("\n型安全な比較のためのヘルパー関数:");
console.log("----------------------------------");

function safeCompare(a, b, options = {}) {
  const { strict = true, ignoreCase = false, trimWhitespace = false } = options;
  
  // 前処理
  let valueA = a;
  let valueB = b;
  
  if (trimWhitespace && typeof valueA === 'string') {
    valueA = valueA.trim();
  }
  if (trimWhitespace && typeof valueB === 'string') {
    valueB = valueB.trim();
  }
  
  if (ignoreCase && typeof valueA === 'string' && typeof valueB === 'string') {
    valueA = valueA.toLowerCase();
    valueB = valueB.toLowerCase();
  }
  
  // 比較
  return strict ? valueA === valueB : valueA == valueB;
}

// テスト
console.log('safeCompare("Hello", "hello", {ignoreCase: true}):', 
  safeCompare("Hello", "hello", {ignoreCase: true}));
console.log('safeCompare("  test  ", "test", {trimWhitespace: true}):', 
  safeCompare("  test  ", "test", {trimWhitespace: true}));

console.log("\n=== Day 3 比較演算子演習解答完了 ==="); 