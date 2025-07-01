# Day 4: 実践総合演習

## 🎯 学習目標

- これまで学んだ全ての概念を統合して使う
- 実際の Web アプリケーションで使われるパターンを理解する
- デバッグとエラーハンドリングの重要性を学ぶ

## 🔗 これまでの学習内容の統合

### Day 2 で学んだこと

- ✅ オブジェクト型とメモリ（スタック・ヒープ）
- ✅ truthy/falsy の判定

### Day 3 で学んだこと

- ✅ 比較演算子（=== vs ==）
- ✅ オブジェクト配列の操作

### Day 4 で統合すること

- 🎯 これらの知識を組み合わせた実践的なコード
- 🎯 よくあるバグパターンとその回避方法
- 🎯 実務で使える汎用的な関数

## 💼 実践例 1: ユーザー管理システム

### データ構造

```javascript
const users = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    age: 25,
    department: '営業',
    active: true,
    loginCount: 0,
  },
  {
    id: 2,
    name: '佐藤花子',
    email: '', // 空文字列に注意
    age: 30,
    department: '開発',
    active: true,
    loginCount: 15,
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: null, // null に注意
    age: 35,
    department: '営業',
    active: false,
    loginCount: null, // null に注意
  },
];
```

### 実践的な関数例

#### 1. 安全なユーザー検索関数

```javascript
// 悪い例：エラーが発生する可能性
function findUserBad(id) {
  return users.find((user) => user.id === id).name;
}

// 良い例：安全なエラーハンドリング
function findUserSafe(id) {
  // 型チェック（Day 3の知識）
  if (typeof id !== 'number') {
    throw new Error('IDは数値である必要があります');
  }

  const user = users.find((user) => user.id === id);

  // truthy/falsy判定（Day 2の知識）
  if (!user) {
    return null;
  }

  return user;
}

// 使用例
const user = findUserSafe(2);
console.log(user?.name ?? '不明'); // オプショナルチェーニング
```

#### 2. 有効なメールアドレスを持つユーザー抽出

```javascript
function getUsersWithValidEmail() {
  return users.filter((user) => {
    // falsy値のチェック（Day 2の知識）
    if (!user.email) {
      return false;
    }

    // 厳密な比較（Day 3の知識）
    if (user.email === '') {
      return false;
    }

    // 簡単なメールアドレス形式チェック
    return user.email.includes('@');
  });
}

// より簡潔な書き方
function getUsersWithValidEmailConcise() {
  return users.filter(
    (user) =>
      user.email && // truthy チェック
      user.email !== '' && // 空文字列チェック
      user.email.includes('@') // 形式チェック
  );
}
```

#### 3. ログイン回数の統計

```javascript
function getLoginStats() {
  const validUsers = users.filter((user) => {
    // loginCount が null でない場合のみ
    return user.loginCount !== null && user.loginCount !== undefined;
  });

  if (validUsers.length === 0) {
    return { total: 0, average: 0, max: 0, min: 0 };
  }

  const loginCounts = validUsers.map((user) => user.loginCount);

  return {
    total: loginCounts.reduce((sum, count) => sum + count, 0),
    average:
      loginCounts.reduce((sum, count) => sum + count, 0) / loginCounts.length,
    max: Math.max(...loginCounts),
    min: Math.min(...loginCounts),
  };
}
```

## 🛒 実践例 2: ショッピングカート

### データ構造

```javascript
const cart = [
  { id: 1, name: 'ノートPC', price: 80000, quantity: 1, discount: null },
  { id: 2, name: 'マウス', price: 2000, quantity: 2, discount: 0.1 },
  { id: 3, name: 'キーボード', price: 5000, quantity: 1, discount: 0 },
];
```

### 実践的な関数例

#### 1. 安全な価格計算

```javascript
function calculateItemTotal(item) {
  // 必須プロパティの存在チェック
  if (
    !item ||
    typeof item.price !== 'number' ||
    typeof item.quantity !== 'number'
  ) {
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
function validateCart(cart) {
  const errors = [];

  if (!Array.isArray(cart)) {
    return ['カートが配列ではありません'];
  }

  cart.forEach((item, index) => {
    if (!item) {
      errors.push(`商品 ${index + 1}: 商品データが null/undefined です`);
      return;
    }

    if (!item.name || item.name === '') {
      errors.push(`商品 ${index + 1}: 商品名が無効です`);
    }

    if (typeof item.price !== 'number' || item.price <= 0) {
      errors.push(`商品 ${index + 1}: 価格が無効です`);
    }

    if (typeof item.quantity !== 'number' || item.quantity <= 0) {
      errors.push(`商品 ${index + 1}: 数量が無効です`);
    }
  });

  return errors;
}
```

