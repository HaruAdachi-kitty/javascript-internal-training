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
const user = { name: '田中', age: 25, email: 'tanaka@test.com' };
const name = user.name;
const age = user.age;
const email = user.email;

// 分割代入を使った書き方
const { name, age, email } = user;

console.log(name); // "田中"
console.log(age); // 25
console.log(email); // "tanaka@test.com"
```

## 📝 オブジェクトの分割代入

### 基本的な使い方

```javascript
const user = {
  name: '田中太郎',
  age: 28,
  department: '開発部',
  email: 'tanaka@company.com',
};

// 基本的な分割代入
const { name, age } = user;
console.log(name); // "田中太郎"
console.log(age); // 28

// 残りのプロパティも取得
const { department, email } = user;
console.log(department); // "開発部"
console.log(email); // "tanaka@company.com"
```

### 変数名を変更する

```javascript
const user = { name: '田中', age: 25 };

// プロパティ名と異なる変数名を使用
const { name: userName, age: userAge } = user;
console.log(userName); // "田中"
console.log(userAge); // 25

// nameやageは未定義
// console.log(name); // ReferenceError
```

### デフォルト値を設定する

```javascript
const user = { name: '田中' };

// デフォルト値を設定
const { name, age = 20, email = '未設定' } = user;
console.log(name); // "田中"
console.log(age); // 20 (デフォルト値)
console.log(email); // "未設定" (デフォルト値)
```

### ネストしたオブジェクトの分割代入

```javascript
const user = {
  name: '田中',
  profile: {
    age: 25,
    address: {
      city: '東京',
      country: '日本',
    },
  },
};

// ネストしたオブジェクトの分割代入
const {
  name,
  profile: {
    age,
    address: { city, country },
  },
} = user;

console.log(name); // "田中"
console.log(age); // 25
console.log(city); // "東京"
console.log(country); // "日本"

// 注意: profileやaddressは変数として定義されない
// console.log(profile); // ReferenceError
```

## 🔧 配列の分割代入

### 基本的な使い方

```javascript
const fruits = ['りんご', 'バナナ', 'オレンジ'];

// 基本的な分割代入
const [first, second, third] = fruits;
console.log(first); // "りんご"
console.log(second); // "バナナ"
console.log(third); // "オレンジ"

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
console.log(rest); // [2, 3, 4, 5]
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
function createUser({ name, age, email = '未設定' }) {
  return {
    id: Date.now(),
    name,
    age,
    email,
    active: true,
  };
}

const newUser = createUser({ name: '田中', age: 25 });
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
  status: 'success',
  data: {
    users: [
      { id: 1, name: '田中', email: 'tanaka@test.com' },
      { id: 2, name: '佐藤', email: 'sato@test.com' },
    ],
    meta: {
      total: 2,
      page: 1,
    },
  },
};

// 分割代入でデータを取り出し
const {
  status,
  data: {
    users,
    meta: { total, page },
  },
} = apiResponse;

console.log(status); // "success"
console.log(users); // ユーザー配列
console.log(total); // 2
console.log(page); // 1
```

### 3. 配列メソッドとの組み合わせ

```javascript
const users = [
  { name: '田中', age: 25, department: '営業' },
  { name: '佐藤', age: 30, department: '開発' },
  { name: '鈴木', age: 35, department: '営業' },
];

// map()と分割代入の組み合わせ
const userNames = users.map(({ name }) => name);
console.log(userNames); // ["田中", "佐藤", "鈴木"]

// filter()と分割代入の組み合わせ
const salesUsers = users.filter(({ department }) => department === '営業');
console.log(salesUsers);

// forEach()と分割代入の組み合わせ
users.forEach(({ name, age }) => {
  console.log(`${name}さんは${age}歳です`);
});
```

### 4. 関数の戻り値

```javascript
function getUserInfo(id) {
  // 実際はデータベースから取得
  const user = { id, name: '田中', age: 25 };
  const permissions = ['read', 'write'];
  const lastLogin = '2023-01-15';

  return { user, permissions, lastLogin };
}

// 分割代入で必要な部分のみ取得
const { user, permissions } = getUserInfo(1);
console.log(user); // { id: 1, name: "田中", age: 25 }
console.log(permissions); // ["read", "write"]
```

## ⚠️ 注意点とベストプラクティス

### 1. undefined の処理

```javascript
const user = undefined;

// エラーが発生する
// const { name } = user; // TypeError

// 安全な書き方
const { name } = user || {};
console.log(name); // undefined

