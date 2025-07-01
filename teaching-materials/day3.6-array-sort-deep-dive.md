# Day 3.7: Array.sort() 完全攻略ガイド

## 1. Array.sort() の基本概念

### sort()メソッドとは

```javascript
// 基本形
array.sort();
array.sort(compareFunction);
```

**重要な特徴:**

- **元の配列を変更する（破壊的メソッド）**
- **文字列として比較がデフォルト**
- **比較関数で動作をカスタマイズ可能**

## 2. デフォルトの動作（比較関数なし）

### 文字列変換による比較

```javascript
// 数値の配列でも文字列として比較される
const numbers = [10, 2, 1, 100, 20];
console.log(numbers.sort());
// [1, 10, 100, 2, 20] ← 文字列として比較された結果

// なぜこうなるのか？
console.log('10' < '2'); // true (文字列比較では "1" < "2")
console.log('100' < '2'); // true (最初の文字 "1" < "2")
```

### 文字列の場合は正常に動作

```javascript
const fruits = ['banana', 'apple', 'cherry'];
console.log(fruits.sort()); // ["apple", "banana", "cherry"]

// Unicode順での比較
const mixed = ['Apple', 'banana', 'Cherry'];
console.log(mixed.sort()); // ["Apple", "Cherry", "banana"]
// 大文字が小文字より先に来る（Unicodeの順序）
```

## 3. 比較関数の仕組み

### 比較関数の基本ルール

```javascript
function compareFunction(a, b) {
  // 戻り値の意味:
  // 負の値: a を b より前に配置
  // 0: a と b は同じ順序
  // 正の値: a を b より後に配置
}
```

### 視覚的な理解

```javascript
// a と b の比較結果
// compareFunction(a, b) < 0  →  [a, b] の順序
// compareFunction(a, b) > 0  →  [b, a] の順序
// compareFunction(a, b) = 0  →  順序変更なし
```

## 4. 数値ソートの実装

### 昇順ソート

```javascript
const numbers = [10, 2, 1, 100, 20];

// 昇順
const ascending = numbers.sort((a, b) => a - b);
console.log(ascending); // [1, 2, 10, 20, 100]

// なぜ a - b で昇順になるのか？
// a = 10, b = 2 の場合: 10 - 2 = 8 (正) → b を a より前に → [2, 10]
// a = 2, b = 10 の場合: 2 - 10 = -8 (負) → a を b より前に → [2, 10]
```

### 降順ソート

```javascript
const numbers = [10, 2, 1, 100, 20];

// 降順
const descending = numbers.sort((a, b) => b - a);
console.log(descending); // [100, 20, 10, 2, 1]

// なぜ b - a で降順になるのか？
// a = 2, b = 10 の場合: 10 - 2 = 8 (正) → a を b より後に → [10, 2]
```

## 5. ソートアルゴリズムの動作原理

### ステップバイステップの理解

```javascript
const arr = [3, 1, 4, 2];

// sort((a, b) => a - b) の実行過程（簡略化）
console.log('初期配列:', arr);

// 比較1: compare(3, 1) = 3 - 1 = 2 (正) → [1, 3, 4, 2]
// 比較2: compare(3, 4) = 3 - 4 = -1 (負) → [1, 3, 4, 2] (変更なし)
// 比較3: compare(4, 2) = 4 - 2 = 2 (正) → [1, 3, 2, 4]
// 比較4: compare(3, 2) = 3 - 2 = 1 (正) → [1, 2, 3, 4]

// 実際のアルゴリズムはより複雑（通常はTimsortやQuicksort）
```

### 比較回数の理解

```javascript
function customSort(arr) {
  let comparisons = 0;

  const result = arr.sort((a, b) => {
    comparisons++;
    console.log(`比較 ${comparisons}: ${a} vs ${b} = ${a - b}`);
    return a - b;
  });

  console.log(`総比較回数: ${comparisons}`);
  return result;
}

customSort([3, 1, 4, 2]);
```

## 6. 実践的なソート例

### オブジェクトの配列をソート

```javascript
const students = [
  { name: 'Alice', age: 25, score: 85 },
  { name: 'Bob', age: 22, score: 92 },
  { name: 'Charlie', age: 24, score: 78 },
];

// 年齢でソート
const byAge = students.sort((a, b) => a.age - b.age);
console.log('年齢順:', byAge);

// スコアでソート（降順）
const byScore = students.sort((a, b) => b.score - a.score);
console.log('スコア順:', byScore);

// 名前でソート（文字列）
const byName = students.sort((a, b) => a.name.localeCompare(b.name));
console.log('名前順:', byName);
```

### 複数条件でソート

```javascript
const data = [
  { category: 'A', priority: 2, value: 100 },
  { category: 'B', priority: 1, value: 200 },
  { category: 'A', priority: 1, value: 150 },
  { category: 'B', priority: 2, value: 175 },
];

// カテゴリ → 優先度 → 値の順でソート
const multiSort = data.sort((a, b) => {
  // 第1条件: カテゴリ
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }

  // 第2条件: 優先度
  if (a.priority !== b.priority) {
    return a.priority - b.priority;
  }

  // 第3条件: 値
  return a.value - b.value;
});

console.log('複数条件ソート:', multiSort);
```

