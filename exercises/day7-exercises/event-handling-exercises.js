// Day 7: イベントハンドリング演習

console.log('=== Day 7: イベントハンドリング演習 ===');

// 演習1: 基本的なイベントリスナー
console.log('\n=== 演習1: 基本的なイベントリスナー ===');

// 1-1. クリックイベントの追加
function addClickListener(elementId, callback) {
  // TODO: 指定されたIDの要素にクリックイベントリスナーを追加してください
  // const element = document.getElementById(elementId);
  // if (element) {
  //   element.addEventListener('click', callback);
  // }
}

// 1-2. 複数のイベントタイプを追加
function addMultipleListeners(element, events) {
  // TODO: 要素に複数のイベントリスナーを追加してください
  // events = { click: handler1, mouseover: handler2, ... }
  // Object.keys(events).forEach(eventType => {
  //   element.addEventListener(eventType, events[eventType]);
  // });
}

// 1-3. イベントリスナーの削除
function removeEventListener(element, eventType, handler) {
  // TODO: イベントリスナーを削除してください
  // element.removeEventListener(eventType, handler);
}

// 演習2: イベントオブジェクトの活用
console.log('\n=== 演習2: イベントオブジェクトの活用 ===');

// 2-1. マウス座標の取得
function handleMouseClick(event) {
  // TODO: クリック位置の座標を取得して表示してください
  // console.log(`クリック位置: X=${event.clientX}, Y=${event.clientY}`);
  // console.log(`対象要素: ${event.target.tagName}`);
}

// 2-2. キーボードイベントの処理
function handleKeyPress(event) {
  // TODO: 押されたキーの情報を表示してください
  // console.log(`押されたキー: ${event.key}`);
  // console.log(`キーコード: ${event.code}`);
  //
  // // 特定のキーの処理
  // if (event.key === 'Enter') {
  //   console.log('Enterキーが押されました');
  // }
}

// 2-3. 修飾キーの検出
function handleKeyWithModifiers(event) {
  // TODO: 修飾キー（Ctrl, Shift, Alt）の状態をチェックしてください
  // const modifiers = [];
  // if (event.ctrlKey) modifiers.push('Ctrl');
  // if (event.shiftKey) modifiers.push('Shift');
  // if (event.altKey) modifiers.push('Alt');
  // console.log(`修飾キー: ${modifiers.join(' + ')}`);
}

// 演習3: イベントの伝播制御
console.log('\n=== 演習3: イベントの伝播制御 ===');

// 3-1. イベントの伝播を停止
function stopEventPropagation(event) {
  // TODO: イベントの伝播を停止してください
  // event.stopPropagation();
  // console.log('イベント伝播を停止しました');
}

// 3-2. デフォルト動作を防ぐ
function preventDefaultAction(event) {
  // TODO: デフォルト動作を防いでください
  // event.preventDefault();
  // console.log('デフォルト動作を防ぎました');
}

// 3-3. イベント委譲の実装
function setupEventDelegation(
  parentSelector,
  childSelector,
  eventType,
  handler
) {
  // TODO: 親要素でイベント委譲を設定してください
  // const parent = document.querySelector(parentSelector);
  // if (parent) {
  //   parent.addEventListener(eventType, function(event) {
  //     if (event.target.matches(childSelector)) {
  //       handler(event);
  //     }
  //   });
  // }
}

// 演習4: フォームイベント
console.log('\n=== 演習4: フォームイベント ===');

// 4-1. 入力値の監視
function setupInputValidation(inputId, validator) {
  // TODO: 入力フィールドの値をリアルタイムで検証してください
  // const input = document.getElementById(inputId);
  // if (input) {
  //   input.addEventListener('input', function(event) {
  //     const isValid = validator(event.target.value);
  //     event.target.style.borderColor = isValid ? 'green' : 'red';
  //   });
  // }
}

// 4-2. フォーム送信の処理
function setupFormSubmission(formId, onSubmit) {
  // TODO: フォーム送信イベントを処理してください
  // const form = document.getElementById(formId);
  // if (form) {
  //   form.addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     const formData = new FormData(form);
  //     onSubmit(formData);
  //   });
  // }
}

