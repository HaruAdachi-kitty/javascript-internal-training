// Day 3 演習解答: オブジェクト配列の操作

console.log("=== Day 3 演習解答: オブジェクト配列の操作 ===");

// サンプルデータ
const users = [
  { id: 1, name: "田中太郎", age: 28, department: "営業部", salary: 400000, active: true },
  { id: 2, name: "佐藤花子", age: 32, department: "開発部", salary: 550000, active: true },
  { id: 3, name: "鈴木一郎", age: 25, department: "営業部", salary: 350000, active: false },
  { id: 4, name: "山田美和", age: 29, department: "人事部", salary: 450000, active: true },
  { id: 5, name: "高橋健太", age: 35, department: "開発部", salary: 600000, active: true }
];

// 演習1: 基本的なfilter - 解答
console.log("\n演習1: 基本的なfilter - 解答");
console.log("--------------------------------");

// 1. アクティブなユーザーのみ
const activeUsers = users.filter(user => user.active);
console.log("アクティブユーザー:", activeUsers);

// 2. 30歳以上のユーザー
const over30Users = users.filter(user => user.age >= 30);
console.log("30歳以上のユーザー:", over30Users);

// 3. 営業部のユーザー
const salesUsers = users.filter(user => user.department === "営業部");
console.log("営業部のユーザー:", salesUsers);

// 演習2: map による変換 - 解答
console.log("\n演習2: map による変換 - 解答");
console.log("----------------------------");

// 1. ユーザー名のみの配列
const userNames = users.map(user => user.name);
console.log("ユーザー名一覧:", userNames);

// 2. 年収情報付きのオブジェクト
const usersWithAnnualSalary = users.map(user => ({
  name: user.name,
  monthlySalary: user.salary,
  annualSalary: user.salary * 12
}));
console.log("年収情報付きユーザー:", usersWithAnnualSalary);

// 3. 表示用のフォーマット
const displayUsers = users.map(user => 
  `${user.name} (${user.age}歳, ${user.department})`
);
console.log("表示用フォーマット:", displayUsers);

// 演習3: find と findIndex - 解答
console.log("\n演習3: find と findIndex - 解答");
console.log("-------------------------------");

// 1. 特定IDのユーザーを検索
function findUserById(users, id) {
  return users.find(user => user.id === id);
}
console.log("ID=3のユーザー:", findUserById(users, 3));

// 2. 名前で検索
function findUserByName(users, name) {
  return users.find(user => user.name === name);
}
console.log("佐藤花子の情報:", findUserByName(users, "佐藤花子"));

// 3. 条件に合う最初のユーザーのインデックス
const firstActiveUserIndex = users.findIndex(user => user.active);
console.log("最初のアクティブユーザーのインデックス:", firstActiveUserIndex);

// 演習4: 複合的な操作 - 解答
console.log("\n演習4: 複合的な操作 - 解答");
console.log("----------------------------");

// 1. アクティブな開発部ユーザーの名前一覧
const activeDevelopers = users
  .filter(user => user.active && user.department === "開発部")
  .map(user => user.name);
console.log("アクティブな開発部ユーザー:", activeDevelopers);

// 2. 30歳以上のユーザーの平均給与
const over30UsersData = users.filter(user => user.age >= 30);
const averageSalaryOver30 = over30UsersData.reduce((sum, user) => sum + user.salary, 0) / over30UsersData.length;
console.log("30歳以上のユーザーの平均給与:", averageSalaryOver30);

// 3. 部署別の人数
const departmentCount = users.reduce((count, user) => {
  count[user.department] = (count[user.department] || 0) + 1;
  return count;
}, {});
console.log("部署別人数:", departmentCount);

// 演習6: 高度なデータ処理 - 解答
console.log("\n演習6: 高度なデータ処理 - 解答");
console.log("------------------------------");

// 1. 部署別統計の計算
function getDepartmentStats(users) {
  const stats = {};
  
  users.forEach(user => {
    if (!stats[user.department]) {
      stats[user.department] = {
        count: 0,
        totalSalary: 0,
        ages: []
      };
    }
    
    stats[user.department].count++;
    stats[user.department].totalSalary += user.salary;
    stats[user.department].ages.push(user.age);
  });
  
  // 平均値を計算
  Object.keys(stats).forEach(dept => {
    const deptStats = stats[dept];
    deptStats.averageSalary = Math.round(deptStats.totalSalary / deptStats.count);
    deptStats.averageAge = Math.round(deptStats.ages.reduce((a, b) => a + b, 0) / deptStats.ages.length);
    delete deptStats.totalSalary;
    delete deptStats.ages;
  });
  
  return stats;
}

const departmentStats = getDepartmentStats(users);
console.log("部署別統計:", departmentStats);

// 演習7: ソートの実装 - 解答
console.log("\n演習7: ソートの実装 - 解答");
console.log("-------------------------");

// 1. 年齢順（昇順）でソート
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("年齢順（昇順）:");
sortedByAge.forEach(user => console.log(`  ${user.name}: ${user.age}歳`));

