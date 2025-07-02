// Day 4 入門演習 - 解答

console.log('=== Day 4 入門演習 - 解答 ===');

// 演習データ
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご'];
const prices = [100, 200, 150, 300, 250];
const ages = [20, 25, 30, 35, 40];

// 演習1: map()の基本
console.log('\n=== 演習1: map()の基本 ===');

// 1-1. 果物に「美味しい」を付ける
function addDelicious(fruits) {
  // map()は配列の各要素を変換して新しい配列を作る
  // 元の配列は変更されない
  return fruits.map((fruit) => '美味しい' + fruit);
}

// 1-2. 価格を2倍にする
function doublePrices(prices) {
  // 各価格に2を掛けて新しい配列を作る
  return prices.map((price) => price * 2);
}

// 1-3. 年齢に10を足す
function addTenToAges(ages) {
  // 各年齢に10を足して新しい配列を作る
  return ages.map((age) => age + 10);
}

// 1-4. 数値を文字列に変換
function numbersToStrings(numbers) {
  // String()関数で数値を文字列に変換
  return numbers.map((num) => String(num));
  // または: return numbers.map(num => num.toString());
}

// 1-5. 長さを取得
function getFruitsLength(fruits) {
  // 各文字列の.lengthプロパティで文字数を取得
  return fruits.map((fruit) => fruit.length);
}

// テスト実行
console.log('美味しい果物:', addDelicious(fruits));
console.log('2倍の価格:', doublePrices(prices));
console.log('10歳年上:', addTenToAges(ages));
console.log('文字列化:', numbersToStrings([1, 2, 3, 4, 5]));
console.log('果物の文字数:', getFruitsLength(fruits));

// 演習2: filter()の基本
console.log('\n=== 演習2: filter()の基本 ===');

// 2-1. 3文字の果物のみ
function getThreeCharFruits(fruits) {
  // filter()は条件を満たす要素のみを抽出
  // .lengthで文字数をチェック
  return fruits.filter((fruit) => fruit.length === 3);
}

// 2-2. 200円以上の価格のみ
function getExpensivePrices(prices) {
  // >= で「以上」の条件をチェック
  return prices.filter((price) => price >= 200);
}

// 2-3. 30歳以上の年齢のみ
function getOlderAges(ages) {
  // 30以上の年齢のみを抽出
  return ages.filter((age) => age >= 30);
}

// 2-4. 偶数のみ
function getEvenNumbers(numbers) {
  // % は余りを求める演算子
  // 2で割った余りが0なら偶数
  return numbers.filter((num) => num % 2 === 0);
}

// 2-5. 「ん」を含む果物のみ
function getFruitsWithN(fruits) {
  // includes()で特定の文字が含まれているかチェック
  return fruits.filter((fruit) => fruit.includes('ん'));
}