// デフォルト値も設定
const { name: userName = '不明' } = user || {};
console.log(userName); // "不明"
```

### 2. 存在しないプロパティ

```javascript
const user = { name: '田中' };

const { name, age, email } = user;
console.log(name); // "田中"
console.log(age); // undefined
console.log(email); // undefined

// デフォルト値を設定
const { name: n, age: a = 0, email: e = '未設定' } = user;
console.log(n); // "田中"
console.log(a); // 0
console.log(e); // "未設定"
```

### 3. 深いネストでの注意

```javascript
const data = {
  user: {
    profile: null,
  },
};

// エラーが発生する
// const { user: { profile: { age } } } = data; // TypeError

// 安全な書き方
const { user } = data || {};
const { profile } = user || {};
const { age } = profile || {};
console.log(age); // undefined
```

## 🔄 レスト演算子との組み合わせ

### オブジェクトでのレスト

```javascript
const user = {
  id: 1,
  name: '田中',
  age: 25,
  email: 'tanaka@test.com',
  department: '開発',
};

// 特定のプロパティを分離し、残りをまとめる
const { id, name, ...otherInfo } = user;
console.log(id); // 1
console.log(name); // "田中"
console.log(otherInfo); // { age: 25, email: "tanaka@test.com", department: "開発" }
```

### 配列でのレスト

```javascript
const numbers = [1, 2, 3, 4, 5];

// 最初の要素と残りを分離
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// 最初と最後を取り出し、中間をまとめる
const [firstNum, ...middle] = numbers;
const lastNum = middle.pop(); // 注意: 元の配列が変更される
console.log(firstNum); // 1
console.log(lastNum); // 5
console.log(middle); // [2, 3, 4]
```

## 📊 実践演習

以下のファイルを作成して演習を行ってください：

### `exercises/day4.5-exercises/destructuring-exercises.js`

```javascript
// Day 4.5 分割代入演習

console.log('=== Day 4.5 分割代入演習 ===');

// 演習データ
const employees = [
  {
    id: 1,
    name: '田中太郎',
    position: {
      title: 'シニアエンジニア',
      department: '開発部',
      level: 'senior',
    },
    contact: {
      email: 'tanaka@company.com',
      phone: '03-1234-5678',
      address: {
        city: '東京',
        country: '日本',
      },
    },
    skills: ['JavaScript', 'React', 'Node.js'],
    projects: [
      { name: 'プロジェクトA', role: 'リーダー' },
      { name: 'プロジェクトB', role: 'メンバー' },
    ],
  },
  {
    id: 2,
    name: '佐藤花子',
    position: {
      title: 'プロダクトマネージャー',
      department: '企画部',
      level: 'manager',
    },
    contact: {
      email: 'sato@company.com',
      phone: '03-2345-6789',
      address: {
        city: '大阪',
        country: '日本',
      },
    },
    skills: ['マーケティング', '企画', 'データ分析'],
    projects: [{ name: 'プロジェクトC', role: 'PM' }],
  },
];

// 演習1: 基本的な分割代入
console.log('\n=== 演習1: 基本的な分割代入 ===');

// TODO: 以下の分割代入を実装してください

// 1-1. 最初の社員の基本情報を取得
// const { /* ここに実装 */ } = employees[0];
// console.log('名前:', name);
// console.log('ID:', id);

// 1-2. 最初の社員の職位情報を取得（変数名を変更）
// const { position: { /* ここに実装 */ } } = employees[0];
// console.log('役職:', jobTitle);
// console.log('部署:', dept);

// 1-3. デフォルト値を使った分割代入
// const { /* ここに実装 */ } = employees[0];
// console.log('年齢:', age); // 30（デフォルト値）
// console.log('給与:', salary); // '未設定'（デフォルト値）

// テスト実行用コメントアウト解除
console.log('基本的な分割代入の実装を行ってください');
```

---

## 演習 2: 関数の引数での分割代入

```javascript
// 演習2: 関数の引数での分割代入
console.log('\n=== 演習2: 関数の引数での分割代入 ===');

// TODO: 以下の関数を分割代入を使って実装してください

// 2-1. 社員の名前と部署を表示する関数
function displayEmployeeInfo(/* ここに分割代入 */) {
  // TODO: 分割代入を使って引数から値を取得し、
  // 「田中太郎さん（開発部）」の形式で返してください
}

// 2-2. 連絡先情報を整形する関数
function formatContactInfo(/* ここに分割代入 */) {
  // TODO: 分割代入を使って連絡先情報を取得し、
  // 「メール: tanaka@company.com, 電話: 03-1234-5678, 住所: 東京, 日本」
  // の形式で返してください
}

