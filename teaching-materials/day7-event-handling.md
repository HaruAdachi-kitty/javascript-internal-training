# Day 7: イベントハンドリングマスター

## 📚 目次

1. [イベントとは](#イベントとは)
2. [基本的なイベント処理](#基本的なイベント処理)
3. [イベントオブジェクト](#イベントオブジェクト)
4. [イベントの種類](#イベントの種類)
5. [イベントの伝播](#イベントの伝播)
6. [フォームイベント](#フォームイベント)
7. [実践的なパターン](#実践的なパターン)
8. [パフォーマンス最適化](#パフォーマンス最適化)

## 🌟 イベントとは

**イベント**は、ユーザーの操作（クリック、キー入力など）やブラウザの状態変化（ページ読み込み完了など）を検知する仕組みです。JavaScript でイベントを「聞く」ことで、インタラクティブな Web アプリケーションを作成できます。

### イベント駆動プログラミング

```javascript
// ユーザーがボタンをクリックしたときに実行される
button.addEventListener('click', function () {
  console.log('ボタンがクリックされました！');
});

// ページが読み込まれたときに実行される
document.addEventListener('DOMContentLoaded', function () {
  console.log('ページが読み込まれました！');
});
```

## 🎯 基本的なイベント処理

### addEventListener の基本構文

```javascript
// 基本構文
element.addEventListener(
  'eventType',
  function (event) {
    // イベント処理
  },
  options
);

// 実際の例
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('クリックされました');
}
```

### 主要なイベントタイプ

```javascript
// マウスイベント
element.addEventListener('click', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// キーボードイベント
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('input', handler);

// フォームイベント
form.addEventListener('submit', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// ウィンドウイベント
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

## 📦 イベントオブジェクト

イベントハンドラーには**イベントオブジェクト**が渡され、イベントに関する詳細情報を取得できます。

### 基本プロパティ

```javascript
function handleEvent(event) {
  console.log('イベントタイプ:', event.type);
  console.log('対象要素:', event.target);
  console.log('現在の要素:', event.currentTarget);
  console.log('タイムスタンプ:', event.timeStamp);
}
```

### マウスイベント

```javascript
function handleMouseEvent(event) {
  console.log('マウス座標:', event.clientX, event.clientY);
  console.log('画面座標:', event.screenX, event.screenY);
  console.log('クリックされたボタン:', event.button);
}
```

### キーボードイベント

```javascript
function handleKeyEvent(event) {
  console.log('押されたキー:', event.key);
  console.log('キーコード:', event.code);
  console.log('修飾キー:');
  console.log('  Ctrl:', event.ctrlKey);
  console.log('  Shift:', event.shiftKey);
  console.log('  Alt:', event.altKey);
}
```

## 🎪 イベントの種類

### マウスイベント

```javascript
const element = document.getElementById('target');

// クリック関連
element.addEventListener('click', () => console.log('クリック'));
element.addEventListener('dblclick', () => console.log('ダブルクリック'));
element.addEventListener('mousedown', () => console.log('マウスボタン押下'));
element.addEventListener('mouseup', () => console.log('マウスボタン離す'));

// マウス移動関連
element.addEventListener('mouseenter', () => console.log('マウス進入'));
element.addEventListener('mouseleave', () => console.log('マウス離脱'));
element.addEventListener('mouseover', () => console.log('マウスオーバー'));
element.addEventListener('mouseout', () => console.log('マウスアウト'));
element.addEventListener('mousemove', () => console.log('マウス移動'));
```

### キーボードイベント

```javascript
// キーイベント
document.addEventListener('keydown', () => console.log('キー押下'));
document.addEventListener('keyup', () => console.log('キー離す'));

// 入力フィールドでの使用
const input = document.getElementById('textInput');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    console.log('入力内容:', this.value);
  }
});
```

### フォームイベント

```javascript
const form = document.getElementById('myForm');
const input = document.getElementById('myInput');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // フォーム送信を防ぐ
  console.log('フォーム送信');
});

input.addEventListener('change', () => console.log('値変更'));
input.addEventListener('input', () => console.log('入力中'));
input.addEventListener('focus', () => console.log('フォーカス'));
input.addEventListener('blur', () => console.log('フォーカス離脱'));
```

### ウィンドウイベント

```javascript
// ページ読み込み
window.addEventListener('load', () => console.log('全リソース読み込み完了'));
document.addEventListener('DOMContentLoaded', () => console.log('DOM構築完了'));

// ウィンドウサイズ
window.addEventListener('resize', () => {
  console.log('ウィンドウサイズ:', window.innerWidth, window.innerHeight);
});

// スクロール
window.addEventListener('scroll', () => {
  console.log('スクロール位置:', window.pageYOffset);
});
```

## 🌊 イベントの伝播

### イベントフロー

1. **キャプチャフェーズ**: ルートから対象要素へ
2. **ターゲットフェーズ**: 対象要素で発火
3. **バブリングフェーズ**: 対象要素からルートへ

```javascript
// バブリング（デフォルト）
element.addEventListener('click', handler);

// キャプチャ
element.addEventListener('click', handler, true);
// または
element.addEventListener('click', handler, { capture: true });
```

### 伝播の制御

```javascript
function handleClick(event) {
  // イベントの伝播を停止
  event.stopPropagation();

  // デフォルト動作を防ぐ
  event.preventDefault();

  // 両方を実行
  event.stopImmediatePropagation();
}
```

### イベント委譲（推奨パターン）

```javascript
// 親要素で子要素のイベントを処理
document
  .getElementById('container')
  .addEventListener('click', function (event) {
    if (event.target.matches('.button')) {
      console.log('ボタンがクリックされました');
    }

    if (event.target.matches('.delete-btn')) {
      event.target.parentElement.remove();
    }
  });
```

## 📝 フォームイベント

### 入力フィールドの監視

```javascript
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// リアルタイム入力監視
nameInput.addEventListener('input', function (event) {
  console.log('現在の値:', event.target.value);
  validateName(event.target.value);
});

// 値の変更検出
emailInput.addEventListener('change', function (event) {
  console.log('値が変更されました:', event.target.value);
  validateEmail(event.target.value);
});

// フォーカス管理
nameInput.addEventListener('focus', function () {
  this.style.backgroundColor = '#f0f8ff';
});

nameInput.addEventListener('blur', function () {
  this.style.backgroundColor = '';
});
```

### フォーム送信の処理

```javascript
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // フォームデータの取得
  const formData = new FormData(form);

  // 各フィールドの値を取得
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // バリデーション
  if (!name || !email || !message) {
    showError('すべてのフィールドを入力してください');
    return;
  }

  // データの送信（実際のAPI呼び出し）
  submitForm({ name, email, message });
});

function submitForm(data) {
  // ローディング表示
  showLoading(true);

  // 模擬的な非同期処理
  setTimeout(() => {
    console.log('送信データ:', data);
    showSuccess('送信完了しました！');
    showLoading(false);
    form.reset();
  }, 2000);
}
```

## 🚀 実践的なパターン

### 1. インタラクティブな UI 要素

```javascript
// ドロップダウンメニュー
class DropdownMenu {
  constructor(selector) {
    this.dropdown = document.querySelector(selector);
    this.button = this.dropdown.querySelector('.dropdown-button');
    this.menu = this.dropdown.querySelector('.dropdown-menu');

    this.init();
  }

  init() {
    this.button.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', () => {
      this.close();
    });

    // Escapeキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  toggle() {
    this.menu.classList.toggle('show');
  }

  close() {
    this.menu.classList.remove('show');
  }
}