// テスト実行
console.log('3文字の果物:', getThreeCharFruits(fruits));
console.log('200円以上:', getExpensivePrices(prices));
console.log('30歳以上:', getOlderAges(ages));
console.log('偶数:', getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('「ん」を含む果物:', getFruitsWithN(fruits));

// 演習3: find()の基本
console.log('\n=== 演習3: find()の基本 ===');

// 3-1. 最初の4文字の果物を見つける
function findFirstFourCharFruit(fruits) {
  // find()は条件を満たす最初の要素を返す
  // 見つからない場合はundefinedを返す
  return fruits.find((fruit) => fruit.length === 4);
}

// 3-2. 最初の300円以上の価格を見つける
function findFirstExpensivePrice(prices) {
  // 300以上の最初の価格を見つける
  return prices.find((price) => price >= 300);
}

// 3-3. 最初の奇数を見つける
function findFirstOdd(numbers) {
  // 2で割った余りが1なら奇数
  return numbers.find((num) => num % 2 === 1);
  // または: return numbers.find(num => num % 2 !== 0);
}

// 3-4. 「バ」で始まる果物を見つける
function findFruitStartingWithBa(fruits) {
  // startsWith()で文字列の開始をチェック
  return fruits.find((fruit) => fruit.startsWith('バ'));
}

// 3-5. 25歳を見つける
function findAge25(ages) {
  // 正確に25の年齢を見つける
  return ages.find((age) => age === 25);
}

// テスト実行
console.log('最初の4文字果物:', findFirstFourCharFruit(fruits));
console.log('最初の300円以上:', findFirstExpensivePrice(prices));
console.log('最初の奇数:', findFirstOdd([2, 4, 6, 7, 8, 9]));
console.log('「バ」で始まる果物:', findFruitStartingWithBa(fruits));
console.log('25歳:', findAge25(ages));

// 演習4: some()とevery()の基本
console.log('\n=== 演習4: some()とevery()の基本 ===');

// 4-1. 300円以上の商品があるか
function hasExpensiveItem(prices) {
  // some()は条件を満たす要素が一つでもあればtrueを返す
  return prices.some((price) => price >= 300);
}

// 4-2. 全て100円以上か
function allOver100(prices) {
  // every()は全ての要素が条件を満たす場合にtrueを返す
  return prices.every((price) => price >= 100);
}

// 4-3. 「ご」を含む果物があるか
function hasFruitWithGo(fruits) {
  // 「ご」を含む果物が一つでもあるかチェック
  return fruits.some((fruit) => fruit.includes('ご'));
}

// 4-4. 全て成人か（20歳以上）
function allAdults(ages) {
  // 全ての年齢が20以上かチェック
  return ages.every((age) => age >= 20);
}

// 4-5. 偶数があるか
function hasEvenNumber(numbers) {
  // 偶数が一つでもあるかチェック
  return numbers.some((num) => num % 2 === 0);
}

// テスト実行
console.log('300円以上がある:', hasExpensiveItem(prices));
console.log('全て100円以上:', allOver100(prices));
console.log('「ご」を含む果物がある:', hasFruitWithGo(fruits));
console.log('全て成人:', allAdults(ages));
console.log('偶数がある:', hasEvenNumber([1, 3, 5, 7, 9]));

// 演習5: reduce()の基本
console.log('\n=== 演習5: reduce()の基本 ===');

// 5-1. 数値の合計
function sumNumbers(numbers) {
  // reduce()は配列を一つの値にまとめる
  // acc（アキュムレータ）は累積値、numは現在の値
  // 0は初期値
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 5-2. 文字列の連結
function joinStrings(strings) {
  // 文字列を連結していく
  // 初期値は空文字列
  return strings.reduce((acc, str) => acc + str, '');
}

// 5-3. 最大値を見つける
function findMaxNumber(numbers) {
  // 現在の最大値と比較して、大きい方を残す
  // 初期値は配列の最初の要素
  return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
  // または: return numbers.reduce((max, num) => Math.max(max, num), numbers[0]);
}

// 5-4. 価格の合計
function sumPrices(prices) {
  // 価格を全て足し合わせる
  return prices.reduce((total, price) => total + price, 0);
}

// 5-5. 文字数の合計
function sumStringLengths(strings) {
  // 各文字列の長さを足し合わせる
  return strings.reduce((total, str) => total + str.length, 0);
}

// テスト実行
console.log('数値の合計:', sumNumbers([1, 2, 3, 4, 5]));
console.log('文字列連結:', joinStrings(['Hello', ' ', 'World']));
console.log('最大値:', findMaxNumber([10, 5, 8, 3, 12]));
console.log('価格の合計:', sumPrices(prices));
console.log('文字数の合計:', sumStringLengths(['abc', 'def', 'ghi']));

// 演習6: 組み合わせ問題（簡単）
console.log('\n=== 演習6: 組み合わせ問題 ===');

// 簡単なオブジェクトの配列
const people = [
  { name: '太郎', age: 25, hobby: '読書' },
  { name: '花子', age: 30, hobby: '料理' },
  { name: '次郎', age: 20, hobby: '映画' },
  { name: '美穂', age: 35, hobby: '旅行' },
];

// 6-1. 全員の名前を取得
function getAllNames(people) {
  // オブジェクトの配列からnameプロパティのみを抽出
  return people.map((person) => person.name);
}

// 6-2. 25歳以上の人を抽出
function getAdultsOver25(people) {
  // ageプロパティが25以上の人を抽出
  return people.filter((person) => person.age >= 25);
}

// 6-3. 「料理」が趣味の人を見つける
function findCookingLover(people) {
  // hobbyプロパティが「料理」の人を見つける
  return people.find((person) => person.hobby === '料理');
}

// 6-4. 全員20歳以上か
function allOver20(people) {
  // 全員のageが20以上かチェック
  return people.every((person) => person.age >= 20);
}

// 6-5. 30歳以上の人がいるか
function hasPersonOver30(people) {
  // 30歳以上の人が一人でもいるかチェック
  return people.some((person) => person.age >= 30);
}

// 6-6. 年齢の合計
function sumAllAges(people) {
  // 全員の年齢を足し合わせる
  return people.reduce((total, person) => total + person.age, 0);
}

// 6-7. 25歳以上の人の名前のみ
function getNamesOfAdultsOver25(people) {
  // 1. filter()で25歳以上の人を抽出
  // 2. map()で名前のみを取得
  // メソッドチェーンで連続して実行
  return people
    .filter((person) => person.age >= 25)
    .map((person) => person.name);
}

// 6-8. 最年長の人
function findOldestPerson(people) {
  // reduce()で年齢を比較して最年長の人を見つける
  return people.reduce(
    (oldest, person) => (person.age > oldest.age ? person : oldest),
    people[0]
  );
}

// テスト実行
console.log('全員の名前:', getAllNames(people));
console.log('25歳以上:', getAdultsOver25(people));
console.log('料理好き:', findCookingLover(people));
console.log('全員20歳以上:', allOver20(people));
console.log('30歳以上がいる:', hasPersonOver30(people));
console.log('年齢の合計:', sumAllAges(people));
console.log('25歳以上の名前:', getNamesOfAdultsOver25(people));
console.log('最年長:', findOldestPerson(people));

console.log('\n=== Day 4 入門演習完了 ===');

// 配列メソッドの使い方まとめ
console.log('\n=== 配列メソッドまとめ ===');
console.log(`
map()    : 各要素を変換して新しい配列を作る
filter() : 条件を満たす要素のみを抽出
find()   : 条件を満たす最初の要素を取得
some()   : 条件を満たす要素が一つでもあるかチェック
every()  : 全ての要素が条件を満たすかチェック
reduce() : 配列を一つの値にまとめる

これらのメソッドは元の配列を変更せず、新しい配列や値を返します。
`);
