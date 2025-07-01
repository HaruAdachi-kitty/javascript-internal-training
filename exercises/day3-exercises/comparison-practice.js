// Day 3 演習: 比較演算子（== vs ===）の練習

console.log('=== Day 3 演習: 比較演算子の練習 ===');

// 演習1: 基本的な === と == の比較
console.log('\n演習1: 基本的な === と == の比較');
console.log('----------------------------------');

const testCases1 = [
  [5, 5],
  [5, '5'],
  [true, 1],
  [false, 0],
  [null, undefined],
  [0, ''],
  ['', false],
];

testCases1.forEach(([a, b]) => {
  console.log(`${a} === ${b}:`, a === b);
  console.log(`${a} == ${b}:`, a == b);
  console.log('---');
});

// 演習2: 予想してから確認
console.log('\n演習2: 予想してから確認');
console.log('------------------------');

// TODO: 以下の結果を予想してから実行してください
const predictions = [
  { expr: '"0" === 0', expected: null }, // あなたの予想をここに
  { expr: '"0" == 0', expected: null },
  { expr: '[] === []', expected: null },
  { expr: '[] == []', expected: null },
  { expr: '[] == false', expected: null },
  { expr: '"" == 0', expected: null },
  { expr: '" " == 0', expected: null },
  { expr: 'NaN === NaN', expected: null },
];

// 実際の結果を確認
console.log('"0" === 0:', '0' === 0);
console.log('"0" == 0:', '0' == 0);
// console.log('[] === []:', [] === []);
console.log('[] == []:', [] == []);
console.log('[] == false:', [] == false);
console.log('"" == 0:', '' == 0);
console.log('" " == 0:', ' ' == 0);
console.log('NaN === NaN:', NaN === NaN);

// 演習3: 危険なパターンの理解
console.log('\n演習3: 危険なパターンの理解');
console.log('------------------------------');

// TODO: なぜこれらの結果になるのか、型変換の過程を考えてください

console.log('[] == 0:', [] == 0);
// TODO: 変換過程を考えてください

console.log('[] == "0":', [] == '0');
// TODO: 変換過程を考えてください

console.log('[0] == 0:', [0] == 0);
// TODO: 変換過程を考えてください

console.log('[0] == "0":', [0] == '0');
// TODO: 変換過程を考えてください

// 演習4: null と undefined の特殊な関係
console.log('\n演習4: null と undefined の特殊な関係');
console.log('----------------------------------------');

console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);
console.log('null == 0:', null == 0);
console.log('null === 0:', null === 0);
console.log('undefined == 0:', undefined == 0);
console.log('undefined === 0:', undefined === 0);

// TODO: null と undefined だけが特別な理由を考えてください

// 演習5: 実際のバグパターン
console.log('\n演習5: 実際のバグパターン');
console.log('----------------------------');

// バグのあるコード例
function validateInputBuggy(input) {
  if (input == '') {
    // 危険な比較
    return '入力してください';
  }
  return `入力値: ${input}`;
}

// テストケース
const testInputs = [0, '', ' ', false, null, undefined, '0', 'hello'];

console.log('バグのあるバリデーション結果:');
testInputs.forEach((input) => {
  console.log(
    `入力: ${input} (${typeof input}) → ${validateInputBuggy(input)}`
  );
});

// TODO: 安全なバリデーション関数を実装してください
function validateInputSafe(input) {
  // TODO: === を使用した安全な比較を実装してください
  // ヒント: input === "" || input === null || input === undefined をチェック
  // ここに実装
}

console.log('\n安全なバリデーション結果:');
testInputs.forEach((input) => {
  console.log(`入力: ${input} (${typeof input}) → ${validateInputSafe(input)}`);
});

// 演習6: オブジェクトの比較
console.log('\n演習6: オブジェクトの比較');
console.log('------------------------');

const obj1 = { name: '田中' };
const obj2 = { name: '田中' };
const obj3 = obj1;

console.log('obj1 == obj2:', obj1 == obj2);
console.log('obj1 === obj2:', obj1 === obj2);
console.log('obj1 === obj3:', obj1 === obj3);

// TODO: オブジェクトの内容を比較する関数を実装してください
function compareObjectsByContent(obj1, obj2) {
  // TODO: シャローな比較を実装してください
  // ヒント: Object.keys()を使ってプロパティ名を取得し、
  // 各プロパティの値を===で比較してください
  // ここに実装
}

