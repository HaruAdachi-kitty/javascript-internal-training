// Day 4 入門演習

console.log('=== Day 4 入門演習 ===');

// 演習データ
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご'];
const prices = [100, 200, 150, 300, 250];
const ages = [20, 25, 30, 35, 40];

// 演習1: map()の基本
console.log('\n=== 演習1: map()の基本 ===');

// 1-1. 果物に「美味しい」を付ける
function addDelicious(fruits) {
  // TODO: map()を使って各果物に「美味しい」を付けてください
  // 例: ['美味しいりんご', '美味しいバナナ', ...]
  return fruits.map(function(fruit){
    return "美味しい" + fruit;
  });
}

// 1-2. 価格を2倍にする
function doublePrices(prices) {
  // TODO: map()を使って各価格を2倍にしてください
  // 例: [200, 400, 300, 600, 500]
  return prices.map(function(price){
    return price*2;
  });
}

// 1-3. 年齢に10を足す
function addTenToAges(ages) {
  // TODO: map()を使って各年齢に10を足してください
  return ages.map(function(age){
    return age + 10;
  })
}

// 1-4. 数値を文字列に変換
function numbersToStrings(numbers) {
  // TODO: map()を使って数値を文字列に変換してください
  // ヒント: String()を使う
  return numbers.map(function(number) {
    return String(number);
  });
}

// 1-5. 長さを取得
function getFruitsLength(fruits) {
  // TODO: map()を使って各果物名の文字数を取得してください
  // 例: [3, 3, 4, 2, 3] (りんご=3文字, バナナ=3文字...)
  return fruits.map(function(fruit){
    return fruit.length;
  });
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
  // TODO: filter()を使って3文字の果物のみを取得してください
  return fruits.filter(function(fruit){
    return fruit.length === 3;
  });
}

// 2-2. 200円以上の価格のみ
function getExpensivePrices(prices) {
  // TODO: filter()を使って200円以上の価格のみを取得してください
  return prices.filter(function(price){
    return price >= 200;
  });
}

// 2-3. 30歳以上の年齢のみ
function getOlderAges(ages) {
  // TODO: filter()を使って30歳以上の年齢のみを取得してください
  return ages.filter(function(age){
    return age >= 30;
  });
}

// 2-4. 偶数のみ
function getEvenNumbers(numbers) {
  // TODO: filter()を使って偶数のみを取得してください
  // ヒント: num % 2 === 0
  return numbers.filter(function(num){
    return num % 2 === 0;
  });
}

// 2-5. 「ん」を含む果物のみ
function getFruitsWithN(fruits) {
  // TODO: filter()を使って「ん」を含む果物のみを取得してください
  // ヒント: includes()を使う
  return fruits.filter(function(fruit){
    return fruit.includes("ん");
  });
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
  // TODO: find()を使って最初の4文字の果物を見つけてください
  return fruits.find(function(fruit){
    return fruit.length === 4;
  });
}

// 3-2. 最初の300円以上の価格を見つける
function findFirstExpensivePrice(prices) {
  // TODO: find()を使って最初の300円以上の価格を見つけてください
  return prices.find(function(price){
    return price >= 300;
  });
}

// 3-3. 最初の奇数を見つける
function findFirstOdd(numbers) {
  // TODO: find()を使って最初の奇数を見つけてください
  return numbers.find(function(num){
    return num % 2 === 1;
  });
}

// 3-4. 「バ」で始まる果物を見つける
function findFruitStartingWithBa(fruits) {
  // TODO: find()を使って「バ」で始まる果物を見つけてください
  // ヒント: startsWith()を使う
  return fruits.find(function(fruit){
    return fruit.startsWith("バ");
  });
}

// 3-5. 25歳を見つける
function findAge25(ages) {
  // TODO: find()を使って25歳を見つけてください
  return ages.find(function(age){
    return age === 25;
  });
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
  // TODO: some()を使って300円以上の価格があるかチェックしてください
  return prices.some(function(price){
    return price >= 300;
  });
}

