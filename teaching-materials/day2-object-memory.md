# Day 2: オブジェクト型とメモリの仕組み

## 🎯 学習目標
- オブジェクト型とプリミティブ型の違いを理解する
- スタックとヒープの概念を理解する
- 参照渡しと値渡しの違いを理解する

## 📚 データ型の分類

### プリミティブ型（基本型）
```javascript
// スタックに保存される
let name = "田中";
let age = 25;
let isActive = true;
let nothing = null;
let notDefined = undefined;
```

### オブジェクト型（参照型）
```javascript
// ヒープに保存され、スタックには参照（アドレス）が保存される
let person = { name: "田中", age: 25 };
let numbers = [1, 2, 3, 4, 5];
let greet = function() { console.log("こんにちは"); };
```

## 🧠 メモリの仕組み

### スタック（Stack）
- **高速**だが**容量が小さい**
- プリミティブ型の**値**を直接保存
- 変数名と値が1対1で対応

```javascript
let a = 10;
let b = a;  // 値がコピーされる
a = 20;
console.log(a); // 20
console.log(b); // 10 (影響を受けない)
```

### ヒープ（Heap）
- **大容量**だが**アクセスが少し遅い**
- オブジェクトの**実体**を保存
- スタックには「住所（参照）」のみ保存

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;  // 参照（住所）がコピーされる
obj1.value = 20;
console.log(obj1.value); // 20
console.log(obj2.value); // 20 (同じオブジェクトを参照)
```

## 🏠 メモリ図解

```
スタック                    ヒープ
┌─────────────┐           ┌─────────────────┐
│ a: 10       │           │                 │
│ b: 10       │           │                 │
│ obj1: 0x001 │ ────────► │ 0x001: {value:20}│
│ obj2: 0x001 │ ────────► │                 │
└─────────────┘           └─────────────────┘
```

## ⚠️ よくある落とし穴

### 1. オブジェクトの比較
```javascript
let obj1 = { name: "田中" };
let obj2 = { name: "田中" };
console.log(obj1 === obj2); // false (異なる参照)

let obj3 = obj1;
console.log(obj1 === obj3); // true (同じ参照)
```

### 2. 配列のコピー
```javascript
// 間違った方法
let originalArray = [1, 2, 3];
let copiedArray = originalArray;  // 参照のコピー
copiedArray.push(4);
console.log(originalArray); // [1, 2, 3, 4] 元も変わってしまう！

// 正しい方法（シャローコピー）
let correctCopy = [...originalArray];  // スプレッド演算子
// または
let correctCopy2 = originalArray.slice();
```

### 3. ネストしたオブジェクト
```javascript
let person = {
  name: "田中",
  address: { city: "東京", zip: "100-0001" }
};

let shallowCopy = { ...person };
shallowCopy.address.city = "大阪";  // 深い部分は参照のまま
console.log(person.address.city);  // "大阪" 元も変わる！
```

## 🔍 実践的な確認方法

### typeof演算子
```javascript
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" ※注意！
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" ※注意！
console.log(typeof function(){}); // "function"
```

### 配列の判定
```javascript
let arr = [1, 2, 3];
console.log(typeof arr);           // "object" (役に立たない)
console.log(Array.isArray(arr));   // true (正確)
```

## 💡 実務での重要性

### なぜこの理解が重要か？
1. **バグの防止**: 意図しない参照による値の変更を防ぐ
2. **パフォーマンス**: 適切なコピー方法を選択
3. **React等のフレームワーク**: 状態管理で必須の知識
4. **チーム開発**: 他の開発者が理解しやすいコードを書く

### 実務でよくある場面
```javascript
// APIから取得したデータを加工する場合
function processUserData(users) {
  // 元データを変更しないようにする
  return users.map(user => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`
  }));
}
```

## 📝 チェックポイント
- [ ] プリミティブ型とオブジェクト型の違いを説明できる
- [ ] スタックとヒープの役割を理解している
- [ ] 参照渡しによる値の変更を予測できる
- [ ] 適切なオブジェクトのコピー方法を知っている 