## 🔧 実践例 3: データ変換とエラーハンドリング

### CSV データの変換

```javascript
// 危険な例：エラーハンドリングなし
function parseCSVRowBad(csvRow) {
  const [name, age, email] = csvRow.split(',');
  return {
    name: name,
    age: parseInt(age),
    email: email,
  };
}

// 安全な例：エラーハンドリングあり
function parseCSVRowSafe(csvRow) {
  if (!csvRow || typeof csvRow !== 'string') {
    throw new Error('無効なCSV行です');
  }

  const parts = csvRow.split(',');
  if (parts.length !== 3) {
    throw new Error('CSV行の形式が正しくありません（3列必要）');
  }

  const [name, ageStr, email] = parts;

  // 名前の検証
  if (!name || name.trim() === '') {
    throw new Error('名前が空です');
  }

  // 年齢の検証
  const age = parseInt(ageStr, 10);
  if (isNaN(age) || age < 0 || age > 150) {
    throw new Error('年齢が無効です');
  }

  // メールの検証
  if (!email || email.trim() === '' || !email.includes('@')) {
    throw new Error('メールアドレスが無効です');
  }

  return {
    name: name.trim(),
    age: age,
    email: email.trim(),
  };
}
```

## 🚀 高度な例：検索・フィルタリング

### 複雑な検索条件

```javascript
function advancedUserSearch(users, criteria) {
  return users.filter((user) => {
    // 名前での部分一致検索
    if (criteria.name) {
      if (!user.name.toLowerCase().includes(criteria.name.toLowerCase())) {
        return false;
      }
    }

    // 年齢範囲
    if (criteria.minAge !== undefined) {
      if (user.age < criteria.minAge) {
        return false;
      }
    }

    if (criteria.maxAge !== undefined) {
      if (user.age > criteria.maxAge) {
        return false;
      }
    }

    // 部署
    if (criteria.departments && criteria.departments.length > 0) {
      if (!criteria.departments.includes(user.department)) {
        return false;
      }
    }

    // アクティブ状態
    if (criteria.active !== undefined) {
      if (user.active !== criteria.active) {
        return false;
      }
    }

    return true;
  });
}

// 使用例
const searchResults = advancedUserSearch(users, {
  name: '田',
  minAge: 20,
  maxAge: 40,
  departments: ['営業', '開発'],
  active: true,
});
```

## 📊 実践演習

以下のファイルを作成して演習を行ってください：

### `exercises/day4-exercises/practical-exercises.js`

```javascript
// Day 4 実践総合演習

console.log('=== Day 4 実践総合演習 ===');

// 演習データ
const employees = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@company.com',
    age: 25,
    department: '営業',
    salary: 300000,
    active: true,
    joinDate: '2023-01-15',
    skills: ['営業', 'プレゼン'],
  },
  {
    id: 2,
    name: '佐藤花子',
    email: '',
    age: 30,
    department: '開発',
    salary: 400000,
    active: true,
    joinDate: '2022-03-01',
    skills: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: null,
    age: 35,
    department: '営業',
    salary: null,
    active: false,
    joinDate: '2021-06-01',
    skills: ['営業', '管理'],
  },
  {
    id: 4,
    name: '高橋美穂',
    email: 'takahashi@company.com',
    age: 28,
    department: '人事',
    salary: 320000,
    active: true,
    joinDate: '2023-09-01',
    skills: ['採用', '労務'],
  },
];

// 演習1: 安全なユーザー管理（社員データベースシステム）
console.log('\n=== 演習1: 安全なユーザー管理 ===');

// TODO: 以下の関数を実装してください

// 1-1. 社員IDによる安全な検索
function findEmployeeSafely(employees, id) {
  // TODO: 以下の仕様で実装してください：
  // - idが数値でない場合はエラーを投げる
  // - 社員が見つからない場合はnullを返す
  // - 見つかった場合は社員オブジェクトを返す
}

// 1-2. 有効なメールアドレスを持つ社員のみ抽出
function getEmployeesWithValidEmail(employees) {
  // TODO: 以下の条件で実装してください：
  // - emailがnull/undefinedでない
  // - 空文字列でない
  // - @を含む
}

// 1-3. 部署別統計の計算
function calculateDepartmentStats(employees) {
  // TODO: 部署別に以下の統計を計算してください：
  // - 人数
  // - 平均年齢
  // - 平均給与（nullは除外）
  // 戻り値: { "営業": { count: 2, avgAge: 30, avgSalary: 300000 }, ... }
}

// テスト実行
console.log('安全な検索テスト:');
console.log('ID=1:', findEmployeeSafely(employees, 1));
console.log('ID=999:', findEmployeeSafely(employees, 999));
try {
  console.log("ID='abc':", findEmployeeSafely(employees, 'abc'));
} catch (error) {
  console.log('エラー:', error.message);
}

console.log('有効メール:', getEmployeesWithValidEmail(employees));
console.log('部署別統計:', calculateDepartmentStats(employees));
```

