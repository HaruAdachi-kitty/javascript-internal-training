// Day 2 演習: truthy と falsy の理解

console.log("=== Day 2 演習: truthy と falsy の理解 ===");

// 演習1: falsy値の確認
console.log("\n演習1: falsy値の確認");
console.log("--------------------");

const falsyValues = [false, 0, "", null, undefined, NaN];

// TODO: 各falsy値をif文でテストしてください
console.log("falsy値のテスト:");
falsyValues.forEach((value, index) => {
  if (value) {
    console.log(`${index}: ${value} は truthy`);
  } else {
    console.log(`${index}: ${value} は falsy`);
  }
});
console.log("設問1: JavaScriptの6つのfalsy値をすべて覚えてください");

// 演習2: truthy値の確認
console.log("\n演習2: truthy値の確認");
console.log("--------------------");

const truthyValues = [1, -1, "hello", "0", " ", [], {}, function(){}];

// TODO: 各truthy値をif文でテストしてください
console.log("truthy値のテスト:");
truthyValues.forEach((value, index) => {
  if (value) {
    console.log(`${index}: ${value} は truthy`);
  } else {
    console.log(`${index}: ${value} は falsy`);
  }
});
console.log("設問2: 空配列[]と空オブジェクト{}がtruthyであることに注意してください");

// 演習3: よくある間違いの理解
console.log("\n演習3: よくある間違いの理解");
console.log("------------------------------");

// TODO: 以下の結果を予想してから実行してください
console.log("文字列の'0':", !!"0");        // 予想: ?
console.log("数値の0:", !!0);              // 予想: ?
console.log("空配列:", !![]);              // 予想: ?
console.log("空オブジェクト:", !!{});        // 予想: ?
console.log("NaN:", !!NaN);                // 予想: ?
console.log("設問3: 文字列の'0'と数値の0、空配列[]の結果の違いを説明してください");

// 演習4: 配列・オブジェクトの空判定
console.log("\n演習4: 配列・オブジェクトの空判定");
console.log("----------------------------------");

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
const emptyObject = {};
const nonEmptyObject = { name: "田中" };

// TODO: 正しい空判定を実装してください
function isEmptyArray(arr) {
  // ここに実装
}

function isEmptyObject(obj) {
  // ここに実装
}

console.log("空配列の判定:", isEmptyArray(emptyArray));
console.log("非空配列の判定:", isEmptyArray(nonEmptyArray));
console.log("空オブジェクトの判定:", isEmptyObject(emptyObject));
console.log("非空オブジェクトの判定:", isEmptyObject(nonEmptyObject));

// 演習5: デフォルト値の設定
console.log("\n演習5: デフォルト値の設定");
console.log("----------------------------");

// TODO: ||演算子を使ったデフォルト値設定を実装してください
function greetWithDefault(name) {
  // ここに実装
  return "";
}

// TODO: ??演算子を使ったnullish coalescingを実装してください
function greetWithNullish(name) {
  // ここに実装
  return "";
}

// テスト実行
const testNames = [undefined, null, "", 0, "田中"];
testNames.forEach(name => {
  console.log(`入力: ${name} (${typeof name})`);
  console.log(`  ||演算子: ${greetWithDefault(name)}`);
  console.log(`  ??演算子: ${greetWithNullish(name)}`);
  console.log("---");
});

// 演習6: 条件分岐の簡潔な書き方
console.log("\n演習6: 条件分岐の簡潔な書き方");
console.log("--------------------------------");

const users = [
  { name: "田中", email: "tanaka@test.com", profile: { age: 25 } },
  { name: "佐藤", email: "", profile: null },
  { name: "鈴木", email: null, profile: { age: null } },
  null,
  { name: "", email: "test@test.com" }
];

// TODO: 安全なプロパティアクセス関数を実装してください
function safeGetUserInfo(user) {
  // userの存在チェック
  // nameの存在チェック
  // emailの存在チェック
  // ここに実装
  
  const name = 'aaa';
  const email = 'aaa';
  const age = 'aaa';

  return { name, email, age };
}

// テスト実行
users.forEach((user, index) => {
  console.log(`ユーザー${index}:`, safeGetUserInfo(user));
});

// 演習7: 配列のフィルタリング
console.log("\n演習7: 配列のフィルタリング");
console.log("----------------------------");