// 4-3. フォーカスイベントの処理
function setupFocusEvents(inputSelector) {
  // TODO: フィールドのフォーカス取得/離脱時の処理を実装してください
  // document.querySelectorAll(inputSelector).forEach(input => {
  //   input.addEventListener('focus', function() {
  //     this.style.backgroundColor = '#f0f8ff';
  //   });
  //
  //   input.addEventListener('blur', function() {
  //     this.style.backgroundColor = '';
  //   });
  // });
}

// 演習5: 動的UI要素
console.log('\n=== 演習5: 動的UI要素 ===');

// 5-1. ドロップダウンメニューの実装
function createDropdown(buttonId, menuId) {
  // TODO: ドロップダウンメニューを実装してください
  // const button = document.getElementById(buttonId);
  // const menu = document.getElementById(menuId);
  //
  // if (button && menu) {
  //   button.addEventListener('click', function(event) {
  //     event.stopPropagation();
  //     menu.classList.toggle('show');
  //   });
  //
  //   document.addEventListener('click', function() {
  //     menu.classList.remove('show');
  //   });
  // }
}

// 5-2. タブシステムの実装
function setupTabSystem(tabContainerSelector) {
  // TODO: タブシステムを実装してください
  // const container = document.querySelector(tabContainerSelector);
  // if (container) {
  //   container.addEventListener('click', function(event) {
  //     if (event.target.classList.contains('tab')) {
  //       // すべてのタブを非アクティブに
  //       container.querySelectorAll('.tab').forEach(tab => {
  //         tab.classList.remove('active');
  //       });
  //
  //       // クリックされたタブをアクティブに
  //       event.target.classList.add('active');
  //
  //       // 対応するコンテンツを表示
  //       const targetId = event.target.dataset.tab;
  //       showTabContent(targetId);
  //     }
  //   });
  // }
}

// 5-3. モーダルダイアログの実装
function setupModal(modalId, openButtonId, closeButtonId) {
  // TODO: モーダルダイアログを実装してください
  // const modal = document.getElementById(modalId);
  // const openBtn = document.getElementById(openButtonId);
  // const closeBtn = document.getElementById(closeButtonId);
  //
  // if (openBtn) {
  //   openBtn.addEventListener('click', () => {
  //     modal.style.display = 'block';
  //   });
  // }
  //
  // if (closeBtn) {
  //   closeBtn.addEventListener('click', () => {
  //     modal.style.display = 'none';
  //   });
  // }
  //
  // // Escapeキーで閉じる
  // document.addEventListener('keydown', (event) => {
  //   if (event.key === 'Escape' && modal.style.display === 'block') {
  //     modal.style.display = 'none';
  //   }
  // });
}

// 演習6: 高度なイベント処理
console.log('\n=== 演習6: 高度なイベント処理 ===');

// 6-1. デバウンス処理の実装
function debounce(func, delay) {
  // TODO: デバウンス関数を実装してください
  // let timeoutId;
  // return function(...args) {
  //   clearTimeout(timeoutId);
  //   timeoutId = setTimeout(() => func.apply(this, args), delay);
  // };
}

// 6-2. スロットル処理の実装
function throttle(func, delay) {
  // TODO: スロットル関数を実装してください
  // let lastCall = 0;
  // return function(...args) {
  //   const now = Date.now();
  //   if (now - lastCall >= delay) {
  //     lastCall = now;
  //     func.apply(this, args);
  //   }
  // };
}

// 6-3. リサイズイベントの最適化
function setupOptimizedResize(handler) {
  // TODO: 最適化されたリサイズイベントハンドラーを設定してください
  // const throttledHandler = throttle(handler, 100);
  // window.addEventListener('resize', throttledHandler);
}

// 演習7: カスタムイベント
console.log('\n=== 演習7: カスタムイベント ===');

// 7-1. カスタムイベントの作成
function createCustomEvent(eventName, data) {
  // TODO: カスタムイベントを作成してください
  // return new CustomEvent(eventName, {
  //   detail: data,
  //   bubbles: true,
  //   cancelable: true
  // });
}

