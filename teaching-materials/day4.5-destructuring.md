# Day 4.5: 分割代入（Destructuring）

## 🎯 学習目標
- 分割代入の基本的な書き方を理解する
- オブジェクトの分割代入をマスターする
- 配列の分割代入を使えるようになる
- 実務で使える分割代入のパターンを学ぶ
- 分割代入のメリットと注意点を理解する

## 📖 分割代入とは何か？

**分割代入**は、配列やオブジェクトから値を取り出して、複数の変数に一度に代入する機能です。ES6（ES2015）で導入されました。

### 従来の書き方との比較

```javascript
// 従来の書き方
const user = { name: "田中", age: 25, email: "tanaka@test.com" };
const name = user.name;
const age = user.age;
const email = user.email;

// 分割代入を使った書き方
const { name, age, email } = user;

console.log(name);  // "田中"
console.log(age);   // 25
console.log(email); // "tanaka@test.com"
```

## 📝 オブジェクトの分割代入

### 基本的な使い方

```javascript
const user = {
  name: "田中太郎",
  age: 28,
  department: "開発部",
  email: "tanaka@company.com"
};

// 基本的な分割代入
const { name, age } = user;
console.log(name); // "田中太郎"
console.log(age);  // 28

// 残りのプロパティも取得
const { department, email } = user;
console.log(department); // "開発部"
console.log(email);      // "tanaka@company.com"
```

### 変数名を変更する

```javascript
const user = { name: "田中", age: 25 };

// プロパティ名と異なる変数名を使用
const { name: userName, age: userAge } = user;
console.log(userName); // "田中"
console.log(userAge);  // 25

// nameやageは未定義
// console.log(name); // ReferenceError
```

### デフォルト値を設定する

```javascript
const user = { name: "田中" };

// デフォルト値を設定
const { name, age = 20, email = "未設定" } = user;
console.log(name);  // "田中"
console.log(age);   // 20 (デフォルト値)
console.log(email); // "未設定" (デフォルト値)
```

### ネストしたオブジェクトの分割代入

```javascript
const user = {
  name: "田中",
  profile: {
    age: 25,
    address: {
      city: "東京",
      country: "日本"
    }
  }
};

// ネストしたオブジェクトの分割代入
const { 
  name, 
  profile: { 
    age, 
    address: { city, country } 
  } 
} = user;

console.log(name);    // "田中"
console.log(age);     // 25
console.log(city);    // "東京"
console.log(country); // "日本"

// 注意: profileやaddressは変数として定義されない
// console.log(profile); // ReferenceError
```

## 🔧 配列の分割代入

### 基本的な使い方

```javascript
const fruits = ["りんご", "バナナ", "オレンジ"];

// 基本的な分割代入
const [first, second, third] = fruits;
console.log(first);  // "りんご"
console.log(second); // "バナナ"
console.log(third);  // "オレンジ"

// 一部の要素をスキップ
const [, , third] = fruits;
console.log(third); // "オレンジ"
```

### デフォルト値と残りの要素

```javascript
const numbers = [1, 2];

// デフォルト値を設定
const [a, b, c = 3] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3 (デフォルト値)

// 残りの要素を取得（レスト演算子）
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
```

### 値の交換

```javascript
let a = 1;
let b = 2;

// 従来の書き方
let temp = a;
a = b;
b = temp;

// 分割代入を使った書き方
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

## 🚀 実務でよく使うパターン

### 1. 関数の引数で分割代入

```javascript
// オブジェクトの分割代入
function createUser({ name, age, email = "未設定" }) {
  return {
    id: Date.now(),
    name,
    age,
    email,
    active: true
  };
}

const newUser = createUser({ name: "田中", age: 25 });
console.log(newUser);
// { id: 1640995200000, name: "田中", age: 25, email: "未設定", active: true }

// 配列の分割代入
function calculateDistance([x1, y1], [x2, y2]) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const distance = calculateDistance([0, 0], [3, 4]);
console.log(distance); // 5
```

### 2. API レスポンスの処理

```javascript
// API レスポンスの想定
const apiResponse = {
  status: "success",
  data: {
    users: [
      { id: 1, name: "田中", email: "tanaka@test.com" },
      { id: 2, name: "佐藤", email: "sato@test.com" }
    ],
    totalCount: 2
  },
  message: "データ取得成功"
};

// 分割代入でデータを取得
const { 
  status, 
  data: { users, totalCount }, 
  message 
} = apiResponse;

console.log(status);     // "success"
console.log(users);      // [{ id: 1, name: "田中", email: "tanaka@test.com" }, ...]
console.log(totalCount); // 2
console.log(message);    // "データ取得成功"
```

### 3. 配列メソッドとの組み合わせ

```javascript
const users = [
  { name: "田中", age: 25, department: "開発部" },
  { name: "佐藤", age: 30, department: "営業部" },
  { name: "鈴木", age: 28, department: "開発部" }
];

// map with 分割代入
const userSummaries = users.map(({ name, age }) => `${name} (${age}歳)`);
console.log(userSummaries);
// ["田中 (25歳)", "佐藤 (30歳)", "鈴木 (28歳)"]