// 使用
const dropdown = new DropdownMenu('.dropdown');
```

### 2. 動的コンテンツの操作

```javascript
// タブシステム
class TabSystem {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.tabs = this.container.querySelectorAll('.tab');
    this.contents = this.container.querySelectorAll('.tab-content');

    this.init();
  }

  init() {
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab')) {
        this.switchTab(e.target);
      }
    });
  }

  switchTab(clickedTab) {
    // すべてのタブを非アクティブに
    this.tabs.forEach((tab) => tab.classList.remove('active'));
    this.contents.forEach((content) => content.classList.remove('active'));

    // クリックされたタブをアクティブに
    clickedTab.classList.add('active');

    // 対応するコンテンツを表示
    const targetId = clickedTab.dataset.tab;
    const targetContent = this.container.querySelector(`#${targetId}`);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  }
}
```

### 3. 高度なイベント処理

```javascript
// デバウンス処理（連続実行の制御）
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// スロットル処理（実行頻度の制御）
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// 使用例
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(performSearch, 300);

searchInput.addEventListener('input', function (e) {
  debouncedSearch(e.target.value);
});

// スクロールイベントのスロットル
const throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

### 4. カスタムイベントの作成

```javascript
// カスタムイベントの作成と発火
function createCustomEvent(name, data) {
  return new CustomEvent(name, {
    detail: data,
    bubbles: true,
    cancelable: true,
  });
}

// カスタムイベントの使用
const button = document.getElementById('myButton');

button.addEventListener('click', function () {
  const customEvent = createCustomEvent('userAction', {
    action: 'buttonClick',
    timestamp: Date.now(),
    userId: getCurrentUserId(),
  });

  document.dispatchEvent(customEvent);
});

// カスタムイベントのリスナー
document.addEventListener('userAction', function (e) {
  console.log('ユーザーアクション:', e.detail);
  // アナリティクスに送信など
});
```

