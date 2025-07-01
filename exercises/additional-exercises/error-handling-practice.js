// Day 3.5 演習: エラーハンドリング

console.log("=== Day 3.5 演習: エラーハンドリング ===");

// 演習1: 基本的なtry-catch
console.log("\n演習1: 基本的なtry-catch");
console.log("------------------------");

// TODO: 以下の関数にtry-catchを追加してエラーハンドリングを実装してください
function safeDivision(a, b) {
  // この関数を安全にしてください
  // 0で割る場合はエラーをthrowして、catchでメッセージを表示してnullを返す
  
  // if (b === 0) {
  //   throw new Error("0で割ることはできません");
  // }
  // return a / b;
}

// テスト
console.log("safeDivision(10, 2):", safeDivision(10, 2)); // 5
console.log("safeDivision(10, 0):", safeDivision(10, 0)); // エラーメッセージ後null

// 演習2: JSON解析のエラーハンドリング
console.log("\n演習2: JSON解析のエラーハンドリング");
console.log("-------------------------------");

// TODO: JSON文字列を安全に解析する関数を作成してください
function safeParseJSON(jsonString) {
  // try-catchを使ってJSON.parse()を安全に実行
  // 成功時: パースした結果を返す
  // 失敗時: エラーメッセージを表示してnullを返す
}

// テスト
const validJSON = '{"name": "田中", "age": 25}';
const invalidJSON = '{name: "田中", age: 25}'; // 無効なJSON
const notJSON = "これはJSONではありません";

console.log("有効なJSON:", safeParseJSON(validJSON));
console.log("無効なJSON:", safeParseJSON(invalidJSON));
console.log("JSON以外:", safeParseJSON(notJSON));

// 演習3: 配列アクセスのエラーハンドリング
console.log("\n演習3: 配列アクセスのエラーハンドリング");
console.log("----------------------------------");

// TODO: 配列の指定されたインデックスの値を安全に取得する関数を作成してください
function safeArrayAccess(array, index) {
  try {
    // 配列とインデックスの妥当性をチェック
    // - arrayが配列でない場合はエラー
    // - indexが範囲外の場合はエラー
    // - 正常な場合は値を返す
  } catch (error) {
    // エラーハンドリング
  }
}

// テスト
const testArray = ["a", "b", "c"];
console.log("正常アクセス:", safeArrayAccess(testArray, 1)); // "b"
console.log("範囲外アクセス:", safeArrayAccess(testArray, 5)); // エラーメッセージ
console.log("非配列:", safeArrayAccess("not array", 0)); // エラーメッセージ

// 演習4: オブジェクトプロパティの安全なアクセス
console.log("\n演習4: オブジェクトプロパティの安全なアクセス");
console.log("--------------------------------------");

// TODO: オブジェクトのプロパティを安全に取得する関数を作成してください
function safeGetProperty(obj, property) {
  try {
    // objがnullやundefinedの場合はエラー
    // propertyが存在しない場合はundefinedを返す
    // エラーが発生した場合は適切なメッセージを表示
  } catch (error) {
    // エラーハンドリング
  }
}

// テスト
const testObj = { name: "田中", age: 25 };
console.log("存在するプロパティ:", safeGetProperty(testObj, "name")); // "田中"
console.log("存在しないプロパティ:", safeGetProperty(testObj, "email")); // undefined
console.log("nullオブジェクト:", safeGetProperty(null, "name")); // エラーメッセージ

// 演習5: 複数のエラータイプの処理
console.log("\n演習5: 複数のエラータイプの処理");
console.log("-----------------------------");

// TODO: 複数の処理を行い、それぞれ異なるエラーハンドリングを行う関数を作成してください
function processData(data) {
  try {
    // 1. dataがnull/undefinedの場合: "データがありません"
    // 2. dataが配列でない場合: "データは配列である必要があります"
    // 3. 配列が空の場合: "データが空です"
    // 4. 各要素が数値でない場合: "すべての要素は数値である必要があります"
    // 5. 正常な場合: 配列の合計値を返す
    
    // エラーの種類に応じて適切なエラーオブジェクトをthrow
    // catch文で種類別の処理を行う
    
  } catch (error) {
    // エラータイプ別の処理
  }
}

// テスト
console.log("正常データ:", processData([1, 2, 3, 4, 5])); // 15
console.log("null:", processData(null)); // エラーメッセージ
console.log("非配列:", processData("not array")); // エラーメッセージ
console.log("空配列:", processData([])); // エラーメッセージ
console.log("非数値含む:", processData([1, 2, "3", 4])); // エラーメッセージ

// 演習6: 非同期処理のエラーハンドリング（Promise）
console.log("\n演習6: 非同期処理のエラーハンドリング");
console.log("--------------------------------");

// TODO: Promiseを使った非同期処理のエラーハンドリングを実装してください
function simulateAsyncOperation(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("非同期処理でエラーが発生しました"));
      } else {
        resolve("非同期処理が成功しました");
      }
    }, 1000);
  });
}

