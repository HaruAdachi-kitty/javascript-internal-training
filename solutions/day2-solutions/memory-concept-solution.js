// Day 2 演習解答: メモリ概念（スタック・ヒープ）の理解

console.log("=== Day 2 演習解答: メモリ概念の理解 ===");

// 設問の解答
console.log("\n設問の解答");
console.log("----------");

console.log("設問1: bの値は10のまま変わりません");
console.log("理由: プリミティブ型（数値）は値がコピーされるため、aを変更してもbには影響しません");

console.log("\n設問2: obj2.valueも20に変わります");
console.log("理由: オブジェクトは参照がコピーされるため、同じオブジェクトを参照しています");

console.log("\n設問3: numbers2も[1, 2, 3, 4]に変わります");
console.log("理由: 配列も参照型のため、同じ配列オブジェクトを参照しています");

console.log("\n設問4: 3つの方法すべてで元の配列originalは変更されません");
console.log("理由: スプレッド演算子、slice()、Array.from()はすべて新しい配列を作成するためです");

console.log("\n設問5: person.hobbiesとpersonCopy.hobbiesは両方とも['読書', '映画', '旅行']になります");
console.log("設問5-2: シャローコピーでは、オブジェクト内の配列やオブジェクトは参照がコピーされるためです");

console.log("\n設問6-1: user.profile.ageとuserShallowCopy.profile.ageは両方とも30になります");
console.log("\n設問6-2: user.profile.address.cityは'東京'のまま、userDeepCopy.profile.address.cityは'大阪'になります");
console.log("設問6-3: シャローコピーは1階層のみコピー、ディープコピーはすべての階層を再帰的にコピーします");

console.log("\n設問7: numberは10のまま、objectは{value: 100}に変わります");
console.log("設問7-2: プリミティブ型は値渡し、オブジェクトは参照渡しのためです");

console.log("\n設問8: 元のcustomersデータは変更されていません");
console.log("理由: JSON.parse(JSON.stringify())でディープコピーを作成したためです");

console.log("\n設問9: '良い例'の方が高速です");
console.log("理由: 先にfilterで絞り込んでから処理するため、メモリ使用量と処理時間が削減されます");

// 以下は実装例の解答を提供します。

// 演習8: 実践問題 - 安全なデータ処理の解答
console.log("\n演習8: 実践問題 - 安全なデータ処理の解答");
console.log("--------------------------------------------");

const customers = [
  { id: 1, name: "田中", orders: [{ item: "商品A", price: 1000 }] },
  { id: 2, name: "佐藤", orders: [{ item: "商品B", price: 2000 }] }
];

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

// 演習9: メモリ効率の考慮 - 解答
console.log("\n演習9: メモリ効率の考慮 - 解答");
console.log("------------------------------");

// 大きなデータセットでの処理を想定
const largeDataset = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  data: `データ${i + 1}`,
  processed: false
}));

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

// 追加の実践例
console.log("\n追加の実践例: 安全なオブジェクト操作");
console.log("----------------------------------");

// 安全なプロパティ更新
function safeUpdateObject(obj, updates) {
  // 元のオブジェクトを変更せずに新しいオブジェクトを返す
  return { ...obj, ...updates };
}

// 深いネストのオブジェクトの安全な更新
function safeUpdateNestedObject(obj, path, value) {
  const keys = path.split('.');
  const result = JSON.parse(JSON.stringify(obj)); // ディープクローン
  
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  
  return result;
}

// テスト
const originalUser = {
  name: "田中",
  profile: {
    age: 25,
    address: {
      city: "東京"
    }
  }
};

const updatedUser = safeUpdateObject(originalUser, { name: "佐藤" });
const updatedNested = safeUpdateNestedObject(originalUser, "profile.address.city", "大阪");

console.log("元のユーザー:", originalUser);
console.log("名前更新後:", updatedUser);
console.log("住所更新後:", updatedNested);

console.log("\n=== Day 2 メモリ概念演習解答完了 ==="); 