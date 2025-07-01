// Day 4.5 演習: 分割代入（Destructuring）

console.log("=== Day 4.5 演習: 分割代入 ===");

// 演習1: 基本的なオブジェクト分割代入
console.log("\n演習1: 基本的なオブジェクト分割代入");
console.log("----------------------------------");

const user = {
  name: "田中太郎",
  age: 28,
  email: "tanaka@example.com",
  department: "開発部"
};

// TODO: userオブジェクトからname, age, emailを分割代入で取得してください
// const { /* ここに実装 */ } = user;

// console.log("名前:", name);
// console.log("年齢:", age);
// console.log("メール:", email);

// 演習2: 変数名を変更する分割代入
console.log("\n演習2: 変数名を変更する分割代入");
console.log("------------------------------");

const product = {
  id: 1,
  name: "ノートPC",
  price: 150000
};

// TODO: productオブジェクトから以下の変数名で取得してください
// id → productId, name → productName, price → productPrice
// const { /* ここに実装 */ } = product;

// console.log("商品ID:", productId);
// console.log("商品名:", productName);
// console.log("価格:", productPrice);

// 演習3: デフォルト値を使った分割代入
console.log("\n演習3: デフォルト値を使った分割代入");
console.log("--------------------------------");

const userData = {
  username: "tanaka",
  email: "tanaka@test.com"
  // ageプロパティが存在しない
};

// TODO: userDataから以下を取得してください（デフォルト値を設定）
// username, email, age（デフォルト値: 20）, role（デフォルト値: "user"）
// const { /* ここに実装 */ } = userData;

// console.log("ユーザー名:", username);
// console.log("メール:", email);
// console.log("年齢:", age);
// console.log("役割:", role);

// 演習4: ネストしたオブジェクトの分割代入
console.log("\n演習4: ネストしたオブジェクトの分割代入");
console.log("----------------------------------");

const company = {
  name: "ABC商事",
  address: {
    prefecture: "東京都",
    city: "渋谷区",
    zipCode: "150-0001"
  },
  ceo: {
    name: "山田太郎",
    age: 45
  }
};

// TODO: companyオブジェクトから以下を取得してください
// - 会社名（name）
// - 都道府県（prefecture）
// - 市区町村（city）
// - CEO名（ceo.name → ceoName）
// const { /* ここに実装 */ } = company;

// console.log("会社名:", name);
// console.log("所在地:", prefecture, city);
// console.log("CEO:", ceoName);

// 演習5: 基本的な配列分割代入
console.log("\n演習5: 基本的な配列分割代入");
console.log("------------------------");

const colors = ["red", "green", "blue", "yellow", "purple"];

// TODO: colorsから最初の3つの色を取得してください
// const [/* ここに実装 */] = colors;

// console.log("1番目:", first);
// console.log("2番目:", second);
// console.log("3番目:", third);

// 演習6: 配列の要素スキップと残り取得
console.log("\n演習6: 配列の要素スキップと残り取得");
console.log("--------------------------------");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: numbersから以下を取得してください
// - 最初の数値（first）
// - 3番目の数値（third）※2番目をスキップ
// - 残りのすべて（rest）※4番目以降
// const [/* ここに実装 */] = numbers;

// console.log("最初:", first);
// console.log("3番目:", third);
// console.log("残り:", rest);

// 演習7: 関数の引数で分割代入
console.log("\n演習7: 関数の引数で分割代入");
console.log("----------------------------");

// TODO: ユーザー情報を受け取って挨拶メッセージを返す関数を作成してください
// 引数でオブジェクトの分割代入を使用
// function greetUser(/* ここに分割代入 */) {
//   // ここに実装
//   // 戻り値: "こんにちは、[name]さん（[age]歳、[department]）！"
// }

// テスト
const testUser = { name: "佐藤花子", age: 30, department: "営業部" };
// console.log(greetUser(testUser));

// 演習8: 配列を返す関数での分割代入
console.log("\n演習8: 配列を返す関数での分割代入");
console.log("------------------------------");

function getMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
}

// TODO: getMinMax関数の戻り値を分割代入で受け取ってください
const testNumbers = [3, 7, 1, 9, 4, 2, 8];
// const [/* ここに実装 */] = getMinMax(testNumbers);

// console.log("最小値:", minimum);
// console.log("最大値:", maximum);

// 演習9: 複雑な構造の分割代入
console.log("\n演習9: 複雑な構造の分割代入");
console.log("-------------------------");