// 2-3. スキル一覧を作成する関数
function createSkillsList(/* ここに分割代入 */) {
  // TODO: 分割代入を使ってスキル配列を取得し、
  // スキルをカンマ区切りで結合して返してください
  // 例: "JavaScript, React, Node.js"
}

// 2-4. プロジェクト情報を要約する関数
function summarizeProjects(/* ここに分割代入 */) {
  // TODO: 分割代入を使ってプロジェクト配列を取得し、
  // 「プロジェクト数: 2件（リーダー: 1件、メンバー: 1件）」
  // のような要約を返してください
}

// テスト実行
console.log('関数実装:', displayEmployeeInfo(employees[0]));
console.log('連絡先:', formatContactInfo(employees[0]));
console.log('スキル:', createSkillsList(employees[0]));
console.log('プロジェクト要約:', summarizeProjects(employees[0]));
```

---

## 演習 3: 配列メソッドとの組み合わせ

```javascript
// 演習3: 配列メソッドとの組み合わせ
console.log('\n=== 演習3: 配列メソッドとの組み合わせ ===');

// TODO: 配列メソッドと分割代入を組み合わせて実装してください

// 3-1. 全社員の名前一覧を取得
function getAllEmployeeNames(employees) {
  // TODO: map()と分割代入を使って、全社員の名前の配列を返してください
  return employees.map(/* ここに分割代入を使った処理 */);
}

// 3-2. 開発部の社員のみを抽出
function getDevelopmentEmployees(employees) {
  // TODO: filter()と分割代入を使って、開発部の社員のみを返してください
  return employees.filter(/* ここに分割代入を使った処理 */);
}

// 3-3. 各社員の詳細情報を表示
function displayAllEmployeeDetails(employees) {
  // TODO: forEach()と分割代入を使って、各社員の情報を表示してください
  // 表示形式: "田中太郎 - シニアエンジニア（開発部）- 東京"
  employees.forEach(/* ここに分割代入を使った処理 */);
}

// 3-4. 社員のスキル一覧を平坦化
function getAllSkills(employees) {
  // TODO: flatMap()（またはmap()とflat()）と分割代入を使って、
  // 全社員のスキルを重複なしで返してください
}

// テスト実行
console.log('全社員名:', getAllEmployeeNames(employees));
console.log('開発部社員:', getDevelopmentEmployees(employees));
displayAllEmployeeDetails(employees);
console.log('全スキル:', getAllSkills(employees));
```

---

## 演習 4: API レスポンス処理

```javascript
// 演習4: APIレスポンス処理
console.log('\n=== 演習4: APIレスポンス処理 ===');

// API レスポンスの想定データ
const apiResponse = {
  status: 'success',
  data: {
    employees: [
      {
        id: 1,
        personalInfo: {
          name: '田中太郎',
          age: 28,
          email: 'tanaka@company.com',
        },
        workInfo: {
          position: 'エンジニア',
          department: '開発部',
          joinDate: '2020-04-01',
        },
        performance: {
          rating: 4.5,
          projects: 12,
          completedTasks: 85,
        },
      },
      {
        id: 2,
        personalInfo: {
          name: '佐藤花子',
          age: 32,
          email: 'sato@company.com',
        },
        workInfo: {
          position: 'マネージャー',
          department: '企画部',
          joinDate: '2018-01-15',
        },
        performance: {
          rating: 4.8,
          projects: 8,
          completedTasks: 95,
        },
      },
    ],
    metadata: {
      total: 2,
      page: 1,
      pageSize: 10,
      hasMore: false,
    },
  },
  timestamp: '2024-01-15T10:30:00Z',
};

// TODO: 以下の関数を分割代入を使って実装してください

// 4-1. APIレスポンスからデータを安全に抽出
function extractResponseData(response) {
  // TODO: 分割代入を使って、以下の情報を抽出してください：
  // - status
  // - employees配列
  // - total（メタデータから）
  // - timestamp
  // レスポンスが不正な場合も考慮してください
}

// 4-2. 社員の基本情報を整形
function formatEmployeeBasicInfo(employee) {
  // TODO: 分割代入を使って、社員の個人情報と勤務情報から
  // 基本情報オブジェクトを作成してください
  // 戻り値: { name, age, email, position, department, joinDate }
}

