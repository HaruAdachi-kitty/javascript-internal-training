# Day 6: DOM 操作マスター

## 📚 目次

1. [DOM とは](#domとは)
2. [要素の選択](#要素の選択)
3. [要素の作成・操作](#要素の作成操作)
4. [属性とスタイル](#属性とスタイル)
5. [実践パターン](#実践パターン)
6. [パフォーマンス](#パフォーマンス)

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
