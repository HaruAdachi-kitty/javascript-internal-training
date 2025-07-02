// Day 7: イベントハンドリング演習 - 解答

console.log('=== Day 7: イベントハンドリング演習 - 解答 ===');

// 演習1: 基本的なイベントリスナー - 解答
console.log('\n=== 演習1: 基本的なイベントリスナー - 解答 ===');

function addClickListener(elementId, callback) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', callback);
  }
}

function addMultipleListeners(element, events) {
  Object.keys(events).forEach((eventType) => {
    element.addEventListener(eventType, events[eventType]);
  });
}

function removeEventListener(element, eventType, handler) {
  element.removeEventListener(eventType, handler);
}

// 演習2: イベントオブジェクトの活用 - 解答
console.log('\n=== 演習2: イベントオブジェクトの活用 - 解答 ===');

function handleMouseClick(event) {
  console.log(`クリック位置: X=${event.clientX}, Y=${event.clientY}`);
  console.log(`対象要素: ${event.target.tagName}`);
}

function handleKeyPress(event) {
  console.log(`押されたキー: ${event.key}`);
  console.log(`キーコード: ${event.code}`);

  if (event.key === 'Enter') {
    console.log('Enterキーが押されました');
  }
}

function handleKeyWithModifiers(event) {
  const modifiers = [];
  if (event.ctrlKey) modifiers.push('Ctrl');
  if (event.shiftKey) modifiers.push('Shift');
  if (event.altKey) modifiers.push('Alt');
  console.log(`修飾キー: ${modifiers.join(' + ')}`);
}

// 演習3: イベントの伝播制御 - 解答
console.log('\n=== 演習3: イベントの伝播制御 - 解答 ===');

function stopEventPropagation(event) {
  event.stopPropagation();
  console.log('イベント伝播を停止しました');
}

function preventDefaultAction(event) {
  event.preventDefault();
  console.log('デフォルト動作を防ぎました');
}

function setupEventDelegation(
  parentSelector,
  childSelector,
  eventType,
  handler
) {
  const parent = document.querySelector(parentSelector);
  if (parent) {
    parent.addEventListener(eventType, function (event) {
      if (event.target.matches(childSelector)) {
        handler(event);
      }
    });
  }
}

// 演習4: フォームイベント - 解答
console.log('\n=== 演習4: フォームイベント - 解答 ===');

function setupInputValidation(inputId, validator) {
  const input = document.getElementById(inputId);
  if (input) {
    input.addEventListener('input', function (event) {
      const isValid = validator(event.target.value);
      event.target.style.borderColor = isValid ? 'green' : 'red';
    });
  }
}

function setupFormSubmission(formId, onSubmit) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      onSubmit(formData);
    });
  }
}

function setupFocusEvents(inputSelector) {
  document.querySelectorAll(inputSelector).forEach((input) => {
    input.addEventListener('focus', function () {
      this.style.backgroundColor = '#f0f8ff';
    });

    input.addEventListener('blur', function () {
      this.style.backgroundColor = '';
    });
  });
}

// 演習5: 動的UI要素 - 解答
console.log('\n=== 演習5: 動的UI要素 - 解答 ===');

function createDropdown(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  if (button && menu) {
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', function () {
      menu.classList.remove('show');
    });
  }
}

function setupTabSystem(tabContainerSelector) {
  const container = document.querySelector(tabContainerSelector);
  if (container) {
    container.addEventListener('click', function (event) {
      if (event.target.classList.contains('tab')) {
        // すべてのタブを非アクティブに
        container.querySelectorAll('.tab').forEach((tab) => {
          tab.classList.remove('active');
        });

        // クリックされたタブをアクティブに
        event.target.classList.add('active');

        // 対応するコンテンツを表示
        const targetId = event.target.dataset.tab;
        showTabContent(targetId);
      }
    });
  }
}

function setupModal(modalId, openButtonId, closeButtonId) {
  const modal = document.getElementById(modalId);
  const openBtn = document.getElementById(openButtonId);
  const closeBtn = document.getElementById(closeButtonId);

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Escapeキーで閉じる
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
}

// 演習6: 高度なイベント処理 - 解答
console.log('\n=== 演習6: 高度なイベント処理 - 解答 ===');

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

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

