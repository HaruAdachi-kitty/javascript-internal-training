# Day 3.5: エラーハンドリング

## 🎯 学習目標
- エラーの種類と原因を理解する
- try-catch文の基本的な使い方を覚える
- エラーメッセージの読み方を理解する
- 安全なコードの書き方を身につける
- 実務で使えるエラー処理パターンを学ぶ

## 📖 エラーとは何か？

**エラー**は、プログラムが期待通りに動作しない状況です。JavaScriptでは、エラーが発生するとプログラムが停止してしまいます。

### よくあるエラーの例

```javascript
// 1. 存在しない変数を参照
console.log(nonExistentVariable); // ReferenceError

// 2. nullやundefinedのプロパティにアクセス
const user = null;
console.log(user.name); // TypeError

// 3. 数値以外に数値メソッドを使用
const text = "hello";
console.log(text.toFixed(2)); // TypeError
```

## 🔧 try-catch文の基本

### 基本構文

```javascript
try {
  // エラーが発生する可能性のあるコード
} catch (error) {
  // エラーが発生した時の処理
} finally {
  // 必ず実行される処理（省略可能）
}
```

### 基本的な使用例

```javascript
function safeDivision(a, b) {
  try {
    if (b === 0) {
      throw new Error("0で割ることはできません");
    }
    return a / b;
  } catch (error) {
    console.log("エラーが発生しました:", error.message);
    return null;
  }
}

console.log(safeDivision(10, 2)); // 5
console.log(safeDivision(10, 0)); // エラーメッセージ表示後、null
```

## 📝 エラーの種類と対処法

### 1. ReferenceError（参照エラー）

```javascript
// 問題のあるコード
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("変数が定義されていません:", error.message);
}

// 対処法：変数の存在確認
function safeAccess(obj, prop) {
  try {
    return obj[prop];
  } catch (error) {
    console.log("プロパティアクセスエラー:", error.message);
    return undefined;
  }
}
```

### 2. TypeError（型エラー）

```javascript
// 問題のあるコード
const userData = null;

try {
  console.log(userData.name);
} catch (error) {
  console.log("型エラー:", error.message);
}

// 対処法：null/undefinedチェック
function safeGetProperty(obj, prop) {
  try {
    if (obj === null || obj === undefined) {
      return undefined;
    }
    return obj[prop];
  } catch (error) {
    console.log("プロパティ取得エラー:", error.message);
    return undefined;
  }
}
```

### 3. SyntaxError（構文エラー）

```javascript
// 実行時のJSON解析エラー
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("JSON解析エラー:", error.message);
    return null;
  }
}

const validJSON = '{"name": "田中"}';
const invalidJSON = '{name: "田中"}'; // 無効なJSON

console.log(parseJSON(validJSON));   // { name: "田中" }
console.log(parseJSON(invalidJSON)); // エラーメッセージ表示後、null
```

## 🚀 実務でよく使うエラーハンドリング

### 1. API呼び出しのエラーハンドリング

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const userData = await response.json();
    return { success: true, data: userData };
    
  } catch (error) {
    console.error("ユーザーデータ取得エラー:", error.message);
    return { success: false, error: error.message };
  }
}

// 使用例
fetchUserData(1).then(result => {
  if (result.success) {
    console.log("ユーザーデータ:", result.data);
  } else {
    console.log("エラー:", result.error);
  }
});
```

### 2. フォーム入力のバリデーション

```javascript
function validateForm(formData) {
  const errors = [];
  
  try {
    // 名前の検証
    if (!formData.name || formData.name.trim() === '') {
      errors.push('名前は必須です');
    }
    
    // メールの検証
    if (!formData.email || !formData.email.includes('@')) {
      errors.push('有効なメールアドレスを入力してください');
    }
    
    // 年齢の検証
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 0 || age > 150) {
      errors.push('有効な年齢を入力してください');
    }
    
    return { valid: errors.length === 0, errors };
    
  } catch (error) {
    console.error("バリデーションエラー:", error.message);
    return { valid: false, errors: ['バリデーション処理でエラーが発生しました'] };
  }
}

// 使用例
const formData = { name: "田中", email: "tanaka@test.com", age: "25" };
const validation = validateForm(formData);

