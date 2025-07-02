// Day 3 演習: オブジェクト配列の操作

console.log('=== Day 3 演習: オブジェクト配列の操作 ===');

// サンプルデータ
const users = [
  {
    id: 1,
    name: '田中太郎',
    age: 25,
    department: '営業',
    active: true,
    salary: 300000,
  },
  {
    id: 2,
    name: '佐藤花子',
    age: 30,
    department: '開発',
    active: true,
    salary: 400000,
  },
  {
    id: 3,
    name: '鈴木一郎',
    age: 35,
    department: '営業',
    active: false,
    salary: 350000,
  },
  {
    id: 4,
    name: '高橋美穂',
    age: 28,
    department: '人事',
    active: true,
    salary: 320000,
  },
  {
    id: 5,
    name: '渡辺健太',
    age: 32,
    department: '開発',
    active: true,
    salary: 450000,
  },
];

const products = [
  {
    id: 1,
    name: 'ノートPC',
    price: 80000,
    category: '電子機器',
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'マウス',
    price: 2000,
    category: '電子機器',
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: 'デスク',
    price: 15000,
    category: '家具',
    inStock: false,
    rating: 4.0,
  },
  {
    id: 4,
    name: 'チェア',
    price: 25000,
    category: '家具',
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'キーボード',
    price: 5000,
    category: '電子機器',
    inStock: true,
    rating: 4.3,
  },
];

// 演習1: forEach()の基本
console.log('\n演習1: forEach()の基本');
console.log('--------------------');

// TODO: 全ユーザーの名前と年齢を「名前（年齢歳）」の形式で出力してください
console.log('全ユーザー一覧:');
users.forEach((user) => {
  console.log(`${user.name}(${user.age})`);
  // ここに実装
});

// TODO: インデックス付きで部署名を出力してください
console.log('\n部署一覧:');
users.forEach((user, index) => {
  // ここに実装
  console.log(`${index}、${user.department}`);
});

// 演習2: map()で配列変換
console.log('\n演習2: map()で配列変換');
console.log('----------------------');

// TODO: ユーザーの名前だけの配列を作成してください
const userNames = users.map((user) => {
  return user.name;
});
const userNames2 = users.map(function(user){
  return user.name;
});
console.log('ユーザー名一覧:', userNames);

function calc(a,b){
  return a + b;
}
// TODO: 商品情報を「商品名 - ¥価格」の形式の配列に変換してください
const productInfo = products.map((product) => {
  return `${product.name} - ¥${product.price}`;
  // ここに実装
});
console.log('商品情報:', productInfo);

// TODO: ユーザーに「若手」または「ベテラン」の判定を追加してください（30歳未満は若手）
const usersWithCategory = users.map((user) => ({
  ...user,
  young : user.age < 30 ? "若手" : "ベテラン"

  // ここに実装
}));
console.log('カテゴリ付きユーザー:', usersWithCategory);

// 演習3: filter()で条件抽出
console.log('\n演習3: filter()で条件抽出');
console.log('-------------------------');

// TODO: アクティブなユーザーのみを抽出してください
const activeUsers = users.filter((user) => {
  // ここに実装
 return user.active;
});
console.log('アクティブユーザー:', activeUsers);

// TODO: 30歳以上かつ営業部のユーザーを抽出してください
const seniorSalesUsers = users.filter((user) => {
  return user.age >= 30 && user.department === "営業";
  // ここに実装
});
console.log('30歳以上の営業部:', seniorSalesUsers);

// TODO: 在庫があり、かつ価格が10000円以下の商品を抽出してください
const affordableInStockProducts = products.filter((product) => {
  return product.inStock && product.price <=10000;
  // ここに実装
});
console.log('お手頃価格の在庫商品:', affordableInStockProducts);

// 演習4: find()で検索
console.log('\n演習4: find()で検索');
console.log('------------------');

// TODO: ID=3のユーザーを検索してください
const userById = users.find((user) => {
  // ここに実装
  return user.id === 3
});
console.log('ID=3のユーザー:', userById);

// TODO: 開発部の最初のユーザーを検索してください
const firstDeveloper = users.find((user) => {
  // ここに実装
  return user.department === "開発"
});
console.log('開発部の最初のユーザー:', firstDeveloper);

