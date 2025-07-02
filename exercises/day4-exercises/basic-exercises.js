// Day 4 基礎演習

console.log('=== Day 4 基礎演習 ===');

// 演習データ
const students = [
  { id: 1, name: '田中', score: 85, subject: '数学' },
  { id: 2, name: '佐藤', score: 92, subject: '英語' },
  { id: 3, name: '鈴木', score: 78, subject: '数学' },
  { id: 4, name: '高橋', score: 88, subject: '国語' },
  { id: 5, name: '渡辺', score: 95, subject: '英語' },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 演習1: 配列の基本操作
console.log('\n=== 演習1: 配列の基本操作 ===');

// 1-1. 全ての学生の名前を取得
function getAllStudentNames(students) {
  // TODO: map()を使って全ての学生の名前の配列を返してください
  // 例: ['田中', '佐藤', '鈴木', '高橋', '渡辺']
  return students.map(function(student){
    return student.name;
  });
}

// 1-2. 偶数のみを抽出
function getEvenNumbers(numbers) {
  // TODO: filter()を使って偶数のみの配列を返してください
  // 例: [2, 4, 6, 8, 10]
  return numbers.filter(function(num){
    re
  })
}

// 1-3. 数値の合計を計算
function calculateSum(numbers) {
  // TODO: reduce()を使って数値の合計を返してください
  // 例: 55
}

// 1-4. 最初の要素を取得
function getFirstStudent(students) {
  // TODO: find()を使って最初の学生を返してください
}

// 1-5. 特定の条件を満たすかチェック
function hasHighScore(students) {
  // TODO: some()を使って90点以上の学生がいるかチェックしてください
  // 戻り値: true または false
}

// テスト実行
console.log('全学生名:', getAllStudentNames(students));
console.log('偶数:', getEvenNumbers(numbers));
console.log('合計:', calculateSum(numbers));
console.log('最初の学生:', getFirstStudent(students));
console.log('90点以上の学生がいる:', hasHighScore(students));

// 演習2: 条件に基づく検索・フィルタリング
console.log('\n=== 演習2: 条件に基づく検索・フィルタリング ===');

// 2-1. 特定の科目の学生を抽出
function getStudentsBySubject(students, subject) {
  // TODO: filter()を使って指定された科目の学生のみを返してください
}

// 2-2. 高得点の学生を抽出
function getHighScoreStudents(students, minScore) {
  // TODO: filter()を使って指定された点数以上の学生を返してください
}

// 2-3. 特定の学生を検索
function findStudentByName(students, name) {
  // TODO: find()を使って指定された名前の学生を返してください
  // 見つからない場合はundefinedが返される
}

// 2-4. 学生が存在するかチェック
function hasStudentWithName(students, name) {
  // TODO: some()を使って指定された名前の学生がいるかチェックしてください
}

// 2-5. 全ての学生が条件を満たすかチェック
function allStudentsPassMinScore(students, minScore) {
  // TODO: every()を使って全ての学生が指定された点数以上かチェックしてください
}

// テスト実行
console.log('数学の学生:', getStudentsBySubject(students, '数学'));
console.log('85点以上の学生:', getHighScoreStudents(students, 85));
console.log('田中さん:', findStudentByName(students, '田中'));
console.log('山田さんがいる:', hasStudentWithName(students, '山田'));
console.log('全員80点以上:', allStudentsPassMinScore(students, 80));

// 演習3: データの変換と加工
console.log('\n=== 演習3: データの変換と加工 ===');

// 3-1. 成績にランクを追加
function addGradeRank(students) {
  // TODO: map()を使って各学生にrankプロパティを追加してください
  // 90以上: 'A', 80以上: 'B', 70以上: 'C', それ未満: 'D'
  // 戻り値: 元のオブジェクト + { rank: 'A' } のような形
}

// 3-2. 学生情報を文字列に変換
function formatStudentInfo(students) {
  // TODO: map()を使って「田中 (数学: 85点)」の形式の文字列配列を返してください
}

// 3-3. 数値を2倍にする
function doubleNumbers(numbers) {
  // TODO: map()を使って各数値を2倍にした配列を返してください
}

// 3-4. 点数のみを抽出
function getScoresOnly(students) {
  // TODO: map()を使って点数のみの配列を返してください
  // 例: [85, 92, 78, 88, 95]
}

// 3-5. 合格・不合格を判定
function addPassFailStatus(students, passingScore) {
  // TODO: map()を使って各学生にstatus('合格' or '不合格')を追加してください
}

// テスト実行
console.log('ランク付き:', addGradeRank(students));
console.log('学生情報:', formatStudentInfo(students));
console.log('2倍の数値:', doubleNumbers([1, 2, 3, 4, 5]));
console.log('点数のみ:', getScoresOnly(students));
console.log('合否判定:', addPassFailStatus(students, 80));

// 演習4: 集計と統計
console.log('\n=== 演習4: 集計と統計 ===');

// 4-1. 平均点を計算
function calculateAverageScore(students) {
  // TODO: reduce()を使って全学生の平均点を計算してください
  // ヒント: 合計を求めてから学生数で割る
}

// 4-2. 最高点を取得
function getMaxScore(students) {
  // TODO: reduce()を使って最高点を返してください
}

// 4-3. 科目別の学生数をカウント
function countStudentsBySubject(students) {
  // TODO: reduce()を使って科目別の学生数をオブジェクトで返してください
  // 例: { '数学': 2, '英語': 2, '国語': 1 }
}

// 4-4. 合計点数を計算
function getTotalScore(students) {
  // TODO: reduce()を使って全学生の点数の合計を返してください
}

// 4-5. 学生の詳細統計
function getStudentStatistics(students) {
  // TODO: 以下の統計情報をオブジェクトで返してください：
  // - count: 学生数
  // - totalScore: 合計点
  // - averageScore: 平均点
  // - maxScore: 最高点
  // - minScore: 最低点
}

// テスト実行
console.log('平均点:', calculateAverageScore(students));
console.log('最高点:', getMaxScore(students));
console.log('科目別学生数:', countStudentsBySubject(students));
console.log('合計点:', getTotalScore(students));
console.log('統計情報:', getStudentStatistics(students));

// 演習5: 複数メソッドの組み合わせ
console.log('\n=== 演習5: 複数メソッドの組み合わせ ===');

// 5-1. 高得点の学生の名前のみ取得
function getHighScoreStudentNames(students, minScore) {
  // TODO: filter()とmap()を組み合わせて実装してください
  // 1. 指定点数以上の学生を抽出
  // 2. その学生の名前のみを取得
}

// 5-2. 科目別の平均点
function getAverageScoreBySubject(students, subject) {
  // TODO: filter()とreduce()を組み合わせて実装してください
  // 1. 指定科目の学生のみ抽出
  // 2. その学生たちの平均点を計算
}

// 5-3. 上位N名の学生を取得
function getTopNStudents(students, n) {
  // TODO: sort()とslice()を使って実装してください
  // 1. 点数の高い順にソート
  // 2. 上位N名を取得
  // 注意: 元の配列は変更しないこと
}

// 5-4. 条件を満たす学生の統計
function getFilteredStatistics(students, minScore) {
  // TODO: filter()とreduce()を組み合わせて実装してください
  // 指定点数以上の学生の統計（人数、平均点、合計点）を返す
}

// 5-5. 科目別の最高点
function getMaxScoreBySubject(students) {
  // TODO: reduce()を使って各科目の最高点をオブジェクトで返してください
  // 例: { '数学': 85, '英語': 95, '国語': 88 }
}

// テスト実行
console.log('85点以上の学生名:', getHighScoreStudentNames(students, 85));
console.log('数学の平均点:', getAverageScoreBySubject(students, '数学'));
console.log('上位3名:', getTopNStudents(students, 3));
console.log('80点以上の統計:', getFilteredStatistics(students, 80));
console.log('科目別最高点:', getMaxScoreBySubject(students));

// 演習6: 実践的な問題
console.log('\n=== 演習6: 実践的な問題 ===');

// より複雑なデータ
const products = [
  {
    id: 1,
    name: 'ノートPC',
    price: 80000,
    category: '電子機器',
    inStock: true,
  },
  { id: 2, name: 'マウス', price: 2000, category: '電子機器', inStock: true },
  { id: 3, name: '本', price: 1500, category: '書籍', inStock: false },
  { id: 4, name: 'ペン', price: 300, category: '文房具', inStock: true },
  { id: 5, name: 'ノート', price: 200, category: '文房具', inStock: true },
];

// 6-1. 在庫のある商品のみ取得
function getInStockProducts(products) {
  // TODO: 在庫のある商品のみを返してください
}

// 6-2. カテゴリ別の商品数
function countProductsByCategory(products) {
  // TODO: カテゴリ別の商品数をオブジェクトで返してください
}

// 6-3. 価格帯別の商品分類
function classifyProductsByPrice(products) {
  // TODO: 商品を価格帯で分類してください
  // 1000円未満: 'cheap', 1000-10000円: 'medium', 10000円以上: 'expensive'
  // 戻り値: { cheap: [...], medium: [...], expensive: [...] }
}

// 6-4. 商品検索機能
function searchProducts(products, searchTerm) {
  // TODO: 商品名に検索語が含まれる商品を返してください
  // 大文字小文字は区別しない
}

// 6-5. 商品レポート作成
function generateProductReport(products) {
  // TODO: 以下の情報を含むレポートを作成してください：
  // - totalProducts: 総商品数
  // - inStockCount: 在庫のある商品数
  // - averagePrice: 平均価格
  // - categoryCounts: カテゴリ別商品数
  // - priceRange: { min: 最低価格, max: 最高価格 }
}

// テスト実行
console.log('在庫商品:', getInStockProducts(products));
console.log('カテゴリ別商品数:', countProductsByCategory(products));
console.log('価格帯別分類:', classifyProductsByPrice(products));
console.log('検索結果("ノート"):', searchProducts(products, 'ノート'));
console.log('商品レポート:', generateProductReport(products));

console.log('\n=== Day 4 基礎演習完了 ===');
