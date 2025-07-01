# Day 4: 実践総合演習

## 🎯 学習目標
- これまで学んだ全ての概念を統合して使う
- 実際のWebアプリケーションで使われるパターンを理解する
- デバッグとエラーハンドリングの重要性を学ぶ

## 🔗 これまでの学習内容の統合

### Day 2で学んだこと
- ✅ オブジェクト型とメモリ（スタック・ヒープ）
- ✅ truthy/falsy の判定

### Day 3で学んだこと  
- ✅ 比較演算子（=== vs ==）
- ✅ オブジェクト配列の操作

### Day 4で統合すること
- 🎯 これらの知識を組み合わせた実践的なコード
- 🎯 よくあるバグパターンとその回避方法
- 🎯 実務で使える汎用的な関数

## 💼 実践例1: ユーザー管理システム

### データ構造
```javascript
const users = [
  { 
    id: 1, 
    name: "田中太郎", 
    email: "tanaka@example.com", 
    age: 25, 
    department: "営業", 
    active: true,
    loginCount: 0
  },
  { 
    id: 2, 
    name: "佐藤花子", 
    email: "", // 空文字列に注意
    age: 30, 
    department: "開発", 
    active: true,
    loginCount: 15
  },
  { 
    id: 3, 
    name: "鈴木一郎", 
    email: null, // null に注意
    age: 35, 
    department: "営業", 
    active: false,
    loginCount: null // null に注意
  }
];
```

### 実践的な関数例

#### 1. 安全なユーザー検索関数
```javascript
// 悪い例：エラーが発生する可能性
function findUserBad(id) {
  return users.find(user => user.id === id).name;
}

// 良い例：安全なエラーハンドリング
function findUserSafe(id) {
  // 型チェック（Day 3の知識）
  if (typeof id !== 'number') {
    throw new Error('IDは数値である必要があります');
  }
  
  const user = users.find(user => user.id === id);
  
  // truthy/falsy判定（Day 2の知識）
  if (!user) {
    return null;
  }
  
  return user;
}

// 使用例
const user = findUserSafe(2);
console.log(user?.name ?? "不明"); // オプショナルチェーニング
```

#### 2. 有効なメールアドレスを持つユーザー抽出
```javascript
function getUsersWithValidEmail() {
  return users.filter(user => {
    // falsy値のチェック（Day 2の知識）
    if (!user.email) {
      return false;
    }
    
    // 厳密な比較（Day 3の知識）
    if (user.email === "") {
      return false;
    }
    
    // 簡単なメールアドレス形式チェック
    return user.email.includes('@');
  });
}

// より簡潔な書き方
function getUsersWithValidEmailConcise() {
  return users.filter(user => 
    user.email && // truthy チェック
    user.email !== "" && // 空文字列チェック  
    user.email.includes('@') // 形式チェック
  );
}
```

#### 3. ログイン回数の統計
```javascript
function getLoginStats() {
  const validUsers = users.filter(user => {
    // loginCount が null でない場合のみ
    return user.loginCount !== null && user.loginCount !== undefined;
  });
  
  if (validUsers.length === 0) {
    return { total: 0, average: 0, max: 0, min: 0 };
  }
  
  const loginCounts = validUsers.map(user => user.loginCount);
  
  return {
    total: loginCounts.reduce((sum, count) => sum + count, 0),
    average: loginCounts.reduce((sum, count) => sum + count, 0) / loginCounts.length,
    max: Math.max(...loginCounts),
    min: Math.min(...loginCounts)
  };
}
```

## 🛒 実践例2: ショッピングカート

### データ構造
```javascript
const cart = [
  { id: 1, name: "ノートPC", price: 80000, quantity: 1, discount: null },
  { id: 2, name: "マウス", price: 2000, quantity: 2, discount: 0.1 },
  { id: 3, name: "キーボード", price: 5000, quantity: 1, discount: 0 }
];
```

### 実践的な関数例

#### 1. 安全な価格計算
```javascript
function calculateItemTotal(item) {
  // 必須プロパティの存在チェック
  if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
    throw new Error('無効な商品データです');
  }
  
  const subtotal = item.price * item.quantity;
  
  // 割引の適用（null/undefined の安全な処理）
  if (item.discount && item.discount > 0) {
    return subtotal * (1 - item.discount);
  }
  
  return subtotal;
}

function calculateCartTotal() {
  return cart.reduce((total, item) => {
    try {
      return total + calculateItemTotal(item);
    } catch (error) {
      console.warn(`商品${item?.name || '不明'}の計算でエラー:`, error.message);
      return total; // エラーの場合は0として計算続行
    }
  }, 0);
}
```

