// Day 4 実践総合演習 - 解答

console.log('=== Day 4 実践総合演習 - 解答 ===');

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

// 1-1. 社員IDによる安全な検索
function findEmployeeSafely(employees, id) {
  // idの型チェック
  if (typeof id !== 'number') {
    throw new Error('IDは数値である必要があります');
  }

  const employee = employees.find((emp) => emp.id === id);

  // 見つからない場合はnullを返す
  return employee || null;
}

// 1-2. 有効なメールアドレスを持つ社員のみ抽出
function getEmployeesWithValidEmail(employees) {
  return employees.filter((employee) => {
    // null/undefinedチェック
    if (!employee.email) {
      return false;
    }

    // 空文字列チェック
    if (employee.email === '') {
      return false;
    }

    // @を含むかチェック
    return employee.email.includes('@');
  });
}

// 1-3. 部署別統計の計算
function calculateDepartmentStats(employees) {
  const stats = {};

  employees.forEach((employee) => {
    const dept = employee.department;

    if (!stats[dept]) {
      stats[dept] = {
        count: 0,
        totalAge: 0,
        totalSalary: 0,
        validSalaryCount: 0,
      };
    }

    stats[dept].count++;
    stats[dept].totalAge += employee.age;

    // 給与がnullでない場合のみ計算に含める
    if (employee.salary !== null && employee.salary !== undefined) {
      stats[dept].totalSalary += employee.salary;
      stats[dept].validSalaryCount++;
    }
  });

  // 平均を計算
  const result = {};
  for (const dept in stats) {
    result[dept] = {
      count: stats[dept].count,
      avgAge: Math.round(stats[dept].totalAge / stats[dept].count),
      avgSalary:
        stats[dept].validSalaryCount > 0
          ? Math.round(stats[dept].totalSalary / stats[dept].validSalaryCount)
          : null,
    };
  }

  return result;
}

