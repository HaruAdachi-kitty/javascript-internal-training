# Day 3: オブジェクト配列の操作

## 🎯 学習目標
- オブジェクト配列の基本操作を習得する
- `map`, `filter`, `find`, `forEach` の使い分けを理解する
- 実務でよく使うパターンを習得する
- メソッドチェーンの効果的な使い方を学ぶ

## 📊 サンプルデータ

```javascript
const users = [
  { id: 1, name: "田中太郎", age: 25, department: "営業", active: true },
  { id: 2, name: "佐藤花子", age: 30, department: "開発", active: true },
  { id: 3, name: "鈴木一郎", age: 35, department: "営業", active: false },
  { id: 4, name: "高橋美穂", age: 28, department: "人事", active: true },
  { id: 5, name: "渡辺健太", age: 32, department: "開発", active: true }
];

const products = [
  { id: 1, name: "ノートPC", price: 80000, category: "電子機器", inStock: true },
  { id: 2, name: "マウス", price: 2000, category: "電子機器", inStock: true },
  { id: 3, name: "デスク", price: 15000, category: "家具", inStock: false },
  { id: 4, name: "チェア", price: 25000, category: "家具", inStock: true }
];
```

## 🔍 配列メソッドの基本

### 1. forEach() - 全要素に対して処理実行
**戻り値なし、副作用のための処理**

```javascript
// 基本の使い方
users.forEach(user => {
  console.log(`${user.name}さん（${user.age}歳）`);
});

// インデックスも取得
users.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name}`);
});

// 注意：forEach は新しい配列を返さない
const result = users.forEach(user => user.name); // undefined
```

### 2. map() - 各要素を変換して新しい配列を作成
**必ず新しい配列を返す**

```javascript
// 名前だけの配列を作成
const names = users.map(user => user.name);
console.log(names); // ["田中太郎", "佐藤花子", "鈴木一郎", "高橋美穂", "渡辺健太"]

// 新しいプロパティを追加
const usersWithInfo = users.map(user => ({
  ...user,  // 既存のプロパティをコピー
  info: `${user.name}（${user.department}部）`,
  isYoung: user.age < 30
}));

// 特定のプロパティのみ抽出
const userSummary = users.map(user => ({
  id: user.id,
  name: user.name,
  department: user.department
}));
```

### 3. filter() - 条件に合う要素のみで新しい配列を作成
**条件に合致する要素のみを含む新しい配列を返す**

```javascript
// アクティブなユーザーのみ
const activeUsers = users.filter(user => user.active);

// 30歳以上のユーザー
const olderUsers = users.filter(user => user.age >= 30);

// 開発部のユーザー
const developers = users.filter(user => user.department === "開発");

// 複数条件
const youngDevelopers = users.filter(user => 
  user.age < 30 && user.department === "開発"
);

// 在庫のある商品のみ
const availableProducts = products.filter(product => product.inStock);
```

### 4. find() - 条件に合う最初の要素を取得
**1つの要素または undefined を返す**

```javascript
// IDで特定のユーザーを検索
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "佐藤花子", ... }

// 条件に合う最初のユーザー
const firstDeveloper = users.find(user => user.department === "開発");

// 見つからない場合
const notFound = users.find(user => user.age > 100);
console.log(notFound); // undefined

// findとfilterの違い
const foundUser = users.find(user => user.department === "営業");    // 1人目のみ
const filteredUsers = users.filter(user => user.department === "営業"); // 全員
```

## 🎭 メソッドチェーン

### 基本的なチェーン
```javascript
// アクティブな開発者の名前一覧
const activeDeveloperNames = users
  .filter(user => user.active)           // アクティブなユーザーのみ
  .filter(user => user.department === "開発") // 開発部のみ
  .map(user => user.name);               // 名前のみ抽出

console.log(activeDeveloperNames); // ["佐藤花子", "渡辺健太"]
```

### 複雑なチェーン例
```javascript
// 在庫のある電子機器の価格一覧（安い順）
const electronicsPrices = products
  .filter(product => product.inStock)              // 在庫あり
  .filter(product => product.category === "電子機器") // 電子機器
  .map(product => product.price)                   // 価格のみ
  .sort((a, b) => a - b);                         // 昇順ソート

console.log(electronicsPrices); // [2000, 80000]
```

## 📈 実務でよく使うパターン

### 1. データの集計
```javascript
// 部署別の人数をカウント
const departmentCount = users.reduce((acc, user) => {
  acc[user.department] = (acc[user.department] || 0) + 1;
  return acc;
}, {});
console.log(departmentCount); // { "営業": 2, "開発": 2, "人事": 1 }

