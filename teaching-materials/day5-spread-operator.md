# Day 5: スプレッド演算子（Spread Operator）

## 🎯 学習目標
- スプレッド演算子の基本的な使い方を理解する
- 配列の展開・結合・コピーができるようになる
- オブジェクトの展開・結合・コピーができるようになる
- 関数の引数での使い方を学ぶ
- 実務で使える実践的なパターンを身につける

## 📖 スプレッド演算子とは何か？

**スプレッド演算子（...）**は、配列やオブジェクトを展開（spread）する演算子です。ES6で導入され、データの操作を簡潔に書けるようになりました。

### 基本的な構文

```javascript
// 配列の展開
const arr = [1, 2, 3];
const newArr = [...arr]; // [1, 2, 3]

// オブジェクトの展開
const obj = { name: "田中", age: 25 };
const newObj = { ...obj }; // { name: "田中", age: 25 }
```

## 📝 配列でのスプレッド演算子

### 配列のコピー

```javascript
const original = [1, 2, 3];

// 従来の書き方
const copy1 = original.slice();

// スプレッド演算子を使った書き方
const copy2 = [...original];

console.log(copy2); // [1, 2, 3]
console.log(original === copy2); // false（異なる配列）
```

### 配列の結合

```javascript
const fruits = ["りんご", "バナナ"];
const vegetables = ["人参", "キャベツ"];

// 従来の書き方
const combined1 = fruits.concat(vegetables);

// スプレッド演算子を使った書き方
const combined2 = [...fruits, ...vegetables];

console.log(combined2); // ["りんご", "バナナ", "人参", "キャベツ"]
```

### 配列に要素を追加

```javascript
const numbers = [2, 3, 4];

// 先頭に追加
const withFirst = [1, ...numbers]; // [1, 2, 3, 4]

// 末尾に追加
const withLast = [...numbers, 5]; // [2, 3, 4, 5]

// 中間に追加
const withMiddle = [...numbers.slice(0, 1), 2.5, ...numbers.slice(1)];
// [2, 2.5, 3, 4]
```

## 🔧 オブジェクトでのスプレッド演算子

### オブジェクトのコピー

```javascript
const user = { name: "田中", age: 25 };

// スプレッド演算子を使ったコピー
const userCopy = { ...user };

console.log(userCopy); // { name: "田中", age: 25 }
console.log(user === userCopy); // false（異なるオブジェクト）
```

### オブジェクトの結合

```javascript
const user = { name: "田中", age: 25 };
const profile = { email: "tanaka@test.com", department: "開発部" };

// オブジェクトの結合
const combined = { ...user, ...profile };
console.log(combined);
// { name: "田中", age: 25, email: "tanaka@test.com", department: "開発部" }
```

### プロパティの更新

```javascript
const user = { name: "田中", age: 25, email: "old@test.com" };

// プロパティの更新（元のオブジェクトは変更しない）
const updatedUser = { ...user, age: 26, email: "new@test.com" };

console.log(user); // { name: "田中", age: 25, email: "old@test.com" }
console.log(updatedUser); // { name: "田中", age: 26, email: "new@test.com" }
```

## 🚀 関数での使用

### 関数の引数で使用

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

// 従来の書き方
const result1 = sum.apply(null, numbers);

// スプレッド演算子を使った書き方
const result2 = sum(...numbers);

console.log(result2); // 6
```

### 可変長引数（Rest Parameters）との組み合わせ

```javascript
function logAll(first, ...rest) {
  console.log("最初の値:", first);
  console.log("残りの値:", rest);
}

logAll(1, 2, 3, 4, 5);
// 最初の値: 1
// 残りの値: [2, 3, 4, 5]

// 配列を展開して渡す
const values = [10, 20, 30, 40];
logAll(...values);
// 最初の値: 10
// 残りの値: [20, 30, 40]
```

## 🎯 実務でよく使うパターン

### 1. 配列の操作

```javascript
// 配列から特定の要素を除去
function removeItem(array, itemToRemove) {
  return array.filter(item => item !== itemToRemove);
}

// 配列の先頭や末尾に要素を追加
function addToStart(array, newItem) {
  return [newItem, ...array];
}

function addToEnd(array, newItem) {
  return [...array, newItem];
}

// 配列の特定位置に要素を挿入
function insertAt(array, index, newItem) {
  return [
    ...array.slice(0, index),
    newItem,
    ...array.slice(index)
  ];
}

// 使用例
const fruits = ["りんご", "バナナ", "オレンジ"];
console.log(addToStart(fruits, "イチゴ"));    // ["イチゴ", "りんご", "バナナ", "オレンジ"]
console.log(insertAt(fruits, 1, "メロン"));   // ["りんご", "メロン", "バナナ", "オレンジ"]
```

### 2. オブジェクトの更新

```javascript
// ユーザー情報の更新
function updateUser(user, updates) {
  return { ...user, ...updates };
}

// 深いネストのオブジェクトの更新
function updateUserProfile(user, profileUpdates) {
  return {
    ...user,
    profile: {
      ...user.profile,
      ...profileUpdates
    }
  };
}

// 使用例
const user = {
  id: 1,
  name: "田中",
  profile: {
    age: 25,
    email: "tanaka@test.com"
  }
};

