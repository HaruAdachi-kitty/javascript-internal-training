// Day 2 演習解答: truthy と falsy の理解

console.log("=== Day 2 演習解答: truthy と falsy の理解 ===");

// 設問の解答
console.log("\n設問の解答");
console.log("----------");

console.log("設問1: JavaScriptの6つのfalsy値");
console.log("false, 0, '', null, undefined, NaN");

console.log("\n設問2: 空配列[]と空オブジェクト{}がtruthyである理由");
console.log("理由: オブジェクトと配列は中身が空でも、オブジェクト自体は存在するためtruthyです");

console.log("\n設問3: 文字列の'0'と数値の0、空配列[]の結果の違い");
console.log("'0'はtruthy（空でない文字列）、0はfalsy（数値のゼロ）、[]はtruthy（オブジェクト）");

// 演習4: 配列・オブジェクトの空判定 - 解答
console.log("\n演習4: 配列・オブジェクトの空判定 - 解答");
console.log("------------------------------------------");

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

function isEmptyObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
const emptyObject = {};
const nonEmptyObject = { name: "田中" };

console.log("空配列の判定:", isEmptyArray(emptyArray));         // true
console.log("非空配列の判定:", isEmptyArray(nonEmptyArray));   // false
console.log("空オブジェクトの判定:", isEmptyObject(emptyObject));   // true
console.log("非空オブジェクトの判定:", isEmptyObject(nonEmptyObject)); // false

// 演習6: 条件分岐の簡潔な書き方 - 解答
console.log("\n演習6: 条件分岐の簡潔な書き方 - 解答");
console.log("------------------------------------------");

const users = [
  { name: "田中", email: "tanaka@test.com", profile: { age: 25 } },
  { name: "佐藤", email: "", profile: null },
  { name: "鈴木", email: null, profile: { age: null } },
  null,
  { name: "", email: "test@test.com" }
];

function safeGetUserInfo(user) {
  // userの存在チェック
  if (!user) {
    return { name: "不明", email: "未設定", age: "不明" };
  }
  
  const name = user.name || "名無し";
  const email = user.email || "未設定";
  const age = user.profile?.age ?? "不明";
  
  return { name, email, age };
}

// テスト実行
users.forEach((user, index) => {
  console.log(`ユーザー${index}:`, safeGetUserInfo(user));
});

// 演習7: 配列のフィルタリング - 解答
console.log("\n演習7: 配列のフィルタリング - 解答");
console.log("----------------------------------");

const mixedValues = [0, 1, "", "hello", null, "world", undefined, false, true, NaN];

// 1. falsy値を除去
function removeFalsy(array) {
  return array.filter(Boolean);
}

// 2. null/undefinedのみを除去（0や""は残す）
function removeNullish(array) {
  return array.filter(value => value !== null && value !== undefined);
}

// 3. 空文字列のみを除去
function removeEmptyStrings(array) {
  return array.filter(value => value !== "");
}

console.log("元の配列:", mixedValues);
console.log("falsy除去:", removeFalsy(mixedValues));
console.log("null/undefined除去:", removeNullish(mixedValues));
console.log("空文字列除去:", removeEmptyStrings(mixedValues));

// 演習8: 実践的なバリデーション - 解答
console.log("\n演習8: 実践的なバリデーション - 解答");
console.log("----------------------------------");

function validateInput(input) {
  // 0も有効な値として扱う
  // 空文字列、null、undefinedは無効
  return input !== "" && input !== null && input !== undefined;
}

function validateAge(age) {
  // 0歳も有効とする
  // 数値以外は無効
  // 負の数は無効
  return typeof age === 'number' && age >= 0 && !isNaN(age);
}

function validateEmail(email) {
  // 空文字列、null、undefinedは無効
  // @を含まない場合は無効
  return email && typeof email === 'string' && email.includes('@');
}

// テストケース
const testInputs = [
  { value: 0, description: "数値の0" },
  { value: "", description: "空文字列" },
  { value: "hello", description: "通常の文字列" },
  { value: null, description: "null" },
  { value: undefined, description: "undefined" }
];

const testAges = [0, 25, -5, "25", "abc", null];
const testEmails = ["test@test.com", "", null, "invalid", "valid@email.com"];

console.log("入力値バリデーション:");
testInputs.forEach(test => {
  console.log(`${test.description}: ${validateInput(test.value)}`);
});

console.log("\n年齢バリデーション:");
testAges.forEach(age => {
  console.log(`${age}: ${validateAge(age)}`);
});

console.log("\nメールバリデーション:");
testEmails.forEach(email => {
  console.log(`${email}: ${validateEmail(email)}`);
});

// 演習10: 実践問題 - データクリーニング - 解答
console.log("\n演習10: 実践問題 - データクリーニング - 解答");
console.log("----------------------------------------------");

const rawUserData = [
  { id: 1, name: "田中", email: "tanaka@test.com", age: 25 },
  { id: 2, name: "", email: "sato@test.com", age: null },
  { id: 3, name: "鈴木", email: "", age: 30 },
  { id: 4, name: null, email: "takahashi@test.com", age: 0 },
  { id: 5, name: "渡辺", email: "watanabe@test.com", age: undefined },
  null,
  { id: 7, name: "山田", email: null, age: 28 }
];

function cleanUserData(userData) {
  return userData
    .filter(user => user !== null && user !== undefined) // nullなユーザーを除外
    .map(user => {
      return {
        id: user.id,
        name: user.name || "名無し", // 名前が空の場合は"名無し"にする
        email: user.email || "未設定", // メールが空の場合は"未設定"にする
        age: (user.age !== null && user.age !== undefined) ? user.age : 0 // 年齢が無効な場合は0にする（ただし0は有効）
      };
    })
    .filter(user => typeof user.id === 'number' && user.id > 0); // 必須フィールド（id）が有効かチェック
}

const cleanedData = cleanUserData(rawUserData);
console.log("元データ件数:", rawUserData.length);
console.log("クリーニング後件数:", cleanedData.length);
console.log("クリーニング済みデータ:", cleanedData);

// 演習11: 複雑な条件判定 - 解答
console.log("\n演習11: 複雑な条件判定 - 解答");
console.log("------------------------------");

function canAccessResource(user, resource) {
  // user が存在し、active が true
  // resource が存在し、available が true
  // user.permissions が存在し、resource.requiredPermission を含む
  return !!(
    user && 
    user.active && 
    resource && 
    resource.available && 
    user.permissions && 
    Array.isArray(user.permissions) && 
    user.permissions.includes(resource.requiredPermission)
  );
}

// テストデータ
const testUser1 = { 
  name: "田中", 
  active: true, 
  permissions: ["read", "write"] 
};
const testUser2 = { 
  name: "佐藤", 
  active: false, 
  permissions: ["read"] 
};
const testUser3 = null;

const testResource1 = { 
  name: "ファイルA", 
  available: true, 
  requiredPermission: "read" 
};
const testResource2 = { 
  name: "ファイルB", 
  available: true, 
  requiredPermission: "write" 
};

// テスト実行
console.log("アクセス権限テスト:");
console.log("田中 → ファイルA(read):", canAccessResource(testUser1, testResource1)); // true
console.log("田中 → ファイルB(write):", canAccessResource(testUser1, testResource2)); // true
console.log("佐藤 → ファイルB(write):", canAccessResource(testUser2, testResource2)); // false (inactive)
console.log("null → ファイルA:", canAccessResource(testUser3, testResource1)); // false

console.log("\n=== Day 2 truthy/falsy演習解答完了 ==="); 