# JavaScript配列メソッド：破壊的 vs 非破壊的

JavaScriptの配列メソッドは、**元の配列を変更する（破壊的）メソッド**と**新しい配列を返す（非破壊的）メソッド**の2つのカテゴリに分けられます。この違いを理解することは、バグの防止やコードの予測可能性を保つために非常に重要です。

## 📋 目次

1. [破壊的メソッド（Mutating Methods）](#破壊的メソッドmutating-methods)
2. [非破壊的メソッド（Non-mutating Methods）](#非破壊的メソッドnon-mutating-methods)
3. [主な違いと比較表](#主な違いと比較表)
4. [よくある落とし穴](#よくある落とし穴)
5. [注意点とベストプラクティス](#注意点とベストプラクティス)
6. [実践例](#実践例)

---

## 破壊的メソッド（Mutating Methods）

**元の配列を直接変更し、変更後の配列を返すメソッド**

### 📝 主な破壊的メソッド

| メソッド | 説明 | 戻り値 |
|---------|------|--------|
| `push()` | 配列の末尾に要素を追加 | 新しい配列の長さ |
| `pop()` | 配列の末尾の要素を削除 | 削除された要素 |
| `shift()` | 配列の先頭の要素を削除 | 削除された要素 |
| `unshift()` | 配列の先頭に要素を追加 | 新しい配列の長さ |
| `splice()` | 指定位置の要素を削除/追加 | 削除された要素の配列 |
| `sort()` | 配列をソート | ソートされた配列（元の配列） |
| `reverse()` | 配列を逆順にする | 逆順になった配列（元の配列） |
| `fill()` | 配列を指定値で埋める | 変更された配列（元の配列） |

### 💻 破壊的メソッドの例

```javascript
// 元の配列
const originalArray = [1, 2, 3, 4, 5];

// push() - 元の配列が変更される
console.log(originalArray.push(6)); // 6 (新しい長さ)
console.log(originalArray); // [1, 2, 3, 4, 5, 6] 🚨 元の配列が変更された！

// sort() - 元の配列が変更される
const numbers = [3, 1, 4, 1, 5];
console.log(numbers.sort()); // [1, 1, 3, 4, 5]
console.log(numbers); // [1, 1, 3, 4, 5] 🚨 元の配列が変更された！

// splice() - 元の配列が変更される
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.splice(1, 1, 'grape')); // ['banana']
console.log(fruits); // ['apple', 'grape', 'orange'] 🚨 元の配列が変更された！
```

---

## 非破壊的メソッド（Non-mutating Methods）

**元の配列は変更せず、新しい配列を作成して返すメソッド**

### 📝 主な非破壊的メソッド

| メソッド | 説明 | 戻り値 |
|---------|------|--------|
| `slice()` | 配列の一部を切り出し | 新しい配列 |
| `concat()` | 配列を結合 | 新しい配列 |
| `map()` | 各要素を変換 | 新しい配列 |
| `filter()` | 条件に合う要素を抽出 | 新しい配列 |
| `reduce()` | 配列を単一の値に縮約 | 任意の値 |
| `find()` | 条件に合う最初の要素を検索 | 要素または`undefined` |
| `includes()` | 要素が含まれるかチェック | `boolean` |
| `indexOf()` | 要素のインデックスを取得 | `number`または`-1` |
| `join()` | 要素を文字列で結合 | `string` |
| `toString()` | 配列を文字列に変換 | `string` |

### 💻 非破壊的メソッドの例

```javascript
// 元の配列
const originalArray = [1, 2, 3, 4, 5];

// slice() - 新しい配列を返す
const sliced = originalArray.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(originalArray); // [1, 2, 3, 4, 5] ✅ 元の配列は変更されない

// map() - 新しい配列を返す
const doubled = originalArray.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(originalArray); // [1, 2, 3, 4, 5] ✅ 元の配列は変更されない

// filter() - 新しい配列を返す
const evens = originalArray.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
console.log(originalArray); // [1, 2, 3, 4, 5] ✅ 元の配列は変更されない

// concat() - 新しい配列を返す
const combined = originalArray.concat([6, 7]);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7]
console.log(originalArray); // [1, 2, 3, 4, 5] ✅ 元の配列は変更されない
```

---

## 主な違いと比較表

| 特徴 | 破壊的メソッド | 非破壊的メソッド |
|------|---------------|-----------------|
| **元の配列への影響** | 🚨 変更される | ✅ 変更されない |
| **戻り値** | 変更後の配列や削除された要素など | 新しい配列や計算結果 |
| **メモリ効率** | 高い（新しい配列を作らない） | 低い（新しい配列を作る） |
| **関数型プログラミング** | 不適合 | 適合 |
| **予測可能性** | 低い（副作用あり） | 高い（副作用なし） |
| **並行処理安全性** | 低い | 高い |

### 🔄 対応する破壊的・非破壊的メソッド

```javascript
// 破壊的 → 非破壊的な代替方法

// ❌ 破壊的：sort()
const numbers = [3, 1, 4, 1, 5];
numbers.sort(); // 元の配列が変更される

// ✅ 非破壊的：スプレッド演算子 + sort()
const numbers = [3, 1, 4, 1, 5];
const sorted = [...numbers].sort(); // 新しい配列を作成してからソート

// ❌ 破壊的：reverse()
const arr = [1, 2, 3];
arr.reverse(); // 元の配列が変更される

// ✅ 非破壊的：スプレッド演算子 + reverse()
const arr = [1, 2, 3];
const reversed = [...arr].reverse(); // 新しい配列を作成してから逆順

// ❌ 破壊的：push()
const arr = [1, 2, 3];
arr.push(4); // 元の配列が変更される

// ✅ 非破壊的：スプレッド演算子
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // 新しい配列を作成

// ❌ 破壊的：splice()
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // 元の配列が変更される

// ✅ 非破壊的：slice() + concat()
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 2).concat(arr.slice(3)); // 新しい配列を作成
```

---

## よくある落とし穴

### 🪤 1. sort()の予期しない動作

```javascript
// ❌ 数値のソートで予期しない結果
const numbers = [10, 2, 1, 20];
numbers.sort(); // 文字列として比較される
console.log(numbers); // [1, 10, 2, 20] - 期待と違う！

// ✅ 正しい数値ソート
const numbers = [10, 2, 1, 20];
const sorted = [...numbers].sort((a, b) => a - b);
console.log(sorted); // [1, 2, 10, 20] - 正しい順序
```

### 🪤 2. 参照の共有による意図しない変更

```javascript
// ❌ 配列のコピーのつもりが参照を共有
const original = [1, 2, 3];
const copy = original; // 実際は参照のコピー
copy.push(4);
console.log(original); // [1, 2, 3, 4] - 元の配列も変更された！

// ✅ 正しい配列のコピー
const original = [1, 2, 3];
const copy = [...original]; // または original.slice()
copy.push(4);
console.log(original); // [1, 2, 3] - 元の配列は変更されない
```

### 🪤 3. ネストした配列やオブジェクトの浅いコピー

```javascript
// ❌ 浅いコピーでネストしたオブジェクトが共有される
const original = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const copy = [...original];
copy[0].name = 'Charlie';
console.log(original[0].name); // 'Charlie' - 元の配列も影響を受ける！

// ✅ 深いコピーを使用
const original = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const copy = original.map(item => ({...item})); // 各オブジェクトもコピー
copy[0].name = 'Charlie';
console.log(original[0].name); // 'Alice' - 元の配列は変更されない
```

### 🪤 4. forEachでの配列変更

```javascript
// ❌ forEachの中で元の配列を変更
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  if (num % 2 === 0) {
    numbers.splice(index, 1); // インデックスがずれてバグの原因に
  }
});

// ✅ filterを使用
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(num => num % 2 !== 0);
```

---

## 注意点とベストプラクティス

### ✅ 推奨される書き方

1. **関数型プログラミングの採用**
   ```javascript
   // ✅ 非破壊的メソッドをチェーンする
   const result = data
     .filter(item => item.active)
     .map(item => item.value)
     .sort((a, b) => a - b);
   ```

2. **意図を明確にする**
   ```javascript
   // ✅ 元の配列を変更したい場合は明示的に
   function addItemToArray(array, item) {
     array.push(item); // 明確に破壊的操作であることを示す
     return array;
   }
   
   // ✅ 新しい配列を返す場合も明示的に
   function addItemToArrayImmutable(array, item) {
     return [...array, item]; // 新しい配列を返すことを明示
   }
   ```

3. **constの活用**
   ```javascript
   // ✅ constで意図しない変更を防ぐ
   const numbers = [1, 2, 3];
   // numbers = [4, 5, 6]; // エラー：再代入不可
   // numbers.push(4); // ただし、要素の追加は可能（配列自体の参照は変わらない）
   ```

### ⚠️ 避けるべき書き方

1. **破壊的メソッドの予期しない使用**
   ```javascript
   // ❌ 関数内で引数の配列を変更
   function processArray(arr) {
     arr.sort(); // 呼び出し元の配列が変更される
     return arr;
   }
   ```

2. **メソッドチェーンでの混在**
   ```javascript
   // ❌ 破壊的と非破壊的メソッドの混在
   const result = data
     .sort() // 破壊的：元の配列が変更される
     .map(item => item.value); // 非破壊的
   ```

---

## 実践例

### 🎯 状態管理での使用例（React風）

```javascript
// ❌ 状態を直接変更（Reactでは禁止）
function TodoList({ todos, setTodos }) {
  const addTodo = (text) => {
    todos.push({ id: Date.now(), text, completed: false });
    setTodos(todos); // 同じ参照のため再レンダリングされない
  };
}

// ✅ 新しい配列を作成
function TodoList({ todos, setTodos }) {
  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];
    setTodos(newTodos); // 新しい参照のため再レンダリングされる
  };
}
```

### 🎯 データ変換パイプライン

```javascript
// ✅ 非破壊的メソッドを使ったデータ処理
function processUserData(users) {
  return users
    .filter(user => user.active) // アクティブユーザーのみ
    .map(user => ({ // 必要なプロパティのみ抽出
      id: user.id,
      name: user.name,
      email: user.email.toLowerCase()
    }))
    .sort((a, b) => a.name.localeCompare(b.name)); // 名前でソート
}

// 元のusers配列は変更されない
const originalUsers = [...]; // 元のデータ
const processedUsers = processUserData(originalUsers);
```

### 🎯 配列の更新操作

```javascript
// ✅ 非破壊的な配列操作ヘルパー関数
const arrayUtils = {
  // 要素の追加
  add: (array, item) => [...array, item],
  
  // 要素の削除
  remove: (array, index) => [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ],
  
  // 要素の更新
  update: (array, index, newItem) => [
    ...array.slice(0, index),
    newItem,
    ...array.slice(index + 1)
  ],
  
  // 要素の挿入
  insert: (array, index, item) => [
    ...array.slice(0, index),
    item,
    ...array.slice(index)
  ]
};

// 使用例
const numbers = [1, 2, 3, 4, 5];
const newNumbers = arrayUtils.update(numbers, 2, 10);
console.log(numbers); // [1, 2, 3, 4, 5] - 元の配列は変更されない
console.log(newNumbers); // [1, 2, 10, 4, 5] - 新しい配列
```

---

## まとめ

- **破壊的メソッド**：パフォーマンスは良いが、予期しない副作用の原因となりやすい
- **非破壊的メソッド**：関数型プログラミングに適合し、予測可能なコードを書きやすい
- **現代的な開発**では非破壊的アプローチが推奨される
- **状況に応じて適切な選択**をすることが重要

配列メソッドを使用する際は、そのメソッドが破壊的か非破壊的かを常に意識し、コードの意図を明確にすることで、バグの少ない保守性の高いコードを書くことができます。