const mixedValues = [0, 1, "", "hello", null, "world", undefined, false, true, NaN];

// TODO: 以下のフィルタリング関数を実装してください

// 1. falsy値を除去
function removeFalsy(array) {
  // ここに実装
}

// 2. null/undefinedのみを除去（0や""は残す）
function removeNullish(array) {
  // ここに実装
}

// 3. 空文字列のみを除去
function removeEmptyStrings(array) {
  // ここに実装
}

console.log("元の配列:", mixedValues);
console.log("falsy除去:", removeFalsy(mixedValues));
console.log("null/undefined除去:", removeNullish(mixedValues));
console.log("空文字列除去:", removeEmptyStrings(mixedValues));

// 演習8: 実践的なバリデーション
console.log("\n演習8: 実践的なバリデーション");
console.log("------------------------------");

// TODO: フォーム入力のバリデーション関数を実装してください
function validateInput(input) {
  // 0も有効な値として扱う
  // 空文字列、null、undefinedは無効
  // ここに実装
}

function validateAge(age) {
  // 0歳も有効とする
  // 数値以外は無効
  // 負の数は無効
  // ここに実装
}

function validateEmail(email) {
  // 空文字列、null、undefinedは無効
  // @を含まない場合は無効
  // ここに実装
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

// 演習9: Boolean()とダブル否定の活用
console.log("\n演習9: Boolean()とダブル否定の活用");
console.log("------------------------------------");

const testValues = [0, 1, "", "hello", null, undefined, [], {}, NaN];

// TODO: Boolean()を使った変換結果を出力してください
console.log("Boolean()による変換:");
testValues.forEach(value => {
  console.log(`Boolean(${value}):`, Boolean(value));
});

// TODO: !!を使った変換結果を出力してください
console.log("\n!!による変換:");
testValues.forEach(value => {
  console.log(`!!${value}:`, !!value);
});

// Boolean()と!!の違いを確認
console.log("\nBoolean()と!!の比較:");
testValues.forEach(value => {
  const bool1 = Boolean(value);
  const bool2 = !!value;
  console.log(`${value}: Boolean()=${bool1}, !!=${bool2}, 同じ=${bool1 === bool2}`);
});

// 演習10: 実践問題 - データクリーニング
console.log("\n演習10: 実践問題 - データクリーニング");
console.log("------------------------------------");

const rawUserData = [
  { id: 1, name: "田中", email: "tanaka@test.com", age: 25 },
  { id: 2, name: "", email: "sato@test.com", age: null },
  { id: 3, name: "鈴木", email: "", age: 30 },
  { id: 4, name: null, email: "takahashi@test.com", age: 0 },
  { id: 5, name: "渡辺", email: "watanabe@test.com", age: undefined },
  null,
  { id: 7, name: "山田", email: null, age: 28 }
];

// TODO: データクリーニング関数を実装してください
function cleanUserData(userData) {
  return userData
    .filter(user => {
      // nullなユーザーを除外
      // ここに実装
    })
    .map(user => {
      return {
        id: user.id,
        // name: /* 名前が空の場合は"名無し"にする */,
        // email: /* メールが空の場合は"未設定"にする */,
        // age: /* 年齢が無効な場合は0にする（ただし0は有効） */
      };
    })
    .filter(user => {
      // 必須フィールド（id）が有効かチェック
      // ここに実装
    });
}

const cleanedData = cleanUserData(rawUserData);
console.log("元データ件数:", rawUserData.length);
console.log("クリーニング後件数:", cleanedData.length);
console.log("クリーニング済みデータ:", cleanedData);

// 演習11: 複雑な条件判定
console.log("\n演習11: 複雑な条件判定");
console.log("------------------------");

// TODO: 複雑な条件を持つ判定関数を実装してください
function canAccessResource(user, resource) {
  // user が存在し、active が true
  // resource が存在し、available が true
  // user.permissions が存在し、resource.requiredPermission を含む
  // ここに実装
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
console.log("田中 → ファイルA(read):", canAccessResource(testUser1, testResource1));
console.log("田中 → ファイルB(write):", canAccessResource(testUser1, testResource2));
console.log("佐藤 → ファイルB(write):", canAccessResource(testUser2, testResource2));
console.log("null → ファイルA:", canAccessResource(testUser3, testResource1));

console.log("\n=== Day 2 truthy/falsy演習完了 ==="); 