# Day 6: DOM 操作マスター

## 📚 目次

1. [基礎概念の理解](#基礎概念の理解)
2. [DOM とは](#domとは)
3. [要素の選択](#要素の選択)
4. [要素の作成・操作](#要素の作成操作)
5. [属性とスタイル](#属性とスタイル)
6. [実践パターン](#実践パターン)
7. [パフォーマンス](#パフォーマンス)

## 🔍 基礎概念の理解

### 📄 document とは

**`document`** は、ブラウザが提供するグローバルオブジェクトで、現在表示されている HTML 文書全体を表現します。

```javascript
// documentは常に利用可能
console.log(document); // HTMLDocument オブジェクト
console.log(document.title); // ページのタイトル
console.log(document.URL); // 現在のURL
```

**簡単に言うと**: `document`は「今開いているウェブページ全体」を表す JavaScript のオブジェクトです。

### 🧱 要素（Element）とは

**要素（Element）** は、HTML 文書を構成する個々の部品です。HTML タグで囲まれた部分が一つの要素になります。

```html
<!-- これは div要素 -->
<div>テキスト</div>

<!-- これは p要素 -->
<p>段落のテキスト</p>

<!-- これは img要素 -->
<img src="image.jpg" alt="画像" />

<!-- これは button要素 -->
<button>クリック</button>
```

**JavaScript では要素をオブジェクトとして操作**：

```javascript
const divElement = document.querySelector('div');
console.log(divElement.tagName); // "DIV"
console.log(divElement.textContent); // "テキスト"
```

### 🏷️ ID とは

**ID** は、HTML 要素に付ける**一意の識別子**です。ページ内で同じ ID は一つしか使えません。

```html
<!-- IDを付けた要素 -->
<div id="header">ヘッダー</div>
<p id="main-text">メインテキスト</p>
<button id="submit-btn">送信</button>
```

**ID の特徴**：

- ページ内で**唯一無二**（同じ ID は 1 つだけ）
- `#`マークで識別（CSS: `#header`、JS: `getElementById('header')`）
- 最も高速に要素を取得できる

```javascript
// IDで要素を取得（最も基本的で高速）
const header = document.getElementById('header');
const submitButton = document.getElementById('submit-btn');
```

### 🎨 クラス（Class）とは

**クラス** は、HTML 要素に付ける**分類ラベル**です。同じクラスを複数の要素に付けることができます。

```html
<!-- 同じクラスを複数の要素に付ける -->
<div class="card">カード1</div>
<div class="card">カード2</div>
<div class="card highlight">カード3（ハイライト付き）</div>

<!-- 複数のクラスを一つの要素に付ける -->
<button class="btn btn-primary large">大きな青いボタン</button>
```

**クラスの特徴**：

- **複数の要素**に同じクラスを付けられる
- **一つの要素**に複数のクラスを付けられる
- `.`マークで識別（CSS: `.card`、JS: `querySelector('.card')`）
- スタイリングやグループ操作に便利

```javascript
// クラスで要素を取得
const firstCard = document.querySelector('.card'); // 最初の.card要素
const allCards = document.querySelectorAll('.card'); // すべての.card要素

// クラスの操作
const element = document.querySelector('.card');
element.classList.add('active'); // クラス追加
element.classList.remove('old'); // クラス削除
element.classList.toggle('visible'); // クラス切り替え
```

### 🎯 セレクタとは

**セレクタ** は、HTML 要素を指定するための**住所のようなもの**です。CSS と JavaScript で共通して使用されます。

```javascript
// 基本的なセレクタ
document.querySelector('#header'); // ID指定
document.querySelector('.card'); // クラス指定
document.querySelector('p'); // タグ指定

// 組み合わせセレクタ
document.querySelector('div.card'); // divタグでcardクラス
document.querySelector('#main .button'); // id="main"の中の.button
document.querySelector('li:first-child'); // 最初のli要素
```

### 🏗️ HTML 構造との関係

HTML 文書は**ツリー構造**になっており、要素同士は親子・兄弟関係を持ちます：

```html
<html>
  <!-- ルート要素 -->
  <head>
    <!-- htmlの子要素 -->
    <title>ページタイトル</title>
  </head>
  <body>
    <!-- htmlの子要素 -->
    <div id="container">
      <!-- bodyの子要素 -->
      <h1 class="title">タイトル</h1>
      <!-- containerの子要素 -->
      <p class="text">段落1</p>
      <!-- containerの子要素 -->
      <p class="text highlight">段落2</p>
      <!-- containerの子要素 -->
    </div>
  </body>
</html>
```

**JavaScript での関係性操作**：

```javascript
const container = document.getElementById('container');
console.log(container.children); // 子要素一覧
console.log(container.parentElement); // 親要素（body）
console.log(container.firstElementChild); // 最初の子要素（h1）
```

### 🔧 実際の使用例

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM操作の例</title>
  </head>
  <body>
    <div id="app">
      <h1 class="title">ToDo アプリ</h1>
      <input
        id="task-input"
        class="input"
        type="text"
        placeholder="タスクを入力"
      />
      <button id="add-btn" class="btn btn-primary">追加</button>
      <ul id="task-list" class="list">
        <li class="task-item">既存のタスク</li>
      </ul>
    </div>
  </body>
</html>
```

```javascript
// 要素の取得
const app = document.getElementById('app'); // アプリ全体
const input = document.getElementById('task-input'); // 入力欄
const button = document.getElementById('add-btn'); // 追加ボタン
const list = document.getElementById('task-list'); // タスクリスト

// クラスで複数要素を取得
const allTasks = document.querySelectorAll('.task-item'); // すべてのタスク

// 新しい要素を作成
const newTask = document.createElement('li');
newTask.className = 'task-item';
newTask.textContent = '新しいタスク';

// リストに追加
list.appendChild(newTask);
```

### 💡 覚えるポイント

1. **`document`** = ページ全体を表すオブジェクト
2. **要素** = HTML タグで作られる個々の部品
3. **ID** = 要素の一意な名前（ページに 1 つだけ）
4. **クラス** = 要素の分類ラベル（複数使用可能）
5. **セレクタ** = 要素を指定する方法（CSS と同じ）

この基礎を理解することで、DOM 操作が格段に理解しやすくなります！

## 🌟 DOM とは

**DOM（Document Object Model）** は、HTML 文書を JavaScript で操作するための API。ブラウザが HTML を解析して作成するオブジェクトの木構造。

### 基本概念

- HTML 要素 → JavaScript オブジェクト
- 親子関係を持つツリー構造
- リアルタイムでページを変更可能

```javascript
// DOMツリーの例
document
├── html
    ├── head
    └── body
        ├── div#container
        └── p.text
```

## 🎯 要素の選択

### 基本的な選択メソッド

```javascript
// ID で選択（最も高速）
const element = document.getElementById('myId');

// クラス名で選択（最初の一つ）
const element = document.querySelector('.myClass');

// 複数要素を選択
const elements = document.querySelectorAll('.myClass');

// タグ名で選択
const elements = document.getElementsByTagName('div');
```

### 高度なセレクタ

```javascript
// CSS セレクタが使用可能
document.querySelector('div.container > p:first-child');
document.querySelector('input[type="email"]');
document.querySelector('li:nth-child(3)');
```

## 🔧 要素の作成・操作

### 要素の作成

```javascript
// 新しい要素を作成
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.className = 'my-class';

// 親要素に追加
document.body.appendChild(newDiv);

// 特定位置に挿入
parent.insertBefore(newElement, referenceElement);
```

### テキストと HTML

```javascript
// テキストのみ（安全）
element.textContent = 'テキスト';

// HTML（XSS注意）
element.innerHTML = '<strong>太字</strong>';

// 安全なHTML生成
const html = `<div class="card">
  <h3>${user.name}</h3>
  <p>年齢: ${user.age}</p>
</div>`;
```

### 要素の削除

```javascript
// 要素を削除
element.remove();

// 子要素をすべて削除
parent.innerHTML = '';

// または
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}
```

## 🎨 属性とスタイル

### 属性の操作

```javascript
// 属性の設定・取得
element.setAttribute('src', 'image.jpg');
const src = element.getAttribute('src');

// data-* 属性（推奨）
element.dataset.userId = '123';
const userId = element.dataset.userId;

// 真偽値属性
element.disabled = true;
element.checked = false;
```

### スタイルの操作

```javascript
// 個別スタイル
element.style.color = 'red';
element.style.backgroundColor = 'yellow';

// 複数スタイル
Object.assign(element.style, {
  width: '100px',
  height: '100px',
  border: '1px solid black',
});

// クラスの操作（推奨）
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
element.classList.contains('selected');
```

## 💡 実践パターン

### 動的テーブル作成

```javascript
function createTable(data, container) {
  const table = document.createElement('table');

  // ヘッダー作成
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // ボディ作成
  const tbody = document.createElement('tbody');
  data.forEach((row) => {
    const tr = document.createElement('tr');
    Object.values(row).forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
}
```

### 検索フィルタ

```javascript
function createSearchFilter(items, container) {
  const input = document.createElement('input');
  input.placeholder = '検索...';

  const list = document.createElement('ul');

  function renderItems(filteredItems) {
    list.innerHTML = '';
    filteredItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = items.filter((item) => item.toLowerCase().includes(query));
    renderItems(filtered);
  });

  renderItems(items);
  container.appendChild(input);
  container.appendChild(list);
}
```

## ⚡ パフォーマンス

### DocumentFragment（推奨）

```javascript
// 複数要素を効率的に追加
function appendMultipleElements(parent, elements) {
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => fragment.appendChild(element));
  parent.appendChild(fragment); // 一度だけDOM操作
}
```

### 要素のキャッシュ

```javascript
// 要素を再利用
const cache = {};
function getElement(selector) {
  if (!cache[selector]) {
    cache[selector] = document.querySelector(selector);
  }
  return cache[selector];
}
```

### 安全な操作

```javascript
// 要素の存在確認
function safeOperation(selector, operation) {
  const element = document.querySelector(selector);
  if (element && typeof operation === 'function') {
    operation(element);
  }
}

// エラーハンドリング
function safeSetHTML(element, html) {
  try {
    element.innerHTML = html;
    return true;
  } catch (error) {
    console.error('HTML設定エラー:', error);
    return false;
  }
}
```

## 🛡️ セキュリティ

### XSS 対策

```javascript
// ❌ 危険：ユーザー入力をそのままHTML挿入
element.innerHTML = userInput;

// ✅ 安全：テキストとして挿入
element.textContent = userInput;

// ✅ 安全：エスケープ処理
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (match) => {
    const escape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return escape[match];
  });
}
```

## 📝 ベストプラクティス

1. **セレクタの効率性**

   - `getElementById` > `querySelector` > `getElementsByClassName`

2. **DOM 操作の最小化**

   - DocumentFragment を使用
   - 一括操作を心がける

3. **要素の存在確認**

   - null チェックを必ず行う

4. **セマンティック HTML**

   - 適切なタグを選択

5. **アクセシビリティ**
   - ARIA 属性の設定
   - キーボード操作対応

## 🎯 学習のポイント

- DOM 操作はページの表示に直結する重要な技術
- パフォーマンスを意識した実装が必要
- セキュリティ（特に XSS）に注意
- ユーザビリティとアクセシビリティを考慮
- 実際のプロジェクトでよく使用される実践的なパターンを習得
