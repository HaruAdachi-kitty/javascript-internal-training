// Day 2 演習: メモリ概念（スタック・ヒープ）の理解

console.log("=== Day 2 演習: メモリ概念の理解 ===");

// 演習1: スタック（値渡し）の動作確認
console.log("\n演習1: スタック（値渡し）の動作確認");
console.log("----------------------------------");

let a = 10;
let b = a;  // 値がコピーされる

console.log("初期状態:");
console.log("a =", a, "b =", b);

a = 20;  // aを変更

console.log("a = 20 に変更後:");
console.log("設問1: bの値はどうなりましたか？その理由を考えてください");


// 演習2: ヒープ（参照渡し）の動作確認
console.log("\n演習2: ヒープ（参照渡し）の動作確認");
console.log("------------------------------------");

let obj1 = { value: 10 };
let obj2 = obj1;  // 参照がコピーされる

console.log("初期状態:");
console.log("obj1 =", obj1, "obj2 =", obj2);

obj1.value = 20;  // obj1のvalueを変更

console.log("obj1.value = 20 に変更後:");
console.log("設問2: obj2の値はどうなりましたか？その理由を考えてください");

// 演習3: 配列での参照の動作
console.log("\n演習3: 配列での参照の動作");
console.log("----------------------------");

const numbers1 = [1, 2, 3];
const numbers2 = numbers1;

console.log("初期状態:");
console.log("numbers1:", numbers1);
console.log("numbers2:", numbers2);

numbers1.push(4);

console.log("numbers1.push(4) 実行後:");
console.log("設問3: numbers2の値はどうなりましたか？この結果の理由を説明してください");

// 演習4: 正しいコピー方法
console.log("\n演習4: 正しいコピー方法");
console.log("------------------------");

const original = [1, 2, 3];

// TODO: 以下の方法で配列をコピーして、元の配列に影響しないか確認してください

// 方法1: スプレッド演算子
const copy1 = [...original];
copy1.push(4);
console.log("スプレッド演算子:");
console.log("original:", original);
console.log("copy1:", copy1);

// 方法2: slice()メソッド
const copy2 = original.slice();
copy2.push(5);
console.log("slice()メソッド:");
console.log("original:", original);
console.log("copy2:", copy2);

// 方法3: Array.from()
const copy3 = Array.from(original);
copy3.push(6);
console.log("Array.from():");
console.log("original:", original);
console.log("copy3:", copy3);

console.log("設問4: 3つの方法すべてで、元の配列originalは変更されていませんか？");

// 演習5: オブジェクトのシャローコピー
console.log("\n演習5: オブジェクトのシャローコピー");
console.log("--------------------------------");

const person = {
  name: "田中",
  age: 25,
  hobbies: ["読書", "映画"]
};

// TODO: オブジェクトをコピーした新しいオブジェクトを作成して、nameプロパティを変更してください
const personCopy = { ...person };
personCopy.name = "佐藤";

console.log("nameプロパティ変更後:");
console.log("person.name:", person.name);
console.log("personCopy.name:", personCopy.name);

// 問題: hobbies配列に要素を追加してみてください
personCopy.hobbies.push("旅行");

console.log("hobbies追加後:");
console.log("設問5: person.hobbiesとpersonCopy.hobbiesの値を比較してください");
console.log("設問5-2: なぜ両方のhobbiesが変わったのか考えてください（シャローコピーの限界）");

// 演習6: ディープコピーの必要性
console.log("\n演習6: ディープコピーの必要性");
console.log("------------------------------");

const user = {
  name: "田中",
  profile: {
    age: 25,
    address: {
      city: "東京",
      zip: "100-0001"
    }
  }
};

// シャローコピー
const userShallowCopy = { ...user };
userShallowCopy.profile.age = 30;

console.log("シャローコピー後のage変更:");
console.log("設問6-1: user.profile.ageとuserShallowCopy.profile.ageの値を確認してください");

// 簡易ディープコピー（JSON使用）
const userDeepCopy = JSON.parse(JSON.stringify(user));
userDeepCopy.profile.address.city = "大阪";

console.log("ディープコピー後のcity変更:");
console.log("設問6-2: user.profile.address.cityとuserDeepCopy.profile.address.cityの値を確認してください");
console.log("設問6-3: シャローコピーとディープコピーの違いを説明してください");

// 演習7: 関数の引数での参照渡し
console.log("\n演習7: 関数の引数での参照渡し");
console.log("--------------------------------");

function modifyPrimitive(num) {
  num = 100;
  console.log("関数内でnum:", num);
}

function modifyObject(obj) {
  obj.value = 100;
  console.log("関数内でobj:", obj);
}

let number = 10;
let object = { value: 10 };

console.log("関数呼び出し前:");
console.log("number:", number);
console.log("object:", object);

modifyPrimitive(number);
modifyObject(object);

console.log("関数呼び出し後:");
console.log("設問7: numberとobjectの値を確認してください");
console.log("設問7-2: なぜnumberは変わらず、objectは変わったのか理由を説明してください");

// 演習8: 実践問題 - 安全なデータ処理
console.log("\n演習8: 実践問題 - 安全なデータ処理");
console.log("------------------------------------");

const customers = [
  { id: 1, name: "田中", orders: [{ item: "商品A", price: 1000 }] },
  { id: 2, name: "佐藤", orders: [{ item: "商品B", price: 2000 }] }
];

// TODO: 以下の関数を実装してください

// 1. 顧客データを安全にコピーする関数
function safeCloneCustomers(customers) {
  // ディープコピーを実装（JSON.parse/JSON.stringifyを使用）
  return JSON.parse(JSON.stringify(customers));
}

// 2. 顧客の注文に新しい商品を追加する関数（元データを変更しない）
function addOrderToCustomer(customers, customerId, newOrder) {
  const clonedCustomers = safeCloneCustomers(customers);
  const customer = clonedCustomers.find(c => c.id === customerId);
  if (customer) {
    customer.orders.push(newOrder);
  }
  return clonedCustomers;
}

// テスト実行
console.log("元のデータ:", customers);

const updatedCustomers = addOrderToCustomer(customers, 1, { item: "商品C", price: 3000 });

console.log("更新後のデータ:", updatedCustomers);
console.log("元のデータ（変更されていないか確認）:", customers);
console.log("設問8: 元のcustomersデータは変更されていませんか？なぜ安全にデータ処理ができたのか説明してください");

// 演習9: メモリ効率の考慮
console.log("\n演習9: メモリ効率の考慮");
console.log("------------------------");

// 大きなデータセットでの処理を想定
const largeDataset = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  data: `データ${i + 1}`,
  processed: false
}));

// TODO: メモリ効率を考慮した処理方法を実装してください

// 悪い例: 全データをコピーしてから処理
function processDataBad(dataset) {
  const copied = JSON.parse(JSON.stringify(dataset)); // 全データをコピー
  return copied.filter(item => item.id <= 10);
}

// 良い例: 必要な部分のみを処理
function processDataGood(dataset) {
  return dataset
    .filter(item => item.id <= 10)  // 先に絞り込み
    .map(item => ({ ...item, processed: true })); // 必要な分のみコピー
}

console.time("悪い例の実行時間");
const result1 = processDataBad(largeDataset);
console.timeEnd("悪い例の実行時間");

console.time("良い例の実行時間");
const result2 = processDataGood(largeDataset);
console.timeEnd("良い例の実行時間");

console.log("処理結果の数:", result1.length, result2.length);
console.log("設問9: 実行時間を比較してください。なぜ「良い例」の方が速いのか理由を説明してください");

console.log("\n=== Day 2 メモリ概念演習完了 ==="); 