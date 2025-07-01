// Day 5 演習: スプレッド演算子（Spread Operator）

console.log("=== Day 5 演習: スプレッド演算子 ===");

// 演習1: 配列のコピー
console.log("\n演習1: 配列のコピー");
console.log("------------------");

const originalNumbers = [1, 2, 3, 4, 5];

// TODO: スプレッド演算子を使ってoriginalNumbersをコピーしてください
// const copiedNumbers = /* ここに実装 */;

// テスト
// copiedNumbers.push(6);
// console.log("元の配列:", originalNumbers);
// console.log("コピーした配列:", copiedNumbers);
// console.log("同じ配列？", originalNumbers === copiedNumbers); // false であることを確認

// 演習2: 配列の結合
console.log("\n演習2: 配列の結合");
console.log("----------------");

const fruits = ["りんご", "バナナ"];
const vegetables = ["人参", "キャベツ"];
const meat = ["牛肉", "豚肉"];

// TODO: スプレッド演算子を使って3つの配列を結合してください
// const allFoods = /* ここに実装 */;

// console.log("すべての食材:", allFoods);

// 演習3: 配列に要素を追加
console.log("\n演習3: 配列に要素を追加");
console.log("---------------------");

const baseNumbers = [3, 4, 5];

// TODO: スプレッド演算子を使って以下を作成してください
// 1. 先頭に1,2を追加した配列
// const withPrefix = /* ここに実装 */;

// 2. 末尾に6,7を追加した配列
// const withSuffix = /* ここに実装 */;

// 3. 中間（3と4の間）に3.5を挿入した配列
// const withMiddle = /* ここに実装 */;

// console.log("先頭追加:", withPrefix);
// console.log("末尾追加:", withSuffix);
// console.log("中間挿入:", withMiddle);

// 演習4: オブジェクトのコピー
console.log("\n演習4: オブジェクトのコピー");
console.log("----------------------");

const originalUser = {
  name: "田中",
  age: 25,
  email: "tanaka@example.com"
};

// TODO: スプレッド演算子を使ってoriginalUserをコピーしてください
// const copiedUser = /* ここに実装 */;

// テスト
// copiedUser.age = 26;
// console.log("元のユーザー:", originalUser);
// console.log("コピーしたユーザー:", copiedUser);

// 演習5: オブジェクトの結合
console.log("\n演習5: オブジェクトの結合");
console.log("---------------------");

const basicInfo = { name: "佐藤", age: 30 };
const contactInfo = { email: "sato@example.com", phone: "080-1234-5678" };
const workInfo = { department: "営業部", position: "主任" };

// TODO: スプレッド演算子を使って3つのオブジェクトを結合してください
// const fullProfile = /* ここに実装 */;

// console.log("完全なプロフィール:", fullProfile);

// 演習6: オブジェクトプロパティの更新
console.log("\n演習6: オブジェクトプロパティの更新");
console.log("------------------------------");

const user = {
  id: 1,
  name: "鈴木",
  email: "suzuki@old.com",
  age: 28,
  active: false
};

// TODO: スプレッド演算子を使って以下のプロパティを更新してください
// - email: "suzuki@new.com"
// - age: 29
// - active: true
// const updatedUser = /* ここに実装 */;

// console.log("更新前:", user);
// console.log("更新後:", updatedUser);

// 演習7: 関数の引数で使用
console.log("\n演習7: 関数の引数で使用");
console.log("---------------------");

// 与えられた関数
function calculateSum(a, b, c, d) {
  return a + b + c + d;
}

const values = [10, 20, 30, 40];

// TODO: スプレッド演算子を使ってvalues配列をcalculateSum関数に渡してください
// const result = /* ここに実装 */;

// console.log("合計:", result); // 100

// 演習8: Math関数との組み合わせ
console.log("\n演習8: Math関数との組み合わせ");
console.log("----------------------------");

const scores = [85, 92, 78, 96, 88];

// TODO: スプレッド演算子を使って以下を求めてください
// const maxScore = /* Math.maxを使用 */;
// const minScore = /* Math.minを使用 */;

// console.log("最高点:", maxScore);
// console.log("最低点:", minScore);

// 演習9: 配列の重複除去
console.log("\n演習9: 配列の重複除去");
console.log("--------------------");

const numbersWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 5];

// TODO: スプレッド演算子とSetを使って重複を除去してください
// const uniqueNumbers = /* ここに実装 */;

// console.log("重複あり:", numbersWithDuplicates);
// console.log("重複なし:", uniqueNumbers);

// 演習10: ネストしたオブジェクトの更新
console.log("\n演習10: ネストしたオブジェクトの更新");
console.log("------------------------------");

const company = {
  name: "ABC商事",
  address: {
    prefecture: "東京都",
    city: "渋谷区",
    building: "ABCビル"
  },
  employees: 100
};