## 7. 高度なソートテクニック

### 日本語文字列のソート

```javascript
const japanese = ['あいうえお', 'かきくけこ', 'あかさたな'];

// 日本語対応ソート
const sorted = japanese.sort((a, b) => a.localeCompare(b, 'ja'));
console.log(sorted);
```

### カスタム順序でのソート

```javascript
const priorities = ['high', 'medium', 'low'];
const tasks = [
  { name: 'Task A', priority: 'low' },
  { name: 'Task B', priority: 'high' },
  { name: 'Task C', priority: 'medium' },
];

// 優先度の順序を定義してソート
const sortByCustomPriority = tasks.sort((a, b) => {
  const aIndex = priorities.indexOf(a.priority);
  const bIndex = priorities.indexOf(b.priority);
  return aIndex - bIndex;
});

console.log(sortByCustomPriority);
```

### null/undefined を含む配列のソート

```javascript
const mixedArray = [3, null, 1, undefined, 2, null];

// null/undefinedを末尾に配置
const safeSorted = mixedArray.sort((a, b) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1; // aを後に
  if (b == null) return -1; // bを後に
  return a - b;
});

console.log(safeSorted); // [1, 2, 3, null, null, undefined]
```

## 8. パフォーマンスの考慮

### 大きな配列での最適化

```javascript
// 文字列比較の最適化
const largeStringArray = ['zzz', 'aaa', 'mmm' /* ... 大量のデータ */];

// 毎回localeCompareを呼ぶより、事前に変換
const optimizedSort = largeStringArray
  .map((item, index) => ({ item, key: item.toLowerCase(), index }))
  .sort((a, b) => a.key.localeCompare(b.key))
  .map(({ item }) => item);
```

### 比較関数の効率化

```javascript
// 非効率な例
const inefficient = students.sort((a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
});

// 効率的な例（Schwartzian transform）
const efficient = students
  .map((student) => ({ student, key: student.name.toLowerCase() }))
  .sort((a, b) => a.key.localeCompare(b.key))
  .map(({ student }) => student);
```

## 9. よくある間違いとデバッグ

### 間違い 1: 比較関数が一貫しない

```javascript
// ❌ 悪い例: 一貫しない比較
const badSort = arr.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  // b === a の場合の処理が抜けている
});

// ✅ 良い例: 一貫した比較
const goodSort = arr.sort((a, b) => a - b);
```

### 間違い 2: 非数値を数値として比較

```javascript
const mixed = ['10', '2', '1'];

// ❌ 悪い例: 文字列を数値として比較
const bad = mixed.sort((a, b) => a - b);
console.log(bad); // ["1", "2", "10"] - たまたま正しく見える

// ✅ 良い例: 明示的に数値変換
const good = mixed.sort((a, b) => Number(a) - Number(b));
```

### デバッグのコツ

```javascript
function debugSort(arr, compareFn) {
  console.log('ソート前:', [...arr]);

  const result = arr.sort((a, b) => {
    const comparison = compareFn(a, b);
    console.log(`比較: ${a} vs ${b} = ${comparison}`);
    return comparison;
  });

  console.log('ソート後:', result);
  return result;
}

// 使用例
debugSort([3, 1, 4, 2], (a, b) => a - b);
```

## 10. 実践演習

### 基本演習

```javascript
// TODO: 以下の配列を様々な条件でソートしてみよう

const data = [
  { name: 'iPhone', price: 80000, category: 'electronics', rating: 4.5 },
  { name: 'MacBook', price: 150000, category: 'electronics', rating: 4.8 },
  { name: 'Coffee', price: 500, category: 'food', rating: 4.2 },
  { name: 'Book', price: 1500, category: 'education', rating: 4.0 },
];

// 演習1: 価格の昇順でソート
// 演習2: 評価の降順でソート
// 演習3: カテゴリ→価格の順でソート
// 演習4: 名前の文字数でソート
```

### 応用演習

```javascript
// TODO: 複雑なデータ構造のソート
const complexData = [
  {
    user: { name: 'Alice', age: 25 },
    orders: [{ total: 1000 }, { total: 2000 }],
  },
  {
    user: { name: 'Bob', age: 30 },
    orders: [{ total: 500 }, { total: 1500 }, { total: 800 }],
  },
];

// 演習5: 注文総額でソート
// 演習6: 注文数でソート
// 演習7: ユーザー年齢→注文総額でソート
```

## まとめ

**Array.sort()を完全に理解するポイント:**

1. **デフォルトは文字列比較** - 数値は必ず比較関数を使う
2. **比較関数の戻り値** - 負/0/正の意味を理解
3. **元配列の変更** - 破壊的メソッドであることを意識
4. **複雑なデータ** - オブジェクトや多次元配列の扱い
5. **パフォーマンス** - 大量データでの最適化手法

**next step:** 実際に様々なデータでソートを試して、比較関数の動作を体感してみましょう！