// 7-2. カスタムイベントの発火
function dispatchCustomEvent(element, eventName, data) {
  // TODO: カスタムイベントを発火してください
  // const customEvent = createCustomEvent(eventName, data);
  // element.dispatchEvent(customEvent);
}

// 7-3. カスタムイベントのリスナー
function listenToCustomEvent(element, eventName, handler) {
  // TODO: カスタムイベントのリスナーを追加してください
  // element.addEventListener(eventName, handler);
}

// 演習8: 実践的なイベント処理
console.log('\n=== 演習8: 実践的なイベント処理 ===');

// 8-1. 動的リストの操作
function setupDynamicList(listId) {
  // TODO: 動的リストの操作を実装してください
  // - 項目の追加・削除
  // - 項目のクリックイベント
  // - ドラッグ&ドロップ（オプション）

  const list = document.getElementById(listId);
  if (!list) return;

  // TODO: ここに実装してください
}

// 8-2. 検索・フィルタ機能
function setupSearchFilter(searchInputId, itemsSelector) {
  // TODO: 検索・フィルタ機能を実装してください
  // const searchInput = document.getElementById(searchInputId);
  // const debouncedFilter = debounce(function(query) {
  //   const items = document.querySelectorAll(itemsSelector);
  //   items.forEach(item => {
  //     const text = item.textContent.toLowerCase();
  //     const matches = text.includes(query.toLowerCase());
  //     item.style.display = matches ? 'block' : 'none';
  //   });
  // }, 300);
  //
  // searchInput.addEventListener('input', function(event) {
  //   debouncedFilter(event.target.value);
  // });
}

// 8-3. インタラクティブなフォーム
function setupInteractiveForm(formId) {
  // TODO: インタラクティブなフォームを実装してください
  // - リアルタイムバリデーション
  // - 条件付きフィールド表示
  // - プログレスバー

  const form = document.getElementById(formId);
  if (!form) return;

  // TODO: ここに実装してください
}

// 演習9: パフォーマンス最適化
console.log('\n=== 演習9: パフォーマンス最適化 ===');

// 9-1. イベントリスナーの管理クラス
class EventManager {
  constructor() {
    this.listeners = [];
  }

  add(element, eventType, handler, options = {}) {
    // TODO: イベントリスナーを追加し、管理リストに記録してください
    // element.addEventListener(eventType, handler, options);
    // this.listeners.push({ element, eventType, handler, options });
  }

  removeAll() {
    // TODO: すべてのイベントリスナーを削除してください
    // this.listeners.forEach(({ element, eventType, handler }) => {
    //   element.removeEventListener(eventType, handler);
    // });
    // this.listeners = [];
  }
}

// 9-2. パッシブリスナーの使用
function setupPassiveListeners() {
  // TODO: パッシブリスナーを設定してください
  // document.addEventListener('scroll', handleScroll, { passive: true });
  // document.addEventListener('touchstart', handleTouch, { passive: true });
}

// 演習10: エラーハンドリング
console.log('\n=== 演習10: エラーハンドリング ===');

// 10-1. 安全なイベントリスナー追加
function safeAddEventListener(selector, eventType, handler) {
  // TODO: 要素の存在確認をしてからイベントリスナーを追加してください
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

// 10-2. エラーハンドリング付きイベントハンドラー
function createSafeHandler(handler, onError) {
  // TODO: エラーハンドリング付きのイベントハンドラーを作成してください
  return function (event) {
    try {
      handler(event);
    } catch (error) {
      console.error('イベントハンドラーエラー:', error.message);
      if (onError) onError(error, event);
    }
  };
}

// 10-3. デバッグ用イベントロガー
function createEventLogger(eventTypes) {
  // TODO: イベントのログを記録する機能を実装してください
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
  // すべてのタブコンテンツを非表示に
  document.querySelectorAll('.tab-content').forEach((content) => {
    content.style.display = 'none';
  });

  // 指定されたタブコンテンツを表示
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// バリデーション関数の例
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateRequired(value) {
  return value && value.trim().length > 0;
}

console.log('\n=== Day 7: イベントハンドリング演習完了 ===');
console.log(
  '実際のイベント処理を確認するには、HTMLファイルと組み合わせて使用してください。'
);
