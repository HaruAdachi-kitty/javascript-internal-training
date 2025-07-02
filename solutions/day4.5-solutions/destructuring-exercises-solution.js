// Day 4.5 分割代入演習 - 解答

console.log('=== Day 4.5 分割代入演習 - 解答 ===');

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
  const { name, id } = employees[0];
  return { name, id };
}

// 1-2. 最初の社員の職位情報を取得（変数名を変更）
function getJobInfo() {
  const {
    position: { title: jobTitle, department: dept },
  } = employees[0];
  return { jobTitle, dept };
}

// 1-3. デフォルト値を使った分割代入
function getEmployeeWithDefaults() {
  const { name, age = 30, salary = '未設定' } = employees[0];
  return { name, age, salary };
}

// 1-4. ネストした住所情報の取得
function getAddressInfo() {
  const {
    contact: {
      address: { city, country },
    },
  } = employees[0];
  return { city, country };
}

// テスト実行
console.log('基本情報:', getBasicEmployeeInfo());
console.log('職位情報:', getJobInfo());
console.log('デフォルト値付き:', getEmployeeWithDefaults());
console.log('住所情報:', getAddressInfo());

// 演習2: 関数の引数での分割代入
console.log('\n=== 演習2: 関数の引数での分割代入 ===');

// 2-1. 社員の名前と部署を表示する関数
function displayEmployeeInfo({ name, position: { department } }) {
  return `${name}さん（${department}）`;
}

// 2-2. 連絡先情報を整形する関数
function formatContactInfo({
  contact: {
    email,
    phone,
    address: { city, country },
  },
}) {
  return `メール: ${email}, 電話: ${phone}, 住所: ${city}, ${country}`;
}

// 2-3. スキル一覧を作成する関数
function createSkillsList({ skills }) {
  return skills.join(', ');
}

// 2-4. プロジェクト情報を要約する関数
function summarizeProjects({ projects }) {
  const total = projects.length;
  const leaderCount = projects.filter((p) => p.role === 'リーダー').length;
  const memberCount = projects.filter((p) => p.role === 'メンバー').length;
  const pmCount = projects.filter((p) => p.role === 'PM').length;

  let roleBreakdown = [];
  if (leaderCount > 0) roleBreakdown.push(`リーダー: ${leaderCount}件`);
  if (memberCount > 0) roleBreakdown.push(`メンバー: ${memberCount}件`);
  if (pmCount > 0) roleBreakdown.push(`PM: ${pmCount}件`);

  return `プロジェクト数: ${total}件（${roleBreakdown.join('、')}）`;
}

// 2-5. 配列の分割代入を使った関数
function getFirstAndLastProjects({ projects }) {
  if (projects.length === 0) {
    return { first: null, last: null };
  }

  if (projects.length === 1) {
    const [first] = projects;
    return { first, last: null };
  }

  const [first, ...rest] = projects;
  const last = rest[rest.length - 1];
  return { first, last };
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
  return employees.map(({ name }) => name);
}

// 3-2. 開発部の社員のみを抽出
function getDevelopmentEmployees(employees) {
  return employees.filter(
    ({ position: { department } }) => department === '開発部'
  );
}

// 3-3. 各社員の詳細情報を表示
function displayAllEmployeeDetails(employees) {
  employees.forEach(
    ({
      name,
      position: { title, department },
      contact: {
        address: { city },
      },
    }) => {
      console.log(`${name} - ${title}（${department}）- ${city}`);
    }
  );
}

// 3-4. 社員のスキル一覧を平坦化
function getAllSkills(employees) {
  const allSkills = employees.flatMap(({ skills }) => skills);
  return [...new Set(allSkills)]; // 重複除去
}

// 3-5. レベル別社員数をカウント
function countByLevel(employees) {
  return employees.reduce((acc, { position: { level } }) => {
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});
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
  const {
    status,
    data: { employees = [], metadata: { total } = {} } = {},
    timestamp,
  } = response || {};

  return {
    status,
    employees,
    total,
    timestamp,
  };
}

// 4-2. 社員の基本情報を整形
function formatEmployeeBasicInfo(employee) {
  const {
    personalInfo: { name, age, email },
    workInfo: { position, department, joinDate },
  } = employee;

  return { name, age, email, position, department, joinDate };
}

// 4-3. パフォーマンス情報を分析
function analyzePerformance(employee) {
  const {
    personalInfo: { name },
    performance: { rating, projects, completedTasks },
  } = employee;

  const productivity = completedTasks > 0 ? projects / completedTasks : 0;

  let level;
  if (rating >= 4.5) {
    level = 'excellent';
  } else if (rating >= 4.0) {
    level = 'good';
  } else {
    level = 'average';
  }

  return { name, rating, productivity, level };
}

// 4-4. レスポンスの要約情報を作成
function createResponseSummary(response) {
  const {
    status,
    data: {
      employees,
      metadata: { total },
    },
    timestamp,
  } = response;

  const employeeCount = employees.length;
  const totalRating = employees.reduce(
    (sum, emp) => sum + emp.performance.rating,
    0
  );
  const averageRating = employeeCount > 0 ? totalRating / employeeCount : 0;
  const totalProjects = employees.reduce(
    (sum, emp) => sum + emp.performance.projects,
    0
  );

  return {
    status,
    employeeCount,
    averageRating: Math.round(averageRating * 100) / 100,
    totalProjects,
    timestamp,
  };
}

