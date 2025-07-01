# JavaScript: undefined と null

## 概要

JavaScriptには「値がない」ことを表現する2つのプリミティブ値があります：`undefined`と`null`。
似ているように見えますが、それぞれ異なる意味と用途を持っています。

## 1. undefined

### 定義
`undefined`は「値が定義されていない」ことを示すプリミティブ値です。
JavaScriptエンジンが**自動的に**割り当てる値です。

### undefinedが返される場面

#### 1. 宣言されているが初期化されていない変数
```javascript
let x;
console.log(x); // undefined

var y;
console.log(y); // undefined

// letとconstは宣言時に初期化が必要な場合もある
// const z; // SyntaxError: Missing initializer in const declaration
```

#### 2. 存在しないオブジェクトのプロパティ
```javascript
const user = {
    name: "田中",
    age: 30
};

console.log(user.name); // "田中"
console.log(user.email); // undefined（存在しないプロパティ）
```

#### 3. 存在しない配列の要素
```javascript
const arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[4]); // undefined（存在しないインデックス）

// 配列の長さを超えるインデックス
console.log(arr[100]); // undefined
console.log(arr[-1]); // undefined（負のインデックス）
```

#### 4. 値を返さない関数の戻り値
```javascript
function greet() {
    console.log("こんにちは");
    // return文がない
}

const result = greet(); // "こんにちは" が出力される
console.log(result); // undefined

function calculate(a, b) {
    if (a < 0 || b < 0) {
        return; // 何も返さない
    }
    return a + b;
}

console.log(calculate(5, 3)); // 8
console.log(calculate(-1, 3)); // undefined
```

#### 5. 関数の引数が渡されない場合
```javascript
function greetUser(name, age, city) {
    console.log(`名前: ${name}`); // 名前: 田中
    console.log(`年齢: ${age}`); // 年齢: undefined
    console.log(`都市: ${city}`); // 都市: undefined
}

greetUser("田中"); // ageとcityは渡されていない
```

## 2. null

### 定義
`null`は「意図的に値がない」ことを示すプリミティブ値です。
開発者が**明示的に**設定する値です。

### nullの使用場面

#### 1. 意図的に「値なし」を設定
```javascript
let selectedUser = null; // 初期状態では選択されていない
let cachedData = null; // キャッシュデータがない状態

// 後でデータが設定される
selectedUser = { id: 1, name: "田中" };
cachedData = { timestamp: Date.now(), data: [...] };
```

#### 2. オブジェクト参照をクリア
```javascript
let largeObject = {
    data: new Array(1000000).fill(0),
    process: function() { /* 処理 */ }
};

// メモリを解放するために参照をクリア
largeObject = null;
```

#### 3. DOM要素が見つからない場合
```javascript
const element = document.getElementById("nonexistent");
console.log(element); // null（要素が存在しない）

const foundElement = document.getElementById("header");
console.log(foundElement); // HTMLElement または null
```

## 3. undefinedとnullの比較

### 基本的な違い

```javascript
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (歴史的な理由による)

console.log(undefined == null); // true（型変換あり）
console.log(undefined === null); // false（厳密比較）

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.log(String(undefined)); // "undefined"
console.log(String(null)); // "null"
```

### 比較表

| 特徴 | undefined | null |
|------|-----------|------|
| 意味 | 値が定義されていない | 意図的に値がない |
| 設定者 | JavaScript エンジン | 開発者 |
| typeof | "undefined" | "object" |
| 数値変換 | NaN | 0 |
| JSON.stringify | undefined（省略） | null |

## 4. 配列のインデックスがundefinedになる理由

### 具体例の解説
```javascript
var arr = [1, 2, 3];
console.log(arr[4]); // undefined
```

#### 理由の詳細説明

1. **配列は疎な構造**
   ```javascript
   const arr = [1, 2, 3];
   console.log(arr.length); // 3
   
   // インデックス4は存在しない
   console.log(4 in arr); // false
   console.log(arr.hasOwnProperty(4)); // false
   ```

2. **JavaScriptの配列アクセスの仕組み**
   ```javascript
   // 配列は実際にはオブジェクト
   const arr = [1, 2, 3];
   console.log(typeof arr); // "object"
   
   // 以下と同等の動作
   const obj = {
       "0": 1,
       "1": 2,
       "2": 3,
       length: 3
   };
   
   console.log(obj["4"]); // undefined（存在しないプロパティ）
   ```

3. **存在しないプロパティはundefined**
   ```javascript
   const user = { name: "田中" };
   console.log(user.age); // undefined
   
   // 配列も同様
   const arr = [1, 2, 3];
   console.log(arr[4]); // undefined
   ```

4. **疎な配列の例**
   ```javascript
   const sparseArray = [];
   sparseArray[0] = "最初";
   sparseArray[5] = "最後";
   
   console.log(sparseArray.length); // 6
   console.log(sparseArray[1]); // undefined
   console.log(sparseArray[2]); // undefined
   console.log(sparseArray[3]); // undefined
   console.log(sparseArray[4]); // undefined
   console.log(sparseArray[5]); // "最後"
   
   // 実際の配列の中身
   console.log(sparseArray); // ["最初", empty × 4, "最後"]
   ```

## 5. 実践的な判定方法

### undefinedの判定

```javascript
let value;

// 推奨：厳密等価演算子
if (value === undefined) {
    console.log("値がundefinedです");
}

// 推奨：typeof演算子（未宣言変数でもエラーにならない）
if (typeof value === "undefined") {
    console.log("値がundefinedです");
}

// 非推奨：undefinedが再定義される可能性がある（古いJS）
if (value == undefined) {
    console.log("undefinedまたはnullです");
}
```