// 4-3. パフォーマンス情報を分析
function analyzePerformance(employee) {
  // TODO: 分割代入を使って、パフォーマンス情報から
  // 分析結果を作成してください
  // 戻り値: { name, rating, productivity: projects/completedTasks, level: 'excellent'|'good'|'average' }
  // level判定: rating >= 4.5 → 'excellent', >= 4.0 → 'good', それ以外 → 'average'
}

// 4-4. レスポンスの要約情報を作成
function createResponseSummary(response) {
  // TODO: 分割代入を使って、レスポンス全体から要約を作成してください
  // 戻り値: {
  //   status,
  //   employeeCount,
  //   averageRating,
  //   totalProjects,
  //   timestamp
  // }
}

// テスト実行
const extractedData = extractResponseData(apiResponse);
console.log('抽出データ:', extractedData);

const basicInfo = formatEmployeeBasicInfo(apiResponse.data.employees[0]);
console.log('基本情報:', basicInfo);

const performance = analyzePerformance(apiResponse.data.employees[0]);
console.log('パフォーマンス分析:', performance);

const summary = createResponseSummary(apiResponse);
console.log('レスポンス要約:', summary);
```

---

## 演習 5: 実践的なデータ変換

```javascript
// 演習5: 実践的なデータ変換
console.log('\n=== 演習5: 実践的なデータ変換 ===');

// 複雑なデータ構造
const projectData = [
  {
    project: {
      id: 'PRJ001',
      name: 'Webアプリケーション開発',
      client: {
        name: 'A株式会社',
        contact: {
          email: 'contact@a-company.com',
          phone: '03-1111-1111',
        },
      },
      team: [
        {
          member: {
            id: 1,
            name: '田中太郎',
            role: 'リーダー',
            skills: ['React', 'Node.js'],
          },
          allocation: { hours: 40, rate: 5000 },
        },
        {
          member: {
            id: 2,
            name: '佐藤花子',
            role: 'デザイナー',
            skills: ['UI/UX', 'Figma'],
          },
          allocation: { hours: 30, rate: 4000 },
        },
      ],
      timeline: {
        start: '2024-01-01',
        end: '2024-03-31',
        milestones: [
          { name: '要件定義完了', date: '2024-01-31' },
          { name: '開発完了', date: '2024-03-15' },
        ],
      },
    },
  },
];

// TODO: 以下の関数を分割代入を使って実装してください

// 5-1. プロジェクト概要を作成
function createProjectOverview(projectItem) {
  // TODO: 分割代入を使って、プロジェクトの概要情報を抽出してください
  // 戻り値: {
  //   projectId,
  //   projectName,
  //   clientName,
  //   startDate,
  //   endDate,
  //   teamSize: チームメンバー数
  // }
}

// 5-2. チーム情報を整形
function formatTeamInfo(projectItem) {
  // TODO: 分割代入を使って、チームメンバーの情報を整形してください
  // 戻り値: [
  //   { name, role, skills: string（カンマ区切り）, weeklyHours, weeklyRate },
  //   ...
  // ]
}

// 5-3. プロジェクト予算を計算
function calculateProjectBudget(projectItem) {
  // TODO: 分割代入を使って、プロジェクトの予算情報を計算してください
  // 計算方法: 各メンバーの (hours × rate) を合計
  // 戻り値: {
  //   totalHours,
  //   totalCost,
  //   memberCosts: [{ name, cost }, ...]
  // }
}

// 5-4. マイルストーン情報を変換
function transformMilestones(projectItem) {
  // TODO: 分割代入を使って、マイルストーン情報を変換してください
  // 戻り値: [
  //   { name, date, daysFromStart: プロジェクト開始からの日数 },
  //   ...
  // ]
}

// 5-5. プロジェクト完全レポートを作成
function generateProjectReport(projectItem) {
  // TODO: 上記の関数を組み合わせて、完全なプロジェクトレポートを作成してください
  // 戻り値: {
  //   overview: createProjectOverviewの結果,
  //   team: formatTeamInfoの結果,
  //   budget: calculateProjectBudgetの結果,
  //   milestones: transformMilestonesの結果
  // }
}

// テスト実行
const overview = createProjectOverview(projectData[0]);
console.log('プロジェクト概要:', overview);

const teamInfo = formatTeamInfo(projectData[0]);
console.log('チーム情報:', teamInfo);

const budget = calculateProjectBudget(projectData[0]);
console.log('予算情報:', budget);

const milestones = transformMilestones(projectData[0]);
console.log('マイルストーン:', milestones);