## 🔧 パフォーマンス最適化

### デバウンス（Debounce）

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 使用例：検索機能
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
```

### スロットル（Throttle）

```javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// 使用例：スクロールイベント
const throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

### パッシブリスナー

```javascript
// パフォーマンス向上のためにpassiveオプションを使用
document.addEventListener('scroll', handleScroll, { passive: true });
document.addEventListener('touchstart', handleTouch, { passive: true });
```

### イベントリスナーの管理

```javascript
class EventManager {
  constructor() {
    this.listeners = [];
  }

  add(element, type, handler, options = {}) {
    element.addEventListener(type, handler, options);
    this.listeners.push({ element, type, handler });
  }

  removeAll() {
    this.listeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.listeners = [];
  }
}
```

## 🔧 高度な機能

### カスタムイベント

```javascript
// カスタムイベントの作成
function createCustomEvent(name, data) {
  return new CustomEvent(name, {
    detail: data,
    bubbles: true,
    cancelable: true,
  });
}

// カスタムイベントの発火
const customEvent = createCustomEvent('userLogin', { userId: 123 });
document.dispatchEvent(customEvent);

// カスタムイベントのリスナー
document.addEventListener('userLogin', function (event) {
  console.log('ユーザーログイン:', event.detail.userId);
});
```

### 一度だけ実行されるイベント

```javascript
// onceオプション
button.addEventListener('click', handler, { once: true });

// または手動で削除
function oneTimeHandler(event) {
  console.log('一度だけ実行');
  event.target.removeEventListener('click', oneTimeHandler);
}
button.addEventListener('click', oneTimeHandler);
```

## 🛡️ エラーハンドリング

### 安全なイベントハンドラー

```javascript
function createSafeHandler(handler) {
  return function (event) {
    try {
      handler(event);
    } catch (error) {
      console.error('イベントハンドラーエラー:', error);
    }
  };
}

// 使用例
button.addEventListener('click', createSafeHandler(riskyHandler));
```

### グローバルエラーハンドリング

```javascript
// 未処理エラーをキャッチ
window.addEventListener('error', function (event) {
  console.error('エラー発生:', event.error);
});

// Promise の未処理エラー
window.addEventListener('unhandledrejection', function (event) {
  console.error('未処理 Promise:', event.reason);
});
```

## 📝 ベストプラクティス

1. **イベント委譲を活用**

   - 動的要素に対応
   - メモリ効率が良い

2. **適切なイベントタイプを選択**

   - `input` vs `change`
   - `click` vs `mousedown`

3. **パフォーマンスを考慮**

   - デバウンス・スロットルを使用
   - パッシブリスナーを活用

4. **メモリリークを防ぐ**

   - 不要なリスナーを削除
   - EventManager を使用

5. **アクセシビリティを考慮**
   - キーボード操作に対応
   - ARIA イベントを適切に処理

## 🎯 学習のポイント

- イベント駆動プログラミングの考え方を理解
- イベントの伝播メカニズムを把握
- 実践的な UI パターンの実装方法を習得
- パフォーマンス最適化の重要性を認識
- ユーザビリティとアクセシビリティへの配慮
