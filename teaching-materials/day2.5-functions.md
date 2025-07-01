# Day 2.5: 関数の基礎

## 🎯 学習目標
- 関数の基本的な書き方を理解する
- 関数の呼び出し方を覚える
- 引数と戻り値の概念を理解する
- スコープ（変数の有効範囲）を理解する
- 関数式とアロー関数の違いを理解する

## 📖 関数とは何か？

**関数**は、特定の処理をまとめて名前を付けたものです。再利用可能なコードブロックと考えることができます。

### 関数の基本構文

```javascript
function 関数名(引数1, 引数2) {
  // 処理内容
  return 戻り値; // 省略可能
}
```

### 基本的な例

```javascript
// 挨拶を表示する関数
function greet(name) {
  return `こんにちは、${name}さん！`;
}

// 関数の呼び出し
const message = greet("田中");
console.log(message); // "こんにちは、田中さん！"
```

## 📝 関数の書き方のパターン

### 1. 関数宣言（Function Declaration）

```javascript
function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 3)); // 15
```

### 2. 関数式（Function Expression）

```javascript
const calculateArea = function(width, height) {
  return width * height;
};

console.log(calculateArea(5, 3)); // 15
```

### 3. アロー関数（Arrow Function）

```javascript
// 基本形
const calculateArea = (width, height) => {
  return width * height;
};

// 短縮形（処理が1行の場合）
const calculateArea = (width, height) => width * height;

console.log(calculateArea(5, 3)); // 15
```

## 🔧 引数と戻り値の詳細

### 引数（パラメータ）

```javascript
// 複数の引数
function introduce(name, age, job) {
  return `私は${name}です。${age}歳で、${job}をしています。`;
}

console.log(introduce("田中", 25, "エンジニア"));
// "私は田中です。25歳で、エンジニアをしています。"
```

### デフォルト引数

```javascript
function greet(name = "ゲスト") {
  return `こんにちは、${name}さん！`;
}

console.log(greet());      // "こんにちは、ゲストさん！"
console.log(greet("田中")); // "こんにちは、田中さん！"
```

### 戻り値（return）

```javascript
// 戻り値がある関数
function add(a, b) {
  return a + b;
}

// 戻り値がない関数（undefinedを返す）
function sayHello() {
  console.log("Hello!");
  // return文がない場合、undefinedが返される
}

const result1 = add(3, 5);    // 8
const result2 = sayHello();   // undefined
```

## 🎯 スコープ（変数の有効範囲）

### グローバルスコープ vs ローカルスコープ

```javascript
// グローバル変数
let globalVar = "グローバル";

function testScope() {
  // ローカル変数
  let localVar = "ローカル";
  
  console.log(globalVar); // "グローバル" - アクセス可能
  console.log(localVar);  // "ローカル" - アクセス可能
}

testScope();

console.log(globalVar); // "グローバル" - アクセス可能
// console.log(localVar); // エラー！ - アクセス不可
```

### ブロックスコープ

```javascript
function testBlockScope() {
  if (true) {
    let blockVar = "ブロック内";
    console.log(blockVar); // "ブロック内" - アクセス可能
  }
  
  // console.log(blockVar); // エラー！ - ブロック外からアクセス不可
}
```

## ⚠️ よくある間違いとその対策

### 1. 関数の呼び出し忘れ

```javascript
// ❌ 間違い
function getName() {
  return "田中";
}

console.log(getName); // [Function: getName] - 関数自体が表示される

// ✅ 正しい
console.log(getName()); // "田中" - 関数を実行して結果を表示
```

### 2. 戻り値の使い忘れ

```javascript
// ❌ 間違い
function calculate(a, b) {
  return a + b;
}

calculate(3, 5); // 結果を受け取らずに捨てている

// ✅ 正しい
const result = calculate(3, 5);
console.log(result); // 8
```

### 3. 変数のスコープミス

```javascript
// ❌ 間違い
function badExample() {
  if (true) {
    var x = 1; // varは関数スコープ
  }
  console.log(x); // 1 - 予期しない動作
}

// ✅ 正しい
function goodExample() {
  if (true) {
    let x = 1; // letはブロックスコープ
  }
  // console.log(x); // エラー - 期待通りの動作
}
```

## 🚀 実務でよく使うパターン

### 1. バリデーション関数

```javascript
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return email.includes('@');
}

// 使用例
const email = "user@example.com";
if (validateEmail(email)) {
  console.log("有効なメールアドレスです");
} else {
  console.log("無効なメールアドレスです");
}
```

### 2. データ処理関数

```javascript
function processUserData(users) {
  return users
    .filter(user => user.active)
    .map(user => ({
      name: user.name,
      email: user.email
    }));
}

// 使用例
const users = [
  { name: "田中", email: "tanaka@test.com", active: true },
  { name: "佐藤", email: "sato@test.com", active: false }
];

const processedUsers = processUserData(users);
console.log(processedUsers);
// [{ name: "田中", email: "tanaka@test.com" }]
```

### 3. ユーティリティ関数

```javascript
// 配列が空かどうかをチェック
function isEmpty(array) {
  return !array || array.length === 0;
}

// 安全な文字列結合
function safeJoin(array, separator = ', ') {
  if (isEmpty(array)) {
    return '';
  }
  return array.join(separator);
}

// 使用例
const names = ["田中", "佐藤", "鈴木"];
console.log(safeJoin(names)); // "田中, 佐藤, 鈴木"
console.log(safeJoin([]));    // ""
```

## 🎨 アロー関数の使い分け

### 基本的な使い分け

```javascript
// 関数宣言：複雑な処理、再利用性重視
function processComplexData(data) {
  // 複雑な処理...
  return result;
}

// アロー関数：簡単な処理、配列メソッドと組み合わせ
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

### アロー関数の省略記法

```javascript
// 引数が1つの場合：括弧を省略可能
const square = x => x * x;

// 処理が1行の場合：中括弧とreturnを省略可能
const add = (a, b) => a + b;

// オブジェクトを返す場合：括弧で囲む
const createUser = name => ({ name, active: true });
```

## 📊 まとめ

### 関数を使う理由
1. **再利用性**: 同じ処理を何度も書かなくて済む
2. **可読性**: コードが整理されて読みやすくなる
3. **テスト**: 独立した機能として動作確認しやすい
4. **保守性**: 修正が必要な時に一箇所を変更するだけで済む

### 関数設計のポイント
- **単一責任**: 1つの関数は1つの処理に集中する
- **短く簡潔**: 長すぎる関数は分割する
- **わかりやすい名前**: 関数名で何をするかがわかるようにする
- **適切な引数**: 必要な情報だけを受け取る

### 次のステップ
Day 3では、これらの関数を使ってより複雑なデータ処理を行う方法を学びます。特に配列操作メソッド（map、filter、reduce）と組み合わせることで、強力なデータ処理が可能になります。 