const apiResponse = {
  status: "success",
  data: {
    users: [
      { id: 1, name: "田中", skills: ["JavaScript", "React"] },
      { id: 2, name: "佐藤", skills: ["Python", "Django"] }
    ],
    meta: {
      totalCount: 2,
      page: 1,
      hasMore: false
    }
  },
  timestamp: "2024-01-15T10:30:00Z"
};

// TODO: apiResponseから以下を取得してください
// - status
// - users配列
// - totalCount
// - 最初のユーザーの名前（firstName）
// - 最初のユーザーの最初のスキル（firstSkill）
// const {
//   /* ここに実装 */
// } = apiResponse;

// console.log("ステータス:", status);
// console.log("ユーザー数:", totalCount);
// console.log("最初のユーザー:", firstName);
// console.log("最初のスキル:", firstSkill);

// 演習10: 実践問題 - フォームデータの処理
console.log("\n演習10: 実践問題 - フォームデータの処理");
console.log("------------------------------------");

const formData = {
  personal: {
    firstName: "田中",
    lastName: "太郎",
    email: "tanaka@example.com"
  },
  address: {
    zipCode: "100-0001",
    prefecture: "東京都",
    city: "千代田区",
    street: "丸の内1-1-1"
  },
  preferences: {
    newsletter: true,
    notifications: false
  }
};

// TODO: 以下の関数を実装してください
// フォームデータを受け取って、分割代入を使ってユーザー情報オブジェクトを作成
function processFormData(formData) {
  // 分割代入を使ってformDataから必要な値を取得
  // const { /* ここに実装 */ } = formData;
  
  // 戻り値として以下の形式のオブジェクトを返す
  // {
  //   fullName: "姓 名",
  //   email: メールアドレス,
  //   fullAddress: "都道府県 市区町村 番地（郵便番号）",
  //   settings: { newsletter: boolean, notifications: boolean }
  // }
}

// テスト
// const processedData = processFormData(formData);
// console.log("処理済みデータ:", processedData);

// 演習11: エラーハンドリングを含む分割代入
console.log("\n演習11: エラーハンドリングを含む分割代入");
console.log("--------------------------------------");

// TODO: 安全に分割代入を行う関数を作成してください
function safeExtractUserInfo(userData) {
  try {
    // userDataがnullやundefinedの場合もエラーにならないように
    // 分割代入でname, email, profile.ageを安全に取得
    // profile が存在しない場合は age を 0 にする
    
    // const { /* ここに実装 */ } = userData || {};
    
    return {
      name: "取得した名前",
      email: "取得したメール",
      age: "取得した年齢"
    };
  } catch (error) {
    console.log("エラーが発生:", error.message);
    return {
      name: "不明",
      email: "不明",
      age: 0
    };
  }
}

// テスト
const validData = {
  name: "田中",
  email: "tanaka@test.com",
  profile: { age: 25 }
};

const invalidData1 = {
  name: "佐藤",
  email: "sato@test.com"
  // profile が存在しない
};

const invalidData2 = null;

// console.log("正常データ:", safeExtractUserInfo(validData));
// console.log("profile無し:", safeExtractUserInfo(invalidData1));
// console.log("nullデータ:", safeExtractUserInfo(invalidData2));

// 演習12: 配列メソッドと分割代入の組み合わせ
console.log("\n演習12: 配列メソッドと分割代入の組み合わせ");
console.log("------------------------------------------");

const employees = [
  { name: "田中", department: "開発", salary: 500000 },
  { name: "佐藤", department: "営業", salary: 450000 },
  { name: "鈴木", department: "開発", salary: 520000 },
  { name: "高橋", department: "人事", salary: 480000 }
];

// TODO: 以下の処理を分割代入を使って実装してください

// 1. 開発部の従業員の名前のみを配列で取得
// const devNames = employees
//   .filter(/* 分割代入を使った条件 */)
//   .map(/* 分割代入を使った変換 */);

// 2. 各従業員の「名前: 給与」形式の文字列配列を作成
// const employeeInfo = employees.map(/* 分割代入を使った変換 */);

// 3. 最も給与の高い従業員の情報を取得
// const highestPaid = employees.reduce((max, current) => {
//   const { salary: maxSalary } = max;
//   const { salary: currentSalary } = current;
//   return currentSalary > maxSalary ? current : max;
// });

// テスト
// console.log("開発部の名前:", devNames);
// console.log("従業員情報:", employeeInfo);
// console.log("最高給与者:", highestPaid);

console.log("\n=== Day 4.5 分割代入演習完了 ===");
console.log("※ 解答は solutions/additional-solutions/ フォルダにあります"); 