// 商品の合計金額
const totalPrice = products
  .filter(product => product.inStock)
  .reduce((sum, product) => sum + product.price, 0);
```

### 2. データの変形・整形
```javascript
// ユーザー情報をIDをキーとするオブジェクトに変換
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// プルダウン用のオプション配列作成
const departmentOptions = users
  .map(user => user.department)
  .filter((dept, index, array) => array.indexOf(dept) === index) // 重複除去
  .map(dept => ({ value: dept, label: dept }));
```

### 3. 検索・絞り込み機能
```javascript
// 名前で部分一致検索
function searchUsers(query) {
  return users.filter(user => 
    user.name.includes(query)
  );
}

// 複数条件での絞り込み
function filterUsers(filters) {
  return users.filter(user => {
    if (filters.department && user.department !== filters.department) {
      return false;
    }
    if (filters.minAge && user.age < filters.minAge) {
      return false;
    }
    if (filters.active !== undefined && user.active !== filters.active) {
      return false;
    }
    return true;
  });
}

// 使用例
const result = filterUsers({ 
  department: "開発", 
  minAge: 30, 
  active: true 
});
```

### 4. ソート機能
```javascript
// 年齢順（昇順）
const sortedByAge = [...users].sort((a, b) => a.age - b.age);

// 名前順（五十音順）
const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name, 'ja'));

// 複数条件でのソート（部署 → 年齢順）
const sortedByDeptAndAge = [...users].sort((a, b) => {
  if (a.department !== b.department) {
    return a.department.localeCompare(b.department, 'ja');
  }
  return a.age - b.age;
});
```

## ⚠️ よくある間違いと注意点

### 1. 元配列の変更
```javascript
// ❌ 悪い例：元配列を変更してしまう
users.sort((a, b) => a.age - b.age); // users が変更される

// ✅ 良い例：新しい配列を作成
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
```

### 2. mapとforEachの混同
```javascript
// ❌ 悪い例：mapで副作用処理
users.map(user => console.log(user.name)); // 戻り値を使わない

// ✅ 良い例：forEachで副作用処理
users.forEach(user => console.log(user.name));

// ❌ 悪い例：forEachで配列作成を試みる
let names = [];
users.forEach(user => names.push(user.name)); // 冗長

// ✅ 良い例：mapで配列作成
const names = users.map(user => user.name);
```

### 3. find()の結果チェック
```javascript
// ❌ 危険：結果がundefinedの可能性
const user = users.find(u => u.id === 999);
console.log(user.name); // エラーになる可能性

// ✅ 安全：存在チェック
const user = users.find(u => u.id === 999);
if (user) {
  console.log(user.name);
} else {
  console.log("ユーザーが見つかりません");
}

// ✅ よりモダンな書き方
const userName = users.find(u => u.id === 999)?.name ?? "不明";
```

## 🚀 パフォーマンスの考慮

### 1. 早期リターン
```javascript
// ❌ 非効率：全部処理してからfilter
const result = users
  .map(user => ({ ...user, processed: heavyProcess(user) }))
  .filter(user => user.active);

// ✅ 効率的：先にfilterで絞り込み
const result = users
  .filter(user => user.active)
  .map(user => ({ ...user, processed: heavyProcess(user) }));
```

### 2. findの活用
```javascript
// ❌ 非効率：全要素をチェック
const hasActiveUser = users.filter(user => user.active).length > 0;

// ✅ 効率的：最初の1つが見つかったら終了
const hasActiveUser = users.find(user => user.active) !== undefined;

// ✅ さらに良い：someメソッド
const hasActiveUser = users.some(user => user.active);
```

## 📝 実践演習のヒント

### よくある課題パターン
1. **データの抽出**: 特定の条件のデータを取り出す
2. **データの変換**: 表示用の形式に変換する
3. **データの集計**: 合計、平均、カウントなど
4. **データの検索**: 条件に合うデータを見つける
5. **データのソート**: 並び順を変更する

### デバッグのコツ
```javascript
// メソッドチェーンの途中結果を確認
const result = users
  .filter(user => {
    console.log('filtering:', user.name);
    return user.active;
  })
  .map(user => {
    console.log('mapping:', user.name);
    return user.name;
  });
```

## 📝 チェックポイント
- [ ] `forEach`, `map`, `filter`, `find` の違いを理解している
- [ ] メソッドチェーンを適切に使える
- [ ] 元配列を変更しない方法を知っている
- [ ] パフォーマンスを考慮した処理順序を理解している
- [ ] エラーハンドリング（undefined チェック）ができる
- [ ] 実務でよく使うパターンを習得している 