// 4-2. 全て100円以上か
function allOver100(prices) {
  // TODO: every()を使って全ての価格が100円以上かチェックしてください
  return prices.every(function(price){
    return price >= 100;
  });
}


// 4-3. 「ご」を含む果物があるか
function hasFruitWithGo(fruits) {
  // TODO: some()を使って「ご」を含む果物があるかチェックしてください
  return fruits.some(function(fruit){
    return fruit.includes("ご");
  });
}

// 4-4. 全て成人か（20歳以上）
function allAdults(ages) {
  // TODO: every()を使って全ての年齢が20歳以上かチェックしてください
  return ages.every(function(age){
    return age >= 20;
  });
}

// 4-5. 偶数があるか
function hasEvenNumber(numbers) {
  // TODO: some()を使って偶数があるかチェックしてください
  return numbers.some(function(num){
    return num % 2 === 0;
  });
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
  // TODO: reduce()を使って数値の合計を計算してください
  return numbers.reduce(function(sumNum,num){
    return sumNum+ num;
  });
}

// 5-2. 文字列の連結
function joinStrings(strings) {
  // TODO: reduce()を使って文字列を連結してください
  // 例: ['a', 'b', 'c'] → 'abc'
  return strings.reduce(function(conected,string){
    return conected + string;
  });
}

// 5-3. 最大値を見つける
function findMaxNumber(numbers) {
  // TODO: reduce()を使って最大値を見つけてください
  return numbers.reduce(function(maxNum,num){
    return Math.max(maxNum,num);
  });
}

// 5-4. 価格の合計
function sumPrices(prices) {
  // TODO: reduce()を使って価格の合計を計算してください
  return prices.reduce(function(sum,price2){
    return sum + price2;
  });
}

// 5-5. 文字数の合計
function sumStringLengths(strings) {
  // TODO: reduce()を使って全ての文字列の文字数の合計を計算してくださ
  return strings.reduce(function(sumStr,str){
    return sumStr + str.length;
  },0);
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
  // TODO: map()を使って全員の名前を取得してください
  return people.map(function(person){
    return person.name;
  });
}

// 6-2. 25歳以上の人を抽出
function getAdultsOver25(people) {
  // TODO: filter()を使って25歳以上の人を抽出してください
  return people.filter(function(person){
    return person.age >=25;
  });
}

// 6-3. 「料理」が趣味の人を見つける
function findCookingLover(people) {
  // TODO: find()を使って料理が趣味の人を見つけてください
  return people.find(function(person){
    return person.hobby === "料理";
  });
}

// 6-4. 全員20歳以上か
function allOver20(people) {
  // TODO: every()を使って全員が20歳以上かチェックしてください
  return people.every(function(person){
    return person.age >= 20;
  });
}

// 6-5. 30歳以上の人がいるか
function hasPersonOver30(people) {
  // TODO: some()を使って30歳以上の人がいるかチェックしてください
  return people.some(function(person){
    return person.age >= 30;
  });
}

// 6-6. 年齢の合計
function sumAllAges(people) {
  // TODO: reduce()を使って全員の年齢の合計を計算してください
  return people.reduce(function(sumAge,perosn){
    return sumAge + perosn.age;
  },0);
}

// 6-7. 25歳以上の人の名前のみ
function getNamesOfAdultsOver25(people) {
  // TODO: filter()とmap()を組み合わせて、25歳以上の人の名前のみを取得してください
  return people.filter(function(person){
    return person.age >= 25;
  })
  .map(function(over25){
    return over25.name;
  });
  
}

// 6-8. 最年長の人
function findOldestPerson(people) {
  // TODO: reduce()を使って最年長の人を見つけてください
  return people.reduce(function(maxAge,person){
    return Math.max(maxAge,person.age);
  },0);
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