const fullReport = generateProjectReport(projectData[0]);
console.log('完全レポート:', fullReport);
```

---

## 演習 6: エラーハンドリング

```javascript
// 演習6: エラーハンドリング
console.log('\n=== 演習6: エラーハンドリング ===');

// 不完全なデータの例
const incompleteData = [
  {
    user: {
      name: '田中太郎',
      // emailが欠落
      profile: {
        // ageが欠落
        department: '開発部',
      },
    },
  },
  {
    user: {
      name: '佐藤花子',
      email: 'sato@company.com',
      profile: null, // profileがnull
    },
  },
  {
    // userが欠落
    timestamp: '2024-01-15',
  },
  null, // データ全体がnull
];

// TODO: 安全な分割代入を使って以下の関数を実装してください

// 6-1. 安全なユーザー情報抽出
function safeExtractUserInfo(dataItem) {
  // TODO: 分割代入を使って、データが不完全でも安全に情報を抽出してください
  // 戻り値: {
  //   name: ユーザー名 または 'Unknown',
  //   email: メールアドレス または 'Not provided',
  //   age: 年齢 または 0,
  //   department: 部署 または 'Unassigned'
  // }
  // nullやundefinedの場合も適切に処理してください
}

// 6-2. データ検証付き抽出
function validateAndExtract(dataItem) {
  // TODO: 分割代入を使って、データの妥当性をチェックしながら抽出してください
  // 戻り値: {
  //   isValid: boolean,
  //   data: 抽出されたデータ（isValidがfalseの場合はnull）,
  //   errors: エラーメッセージの配列
  // }
}

// 6-3. 複数データの一括処理
function processBatchData(dataArray) {
  // TODO: 配列メソッドと分割代入を使って、データを分類してください
  // 戻り値: {
  //   validData: 有効なデータの配列,
  //   invalidData: 無効なデータの配列（エラー情報付き）,
  //   statistics: {
  //     total: 総数,
  //     valid: 有効数,
  //     invalid: 無効数
  //   }
  // }
}

// 6-4. フォールバック付きデータ整形
function formatWithFallback(dataItem, fallbackValues = {}) {
  // TODO: 分割代入を使って、フォールバック値を適用しながらデータを整形してください
  // fallbackValues例: { name: 'Guest User', email: 'guest@example.com', age: 25 }
  // 戻り値: 完全に整形されたユーザーオブジェクト
}

// テスト実行
console.log('安全な抽出テスト:');
incompleteData.forEach((item, index) => {
  const extracted = safeExtractUserInfo(item);
  console.log(`データ${index + 1}:`, extracted);
});

console.log('\n検証付き抽出テスト:');
incompleteData.forEach((item, index) => {
  const validated = validateAndExtract(item);
  console.log(`データ${index + 1}:`, validated);
});

const batchResult = processBatchData(incompleteData);
console.log('\n一括処理結果:', batchResult);

console.log('\nフォールバック付き整形テスト:');
const fallback = {
  name: 'ゲストユーザー',
  email: 'guest@example.com',
  age: 30,
};
incompleteData.forEach((item, index) => {
  const formatted = formatWithFallback(item, fallback);
  console.log(`データ${index + 1}:`, formatted);
});

console.log('\n=== Day 4.5 分割代入演習完了 ===');
```

## 🎯 演習のポイント

### チェックポイント

1. **基本文法**: オブジェクトと配列の分割代入が正しく書ける
2. **変数名変更**: プロパティ名と異なる変数名を使える
3. **デフォルト値**: 値が存在しない場合の安全な処理
4. **ネスト構造**: 深いオブジェクトからの値抽出
5. **配列メソッド**: map、filter、forEach との組み合わせ
6. **エラーハンドリング**: null/undefined に対する安全な処理

### 実装のヒント

- `|| {}` でオブジェクトのデフォルト値を設定
- `= デフォルト値` で個別プロパティのデフォルト値を設定
- レスト演算子（`...`）で残りの要素をまとめて取得
- 関数の引数での分割代入でコードをより読みやすく

### よくある間違い

```javascript
// ❌ 悪い例: undefinedの分割代入
const { name } = undefined; // TypeError

// ✅ 良い例: 安全な分割代入
const { name } = user || {};

// ❌ 悪い例: 深いネストでのエラー
const {
  user: {
    profile: { age },
  },
} = data; // profileがnullの場合エラー

// ✅ 良い例: 段階的な分割代入
const { user } = data || {};
const { profile } = user || {};
const { age } = profile || {};
```

---

これらの演習を通じて、分割代入を実際の開発で効果的に活用できるようになりましょう！
