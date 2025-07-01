// Day 3 演習: 比較演算子（== vs ===）の練習

console.log("=== Day 3 演習: 比較演算子の練習 ===");

// 演習1: 基本的な === と == の比較
console.log("\n演習1: 基本的な === と == の比較");
console.log("----------------------------------");

const testCases1 = [
  [5, 5],
  [5, "5"],
  [true, 1],
  [false, 0],
  [null, undefined],
  [0, ""],
  ["", false]
];

testCases1.forEach(([a, b]) => {
  console.log(`${a} === ${b}:`, a === b);
  console.log(`${a} == ${b}:`, a == b);
  console.log("---");
});

// 演習2: 予想してから確認
console.log("\n演習2: 予想してから確認");
console.log("------------------------");

// TODO: 以下の結果を予想してから実行してください
const predictions = [
  { expr: '"0" === 0', expected: null },      // あなたの予想をここに
  { expr: '"0" == 0', expected: null },
  { expr: '[] === []', expected: null },
  { expr: '[] == []', expected: null },
  { expr: '[] == false', expected: null },
  { expr: '"" == 0', expected: null },
  { expr: '" " == 0', expected: null },
  { expr: 'NaN === NaN', expected: null }
];

// 実際の結果を確認
console.log('"0" === 0:', "0" === 0);
console.log('"0" == 0:', "0" == 0);
console.log('[] === []:', [] === []);
console.log('[] == []:', [] == []);
console.log('[] == false:', [] == false);
console.log('"" == 0:', "" == 0);
console.log('" " == 0:', " " == 0);
console.log('NaN === NaN:', NaN === NaN);

// 演習3: 危険なパターンの理解
console.log("\n演習3: 危険なパターンの理解");
console.log("------------------------------");

// TODO: なぜこれらの結果になるのか、型変換の過程を考えてください

console.log('[] == 0:', [] == 0);
// TODO: 変換過程を考えてください

console.log('[] == "0":', [] == "0");
// TODO: 変換過程を考えてください

console.log('[0] == 0:', [0] == 0);
// TODO: 変換過程を考えてください

console.log('[0] == "0":', [0] == "0");
// TODO: 変換過程を考えてください

// 演習4: null と undefined の特殊な関係
console.log("\n演習4: null と undefined の特殊な関係");
console.log("----------------------------------------");

console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);
console.log('null == 0:', null == 0);
console.log('null === 0:', null === 0);
console.log('undefined == 0:', undefined == 0);
console.log('undefined === 0:', undefined === 0);

// TODO: null と undefined だけが特別な理由を考えてください

// 演習5: 実際のバグパターン
console.log("\n演習5: 実際のバグパターン");
console.log("----------------------------");

// バグのあるコード例
function validateInputBuggy(input) {
  if (input == "") {  // 危険な比較
    return "入力してください";
  }
  return `入力値: ${input}`;
}

// テストケース
const testInputs = [0, "", " ", false, null, undefined, "0", "hello"];

console.log("バグのあるバリデーション結果:");
testInputs.forEach(input => {
  console.log(`入力: ${input} (${typeof input}) → ${validateInputBuggy(input)}`);
});

// TODO: 安全なバリデーション関数を実装してください
function validateInputSafe(input) {
  // === を使用した安全な比較
  if (input === "" || input === null || input === undefined) {
    return "入力してください";
  }
  return `入力値: ${input}`;
}

console.log("\n安全なバリデーション結果:");
testInputs.forEach(input => {
  console.log(`入力: ${input} (${typeof input}) → ${validateInputSafe(input)}`);
});

// 演習6: オブジェクトの比較
console.log("\n演習6: オブジェクトの比較");
console.log("------------------------");

const obj1 = { name: "田中" };
const obj2 = { name: "田中" };
const obj3 = obj1;

console.log('obj1 == obj2:', obj1 == obj2);
console.log('obj1 === obj2:', obj1 === obj2);
console.log('obj1 === obj3:', obj1 === obj3);

// TODO: オブジェクトの内容を比較する関数を実装してください
function compareObjectsByContent(obj1, obj2) {
  // 簡単な内容比較（シャローな比較）
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  return keys1.every(key => obj1[key] === obj2[key]);
}

console.log('内容での比較:', compareObjectsByContent(obj1, obj2));

// 演習7: 型変換の明示的な実行
console.log("\n演習7: 型変換の明示的な実行");
console.log("------------------------------");

// TODO: 以下の値を明示的に変換してから比較してください

const value1 = "5";
const value2 = 5;

// 文字列として比較
console.log('文字列として比較:', String(value1) === String(value2));

// 数値として比較
console.log('数値として比較:', Number(value1) === Number(value2));

// 複雑な例
const complexValues = [
  { input: "123", expected: 123 },
  { input: "0", expected: 0 },
  { input: "", expected: 0 },
  { input: "abc", expected: NaN },
  { input: true, expected: 1 },
  { input: false, expected: 0 },
  { input: null, expected: 0 },
  { input: undefined, expected: NaN }
];

console.log("Number()変換の結果:");
complexValues.forEach(({ input, expected }) => {
  const result = Number(input);
  const match = (Number.isNaN(expected) && Number.isNaN(result)) || result === expected;
  console.log(`Number(${input}): ${result} (期待値: ${expected}) ${match ? '✓' : '✗'}`);
});

// 演習8: 実践的な比較関数の作成
console.log("\n演習8: 実践的な比較関数の作成");
console.log("----------------------------------");

// TODO: 以下の比較関数を実装してください

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

// 演習9: デバッグ支援関数
console.log("\n演習9: デバッグ支援関数");
console.log("------------------------");

function debugComparison(a, b) {
  console.log(`\n=== ${a} と ${b} の比較 ===`);
  console.log(`a: ${a} (${typeof a})`);
  console.log(`b: ${b} (${typeof b})`);
  console.log(`a === b: ${a === b}`);
  console.log(`a == b: ${a == b}`);
  
  // 型変換過程の表示
  console.log(`String(a): "${String(a)}"`);
  console.log(`String(b): "${String(b)}"`);
  console.log(`Number(a): ${Number(a)}`);
  console.log(`Number(b): ${Number(b)}`);
  console.log(`Boolean(a): ${Boolean(a)}`);
  console.log(`Boolean(b): ${Boolean(b)}`);
}

// 複雑な比較のデバッグ
debugComparison([], 0);
debugComparison("", false);
debugComparison(null, undefined);

// 演習10: 実務での適用
console.log("\n演習10: 実務での適用");
console.log("---------------------");

// TODO: 以下のような実際の場面での比較を安全に実装してください

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
  { name: undefined, age: "" }
];

console.log("ユーザー検索テスト:");
console.log("ID=1:", findUserById(users, 1));
console.log("ID='1':", findUserById(users, "1")); // 見つからない（厳密な比較）

console.log("\nフォーム検証テスト:");
formTests.forEach((form, index) => {
  const errors = validateForm(form);
  console.log(`Form ${index + 1}:`, form, "エラー:", errors);
});

console.log("\n=== Day 3 比較演算子演習完了 ==="); 