// TODO: 評価が4.5以上の最初の商品を検索してください
const highRatedProduct = products.find((product) => {
  // ここに実装
});
const highRatedProduct2 = products.find(function(product){
  return product.rating >=4.5;
});
console.log('高評価商品:', highRatedProduct2);

// 演習5: メソッドチェーン
console.log('\n演習5: メソッドチェーン');
console.log('----------------------');

// TODO: アクティブな開発部メンバーの名前一覧を取得してください
const activeDeveloperNames = users
  .filter(function(user){
    return user.active;
  })
  .filter(function(user){
    return user.department === "開発";
  })
  .map(function(user){
    return user.name;
  });
console.log('アクティブな開発部メンバー:', activeDeveloperNames);

// TODO: 在庫のある電子機器の価格一覧を安い順で取得してください
const electronicsPrices = products
  .filter(function(product){
    return product.inStock;
  })
  .filter(function(product){
    return product.category === "電子機器";
  })
  .map(function(product){
    return product.price;
  })
  .sort(function(a,b){
    console.log('aの値は' +a);
    console.log('bの値は' +b);
    return a - b;
  });
console.log('電子機器価格（安い順）:', electronicsPrices);

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => {
  console.log('aの値は' +a);
  console.log('bの値は' +b);

  return a - b; // aがbより小さければ負、大きければ正、同じならゼロを返す
});
console.log(numbers); // [1, 5, 10, 25, 40, 100]

const data = [
  { name: 'iPhone', price: 80000, category: 'electronics', rating: 4.5 },
  { name: 'MacBook', price: 150000, category: 'electronics', rating: 4.8 },
  { name: 'Coffee', price: 500, category: 'food', rating: 4.2 },
  { name: 'Book', price: 1500, category: 'education', rating: 4.0 },
];
data.sort(function(a,b){
  return a.price - b.price;
})
console.log('データ価格順(安い順):',data);


data.sort(function(a,b){
  return b.rating - a.rating;
})
console.log('評価順:',data);
// 演習6: 複雑な変換
console.log('\n演習6: 複雑な変換');
console.log('------------------');

// TODO: 部署別のユーザー数をオブジェクトで返してください
// 結果例: { "営業": 2, "開発": 2, "人事": 1 }
const departmentCount = users.reduce((acc, user) => {
  // ここに実装
  return acc;
},{});
const departmentCount2 = users.reduce(function(acc, user){
  acc[user.department] = (acc[user.department] || 0) +1;
  return acc;
},{});
console.log('部署別人数:', departmentCount2);

const a={
  name:shimizu,
  id:123,
  age:22
};
const b=[];
b.push(1,2,3,4,5,6,7,8,9,10);
const result = b.filter(function(b){
  b >= 5;
});
console.log('5以上の数：'+result);
// TODO: カテゴリ別の商品平均価格を計算してください
const avgPriceByCategory = products.reduce((acc, product) => {
  // ここに実装
  return acc;
}, {});
const avgPriceByCategory2 = products.reduce(function(acc,b, product){
  acc[product.category] = (acc[product.category] || 0)+ product.price;
  b[product.category] = (b[product.category] || 0)+1;
  const a = acc/b;
  return a;
});
console.log('カテゴリ別平均価格:', avgPriceByCategory2);

// 演習7: 検索・絞り込み機能
console.log('\n演習7: 検索・絞り込み機能');
console.log('---------------------------');

// TODO: 名前で部分一致検索する関数を実装してください
function searchUsersByName(users, query) {
  // ここに実装
}

// TODO: 複数条件でユーザーを絞り込む関数を実装してください
function filterUsers(users, filters) {
  return users.filter((user) => {
    // filters.department が指定されていて、異なる場合はfalse
    // filters.minAge が指定されていて、年齢が下回る場合はfalse
    // filters.active が指定されていて、異なる場合はfalse
    // ここに実装
    return true;
  });
}

// テスト実行
console.log("名前検索（'田'）:", searchUsersByName(users, '田'));
console.log(
  '絞り込み（開発部、30歳以上、アクティブ）:',
  filterUsers(users, { department: '開発', minAge: 30, active: true })
);

// 演習8: ソート機能
console.log('\n演習8: ソート機能');
console.log('------------------');