function setupOptimizedResize(handler) {
  const throttledHandler = throttle(handler, 100);
  window.addEventListener('resize', throttledHandler);
}

// 演習7: カスタムイベント - 解答
console.log('\n=== 演習7: カスタムイベント - 解答 ===');

function createCustomEvent(eventName, data) {
  return new CustomEvent(eventName, {
    detail: data,
    bubbles: true,
    cancelable: true,
  });
}

function dispatchCustomEvent(element, eventName, data) {
  const customEvent = createCustomEvent(eventName, data);
  element.dispatchEvent(customEvent);
}

function listenToCustomEvent(element, eventName, handler) {
  element.addEventListener(eventName, handler);
}

// 演習8: 実践的なイベント処理 - 解答
console.log('\n=== 演習8: 実践的なイベント処理 - 解答 ===');

function setupDynamicList(listId) {
  const list = document.getElementById(listId);
  if (!list) return;

  // イベント委譲で項目のクリックを処理
  list.addEventListener('click', function (event) {
    if (event.target.classList.contains('list-item')) {
      console.log('項目がクリックされました:', event.target.textContent);
    }

    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
      console.log('項目が削除されました');
    }
  });
}

function setupSearchFilter(searchInputId, itemsSelector) {
  const searchInput = document.getElementById(searchInputId);
  const debouncedFilter = debounce(function (query) {
    const items = document.querySelectorAll(itemsSelector);
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      const matches = text.includes(query.toLowerCase());
      item.style.display = matches ? 'block' : 'none';
    });
  }, 300);

  searchInput.addEventListener('input', function (event) {
    debouncedFilter(event.target.value);
  });
}

function setupInteractiveForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  // リアルタイムバリデーション
  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', function () {
      validateField(this);
    });
  });

  // フォーム送信
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm(form)) {
      console.log('フォーム送信成功');
    } else {
      console.log('バリデーションエラー');
    }
  });
}

// 演習9: パフォーマンス最適化 - 解答
console.log('\n=== 演習9: パフォーマンス最適化 - 解答 ===');

class EventManager {
  constructor() {
    this.listeners = [];
  }

  add(element, eventType, handler, options = {}) {
    element.addEventListener(eventType, handler, options);
    this.listeners.push({ element, eventType, handler, options });
  }

  removeAll() {
    this.listeners.forEach(({ element, eventType, handler }) => {
      element.removeEventListener(eventType, handler);
    });
    this.listeners = [];
  }
}

function setupPassiveListeners() {
  document.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('touchstart', handleTouch, { passive: true });
}

// 演習10: エラーハンドリング - 解答
console.log('\n=== 演習10: エラーハンドリング - 解答 ===');

function safeAddEventListener(selector, eventType, handler) {
  try {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener(eventType, handler);
      return true;
    }
    console.warn(`要素が見つかりません: ${selector}`);
    return false;
  } catch (error) {
    console.error('イベントリスナー追加エラー:', error.message);
    return false;
  }
}

function createSafeHandler(handler, onError) {
  return function (event) {
    try {
      handler(event);
    } catch (error) {
      console.error('イベントハンドラーエラー:', error.message);
      if (onError) onError(error, event);
    }
  };
}

function createEventLogger(eventTypes) {
  eventTypes.forEach((eventType) => {
    document.addEventListener(eventType, function (event) {
      console.log(`イベント: ${eventType}`, {
        target: event.target.tagName,
        timestamp: new Date().toISOString(),
        x: event.clientX,
        y: event.clientY,
      });
    });
  });
}

// ヘルパー関数
function showTabContent(tabId) {
  document.querySelectorAll('.tab-content').forEach((content) => {
    content.style.display = 'none';
  });

  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

function validateField(field) {
  const value = field.value.trim();
  const isValid = value.length > 0;
  field.style.borderColor = isValid ? 'green' : 'red';
  return isValid;
}

function validateForm(form) {
  const fields = form.querySelectorAll('input[required]');
  let allValid = true;

  fields.forEach((field) => {
    if (!validateField(field)) {
      allValid = false;
    }
  });

  return allValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateRequired(value) {
  return value && value.trim().length > 0;
}

function handleScroll() {
  console.log('スクロール:', window.pageYOffset);
}

function handleTouch() {
  console.log('タッチ開始');
}

console.log('\n=== Day 7: イベントハンドリング演習解答完了 ===');