// TODO: スプレッド演算子を使ってaddress.cityを"新宿区"に更新してください
// 注意: ネストしたオブジェクトも適切にコピーする必要があります
// const updatedCompany = /* ここに実装 */;

// console.log("更新前:", company);
// console.log("更新後:", updatedCompany);

// 演習11: 配列から特定要素を除去
console.log("\n演習11: 配列から特定要素を除去");
console.log("-----------------------------");

const items = ["apple", "banana", "cherry", "date", "elderberry"];

// TODO: "cherry"を除去した新しい配列を作成してください
// スプレッド演算子とsliceを組み合わせて使用
function removeItem(array, itemToRemove) {
  const index = array.indexOf(itemToRemove);
  if (index === -1) return array;
  
  // return /* ここに実装 */;
}

// const filteredItems = removeItem(items, "cherry");
// console.log("元の配列:", items);
// console.log("フィルター後:", filteredItems);

// 演習12: 関数の引数分割代入との組み合わせ
console.log("\n演習12: 関数の引数分割代入との組み合わせ");
console.log("--------------------------------------");

const defaultSettings = {
  theme: "light",
  fontSize: 16,
  autoSave: true,
  notifications: true
};

// TODO: デフォルト設定と新しい設定をマージする関数を作成してください
// 分割代入も使用
// function updateSettings(newSettings) {
//   // ここに実装
//   // デフォルト設定を新しい設定で上書きしたオブジェクトを返す
// }

// テスト
const userSettings = {
  theme: "dark",
  fontSize: 18
};

// const finalSettings = updateSettings(userSettings);
// console.log("最終設定:", finalSettings);

// 演習13: 配列の分割とスプレッド演算子
console.log("\n演習13: 配列の分割とスプレッド演算子");
console.log("----------------------------------");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: 分割代入とスプレッド演算子を使って以下を実装してください
// 1. 最初の2つの要素を取得
// 2. 最後の2つの要素を取得
// 3. 中間の要素を取得（最初の2つと最後の2つを除く）

// const [/* 最初の2つ */] = data;
// const [/* 最後の2つ */] = data.slice(-2);
// const middle = /* 中間の要素 */;

// console.log("最初の2つ:", first, second);
// console.log("最後の2つ:", secondLast, last);
// console.log("中間の要素:", middle);

// 演習14: APIレスポンスの処理
console.log("\n演習14: APIレスポンスの処理");
console.log("------------------------");

const apiResponse1 = {
  users: [
    { id: 1, name: "田中" },
    { id: 2, name: "佐藤" }
  ],
  meta: { total: 10, page: 1 }
};

const apiResponse2 = {
  users: [
    { id: 3, name: "鈴木" },
    { id: 4, name: "高橋" }
  ],
  meta: { total: 10, page: 2 }
};

// TODO: 2つのAPIレスポンスを結合してください
// usersは配列として結合、metaは後のものを優先
// function mergeApiResponses(response1, response2) {
//   return {
//     users: /* ここに実装 */,
//     meta: /* ここに実装 */
//   };
// }

// const mergedResponse = mergeApiResponses(apiResponse1, apiResponse2);
// console.log("結合されたレスポンス:", mergedResponse);

// 演習15: 実践問題 - ショッピングカート
console.log("\n演習15: 実践問題 - ショッピングカート");
console.log("---------------------------------");

const cart = {
  items: [
    { id: 1, name: "商品A", price: 1000, quantity: 2 },
    { id: 2, name: "商品B", price: 1500, quantity: 1 }
  ],
  discount: 0.1,
  shippingFee: 500
};

// TODO: 以下の機能を実装してください

// 1. カートに新しい商品を追加する関数
// function addItemToCart(cart, newItem) {
//   return {
//     ...cart,
//     items: /* ここに実装 */
//   };
// }

// 2. 商品の数量を更新する関数
// function updateItemQuantity(cart, itemId, newQuantity) {
//   return {
//     ...cart,
//     items: cart.items.map(item => 
//       item.id === itemId 
//         ? /* ここに実装 */ 
//         : item
//     )
//   };
// }

// 3. 商品を削除する関数
// function removeItemFromCart(cart, itemId) {
//   return {
//     ...cart,
//     items: /* ここに実装 */
//   };
// }

// テスト
const newItem = { id: 3, name: "商品C", price: 800, quantity: 3 };

// console.log("元のカート:", cart);
// console.log("商品追加後:", addItemToCart(cart, newItem));
// console.log("数量更新後:", updateItemQuantity(cart, 1, 5));
// console.log("商品削除後:", removeItemFromCart(cart, 2));

console.log("\n=== Day 5 スプレッド演算子演習完了 ===");
console.log("※ 解答は solutions/additional-solutions/ フォルダにあります"); 