// TODO: ユーザーを年齢順（昇順）でソートしてください
// 注意: 元の配列を変更しないこと
const sortedByAge = [...users].sort((a, b) => {
  // ここに実装
});
console.log(
  '年齢順:',
  sortedByAge.map((u) => `${u.name}(${u.age})`)
);

// TODO: 商品を価格順（降順）でソートしてください
const sortedByPriceDesc = [...products].sort((a, b) => {
  // ここに実装
});
console.log(
  '価格順（高い順）:',
  sortedByPriceDesc.map((p) => `${p.name}(¥${p.price})`)
);

// TODO: ユーザーを部署名→年齢順でソートしてください
const sortedByDeptAndAge = [...users].sort((a, b) => {
  // ここに実装
});
console.log(
  '部署→年齢順:',
  sortedByDeptAndAge.map((u) => `${u.department}-${u.name}(${u.age})`)
);

// 演習9: エラーハンドリング
console.log('\n演習9: エラーハンドリング');
console.log('------------------------');

// TODO: 安全なユーザー検索関数を実装してください
function findUserSafely(users, id) {
  // IDの型チェック
  // ユーザーの存在チェック
  // 適切な戻り値
  // ここに実装
}

// TODO: 安全な配列操作関数を実装してください
function safeArrayOperation(array, operation) {
  // 配列の妥当性チェック
  // 空配列のチェック
  // エラーハンドリング
  // ここに実装
}

// テスト実行
console.log('安全な検索（存在するID）:', findUserSafely(users, 1));
console.log('安全な検索（存在しないID）:', findUserSafely(users, 999));
console.log('安全な検索（無効なID）:', findUserSafely(users, 'abc'));

// 演習10: 実践的なデータ処理
console.log('\n演習10: 実践的なデータ処理');
console.log('----------------------------');

// TODO: ユーザー統計を計算する関数を実装してください
function calculateUserStatistics(users) {
  // TODO: アクティブユーザーのみ抽出
  // const activeUsers = ここに実装;

  return {
    total: users.length,
    // active: activeUsers.length,
    // averageAge: 平均年齢を計算,
    // departmentDistribution: 部署別分布を計算,
    // averageSalary: 平均給与を計算
  };
}

// TODO: 商品推奨リストを作成する関数を実装してください
function getRecommendedProducts(products, criteria = {}) {
  return products
    .filter((product) => {
      // 在庫があること
      // 最小評価以上であること（criteria.minRating）
      // 最大価格以下であること（criteria.maxPrice）
      // 指定カテゴリであること（criteria.category）
      // ここに実装
      return true;
    })
    .sort(/* 評価順（降順）でソート */)
    .slice(0, criteria.limit || 5); // 上位N件
}

// テスト実行
console.log('ユーザー統計:', calculateUserStatistics(users));
console.log(
  '推奨商品（評価4.0以上、1万円以下）:',
  getRecommendedProducts(products, {
    minRating: 4.0,
    maxPrice: 10000,
    limit: 3,
  })
);

// 演習11: パフォーマンス考慮
console.log('\n演習11: パフォーマンス考慮');
console.log('------------------------');

const largeUserSet = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `ユーザー${i + 1}`,
  age: 20 + (i % 40),
  department: ['営業', '開発', '人事', '総務'][i % 4],
  active: i % 3 !== 0,
}));

// TODO: 効率的な検索処理を実装してください
function efficientSearch(users, conditions) {
  // 条件の順序を最適化
  // 早期リターンを活用
  // ここに実装
}

// TODO: some()とevery()を使った効率的な判定を実装してください
function hasActiveUser(users) {
  // find()よりもsome()が効率的な理由を考えてください
  // ここに実装
}

function allUsersAreActive(users) {
  // every()を使用してください
  // ここに実装
}

// テスト実行（大きなデータでの処理時間比較）
console.time('効率的な検索');
const result1 = efficientSearch(largeUserSet, {
  department: '開発',
  active: true,
});
console.timeEnd('効率的な検索');

console.log('アクティブユーザーが存在するか:', hasActiveUser(largeUserSet));
console.log('全ユーザーがアクティブか:', allUsersAreActive(largeUserSet));

console.log('\n=== Day 3 オブジェクト配列操作演習完了 ===');