// 1-4. スキル分析
function analyzeSkills(employees) {
  const skillCounts = {};

  employees.forEach((employee) => {
    employee.skills.forEach((skill) => {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
  });

  // 最も人気のスキルを見つける
  let mostPopular = '';
  let maxCount = 0;

  for (const skill in skillCounts) {
    if (skillCounts[skill] > maxCount) {
      maxCount = skillCounts[skill];
      mostPopular = skill;
    }
  }

  return {
    skillCounts,
    mostPopular,
  };
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
console.log('スキル分析:', analyzeSkills(employees));

// 演習2: ショッピングカート機能
console.log('\n=== 演習2: ショッピングカート機能 ===');

const cart = [
  { id: 1, name: 'ノートPC', price: 80000, quantity: 1, discount: 0.05 },
  { id: 2, name: 'マウス', price: 2000, quantity: 2, discount: 0 },
  { id: 3, name: 'キーボード', price: 5000, quantity: 1, discount: null },
  { id: 4, name: '', price: 1000, quantity: 1, discount: 0.1 }, // 無効なデータ
  { id: 5, name: 'モニター', price: -500, quantity: 1, discount: 0.2 }, // 無効なデータ
];

// 2-1. 商品データの検証
function validateCartItem(item) {
  const errors = [];

  // nameのチェック
  if (!item.name || item.name.trim() === '') {
    errors.push('商品名が空です');
  }

  // priceのチェック
  if (typeof item.price !== 'number' || item.price <= 0) {
    errors.push('価格は正の数値である必要があります');
  }

  // quantityのチェック
  if (
    typeof item.quantity !== 'number' ||
    item.quantity <= 0 ||
    !Number.isInteger(item.quantity)
  ) {
    errors.push('数量は正の整数である必要があります');
  }

  // discountのチェック
  if (item.discount !== null && item.discount !== undefined) {
    if (
      typeof item.discount !== 'number' ||
      item.discount < 0 ||
      item.discount > 1
    ) {
      errors.push('割引は0以上1以下の数値である必要があります');
    }
  }

  return errors;
}

// 2-2. 安全な商品合計金額計算
function calculateItemTotal(item) {
  const errors = validateCartItem(item);
  if (errors.length > 0) {
    throw new Error(`無効な商品データ: ${errors.join(', ')}`);
  }

  const subtotal = item.price * item.quantity;

  // 割引適用
  if (item.discount && item.discount > 0) {
    return subtotal * (1 - item.discount);
  }

  return subtotal;
}

// 2-3. カート全体の合計金額計算
function calculateCartTotal(cart) {
  let total = 0;

  cart.forEach((item, index) => {
    try {
      total += calculateItemTotal(item);
    } catch (error) {
      console.warn(
        `商品${index + 1}（${item?.name || '不明'}）をスキップ: ${
          error.message
        }`
      );
    }
  });

  return total;
}

// 2-4. カート内容の詳細レポート
function generateCartReport(cart) {
  const validItems = [];
  const invalidItems = [];
  let totalAmount = 0;
  let totalQuantity = 0;
  let discountAmount = 0;

  cart.forEach((item, index) => {
    const errors = validateCartItem(item);

    if (errors.length === 0) {
      validItems.push(item);
      const itemTotal = calculateItemTotal(item);
      const originalTotal = item.price * item.quantity;

      totalAmount += itemTotal;
      totalQuantity += item.quantity;
      discountAmount += originalTotal - itemTotal;
    } else {
      invalidItems.push({
        item,
        index: index + 1,
        errors,
      });
    }
  });

  return {
    validItems,
    invalidItems,
    totalAmount,
    totalQuantity,
    discountAmount,
  };
}

// 2-5. 商品検索機能
function searchProducts(cart, searchTerm) {
  const validItems = cart.filter((item) => validateCartItem(item).length === 0);

  return validItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// テスト実行
console.log('商品検証テスト:');
cart.forEach((item, index) => {
  const errors = validateCartItem(item);
  console.log(`商品${index + 1}:`, errors.length === 0 ? '有効' : errors);
});

console.log('カートレポート:', generateCartReport(cart));
console.log('商品検索（"PC"）:', searchProducts(cart, 'PC'));

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

// 3-1. CSV行の解析（安全版）
function parseCSVRowSafe(csvRow) {
  // 入力の妥当性チェック
  if (!csvRow || typeof csvRow !== 'string') {
    throw new Error('無効なCSV行です');
  }

  if (csvRow.trim() === '') {
    throw new Error('空の行です');
  }

  const parts = csvRow.split(',');
  if (parts.length !== 4) {
    throw new Error('CSV行の形式が正しくありません（4列必要）');
  }

  const [name, ageStr, email, department] = parts;

  // 名前の検証
  if (!name || name.trim() === '') {
    throw new Error('名前が空です');
  }

  // 年齢の検証
  if (!ageStr || ageStr.trim() === '') {
    throw new Error('年齢が空です');
  }

  const age = parseInt(ageStr, 10);
  if (isNaN(age) || age < 0 || age > 150) {
    throw new Error('年齢が無効です');
  }

  // メールの検証
  if (!email || email.trim() === '' || !email.includes('@')) {
    throw new Error('メールアドレスが無効です');
  }

  // 部署の検証
  if (!department || department.trim() === '') {
    throw new Error('部署が空です');
  }

  return {
    name: name.trim(),
    age: age,
    email: email.trim(),
    department: department.trim(),
  };
}

// 3-2. CSV データの一括変換
function convertCSVData(csvLines) {
  const validEmployees = [];
  const errors = [];

  csvLines.forEach((line, index) => {
    try {
      const employee = parseCSVRowSafe(line);
      validEmployees.push(employee);
    } catch (error) {
      errors.push({
        line: line,
        lineNumber: index + 1,
        error: error.message,
      });
    }
  });

  return {
    validEmployees,
    errors,
  };
}

// 3-3. データクレンジング
function cleanEmployeeData(employees) {
  const cleaned = employees.map((emp) => ({
    ...emp,
    name: emp.name.trim(),
    email: emp.email.toLowerCase().trim(),
  }));

  // 重複除去（名前とメールの組み合わせで判定）
  const unique = [];
  const seen = new Set();

  cleaned.forEach((emp) => {
    const key = `${emp.name}:${emp.email}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(emp);
    }
  });

  return unique;
}

// 3-4. データ正規化
function normalizeEmployeeData(employees) {
  return employees.map((emp) => ({
    ...emp,
    department: emp.department.includes('部')
      ? emp.department
      : emp.department + '部',
    age: Number(emp.age),
    email: emp.email.toLowerCase(),
  }));
}

// テスト実行
const conversionResult = convertCSVData(csvData);
console.log('変換結果:', conversionResult);
console.log(
  'クリーンアップ後:',
  cleanEmployeeData(conversionResult.validEmployees)
);
console.log(
  '正規化後:',
  normalizeEmployeeData(conversionResult.validEmployees)
);

// 演習4: 高度な検索・フィルタリング
console.log('\n=== 演習4: 高度な検索・フィルタリング ===');

// 4-1. 高度な社員検索
function advancedEmployeeSearch(employees, criteria) {
  return employees.filter((employee) => {
    // 名前の部分一致検索
    if (criteria.name) {
      if (!employee.name.toLowerCase().includes(criteria.name.toLowerCase())) {
        return false;
      }
    }

    // 部署の検索
    if (criteria.departments && criteria.departments.length > 0) {
      if (!criteria.departments.includes(employee.department)) {
        return false;
      }
    }

    // 年齢範囲
    if (criteria.minAge !== undefined) {
      if (employee.age < criteria.minAge) {
        return false;
      }
    }

    if (criteria.maxAge !== undefined) {
      if (employee.age > criteria.maxAge) {
        return false;
      }
    }

    // 給与範囲
    if (criteria.minSalary !== undefined) {
      if (!employee.salary || employee.salary < criteria.minSalary) {
        return false;
      }
    }

    if (criteria.maxSalary !== undefined) {
      if (!employee.salary || employee.salary > criteria.maxSalary) {
        return false;
      }
    }

    // スキル検索
    if (criteria.skills && criteria.skills.length > 0) {
      const hasSkill = criteria.skills.some((skill) =>
        employee.skills.includes(skill)
      );
      if (!hasSkill) {
        return false;
      }
    }

    // アクティブ状態
    if (criteria.active !== undefined) {
      if (employee.active !== criteria.active) {
        return false;
      }
    }

    // 有効なメールアドレス
    if (criteria.hasEmail !== undefined) {
      const hasValidEmail =
        employee.email && employee.email !== '' && employee.email.includes('@');
      if (criteria.hasEmail !== hasValidEmail) {
        return false;
      }
    }

    return true;
  });
}

// 4-2. 社員のソート
function sortEmployees(employees, sortBy, order = 'asc') {
  const sorted = [...employees].sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];

    // null/undefinedの処理
    if (valueA === null || valueA === undefined)
      valueA = order === 'asc' ? Infinity : -Infinity;
    if (valueB === null || valueB === undefined)
      valueB = order === 'asc' ? Infinity : -Infinity;

    // 日付の処理
    if (sortBy === 'joinDate') {
      valueA = new Date(valueA);
      valueB = new Date(valueB);
    }

    if (valueA < valueB) return order === 'asc' ? -1 : 1;
    if (valueA > valueB) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
}

// 4-3. ページネーション機能
function paginateResults(results, page, itemsPerPage) {
  const totalItems = results.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    items: results.slice(startIndex, endIndex),
    currentPage: page,
    totalPages: totalPages,
    totalItems: totalItems,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}

// 4-4. 検索結果の統計
function generateSearchStats(employees, searchResults) {
  const totalFound = searchResults.length;
  const percentage =
    employees.length > 0 ? (totalFound / employees.length) * 100 : 0;

  // 部署別の件数
  const departmentBreakdown = {};
  searchResults.forEach((emp) => {
    departmentBreakdown[emp.department] =
      (departmentBreakdown[emp.department] || 0) + 1;
  });

  // 年代別の分布
  const ageDistribution = {};
  searchResults.forEach((emp) => {
    const ageGroup = `${Math.floor(emp.age / 10) * 10}代`;
    ageDistribution[ageGroup] = (ageDistribution[ageGroup] || 0) + 1;
  });

  return {
    totalFound,
    percentage: Math.round(percentage * 100) / 100,
    departmentBreakdown,
    ageDistribution,
  };
}

// 4-5. 汎用フィルタリング関数
function createGenericFilter(filterFunctions) {
  return function (items) {
    return items.filter((item) => {
      return filterFunctions.every((filterFn) => filterFn(item));
    });
  };
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

// 汎用フィルタのテスト
const ageFilter = (emp) => emp.age >= 25;
const activeFilter = (emp) => emp.active;
const emailFilter = (emp) => emp.email && emp.email.includes('@');

const genericFilter = createGenericFilter([
  ageFilter,
  activeFilter,
  emailFilter,
]);
console.log('汎用フィルタ結果:', genericFilter(employees));

console.log('\n=== Day 4 実践総合演習完了 ===');