#### 2. カート内容の検証
```javascript
function validateCart() {
  const errors = [];
  
  cart.forEach((item, index) => {
    // 必須フィールドのチェック
    if (!item.name || item.name === "") {
      errors.push(`${index + 1}番目の商品: 商品名が必要です`);
    }
    
    // 価格の妥当性チェック
    if (typeof item.price !== 'number' || item.price <= 0) {
      errors.push(`${index + 1}番目の商品: 正しい価格が必要です`);
    }
    
    // 数量の妥当性チェック
    if (typeof item.quantity !== 'number' || item.quantity <= 0) {
      errors.push(`${index + 1}番目の商品: 正しい数量が必要です`);
    }
    
    // 割引率の妥当性チェック
    if (item.discount !== null && 
        (typeof item.discount !== 'number' || item.discount < 0 || item.discount > 1)) {
      errors.push(`${index + 1}番目の商品: 割引率は0-1の範囲で設定してください`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}
```

## 🔧 デバッグとエラーハンドリング

### 1. 型安全性の確保
```javascript
function safePropertyAccess(obj, path) {
  // オブジェクトの存在チェック
  if (!obj || typeof obj !== 'object') {
    return undefined;
  }
  
  // パスの配列化
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    // 各段階でのnull/undefinedチェック
    if (current === null || current === undefined) {
      return undefined;
    }
    
    current = current[key];
  }
  
  return current;
}

// 使用例
const user = { profile: { name: "田中" } };
console.log(safePropertyAccess(user, 'profile.name')); // "田中"
console.log(safePropertyAccess(user, 'profile.age'));  // undefined
console.log(safePropertyAccess(null, 'profile.name')); // undefined
```

### 2. 配列操作の安全性
```javascript
function safeArrayOperation(arr, operation) {
  // 配列の妥当性チェック
  if (!Array.isArray(arr)) {
    console.warn('配列ではないデータが渡されました:', arr);
    return [];
  }
  
  if (arr.length === 0) {
    console.info('空の配列が渡されました');
    return [];
  }
  
  try {
    return operation(arr);
  } catch (error) {
    console.error('配列操作でエラーが発生しました:', error.message);
    return [];
  }
}

// 使用例
const result = safeArrayOperation(users, (users) => 
  users
    .filter(user => user.active)
    .map(user => user.name)
);
```

## 🎯 統合演習問題

### 課題: 社員管理システムの機能実装

```javascript
const employees = [
  { id: 1, name: "田中太郎", age: 25, department: "営業", salary: 300000, active: true },
  { id: 2, name: "佐藤花子", age: 30, department: "開発", salary: 400000, active: true },
  { id: 3, name: "鈴木一郎", age: 35, department: "営業", salary: null, active: false },
  { id: 4, name: "", age: 28, department: "人事", salary: 350000, active: true },
  { id: 5, name: "渡辺健太", age: 32, department: "開発", salary: 450000, active: true }
];

// 実装すべき関数（以下は例題）
function getEmployeeStatistics() {
  // 1. アクティブな社員のみを対象
  // 2. 給与がnullでない社員のみを対象  
  // 3. 名前が空でない社員のみを対象
  // 4. 部署別の平均給与を計算
  // 5. 結果を返す
}

function searchEmployees(criteria) {
  // 複数条件での検索機能
  // criteria: { name: "田中", department: "営業", minAge: 25 }
}

function validateEmployeeData(employee) {
  // 社員データの妥当性チェック
  // 必須フィールド、データ型、値の範囲など
}
```

## 📝 チェックポイント

### 理解度確認
- [ ] オブジェクトの参照とコピーの違いを実装で活用できる
- [ ] truthy/falsyを使った安全な条件分岐ができる
- [ ] ===を使った型安全な比較ができる
- [ ] 配列メソッドを組み合わせた複雑な処理ができる
- [ ] エラーハンドリングを含む堅牢なコードが書ける

### 実務スキル
- [ ] null/undefinedの安全な処理ができる
- [ ] データ妥当性の検証ができる
- [ ] デバッグしやすいコードが書ける
- [ ] パフォーマンスを考慮した実装ができる

## 🚀 次のステップ

この研修で学んだ基礎知識をもとに、以下の学習を進めることをお勧めします：

1. **非同期処理**: Promise, async/await
2. **DOM操作**: イベント処理、要素の操作
3. **モジュール**: import/export、コードの分割
4. **エラーハンドリング**: try/catch、カスタムエラー
5. **テスト**: 単体テスト、統合テスト

基礎がしっかりしていれば、これらの発展的な内容もスムーズに習得できるはずです。 