console.log('内容での比較:', compareObjectsByContent(obj1, obj2));

// 演習7: 型変換の明示的な実行
console.log('\n演習7: 型変換の明示的な実行');
console.log('------------------------------');

// TODO: 以下の値を明示的に変換してから比較してください

const value1 = '5';
const value2 = 5;

// TODO: 文字列として比較してください
// console.log('文字列として比較:', /* ここに実装 */);

// TODO: 数値として比較してください
// console.log('数値として比較:', /* ここに実装 */);

// 複雑な例
const complexValues = [
  { input: '123', expected: 123 },
  { input: '0', expected: 0 },
  { input: '', expected: 0 },
  { input: 'abc', expected: NaN },
  { input: true, expected: 1 },
  { input: false, expected: 0 },
  { input: null, expected: 0 },
  { input: undefined, expected: NaN },
];

// TODO: Number()変換の結果を確認してください
console.log('Number()変換の結果:');
complexValues.forEach(({ input, expected }) => {
  // TODO: Number(input)の結果と期待値を比較してください
  // ヒント: NaNの場合はNumber.isNaN()を使用
});

// 演習8: 実践的な比較関数の作成
console.log('\n演習8: 実践的な比較関数の作成');
console.log('----------------------------------');

// TODO: 以下の比較関数を実装してください

// 1. 厳密な等価性チェック
function isStrictlyEqual(a, b) {
  // TODO: ===を使った比較を実装
  // ここに実装
}

// 2. 型を考慮しない値の比較（ただし安全に）
function isLooselyEqualSafe(a, b) {
  // TODO: 安全な緩い比較を実装
  // ヒント: null/undefinedの特殊ケースを考慮し、String()で変換してから比較
  // ここに実装
}

// 3. 数値としての比較
function isNumericallyEqual(a, b) {
  // TODO: 数値として比較する関数を実装
  // ヒント: Number()で変換し、NaNの場合は除外
  // ここに実装
}

// テスト実行
const testPairs = [
  [5, '5'],
  [0, ''],
  [null, undefined],
  ['', false],
  [1, true],
  ['abc', 'abc'],
  [NaN, NaN],
];

testPairs.forEach(([a, b]) => {
  console.log(`${a} と ${b}:`);
  console.log(`  厳密: ${isStrictlyEqual(a, b)}`);
  console.log(`  緩い(安全): ${isLooselyEqualSafe(a, b)}`);
  console.log(`  数値: ${isNumericallyEqual(a, b)}`);
  console.log('---');
});

// 演習9: デバッグ支援関数
console.log('\n演習9: デバッグ支援関数');
console.log('------------------------');

// TODO: デバッグ用の比較関数を実装してください
function debugComparison(a, b) {
  // TODO: 以下の情報を表示する関数を実装してください：
  // - a と b の値と型
  // - a === b の結果
  // - a == b の結果
  // - String(), Number(), Boolean() での変換結果
  // ここに実装
}

// 複雑な比較のデバッグ
debugComparison([], 0);
debugComparison('', false);
debugComparison(null, undefined);

// 演習10: 実務での適用
console.log('\n演習10: 実務での適用');
console.log('---------------------');

// TODO: 以下のような実際の場面での比較を安全に実装してください

// 1. ユーザーIDの比較
function findUserById(users, id) {
  // TODO: 厳密な比較を使ったユーザー検索を実装
  // ここに実装
}

// 2. フォーム入力値の検証
function validateForm(formData) {
  // TODO: 安全なフォーム検証を実装
  // 空文字列、null、undefinedを適切に区別してください
  // ここに実装
}

// テストデータ
const users = [
  { id: 1, name: '田中' },
  { id: 2, name: '佐藤' },
];

const formTests = [
  { name: '田中', age: 25 },
  { name: '', age: 30 },
  { name: '佐藤', age: 0 },
  { name: null, age: null },
  { name: undefined, age: '' },
];

console.log('ユーザー検索テスト:');
console.log('ID=1:', findUserById(users, 1));
console.log("ID='1':", findUserById(users, '1')); // 見つからない（厳密な比較）

console.log('\nフォーム検証テスト:');
formTests.forEach((form, index) => {
  const errors = validateForm(form);
  console.log(`Form ${index + 1}:`, form, 'エラー:', errors);
});

console.log('\n=== Day 3 比較演算子演習完了 ===');