const updatedUser = updateUser(user, { name: "田中太郎" });
const updatedProfile = updateUserProfile(user, { age: 26 });

console.log(updatedUser);
console.log(updatedProfile);
```

### 3. 配列の重複除去

```javascript
// 配列の重複除去
function removeDuplicates(array) {
  return [...new Set(array)];
}

// オブジェクト配列の重複除去（特定のプロパティ基準）
function removeDuplicatesByProperty(array, property) {
  const seen = new Set();
  return array.filter(item => {
    const value = item[property];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

// 使用例
const numbers = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4]

const users = [
  { id: 1, name: "田中" },
  { id: 2, name: "佐藤" },
  { id: 1, name: "田中" } // 重複
];
console.log(removeDuplicatesByProperty(users, 'id'));
// [{ id: 1, name: "田中" }, { id: 2, name: "佐藤" }]
```

### 4. APIデータの処理

```javascript
// API レスポンスに新しいプロパティを追加
function enrichUserData(users, defaultValues = {}) {
  return users.map(user => ({
    ...defaultValues,
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
    updatedAt: new Date().toISOString()
  }));
}

// フォームデータとデフォルト値の結合
function processFormData(formData, defaults) {
  return {
    ...defaults,
    ...formData,
    // 必要に応じて後処理
    name: formData.name?.trim() || defaults.name,
    email: formData.email?.toLowerCase() || defaults.email
  };
}

// 使用例
const apiUsers = [
  { id: 1, firstName: "太郎", lastName: "田中" },
  { id: 2, firstName: "花子", lastName: "佐藤" }
];

const enrichedUsers = enrichUserData(apiUsers, { active: true, role: "user" });
console.log(enrichedUsers);
```

## ⚠️ 注意点と落とし穴

### 1. シャローコピー（浅いコピー）の問題

```javascript
const user = {
  name: "田中",
  profile: {
    age: 25,
    address: { city: "東京" }
  }
};

// シャローコピー
const copied = { ...user };

// ネストしたオブジェクトは参照がコピーされる
copied.profile.age = 26;
console.log(user.profile.age); // 26（元のオブジェクトも変更される）

// 深いコピーが必要な場合
const deepCopied = JSON.parse(JSON.stringify(user));
// または専用のライブラリを使用
```

### 2. パフォーマンスの考慮

```javascript
// 大きな配列の場合は注意
const largeArray = new Array(100000).fill(0);

// 悪い例：毎回新しい配列を作成
function inefficientUpdate(array, index, value) {
  const newArray = [...array];
  newArray[index] = value;
  return newArray;
}

// 良い例：必要な場合のみコピー
function efficientUpdate(array, index, value) {
  if (array[index] === value) {
    return array; // 変更不要の場合は元の配列を返す
  }
  const newArray = [...array];
  newArray[index] = value;
  return newArray;
}
```

### 3. オブジェクトのプロパティ順序

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// プロパティの順序に注意
const merged1 = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
const merged2 = { ...obj2, ...obj1 }; // { c: 3, d: 4, a: 1, b: 2 }

// 同じプロパティ名の場合、後から来るものが優先される
const obj3 = { name: "田中", age: 25 };
const obj4 = { name: "佐藤", email: "sato@test.com" };

const merged = { ...obj3, ...obj4 };
console.log(merged); // { name: "佐藤", age: 25, email: "sato@test.com" }
```

## 🎨 分割代入との組み合わせ

### 配列の分割代入とスプレッド演算子

```javascript
const numbers = [1, 2, 3, 4, 5];

// 最初の要素と残りを分離
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// 最初と最後、中間を分離
const [head, ...middle, tail] = numbers; // エラー！レスト演算子は最後にのみ使用可能

// 正しい書き方
const [firstNum, ...restNums] = numbers;
const lastNum = restNums.pop();
const middleNums = restNums;
```

### オブジェクトの分割代入とスプレッド演算子

```javascript
const user = {
  id: 1,
  name: "田中",
  email: "tanaka@test.com",
  age: 25,
  department: "開発部"
};

// 特定のプロパティを除外して残りを取得
const { id, ...userWithoutId } = user;
console.log(userWithoutId);
// { name: "田中", email: "tanaka@test.com", age: 25, department: "開発部" }

// 複数のプロパティを除外
const { id: userId, department, ...basicInfo } = user;
console.log(basicInfo);
// { name: "田中", email: "tanaka@test.com", age: 25 }
```

## 📊 まとめ

### スプレッド演算子のメリット
1. **簡潔性**: 配列・オブジェクトの操作が簡潔に書ける
2. **不変性**: 元のデータを変更せずに新しいデータを作成
3. **可読性**: 意図が明確になる
4. **組み合わせ**: 分割代入と組み合わせて強力な操作が可能

### 主な使用場面
- データの安全なコピー
- 配列・オブジェクトの結合
- 関数の引数展開
- 状態の更新（React等）

### 注意点
- シャローコピーの制限を理解する
- パフォーマンスを考慮する
- プロパティの順序に注意する

### 次のステップ
ここまでの知識を組み合わせて、実際のアプリケーション開発で使える実践的なパターンを身につけていきましょう。 