// filter with 分割代入
const developers = users.filter(({ department }) => department === "開発部");
console.log(developers);
// [{ name: "田中", age: 25, department: "開発部" }, { name: "鈴木", age: 28, department: "開発部" }]
```

### 4. React コンポーネントでの使用（参考）

```javascript
// React コンポーネントでよく使用されるパターン
function UserProfile({ user: { name, age, email } }) {
  return `
    <div>
      <h2>${name}</h2>
      <p>年齢: ${age}</p>
      <p>メール: ${email}</p>
    </div>
  `;
}

// 使用例
const user = { name: "田中", age: 25, email: "tanaka@test.com" };
const profile = UserProfile({ user });
```

## ⚠️ 注意点とエラーハンドリング

### 1. undefinedやnullの分割代入

```javascript
// ❌ エラーになる例
const data = null;
// const { name } = data; // TypeError: Cannot destructure property 'name' of 'null'

// ✅ 安全な書き方
const safeData = data || {};
const { name = "未設定" } = safeData;
console.log(name); // "未設定"

// または
const { name: safeName = "未設定" } = data || {};
console.log(safeName); // "未設定"
```

### 2. ネストしたオブジェクトの安全な分割代入

```javascript
const user = {
  name: "田中",
  profile: null
};

// ❌ エラーになる例
// const { profile: { age } } = user; // TypeError

// ✅ 安全な書き方
const { profile = {} } = user;
const { age = 0 } = profile;
console.log(age); // 0

// または
const { profile: { age = 0 } = {} } = user;
console.log(age); // 0
```

### 3. 配列の長さが足りない場合

```javascript
const colors = ["red"];

// 長さが足りない場合はundefinedになる
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // undefined
console.log(third);  // undefined

// デフォルト値で対応
const [a, b = "green", c = "blue"] = colors;
console.log(a); // "red"
console.log(b); // "green"
console.log(c); // "blue"
```

## 🎯 実践的な使用例

### 1. フォームデータの処理

```javascript
function validateAndProcessForm(formData) {
  const { 
    name = "", 
    email = "", 
    age = 0, 
    terms = false 
  } = formData;
  
  const errors = [];
  
  if (!name.trim()) errors.push("名前は必須です");
  if (!email.includes("@")) errors.push("有効なメールアドレスを入力してください");
  if (age < 18) errors.push("18歳以上である必要があります");
  if (!terms) errors.push("利用規約に同意してください");
  
  return {
    valid: errors.length === 0,
    errors,
    data: { name: name.trim(), email, age, terms }
  };
}

// 使用例
const formData = {
  name: "田中太郎",
  email: "tanaka@test.com",
  age: 25,
  terms: true
};

const result = validateAndProcessForm(formData);
console.log(result);
```

### 2. 設定オブジェクトの処理

```javascript
function createApiClient(config) {
  const {
    baseURL = "https://api.example.com",
    timeout = 5000,
    headers = {},
    auth: { username = "", password = "" } = {}
  } = config;
  
  return {
    baseURL,
    timeout,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    auth: username && password ? { username, password } : null
  };
}

// 使用例
const apiClient = createApiClient({
  baseURL: "https://myapi.com",
  headers: { "X-API-Key": "secret" },
  auth: { username: "user", password: "pass" }
});
```

### 3. 複雑なデータ構造の処理

```javascript
const salesData = {
  quarter: "Q1",
  regions: [
    {
      name: "関東",
      sales: [
        { product: "商品A", amount: 100000 },
        { product: "商品B", amount: 150000 }
      ]
    },
    {
      name: "関西",
      sales: [
        { product: "商品A", amount: 80000 },
        { product: "商品B", amount: 120000 }
      ]
    }
  ]
};

function analyzeSalesData(data) {
  const { quarter, regions } = data;
  
  const analysis = regions.map(({ name, sales }) => {
    const totalSales = sales.reduce((sum, { amount }) => sum + amount, 0);
    const productBreakdown = sales.map(({ product, amount }) => ({
      product,
      amount,
      percentage: Math.round((amount / totalSales) * 100)
    }));
    
    return {
      region: name,
      totalSales,
      productBreakdown
    };
  });
  
  return { quarter, analysis };
}

const result = analyzeSalesData(salesData);
console.log(result);
```

## 📊 まとめ

### 分割代入のメリット
1. **簡潔なコード**: 複数の変数を一度に定義できる
2. **可読性**: 必要な値が明確になる
3. **デフォルト値**: 安全にデフォルト値を設定できる
4. **関数引数**: 必要なプロパティのみを受け取れる

### 使用する場面
- API レスポンスの処理
- 関数の引数定義
- 複雑なオブジェクトからの値取得
- 配列の要素の取得

### 注意点
- nullやundefinedの分割代入はエラーになる
- ネストが深い場合は慎重に処理する
- 分割代入で定義した変数のスコープを理解する

### 次のステップ
Day 5では、分割代入とスプレッド演算子を組み合わせた、より高度なデータ操作パターンを学びます。 