---

## 演習 2: ショッピングカート機能

```javascript
// 演習2: ショッピングカート機能
console.log('\n=== 演習2: ショッピングカート機能 ===');

const cart = [
  { id: 1, name: 'ノートPC', price: 80000, quantity: 1, discount: 0.05 },
  { id: 2, name: 'マウス', price: 2000, quantity: 2, discount: 0 },
  { id: 3, name: 'キーボード', price: 5000, quantity: 1, discount: null },
  { id: 4, name: '', price: 1000, quantity: 1, discount: 0.1 }, // 無効なデータ
  { id: 5, name: 'モニター', price: -500, quantity: 1, discount: 0.2 }, // 無効なデータ
];

// TODO: 以下の関数を実装してください

// 2-1. 商品データの検証
function validateCartItem(item) {
  // TODO: 商品データの妥当性をチェックし、エラーの配列を返してください
  // チェック項目:
  // - nameが空でない
  // - priceが正の数値
  // - quantityが正の整数
  // - discountがnull または 0以上1以下の数値
  const errors = [];
  // ここに実装
  return errors;
}

// 2-2. 安全な商品合計金額計算
function calculateItemTotal(item) {
  // TODO: 以下の仕様で実装してください：
  // - データが無効な場合は例外を投げる
  // - 小計 = price × quantity
  // - 割引適用: discount が有効な場合のみ適用
  // - 結果を返す
}

// 2-3. カート全体の合計金額計算
function calculateCartTotal(cart) {
  // TODO: 以下の仕様で実装してください：
  // - 各商品の合計を計算
  // - 無効な商品はスキップ（警告ログ出力）
  // - 有効な商品のみの合計を返す
}

// 2-4. カート内容の詳細レポート
function generateCartReport(cart) {
  // TODO: 以下の情報を含むレポートオブジェクトを返してください：
  // - validItems: 有効な商品の配列
  // - invalidItems: 無効な商品の配列（エラー情報付き）
  // - totalAmount: 有効な商品の合計金額
  // - totalQuantity: 有効な商品の合計数量
  // - discountAmount: 割引総額
}

// テスト実行
console.log('カートレポート:', generateCartReport(cart));
```

---

## 演習 3: データ変換とエラーハンドリング

```javascript
// 演習3: データ変換とエラーハンドリング
console.log('\n=== 演習3: データ変換とエラーハンドリング ===');

const csvData = [
  '田中太郎,25,tanaka@test.com,営業',
  '佐藤花子,30,sato@test.com,開発',
  '鈴木一郎,,suzuki@test.com,営業', // 年齢が空
  '高橋美穂,28,,人事', // メールが空
  '渡辺,abc,watanabe@test.com,総務', // 年齢が無効
  '', // 空行
  '山田太郎,35,yamada@invalid,開発', // 無効なメール
];

// TODO: 以下の関数を実装してください

// 3-1. CSV行の解析（安全版）
function parseCSVRowSafe(csvRow) {
  // TODO: 以下の仕様で実装してください：
  // - 入力の妥当性チェック
  // - 4つのフィールド（名前,年齢,メール,部署）に分割
  // - 各フィールドの妥当性チェック
  // - 成功時は { name, age, email, department } を返す
  // - 失敗時は例外を投げる
}

// 3-2. CSV データの一括変換
function convertCSVData(csvLines) {
  // TODO: 以下の仕様で実装してください：
  // - 各行をparseCSVRowSafeで変換
  // - 成功したものと失敗したものを分ける
  // - 戻り値: {
  //     validEmployees: [...],
  //     errors: [{ line: "...", error: "..." }]
  //   }
}

// 3-3. データクレンジング
function cleanEmployeeData(employees) {
  // TODO: 以下の処理を実装してください：
  // - 名前の前後空白を除去
  // - メールアドレスを小文字に変換
  // - 重複する社員（名前とメール）を除去
  // - 結果の配列を返す
}

// テスト実行
const conversionResult = convertCSVData(csvData);
console.log('変換結果:', conversionResult);
console.log(
  'クリーンアップ後:',
  cleanEmployeeData(conversionResult.validEmployees)
);
```