### nullの判定

```javascript
let value = null;

// 推奨：厳密等価演算子
if (value === null) {
    console.log("値がnullです");
}

// nullとundefinedの両方をチェック
if (value == null) { // null || undefined
    console.log("値がnullまたはundefinedです");
}
```

### 配列の有効な値かチェック

```javascript
const arr = [1, 2, 3];

// インデックス4が有効な値を持つかチェック
function hasValidValue(array, index) {
    // 方法1: インデックスが範囲内かチェック
    if (index >= 0 && index < array.length) {
        return true;
    }
    
    // 方法2: in演算子を使用
    return index in array;
}

console.log(hasValidValue(arr, 2)); // true
console.log(hasValidValue(arr, 4)); // false

// 疎な配列での例
const sparseArr = [];
sparseArr[0] = "値";
sparseArr[5] = "値";

console.log(hasValidValue(sparseArr, 3)); // false（要素が存在しない）
console.log(3 in sparseArr); // false
```

## 6. よくある問題と解決策

### 1. 配列の存在しない要素への対処

```javascript
const users = [
    { name: "田中", age: 30 },
    { name: "佐藤", age: 25 }
];

// 問題：存在しないインデックス
console.log(users[5]); // undefined
console.log(users[5].name); // TypeError: Cannot read property 'name' of undefined

// 解決策1: 存在チェック
const user = users[5];
if (user !== undefined) {
    console.log(user.name);
} else {
    console.log("ユーザーが見つかりません");
}

// 解決策2: Optional Chaining（ES2020）
console.log(users[5]?.name); // undefined（エラーにならない）

// 解決策3: デフォルト値
const userName = users[5]?.name || "名無し";
console.log(userName); // "名無し"
```

### 2. オブジェクトプロパティのデフォルト値

```javascript
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
    // retryCount プロパティがない
};

// 問題：存在しないプロパティ
console.log(config.retryCount); // undefined

// 解決策1: デフォルト値
const retryCount = config.retryCount || 3;
console.log(retryCount); // 3

// 解決策2: Nullish Coalescing（ES2020）
const maxRetries = config.retryCount ?? 3;
console.log(maxRetries); // 3

// 解決策3: Destructuring with default
const { retryCount: maxAttempts = 3 } = config;
console.log(maxAttempts); // 3
```

### 3. 関数の引数のデフォルト値

```javascript
// ES5以前の方法
function greetUser(name, greeting) {
    name = name || "ゲスト";
    greeting = greeting || "こんにちは";
    console.log(greeting + "、" + name + "さん");
}

// ES6のデフォルトパラメータ（推奨）
function greetUserModern(name = "ゲスト", greeting = "こんにちは") {
    console.log(`${greeting}、${name}さん`);
}

greetUser(); // "こんにちは、ゲストさん"
greetUserModern(); // "こんにちは、ゲストさん"
greetUserModern("田中"); // "こんにちは、田中さん"
```

## 7. JSON との関係

```javascript
const data = {
    name: "田中",
    age: undefined,
    city: null,
    email: "tanaka@example.com"
};

// JSON.stringifyでの動作
const jsonString = JSON.stringify(data);
console.log(jsonString); // {"name":"田中","city":null,"email":"tanaka@example.com"}
// undefinedプロパティは除外される

// JSON.parseでの動作
const parsed = JSON.parse(jsonString);
console.log(parsed.age); // undefined（プロパティが存在しない）
console.log(parsed.city); // null
```

## 8. ベストプラクティス

### 1. 使い分けの指針

```javascript
// ✅ 良い例
let selectedUser = null; // 意図的に「選択されていない」状態
let cachedData = null; // 意図的に「キャッシュがない」状態

function getUser(id) {
    if (id < 0) {
        return null; // 意図的に「無効な結果」を返す
    }
    // ユーザー検索処理...
}

// ❌ 避けるべき例
let userName = undefined; // undefinedを明示的に設定するのは避ける
function getData() {
    return undefined; // nullを返すべき
}
```

### 2. 安全なアクセスパターン

```javascript
// 配列の安全なアクセス
function getArrayElement(arr, index, defaultValue = null) {
    return (index >= 0 && index < arr.length) ? arr[index] : defaultValue;
}

const numbers = [1, 2, 3];
console.log(getArrayElement(numbers, 1)); // 2
console.log(getArrayElement(numbers, 5)); // null
console.log(getArrayElement(numbers, 5, "見つかりません")); // "見つかりません"

// オブジェクトの安全なアクセス
function getProperty(obj, key, defaultValue = null) {
    return obj && obj.hasOwnProperty(key) ? obj[key] : defaultValue;
}

const user = { name: "田中", age: 30 };
console.log(getProperty(user, "name")); // "田中"
console.log(getProperty(user, "email")); // null
```

## まとめ

1. **undefined**: JavaScriptエンジンが自動的に割り当てる「定義されていない」値
2. **null**: 開発者が意図的に設定する「値がない」状態
3. **配列の存在しないインデックス**: JavaScriptの配列はオブジェクトなので、存在しないプロパティと同様にundefinedが返される
4. **実践では**: 適切な判定方法とデフォルト値の設定が重要

理解のポイント：
- `undefined`は「まだ決まっていない」
- `null`は「何もないと決まっている」
- 配列は疎な構造で、存在しない要素はundefined
- 安全なアクセスパターンを使ってエラーを防ぐ
``` 