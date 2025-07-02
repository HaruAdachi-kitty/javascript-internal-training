// Day 6: DOM操作演習 - 解答

console.log('=== Day 6: DOM操作演習 - 解答 ===');

// 演習1: 要素の選択 - 解答
console.log('\n=== 演習1: 要素の選択 - 解答 ===');

function selectById(id) {
  return document.getElementById(id);
}

function selectByClass(className) {
  return document.querySelector(`.${className}`);
}

function selectAllByClass(className) {
  return document.querySelectorAll(`.${className}`);
}

function selectComplexSelector(selector) {
  return document.querySelector(selector);
}

// 演習2: 要素の作成と追加 - 解答
console.log('\n=== 演習2: 要素の作成と追加 - 解答 ===');

function createElement(tagName, textContent, className) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  if (className) element.className = className;
  return element;
}

function appendElement(parent, child) {
  parent.appendChild(child);
}

function insertElement(parent, newElement, referenceElement) {
  parent.insertBefore(newElement, referenceElement);
}

function createList(items, parentId) {
  const parent = document.getElementById(parentId);
  if (!parent) return;

  const ul = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  parent.appendChild(ul);
}

// 演習3: 属性の操作 - 解答
console.log('\n=== 演習3: 属性の操作 - 解答 ===');

function setAttribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}

function getAttribute(element, attribute) {
  return element.getAttribute(attribute);
}

function setDataAttribute(element, dataKey, value) {
  element.dataset[dataKey] = value;
}

function getDataAttribute(element, dataKey) {
  return element.dataset[dataKey];
}

function setupImage(imgElement, src, alt, width, height) {
  imgElement.src = src;
  imgElement.alt = alt;
  imgElement.width = width;
  imgElement.height = height;
}

// 演習4: スタイルの操作 - 解答
console.log('\n=== 演習4: スタイルの操作 - 解答 ===');

function setStyle(element, property, value) {
  element.style[property] = value;
}

function setStyles(element, styles) {
  Object.assign(element.style, styles);
}

function toggleDisplay(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function fadeIn(element, duration = 1000) {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms`;
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
}

// 演習5: テキストとHTMLの操作 - 解答
console.log('\n=== 演習5: テキストとHTMLの操作 - 解答 ===');

function setTextContent(element, text) {
  element.textContent = text;
}

function setInnerHTML(element, html) {
  element.innerHTML = html;
}

function setSafeText(element, userInput) {
  element.textContent = userInput;
}

function createUserCard(user) {
  return `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p>年齢: ${user.age}</p>
      <p>部署: ${user.department}</p>
    </div>
  `;
}

// 演習6: クラスの操作 - 解答
console.log('\n=== 演習6: クラスの操作 - 解答 ===');

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function hasClass(element, className) {
  return element.classList.contains(className);
}

function setActiveState(element, isActive) {
  element.classList.toggle('active', isActive);
}

// 演習7: 要素の削除 - 解答
console.log('\n=== 演習7: 要素の削除 - 解答 ===');

function removeElement(element) {
  element.remove();
}

function removeAllChildren(parent) {
  parent.innerHTML = '';
  // または
  // while (parent.firstChild) {
  //   parent.removeChild(parent.firstChild);
  // }
}

function removeElementsIf(selector, condition) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (condition(element)) {
      element.remove();
    }
  });
}

// 演習8: 実践的なDOM操作 - 解答
console.log('\n=== 演習8: 実践的なDOM操作 - 解答 ===');

function createTable(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !data.length) return;

  const table = document.createElement('table');

  // ヘッダーの作成
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // ボディの作成
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
  table.appendChild(tbody);

  container.appendChild(table);
}

function createForm(fields, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const form = document.createElement('form');

  fields.forEach((field) => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.type = field.type;
    }

    input.name = field.name;
    input.id = field.name;
    input.required = field.required;

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = '送信';
  form.appendChild(submitBtn);

  container.appendChild(form);
}

function createSearchFilter(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = '検索...';

  const itemList = document.createElement('ul');

  function renderItems(filteredItems) {
    itemList.innerHTML = '';
    filteredItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      itemList.appendChild(li);
    });
  }

  renderItems(items);

  searchInput.addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(query)
    );
    renderItems(filteredItems);
  });

  container.appendChild(searchInput);
  container.appendChild(itemList);
}

function createAccordion(sections, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const accordion = document.createElement('div');
  accordion.className = 'accordion';

  sections.forEach((section, index) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'accordion-section';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.textContent = section.title;
    header.style.cursor = 'pointer';
    header.style.padding = '10px';
    header.style.backgroundColor = '#f0f0f0';
    header.style.border = '1px solid #ddd';

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.textContent = section.content;
    content.style.padding = '10px';
    content.style.border = '1px solid #ddd';
    content.style.borderTop = 'none';
    content.style.display = index === 0 ? 'block' : 'none';

    header.addEventListener('click', function () {
      // すべてのコンテンツを閉じる
      accordion.querySelectorAll('.accordion-content').forEach((c) => {
        c.style.display = 'none';
      });

      // クリックされたセクションを開く
      content.style.display =
        content.style.display === 'none' ? 'block' : 'none';
    });

    sectionDiv.appendChild(header);
    sectionDiv.appendChild(content);
    accordion.appendChild(sectionDiv);
  });

  container.appendChild(accordion);
}

// 演習9: パフォーマンスの最適化 - 解答
console.log('\n=== 演習9: パフォーマンスの最適化 - 解答 ===');

function appendMultipleElements(parent, elements) {
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => fragment.appendChild(element));
  parent.appendChild(fragment);
}

const ElementCache = {
  cache: {},

  get(selector) {
    if (!this.cache[selector]) {
      this.cache[selector] = document.querySelector(selector);
    }
    return this.cache[selector];
  },

  clear() {
    this.cache = {};
  },
};

function safeOperation(selector, operation) {
  const element = document.querySelector(selector);
  if (element && typeof operation === 'function') {
    operation(element);
  }
}

// 演習10: デバッグとエラーハンドリング - 解答
console.log('\n=== 演習10: デバッグとエラーハンドリング - 解答 ===');

function elementExists(selector) {
  return document.querySelector(selector) !== null;
}

function safeSetInnerHTML(element, html) {
  try {
    element.innerHTML = html;
    return true;
  } catch (error) {
    console.error('HTML設定エラー:', error.message);
    return false;
  }
}

function logDOMOperation(operation, selector, details = {}) {
  console.log(`DOM操作: ${operation}`, {
    selector,
    timestamp: new Date().toISOString(),
    ...details,
  });
}

console.log('\n=== Day 6: DOM操作演習解答完了 ===');
