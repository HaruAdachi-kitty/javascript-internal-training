# Day 2: truthy と falsy の完全理解

## 🎯 学習目標
- falsy値を完璧に覚える
- 条件分岐での動作を理解する
- 実務でのよくあるパターンを習得する

## 📋 falsy値（偽値）- 完全リスト

JavaScript では以下の **6つの値のみ** が falsy です：

```javascript
// 1. false
if (false) console.log("実行されない");

// 2. 0（ゼロ）
if (0) console.log("実行されない");

// 3. 空文字列 ""
if ("") console.log("実行されない");

// 4. null
if (null) console.log("実行されない");

// 5. undefined
if (undefined) console.log("実行されない");

// 6. NaN（Not a Number）
if (NaN) console.log("実行されない");
```

## ✅ truthy値（真値）

**falsy以外のすべての値**が truthy です：

```javascript
// 数値（0以外）
if (1) console.log("実行される");
if (-1) console.log("実行される");
if (0.1) console.log("実行される");

// 文字列（空文字以外）
if ("hello") console.log("実行される");
if ("0") console.log("実行される");  // 文字列の"0"は truthy！
if (" ") console.log("実行される");  // スペースだけでも truthy

// オブジェクト・配列（常に truthy）
if ({}) console.log("実行される");    // 空オブジェクトでも truthy
if ([]) console.log("実行される");    // 空配列でも truthy
if (function(){}) console.log("実行される");  // 関数も truthy
```

## ⚠️ よくある間違い・注意点

### 1. 文字列の "0" と数値の 0
```javascript
if ("0") {
  console.log("文字列の'0'は truthy"); // 実行される
}

if (0) {
  console.log("数値の0は falsy");      // 実行されない
}
```

### 2. 空配列・空オブジェクトは truthy
```javascript
let emptyArray = [];
let emptyObject = {};

if (emptyArray) {
  console.log("空配列は truthy");     // 実行される
}

if (emptyObject) {
  console.log("空オブジェクトは truthy"); // 実行される
}

// 配列が空かどうかを判定したい場合
if (emptyArray.length > 0) {
  console.log("配列に要素がある");
}

// オブジェクトが空かどうかを判定したい場合
if (Object.keys(emptyObject).length > 0) {
  console.log("オブジェクトにプロパティがある");
}
```

### 3. NaN の特殊性
```javascript
let result = "abc" / 2;  // NaN
console.log(result);     // NaN
console.log(typeof result); // "number" ですが...

if (result) {
  console.log("実行されない"); // NaN は falsy
}

// NaN の判定
console.log(isNaN(result));        // true
console.log(Number.isNaN(result)); // true（より厳密）
```

## 🔄 実務でよく使うパターン

### 1. デフォルト値の設定
```javascript
// || 演算子を使った方法
function greet(name) {
  name = name || "名無し";  // name が falsy なら "名無し"
  console.log(`こんにちは、${name}さん`);
}

greet();        // "こんにちは、名無しさん"
greet("");      // "こんにちは、名無しさん"
greet("田中");  // "こんにちは、田中さん"

// ?? 演算子（Nullish coalescing）ES2020
function greetModern(name) {
  name = name ?? "名無し";  // name が null または undefined なら "名無し"
  console.log(`こんにちは、${name}さん`);
}

greetModern(0);   // "こんにちは、0さん" (|| との違い)
greetModern("");  // "こんにちは、さん"   (|| との違い)
```

### 2. 条件分岐の簡潔な書き方
```javascript
// 従来の書き方
if (user !== null && user !== undefined && user.name !== "") {
  console.log(user.name);
}

// truthy/falsy を活用した書き方
if (user && user.name) {
  console.log(user.name);
}

// オプショナルチェーニング（ES2020）
if (user?.name) {
  console.log(user.name);
}
```

### 3. 配列のフィルタリング
```javascript
let values = [0, 1, "", "hello", null, "world", undefined, false, true];

// falsy な値を除去
let truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, "hello", "world", true]

// 空文字列のみを除去したい場合
let nonEmptyStrings = values.filter(value => value !== "");
console.log(nonEmptyStrings); // [0, 1, "hello", null, "world", undefined, false, true]
```

## 🧪 判定メソッド

### Boolean() による明示的変換
```javascript
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false  
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false

console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

### !! 演算子（ダブル否定）
```javascript
let value = "hello";
console.log(!!value);  // true（Boolean(value) と同じ）

let emptyString = "";
console.log(!!emptyString);  // false
```

## 🎮 実践問題のヒント

### よくあるバグパターン
```javascript
// 問題：0が入力された時も "入力してください" と表示される
function validateInput(input) {
  if (!input) {  // 0 も falsy なので...
    return "入力してください";
  }
  return `入力値: ${input}`;
}

console.log(validateInput(0));    // "入力してください" ← バグ！
console.log(validateInput(""));   // "入力してください" ← 正常

// 修正版
function validateInputFixed(input) {
  if (input === "" || input === null || input === undefined) {
    return "入力してください";
  }
  return `入力値: ${input}`;
}

// または
function validateInputFixed2(input) {
  if (input == null || input === "") {  // == で null と undefined を同時チェック
    return "入力してください";
  }
  return `入力値: ${input}`;
}
```

## 📝 チェックポイント
- [ ] falsy値6つを暗記している
- [ ] 空配列・空オブジェクトが truthy であることを理解している
- [ ] || と ?? 演算子の違いを理解している
- [ ] Boolean() と !! の使い方を知っている
- [ ] 実際の条件分岐で適切に活用できる 