// TODO: async/awaitを使って上記の関数を安全に呼び出す関数を作成してください
async function safeAsyncCall(shouldFail) {
  try {
    // simulateAsyncOperationを呼び出してtry-catchでエラーハンドリング
  } catch (error) {
    // エラーハンドリング
  }
}

// テスト（非同期なので結果は遅れて表示されます）
console.log("非同期処理開始...");
// safeAsyncCall(false); // 成功パターン
// safeAsyncCall(true);  // 失敗パターン

// 演習7: カスタムエラーの作成
console.log("\n演習7: カスタムエラーの作成");
console.log("------------------------");

// TODO: カスタムエラークラスを作成してください
class ValidationError extends Error {
  constructor(message) {
    // Errorクラスを継承してカスタムエラーを作成
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    // NetworkErrorにstatusCodeプロパティを追加
  }
}

// TODO: 上記のカスタムエラーを使用する関数を作成してください
function validateUserInput(user) {
  try {
    // ユーザー入力の検証を行い、問題があればValidationErrorをthrow
    // 例: nameが空、emailに@が含まれていない、ageが負の値など
  } catch (error) {
    // エラータイプ別の処理
  }
}

// テスト
const validUser = { name: "田中", email: "tanaka@test.com", age: 25 };
const invalidUser1 = { name: "", email: "tanaka@test.com", age: 25 };
const invalidUser2 = { name: "田中", email: "invalid-email", age: 25 };

// console.log("有効ユーザー:", validateUserInput(validUser));
// console.log("無効ユーザー1:", validateUserInput(invalidUser1));
// console.log("無効ユーザー2:", validateUserInput(invalidUser2));

// 演習8: エラーログの記録
console.log("\n演習8: エラーログの記録");
console.log("---------------------");

// TODO: エラーログを記録する関数を作成してください
const errorLogs = [];

function logError(error, context = {}) {
  // エラー情報をerrorLogsに記録
  // 記録する情報: エラーメッセージ、発生時刻、コンテキスト情報
}

// TODO: ログ機能付きの安全な関数実行ラッパーを作成してください
function safeExecute(func, ...args) {
  try {
    // 関数を実行し、エラーが発生した場合はログに記録
  } catch (error) {
    // エラーログ記録とエラーハンドリング
  }
}

// テスト関数
function riskyFunction(x) {
  if (x < 0) {
    throw new Error("負の値は処理できません");
  }
  return x * 2;
}

// テスト
// console.log("正常実行:", safeExecute(riskyFunction, 5));
// console.log("エラー実行:", safeExecute(riskyFunction, -3));
// console.log("エラーログ:", errorLogs);

// 演習9: リトライ機能付きエラーハンドリング
console.log("\n演習9: リトライ機能付きエラーハンドリング");
console.log("--------------------------------------");

// TODO: 失敗した処理を指定回数リトライする関数を作成してください
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
  // operationを実行し、失敗した場合はmaxRetries回まで再試行
  // 各試行の間にdelay分待機
  // 最終的に失敗した場合は最後のエラーをthrow
}

// テスト用の不安定な関数
let attemptCount = 0;
function unstableOperation() {
  attemptCount++;
  console.log(`試行回数: ${attemptCount}`);
  
  if (attemptCount < 3) {
    throw new Error("処理に失敗しました");
  }
  
  return "処理成功！";
}

// テスト
// console.log("リトライ処理開始...");
// retryOperation(unstableOperation)
//   .then(result => console.log("最終結果:", result))
//   .catch(error => console.log("最終エラー:", error.message));

// 演習10: 実践問題 - フォームバリデーション
console.log("\n演習10: 実践問題 - フォームバリデーション");
console.log("--------------------------------------");

// TODO: 包括的なフォームバリデーション関数を作成してください
function validateForm(formData) {
  const errors = [];
  
  try {
    // 以下の項目を検証し、エラーがあればerrorsに追加
    // 1. name: 必須、2文字以上
    // 2. email: 必須、@を含む
    // 3. age: 必須、18-100の範囲内
    // 4. password: 必須、8文字以上
    // 5. confirmPassword: passwordと一致
    
    // すべての検証が完了した後、エラーがあれば専用のエラーをthrow
    
  } catch (error) {
    // バリデーションエラーの処理
  }
  
  // 戻り値: { valid: boolean, errors: string[], data?: object }
}

// テスト
const formData1 = {
  name: "田中太郎",
  email: "tanaka@test.com",
  age: 25,
  password: "password123",
  confirmPassword: "password123"
};

const formData2 = {
  name: "田",
  email: "invalid-email",
  age: 15,
  password: "123",
  confirmPassword: "456"
};

// console.log("有効フォーム:", validateForm(formData1));
// console.log("無効フォーム:", validateForm(formData2));

console.log("\n=== Day 3.5 エラーハンドリング演習完了 ===");
console.log("※ 解答は solutions/additional-solutions/ フォルダにあります"); 