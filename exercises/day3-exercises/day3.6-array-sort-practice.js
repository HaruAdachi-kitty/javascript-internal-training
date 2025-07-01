// Day 3.7: Array.sort() 実践練習ファイル
// このファイルを実行して、sort()の動作を体感してみましょう

console.log('=== Array.sort() 実践練習 ===\n');

// ===== 1. 基本的な動作確認 =====
console.log('1. 基本的な動作確認');
console.log('------------------------');

const numbers = [10, 2, 1, 100, 20];
console.log('元の配列:', numbers);

// デフォルトのソート（文字列として比較）
const defaultSort = [...numbers].sort();
console.log('デフォルトソート:', defaultSort);

// 数値としてのソート
const numericSort = [...numbers].sort((a, b) => a - b);
console.log('数値ソート:', numericSort);

console.log('\n');

// ===== 2. 比較関数の動作を詳しく見る =====
console.log('2. 比較関数の動作詳細');
console.log('------------------------');

function detailedSort(arr) {
  console.log('ソート開始:', arr);
  let stepCount = 0;

  const result = [...arr].sort((a, b) => {
    stepCount++;
    const comparison = a - b;
    console.log(
      `ステップ${stepCount}: ${a} vs ${b} = ${comparison} ${
        comparison < 0 ? '(aが前)' : comparison > 0 ? '(bが前)' : '(同じ)'
      }`
    );
    return comparison;
  });

  console.log('最終結果:', result);
  console.log(`総ステップ数: ${stepCount}\n`);
  return result;
}

detailedSort([3, 1, 4, 2]);

// ===== 3. オブジェクトの配列ソート =====
console.log('3. オブジェクトの配列ソート');
console.log('----------------------------');

const students = [
  { name: 'Alice', age: 25, score: 85 },
  { name: 'Bob', age: 22, score: 92 },
  { name: 'Charlie', age: 24, score: 78 },
  { name: 'Diana', age: 26, score: 88 },
];

console.log('元のデータ:', students);

// 年齢でソート
console.log('\n年齢順（昇順）:');
const byAge = [...students].sort((a, b) => a.age - b.age);
byAge.forEach((student) => console.log(`${student.name}: ${student.age}歳`));

// スコアでソート（降順）
console.log('\nスコア順（降順）:');
const byScore = [...students].sort((a, b) => b.score - a.score);
byScore.forEach((student) =>
  console.log(`${student.name}: ${student.score}点`)
);

console.log('\n');

// ===== 4. 複数条件でのソート =====
console.log('4. 複数条件でのソート');
console.log('----------------------');

const employees = [
  { department: '営業', rank: '主任', salary: 400000 },
  { department: '開発', rank: '係長', salary: 500000 },
  { department: '営業', rank: '係長', salary: 450000 },
  { department: '開発', rank: '主任', salary: 420000 },
  { department: '営業', rank: '主任', salary: 380000 },
];

console.log('元のデータ:');
employees.forEach((emp) =>
  console.log(`${emp.department} ${emp.rank}: ${emp.salary}円`)
);

// 部署 → 役職 → 給与の順でソート
const multiSort = [...employees].sort((a, b) => {
  // 第1条件: 部署
  if (a.department !== b.department) {
    return a.department.localeCompare(b.department);
  }

  // 第2条件: 役職（係長 > 主任）
  const rankOrder = { 係長: 1, 主任: 2 };
  if (a.rank !== b.rank) {
    return rankOrder[a.rank] - rankOrder[b.rank];
  }

  // 第3条件: 給与（降順）
  return b.salary - a.salary;
});

console.log('\n複数条件ソート結果（部署→役職→給与）:');
multiSort.forEach((emp) =>
  console.log(`${emp.department} ${emp.rank}: ${emp.salary}円`)
);

console.log('\n');

// ===== 5. 文字列ソートの詳細 =====
console.log('5. 文字列ソートの詳細');
console.log('----------------------');

const fruits = ['banana', 'Apple', 'cherry', 'date'];
console.log('元の配列:', fruits);

// デフォルト（Unicode順）
const defaultStringSort = [...fruits].sort();
console.log('デフォルト:', defaultStringSort);

// 大文字小文字を無視
const caseInsensitive = [...fruits].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log('大文字小文字無視:', caseInsensitive);

// 日本語の例
const japanese = ['さくら', 'あさがお', 'ひまわり', 'ばら'];
console.log(
  '\n日本語ソート:',
  japanese.sort((a, b) => a.localeCompare(b, 'ja'))
);

console.log('\n');

// ===== 6. エラーケースと対処法 =====
console.log('6. エラーケースと対処法');
console.log('------------------------');

const mixedData = [3, null, 1, undefined, 2, '5', null];
console.log('混合データ:', mixedData);

// 安全なソート
const safeSorted = [...mixedData].sort((a, b) => {
  // null/undefinedは末尾に
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  // 数値に変換してソート
  const numA = Number(a);
  const numB = Number(b);

  // NaNチェック
  if (isNaN(numA) && isNaN(numB)) return 0;
  if (isNaN(numA)) return 1;
  if (isNaN(numB)) return -1;

  return numA - numB;
});

console.log('安全なソート結果:', safeSorted);

console.log('\n');

// ===== 7. パフォーマンステスト =====
console.log('7. パフォーマンステスト');
console.log('------------------------');

// 大きな配列を作成
const largeArray = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.log(`${largeArray.length}要素の配列をソート...`);

console.time('数値ソート');
const sortedLarge = [...largeArray].sort((a, b) => a - b);
console.timeEnd('数値ソート');

console.log('最初の10要素:', sortedLarge.slice(0, 10));
console.log('最後の10要素:', sortedLarge.slice(-10));

console.log('\n');

// ===== 8. 実践問題 =====
console.log('8. 実践問題');
console.log('------------');

const products = [
  {
    name: 'ノートPC',
    price: 80000,
    category: 'electronics',
    stock: 5,
    rating: 4.5,
  },
  {
    name: 'マウス',
    price: 2000,
    category: 'electronics',
    stock: 20,
    rating: 4.2,
  },
  { name: 'コーヒー', price: 500, category: 'food', stock: 100, rating: 4.8 },
  { name: '本', price: 1500, category: 'books', stock: 30, rating: 4.0 },
  {
    name: 'キーボード',
    price: 8000,
    category: 'electronics',
    stock: 8,
    rating: 4.3,
  },
];

console.log('商品データ:');
products.forEach((p) =>
  console.log(`${p.name}: ${p.price}円 (${p.category}) 評価${p.rating}`)
);

// TODO: 以下の条件でソートしてみましょう

// 問題1: 価格の安い順
console.log('\n問題1: 価格の安い順');
const byPrice = [...products].sort((a, b) => a.price - b.price);
byPrice.forEach((p) => console.log(`${p.name}: ${p.price}円`));

// 問題2: カテゴリ → 評価の高い順
console.log('\n問題2: カテゴリ → 評価の高い順');
const byCategoryRating = [...products].sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return b.rating - a.rating;
});
byCategoryRating.forEach((p) =>
  console.log(`${p.category} - ${p.name}: 評価${p.rating}`)
);

// 問題3: 在庫少ない順（ただし在庫0は除外）
console.log('\n問題3: 在庫少ない順（在庫0除外）');
const byStock = products
  .filter((p) => p.stock > 0)
  .sort((a, b) => a.stock - b.stock);
byStock.forEach((p) => console.log(`${p.name}: 在庫${p.stock}個`));

console.log('\n=== 練習完了！ ===');
console.log(
  'さらに理解を深めたい場合は、独自のデータでソートを試してみましょう！'
);
