# JavaScript 変数宣言: var, let, const

## 概要

JavaScriptには3つの変数宣言キーワードがあります：`var`、`let`、`const`。
それぞれに異なる特性とスコープルールがあり、適切な使い分けが重要です。

## 1. var

### 特徴
- ES5以前から使用されている従来の変数宣言
- 関数スコープまたはグローバルスコープを持つ
- 巻き上げ（hoisting）が発生する
- 再宣言が可能

### スコープ

```javascript
function example() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1 - ブロック外からアクセス可能
}

var globalVar = "グローバル変数";
console.log(globalVar); // "グローバル変数"
```

### 巻き上げ（Hoisting）

```javascript
console.log(myVar); // undefined（エラーではない）
var myVar = "Hello";

// 実際の動作は以下と同等
var myVar;
console.log(myVar); // undefined
myVar = "Hello";
```

### 再宣言

```javascript
var name = "田中";
var name = "佐藤"; // エラーなし
console.log(name); // "佐藤"
```

## 2. let

### 特徴
- ES6（ES2015）で導入
- ブロックスコープを持つ
- 巻き上げは発生するが、初期化前のアクセスでエラー（Temporal Dead Zone）
- 同一スコープ内での再宣言不可
- 再代入は可能

### ブロックスコープ

```javascript
function example() {
    if (true) {
        let x = 1;
        console.log(x); // 1
    }
    console.log(x); // ReferenceError: x is not defined
}
```

### Temporal Dead Zone

```javascript
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello";
```

### 再宣言の制限

```javascript
let name = "田中";
let name = "佐藤"; // SyntaxError: Identifier 'name' has already been declared

// ただし、異なるブロックスコープでは可能
{
    let name = "田中";
}
{
    let name = "佐藤"; // OK
}
```

### 再代入

```javascript
let counter = 0;
counter = 1; // OK
counter++; // OK
```

## 3. const

### 特徴
- ES6（ES2015）で導入
- ブロックスコープを持つ
- 宣言時に初期化が必要
- 再代入不可
- オブジェクトや配列の中身は変更可能

### 宣言時の初期化

```javascript
const PI = 3.14159; // OK
const EMPTY; // SyntaxError: Missing initializer in const declaration
```

### 再代入の禁止

```javascript
const name = "田中";
name = "佐藤"; // TypeError: Assignment to constant variable.
```

### オブジェクトと配列の変更

```javascript
const user = {
    name: "田中",
    age: 30
};

user.name = "佐藤"; // OK - オブジェクトのプロパティは変更可能
user.city = "東京"; // OK - 新しいプロパティの追加も可能

const numbers = [1, 2, 3];
numbers.push(4); // OK - 配列の要素追加は可能
numbers[0] = 10; // OK - 要素の変更も可能

console.log(user); // { name: "佐藤", age: 30, city: "東京" }
console.log(numbers); // [10, 2, 3, 4]
```

## 比較表

| 特徴 | var | let | const |
|------|-----|-----|-------|
| スコープ | 関数/グローバル | ブロック | ブロック |
| 巻き上げ | あり（undefined） | あり（TDZ） | あり（TDZ） |
| 再宣言 | 可能 | 不可 | 不可 |
| 再代入 | 可能 | 可能 | 不可 |
| 初期化 | 任意 | 任意 | 必須 |

## 使い分けのベストプラクティス

### 1. 基本方針
```javascript
// 1. デフォルトでconstを使用
const API_URL = "https://example.com/api";
const users = ["田中", "佐藤", "鈴木"];

// 2. 再代入が必要な場合はlet
let counter = 0;
let message = "";

// 3. varは基本的に使用しない（レガシーコードの保守時のみ）
```

### 2. ループでの使用

```javascript
// var使用時の問題
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 3, 3, 3 が出力される
    }, 100);
}

// letを使用した解決法
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 0, 1, 2 が出力される
    }, 100);
}
```

### 3. イミュータブルなデータ管理

```javascript
// constを使用してイミュータブルな配列操作
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // 新しい配列を作成

// constを使用してイミュータブルなオブジェクト操作
const originalUser = { name: "田中", age: 30 };
const updatedUser = { ...originalUser, age: 31 }; // 新しいオブジェクトを作成
```

## 実践例

### データ処理の例

```javascript
const fetchUserData = async () => {
    const API_ENDPOINT = "https://api.example.com/users"; // const: 変更されない値
    let userData = null; // let: 後で代入される
    let errorMessage = ""; // let: 条件によって変更される
    
    try {
        const response = await fetch(API_ENDPOINT); // const: 再代入不要
        userData = await response.json(); // 再代入
        
        // データ処理
        const processedData = userData.map(user => ({ // const: 新しい配列
            id: user.id,
            displayName: `${user.firstName} ${user.lastName}`,
            isActive: user.status === 'active'
        }));
        
        return processedData;
    } catch (error) {
        errorMessage = error.message; // 再代入
        console.error(errorMessage);
        return [];
    }
};
```

## まとめ

1. **const**: デフォルトの選択肢。値が変更されない場合に使用
2. **let**: 再代入が必要な変数に使用
3. **var**: 新しいコードでは使用を避ける

この使い分けにより、コードの意図が明確になり、バグの発生を防ぎ、保守性が向上します。 