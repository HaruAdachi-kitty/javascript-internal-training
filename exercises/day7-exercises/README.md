# Day 7: イベントハンドリング演習

## 📋 学習フロー

### 1. 事前準備（5 分）

- [x] Day 6 の DOM 操作を習得済みであることを確認
- [x] `teaching-materials/day7-event-handling.md` を読む
- [x] イベント駆動プログラミングの概念を理解

### 2. 理論学習（20 分）

**必読箇所：**

- イベントハンドリングの基本
- イベントオブジェクトの活用
- イベント伝播（バブリング・キャプチャリング）
- イベント委譲（Event Delegation）
- パフォーマンス最適化（デバウンス・スロットル）

### 3. 実践演習（60 分）

#### Phase 1: 基本イベント（15 分）

1. **`event-practice.html` をブラウザで開く**
2. **演習 1-3 を完了**
   - 基本的なイベントリスナー
   - イベントオブジェクトの活用
   - マウス・キーボードイベント

#### Phase 2: 高度なイベント処理（20 分）

3. **演習 4-6 を完了**
   - イベント伝播の制御
   - フォームバリデーション
   - 動的 UI 要素

#### Phase 3: 実践的パターン（25 分）

4. **演習 7-10 を完了**
   - タブ・モーダル・ドロップダウン
   - パフォーマンス最適化
   - エラーハンドリング

### 4. コード演習（30 分）

- **`event-handling-exercises.js` を開く**
- **各関数を順番に実装**
- **実際の UI コンポーネントを作成**

### 5. 振り返り（5 分）

- **実装したパターンを整理**
- **実務で活用できる場面を考える**

## 📁 ファイル構成

### `event-practice.html`

- **ブラウザで実行する対話式演習**
- 10 の実践的なイベントハンドリング演習
- リアルタイムでユーザー操作を確認
- 様々な UI パターンを含む

### `event-handling-exercises.js`

- **JavaScript コード演習**
- 10 の関数実装課題
- 実用的なイベントハンドリングパターン
- デバウンス・スロットルの実装も含む

## 🚀 実行方法

### HTML 演習の実行

```bash
# exercises/day7-exercises フォルダで実行
open event-practice.html
# または
# ブラウザで直接 event-practice.html を開く
```

### JavaScript 演習の実行

1. **テキストエディタで `event-handling-exercises.js` を開く**
2. **TODO 部分を順番に実装**
3. **HTML ファイルにスクリプトを読み込んで動作確認**

## 📝 学習のポイント

### ✅ チェックリスト

- [ ] `addEventListener` の正しい使用方法を理解している
- [ ] イベントオブジェクトのプロパティを活用できる
- [ ] イベント伝播（バブリング・キャプチャリング）を制御できる
- [ ] イベント委譲でパフォーマンスを最適化できる
- [ ] デバウンス・スロットルを実装できる
- [ ] フォームバリデーションができる
- [ ] 動的な UI コンポーネントを作成できる

### 💡 重要なポイント

1. **イベント委譲を活用**

   ```javascript
   // ❌ 各要素に個別リスナー（非効率）
   buttons.forEach((btn) => btn.addEventListener('click', handler));

   // ✅ 親要素で一括処理（効率的）
   container.addEventListener('click', (e) => {
     if (e.target.matches('.button')) handler(e);
   });
   ```

2. **メモリリークを防ぐ**

   ```javascript
   // リスナーの削除を忘れずに
   element.removeEventListener('click', handler);
   ```

3. **パフォーマンス最適化**
   ```javascript
   // デバウンスで処理回数を制限
   const debouncedSearch = debounce(searchFunction, 300);
   input.addEventListener('input', debouncedSearch);
   ```

## 🎯 実践的なパターン

### 1. モーダルダイアログ

- オーバーレイクリックで閉じる
- ESC キーで閉じる
- フォーカス管理

### 2. ドロップダウン

- クリック外で閉じる
- キーボードナビゲーション
- アクセシビリティ対応

### 3. フォームバリデーション

- リアルタイム検証
- エラーメッセージ表示
- 送信前チェック

### 4. 検索フィルター

- デバウンスで API 呼び出し制限
- ローディング状態管理
- 結果のハイライト

## 🔧 よくある問題と解決法

### Q: イベントが重複して発生する

```javascript
// ❌ 悪い例：同じリスナーを重複登録
button.addEventListener('click', handler);
button.addEventListener('click', handler); // 重複！

// ✅ 良い例：登録前にリスナーを削除
button.removeEventListener('click', handler);
button.addEventListener('click', handler);
```

### Q: this の参照が正しくない

```javascript
// ❌ 悪い例：アロー関数で this が変わる
button.addEventListener('click', () => {
  console.log(this); // Window オブジェクト
});

// ✅ 良い例：通常の関数を使用
button.addEventListener('click', function () {
  console.log(this); // button 要素
});
```

### Q: パフォーマンスが悪い

```javascript
// ❌ 悪い例：scroll イベントで重い処理
window.addEventListener('scroll', () => {
  expensiveFunction(); // 毎回実行されて重い
});

// ✅ 良い例：スロットルで処理を間引く
window.addEventListener('scroll', throttle(expensiveFunction, 100));
```

## 📚 次のステップ

- 演習完了後は `solutions/day7-solutions/` で解答を確認
- 実際のプロジェクトでイベントハンドリングを実装
- React や Vue.js などのフレームワークでのイベント処理を学習

## 🆘 困ったときは

1. ブラウザの開発者ツールでイベントを確認
2. `console.log(event)` でイベントオブジェクトを調査
3. パフォーマンスタブでイベントの頻度をチェック
4. 解答ファイルで実装パターンを参考にする