if (validation.valid) {
  console.log("フォームは有効です");
} else {
  console.log("エラー:", validation.errors);
}
```

### 3. データ処理のエラーハンドリング

```javascript
function processUserList(users) {
  try {
    // 入力データの検証
    if (!Array.isArray(users)) {
      throw new Error("ユーザーデータは配列である必要があります");
    }
    
    const processedUsers = users.map((user, index) => {
      try {
        // 各ユーザーデータの検証
        if (!user || typeof user !== 'object') {
          throw new Error(`ユーザーデータ${index + 1}が無効です`);
        }
        
        if (!user.name) {
          throw new Error(`ユーザーデータ${index + 1}に名前がありません`);
        }
        
        return {
          id: user.id || index + 1,
          name: user.name,
          email: user.email || '未設定',
          active: user.active !== false // デフォルトはtrue
        };
        
      } catch (error) {
        console.warn("ユーザー処理エラー:", error.message);
        return null; // エラーのあるユーザーはnullに
      }
    });
    
    // nullを除去
    const validUsers = processedUsers.filter(user => user !== null);
    
    return { 
      success: true, 
      data: validUsers,
      processed: processedUsers.length,
      valid: validUsers.length
    };
    
  } catch (error) {
    console.error("ユーザーリスト処理エラー:", error.message);
    return { success: false, error: error.message };
  }
}

// 使用例
const userList = [
  { name: "田中", email: "tanaka@test.com" },
  { name: "佐藤" }, // emailなし
  null, // 無効なデータ
  { name: "鈴木", email: "suzuki@test.com", active: false }
];

const result = processUserList(userList);
console.log(result);
```

## ⚠️ エラーハンドリングのベストプラクティス

### 1. 適切なエラーメッセージ

```javascript
// ❌ 悪い例
function badValidation(data) {
  if (!data) {
    throw new Error("エラー");
  }
}

// ✅ 良い例
function goodValidation(data) {
  if (!data) {
    throw new Error("データが提供されていません。有効なデータを入力してください。");
  }
  if (typeof data !== 'object') {
    throw new Error("データはオブジェクト型である必要があります。");
  }
}
```

### 2. エラーの分類と対応

```javascript
function handleError(error) {
  if (error instanceof TypeError) {
    console.log("型エラー:", error.message);
    // 型エラーの場合の対応
  } else if (error instanceof ReferenceError) {
    console.log("参照エラー:", error.message);
    // 参照エラーの場合の対応
  } else {
    console.log("予期しないエラー:", error.message);
    // その他のエラーの場合の対応
  }
}
```

### 3. 早期リターンパターン

```javascript
function processData(data) {
  // エラーチェックを最初に行う
  if (!data) {
    return { error: "データがありません" };
  }
  
  if (!Array.isArray(data)) {
    return { error: "データは配列である必要があります" };
  }
  
  if (data.length === 0) {
    return { error: "データが空です" };
  }
  
  // 正常な処理
  try {
    const result = data.map(item => processItem(item));
    return { success: true, data: result };
  } catch (error) {
    return { error: error.message };
  }
}
```

## 🎯 デバッグのコツ

### 1. console.logを使った確認

```javascript
function debugExample(data) {
  console.log("関数開始 - データ:", data);
  
  try {
    console.log("処理開始");
    const result = data.map(item => {
      console.log("処理中のアイテム:", item);
      return item * 2;
    });
    
    console.log("処理結果:", result);
    return result;
    
  } catch (error) {
    console.log("エラー発生:", error.message);
    console.log("エラーの詳細:", error);
    return [];
  }
}
```

### 2. 段階的な動作確認

```javascript
function stepByStepCheck(users) {
  console.log("Step 1: 入力データ確認");
  console.log("users:", users);
  console.log("type:", typeof users);
  console.log("isArray:", Array.isArray(users));
  
  if (!Array.isArray(users)) {
    console.log("エラー: 配列ではありません");
    return [];
  }
  
  console.log("Step 2: 各要素の確認");
  users.forEach((user, index) => {
    console.log(`User ${index}:`, user);
    console.log(`  name: ${user?.name}`);
    console.log(`  email: ${user?.email}`);
  });
  
  console.log("Step 3: 処理実行");
  // 実際の処理...
}
```

## 📊 まとめ

### エラーハンドリングの重要性
1. **ユーザー体験**: エラーが発生してもアプリが停止しない
2. **デバッグ**: 問題の原因を特定しやすくなる
3. **保守性**: 予期しない状況に対応できる
4. **信頼性**: 本番環境での安定性が向上する

### エラーハンドリングの原則
- **早期発見**: 可能な限り早い段階でエラーをキャッチ
- **適切な対応**: エラーの種類に応じた適切な処理
- **ユーザーフレンドリー**: わかりやすいエラーメッセージ
- **ログ記録**: デバッグのための情報を残す

### 次のステップ
実際の開発では、ここで学んだエラーハンドリングを、API通信、フォーム処理、データ変換など様々な場面で活用することになります。 