// 2. 給与順（降順）でソート
const sortedBySalary = [...users].sort((a, b) => b.salary - a.salary);
console.log("\n給与順（降順）:");
sortedBySalary.forEach(user => console.log(`  ${user.name}: ${user.salary}円`));

// 3. 部署名でソート（その後年齢でソート）
const sortedByDeptAndAge = [...users].sort((a, b) => {
  if (a.department !== b.department) {
    return a.department.localeCompare(b.department);
  }
  return a.age - b.age;
});
console.log("\n部署名→年齢順:");
sortedByDeptAndAge.forEach(user => console.log(`  ${user.department} - ${user.name}: ${user.age}歳`));

// 演習8: パフォーマンスの考慮 - 解答
console.log("\n演習8: パフォーマンスの考慮 - 解答");
console.log("----------------------------------");

// 大きなデータセットの生成
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `ユーザー${i + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
  department: ["営業部", "開発部", "人事部"][Math.floor(Math.random() * 3)],
  salary: Math.floor(Math.random() * 500000) + 300000,
  active: Math.random() > 0.1
}));

// 悪い例: 複数の処理で毎回全データを走査
console.time("悪い例");
const result1 = largeDataset.filter(user => user.active);
const result2 = result1.filter(user => user.age >= 30);
const result3 = result2.map(user => ({ name: user.name, salary: user.salary }));
const final1 = result3.slice(0, 100);
console.timeEnd("悪い例");

// 良い例: 一度の処理で必要な操作をまとめる
console.time("良い例");
const final2 = largeDataset
  .filter(user => user.active && user.age >= 30)
  .slice(0, 100) // 早い段階で絞り込み
  .map(user => ({ name: user.name, salary: user.salary }));
console.timeEnd("良い例");

console.log("結果の件数（悪い例）:", final1.length);
console.log("結果の件数（良い例）:", final2.length);

// 演習10: 実践的なデータ変換 - 解答
console.log("\n演習10: 実践的なデータ変換 - 解答");
console.log("-----------------------------------");

// CSV形式のデータ変換
function convertToCSV(users) {
  const header = "ID,名前,年齢,部署,給与,ステータス";
  const rows = users.map(user => 
    `${user.id},${user.name},${user.age},${user.department},${user.salary},${user.active ? 'アクティブ' : '非アクティブ'}`
  );
  return [header, ...rows].join('\n');
}

const csvData = convertToCSV(users);
console.log("CSV形式データ:");
console.log(csvData);

// レポート形式のデータ変換
function generateReport(users) {
  const activeCount = users.filter(user => user.active).length;
  const totalSalary = users.reduce((sum, user) => sum + user.salary, 0);
  const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
  
  const departmentBreakdown = users.reduce((breakdown, user) => {
    breakdown[user.department] = (breakdown[user.department] || 0) + 1;
    return breakdown;
  }, {});
  
  return {
    summary: {
      totalUsers: users.length,
      activeUsers: activeCount,
      averageSalary: Math.round(totalSalary / users.length),
      averageAge: Math.round(averageAge)
    },
    departments: departmentBreakdown,
    topEarners: users
      .sort((a, b) => b.salary - a.salary)
      .slice(0, 3)
      .map(user => ({ name: user.name, salary: user.salary }))
  };
}

const report = generateReport(users);
console.log("\n詳細レポート:");
console.log(JSON.stringify(report, null, 2));

// 演習11: エラーハンドリング付きの安全な操作 - 解答
console.log("\n演習11: エラーハンドリング付きの安全な操作 - 解答");
console.log("------------------------------------------------");

// 安全なデータ処理関数
function safeProcessUsers(data, operations) {
  try {
    // データの検証
    if (!Array.isArray(data)) {
      throw new Error("データは配列である必要があります");
    }
    
    if (data.length === 0) {
      return { success: true, data: [], message: "データが空です" };
    }
    
    let result = [...data]; // 元データを変更しないようにコピー
    
    // 各操作を順次実行
    operations.forEach((operation, index) => {
      try {
        switch (operation.type) {
          case 'filter':
            result = result.filter(operation.fn);
            break;
          case 'map':
            result = result.map(operation.fn);
            break;
          case 'sort':
            result = result.sort(operation.fn);
            break;
          default:
            console.warn(`未知の操作タイプ: ${operation.type}`);
        }
      } catch (error) {
        throw new Error(`操作${index + 1}でエラー: ${error.message}`);
      }
    });
    
    return { success: true, data: result, count: result.length };
    
  } catch (error) {
    return { success: false, error: error.message, data: [] };
  }
}

// テスト実行
const operations = [
  { type: 'filter', fn: user => user.active },
  { type: 'filter', fn: user => user.age >= 25 },
  { type: 'map', fn: user => ({ name: user.name, info: `${user.age}歳・${user.department}` }) },
  { type: 'sort', fn: (a, b) => a.name.localeCompare(b.name) }
];

const safeResult = safeProcessUsers(users, operations);
console.log("安全な処理結果:", safeResult);

// 不正なデータでのテスト
const invalidResult = safeProcessUsers("invalid data", operations);
console.log("不正データでの処理結果:", invalidResult);

console.log("\n=== Day 3 オブジェクト配列操作演習解答完了 ==="); 