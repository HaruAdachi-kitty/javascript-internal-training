// Day 4 基礎演習 - 解答

console.log('=== Day 4 基礎演習 - 解答 ===');

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
  // map()は配列の各要素を変換して新しい配列を作る
  return students.map((student) => student.name);
}

// 1-2. 偶数のみを抽出
function getEvenNumbers(numbers) {
  // filter()は条件を満たす要素のみを抽出する
  return numbers.filter((num) => num % 2 === 0);
}

// 1-3. 数値の合計を計算
function calculateSum(numbers) {
  // reduce()は配列を一つの値にまとめる
  // acc（アキュムレータ）は累積値、numは現在の値
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 1-4. 最初の要素を取得
function getFirstStudent(students) {
  // find()は条件を満たす最初の要素を返す
  // 常にtrueを返すので、最初の要素が取得される
  return students.find(() => true);
}

// 1-5. 特定の条件を満たすかチェック
function hasHighScore(students) {
  // some()は配列の中に条件を満たす要素が一つでもあればtrueを返す
  return students.some((student) => student.score >= 90);
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
  // filter()で指定された科目の学生のみを抽出
  return students.filter((student) => student.subject === subject);
}

// 2-2. 高得点の学生を抽出
function getHighScoreStudents(students, minScore) {
  // filter()で指定された点数以上の学生を抽出
  return students.filter((student) => student.score >= minScore);
}

// 2-3. 特定の学生を検索
function findStudentByName(students, name) {
  // find()で指定された名前の学生を検索
  return students.find((student) => student.name === name);
}

// 2-4. 学生が存在するかチェック
function hasStudentWithName(students, name) {
  // some()で指定された名前の学生がいるかチェック
  return students.some((student) => student.name === name);
}

// 2-5. 全ての学生が条件を満たすかチェック
function allStudentsPassMinScore(students, minScore) {
  // every()は全ての要素が条件を満たす場合にtrueを返す
  return students.every((student) => student.score >= minScore);
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
  return students.map((student) => {
    let rank;
    if (student.score >= 90) {
      rank = 'A';
    } else if (student.score >= 80) {
      rank = 'B';
    } else if (student.score >= 70) {
      rank = 'C';
    } else {
      rank = 'D';
    }

    // スプレッド演算子で元のオブジェクトを展開し、rankを追加
    return { ...student, rank };
  });
}

// 3-2. 学生情報を文字列に変換
function formatStudentInfo(students) {
  return students.map(
    (student) => `${student.name} (${student.subject}: ${student.score}点)`
  );
}

// 3-3. 数値を2倍にする
function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

// 3-4. 点数のみを抽出
function getScoresOnly(students) {
  return students.map((student) => student.score);
}

// 3-5. 合格・不合格を判定
function addPassFailStatus(students, passingScore) {
  return students.map((student) => ({
    ...student,
    status: student.score >= passingScore ? '合格' : '不合格',
  }));
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
  // 合計点を計算
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  // 平均 = 合計 ÷ 人数
  return totalScore / students.length;
}

// 4-2. 最高点を取得
function getMaxScore(students) {
  // reduce()で最高点を見つける
  return students.reduce(
    (max, student) => (student.score > max ? student.score : max),
    0
  );
}

// 4-3. 科目別の学生数をカウント
function countStudentsBySubject(students) {
  return students.reduce((counts, student) => {
    // 科目がまだカウントされていない場合は0で初期化
    if (!counts[student.subject]) {
      counts[student.subject] = 0;
    }
    // カウントを1増やす
    counts[student.subject]++;
    return counts;
  }, {});
}

// 4-4. 合計点数を計算
function getTotalScore(students) {
  return students.reduce((total, student) => total + student.score, 0);
}

// 4-5. 学生の詳細統計
function getStudentStatistics(students) {
  const count = students.length;
  const totalScore = getTotalScore(students);
  const averageScore = totalScore / count;
  const maxScore = getMaxScore(students);

  // 最低点を計算
  const minScore = students.reduce(
    (min, student) => (student.score < min ? student.score : min),
    students[0].score
  );

  return {
    count,
    totalScore,
    averageScore: Math.round(averageScore * 100) / 100, // 小数点以下2桁に丸める
    maxScore,
    minScore,
  };
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
  // 1. filter()で高得点の学生を抽出
  // 2. map()で名前のみを取得
  return students
    .filter((student) => student.score >= minScore)
    .map((student) => student.name);
}

// 5-2. 科目別の平均点
function getAverageScoreBySubject(students, subject) {
  // 1. filter()で指定科目の学生のみ抽出
  const subjectStudents = students.filter(
    (student) => student.subject === subject
  );

  // 該当する学生がいない場合は0を返す
  if (subjectStudents.length === 0) {
    return 0;
  }

  // 2. reduce()で平均点を計算
  const totalScore = subjectStudents.reduce(
    (acc, student) => acc + student.score,
    0
  );
  return totalScore / subjectStudents.length;
}

// 5-3. 上位N名の学生を取得
function getTopNStudents(students, n) {
  // 1. sort()で点数の高い順にソート（元の配列は変更しない）
  // 2. slice()で上位N名を取得
  return students
    .slice() // 配列をコピー
    .sort((a, b) => b.score - a.score) // 降順ソート
    .slice(0, n); // 上位N名を取得
}

// 5-4. 条件を満たす学生の統計
function getFilteredStatistics(students, minScore) {
  // 1. filter()で条件を満たす学生を抽出
  const filteredStudents = students.filter(
    (student) => student.score >= minScore
  );

  // 2. reduce()で統計を計算
  const count = filteredStudents.length;
  const totalScore = filteredStudents.reduce(
    (acc, student) => acc + student.score,
    0
  );
  const averageScore = count > 0 ? totalScore / count : 0;

  return {
    count,
    totalScore,
    averageScore: Math.round(averageScore * 100) / 100,
  };
}

// 5-5. 科目別の最高点
function getMaxScoreBySubject(students) {
  return students.reduce((maxScores, student) => {
    const subject = student.subject;

    // その科目がまだ記録されていない、または現在の点数の方が高い場合
    if (!maxScores[subject] || student.score > maxScores[subject]) {
      maxScores[subject] = student.score;
    }

    return maxScores;
  }, {});
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
  return products.filter((product) => product.inStock);
}

// 6-2. カテゴリ別の商品数
function countProductsByCategory(products) {
  return products.reduce((counts, product) => {
    if (!counts[product.category]) {
      counts[product.category] = 0;
    }
    counts[product.category]++;
    return counts;
  }, {});
}

// 6-3. 価格帯別の商品分類
function classifyProductsByPrice(products) {
  return products.reduce((classification, product) => {
    let priceCategory;

    if (product.price < 1000) {
      priceCategory = 'cheap';
    } else if (product.price <= 10000) {
      priceCategory = 'medium';
    } else {
      priceCategory = 'expensive';
    }

    // カテゴリが存在しない場合は空配列で初期化
    if (!classification[priceCategory]) {
      classification[priceCategory] = [];
    }

    classification[priceCategory].push(product);
    return classification;
  }, {});
}

// 6-4. 商品検索機能
function searchProducts(products, searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// 6-5. 商品レポート作成
function generateProductReport(products) {
  const totalProducts = products.length;
  const inStockCount = products.filter((product) => product.inStock).length;

  // 平均価格を計算
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const averagePrice = totalPrice / totalProducts;

  // カテゴリ別商品数
  const categoryCounts = countProductsByCategory(products);

  // 価格の範囲
  const prices = products.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    totalProducts,
    inStockCount,
    averagePrice: Math.round(averagePrice),
    categoryCounts,
    priceRange: {
      min: minPrice,
      max: maxPrice,
    },
  };
}

// テスト実行
console.log('在庫商品:', getInStockProducts(products));
console.log('カテゴリ別商品数:', countProductsByCategory(products));
console.log('価格帯別分類:', classifyProductsByPrice(products));
console.log('検索結果("ノート"):', searchProducts(products, 'ノート'));
console.log('商品レポート:', generateProductReport(products));

console.log('\n=== Day 4 基礎演習完了 ===');