---

## 演習 4: 高度な検索・フィルタリング

```javascript
// 演習4: 高度な検索・フィルタリング
console.log('\n=== 演習4: 高度な検索・フィルタリング ===');

// TODO: 以下の関数を実装してください

// 4-1. 高度な社員検索
function advancedEmployeeSearch(employees, criteria) {
  // TODO: 以下の検索条件を実装してください：
  // criteria = {
  //   name?: string,           // 名前の部分一致
  //   departments?: string[],  // 部署のいずれかに一致
  //   minAge?: number,         // 最小年齢
  //   maxAge?: number,         // 最大年齢
  //   minSalary?: number,      // 最小給与
  //   maxSalary?: number,      // 最大給与
  //   skills?: string[],       // スキルのいずれかを持つ
  //   active?: boolean,        // アクティブ状態
  //   hasEmail?: boolean       // 有効なメールアドレスを持つ
  // }
}

// 4-2. 社員のソート
function sortEmployees(employees, sortBy, order = 'asc') {
  // TODO: 以下のソート条件を実装してください：
  // sortBy: 'name' | 'age' | 'salary' | 'joinDate'
  // order: 'asc' | 'desc'
  // - 元の配列は変更しない
  // - nullやundefinedの値は最後に配置
}

// 4-3. ページネーション機能
function paginateResults(results, page, itemsPerPage) {
  // TODO: 以下の仕様で実装してください：
  // - page: 1から始まる
  // - itemsPerPage: 1ページあたりの件数
  // 戻り値: {
  //   items: [...],           // 該当ページのアイテム
  //   currentPage: number,    // 現在のページ
  //   totalPages: number,     // 総ページ数
  //   totalItems: number,     // 総アイテム数
  //   hasNext: boolean,       // 次のページがあるか
  //   hasPrev: boolean        // 前のページがあるか
  // }
}

// 4-4. 検索結果の統計
function generateSearchStats(employees, searchResults) {
  // TODO: 以下の統計を生成してください：
  // - totalFound: 検索結果の件数
  // - percentage: 全体に対する割合
  // - departmentBreakdown: 部署別の件数
  // - ageDistribution: 年代別の分布（20代、30代など）
}

// テスト実行
console.log('高度な検索テスト:');
const searchCriteria = {
  departments: ['営業', '開発'],
  minAge: 25,
  hasEmail: true,
  active: true,
};
const searchResults = advancedEmployeeSearch(employees, searchCriteria);
console.log('検索結果:', searchResults);

const sortedResults = sortEmployees(searchResults, 'age', 'desc');
console.log('ソート結果:', sortedResults);

const paginatedResults = paginateResults(sortedResults, 1, 2);
console.log('ページネーション:', paginatedResults);

const stats = generateSearchStats(employees, searchResults);
console.log('検索統計:', stats);

console.log('\n=== Day 4 実践総合演習完了 ===');
```

## 🎯 演習のポイント

### チェックポイント

1. **型チェック**: 引数の型を必ず確認する
2. **null/undefined チェック**: falsy 値の安全な処理
3. **エラーハンドリング**: 適切な例外処理とログ出力
4. **データ妥当性**: 入力データの検証
5. **メモリ効率**: 元の配列を変更しない
6. **パフォーマンス**: 不要な処理を避ける

### 実装のヒント

- `Array.isArray()` で配列チェック
- `typeof` で型チェック
- `Number.isNaN()` で NaN チェック
- `?.` でオプショナルチェーニング
- `??` で null 合体演算子

---

これらの演習を通じて、実際の Web アプリケーション開発で必要な堅牢なコードの書き方を身につけましょう！