// 4-5. 複数社員の情報を一括変換
function transformEmployeesData(response) {
  const {
    data: { employees },
  } = response;
  return employees.map((employee) => formatEmployeeBasicInfo(employee));
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
  const {
    project: {
      id: projectId,
      name: projectName,
      client: { name: clientName },
      timeline: { start: startDate, end: endDate },
      team,
    },
  } = projectItem;

  return {
    projectId,
    projectName,
    clientName,
    startDate,
    endDate,
    teamSize: team.length,
  };
}

// 5-2. チーム情報を整形
function formatTeamInfo(projectItem) {
  const {
    project: { team },
  } = projectItem;

  return team.map(
    ({
      member: { name, role, skills },
      allocation: { hours: weeklyHours, rate: weeklyRate },
    }) => ({
      name,
      role,
      skills: skills.join(', '),
      weeklyHours,
      weeklyRate,
    })
  );
}

// 5-3. プロジェクト予算を計算
function calculateProjectBudget(projectItem) {
  const {
    project: { team },
  } = projectItem;

  let totalHours = 0;
  let totalCost = 0;
  const memberCosts = [];

  team.forEach(({ member: { name }, allocation: { hours, rate } }) => {
    const cost = hours * rate;
    totalHours += hours;
    totalCost += cost;
    memberCosts.push({ name, cost });
  });

  return {
    totalHours,
    totalCost,
    memberCosts,
  };
}

// 5-4. マイルストーン情報を変換
function transformMilestones(projectItem) {
  const {
    project: {
      timeline: { start, milestones },
    },
  } = projectItem;

  const startDate = new Date(start);

  return milestones.map(({ name, date }) => {
    const milestoneDate = new Date(date);
    const daysFromStart = Math.floor(
      (milestoneDate - startDate) / (1000 * 60 * 60 * 24)
    );

    return { name, date, daysFromStart };
  });
}

// 5-5. プロジェクト完全レポートを作成
function generateProjectReport(projectItem) {
  return {
    overview: createProjectOverview(projectItem),
    team: formatTeamInfo(projectItem),
    budget: calculateProjectBudget(projectItem),
    milestones: transformMilestones(projectItem),
  };
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
  const { user } = dataItem || {};
  const { name = 'Unknown', email = 'Not provided' } = user || {};
  const { profile } = user || {};
  const { age = 0, department = 'Unassigned' } = profile || {};

  return { name, email, age, department };
}

// 6-2. データ検証付き抽出
function validateAndExtract(dataItem) {
  const errors = [];
  let data = null;
  let isValid = true;

  try {
    if (!dataItem) {
      errors.push('データがnullまたはundefinedです');
      isValid = false;
    } else {
      const { user } = dataItem;

      if (!user) {
        errors.push('userプロパティが存在しません');
        isValid = false;
      } else {
        const { name, email, profile } = user;

        if (!name) {
          errors.push('名前が存在しません');
          isValid = false;
        }

        if (!email) {
          errors.push('メールアドレスが存在しません');
          isValid = false;
        }

        if (!profile) {
          errors.push('プロフィール情報が存在しません');
          isValid = false;
        }

        if (isValid) {
          data = safeExtractUserInfo(dataItem);
        }
      }
    }
  } catch (error) {
    errors.push(`処理中にエラーが発生しました: ${error.message}`);
    isValid = false;
  }

  return { isValid, data, errors };
}

// 6-3. 複数データの一括処理
function processBatchData(dataArray) {
  const validData = [];
  const invalidData = [];

  dataArray.forEach((item, index) => {
    const result = validateAndExtract(item);

    if (result.isValid) {
      validData.push(result.data);
    } else {
      invalidData.push({
        index: index + 1,
        item,
        errors: result.errors,
      });
    }
  });

  return {
    validData,
    invalidData,
    statistics: {
      total: dataArray.length,
      valid: validData.length,
      invalid: invalidData.length,
    },
  };
}

// 6-4. フォールバック付きデータ整形
function formatWithFallback(dataItem, fallbackValues = {}) {
  const extracted = safeExtractUserInfo(dataItem);

  return {
    name:
      extracted.name !== 'Unknown'
        ? extracted.name
        : fallbackValues.name || 'Unknown',
    email:
      extracted.email !== 'Not provided'
        ? extracted.email
        : fallbackValues.email || 'Not provided',
    age: extracted.age !== 0 ? extracted.age : fallbackValues.age || 0,
    department:
      extracted.department !== 'Unassigned'
        ? extracted.department
        : fallbackValues.department || 'Unassigned',
  };
}

// 6-5. レスト演算子を使った分離
function separateUserData(dataItem) {
  const { user } = dataItem || {};
  const { name, email, ...otherInfo } = user || {};

  return {
    basicInfo: { name: name || 'Unknown', email: email || 'Not provided' },
    otherInfo,
  };
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

console.log('\nデータ分離テスト:');
incompleteData.forEach((item, index) => {
  const separated = separateUserData(item);
  console.log(`データ${index + 1}:`, separated);
});

console.log('\n=== Day 4.5 分割代入演習完了 ===');
