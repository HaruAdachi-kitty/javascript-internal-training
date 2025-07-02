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

// 1-1. 最初の社員の基本情報を取得
function getBasicEmployeeInfo() {
  // TODO: 分割代入を使って最初の社員の name と id を取得してください
  // const { /* ここに実装 */ } = employees[0];
  // return { name, id };
}

// 1-2. 最初の社員の職位情報を取得（変数名を変更）
function getJobInfo() {
  // TODO: 分割代入を使って position から title を jobTitle、department を dept として取得してください
  // const { position: { /* ここに実装 */ } } = employees[0];
  // return { jobTitle, dept };
}

// 1-3. デフォルト値を使った分割代入
function getEmployeeWithDefaults() {
  // TODO: 分割代入でデフォルト値を設定してください
  // age: 30（デフォルト値）、salary: '未設定'（デフォルト値）
  // const { /* ここに実装 */ } = employees[0];
  // return { name, age, salary };
}

// 1-4. ネストした住所情報の取得
function getAddressInfo() {
  // TODO: ネストした分割代入で住所情報を取得してください
  // contact.address から city と country を取得
  // const { /* ここに実装 */ } = employees[0];
  // return { city, country };
}

// テスト実行
console.log('基本情報:', getBasicEmployeeInfo());
console.log('職位情報:', getJobInfo());
console.log('デフォルト値付き:', getEmployeeWithDefaults());
console.log('住所情報:', getAddressInfo());

// 演習2: 関数の引数での分割代入
console.log('\n=== 演習2: 関数の引数での分割代入 ===');

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

// 2-5. 配列の分割代入を使った関数
function getFirstAndLastProjects(/* ここに分割代入 */) {
  // TODO: 配列の分割代入を使って最初と最後のプロジェクトを取得してください
  // プロジェクトが1つの場合は最初のプロジェクトのみ返す
}

// テスト実行
console.log('社員情報:', displayEmployeeInfo(employees[0]));
console.log('連絡先:', formatContactInfo(employees[0]));
console.log('スキル:', createSkillsList(employees[0]));
console.log('プロジェクト要約:', summarizeProjects(employees[0]));
console.log('最初と最後のプロジェクト:', getFirstAndLastProjects(employees[0]));

// 演習3: 配列メソッドとの組み合わせ
console.log('\n=== 演習3: 配列メソッドとの組み合わせ ===');

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

// 3-5. レベル別社員数をカウント
function countByLevel(employees) {
  // TODO: reduce()と分割代入を使って、レベル別の社員数をカウントしてください
  // 戻り値: { "senior": 1, "manager": 1 }
}

// テスト実行
console.log('全社員名:', getAllEmployeeNames(employees));
console.log('開発部社員:', getDevelopmentEmployees(employees));
displayAllEmployeeDetails(employees);
console.log('全スキル:', getAllSkills(employees));
console.log('レベル別社員数:', countByLevel(employees));

// 演習4: API レスポンス処理
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

// 4-5. 複数社員の情報を一括変換
function transformEmployeesData(response) {
  // TODO: 分割代入とmap()を組み合わせて、全社員の情報を変換してください
  // formatEmployeeBasicInfo関数を使用して変換
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

const transformedData = transformEmployeesData(apiResponse);
console.log('変換されたデータ:', transformedData);

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

// 6-5. レスト演算子を使った分離
function separateUserData(dataItem) {
  // TODO: 分割代入とレスト演算子を使って、ユーザーデータを分離してください
  // 戻り値: {
  //   basicInfo: { name, email },
  //   otherInfo: その他の情報
  // }
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
