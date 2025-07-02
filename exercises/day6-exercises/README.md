# Day 6: DOM 操作演習

## 📋 学習フロー

### 1. 事前準備（5 分）

- [x] **Day 5.5 の基礎概念** を完了済みであることを確認
- [x] `teaching-materials/day6-dom-manipulation.md` を読む
- [x] DOM の基本概念を理解する
- [x] ブラウザの開発者ツールの使い方を確認

⚠️ **重要**: Day 5.5 の基礎概念（document、要素、ID、クラス）を理解してから進んでください

### 2. 理論学習（15 分）

**必読箇所：**

- DOM とは何か
- 要素の選択方法
- 要素の作成・操作
- 属性とスタイルの操作
- セキュリティ（XSS 対策）

### 3. 実践演習（45 分）

#### Phase 1: 基本操作をマスター（15 分）

1. **`dom-practice.html` をブラウザで開く**
2. **演習 1-3 を完了**
   - 要素の選択
   - 要素の作成
   - 属性操作

#### Phase 2: 応用操作に挑戦（20 分）

3. **演習 4-6 を完了**
   - スタイル操作
   - テキスト・HTML 操作
   - クラス操作

#### Phase 3: 実践的なパターン（10 分）

4. **演習 7-8 を完了**
   - 要素の削除
   - 実践的な DOM 操作

### 4. コード演習（30 分）

- **`dom-manipulation-exercises.js` を開く**
- **各関数を順番に実装**
- **テストを実行して動作確認**

### 5. 振り返り（5 分）

- **実装した内容を確認**
- **学習ポイントを整理**

## 📁 ファイル構成

### `dom-practice.html`

- **ブラウザで実行する対話式演習**
- 8 つの DOM 操作演習を含む
- リアルタイムで結果を確認可能
- 開発者ツールのコンソールを活用

### `dom-manipulation-exercises.js`

- **JavaScript コード演習**
- 10 の関数実装課題
- TODO コメント付きで学習しやすい
- テストケース付き

## 🚀 実行方法

### HTML 演習の実行

```bash
# exercises/day6-exercises フォルダで実行
open dom-practice.html
# または
# ブラウザで直接 dom-practice.html を開く
```

### JavaScript 演習の実行

1. **テキストエディタで `dom-manipulation-exercises.js` を開く**
2. **TODO 部分を順番に実装**
3. **ブラウザのコンソールで実行して確認**

## 📝 学習のポイント

### ✅ チェックリスト

- [ ] `getElementById`, `querySelector` の使い分けができる
- [ ] 要素の作成と DOM への追加ができる
- [ ] 属性やスタイルの操作ができる
- [ ] `innerHTML` と `textContent` の違いを理解している
- [ ] XSS 攻撃を防ぐ方法を知っている
- [ ] パフォーマンスを意識した DOM 操作ができる

### 💡 重要なポイント

1. **セキュリティ第一**

   - ユーザー入力は必ずエスケープ
   - `innerHTML` より `textContent` を優先

2. **パフォーマンスを意識**

   - DocumentFragment を活用
   - 不要な DOM 操作を避ける

3. **エラーハンドリング**
   - 要素の存在確認を必ず行う
   - null チェックを習慣化

## 🔧 よくある問題と解決法

### Q: 要素が取得できない

```javascript
// ❌ 悪い例
const element = document.getElementById('nonexistent');
element.textContent = 'テキスト'; // エラー！

// ✅ 良い例
const element = document.getElementById('myElement');
if (element) {
  element.textContent = 'テキスト';
}
```

### Q: スタイルが適用されない

```javascript
// ❌ 悪い例
element.style.background-color = 'red'; // ハイフンは使えない

// ✅ 良い例
element.style.backgroundColor = 'red'; // キャメルケース
// または
element.style.setProperty('background-color', 'red');
```

## 📚 次のステップ

- 演習完了後は `solutions/day6-solutions/` で解答を確認
- Day 7 のイベントハンドリングに進む
- 実際のプロジェクトで DOM 操作を活用してみる

## 🆘 困ったときは

1. 開発者ツールのコンソールでエラーを確認
2. MDN Web Docs で API リファレンスを参照
3. 解答ファイルで実装例を確認
